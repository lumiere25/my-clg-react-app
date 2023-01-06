import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ThemeProvider } from './components/ThemeProvider';
// import AuthContextProvider from './store/auth-context';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>

    <BrowserRouter>
     <ThemeProvider>
       <App />
    </ThemeProvider>  
    </BrowserRouter>


</React.StrictMode>
);


