import {
	ClipboardListIcon,
} from '@heroicons/react/solid'


const obj = {

	title: "Top Etsy Listing Search",
	desc: "Find the top 5 selling listings on Etsy in any niche",
	category: "Etsy Research",
	Icon: ClipboardListIcon,
	// tags: [],
	permissions: ['user'],

	to: "/ai/topEtsyListings",
	api: "/ai/topEtsyListings",
	
	fromColor: "yellow-400",
	toColor: "yellow-600",

	output: {
		title: "Top 5 Listings",
		desc: "The top 5 listings related to the search terms provided ",
		// Icon: RefreshIcon,
		// color: "",
	},

	prompts: [{
		title:"Search terms",
		desc: "Enter the keywords you want to search for:",
		// n: 1,
		prompts: [
			{ 
				title: "Search Terms", 
				attr: "search",  
				value: "", 
				placeholder: "wooden key holder", 
				label: "",
				// type: "textarea",
				maxLength: 100,
				// max: 100,
				min: 10,
				required: true,
				error: "",
				example: "wooden key holders",
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

