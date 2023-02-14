import {
	ViewListIcon,
} from '@heroicons/react/solid'


const obj = {

	title: "Product FAQs",
	desc: "Generate a list of FAQ's for questions your customers may ask.",
	category: "Content",
	Icon: ViewListIcon,
	// tags: [],
	permissions: ['user'],
	
	fromColor: "yellow-400",
	toColor: "yellow-600",

	to: "/ai/productFAQ",
	api: "/ai/productFAQ",

	output: {
		title: "Product FAQs",
		desc: "The following is a list of Frequently Asked Questions",
		Icon: false,
		color: "blue",
	},

	prompts: [{
		title:"Product Details",
		desc: "Some details about your product",
		// n: 1,
		prompts: [{ 
				title: "Product Title", 
				attr: "title",  
				value: "", 
				placeholder: "A short title for your product", 
				label: "",
				type: "text",
				maxLength: 100,
				// max: 100,
				min: 3,
				required: true,
				error: "",
				example: "Laser engraved wooden guest book",
			},
			{ 
				title: "Product Description", 
				attr: "description",  
				value: "", 
				placeholder: "Your product description details.", 
				label: "",
				type: "textarea",
				maxLength: 2000,
				// max: 100,
				min: 3,
				required: true,
				error: "",
				example: "Laser engraved wooden guest book",
			},
		],
		example: {
			output: "Sample output here",
			// outputs: [
			// 	"The sun is very old, over 4.5 billion years",
			// 	"At 10,000 degrees, sun is also very hot",
			// 	"Gasses called coronal mass ejections erupt from the sun",
			// ],
			// Icon: RefreshIcon,
			color: "blue",
		}
	}]
		
}

export default obj

