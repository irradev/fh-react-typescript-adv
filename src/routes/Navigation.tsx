import {
  BrowserRouter,
  Routes,
  Route,
  NavLink,
  Navigate
} from 'react-router-dom';

import { 
  DynamicFormPage,
  RegisterPage,
  RegisterFormikPage,
  FormikBasicPage,
  FormikYupPage,
  FormikYupPageSemi,
  FormikComponents,
  FormikAbstraction
} from '../03-forms/pages/';

import logo from '../logo.svg';


export const Navigation = () => {
  return (
    <BrowserRouter>
      <div className="main-layout">
        <nav>
            <img src={ logo } alt="React Logo" />
          <ul>
            <li>
              <NavLink 
                to="/home" 
                className={({isActive}) => isActive ? 'nav-active' : '' } >
                  Home
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/register" 
                className={({isActive}) => isActive ? 'nav-active' : '' } >
                  Register
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/formik-basic" 
                className={({isActive}) => isActive ? 'nav-active' : '' } >
                  Formik basic
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/formik-yup" 
                className={({isActive}) => isActive ? 'nav-active' : '' } >
                  Formik Yup
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/formik-components" 
                className={({isActive}) => isActive ? 'nav-active' : '' } >
                  Formik Components
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/formik-abstraction" 
                className={({isActive}) => isActive ? 'nav-active' : '' } >
                  Formik Abstraction
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/formik-register" 
                className={({isActive}) => isActive ? 'nav-active' : '' } >
                  Formik Register
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/dynamic-form" 
                className={({isActive}) => isActive ? 'nav-active' : '' } >
                  Dynamic Form
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/formik-yup-semi" 
                className={({isActive}) => isActive ? 'nav-active' : '' } >
                  Formik-Yup-SEMI
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/about" 
                className={({isActive}) => isActive ? 'nav-active' : '' } >
                  About
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/users" 
                className={({isActive}) => isActive ? 'nav-active' : '' } >
                  Users
              </NavLink>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="about" element={<h1>About Page</h1>} />
          <Route path="users" element={<h1>Users Page</h1>} />
          <Route path="home" element={<h1>Home Page</h1>} />
          <Route path="register" element={ <RegisterPage/> } />
          <Route path="formik-basic" element={ <FormikBasicPage/> } />
          <Route path="formik-yup" element={ <FormikYupPage/> } />
          <Route path="formik-components" element={ <FormikComponents/> } />
          <Route path="formik-abstraction" element={ <FormikAbstraction/> } />
          <Route path="formik-register" element={ <RegisterFormikPage/> } />
          <Route path="dynamic-form" element={ <DynamicFormPage/> } />
          <Route path="formik-yup-semi" element={ <FormikYupPageSemi/> } />
            
          <Route path="/*" element={<Navigate to="/home" replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}