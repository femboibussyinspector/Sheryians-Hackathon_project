import React, { useState } from "react";
import { PDFDocument, rgb, StandardFonts } from "pdf-lib";
import logo from './Goggins-heading-alt.jpg'
import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";

const ChallengeCertificate = () => {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");

  const generatePDF = async () => {
    try {
      const existingPdfBytes = await fetch("/Certificate.pdf").then((res) => {
        if (!res.ok) throw new Error("Failed to fetch PDF template");
        return res.arrayBuffer();
      });
      
  
      const pdfDoc = await PDFDocument.load(existingPdfBytes);
      const pages = pdfDoc.getPages();
      const firstPage = pages[0];
  
      const { width, height } = firstPage.getSize();
      const font = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
  
      firstPage.drawText(name, {
        x: 90, 
        y: 775,
        size: 22,
        font,
        color: rgb(0, 0, 0),
      });
      
      firstPage.drawText(`${date}`, {
        x: 410, 
        y: 283, 
        size: 32,
        font,
        color: rgb(0, 0, 0),
      });
      
  
      const pdfBytes = await pdfDoc.save();
      const blob = new Blob([pdfBytes], { type: "application/pdf" });
  
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = `${name}_4x4x48_certificate.pdf`;
      link.click();
    } catch (err) {
      console.error("❌ Error generating certificate:", err);
      alert("Failed to generate certificate. Check console for errors.");
    }
  };
  

  return (
   <div><header className="w-full flex items-center justify-between px-12 md:px-12 py-24 bg-black border-b border-gray-200">
    
   <div className="flex items-center space-x-12">
     <img src={logo} alt="Goggins Logo" className="w-full h-full " />

   </div>
   <div className="flex space-x-4 text-yellow-300 text-lg md:text-xl">
     <a href="https://www.instagram.com/davidgoggins/" target="_blank" rel="noreferrer">
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

   
   
   <div className="min-h-screen bg-black text-white py-12 flex flex-col items-center">
      <h1 className="text-3xl font-bold text-yellow-500 mb-4 uppercase">
        Generate PDF Certificate
      </h1>

      <input
        type="text"
        placeholder="Enter your name"
        className="text-black px-4 py-2 mb-4 rounded-md w-full max-w-md"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="date"
        className="text-black px-4 py-2 mb-6 rounded-md w-full max-w-md"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />

      <button
        onClick={generatePDF}
        disabled={!name || !date}
        className="bg-yellow-500 text-black px-6 py-2 font-semibold rounded-md hover:bg-yellow-600 transition"
      >
        Download PDF Certificate
      </button>
    </div>
    <footer className="bg-black text-white py-12 px-6 text-center">

<div className="flex flex-wrap justify-center gap-6 text-sm md:text-base font-semibold mb-6">
  <a href="/" className="hover:text-yellow-400">HOME</a>
  <a href="/about" className="hover:text-yellow-400">ABOUT</a>
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
  <span>© 2024 Goggins, LLC. All Rights Reserved. made from react by Shlok Thapa</span>
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

export default ChallengeCertificate;
