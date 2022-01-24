import { User } from '../types';

const baseUrl = `${process.env.NEXT_PUBLIC_ENV_BASE_URL}user/`; 



const getUser = async () => {

	const config = {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
			'Authorization' : `Bearer ${process.env.NEXT_PUBLIC_ENV_TOKEN}`
		}		
	};

	try {
		const res = await fetch(`${baseUrl}me`, config);
		if(res){		
			const user : User | unknown = await res.json();			
			return user;
		}
		
	} catch (error) {
		console.log(error);
	}


	
};

const userService =  {
	getUser
};

export  default userService;