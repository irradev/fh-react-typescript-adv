import { useFormik } from 'formik';
import * as Yup from 'yup';

import '../styles/styles.css';


export const FormikYupPageSemi = () => {
  
    const formNames = {
      firstName: {name: 'firstName', title: 'First Name', type: 'text'},
      lastName: {name: 'lastName', title: 'Last Name', type: 'text'},
      email: {name: 'email', title: 'Email', type: 'email'},
    }

    const { values, errors, touched, handleChange, handleSubmit, handleBlur } = useFormik({
    initialValues: {
      [formNames.firstName.name]: '',
      [formNames.lastName.name]: '',
      [formNames.email.name]: '',
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validationSchema: Yup.object({
      [formNames.firstName.name]: Yup.string()
                                .max(15, 'Debe tener 15 caracteres o menos')
                                .required('Requerido'),

      [formNames.lastName.name]: Yup.string()
                                .max(10, 'Debe tener 10 caracteres o menos')
                                .required('Requerido'),

      [formNames.email.name]: Yup.string()
                                .email()
                                .required('Requerido'),
    })
  });

  return (
    <div>
      <h1>Formik Yup Semi</h1>

      <form
        noValidate
        onSubmit={handleSubmit}
      >
        {
          Object.entries(formNames).map(([key, value]) => (
            <div key={key}>
              <label htmlFor={key}>{value.title}</label>
              <input
                type={value.name}
                name={key}
                onChange={handleChange}
                value={values[key]}
                onBlur={handleBlur}
              />
              { touched[key] && errors[key] && <span>{errors[key]}</span> }
            </div>
          ))
        }

        <button type="submit">Submit</button>
        
        

      </form>
    </div>
  )
}
