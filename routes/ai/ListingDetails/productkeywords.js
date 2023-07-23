
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

	prompt = `Title: ${title}\n Length: ${length}.`
	 
	  inputRaw = `\n###\n`
	  prompt += inputRaw

	
	const gptResponse = await openai.createChatCompletion({
		model: 'gpt-4',
		messages: [{"role": "system", "content": "You are an e-commerce AI assistant that helps users generate a list of 10 relevant keywords for a given description that have high search volume and low competition on search engines. The keywords should accurately describe the product's features and benefits while also being specific and relevant to the target audience. The keywords should have a maximum length of characters as specified by the user and should not reuse words that were used in the other keywords."}, {"role":"user", "content": prompt}],
		// max_tokens: 100,
		// temperature: 0.5,
		// top_p: 1,
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