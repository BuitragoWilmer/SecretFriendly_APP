export interface GiftCreate {
  message: string;
  userId: number;
}

export interface GiftbyUserResponse{
  userId: number,
  message: string,
}