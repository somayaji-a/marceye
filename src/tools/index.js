//original
import jobad from './jobad';

import codeInterpret from './interpret';
import intro from './intro';
import helloworld from './helloworld';
import policydocument from './policydocument';

//ListingDetails
import producttitle from './ListingDetails/producttitle';
import productdescription from './ListingDetails/productdescription';
import productkeywords from './ListingDetails/productkeywords';
import imageAttribution from './ListingDetails/imageAttribution';
import imageGenerator from './ListingDetails/imageGenerator';
import productFAQ from './ListingDetails/productFAQ';

//CustomerManagement
import reviewResponse from './CustomerManagement/reviewResponse';

//EtsyResearch
import etsyListingDetails from './EtsyResearch/etsyListingDetails';



const TOOLS = [

	// removed
	//codeInterpret,
	//intro,
	//jobad,
	//helloworld,
	//policydocument,
	
	//content
	producttitle,
	productdescription,
	productkeywords,
	imageAttribution,
	imageGenerator,
	productFAQ,

	//customerManagement
	reviewResponse,

	//EtsyResearch
	etsyListingDetails,
]

export default TOOLS
