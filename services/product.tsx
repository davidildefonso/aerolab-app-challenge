import {  Product, RequestError} from '../types';

const baseUrl = `${process.env.NEXT_PUBLIC_ENV_BASE_URL}products`; 

const getAll = async (ENV_TOKEN : string) => {
	const config = {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
			'Authorization' : `Bearer ${process.env[ENV_TOKEN]}`
		}	
	};

	try {		
		const res = await fetch(baseUrl, config);	
		console.log(res);
		if(res){		
			const products : [Product] | RequestError  | unknown = await res.json();			
			return products;
		}		
	} catch (error) {
		if(error  instanceof Error)	return error.message;
	}

};

const productService =  {
	getAll
};

export  default productService;