import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";
import Ext from "@/assets/svg/logo-ext.svg";

function Navbar() {

      const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

// Initial navbar padding
  const [navbarHeight, setNavbarHeight] = useState("py-5"); 

  useEffect(() => {
    const handleScroll = () => {
      // Check the scroll position
      if (window.scrollY > 50) {
        // If scrolled down, update navbar padding
        setNavbarHeight("py-3");
      } else {
        // If scrolled to the top, revert to original navbar padding
        setNavbarHeight("py-5");
      }
    };

    // Add scroll event listener when component mounts
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed top-0 z-50 bg-white w-full font-bold shadow-md transition-all duration-300 flex items-center justify-center ${navbarHeight}`}>

        <div className="w-full max-w-5xl px-5 lg:px-0 flex justify-between items-center">

            {/* HRPEC LOGO */}            
            <Link to="/">
                <button onClick={scrollToTop}>
                    <img src={Ext} alt="Extended Logo HRPEC" className="w-full h-full cursor-pointer"/>
                </button>
            </Link>

            {/* NAVIGATION */}
            <div className="flex flex-row items-center text-md text-ice-500 gap-x-5">
                <ul className="flex flex-row items-center gap-x-6 list-none">
                    <li className="hover:scale-[1.1] transition-all duration-200 ease-in-out">
                        <Link to="/" onClick={scrollToTop}>
                            <a href="#home">Home</a>
                        </Link>
                    </li>
                    <li className="hover:scale-[1.1] transition-all duration-200 ease-in-out">
                        <Link to="/about" onClick={scrollToTop}>
                            <a href="#about">About</a>
                        </Link>
                    </li>
                    <li className="hover:scale-[1.1] transition-all duration-200 ease-in-out">
                    <a href="/contact">Contact us</a>
                    </li>
                </ul>
                <Link to="/donate">
                <Button className="bg-yellow-500 text-white text-lg font-bold px-6 py-3 transition-transform duration-200 ease-in-out hover:scale-110 hover:bg-yellow-400 cursor-pointer">
                    DONATE
                </Button>
                </Link>
            </div>

        </div>



    </nav>
  );
}

export default Navbar;