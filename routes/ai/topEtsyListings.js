
const express = require('express');
// const openai = require('../middlewares/openai');
const fetch = require("node-fetch");

let app = express.Router()

function getTop5(jsonObj, attr) {
	let jsonArray = []
	for (var listing_id in jsonObj) { 
		jsonArray.push([listing_id, jsonObj[listing_id]]);
	}
	jsonArray.sort((a, b) => b[attr] - a[attr]);
	let smallJsonArray =  jsonArray.slice(0, 5);
	let objSorted = {}
	smallJsonArray.forEach(function(item){
    objSorted[item[0]]=item[1]

});
return objSorted
  }

app.post('/topEtsyListings', async (req, res, next) => {
	let { search } = req.body

	const listingUrl = 'https://openapi.etsy.com/v3/application/listings/active?' + new URLSearchParams({
		limit: 100,
		keywords: search,
	})
  
	// const listingUrl = 'https://openapi.etsy.com/v3/application/shops/24931596/receipts'

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
		// console.log(data)
		//let dataArray = [data]

		// dataArray.sort(function(a, b){
		// 	return b.views - a.views
		// })

		// let finalObj = {}

		// for(let i = 0; i < dataArray.length; i++ ) {
		// 	Object.assign(finalObj, dataArray[i]);
		//   }

		// let sortedData = dataArray.sort((a, b) => b['views'] - a ['views'])
		let sortedData = getTop5(data, 'views')
		console.log(sortedData)
		//compiling data into viewbale format
		
		// let output = "Listing 1:"

		output = sortedData
		// req.locals.input = 'nonCredit'
		// req.locals.inputRaw = ' '
		req.locals.output = output

		next()
	} else {
		console.log('Fail');
		// res.send("oops");
	}


	
  })

  module.exports = app