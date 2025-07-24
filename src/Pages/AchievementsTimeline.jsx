import React from "react";
import ScrollQuotes from "../Components/ScrollQuotes";
import Achievements from "../Components/Achievements";
import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";

const AchievementsTimeline = () => {
  return (
    <div className="bg-black text-white flex flex-col  ">
      

      <div className="flex flex-col md:flex-row justify-between w-full px-5 md:px-30 py-10 gap-20">
        
    
        <div className="md:w-1/3 w-full ">
          <ScrollQuotes />
        </div>

      
        <div className="md:w-2/3 w-full">
          <Achievements />
        </div>
      </div>


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

export default AchievementsTimeline;

