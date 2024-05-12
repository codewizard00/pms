import * as yup from 'yup';


export const createProductSchema = yup.object().shape({
    name: yup.string().required("required"),
    description: yup.string().required("required"),
    product_brand: yup.string().required("required"),
    product_mrp: yup.number().required("required").positive('positive').integer('integer'),
    product_selling_price: yup.number().required("required").positive('positive').integer('integer'),
    category: yup.string().required("required"),
    terms_and_conditions: yup.string().required("required"),
  });