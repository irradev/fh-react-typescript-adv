import { Formik, Form} from 'formik'
import { MySelect, MyTextInput } from '../components';
import formJson from '../data/custom-form.json';
import * as Yup from 'yup';

const initialValues: {[key: string]: any} = {};
const requiredFields: {[key: string]: any} = {};

for (const input of formJson) {
  initialValues[input.name] = input.value;
  
  if (!input.validations) continue;
  
  let schema = Yup.string();
  
  for (const rule of input.validations) {
    if (rule.type === 'required') {
      schema = schema.required('Este campo es requerido');
    }

    if (rule.type === 'minLenght' ) {
      schema = schema.min((rule as any).value || 2, `Debe contener almenos ${(rule as any).value || 2 } caracteres`)
    }

    if (rule.type === 'email') {
      schema = schema.email('El correo no es válido')
    }
  }

  requiredFields[input.name] = schema;
}

const validationSchema = Yup.object({...requiredFields});

export const DynamicFormPage = () => {
  console.log(formJson);

  return (
    <div>
      <h1>Dynamic Form Page</h1>

      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          console.log(values)
        }}
        validationSchema={validationSchema}
      >
        { (formik) => (
          <Form noValidate>
            {
              formJson.map(({type, name, placeholder, label, options }: {[key: string]: any}) => {
                
                if (type === 'input' || type === 'password' || type === 'email') {
                  return <MyTextInput 
                          key={name}
                          type={(type as any)} 
                          name={name} 
                          placeholder={placeholder}
                          label={label}
                        />
                } else if (type === 'select') {
                  return options ? <MySelect key={name} name={name} label={label} options={options}/> : <span key={'select-nothing'}>No se encontraron opciones</span>
                }

                throw new Error(`El tipo ${type} no está soportado.`);
                // return <span>Type {type} no soportado</span>;

              })
            }
            <button type='submit'>Submit</button>  
          </Form>
        )}

      </Formik>
    </div>
  )
}
