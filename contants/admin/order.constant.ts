import { EStatusFilter, IOrdersTableRow } from "@modals/admin";

export const ORDERSDATA: IOrdersTableRow[] = [
    {
      id: '1',
      quantity: "1",
      name: 'Product Name',
      date: '12/12/2021',
      price: "100",
      status: EStatusFilter.COMPLETED,
    },
    {
      id: '2',
      quantity: "2",
      name: 'Product Name',
      date: '12/12/2021',
      price: "100",
      status: EStatusFilter.PENDING,
    },
    {
      id: '3',
      quantity: "3",
      name: 'Product Name',
      date: '12/12/2021',
      price: "100",
      status: EStatusFilter.CANCELLED,
    },
    {
      id: '4',
      quantity: "4",
      name: 'Product Name',
      date: '12/12/2021',
      price: "100",
      status: EStatusFilter.COMPLETED,
    },
  ]