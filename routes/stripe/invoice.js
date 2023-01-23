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
	console.log('Invoice object :', object)
 	console.log(eventType)

	let credits = 0
	// 100 credits for entry, 1000 credits for pro
	
	if(object.amount_paid > 500 && object.amount_paid < 2000 ) {
		credits += 100
	}
	if(bject.amount_paid > 2000 ) {
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