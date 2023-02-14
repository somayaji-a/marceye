
const express = require('express');
const openai = require('../middlewares/openai');

let app = express.Router()

// input tokens: 150
// input characters: 600
// output tokens: 50
// output characters: 200

app.post('/productFAQ', async (req, res, next) => {
	let { description, title } = req.body
  
	let prompt = ""
	let inputRaw = ""

	prompt = `Generate a list of frequently asked questions (FAQs) about ${title} being sold on Etsy. Please include questions related to shipping, product details, customization, returns, and any other relevant topics that potential customers might ask. The product description is ${description}.\n\n`
	

	inputRaw = `\n###\n\n`
	prompt += inputRaw

  
	
  
	const gptResponse = await openai.createCompletion({
		model: 'text-davinci-003',
		prompt,
		max_tokens: 500,
		temperature: 0,
		top_p: 1,
		frequency_penalty: 1,
		presence_penalty: 1,
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