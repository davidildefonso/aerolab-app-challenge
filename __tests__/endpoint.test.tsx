import userService from '../services/user';
import productService from '../services/product';
import redeemService from '../services/redeem';
import {User, PointsRequest, Product, HistoryFailed, RequestError, RedeemError, RedeemResponse} from '../types';
import {user,  mockApi, products, emptyUserPoints} from '../utils/testUtils';

 // eslint-disable-next-line @typescript-eslint/ban-ts-comment
 // @ts-ignore
global.fetch = jest.fn(mockApi) as   unknown;

describe("User: ", () => {

	
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

	describe("add user points", () => {
		test('should add user points if is authorized', async () => {			
				const res = await userService.addPoints("ENV_TOKEN", 5000) as PointsRequest;
				expect(res).toBeDefined();
				expect(res.message).toEqual('Points Updated');
				expect(res["New Points"]).toEqual( user.points);
				expect(res.success).not.toBeDefined();
		});

		test('should return error message if is not authorized', async () => {				
				const res = await userService.addPoints("ENV_TOKEN_INCORRECT", 5000) as PointsRequest;	
				expect(res["New Points"]).not.toBeDefined();
				expect(res.message).toEqual("Failed to authenticate token.");
		});
	});

	describe("get user history", () => {
		test('should return the  user products history if authorized', async () => {			
				const res = await userService.getHistory("ENV_TOKEN") as [Product];
				expect(res).toBeDefined();
				expect(res).toEqual(user.redeemHistory);
		});

		test('should return error message if is not authorized', async () => {				
				const res = await userService.getHistory("ENV_TOKEN_INCORRECT") as HistoryFailed ;	
				expect(res).not.toEqual(user.redeemHistory);
				expect(res.message).toEqual("Failed to authenticate token.");
				expect(res.success).toEqual(false);
		});
	});


});


describe("Products", () => {
	test('should return the  list of  products available if authorized', async () => {	
			
			const res = await productService.getAll("ENV_TOKEN") as [Product] | RequestError;
			expect(res).toBeDefined();
			expect(res).toEqual(products);
			expect(res).not.toHaveProperty("message");
			expect(res).not.toHaveProperty("success");
	});

	test('should return error message if is not authorized', async () => {				
			const res = await productService.getAll("ENV_TOKEN_INCORRECT") as  RequestError;
			expect(res).not.toEqual(products);	
			expect(res).toEqual({ success: false, message: 'Failed to authenticate token.' });
		
	});

});


describe("Redeem", () => {

	let id: string;

	beforeEach(() => {
		id = products[0]._id;
	});

	describe(" if authorized:" , () => {
		test('should redeem a product  if has enough points ', async () => {			
				const res = await redeemService.redeem("ENV_TOKEN", id ) as RedeemResponse;
				
				expect(res).toBeDefined();
				expect(res.message).toEqual("You've redeem the product successfully");
				expect(res).not.toHaveProperty("success");
		});

		test('should not  redeem a product  if does not have enough points ', async () => {		
				emptyUserPoints();	
				const res = await redeemService.redeem("ENV_TOKEN", id ) as RedeemError;
				
				expect(res).toBeDefined();
				expect(res.error).toEqual("User don't have enogh points");
				expect(res).not.toHaveProperty("success");
		});
	});



	test('should return error message if is not authorized', async () => {				
			const res = await redeemService.redeem("ENV_TOKEN_INCORRECT", id) as RequestError;	
			expect(res).not.toEqual({
				"message": "You've redeem the product successfully"
			});
			expect(res.message).toEqual("Failed to authenticate token.");
			expect(res.success).toEqual(false);
	});

});