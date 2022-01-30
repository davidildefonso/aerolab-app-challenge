import { User, PointsRequest , Config, Product, HistoryFailed} from '../types';
import axios from 'axios';

const baseUrl = `${process.env.NEXT_PUBLIC_ENV_BASE_URL}user/`; 



const getUser = async (ENV_TOKEN : string) => {

	const token = process.env.NODE_ENV === "test"
		? process.env[ENV_TOKEN]
		: process.env.NEXT_PUBLIC_ENV_TOKEN;

	const config : Config = {
		headers: {
			'Content-Type': 'application/json',
			'Authorization' : `Bearer ${token}`
		}	
	};

	try {
		
		const res = await axios.get(`${baseUrl}me`, config);
		console.log(res);
		if(res){		
			const user : User | unknown = await res.data;
			
			return user;
		}
		
	} catch (error) {
		if(error  instanceof Error)	return error.message;
	}


	
};


const addPoints = async (ENV_TOKEN: string, points: number) => {
	const token = process.env.NODE_ENV === "test"
		? process.env[ENV_TOKEN]
		: process.env.NEXT_PUBLIC_ENV_TOKEN;

	const config:  Config = {	
		headers: {
			"Content-Type": "application/json",
			"Authorization" : `Bearer ${token}`,
		}
	};
console.log(config);

	try {	
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-ignore: Unreachable code error		
		const res = await axios.post(`${baseUrl}points`, {points} , config);		
		if(res){		
			const data : PointsRequest | unknown = await res.data;			
			return data;
		}
		
	} catch (error) {
		if(error  instanceof Error)	return error.message;
	}

};

const getHistory = async (ENV_TOKEN: string) => {
	const token = process.env.NODE_ENV === "test"
		? process.env[ENV_TOKEN]
		: process.env.NEXT_PUBLIC_ENV_TOKEN;

	const config = {
		headers: {
			'Content-Type': 'application/json',
			'Authorization' : `Bearer ${token}`
		}	
	};

	try {		
		const res = await axios.get(`${baseUrl}history`, config);		
		if(res){		
			const data : [Product] | HistoryFailed |  unknown = await res.data;			
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