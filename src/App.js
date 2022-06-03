import React from 'react';
import './styles/App.css';
import './styles/styleAlejandro.css';
import { Authenticator } from '@aws-amplify/ui-react';
import { I18n } from 'aws-amplify';
import { translations } from '@aws-amplify/ui-react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/pages/Layout";
import { Home } from "./components/templates/Home";
import { Arriendo } from "./components/templates/Arriendo"
import { Reparacion } from './components/templates/Reparacion';
import { Login } from './components/templates/Login';


// language settings 
I18n.putVocabularies(translations);
I18n.setLanguage('es');
I18n.putVocabularies({
  es: {
    'Sign In': 'Registrarse',
    'Sign Up': 'Regístrate',
    'Email': 'Correo',
    'Create Account': 'Crear cuenta',
    'Family Name': 'Apellido',
    'Given Name': 'Nombre',
    'Send code': 'Enviar código',
    'Enter your email': 'Introduzca su correo'
  }
});

function MyRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index path='/home' element={<Home />} />
          <Route
            path='/protected1'
            element={
              // <RequireAuth>
                <Arriendo />
              // {/* </RequireAuth> */}
            }
          />
          <Route
            path='/protected2'
            element={
              // <RequireAuth>
                <Reparacion />
              // </RequireAuth>
            }
          />
          <Route path='/login' element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

function App() {
  return (
    <Authenticator.Provider>
      <MyRoutes />
    </Authenticator.Provider>
  );
}

export default App;