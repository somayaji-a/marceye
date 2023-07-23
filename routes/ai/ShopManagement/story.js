
const express = require('express');
const openai = require('../../middlewares/openai');

let app = express.Router()

app.post('/ShopManagement/story', async (req, res, next) => {
	try {
		let { name, why, what, mission } = req.body

	let prompt = ``

	let inputRaw = `Shop name:${name}\nOwner values and backstory:${why}\nProduct types being sold:${what}\nMission statement:${mission}\n\n###\n\n`
	prompt += inputRaw
  
	const gptResponse = await openai.createChatCompletion({
		model: 'gpt-4',
		messages: [{"role": "system", "content": "You are an e-commerce AI assistant that helps users generate a Story Headline and a no more than 250 word compelling story for the 'story' section of an Etsy shop, which describes the reason behind the creation of the shop. The story should convey an emotional and personal connection to the products being sold, and inspire trust in potential customers. Please include information about what inspired the shop, the values that the shop stands for, and any personal experiences that relate to the creation of the products. The story should be engaging, thought-provoking, and encourage customers to form a connection with the shop and the products being sold.\n\n"}, {"role":"user", "content": prompt}],
		frequency_penalty: 1,
		presence_penalty: 1,
		n: 1,
		user: req.user._id,
		stream: false,
		stop: ["###", "<|endoftext|>", ],
	});

	let output = `${gptResponse.data.choices[0].message.content}`


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
	// console.log(output)
	next()

	} catch (err){
		console.log(err.response)
		console.log(err.data)
		console.log(err.message)
	}
	
  })

module.exports = app