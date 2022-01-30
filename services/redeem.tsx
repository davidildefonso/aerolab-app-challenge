import {  RedeemResponse, RequestError, RedeemError, Config} from '../types';

const baseUrl = `${process.env.NEXT_PUBLIC_ENV_BASE_URL}redeem`; 

const redeem = async (ENV_TOKEN : string, id: string) => {

	const token = process.env.NODE_ENV === "test"
		? process.env[ENV_TOKEN]
		: process.env.NEXT_PUBLIC_ENV_TOKEN;

	const config: Config = {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			"Authorization" : `Bearer ${token}`
		},
		body: {id}
	};

	console.log(config);

	try {	
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-ignore: Unreachable code error	
		const res = await fetch(baseUrl, config);		
		if(res){		
			const data : RedeemResponse | RequestError |  RedeemError | unknown = await res.json();			
			return data;
		}
		
	} catch (error) {
		if(error  instanceof Error)	return error.message;
	}

};

const redeemService =  {
	redeem
};

export  default redeemService;