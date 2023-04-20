import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './Home';
import Header from './Header';
import AboutUs from './AboutUs';
import TechStack from './TechStack';
import Projects from './Projects';
import Experience from './Experience';
import Contact from './Contact';
import Error from './Error';
import FrontEnd from './components/FrontEnd';
import BackEnd from './components/BackEnd';
import OtherTech from './components/OtherTech';

function App() {
  return (

    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/portfolio' element={<Home />} />
        <Route path='/aboutUs' element={<AboutUs />} />
        <Route path='/techStack' element={<TechStack />} >
          <Route path='/techStack' element={<FrontEnd />} />
          <Route path='/techStack/backEnd' element={<BackEnd />} />
          <Route path='/techStack/otherTech' element={<OtherTech />} />
        </Route>
        <Route path='/projects' element={<Projects />} />
        <Route path='/experience' element={<Experience />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
