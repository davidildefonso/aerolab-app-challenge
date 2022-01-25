import userService from '../services/user';
import {User} from '../types';
import {user, userFailed} from '../utils/testUtils';

 // eslint-disable-next-line @typescript-eslint/ban-ts-comment
 // @ts-ignore
global.fetch = jest.fn((_url, config) => {

	if (!config.headers.Authorization || config.headers.Authorization !== `Bearer ${process.env.ENV_TOKEN}`) {
		return Promise.resolve({
			json: () => Promise.resolve(userFailed)
		});
	}
	return Promise.resolve({
		json: () => Promise.resolve(user)
	});
}) as   unknown;


describe("get user info", () => {
	test('should load user data if is authorized', async () => {		
					
			const user = await userService.getUser("ENV_TOKEN") as User;
			expect(user).toBeDefined();
			expect(user.name).toEqual('elias doe');
			expect(user.points).toEqual(5000);
			expect(user.success).not.toBeDefined();
			expect(user.message).not.toBeDefined();
	});

	test('should return error message if is not authorized', async () => {		
					
			const user = await userService.getUser("ENV_TOKEN_INCORRECT") as User;			
			
			expect(user.name).not.toEqual('elias doe');
			expect(user.points).not.toEqual(5000);
			expect(user.success).toEqual(false);
			expect(user.message).toEqual("Failed to authenticate token.");
	});
});
