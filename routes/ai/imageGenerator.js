
const express = require('express');
const openai = require('../middlewares/openai');

let app = express.Router()

// input tokens: 150
// input characters: 600
// output tokens: 50
// output characters: 200

app.post('/imageGenerator', async (req, res, next) => {
	let { description } = req.body
  
	let prompt = ""
	let inputRaw = ""
	// prompt = `Generate an attribution line for an image file that complies with the license shown at this link: `

	// inputRaw = `${link}\n###\n`
	prompt = `A wide angle shot of ${description} rendered as a real life photo in a modern living room with minimalist furniture and bright lighting.`
	
  
	
  
	const gptResponse = await openai.createImage({
		prompt,
		n: 1,
		size: "1024x1024",
	});
//   console.log(gptResponse.data.data[0].url)
	let output = `${gptResponse.data.data[0].url}`

	req.locals.input = prompt
	req.locals.inputRaw = inputRaw
	req.locals.output = output

	next()
	
  })

  module.exports = app