import { User, PointsRequest , Product, HistoryFailed} from '../types';

const baseUrl = `${process.env.NEXT_PUBLIC_ENV_BASE_URL}user/`; 

const getUser = async (ENV_TOKEN : string) => {

	const config = {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
			'Authorization' : `Bearer ${process.env[ENV_TOKEN]}`
		}	
	};

	try {
		
		const res = await fetch(`${baseUrl}me`, config);
		
		if(res){		
			const user : User | unknown = await res.json();
			
			return user;
		}
		
	} catch (error) {
		if(error  instanceof Error)	return error.message;
	}


	
};


const addPoints = async (ENV_TOKEN: string, points: number) => {
	const config = {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			"Authorization" : `Bearer ${process.env[ENV_TOKEN]}`
		},
		body: JSON.stringify({points})	
	};

	try {		
		const res = await fetch(`${baseUrl}points`, config);		
		if(res){		
			const data : PointsRequest | unknown = await res.json();			
			return data;
		}
		
	} catch (error) {
		if(error  instanceof Error)	return error.message;
	}

};

const getHistory = async (ENV_TOKEN: string) => {
	const config = {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
			'Authorization' : `Bearer ${process.env[ENV_TOKEN]}`
		}	
	};

	try {		
		const res = await fetch(`${baseUrl}history`, config);		
		if(res){		
			const data : [Product] | HistoryFailed |  unknown = await res.json();			
			return data;
		}
		
	} catch (error) {
		if(error  instanceof Error)	return error.message;
	}

};


const userService =  {
	getUser, addPoints, getHistory
};

export  default userService;