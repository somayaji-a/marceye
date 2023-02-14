import {
	ClipboardListIcon,
} from '@heroicons/react/solid'


const obj = {

	title: "Product Image Generator (Beta)",
	desc: "Create a high resolution product image for your listing based on text descriptions.",
	category: "Listing Details",
	Icon: ClipboardListIcon,
	// tags: [],
	permissions: ['user'],

	to: "/ai/ListingDetails/mageGenerator",
	api: "/ai/ListingDetails/imageGenerator",
	
	fromColor: "yellow-400",
	toColor: "yellow-600",

	output: {
		title: "Generated Image",
		desc: "A link where your generated image will be available.",
		// Icon: RefreshIcon,
		// color: "",
	},

	prompts: [{
		title:"Product Description",
		desc: "Be as detailed as possible and describe your product.",
		// n: 1,
		prompts: [
			{ 
				title: "Image Description", 
				attr: "description",  
				value: "", 
				placeholder: "", 
				label: "",
				type: "textarea",
				maxLength: 300,
				// max: 100,
				min: 2,
				required: true,
				error: "",
				example: "",
			},
		],
		example: {
output: `Sample output URL`,
			// outputs: [],
			// Icon: RefreshIcon,
			// color: "",
		}
	}]
		
}

export default obj

