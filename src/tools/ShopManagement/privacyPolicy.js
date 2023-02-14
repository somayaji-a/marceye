import {
	ClipboardListIcon,
} from '@heroicons/react/solid'


const obj = {

	title: "Privacy Policy",
	desc: "Quickly generate a privacy policy tailored for your shop.",
	category: "Shop Management",
	Icon: ClipboardListIcon,
	// tags: [],
	permissions: ['user'],

	to: "/ai/ShopManagement/privacyPolicy",
	api: "/ai/ShopManagement/privacyPolicy",
	
	fromColor: "blue-600",
	toColor: "yellow-500",

	output: {
		title: "Privacy Policy Output",
		desc: "Example of a privacy policy document",
		// Icon: RefreshIcon,
		// color: "",
	},

	prompts: [{
		title:"Shop Policy Details",
		desc: "Some policy and shop details",
		// n: 1,
		prompts: [
			{ 
				title: "Shop name", 
				attr: "shop",  
				value: "", 
				placeholder: "Your shop name", 
				label: "Examples: DecorBySoma",
				// type: "textarea",
				maxLength: 50,
				// max: 100,
				min: 3,
				required: true,
				error: "",
				example: "DecorBySoma",
			},
			{ 
				title: "Specific policy details", 
				attr: "details",  
				value: "", 
				placeholder: "If you have any specific policy details to include in the document, enter them here, otherwise leave blank...", 
				label: "",
				type: "textarea",
				// maxLength: 600,
				// max: 100,
				// min: 1,
				// required: true,
				error: "",
				example: "Data is not shared with third parties without express consent.",
			},
			{ 
				title: "Contact Information", 
				attr: "contact",  
				value: "", 
				placeholder: "Adrian Smith adrian@smith.com", 
				label: "Examples: Adrian, adrian@example.com",
				// type: "textarea",
				// maxLength: 600,
				// max: 100,
				// min: 1,
				// required: true,
				error: "",
				example: "Adrian Smith adrian@smith.com",
			},
		],
		example: {
output: `Sample output`,
			// outputs: [],
			// Icon: RefreshIcon,
			// color: "",
		}
	},
	]
		
}

export default obj

