
const express = require('express');
const openai = require('../middlewares/openai');

let app = express.Router()

// input tokens: 150
// input characters: 600
// output tokens: 50
// output characters: 200

app.post('/business/policydocument', async (req, res, next) => {
	let { content, currentPrompt, title, organization, details} = req.body
  
	let prompt = ""
	let inputRaw = ""

	if(currentPrompt === "Policy Document Details"){
		prompt = `Create a detailed Policy Document from the following details:\n###`
	 

	  inputRaw = `TITLE: ${title}\nORGANIZATION: ${organization}\nDETAILS: ${details}\nJOB AD:\n`
	  prompt += inputRaw
	}
  
	
  
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
		stop: ["###", "<|endoftext|>","JOB AD","TEXT" ],
	});
  
	let output = `${gptResponse.data.choices[0].text}`

	req.locals.input = prompt
	req.locals.inputRaw = inputRaw
	req.locals.output = output

	next()
	
  })

  module.exports = app