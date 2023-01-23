const models = require("../models")
const User = models.user;

const invoice = async (eventType,data) => {

	if (!eventType.includes("invoice")) {
		return // not a subscription event
	}
	
	paid(eventType,data)

}

const paid = async (eventType,data) => {

	if (!eventType.includes("invoice.paid")) {
		return // not a subscription event
	}
	const { object } = data
	const { object_lines } = data.lines.data
	const { object_lines_price } = object_lines.price
	console.log('Invoice object :', object)
	console.log('Invoice object lines :', object_lines)
	console.log('Invoice object lines price:', object_lines_price)
 	console.log(eventType)

	let credits = 0
	//TODO update invoice.js with credit calculations for different PRICE_ID. If amount paid = 0, then give 5 credits.
	//IF amount paid = 5, then give 100 creditds
	//IF amount paid = 20, then give 1000 credits
	//use process.env.STRIPE_WEBHOOK_SECRET
	/*
STRIPE_PRODUCT_FREE=price_1MQDDNEh4b291ZdRdtbpU0gJ
STRIPE_PRODUCT_ENTRY=price_1MQDCIEh4b291ZdRY0zcmH60
STRIPE_PRODUCT_PRO=price_1MQB01Eh4b291ZdRwUfMJ4lY
	*/
	// 500 credits for $30
	
	if(object_lines_price.id == process.env.STRIPE_PRODUCT_ENTRY && object.amount_paid > 0 ) {
		credits += 100
	}
	if(object_lines_price.id == process.env.STRIPE_PRODUCT_PRO && object.amount_paid > 0 ) {
		credits += 1000
	}

	// if(object.amount_paid > 500){
	// 	credits += (object.amount_paid / 12)
	// }
	// if(object.amount_paid > 8900){
	// 	credits += (object.amount_paid / 12)
	// }

	let user = await User.findOne({
		customerId: object.customer
	})

	if(object.amount_paid > 0){
		if(user){
			if(!user.referrerPaid){
				let referrer = await User.findOne({
					_id: user.referrer
				})
				if(referrer){
					referrer.credits += 100
					user.referrerPaid = true
					referrer.save()
				}
			}
			user.credits += credits
			user.save()
		}
	}

	

	// await User
	// 	.updateOne({ customerId: object.customer },
	// 		{ $inc: { credits } })
	// 	.exec()
}

module.exports = invoice