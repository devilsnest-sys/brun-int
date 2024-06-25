export interface IOrdersTableRow {
  id: string;
  quantity: string;
  name: string;
  date: string;
  price: string;
  status: EStatusFilter;
}
export enum EStatusFilter {
  PENDING = "PENDING",
  COMPLETED = "COMPLETED",
  CANCELLED = "CANCELLED",
}

export enum AnalyticsDuration {
  WEEK = 'WEEK',
  MONTH = 'MONTH',
  MONTH_6 = '6 MONTH',
  YEAR = 'YEAR'
}

export enum EActiveStatus {
  ACTIVE = "ACTIVE",
  INACTIVE = "INACTIVE",
}

export enum ESortFilter {
  NEWEST = "NEWEST",
  OLDEST = "OLDEST",
}