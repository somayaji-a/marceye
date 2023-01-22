import {
	ClipboardListIcon,
} from '@heroicons/react/solid'


const obj = {

	title: "Product Description",
	desc: "Quickly create SEO Optimized Product Descriptions",
	category: "Content",
	Icon: ClipboardListIcon,
	// tags: [],
	permissions: ['user'],

	to: "/ai/productdescription",
	api: "/ai/productdescription",
	
	fromColor: "yellow-400",
	toColor: "yellow-600",

	output: {
		title: "Generated Description",
		desc: "An SEO Optimized product description",
		// Icon: RefreshIcon,
		// color: "",
	},

	prompts: [{
		title:"Product Description Details",
		desc: "Provide a few high level product details",
		// n: 1,
		prompts: [
			{ 
				title: "Title", 
				attr: "title",  
				value: "", 
				placeholder: "Rustic Wooden Shelf", 
				label: "Examples: Rustic Wooden Shelf, Wooden Key Chan Tag, Engraved Leather Notebook",
				// type: "textarea",
				maxLength: 40,
				// max: 100,
				min: 10,
				required: true,
				error: "",
				example: "rustic wooden shelf",
			},
			{ 
				title: "Organization", 
				attr: "organization",  
				value: "", 
				placeholder: "DecorBySoma", 
				label: "Examples: Walmart, Target",
				// type: "textarea",
				maxLength: 20,
				// max: 100,
				min: 3,
				required: true,
				error: "",
				example: "DecorBySoma",
			},
			{ 
				title: "Product Details", 
				attr: "details",  
				value: "", 
				placeholder: "Rustic reclaimed wood, mountain shaped, 12 hooks in brass or silver, available in large and small", 
				label: "",
				type: "textarea",
				// maxLength: 600,
				// max: 100,
				// min: 1,
				required: true,
				error: "",
				example: "Rustic reclaimed wood, mountain shaped, 12 hooks in brass or silver, available in large and small",
			},
		],
		example: {
output: `Sample Product Detailed description here`,
			// outputs: [],
			// Icon: RefreshIcon,
			// color: "",
		}
	}]
		
}

export default obj

