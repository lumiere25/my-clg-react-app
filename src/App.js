import { Route, Routes } from 'react-router-dom';

import './App.css';
import Header from "./components/header/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import FoodGallery from './pages/FoodGallery';
import ContactDetails from './components/ContactDetails/ContactDetails';
import TodoListPage from "./pages/todoList";
import Footer from "./components/footer/Footer";


function App() {
  return (
    <div className="App">
    <Header/>
    <ContactDetails />
    <main>

    <Routes>
    <Route path="/home" className="active" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/projects" element={ <Projects />} />
    <Route path="/food-gallery" element={<FoodGallery />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/todo-app" element={<TodoListPage />} />
    </Routes>
    </main>
    <Footer/>
</div>
  );
}

export default App;