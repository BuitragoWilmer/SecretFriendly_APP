export interface GroupFamily {
    id: number;
    nameGroupFamily: string;
  }

export interface GroupFamilyCreate {
  nameGroupFamily: string;
}

export interface GroupFamilyList {
  total: number;
  status: number;
  groupsFamilyList: GroupFamily[]
}