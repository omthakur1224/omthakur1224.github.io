import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import TechStack from './pages/TechStack';
import json2mq from 'json2mq';
import useMediaQuery from '@mui/material/useMediaQuery';
function App() {
  const matches = useMediaQuery(
    json2mq({
      minWidth: 300,
      maxWidth:600,
    }),
  ); 
  return (
    <div className="App">
      <Nav/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>} />
        <Route path='/projects' element={<Projects/>} />
        <Route path='/tech-stack' element={<TechStack/>}/>
      </Routes>
    </div>
  );
}

export default App;
