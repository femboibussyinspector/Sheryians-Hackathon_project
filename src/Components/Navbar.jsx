import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

function Navbar() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  const controlNavbar = () => {
    if (window.scrollY > lastScrollY) {
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
        fixed top-4 left-1/2 transform -translate-x-1/2 w-[90%] z-50 
        bg-white/10 backdrop-blur-lg border border-white/10 shadow-md p-4 
        rounded-xl text-white transition-transform duration-500 
        ${showNavbar ? 'translate-y-0' : '-translate-y-full'}
      `}
    >
      <div className="flex justify-between items-center px-2 md:px-10">
        <div className="text-xl font-bold text-white">
        
        </div>

     
        <div className="hidden md:flex space-x-6">
          {['Home', 'About', 'Login', 'Shop','4X4X48'].map((item) => (
            <Link
              key={item}
              to={`/${item.toLowerCase() === 'home' ? '' : item.toLowerCase()}`}
              className="relative inline-block text-white hover:text-yellow-400 transition-colors duration-300
              before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0
              before:bg-yellow-400 before:transition-all before:duration-300 hover:before:w-full"
            >
              {item}
            </Link>
          ))}
        </div>

     
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </div>
      </div>

     
      <div
        className={`
          flex flex-col items-center overflow-hidden transition-all duration-500 ease-in-out
          md:hidden
          ${menuOpen ? 'max-h-60 opacity-100 translate-y-0' : 'max-h-0 opacity-0 -translate-y-4'}
        `}
      >
        {['Home', 'About', 'Login', 'Shop','4X4X48'].map((item) => (
          <Link
            key={item}
            to={`/${item.toLowerCase() === 'home' ? '' : item.toLowerCase()}`}
            onClick={() => setMenuOpen(false)}
            className="py-2 text-white hover:text-yellow-400 transition-colors duration-300"
          >
            {item}
          </Link>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;

