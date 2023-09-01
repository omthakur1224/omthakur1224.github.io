
import './App.css';
// import Nav from './components/Nav';
import Navbar from './components/Navbar';
import Test from './components/Toggle';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import TechStack from './pages/TechStack';
import json2mq from 'json2mq';
import useMediaQuery from '@mui/material/useMediaQuery';
import NewNav from './components/NewNav'
import Toggle from './components/Toggle';
import HashScrollPage from './pages/Hash';
import Contact from './pages/Contact';
function App() {
  return (
    <div>
      <section >
        <Navbar />
      </section>
      <section id='Home'>
        <Home />
      </section>
      <section id='About'>
        <About />
      </section>
      <section id='Skills'>
        <TechStack />
      </section>
      <section id='Projects'>
        <Projects />
      </section>
      <section id="Contacts">
        <Contact />
      </section>

      {/* <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/About' element={<About/>} />
        <Route path='/Projects' element={<Projects/>} />
        <Route path='/Skills' element={<TechStack/>}/>
      </Routes> */}
    </div>
  );
}

export default App;
