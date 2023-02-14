import {
	ClipboardListIcon,
} from '@heroicons/react/solid'


const obj = {

	title: "Image Attribution",
	desc: "Generate an image attribution for royalty free images found at sources like Wikimedia.",
	category: "Listing Details",
	Icon: ClipboardListIcon,
	// tags: [],
	permissions: ['user'],

	to: "/ai/ListingDetails/imageAttribution",
	api: "/ai/ListingDetails/imageAttribution",
	
	fromColor: "yellow-400",
	toColor: "yellow-600",

	output: {
		title: "Generated Attribution",
		desc: "Attribution generated based on the URL provided",
		// Icon: RefreshIcon,
		// color: "",
	},

	prompts: [{
		title:"Source URL",
		desc: "Provide a URL to the source web page (Wikimedia or other) that contains necessary information about any applicable licenses.",
		// n: 1,
		prompts: [
			{ 
				title: "Image Page Link", 
				attr: "link",  
				value: "", 
				placeholder: "", 
				label: "Examples: https://commons.m.wikimedia.org/wiki/File:Gardenology.org-IMG_0265_hunt07mar.jpg",
				// type: "textarea",
				maxLength: 200,
				// max: 100,
				min: 2,
				required: true,
				error: "",
				example: "https://commons.m.wikimedia.org/wiki/File:Gardenology.org-IMG_0265_hunt07mar.jpg",
			},
		],
		example: {
output: `Gardenology.org-IMG_0265_hunt07mar.jpg" by Gardenology.org is licensed under CC BY-SA 3.0`,
			// outputs: [],
			// Icon: RefreshIcon,
			// color: "",
		}
	}]
		
}

export default obj

