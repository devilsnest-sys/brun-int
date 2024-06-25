import { ECustomerStatus, ICustomersTableRow } from "@modals/admin/customers.types";

export const CUSTOMERSDATA: ICustomersTableRow[] = [
    {
        id: '1',
        name: 'John Doe',
        email: 'John.doe@gmail.com',
        mob: '1234567890',
        orders: 5,
        status: ECustomerStatus.ACTIVE
    },
    {
        id: '1',
        name: 'John Doe',
        email: 'John.doe@gmail.com',
        mob: '1234567890',
        orders: 5,
        status: ECustomerStatus.INACTIVE
    },
    {
        id: '1',
        name: 'John Doe',
        email: 'John.doe@gmail.com',
        mob: '1234567890',
        orders: 5,
        status: ECustomerStatus.ACTIVE
    },
    {
        id: '1',
        name: 'John Doe',
        email: 'John.doe@gmail.com',
        mob: '1234567890',
        orders: 5,
        status: ECustomerStatus.INACTIVE
    },
]

export const addCustomerInitialValues = {
    firstname: '',
    lastname: '',
    email: '',
    password: ''
}