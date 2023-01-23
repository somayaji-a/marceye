import {
	ViewListIcon,
} from '@heroicons/react/solid'


const obj = {

	title: "Product Title",
	desc: "Generate an Optimized Product Title.",
	category: "Content",
	Icon: ViewListIcon,
	// tags: [],
	permissions: ['user'],
	
	fromColor: "yellow-400",
	toColor: "yellow-600",

	to: "/ai/producttitle",
	api: "/ai/producttitle",

	output: {
		title: "Product Title",
		desc: "The following title was generated",
		Icon: false,
		color: "blue",
	},

	prompts: [{
		title:"Product Description",
		desc: "A sentence or paragraph that describes the key features of your product",
		// n: 1,
		prompts: [{ 
				title: "Description", 
				attr: "description",  
				value: "", 
				placeholder: "A rustic wooden key holder that is mountain shaped and...", 
				label: "",
				type: "textarea",
				maxLength: 600,
				// max: 100,
				min: 3,
				required: true,
				error: "",
				example: "Hello World ",
			},
		],
		example: {
			output: "Hello World Hello World Hello World Hello World Hello World Hello World Hello World ",
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
