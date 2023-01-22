import {
	ClipboardListIcon,
} from '@heroicons/react/solid'


const obj = {

	title: "Policy Document",
	desc: "Quickly create a policy document based on some high level details",
	category: "Business",
	Icon: ClipboardListIcon,
	// tags: [],
	permissions: ['user'],

	to: "/ai/business/policydocument",
	api: "/ai/business/policydocument",
	
	fromColor: "blue-600",
	toColor: "yellow-500",

	output: {
		title: "Generated Policy",
		desc: "A detailed policy document",
		// Icon: RefreshIcon,
		// color: "",
	},

	prompts: [{
		title:"Policy Document Details",
		desc: "Provide a few high level policy details",
		// n: 1,
		prompts: [
			{ 
				title: "Title", 
				attr: "title",  
				value: "", 
				placeholder: "Vacation Policy", 
				label: "Examples: Vacation Policy, Health & Safety Policy",
				// type: "textarea",
				maxLength: 40,
				// max: 100,
				min: 10,
				required: true,
				error: "",
				example: "vacation policy",
			},
			{ 
				title: "Organization", 
				attr: "organization",  
				value: "", 
				placeholder: "Nuclear Promise X", 
				label: "Examples: NPX, Bruce Power, IBM",
				// type: "textarea",
				maxLength: 20,
				// max: 100,
				min: 3,
				required: true,
				error: "",
				example: "Nuclear Promise X",
			},
			{ 
				title: "Policy Details", 
				attr: "details",  
				value: "", 
				placeholder: "2 weeks vacation", 
				label: "Examples: Microsoft CRM, Adobe, Till, Equipment",
				type: "textarea",
				// maxLength: 600,
				// max: 100,
				// min: 1,
				required: true,
				error: "",
				example: "Tax Audit, Reports, MyOB",
			},
		],
		example: {
output: `Sample vacation output policy here`,
			// outputs: [],
			// Icon: RefreshIcon,
			// color: "",
		}
	}]
		
}

export default obj

