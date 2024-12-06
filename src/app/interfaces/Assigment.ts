export interface secretUserAssigmentRequest {
  userId: number | null;
  key: string ;
  roundId: number | null;
}


export interface secretUserAssigmentResponse{
  code: number,
  mensaje: string,
  assigments: {
    userId: number,
    secretSantaId: number,
    user: {
      id: number,
      name: string,
      groupFamilyId: number
    },
    secretSanta: {
      id:number,
      name: string,
      groupFamilyId: number
    }
  }
}