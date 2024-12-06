export interface RoundCreate {
  description: string;
}

export interface UserbyRoundCreate {
  userId: number;
  roundId: number,
}

export interface RoundListResponse{
  RoundId: number,
  description: string,
}