import React from 'react';
import './styles/App.css';
import './styles/styleAlejandro.css';
import './styles/styleNicolas.css';
import { Authenticator } from '@aws-amplify/ui-react';
import { I18n } from 'aws-amplify';
import { translations } from '@aws-amplify/ui-react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./components/templates/Home";
import { Arriendo } from "./components/templates/Arriendo"
import { Reparacion } from './components/templates/Reparacion';
import { Login } from './components/templates/Login';
import { RequireAuth } from './components/atoms/RequireAuth';
import { Header } from './components/organisms/Header';
import { Footer } from './components/organisms/Footer';


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
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
          <Route
            path='/protected1'
            element={
              <RequireAuth>
                <Arriendo />
              </RequireAuth>
            }
          />
          <Route
            path='/protected2'
            element={
              <RequireAuth>
                <Reparacion />
              </RequireAuth>
            }
          />
          <Route path='/login' element={<Login />} />
      </Routes>
      <Footer />
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