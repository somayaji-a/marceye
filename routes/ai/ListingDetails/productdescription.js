
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

	if(currentPrompt === "Product Description Details"){
		prompt = `Write a unique and compelling product description for a ${title} that includes relevant keywords that have high search volume and low competition on search engines. The keywords used in the product description should accurately describe the product's features and benefits while also being specific and relevant to the target audience. The description should be at least 300 words and should highlight the product's unique features and benefits while also incorporating persuasive language to encourage purchase. Shoppers will only see the first few lines of your description at first, so please ensure the first few lines are compelling and informative. At the end, the description should thank the shopper for choosing my store: ${organization}. The desciption should also consider the following specific details about my product: ${details}
		`
	 

	  inputRaw = `\n###`
	  prompt += inputRaw
	}
  
	
  
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
		stop: ["###", "<|endoftext|>","JOB AD","TEXT" ],
	});
  
	let output = `${gptResponse.data.choices[0].text}`

	req.locals.input = prompt
	req.locals.inputRaw = inputRaw
	req.locals.output = output

	next()
	
  })

  module.exports = app