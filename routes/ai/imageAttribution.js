
const express = require('express');
const openai = require('../middlewares/openai');

let app = express.Router()

// input tokens: 150
// input characters: 600
// output tokens: 50
// output characters: 200

app.post('/imageAttribution', async (req, res, next) => {
	let { link } = req.body
  
	let prompt = ""
	let inputRaw = ""
	prompt = `Generate an attribution line for an image file that complies with the license shown at this link: `

	inputRaw = `${link}\n###\n`
	prompt += inputRaw
	
  
	
  
	const gptResponse = await openai.createCompletion({
		model: 'text-davinci-003',
		prompt,
		max_tokens: 250,
		temperature: 0.5,
		top_p: 1,
		frequency_penalty: 0,
		presence_penalty: 0,
		n: 1,
		best_of: 1,
		user: req.user._id,
		stream: false,
		stop: ["###", "<|endoftext|>"],
	});
  
	let output = `${gptResponse.data.choices[0].text}`

	req.locals.input = prompt
	req.locals.inputRaw = inputRaw
	req.locals.output = output

	next()
	
  })

  module.exports = app