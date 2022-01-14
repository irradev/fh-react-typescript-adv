import { useFormik } from 'formik';
import * as Yup from 'yup';

import '../styles/styles.css';

export const FormikYupPage = () => {
  console.log('render yup page');
  
  /*
    const { 
      values, 
      errors, 
      touched, 
      handleChange, 
      handleSubmit, 
      handleBlur,
      getFieldProps
    } = useFormik({...
      getFiledProps es como si puesieramos:
         onChange={handleChange}
         onBlur={handleBlur}
         value={values.firstName}
  */

  const { errors, touched, handleSubmit, getFieldProps } = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: ''
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
                  .max(15, 'Debe tener 15 caracteres o menos')
                  .required('Requerido'),

      lastName: Yup.string()
                  .max(10, 'Debe tener 10 caracteres o menos')
                  .required('Requerido'),

      email: Yup.string()
                  .email('El correo no tiene un formato válido')
                  .required('Requerido')
    })
  });

  return (
    <div>
      <h1>Formik Yup</h1>

      <form
        noValidate
        onSubmit={handleSubmit}
      >
        <label htmlFor="firstName">First Name</label>
        <input type="text" {...getFieldProps('firstName')} />
        { touched.firstName && errors.firstName && <span>{errors.firstName}</span> }

        <label htmlFor="lastName">Last Name</label>
        <input type="text" {...getFieldProps('lastName')} />
        { touched.lastName && errors.lastName && <span>{errors.lastName}</span> }

        <label htmlFor="email">Email Adress</label>
        <input type="text" {...getFieldProps('email')} />
        { touched.email && errors.email && <span>{errors.email}</span> }

        <button type="submit">Submit</button>
        
      </form>
    </div>
  )
}
