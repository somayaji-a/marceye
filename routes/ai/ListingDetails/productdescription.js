
const express = require('express');
const openai = require('../../middlewares/openai');

let app = express.Router()

// input tokens: 150
// input characters: 600
// output tokens: 50
// output characters: 200

app.post('/ListingDetails/productdescription', async (req, res, next) => {
	let { currentPrompt, title, organization, details} = req.body
  
	let prompt = ""
	let inputRaw = ""

		prompt = `Title: ${title}\n Organization: ${organization}\n Details: ${details}`

	  inputRaw = `\n###`
	  prompt += inputRaw
  
	const gptResponse = await openai.createChatCompletion({
		model: 'gpt-4',
		messages: [{"role": "system", "content": "You are an e-commerce AI assistant that helps users generate a unique and compelling product description given a product title that includes relevant keywords that have high search volume and low competition on search engines. The keywords used in the product description should accurately describe the product's features and benefits while also being specific and relevant to the target audience. The description should be at least 300 words but not more than 500 and should highlight the product's unique features and benefits while also incorporating persuasive language to encourage purchase. Shoppers will only see the first few lines of the description at first, so  ensure the first few lines are compelling and informative. At the end, the description should thank the shopper for choosing the store that is identified by the user (Organization). The desciption should also consider the specific details about the product specified by the user. Where it makes more sense, use lists and bullets instead of full paragraphs."}, {"role":"user", "content": prompt}],
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