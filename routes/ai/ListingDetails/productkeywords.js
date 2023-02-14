
const express = require('express');
const openai = require('../../middlewares/openai');

let app = express.Router()

// input tokens: 150
// input characters: 600
// output tokens: 50
// output characters: 200

app.post('/ListingDetails/productkeywords', async (req, res, next) => {
	let { currentPrompt, title, length} = req.body
  
	let prompt = ""
	let inputRaw = ""

	if(currentPrompt === "Product Detail"){
		prompt = `Please generate a list of 10 relevant keywords for ${title} that have high search volume and low competition on search engines. The keywords should accurately describe the product's features and benefits while also being specific and relevant to the target audience. The keywords should have a maximum length of ${length} characters each and should not reuse words that were used in the other keywords.`
	 

	  inputRaw = `\n###\n`
	  prompt += inputRaw
	}
  
	
  
	const gptResponse = await openai.createCompletion({
		model: 'text-davinci-003',
		prompt,
		max_tokens: 250,
		temperature: 0,
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