import React from "react";
import challengeBanner from "./Challenge-banner.jpg";
import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";
import logo from './Goggins-heading-alt.jpg'
import { Link } from "react-router-dom";


const ChallengeBanner = () => {
  return (
    <div>
<header className="w-full flex items-center justify-between px-12 md:px-12 py-24 bg-black border-b border-gray-200">
    
      <div className="flex items-center space-x-12">
        <img src={logo} alt="Goggins Logo" className="w-full h-full " />

      </div>
      <div className="flex space-x-4 text-black text-lg md:text-xl">
        <a href="https://www.instagram.com/davidgoggins" target="_blank" rel="noreferrer">
          <FaInstagram className="hover:text-yellow-500 transition" />
        </a>
        <a href="https://www.facebook.com/iamdavidgoggins/" target="_blank" rel="noreferrer">
          <FaFacebookF className="hover:text-yellow-500 transition" />
        </a>
        <a href="https://x.com/davidgoggins?lang=en" target="_blank" rel="noreferrer">
          <FaTwitter className="hover:text-yellow-500 transition" />
        </a>
      </div>
    </header>
    
    
    <section className="w-full bg-white">
    
      <div className="flex justify-center items-center w-full overflow-hidden">
       
        <img
          src={challengeBanner}
          alt="4x4x48 Goggins Challenge Banner"
          className=" w-100vh h-auto object-cover"
        />

      
      </div>

      
      <div className="w-full py-6 bg-white text-center">
        <p className="text-black text-sm md:text-base font-semibold tracking-wide uppercase">
        <p className="text-black text-sm md:text-base font-semibold tracking-wide uppercase">
        <Link
  to="/certificate"
  className="
    inline-block
    bg-yellow-400
    hover:bg-yellow-500
    text-black
    font-bold
    text-center
    py-3
    px-6
    rounded-lg
    shadow-md
    transition
    duration-300
    ease-in-out
    focus:outline-none
    focus:ring-2
    focus:ring-yellow-300
    focus:ring-offset-2
    focus:ring-offset-black
  "
>
  announcement to come
</Link>
</p>
        </p>
      </div>
    </section>
  </div>
  );
};

export default ChallengeBanner;
