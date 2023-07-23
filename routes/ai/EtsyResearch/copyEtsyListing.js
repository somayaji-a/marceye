const express = require('express');
const fetch = require("node-fetch");

let app = express.Router()

function getListingId(url) {
	const parts = url.split("/");
	return parts[parts.length - 2];
}

app.post('/copyEtsyListing', async (req, res, next) => {
	let { url, auth } = req.body

	const listingId = getListingId(url);
	const listingUrl = `https://openapi.etsy.com/v3/application/listings/${listingId}`;

	const requestOptions = {
		'method': 'GET',
		'headers': {
			'x-api-key': process.env.ETSY_API_KEY,
		},
	};

	let response = await fetch(listingUrl, requestOptions);

	if (!response.ok) {
		console.log('Failed to get the listing');
		res.send("Failed to get the listing");
		return;
	}

	let data = await response.json();
	console.log(data);
	let { title, description, tags, taxonomy_id, shipping_profile_id, materials, styles, item_weight, item_length, item_width, item_height, item_weight_unit, is_personalizable, personalization_is_required, personalization_char_count_max, personalization_instructions, type} = data;
	console.log(title, description, tags, taxonomy_id, materials);
	
	let newListingData = {
		title,
		description,
		tags: tags.join(','),
		quantity: 999,
		taxonomy_id,
		styles,
		item_weight, item_length, item_width, item_height, item_weight_unit, is_personalizable, personalization_is_required, personalization_char_count_max, personalization_instructions, type,
		shipping_profile_id,
		price: 20.00,
		shipping_template_id: 1, // Your existing shipping template ID
		who_made: "i_did",
		is_supply: "false",
		when_made: "made_to_order",
		state: "draft",
	};

	requestOptions.method = 'POST';
	requestOptions.headers['Content-Type'] = 'application/json';
	requestOptions.body = JSON.stringify(newListingData);

	// response = await fetch('https://api.etsy.com/v2/shops/__YOUR_SHOP_ID__/listings', requestOptions);

	// if (!response.ok) {
	// 	console.log('Failed to create the listing');
	// 	res.send("Failed to create the listing");
	// 	return;
	// }

	// data = await response.json();
	// req.locals.output = `New listing created with ID: ${data.results[0].listing_id}`;
	next();
})

module.exports = app
