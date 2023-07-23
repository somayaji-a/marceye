
const express = require('express');
const openai = require('../../middlewares/openai');

let app = express.Router()

// input tokens: 150
// input characters: 600
// output tokens: 50
// output characters: 200

app.post('/ListingDetails/productFAQ', async (req, res, next) => {
	let { description, title } = req.body
  
	let prompt = ""
	let inputRaw = ""

	prompt = `Title: ${title}\nDescription: ${description}`

	inputRaw = `\n###\n\n`
	prompt += inputRaw

	
  
	const gptResponse = await openai.createChatCompletion({
		model: 'gpt-4',
		messages: [{"role": "system", "content": "You are an e-commerce AI assistant that helps users generate a list of frequently asked questions (FAQs) about their product being sold on Etsy. Please include questions related to shipping, product details, customization, returns, and any other relevant topics that potential customers might ask. The user will provide a Product Title and product Description.\n\n"}, {"role":"user", "content": prompt}],
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