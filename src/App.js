import React from 'react';
import './App.css';
import { Authenticator } from '@aws-amplify/ui-react';
import { I18n } from 'aws-amplify';
import { translations } from '@aws-amplify/ui-react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Home } from "./components/Home";

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
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

function App() {
  return <MyRoutes />;
}

export default App;