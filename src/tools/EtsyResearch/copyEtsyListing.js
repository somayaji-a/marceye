import {
	ClipboardListIcon,
} from '@heroicons/react/solid'


const obj = {

	title: "Copy an Etsy Listing",
	desc: "Duplicate any Etsy listing to your shop",
	category: "Etsy Research",
	Icon: ClipboardListIcon,
	// tags: [],
	permissions: ['user'],

	to: "/ai/copyEtsyListing",
	api: "/ai/copyEtsyListing",
	
	fromColor: "yellow-400",
	toColor: "yellow-600",

	output: {
		title: "Success",
		desc: "Result",
		// Icon: RefreshIcon,
		// color: "",
	},

	prompts: [{
		title:"Input Information",
		desc: "Enter the information:",
		// n: 1,
		prompts: [
			{ 
				title: "Etsy URL", 
				attr: "url",  
				value: "", 
				placeholder: "www.etsy.com/....", 
				label: "",
				// type: "textarea",
				maxLength: 100,
				// max: 100,
				min: 10,
				required: true,
				error: "",
				example: "www.etsy.com/....",
			},
			{ 
				title: "Auth key", 
				attr: "auth",  
				value: "", 
				placeholder: "auth", 
				label: "",
				// type: "textarea",
				maxLength: 100,
				// max: 100,
				min: 10,
				required: true,
				error: "",
				example: "www.etsy.com/....",
			},
		],
		example: {
output: `Top 5 listings`,
			// outputs: [],
			// Icon: RefreshIcon,
			// color: "",
		}
	}]
		
}

export default obj

