import {
	ClipboardListIcon,
} from '@heroicons/react/solid'


const obj = {

	title: "Product Keywords",
	desc: "Generate a list of high impact keywords for your product",
	category: "Listing Details",
	Icon: ClipboardListIcon,
	// tags: [],
	permissions: ['user'],

	to: "/ai/ListingDetails/productkeywords",
	api: "/ai/ListingDetails/productkeywords",
	
	fromColor: "yellow-400",
	toColor: "yellow-600",

	output: {
		title: "Generated Keywords",
		desc: "A list of SEO optimized keywords",
		// Icon: RefreshIcon,
		// color: "",
	},

	prompts: [{
		title:"Product Detail",
		desc: "Provide some guidelines for the keyword generation",
		// n: 1,
		prompts: [
			{ 
				title: "Title or Short description", 
				attr: "title",  
				value: "", 
				placeholder: "Rustic Wooden Shelf", 
				label: "Examples: Rustic Wooden Shelf, Wooden Key Chan Tag, Engraved Leather Notebook",
				// type: "textarea",
				maxLength: 100,
				// max: 100,
				min: 10,
				required: true,
				error: "",
				example: "Laser Engraved Wooden Guest Book",
			},
			{ 
				title: "Keyword Output Length", 
				attr: "length",  
				value: "", 
				placeholder: "20", 
				label: "Examples: 10, 20",
				// type: "textarea",
				maxLength: 3,
				// max: 100,
				min: 2,
				required: true,
				error: "",
				example: "20",
			},
		],
		example: {
output: `1. Laser Engraved 
2. Customized Guestbook
3. Personalized Wood
4. Wood Engraved Book
5. Unique Guestbook
6. Wooden Keepsake
7. Handcrafted Guestbook
8. Custom Engraved Wood
9. Engraved Wedding Book
10. Heirloom Guestbook`,
			// outputs: [],
			// Icon: RefreshIcon,
			// color: "",
		}
	}]
		
}

export default obj

