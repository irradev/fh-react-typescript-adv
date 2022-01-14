import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import { MyCheckbox, MySelect, MyTextInput} from '../components';

import '../styles/styles.css';

export const FormikAbstraction = () => {
  console.log('render abstraction page');

  return (
    <div>
      <h1>Formik Abstraction</h1>

      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          terms: false,
          jobType: '',
          knowledgeLevel: ''
        }}
        onSubmit={(values ) => {
          console.log(values);
        }}
        validationSchema={
          Yup.object({
            firstName: Yup.string()
                        .max(15, 'Debe tener 15 caracteres o menos')
                        .required('Requerido'),

            lastName: Yup.string()
                        .max(10, 'Debe tener 10 caracteres o menos')
                        .required('Requerido'),

            email: Yup.string()
                        .email('El correo no tiene un formato válido')
                        .required('Requerido'),

            terms: Yup.boolean()
                        // .oneOf([true], 'Debe aceptar los términos y condiciones')
                        .isTrue('Debe aceptar los términos y condiciones'),
            
            jobType: Yup.string()
                        .notOneOf(['it-jr', ''], 'Ésta opción no es permitida')
                        .required('Requerido'),
            
            knowledgeLevel: Yup.string()
                        .required('Requerido')
          })
        }
      >

      {
        (formik) => (
          <Form >
            <MyTextInput 
              name={'firstName'} 
              placeholder='Isra'
            />
            
            <MyTextInput 
              label={'Last Name'} 
              name={'lastName'} 
              placeholder='Vazquez' 
            />

            <MyTextInput 
              label={'Email Address'} 
              name={'email'} 
              placeholder='jon@google.com' 
              type='email'
            />
            
            <MySelect 
              label="Job Type"
              name="jobType" 
              options={[
                ['Pick Something', ''],
                ['Developer'],
                ['Designer'],
                ['IT Senior'],
                ['IT Jr.', 'it-jr']
              ]} 
            />

            <MySelect name={'knowledgeLevel'}>
              <option value="">Pick Something</option>
              <option value="begginer">Begginer</option>
              <option value="advanced">Advanced</option>
              <option value="expert">Expert</option>
            </MySelect>


            <MyCheckbox label={'Terms and Conditions'} name={'terms'} />

            <button type="submit">Submit</button>
          </Form>
        )
      }

      </Formik>


    </div>
  )
}
