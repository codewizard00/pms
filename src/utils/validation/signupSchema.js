import * as Yup from 'yup';

export const SignUpSchema = Yup.object().shape({
    name:Yup.string().required("required"),
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  });