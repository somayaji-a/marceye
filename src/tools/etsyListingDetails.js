import {
	ClipboardListIcon,
} from '@heroicons/react/solid'


const obj = {

	title: "Etsy Listing Details",
	desc: "Look up the details of any Etsy listing",
	category: "Etsy Research",
	Icon: ClipboardListIcon,
	// tags: [],
	permissions: ['user'],

	to: "/ai/etsyListingDetails",
	api: "/ai/etsyListingDetails",
	
	fromColor: "yellow-400",
	toColor: "yellow-600",

	output: {
		title: "Listing Details",
		desc: "A breakdown of the listing with the number of views, favourites, and the tags used. Use this to determine whether the listing is popular enough to learn from, and find the tags and information that are relevant to your own listing. ",
		// Icon: RefreshIcon,
		// color: "",
	},

	prompts: [{
		title:"Listing Link",
		desc: "Insert the link of the listing you wish to understand:",
		// n: 1,
		prompts: [
			{ 
				title: "Link", 
				attr: "link",  
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
		],
		example: {
output: `Listing Details`,
			// outputs: [],
			// Icon: RefreshIcon,
			// color: "",
		}
	}]
		
}

export default obj

