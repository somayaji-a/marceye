import {
	ViewListIcon,
} from '@heroicons/react/solid'


const obj = {

	title: "Hello World",
	desc: "Generate a title optimized for your product",
	category: "Content",
	Icon: ViewListIcon,
	// tags: [],
	permissions: ['user'],
	
	fromColor: "yellow-400",
	toColor: "yellow-600",

	to: "/ai/helloworld",
	api: "/ai/helloworld",

	output: {
		title: "Hello World",
		desc: "The following title was generated",
		Icon: false,
		color: "blue",
	},

	prompts: [{
		title:"Entry Text",
		desc: "A sentence paragraph or keywords that describe your product.",
		// n: 1,
		prompts: [{ 
				title: "Description", 
				attr: "content",  
				value: "", 
				placeholder: "Wooden Keyholder with Brass Hooks in a Mountain Shape", 
				label: "",
				type: "textarea",
				maxLength: 600,
				// max: 100,
				min: 3,
				required: true,
				error: "",
				example: "Wooden Keyholder with Brass Hooks in a Mountain Shape",
			},
		],
		example: {
			output: "Handcrafted Wooden Mountain Keyholder with Brass Hooks",
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

