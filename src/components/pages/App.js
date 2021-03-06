import React from 'react';
import '../../styles/App.css';
import '../../styles/styleAlejandro.css';
import '../../styles/styleNicolas.css';
import { Authenticator } from '@aws-amplify/ui-react';
import { I18n } from 'aws-amplify';
import { translations } from '@aws-amplify/ui-react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../templates/Home";
import { Arriendo } from "../templates/Arriendo"
import { Reparacion } from '../templates/Reparacion';
import { Login } from '../templates/Login';
import { RequireAuth } from '../atoms/RequireAuth'
import { Header } from '../organisms/Header';
import { Footer } from '../organisms/Footer';



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
    'Enter your email': 'Introduzca su correo',
    'Your code is on the way. To log in, enter the code we emailed to': 'Tu código está en camino, para registrarte entra el código que te enviamos',
    'We Emailed You': 'Te enviamos un correo',
    'Enter your code': 'Ingresa tu código'
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