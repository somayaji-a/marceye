//original


import codeInterpret from './interpret';
import intro from './intro';
import helloworld from './helloworld';


//ListingDetails
import producttitle from './ListingDetails/producttitle';
import productdescription from './ListingDetails/productdescription';
import productkeywords from './ListingDetails/productkeywords';
import imageAttribution from './ListingDetails/imageAttribution';
import imageGenerator from './ListingDetails/imageGenerator';
import productFAQ from './ListingDetails/productFAQ';

//CustomerManagement
import reviewResponse from './CustomerManagement/reviewResponse';

//ShopManagement
import story from './ShopManagement/story';
import privacyPolicy from './ShopManagement/privacyPolicy';

//EtsyResearch
import etsyListingDetails from './EtsyResearch/etsyListingDetails';
// import copyEtsyListing from './EtsyResearch/copyEtsyListing'



const TOOLS = [

	// removed
	//codeInterpret,
	//intro,
	//jobad,
	//helloworld,

	
	//content
	producttitle,
	productdescription,
	productkeywords,
	imageAttribution,
	imageGenerator,
	productFAQ,

	//shopmanagement
	story,
	privacyPolicy,

	//customerManagement
	reviewResponse,

	//EtsyResearch
	etsyListingDetails,
	// copyEtsyListing,
]

export default TOOLS
