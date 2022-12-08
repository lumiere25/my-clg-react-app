import { Route, Routes } from 'react-router-dom';


import './App.css';
import Header from "./components/header/Header";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Footer from "./components/footer/Footer";


function App() {
  return (
    <div className="App">
    <Header/>
    <Footer/>
    <main>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />
    </Routes>
    </main>
</div>
  );
}

export default App;