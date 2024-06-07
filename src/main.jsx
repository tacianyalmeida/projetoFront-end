import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom';
import App from './Componentes/App'
import Login from './Componentes/Login'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter> 
  
    <App/>
    </BrowserRouter>
  </React.StrictMode>,
)
