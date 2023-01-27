
const express = require('express');
const openai = require('../middlewares/openai');

let app = express.Router()

app.post('/producttitle', async (req, res, next) => {
	try {
		let { description } = req.body

	let prompt = `You are a seller of e-commerce items on Etsy. Generate a product title that is optimized for the Etsy search algoirthm, but does not contain the word Etsy in it. The product is a  `

	let inputRaw = `${description}` + `\n` // here is where people enter stuff
	prompt += inputRaw

	const gptResponse = await openai.createCompletion({
		model: 'text-davinci-003',
		prompt,
		max_tokens: 250,
		temperature: 1,
		top_p: 1,
		frequency_penalty: 0,
		presence_penalty: 0,
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