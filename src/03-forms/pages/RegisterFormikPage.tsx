import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import { MyTextInput} from '../components';

import '../styles/styles.css';

export const RegisterFormikPage = () => {

  return (
    <div>
      <h1>Register Formik</h1>

      <Formik
        initialValues={{
          name: '',
          email: '',
          password: '',
          passwordRepeat: ''
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={
          Yup.object({
            name: Yup.string()
                          .min(2, 'El nombre debe contener almenos 2 caracteres')
                          .max(15, 'El nombre no debe sobrepasar los 15 caracteres')
                          .required('El nombre es requerido'),
            email: Yup.string()
                          .email('El correo no es válido')
                          .required('El correo es requerido'),
            password: Yup.string()
                          .min(6, 'El password debe contener almenos 6 caracteres')
                          .required('El password es requerido'),
            passwordRepeat: Yup.string()
                          .equals([Yup.ref('password')], 'Las contraseñas deben coincidir')
                          .required('Requerido')
          })
        }
      >
        {({handleReset}) => (
          <Form>
            <MyTextInput name={'name'} placeholder='Name' />
            <MyTextInput name={'email'} placeholder='Correo@electronico.com' />
            <MyTextInput name={'password'} placeholder='Contraseña' type='password' />
            <MyTextInput name={'passwordRepeat'} placeholder='Contraseña repetir' type='password' />

            <button type="submit">Create</button>
            <button type="reset" onClick={handleReset}>Reset</button>
          </Form>
        )}

      </Formik>
    </div>
  )
}
