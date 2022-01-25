
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
  success:  boolean
  message: string
}
