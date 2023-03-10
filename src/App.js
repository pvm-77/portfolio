import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Resume from './components/Resume/Resume';
import Project from './components/Project/Project';
import Blogs from './components/Blogs/Blogs';
import Navbar from './components/Navbar/Navbar';
import '../src/Assets/style.css'
import Footer from './components/Footer/Footer';
function App() {
  return (
    <>
      
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/project" element={<Project />} />
        <Route path="/blogs" element={<Blogs />} />

      </Routes>
      <Footer/>
    </>
  );
}

export default App;
