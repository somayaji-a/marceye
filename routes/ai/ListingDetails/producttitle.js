
const express = require('express');
const openai = require('../../middlewares/openai');

let app = express.Router()

app.post('/ListingDetails/producttitle', async (req, res, next) => {
	try {
		let { description } = req.body

	let prompt = `Please generate a title for a ${description} that is attention-grabbing, accurately describes the product's features and benefits, and includes relevant keywords with high search volume and low competition on search engines. The title should be no more than 60 characters long and should be optimized for both search engines and human readers.  `

	let inputRaw = `\n###` // here is where people enter stuff
	prompt += inputRaw

	const gptResponse = await openai.createCompletion({
		model: 'text-davinci-003',
		prompt,
		max_tokens: 100,
		temperature: 0.5,
		top_p: 1,
		frequency_penalty: 1,
		presence_penalty: 1,
		n: 1,
		user: req.user._id,
		stream: false,
		stop: ["###", "<|endoftext|>", ],
	});

	let output = `${gptResponse.data.choices[0].text}`

	// remove the first character from output
	output = output.substring(1, output.length)

	// If the output string ends with one or more hashtags, remove all of them
	if (output.endsWith('"')) {
		output = output.substring(0, output.length - 1)
	}

	// If the output string ends with one or more hashtags, remove all of them
	if (output.endsWith('"')) {
		output = output.substring(0, output.length - 1)
	}

	// remove a single new line at the end of output if there is one
	if (output.endsWith('\n')) {
		output = output.substring(0, output.length - 1)
	}

	req.locals.input = prompt
	req.locals.inputRaw = inputRaw
	req.locals.output = output
	console.log(output)
	next()

	} catch (err){
		console.log(err.response)
		console.log(err.data)
		console.log(err.message)
	}
	
  })

module.exports = app