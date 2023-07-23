
const express = require('express');
const openai = require('../../middlewares/openai');

let app = express.Router()

// input tokens: 150
// input characters: 600
// output tokens: 50
// output characters: 200

app.post('/ShopManagement/privacyPolicy', async (req, res, next) => {
	let { shop, details, contact} = req.body
  
	let prompt = ""
	let inputRaw = ""

		prompt = `` 

	 
		inputRaw = `Shop Name: ${shop}\n` + 
		`${details ? `Unique Policy Details: ${details}\n` : ``}` + 
		`${contact ? `Contact Information: ${contact}\n` : ``}` +
		`\n\n###\n\n`

	  prompt += inputRaw
	
  
	  const gptResponse = await openai.createChatCompletion({
		model: 'gpt-4',
		messages: [{"role": "system", "content": "You are an e-commerce AI assistant that helps users generate a detailed GPDR compliant Privacy Policy with standard wording for an e-commerce store from the store details the user provides.\n\n"}, {"role":"user", "content": prompt}],
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