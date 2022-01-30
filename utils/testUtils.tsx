import { Config } from "../types";

export const  user = {
		_id:  "asd1231",
		name: "elias doe",
		points: 5000,
		createDate: new Date(),
		redeemHistory: [],
		__v: 1	
};

export const  userFailed = {
		success: false,
		message: "Failed to authenticate token."
};



const addPoints = (p : number) => {
	user.points  += p;
};

const getNewPoints = (p: number) => {
	addPoints(p);
	return  { 
		message: "Points Updated",
		"New Points": user.points
	};  
};


export const products =[
  {
    img: {
      url: "https://coding-challenge-api.aerolab.co/images/iPhone8-x1.png",
      hdUrl: "https://coding-challenge-api.aerolab.co/images/iPhone8-x2.png"
    },
    _id: "5a0b35c1734d1d08bf7084c3",
    name: "iPhone 8",
    cost: 800,
    category: "Phones"
  },
  {
    img: {
      url: "https://coding-challenge-api.aerolab.co/images/Switch-x1.png",
      hdUrl: "https://coding-challenge-api.aerolab.co/images/Switch-x2.png"
    },
    _id: "5a0b35d7734d1d08bf7084c9",
    name: "Nintendo Switch 32GB",
    cost: 300,
    category: "Gaming"
  },
  {
    img: {
      url: "https://coding-challenge-api.aerolab.co/images/MacbookPro-x1.png",
      hdUrl: "https://coding-challenge-api.aerolab.co/images/MacbookPro-x2.png"
    },
    _id: "5a0b35df734d1d08bf7084cb",
    name: "Macbook Pro",
    cost: 1300,
    category: "Laptops"
  
  }
];


const getProducts = () => products;
 

export const mockApi = (url : string, config : Config) => {
	if (!config.headers.Authorization || config.headers.Authorization !== `Bearer ${process.env.ENV_TOKEN}`) {
		return Promise.resolve({
			json: () => Promise.resolve(userFailed)
		});
	}
	const endPoint = url.split("/").reverse()[0];
	

	switch (endPoint) {
		case "me":
			return Promise.resolve({
				json: () => Promise.resolve(user)
			});
			break;
		case "points":			
			// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
			const obj = JSON.parse(config.body as string )  ;
			const newPoints = obj.points as number;
			return Promise.resolve({
				json: () => Promise.resolve(getNewPoints(newPoints))
			});			
			break;
		case "history":
			return Promise.resolve({
				json: () => Promise.resolve(user.redeemHistory)
			});
			break;	
		case "products":
			
			return Promise.resolve({
				json: () => Promise.resolve(getProducts())
			});
			break;
		case "redeem":
			// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
			const body = JSON.parse(config.body as string )  ;
			const id = body.id as string;

			const productSelected =   findProduct(id);
			const cost = productSelected?.cost ?? undefined;

			

			if(!productSelected){
				return Promise.resolve({
					json: () => Promise.resolve({error: "Internal Server Error"})
				});
			}

			if( cost &&  cost > user.points ){
				return Promise.resolve({
					json: () => Promise.resolve({error: "User don't have enogh points"})
				});
			}

			if( cost &&  cost <= user.points ){
				user.points -= cost;

				return Promise.resolve({
					json: () => Promise.resolve({message: "You've redeem the product successfully"})
				});
			}

			

			return Promise.resolve({
				json: () => Promise.resolve({error: "Bad Request"})
			});
			break;
		default:
			break;
	}

	
	
};


const findProduct  = (id : string)   =>  products.find(p => p._id === id);


export const emptyUserPoints = () => {  user.points = 0; };

export const getUserPoints = () => user.points;