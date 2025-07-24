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
    <footer className="bg-black text-white py-12 px-6 text-center">

<div className="flex flex-wrap justify-center gap-6 text-sm md:text-base font-semibold mb-6">
  <a href="/" className="hover:text-yellow-400">HOME</a>
  <a href="/about" className="hover:text-yellow-400">ABOUT</a>
  <a href="/login" className="hover:text-yellow-400">LOGIN</a>
  <a href="/AchievementsTimeline" className="hover:text-yellow-400">ACHIEVEMENTS</a>
  <a href="/shop" className="hover:text-yellow-400">SHOP</a>
  <a href="/4x4x48" className="hover:text-yellow-400">4X4X48</a>
</div>


<h2 className="text-lg md:text-xl font-bold tracking-[0.3em] text-gray-300 mb-4">
  D A V I D&nbsp;&nbsp;G O G G I N S
</h2>

<div className="flex justify-center gap-4 text-xl text-blue-400 mb-6">
  <a href="https://www.instagram.com/davidgoggins/" target="_blank" rel="noreferrer">
    <FaInstagram />
  </a>
  <a href="https://www.facebook.com/iamdavidgoggins/" target="_blank" rel="noreferrer">
    <FaFacebookF />
  </a>
  <a href="https://x.com/davidgoggins?lang=en" target="_blank" rel="noreferrer">
    <FaTwitter />
  </a>
</div>


<div className="text-xs text-gray-400 space-x-2">
  <span>© 2024 Goggins,Made with ❤️& React by Shlok Thapa LLC. All Rights Reserved.</span>
  <span>|</span>
  <a href="/privacy-policy" className="hover:text-yellow-500">Privacy Policy</a>
  <span>|</span>
  <a href="/terms" className="hover:text-yellow-500">Terms and Conditions</a>
  <span>|</span>
  <a href="/accessibility" className="hover:text-yellow-500">Accessibility Statement</a>
</div>
</footer>
  </div>
  );
};

export default ChallengeBanner;
