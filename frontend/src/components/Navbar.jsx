import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";
import Ext from "@/assets/svg/logo-ext.svg";
import Mob from "@/assets/svg/logo-mob.svg";
import Abbr from "@/assets/svg/abr-mob.svg";
import { Menu } from 'lucide-react';
import { X } from 'lucide-react';

function Navbar() {

    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }

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
    <nav className={`fixed top-0 z-50 bg-smoke-500 w-full shadow-md font-bold transition-all duration-300 ${navbarHeight}`}>

        <div className="h-full px-5 md:px-5 lg:px-0 max-w-5xl mx-auto flex justify-between items-center">

            {/* HRPEC LOGO */}            
            <Link to="/" className="hidden md:flex">
                <button onClick={scrollToTop}>
                    <img src={Ext} alt="Extended Logo HRPEC" className="w-full h-full cursor-pointer"/>
                </button>
            </Link>

            {/* ICON AND ABBRI for mobile */}
            <Link to="/" onClick={scrollToTop} className="block md:hidden">
                  <img src={Mob} alt="Logo Icon HRPEC" className="w-[50px] h-[50px] cursor-pointer"/>
            </Link>

            <Link to="/" onClick={scrollToTop}className="block md:hidden">
                  <img src={Abbr} alt="Abbreviated Logo HRPEC" className="w-full h-[45px] cursor-pointer"/>
            </Link>

            {/* NAVIGATION */}
            <div className="hidden md:flex items-center text-md text-sky-500 gap-x-5">
                <ul className="flex flex-row items-center gap-x-6 list-none">
                    <li className="hover:scale-[1.1] transition-all duration-200 ease-in-out">
                        <Link to="/" onClick={scrollToTop}>
                            Home
                        </Link>
                    </li>
                    <li className="hover:scale-[1.1] transition-all duration-200 ease-in-out">
                        <Link to="/about" onClick={scrollToTop}>
                            About
                        </Link>
                    </li>
                    <li className="hover:scale-[1.1] transition-all duration-200 ease-in-out">
                        <Link to="/contact" onClick={scrollToTop}>
                            Contact Us
                        </Link>
                    </li>
                </ul>
                <Link to="/donate" onClick={scrollToTop}>
                <Button className="bg-yellow-500 text-white text-lg font-bold px-6 py-3 transition-transform duration-200 ease-in-out hover:scale-110 hover:bg-yellow-400 cursor-pointer">
                    DONATE
                </Button>
                </Link>
            </div>

            {/* Burger Menu */}
            <div onClick={handleNav} className="block md:hidden text-sky-500 w-[48px] h-[50px]">
                {nav ? <X className="fixed top-5 right-5 z-50 w-[48px] h-[50px]"/> : <Menu className="w-full h-full"/>}
            </div>

            {/* SIDE BAR POPUP */}
            <div className={`
                      fixed top-0 h-full w-[60%] sm:w-[35%] bg-smoke-500
                      ease-in-out duration-500 z-40 shadow-md
                      ${nav ? 'right-0' : '-right-full'}
                    `}>
                
                {/* SIDE BAR LIST */}
                <div className="flex flex-col mt-[7rem] h-full m-8 text-3xl text-sky-500 gap-x-5">
                  <ul className="flex flex-col gap-y-6 list-none items-end sm:items-center">
                      <li className="hover:scale-[1.1] transition-all duration-200 ease-in-out">
                          <Link to="/" onClick={() => { scrollToTop();  handleNav();}}>
                              Home
                          </Link>
                      </li>
                      <li className="hover:scale-[1.1] transition-all duration-200 ease-in-out">
                          <Link to="/about" onClick={() => { scrollToTop();  handleNav();}}>
                              About
                          </Link>
                      </li>
                      <li className="hover:scale-[1.1] transition-all duration-200 ease-in-out">
                          <Link to="/contact" onClick={() => { scrollToTop();  handleNav();}}>
                              Contact Us
                          </Link>
                      </li>
                  </ul>

              </div>

              <div className="fixed md:hidden bottom-9 right-7 z-50">
                <div className="blink-border">
                  <Link to="/donate" onClick={() => { scrollToTop();  setNav(false);}}>
                    <Button className="bg-yellow-500 text-white text-3xl font-bold px-6 py-8 transition-transform duration-200 ease-in-out hover:scale-110 hover:bg-yellow-400 cursor-pointer w-full">
                        DONATE
                    </Button>
                  </Link>
                </div>  
              </div>

            </div>


        </div>



    </nav>
  );
}

export default Navbar;