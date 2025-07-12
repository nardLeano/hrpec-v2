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


function App() {

  return (
    <BrowserRouter>
        <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/donate" element={<Donate />} />
            {/* <Route path="/about" element={<About />} /> */}
            {/* Add more routes here */}
          </Routes>
        <Footer />
    </BrowserRouter>
  )
}

export default App
