import React from 'react';
import ReactDOM from 'react-dom/client';
import { GifExpertApp } from './GifExpertApp';
import './styles.css';

// Para crear el proyecto 
// npm create vite
// se borran archivos menos el main

//se instalan los modulos de node con npm i 
// https://es.reactjs.org/docs/faq-structure.html  Estructura de archivos
// https://hackernoon.com/structuring-projects-and-naming-components-in-react-1261b6e18d76 Estructura de archivos


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GifExpertApp />
  </React.StrictMode>
)
