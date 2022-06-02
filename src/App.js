import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { I18n } from 'aws-amplify';
import { translations } from '@aws-amplify/ui-react';
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

function App() {
  return (
    <Authenticator>
      {({ signOut, user }) => (
      <div className="App">
        <header className='App-header'>
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Hola {user.attributes.email} bienvenido a MasterBikes!</h1>
          <button onClick={signOut}>Cerrar Sesion</button>
        </header>
      </div>
      )}
    </Authenticator>
  );
}

export default App;