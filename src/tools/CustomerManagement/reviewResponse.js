import {
	ViewListIcon,
} from '@heroicons/react/solid'


const obj = {

	title: "Review Response Generator",
	desc: "Generate a thoughtful and positive response to any customer review.",
	category: "Customer Management",
	Icon: ViewListIcon,
	// tags: [],
	permissions: ['user'],
	
	fromColor: "green-500",
	toColor: "blue-500",

	to: "/ai/CustomerManagement/reviewResponse",
	api: "/ai/CustomerManagement/reviewResponse",

	output: {
		title: "Generated Review Response",
		desc: "The following response is suggested.",
		Icon: false,
		color: "blue",
	},

	prompts: [{
		title:"Review Text",
		desc: "The details of the review you received",
		// n: 1,
		prompts: [{ 
				title: "Review", 
				attr: "review",  
				value: "", 
				placeholder: "Your product was amazing...", 
				label: "",
				type: "textarea",
				maxLength: 1000,
				// max: 100,
				min: 3,
				required: true,
				error: "",
				example: "",
			},
		],
		example: {
			// output: "",
			outputs: [
				"Sample output",
			],
			// Icon: RefreshIcon,
			color: "blue",
		}
	}]
		
}

export default obj

