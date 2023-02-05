
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

app.use('/', require('./summarize'));
app.use('/', require('./code/interpret'));
app.use('/', require('./writing/intro'));
app.use('/', require('./jobad'));
app.use('/', require('./helloworld'));
app.use('/', require('./producttitle'));
app.use('/', require('./policydocument'));
app.use('/', require('./productdescription'));
app.use('/', require('./productkeywords'));
app.use('/', require('./imageAttribution'));
app.use('/', require('./imageGenerator'));

app.use('/', contentFilterCheck); 
app.use('/', creditPayment); 
app.use('/', saveToHistory); 

//add modules here that bypass the credit check and query save
app.use('/', require('./etsyListingDetails'));

app.use('/', sendResponse); 

module.exports = app