import {
	ClipboardListIcon,
} from '@heroicons/react/solid'


const obj = {

	title: "Shop Story Generator",
	desc: "Tell your shop's story in a unique way.",
	category: "Shop Management",
	Icon: ClipboardListIcon,
	// tags: [],
	permissions: ['user'],

	to: "/ai/ShopManagement/story",
	api: "/ai/ShopManagement/story",
	
	fromColor: "blue-600",
	toColor: "yellow-500",

	output: {
		title: "Generated Shop Story",
		desc: "A short story about your shop.",
		// Icon: RefreshIcon,
		// color: "",
	},

	prompts: [{
		title:"Shop Details",
		desc: "Provide a few high level details about your shop",
		// n: 1,
		prompts: [
			{ 
				title: "Name", 
				attr: "name",  
				value: "", 
				placeholder: "Shop Name", 
				label: "Examples: DecorBySoma",
				// type: "textarea",
				maxLength: 100,
				// max: 100,
				min: 3,
				required: true,
				error: "",
				example: "DecorBySoma",
			},
			{ 
				title: "Your 'Why'", 
				attr: "why",  
				value: "", 
				placeholder: "Describe why you started this shop and your personal experiences that relate to the creation of the products", 
				type: "textarea",
				maxLength: 500,
				// max: 100,
				min: 3,
				required: true,
				error: "",
				example: "I grew up working with wood and always knew I wanted to work with my hands. I started this shop to turn my hobby into a fun way to bring my skills to others.",
			},
			{ 
				title: "Type of products", 
				attr: "what",  
				value: "", 
				placeholder: "Briefly describe the type of things you plan to sell...", 
				type: "textarea",
				maxLength: 500,
				// max: 100,
				min: 3,
				required: true,
				error: "",
				example: "handmade wooden decor",
			},
			{ 
				title: "Mission", 
				attr: "mission",  
				value: "", 
				placeholder: "Briefly describe the mission of your shop/small business...", 
				type: "textarea",
				maxLength: 500,
				// max: 100,
				min: 3,
				required: true,
				error: "",
				example: "to sell the best handmade wooden decor made sustainably with reclaimed wood",
			},
		],
		example: {
output: `Sample output  here`,
			// outputs: [],
			// Icon: RefreshIcon,
			// color: "",
		}
	}]
		
}

export default obj

