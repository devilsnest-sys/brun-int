export enum ECustomerStatus { 
  INACTIVE = 'INACTIVE',
  ACTIVE = 'ACTIVE',
}

export interface ICustomersTableRow {
  id: string;
  name: string;
  email: string;
  mob: string;
  orders: number;
  status: ECustomerStatus;
}