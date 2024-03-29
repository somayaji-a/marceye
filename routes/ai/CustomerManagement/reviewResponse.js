
const express = require('express');
const openai = require('../../middlewares/openai');

let app = express.Router()

app.post('/CustomerManagement/reviewResponse', async (req, res, next) => {
	try {
		let { review } = req.body

	let prompt = ``

	let inputRaw = `\n${review}\n\n###\n\n`
	prompt += inputRaw

	const gptResponse = await openai.createChatCompletion({
		model: 'gpt-4',
		messages: [{"role": "system", "content": "You are an e-commerce AI assistant that helps users generate responses to customer reviews on your products. Write a 50 word response to a review that was received on the ecommerce store from a purchaser. The review may be positive or negative. Please thank the purchaser for their feedback, address any concerns they may have mentioned, and offer solutions if they have encountered any issues. Express your appreciation for their business and encourage them to shop with you again in the future. Make the tone conversational and semi-formal. Do not suggest a refund, but offer to address any specific concerns in a direct message. If the review is hostile, respond in a neutral and disarming tone. Do not refer to any pictures. \n\n"}, {"role":"user", "content": prompt}],
		frequency_penalty: 1,
		presence_penalty: 1,
		n: 1,
		user: req.user._id,
		stream: false,
		stop: ["###", "<|endoftext|>", ],
	});

	let output = `${gptResponse.data.choices[0].message.content}`

	// // remove the first character from output
	// output = output.substring(1, output.length)

	// If the output string ends with one or more hashtags, remove all of them
	if (output.endsWith('"')) {
		output = output.substring(0, output.length - 1)
	}

	// If the output string ends with one or more hashtags, remove all of them
	if (output.endsWith('"')) {
		output = output.substring(0, output.length - 1)
	}

	// remove a single new line at the end of output if there is one
	if (output.endsWith('\n')) {
		output = output.substring(0, output.length - 1)
	}

	req.locals.input = prompt
	req.locals.inputRaw = inputRaw
	req.locals.output = output
	console.log(output)
	next()

	} catch (err){
		console.log(err.response)
		console.log(err.data)
		console.log(err.message)
	}
	
  })

module.exports = app