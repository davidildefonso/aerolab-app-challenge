
export interface User { 	
  _id:  string
  name: string
  points: number
  createDate: Date
  redeemHistory: [string]
  __v: number
  success?:  boolean
  message?: string
}

export interface RequestError { 	
  success?:  boolean
  message?: string
}

export interface PointsRequest{
	"New Points" : number
	message: string
	success?:  boolean
}

export interface RedeemResponse{
	message: string
}


export interface RedeemError{
	error: string
}

export interface Product{
	img: {
		url: string
		hUrl: string
	}
	createDate: Date
	_id: string
	name: string
	cost: number
	category: string
	productId: string

}


export interface HistoryFailed{
	success:  boolean
	message: string
}


export interface Config{
	method: string
	headers: {
		"Content-Type": string
		"Authorization": string
	}
	body?: string | {
		points: number 
	}
}
