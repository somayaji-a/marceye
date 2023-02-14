
const express = require('express');
const openai = require('../middlewares/openai');
const { 
	initMiddleware,
	creditCheck,
	contentFilterCheck,
	sendResponse,
	creditPayment,
	saveToHistory,
}  = require('./middleware');

let app = express.Router()

app.use('/', initMiddleware, creditCheck); 

// not used
// app.use('/', require('./summarize'));
// app.use('/', require('./code/interpret'));
// app.use('/', require('./writing/intro'));
// app.use('/', require('./jobad'));
// app.use('/', require('./helloworld'));

// app.use('/', require('./policydocument'));

// Listing Details
app.use('/', require('./ListingDetails/producttitle'));
app.use('/', require('./ListingDetails/productdescription'));
app.use('/', require('./ListingDetails/productkeywords'));
app.use('/', require('./ListingDetails/imageAttribution'));
app.use('/', require('./ListingDetails/imageGenerator'));
app.use('/', require('./ListingDetails/productFAQ'));

//Customer Management
app.use('/', require('./CustomerManagement/reviewResponse'));

app.use('/', contentFilterCheck); 
app.use('/', creditPayment); 
app.use('/', saveToHistory); 

//add modules here that bypass the credit check and query save
//Etsy Research
app.use('/', require('./EtsyResearch/etsyListingDetails'));

app.use('/', sendResponse); 

module.exports = app