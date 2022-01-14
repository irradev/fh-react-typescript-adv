
import { useForm } from '../hooks/useForm';
import '../styles/styles.css';

interface RegisterForm {
  name: string;
  email: string;
  password: string;
  passwordRepeat: string;
}

export const RegisterPage = () => {

  const { formValues, onChange, resetForm, isValidEmail} = useForm<RegisterForm>({
    name: "",
    email: "",
    password: "",
    passwordRepeat: ""
  });

  const { name, email, password, passwordRepeat } = formValues;
  
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formValues);
  };

  return (
    <div>
      <h1>Register Page</h1>

      <form
        noValidate
        onSubmit={onSubmit}
      >
        <input 
          type="text"
          placeholder="Name"
          name="name"
          value={name}
          onChange={onChange}
          className={`${name.trim().length <= 0 && 'has-error'}`}
        />
        { name.trim().length <= 0 && <span>Este campo es necesario</span>}

        <input 
          type="email"
          placeholder="Email"
          name="email"
          value={email}
          onChange={onChange}
          className={`${!isValidEmail(email) && 'has-error'}`}
        />
        { !isValidEmail(email) && <span>El email no es correcto</span>}

        <input 
          type="password"
          placeholder="Password"
          name="password"
          value={password}
          onChange={onChange}
        />
        { password.trim().length <= 0 && <span>Este campo es necesario</span>}
        { password.trim().length < 6 && password.trim().length > 0 && <span>El password debe tener al menos 6 caracteres</span>}

        <input 
          type="password"
          placeholder="Password repeat"
          name="passwordRepeat"
          value={passwordRepeat}
          onChange={onChange}
        />
        { 
          passwordRepeat.trim().length <= 0 ? <span>Este campo es necesario</span>
          : passwordRepeat !== password && <span>Los passwords no coinciden </span>
        }
        
      
        

        <button type="submit">Create</button>
        <button type="button" onClick={resetForm}>Reset</button>
      </form>
    </div>
  )
}
