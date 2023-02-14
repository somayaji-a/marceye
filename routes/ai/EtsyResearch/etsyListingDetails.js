
const express = require('express');
// const openai = require('../middlewares/openai');
const fetch = require("node-fetch");

let app = express.Router()

function getListingId(url) {
	const parts = url.split("/");
	return parts[parts.length - 2];
  }

app.post('/etsyListingDetails', async (req, res, next) => {
	let { link } = req.body


	const listingId = getListingId(link);
	const listingUrl = 'https://api.etsy.com/v3/application/listings/' + listingId
  
	const requestOptions = {
		'method': 'GET',
		'headers': {
			'x-api-key': process.env.ETSY_API_KEY,
		},
	};

	const response = await fetch(
		listingUrl,
		requestOptions
	);

	if (response.ok) {
		const data = await response.json();

		console.log(data)
		//compiling data into viewbale format
		
		let output = 'Product Title:\n'
		output += data.title
		output += '\n\n'
		output += 'Product Description:\n'
		output += data.description
		output += '\n\n'
		output += 'Number of favourites: '
		output += data.num_favorers
		output += '\n\n'
		output += 'Numer of views: '
		output += data.views
		output += '\n\n'
		output += 'Tags:\n'
		output += data.tags.join("\n")
		
		// req.locals.input = 'nonCredit'
		// req.locals.inputRaw = ' '
		req.locals.output = output

		next()
	} else {
		console.log('failure');
		// res.send("oops");
	}


	
  })

  module.exports = app