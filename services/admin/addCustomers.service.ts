import * as yup from 'yup';
import { EndpointService } from '@services';
import network from '@services/network/network.service';
import { ISignupValuesDB } from '@modals/login/login.types';

export const addCustomerValidationSchema = yup.object({
    firstname: yup.string().required('First Name is required'),
    lastname: yup.string().required('Last Name is required'),
    email: yup.string().email('Invalid email').required('Email is required'),
    password: yup.string().required('Password is required')
})

export const addCustomerAPI = async (payload: ISignupValuesDB) => {
    try {
        const response = await network.post(EndpointService.addCustomer, payload)
        return response.data
    } catch (error) {
        throw error
    }
}