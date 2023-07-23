
const express = require('express');
const openai = require('../../middlewares/openai');

let app = express.Router()

// input tokens: 150
// input characters: 600
// output tokens: 50
// output characters: 200

app.post('/ListingDetails/imageAttribution', async (req, res, next) => {
	let { link } = req.body
  
	let prompt = ""
	let inputRaw = ""
	prompt = `URL: `

	inputRaw = `${link}\n###\n`
	prompt += inputRaw
	
  
	
  
	const gptResponse = await openai.createChatCompletion({
		model: 'gpt-4',
		messages: [{"role": "system", "content": "You are an e-commerce AI assistant that helps users generate an attribution line for an image file that complies with the license provided on the webpage of the url the user provides..\n\n"}, {"role":"user", "content": prompt}],
		frequency_penalty: 1,
		presence_penalty: 1,
		n: 1,
		user: req.user._id,
		stream: false,
		stop: ["###", "<|endoftext|>", ],
	});

	let output = `${gptResponse.data.choices[0].message.content}`

	req.locals.input = prompt
	req.locals.inputRaw = inputRaw
	req.locals.output = output

	next()
	
  })

  module.exports = app