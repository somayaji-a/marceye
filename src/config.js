const dev = {
	baseURL: "http://localhost:3080/api/",
	landingPageUrl: "http://localhost:3080",
	stripe: {
		free: "price_1MQDDNEh4b291ZdRdtbpU0gJ",
		entry: "price_1MQDCIEh4b291ZdRY0zcmH60",
		pro: "price_1MQB01Eh4b291ZdRwUfMJ4lY"
	},
};
  
const prod = {
	baseURL: '/api/',
	landingPageUrl: "https://degeneratr.com",
	stripe: {
		free: "price_1MVJKAEh4b291ZdRfFIYqBGl",
		entry: "price_1MVJKFEh4b291ZdRpNcZkqH9",
		pro: "price_1MVJKJEh4b291ZdRIObdAkHD"
	},
};
  
const config = process.env.NODE_ENV === 'development'
	? dev
	: prod;
  
export default config;