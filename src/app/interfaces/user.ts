export interface User {
    name: string,
    groupFamilyId: number
}

export interface UserUpdate{
    name: string,
    groupId: number
}
  
export interface UserCreateResponse{
    "id": number,
    "keyUser": string
  }