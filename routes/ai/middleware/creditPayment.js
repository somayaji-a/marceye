const db = require("../../models");
const User = db.user;

const creditPayment = async (req, res, next) => {

	// Prepare credit check on req
	// console.log('Req locals input: ', req.locals.input)
	// console.log('Req locals output: ', req.locals.output)
	// console.log('Req locals outputs string: ', req.locals.outputsString)
	// console.log('Req body n :',req.body.n)
	let inputLength = 0
	let outputLength = 0

	if(req.locals.input){
		inputLength = inputLength + req.locals.input.length
	}

	if(req.locals.output){
		outputLength = outputLength + req.locals.output.length
	}

	if(req.locals.outputsString){
		outputLength = outputLength + req.locals.outputsString.length
	}

	if(req.body.n){
		outputLength = outputLength * req.body.n
	}

	if (req.locals.input === 'nonCredit'){
		inputLenght = 0
		outputLength = 0
	}

	// Cost in credits
	inputLength = Math.ceil(inputLength / 4)
	outputLength = Math.ceil(outputLength / 4)
	// console.log('Input Length: ', inputLength)
	// console.log('Output Length: ', outputLength)
	// Pricing for Davinci model - 2 cents per 1000 tokens
	let cost = 0.0200

	// Cost is per 1k tokens
	cost = cost / 1000

	// Credits used in a transaction
	let price = (inputLength + outputLength) * cost
	// console.log('Input: ', inputLength, 'Output: ', outputLength)

	let creditsBeforeRounding = 12 * price
	// console.log('Price: ', price)
	// console.log('Credits before rounding: ', creditsBeforeRounding)
	let credits = Math.ceil(creditsBeforeRounding)
	// console.log('Credits: ', credits)
	req.locals.inputLength = inputLength
	req.locals.outputLength = outputLength
	req.locals.price = price
	req.locals.credits = credits

	// Now updated the suer

	let user = await User.findOne({ _id: req.user._id })
	user.credits = user.credits - credits
	user.creditsUsed = user.creditsUsed + credits

	req.user.credits = user.credits
	req.user.creditsUsed = user.creditsUsed

	// Attach credit data to request

	res._json = res.json
	res.json = function(data){
		data.credits = user.credits
		data.creditsUsed = user.creditsUsed
		res._json(data)
	}
	await user.save()

	next()
	
}


module.exports = creditPayment

