import './App.css';
import {BrowserRouter as Router , Route , Routes } from "react-router-dom"
import Home from "../src/componants/Home/Home"
import About from "../src/componants/About/About"
import Contact from "../src/componants/Contact/Contact"
import Shop from "../src/componants/Shop/Shop"
import Shopdetails from "../src/componants/Shop Details/Shopdetails"
import Header from "../src/componants/Header/Header"
import Footer from "../src/componants/Footer/Footer"
import Check from '../src/componants/Checkout/Check';
import Cart from "../src/componants/Cart//Cart"
import Blog from './componants/Blog/Blog';


function App() {

  return (
   <>
   <Router>
    <Header/>
    <Routes>
      < Route path="/" element={<Home/>} />
      < Route path="/About" element={<About/>} />
      < Route path="/Contact" element={<Contact/>} />
      < Route path="/Shop" element={<Shop/>} />
      < Route path="/Blog" element={<Blog/>} />
      < Route path="/prodetails" element={<Shopdetails/>} />
      < Route path="/card" element={<Cart/>} />
      < Route path="/Checkout" element={<Check/>} />
    </Routes>
    <Footer/>
   </Router>




   </>
  );
}

export default App;
