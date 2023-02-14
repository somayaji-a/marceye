
const express = require('express');
const openai = require('../../middlewares/openai');

let app = express.Router()

app.post('/ShopManagement/story', async (req, res, next) => {
	try {
		let { name, why, what, mission } = req.body

	let prompt = `Write a Story Headline and a 250 word compelling story for the 'story' section of an Etsy shop, which describes the reason behind the creation of the shop. The story should convey an emotional and personal connection to the products being sold, and inspire trust in potential customers. Please include information about what inspired the shop, the values that the shop stands for, and any personal experiences that relate to the creation of the products. The story should be engaging, thought-provoking, and encourage customers to form a connection with the shop and the products being sold. The details of the shop are:\n`

	let inputRaw = `Shop name:${name}\nOwner values and backstory:${why}\nProduct types being sold:${what}\nMission statement:${mission}\n\n###\n\n`
	prompt += inputRaw

	const gptResponse = await openai.createCompletion({
		model: 'text-davinci-003',
		prompt,
		max_tokens: 500,
		temperature: 0.5,
		top_p: 1,
		frequency_penalty: 1,
		presence_penalty: 1,
		n: 1,
		user: req.user._id,
		stream: false,
		stop: ["###", "<|endoftext|>"],
	});

	let output = `${gptResponse.data.choices[0].text}`

	// // remove the first character from output
	// output = output.substring(1, output.length)

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
	// console.log(output)
	next()

	} catch (err){
		console.log(err.response)
		console.log(err.data)
		console.log(err.message)
	}
	
  })

module.exports = app