import {
	ClipboardListIcon,
} from '@heroicons/react/solid'


const obj = {

	title: "Product Description",
	desc: "Quickly create SEO Optimized Product Descriptions",
	category: "Listing Details",
	Icon: ClipboardListIcon,
	// tags: [],
	permissions: ['user'],

	to: "/ai/ListingDetails/productdescription",
	api: "/ai/ListingDetails/productdescription",
	
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
				example: "Laser engraved wooden guestbook",
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
				example: "Reclaimed wood. Bound by rings for easy addition of pages. Thick card stock paper.",
			},
		],
		example: {
output: `Welcome to the perfect way to capture memories that will last a lifetime! Our laser engraved wooden guestbook is crafted from reclaimed wood and bound by rings for easy addition of pages. The thick card stock paper ensures your guests’ signatures, notes, and well-wishes are preserved in pristine condition. 

This unique guestbook is designed with an intricate laser engraving on the cover that adds a touch of elegance to any special occasion or event. Whether you’re celebrating a wedding, anniversary, birthday party or other milestone event – this beautiful piece will be cherished for years to come. 

The timeless design makes it ideal for any style décor; whether modern or traditional – our laser engraved wooden guestbook can easily fit into any home setting. It also makes a great gift idea for newlyweds, anniversaries and more! With its classic look and feel, this one-of-a-kind item is sure to become an heirloom piece that can be passed down through generations. 

At DecorBySoma we take pride in providing quality products at affordable prices so you can make lasting memories without breaking the bank! Thank you for choosing us as your source for all things decor related – we appreciate your business!`,
			// outputs: [],
			// Icon: RefreshIcon,
			// color: "",
		}
	}]
		
}

export default obj

