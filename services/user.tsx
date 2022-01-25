import { User } from '../types';

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

const userService =  {
	getUser
};

export  default userService;