import React from 'react';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Amplify} from 'aws-amplify';
import { createRoot } from 'react-dom/client';
import config from './aws-exports';
Amplify.configure(config);

const container = document.getElementById('root')
const root = createRoot(container);
root.render(<App />)

reportWebVitals();
