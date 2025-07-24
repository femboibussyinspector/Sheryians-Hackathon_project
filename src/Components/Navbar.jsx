// src/Components/Navbar.jsx

import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

function Navbar() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  const controlNavbar = () => {
    if (window.scrollY > lastScrollY && window.scrollY > 100) { // Only hide after scrolling down a bit
      setShowNavbar(false);
    } else {
      setShowNavbar(true);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', controlNavbar);
    return () => window.removeEventListener('scroll', controlNavbar);
  }, [lastScrollY]);

  return (
    <nav
      className={`
        fixed top-0 left-0 w-full z-50  /* --- CHANGE: Standard fixed navbar positioning --- */
        bg-black/20 backdrop-blur-lg border-b border-white/10 /* --- CHANGE: A cleaner look --- */
        transition-transform duration-300
        ${showNavbar ? 'translate-y-0' : '-translate-y-full'}
      `}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> {/* --- CHANGE: Centered container for content --- */}
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 text-xl font-bold text-white">
            {/* You can add a logo or brand name here */}
            <Link to="/">GOGGINS</Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            {['Home', 'About', 'Shop', '4X4X48'].map((item) => (
              <Link
                key={item}
                to={`/${item.toLowerCase() === 'home' ? '' : item.toLowerCase()}`}
                className="relative inline-block text-white hover:text-yellow-400 transition-colors duration-300
                           before:absolute before:-bottom-1 before:left-0 before:h-[2px] before:w-0
                           before:bg-yellow-400 before:transition-all before:duration-300 hover:before:w-full"
              >
                {item}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)} className="text-white">
              {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`md:hidden ${menuOpen ? 'block' : 'hidden'} bg-black/50 backdrop-blur-xl`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 text-center">
          {['Home', 'About', 'Shop', '4X4X48'].map((item) => (
            <Link
              key={item}
              to={`/${item.toLowerCase() === 'home' ? '' : item.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-yellow-400 hover:bg-gray-700"
            >
              {item}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;