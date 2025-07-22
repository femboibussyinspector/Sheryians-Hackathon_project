import React, { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import image1 from "./Image1.jpg";
import image2 from "./Image2.jpg";
import image3 from "./Image3.jpg";
import image4 from "./Image4.jpg";
import image5 from "./Image5.jpg";
import image6 from "./Image6.jpg";
import image7 from "./Image7.jpg";
import camoBg from "./Image8.jpg";
import image8 from "./Image10.jpg"
import image9 from "./Image11.jpg"
import image10 from "./Image12.jpg"
import logo from "./Goggins-heading-alt.jpg";
import { Menu, X, Facebook, Instagram, Twitter, ChevronDown } from "lucide-react";
import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";
const currencyRates = {
  "INR ₹": { symbol: "₹", rate: 83.5 },
  "USD $": { symbol: "$", rate: 1 },
  "EUR €": { symbol: "€", rate: 0.92 }
};

const products = [
  {
    id: 1,
    name: "Taking Souls Axeman Tee",
    image: image1,
    priceUSD: 49.99
  },
  {
    id: 2,
    name: "Big Axeman Tee",
    image: image2,
    priceUSD: 29.99
  },
  {
    id: 3,
    name: "Women's Uncommon T-Shirt",
    image: image3,
    priceUSD: 19.99
  },
  {
    id: 4,
    name: "Stay Hard OG Hoodie",
    image: image4,
    priceUSD: 24.99
  },
  {
    id: 5,
    name: "Stay Hard Hoodie",
    image: image5,
    priceUSD: 14.99
  },
  {
    id: 6,
    name: "Women's OG Crop Hoodie",
    image: image6,
    priceUSD: 9.99
  },
  {
    id: 7,
    name: "Goggins Button-Up Puffer Jacket",
    image: image7,
    priceUSD: 39.99
  },
  {
    id: 8,
    name: "Stay Hard Boxer Breifs",
    image: image8,
    priceUSD: 32.99
  },
  {
    id: 9,
    name: "Goggins OG Hat",
    image: image9,
    priceUSD: 35.00
  },
  {
    id: 10,
    name: "Goggins 27 Oz Water Bottle",
    image: image10,
    priceUSD: 25.00
  }
];



const Shop = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showMenu, setShowMenu] = useState(false);
  const [currency, setCurrency] = useState("INR ₹");
  const [showCurrencyDropdown, setShowCurrencyDropdown] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);
 
  const addToCart = (product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [...prev, { ...product, qty: 1 }];
    });
  
    setShowCart(true); 
    setSelectedProduct(null); 
  };
  
const getCartTotal = () => {
  return cartItems.reduce(
    (sum, item) => sum + item.qty * item.priceUSD * currencyRates[currency].rate,
    0
  ).toFixed(2);
};
const removeFromCart = (productId) => {
  setCartItems((prev) => {
    const item = prev.find((i) => i.id === productId);

    if (item.qty > 1) {
  
      return prev.map((i) =>
        i.id === productId ? { ...i, qty: i.qty - 1 } : i
      );
    } else {
      
      return prev.filter((i) => i.id !== productId);
    }
  });
};



  const getFlagURL = (currency) => {
    switch (currency) {
      case "INR ₹":
        return "https://flagcdn.com/w40/in.png";
      case "USD $":
        return "https://flagcdn.com/w40/us.png";
      case "EUR €":
        return "https://flagcdn.com/w40/eu.png";
      default:
        return "https://flagcdn.com/w40/in.png";
    }
  };
  


  const getConvertedPrice = (priceUSD) => {
    const { symbol, rate } = currencyRates[currency];
    return `${symbol}${(priceUSD * rate).toFixed(2)}`;
  };

  return (
    <div
      className="relative min-h-screen px-4 pt-28 pb-20 overflow-hidden text-white"
      style={{
        backgroundImage: `url(${camoBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}
    >
     <header className="fixed top-0 left-0 right-0 z-50 bg-black shadow-md flex items-center justify-between px-6 py-4">
  <div className="flex items-center space-x-2">
    <img src={logo} alt="Goggins Logo" className="h-10 w-auto" />
  </div>

  <div className="md:flex hidden items-center space-x-6">
   


    <div className="relative">
      <button
        onClick={() => setShowCurrencyDropdown(!showCurrencyDropdown)}
        className="flex items-center gap-2 border border-yellow-400 px-3 py-2 rounded text-sm text-white bg-black"
      >
        <img src={getFlagURL(currency)} alt={`${currency} Flag`} className="w-5 h-5 rounded" />
        <span>{currency}</span>
        <ChevronDown className="w-4 h-4 text-yellow-400" />
      </button>
      {showCurrencyDropdown && (
        <div className="absolute top-full left-0 mt-2 bg-black border border-yellow-400 rounded z-10 text-white w-32">
          {["INR ₹", "USD $", "EUR €"].map((curr) => (
            <button
              key={curr}
              onClick={() => {
                setCurrency(curr);
                setShowCurrencyDropdown(false);
              }}
              className="block w-full text-left px-3 py-2 hover:bg-yellow-500"
            >
              {curr === "INR ₹" ? "🇮🇳" : curr === "USD $" ? "🇺🇸" : "🇪🇺"} {curr}
            </button>
          ))}
        </div>
      )}
    </div>


    <div className="relative ml-4">
      <button onClick={() => setShowCart(true)} className="text-white relative">
        🛒
        {cartItems.length > 0 && (
          <span className="absolute -top-2 -right-2 bg-yellow-400 text-black text-xs font-bold px-2 py-0.5 rounded-full">
            {cartItems.reduce((acc, item) => acc + item.qty, 0)}
          </span>
        )}
      </button>
    </div>
  </div>


  <div className="md:hidden">
    <Menu className="w-6 h-6 text-white cursor-pointer" onClick={() => setShowMenu(true)} />
  </div>
</header>


      <div className="absolute inset-0 bg-black/70 z-0" />

      <div className="relative z-10 max-w-5xl mx-auto">
        <h2 className="text-7xl font-bold text-yellow-400 text-center mb-10">
          Official Goggins Gear
        </h2>

       
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {products.map((product, index) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      key={product.id}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ scale: 1.05 }}
      className="bg-gray-900 rounded-xl overflow-hidden shadow-md cursor-pointer"
      onClick={() => setSelectedProduct(product)}
    >
      <img src={product.image} alt={product.name} className="w-full h-88 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{product.name}</h3>
        <p className="text-yellow-400 font-bold">
          {getConvertedPrice(product.priceUSD)}
        </p>
      </div>
    </motion.div>
  );
})}

        </div>
      </div>
      <button
  onClick={() => setSelectedProduct(null)}
  className="absolute top-2 right-4 text-gray-400 hover:text-yellow-400 text-xl"
>
  &times;
</button>

<AnimatePresence>
  {selectedProduct && (
    <motion.div
      className="fixed inset-0 bg-black bg-opacity-80 backdrop-blur-sm z-50 flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={() => setSelectedProduct(null)}
    >
      <motion.div
        className="bg-gray-900 text-white p-6 rounded-xl max-w-md w-full relative"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
      >

        <button
          onClick={() => setSelectedProduct(null)}
          className="absolute top-2 right-4 text-gray-400 hover:text-yellow-400 text-xl"
        >
          &times;
        </button>

        <img
          src={selectedProduct.image}
          alt={selectedProduct.name}
          className="w-full h-60 object-cover rounded-lg mb-4"
        />
        <h3 className="text-xl font-bold mb-2">{selectedProduct.name}</h3>
        <p className="text-yellow-400 text-lg mb-2">
          {getConvertedPrice(selectedProduct.priceUSD)}
        </p>
        <p className="text-sm text-gray-300 mb-4">Available in your region</p>

 
        <button
          onClick={() => {
            addToCart(selectedProduct);
            setSelectedProduct(null);
          }}
          className="w-full mt-2 bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-4 rounded-lg transition"
        >
          Add to Cart
        </button>
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>

              

      <AnimatePresence>
        {showMenu && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed top-0 right-0 w-3/4 h-full bg-white z-50 shadow-lg p-6"
          >
            <button onClick={() => setShowMenu(false)} className="absolute top-4 right-4 text-black">
              <X size={24} />
            </button>
            <div className="mt-12 flex flex-col space-y-6 text-black font-semibold">
              <a href="#">APPAREL</a>
              <a href="#">ACCESSORIES</a>
            </div>
            <hr className="my-6 border-gray-300" />
            <div className="flex gap-4">
              <Facebook className="w-6 h-6 bg-black text-white p-1 rounded-full" />
              <Twitter className="w-6 h-6 bg-black text-white p-1 rounded-full" />
              <Instagram className="w-6 h-6 bg-black text-white p-1 rounded-full" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

<AnimatePresence>
  {showCart && (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      className="fixed top-0 right-0 w-80 h-full bg-black text-white z-50 shadow-lg p-6"
    >
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-bold text-yellow-400">Your Cart</h3>
        <button onClick={() => setShowCart(false)} className="text-white text-xl">
          &times;
        </button>
      </div>
      {cartItems.length === 0 ? (
        <p className="text-gray-400">Your cart is empty.</p>
      ) : (
        <>
          <ul className="space-y-4 overflow-y-auto max-h-[70vh]">
            {cartItems.map((item) => (
              <li key={item.id} className="flex justify-between items-center">
                <div>
                  <h4 className="font-semibold">{item.name}</h4>
                  <p className="text-yellow-400 text-sm">
                    {item.qty} × {getConvertedPrice(item.priceUSD)}
                  </p>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-sm text-red-500 hover:text-red-400"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <div className="mt-4 border-t border-yellow-400 pt-4">
            <p className="font-semibold">
              Total:{" "}
              <span className="text-yellow-400">
                {currencyRates[currency].symbol}
                {getCartTotal()}
              </span>
            </p>
            <button className="mt-4 w-full bg-yellow-400 text-black font-bold py-2 rounded hover:bg-yellow-300">
              Checkout
            </button>
          </div>
        </>
      )}
    </motion.div>
  )}
</AnimatePresence>

    
<footer className="bg-black relative z-0 text-white py-12 px-6 text-center mt-20 ">
  <div className="flex flex-wrap justify-center gap-6 text-sm md:text-base font-semibold mb-6">
    <a href="/" className="hover:text-yellow-400">HOME</a>
    <a href="/about" className="hover:text-yellow-400">ABOUT</a>
    <a href="/AchievementsTimeline" className="hover:text-yellow-400">ACHIEVEMENTS</a>
    <a href="/shop" className="hover:text-yellow-400">SHOP</a>
    <a href="/4x4x48" className="hover:text-yellow-400">4X4X48</a>
  </div>

  <h2 className="text-lg md:text-xl font-bold tracking-widest text-gray-300 mb-4">
    D A V I D&nbsp;&nbsp;G O G G I N S
  </h2>

  <div className="flex justify-center gap-4 text-2xl text-blue-400 mb-6">
    <a href="https://www.instagram.com/davidgoggins" target="_blank" rel="noreferrer" className="hover:text-yellow-400 transition">
      <FaInstagram />
    </a>
    <a href="https://www.facebook.com/iamdavidgoggins/" target="_blank" rel="noreferrer" className="hover:text-yellow-400 transition">
      <FaFacebookF />
    </a>
    <a href="https://x.com/davidgoggins?lang=en" target="_blank" rel="noreferrer" className="hover:text-yellow-400 transition">
      <FaTwitter />
    </a>
  </div>

  <div className="text-xs text-gray-400 space-x-2">
    <span>© 2024 Goggins, LLC. All Rights Reserved. Made with React by Shlok Thapa</span>
    <span>|</span>
    <a href="/privacy-policy" className="hover:text-yellow-500">Privacy Policy</a>
    <span>|</span>
    <a href="/terms" className="hover:text-yellow-500">Terms</a>
    <span>|</span>
    <a href="/accessibility" className="hover:text-yellow-500">Accessibility</a>
  </div>
</footer>

</div>

  );
};

export default Shop;
