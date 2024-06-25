import * as Yup from 'yup';

export const returnValidationSchema = Yup.object({
    country: Yup.string().required('Country is required'),
    firstname: Yup.string().required('First name is required'),
    lastname: Yup.string().required('Last name is required'),
    company: Yup.string(),
    phone: Yup.string().required('Phone number is required'),
    address: Yup.string().required('Address is required'),
    locality: Yup.string().required('Locality is required'),
    state: Yup.string().required('State is required'),
    pincode: Yup.string().required('Pincode is required'),
    moreinfo: Yup.string()
});