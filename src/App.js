import { Typography } from '@mui/material';
import './App.css';
import {BrowserRouter as Router , Route , Routes } from "react-router-dom"
import Home from "../src/componants/Home/Home"
import About from "../src/componants/About/About"
import Contact from "../src/componants/Contact/Contact"
import Header from "../src/componants/Header/Header"
import Footer from "../src/componants/Footer/Footer"


function App() {

  return (
   <>
   <Router>
    <Header/>
    <Routes>
      < Route path="/" element={<Home/>} />
      < Route path="/About" element={<About/>} />
      < Route path="/Contact" element={<Contact/>} />
    </Routes>
    <Footer/>
   </Router>




   </>
  );
}

export default App;
