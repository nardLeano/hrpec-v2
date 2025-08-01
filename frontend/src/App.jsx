import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";

import './index.css'

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Donate from "./pages/Donate";
import ContactUs from "./pages/ContactUs";

import Programs from "./pages/Programs";

import PtjEduc from "./pages/PtjEduc";
import PtjRead from "./pages/PtjRead";


function App() {
  
  return (
    <BrowserRouter>
        <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/donate" element={<Donate />} />
            <Route path="/contact" element={<ContactUs />} />
            
            <Route path="/programs/:id" element={<Programs />} />

            <Route path="/programs/transitional-justice/ptj-educ" element={<PtjEduc />} />
            <Route path="/programs/transitional-justice/ptj-educ/:id" element={<PtjRead />} />

          </Routes>
        <Footer />
    </BrowserRouter>
  )
}

export default App
