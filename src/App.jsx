import './App.css'
import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from './pages';
import About from './pages/about';
import Education from './pages/education';
import Abilities from './pages/abilities';
import Projects from './pages/projects';
import Contact from './pages/contact';
import SignUp from './pages/signup';
import SignIn from './pages/signin';


function App() {
  

  return (
    <HashRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/abilities" element={<Abilities />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/education" element={<Education />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </HashRouter>
  )
}

export default App
