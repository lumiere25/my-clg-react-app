import React, { useState, useEffect, useContext, createContext } from 'react';
import { ThemeContext } from './components/ThemeProvider';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';

// import AuthContextProvider from './store/auth-context';

import './App.css';
import Header from "./components/header/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import Login from './pages/Login';
import FoodGallery from './pages/FoodGallery';
import TodoListPage from "./pages/todoList";
import AuthContext from './store/auth-context';


// import Logout from './pages/Logout';
import Profile from './pages/Profile';
import NotFound from "./pages/NotFound";
import Footer from "./components/footer/Footer";
import SwitchButton from './components/ThemeButton';




export default function App() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.darkMode
  let history = useNavigate();

  const [ isLoggedIn, setIsLoggedIn, ] = useState(false);
  const [ name, setName ] = useState("");
  const [ email, setEmail ] = useState("");
  
  useEffect(() => {
    const storedUserLoggedInInformation = localStorage.getItem("isLoggedIn");

    if(storedUserLoggedInInformation === "1") {
      setIsLoggedIn(true);
    }
  }, []);
 
  const loginHandler = (email, password, name) => {
    localStorage.setItem("isLoggedIn", "1");
    setIsLoggedIn(true);
    setName(name);
    setEmail(email);
    history("/home");
  };

  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
    console.log("I'm logged out");
    history("/home");
   };
  
return (
    <AuthContext.Provider
    value={{
      isLoggedIn: isLoggedIn,
      name: name,
      email: email,
      onLogin: loginHandler,
      onLogout: logoutHandler
    }}
   >
    <div className={`bg-theme ${darkMode ? "bg-dark" : "bg-light"}`}>
    <SwitchButton />
    <h2 className={`heading-banner ${darkMode ? "heading-dark" : "heading-light"}`}>
    </h2>
    <p className={`para ${darkMode ? "para-dark" : "para-light"}`}>
    </p>
    <Header/>
    <main>

    <Routes>
    <Route path="/home" className="active" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/projects" element={ <Projects />} />
    <Route path="/food-gallery" element={<FoodGallery />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/todo-app" element={<TodoListPage />} />
    {!isLoggedIn && (
      <Route path="/login" element= {<Login />} />
    )}

   

    {isLoggedIn && (
      <Route path="/profile" element={<Profile />}/>
    )}




    <Route path="*" element={<NotFound />} />
    </Routes>
   </main>
  <Footer/>
  </div>
  </AuthContext.Provider>

  );
    
 }


