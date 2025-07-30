import React from "react";
import LogoInt from "@/assets/svg/logo-intx.svg";
import { SiTiktok } from "react-icons/si";
import { FaFacebookF, FaInstagram } from "react-icons/fa"; 

function Footer() {
  return (
    <footer className="w-full border-t bg-deep-500/60 px-6 py-8 text-sm text-slate-100 pb-30 md:pb-6">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row md:flex-row items-start justify-between gap-y-6">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img src={LogoInt} alt="HRPEC Logo" className="w-24 h-24" />
        </div>
     
      {/* GROUP */}
      <div className="flex flex-col gap-3 text-slate-100 items-start">
        <div className="bold text-lg">FOLLOW US ON SOCIAL MEDIA!</div>
        {/* Social Icons */}
        <div className="flex gap-4">
          {/* Facebook */}
          <a
            href="https://www.facebook.com/HRPECPhils"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full p-2 bg-slate-100 hover:bg-blue-500 text-slate-600 hover:text-white transition-colors duration-200 cursor-pointer"
          >
            <FaFacebookF size={20} />
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/hrpecphils"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full p-2 bg-slate-100 hover:bg-pink-500 text-slate-600 hover:text-white transition-colors duration-200 cursor-pointer"
          >
            <FaInstagram size={20} />
          </a>

          {/* TikTok */}
          <a
            href="https://www.tiktok.com/@hrpecphils"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full p-2 bg-slate-100 hover:bg-black text-slate-600 hover:text-white transition-colors duration-200 cursor-pointer"
          >
            <SiTiktok size={20} />
          </a>
        </div>

        <div className="flex bg-deep-500 w-full h-[1px]"></div>

        {/* Copyright */}
        <div className="text-center md:text-right text-gray-300 text-sm">
          © {new Date().getFullYear()} HRPEC. All rights reserved.
        </div>        
      </div>

        {/* Details */}
      <div className="text-sm text-gray-300 flex flex-col gap-5 md:flex-col md:items-start md:justify-start ">
        {/* Location */}
          <div className="flex flex-col">
            <span className="font-semibold text-slate-100">Location</span>{" "}
            Harong, 56 Mother Ignacia, Quezon City.
          </div>

        {/* Contact */}
          <div className="flex flex-col">
            <span className="font-semibold text-slate-100">Contact</span>{" "}
            <a href="mailto:admin@hrpec.org" className="underline hover:text-deep-500">
              admin@hrpec.org
            </a>
          </div>
      </div>
 

      </div>
    </footer>
  );
}

export default Footer;
