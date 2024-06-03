//main.js: Archivo principal que inicia la aplicación React y monta el componente principal en el DOM.
// Bibliotecas fundamentales de React para construir y renderizar componentes
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
//import './CSS/index.css'
//  Importas el componente BrowserRouter de react-router-dom, que proporciona la funcionalidad de enrutamiento para tu aplicación de React.
import { BrowserRouter } from 'react-router-dom'

// Creo un root de React
ReactDOM.createRoot(document.getElementById('root')).render(
  // El componente BrowserRouter proporciona la funcionalidad de enrutamiento, permitiendo que tu aplicación navegue entre diferentes vistas o componentes en función de la URL.
  <BrowserRouter>
    <App />
  </BrowserRouter>,
)

// DOM (document object model), es una interfaz que le permite a los archivos JS poder acceder y manipular elementos HTML

// La funcion render lo que hace es convertir componentes de react en elementos que el DOM pueda mostrar.

// Main.jsx lo que hace es crear un root y toma como argumento el elemento del DOM con id = 'root' donde sera montado nuestra aplicacion REACT. Luego renderiza APP en el lugar especificado por el DOM. 

// react-router-dom es una biblioteca que facilita la implementación de enrutamiento en aplicaciones React. 

