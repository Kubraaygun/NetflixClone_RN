import * as Yup from 'yup';

const NewListSchema = Yup.object().shape({
  name: Yup.string().required('Zorunlu Alan'),
  surname: Yup.string().required('Zorunlu Alan'),
  phoneNumber: Yup.string()
    .max(20, 'Max 20')
    .min(11, 'Min 11')
    .required('Zorunlu Alan'),
  email: Yup.string()
    .email('Geçerli Bir E-Posta Adresi Girin')
    .required('Zorunlu Alan'),
  gender: Yup.string().required('Zorunlu Alan'),
  age: Yup.number().min(18, 'Min 18').max(80, 'Max 80'),
});
