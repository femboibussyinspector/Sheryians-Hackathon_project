import { motion } from 'framer-motion';
import Loginimage from './Login-page.jpg';
import { useEffect, useState } from 'react'; 
import quotes from './Quotes';
import Navbar from '../Components/Navbar';
import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";
const Login = () => {
  const [quote, setQuote] = useState('');

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  }, []);

  return (
    <>
    <Navbar/>
    <div>
    <div className=" min-h-screen flex flex-col  items-center justify-center px-4 bg-black overflow-hidden">
      <div
        className="absolute inset-0 bg-contain bg-center bg-no-repeat opacity-40 -z-10 min-h-screen"
        style={{
          backgroundImage: `url(${Loginimage})`,
          opacity: 0.4,
          zIndex: 0,
        }}
      ></div>

      <motion.div
     className="bg-white/10 backdrop-blur-sm border border-white/20 text-white p-8 rounded-2xl shadow-xl w-full max-w-md mb-24"
   
        initial={{ opacity: 0, scale: 0.95, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.h2
          className="text-3xl font-serif text-center text-yellow-400 mb-2"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          ⚔️ GOGGINS MODE ⚔️
        </motion.h2>

        <p className="text-center text-sm mb-6 font-serif text-gray-200">
          {quote}
        </p>

        <form className="space-y-5">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-yellow-300"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="you@example.com"
              className="mt-1 w-full px-4 py-2 bg-black/40 border-none rounded-md text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-yellow-300"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="********"
              className="mt-1 w-full px-4 py-2 bg-black/40 border-none rounded-md text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full bg-yellow-400 text-black font-bold py-2 rounded-md shadow hover:bg-yellow-300 transition duration-200"
          >
            Enter the Pain Cave
          </motion.button>
        </form>

        <p className="text-center text-sm text-gray-300 mt-6">
          Don't have an account?{' '}
          <span className="text-yellow-400 hover:underline cursor-pointer transition duration-200">
            Sign up
          </span>
        </p>
      </motion.div>

    
    </div>
    <footer className="bg-black text-white py-12 px-6 text-center border-t border-gray-700">
    
    <div className="flex flex-wrap justify-center gap-6 text-sm md:text-base font-semibold mb-6">
      <a href="/" className="hover:text-yellow-400">HOME</a>
      <a href="/about" className="hover:text-yellow-400">ABOUT</a>
      <a href="/achievements" className="hover:text-yellow-400">ACHIEVEMENTS</a>
      <a href="/shop" className="hover:text-yellow-400">SHOP</a>
      <a href="/4x4x48" className="hover:text-yellow-400">4X4X48</a>
    </div>


    <h2 className="text-lg md:text-xl font-bold tracking-[0.3em] text-gray-300 mb-4">
      D A V I D&nbsp;&nbsp;G O G G I N S
    </h2>

    <div className="flex justify-center gap-4 text-xl text-blue-400 mb-6">
      <a href="https://www.instagram.com/davidgoggins" target="_blank" rel="noreferrer"><FaInstagram /></a>
      <a href="https://www.facebook.com/iamdavidgoggins/" target="_blank" rel="noreferrer"><FaFacebookF /></a>
      <a href="https://x.com/davidgoggins?lang=en" target="_blank" rel="noreferrer"><FaTwitter /></a>
    </div>


    <div className="text-xs text-gray-400 space-x-2">
      <span>© 2024 Goggins, LLC. Made with ❤️ & React by Shlok Thapa</span>
      <span>|</span>
      <a href="/privacy-policy" className="hover:text-yellow-500">Privacy Policy</a>
      <span>|</span>
      <a href="/terms" className="hover:text-yellow-500">Terms</a>
      <span>|</span>
      <a href="/accessibility" className="hover:text-yellow-500">Accessibility</a>
    </div>
  </footer>
    
    </div></>
  );
};

export default Login;
