import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { TypeAnimation } from 'react-type-animation';
import AnimatedLink from '../assets/LinkButton';
import HeroImage from '../assets/Section-4.jpg';
import Section2Image from '..assets/section-2.jpg';
import Section3Image from '../assets/Section-3.jpg';
import Section4Image from '../assets/Section-5.jpg';
import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";
const Home = () => {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">


      <section className="relative min-h-screen flex items-center justify-center text-center px-6 py-24 md:py-80 overflow-hidden">

        <div
          className="
            absolute inset-0 
            bg-cover 
            bg-no-repeat 
            bg-fixed
            bg-[position:80%_center] 
            sm:bg-[position:85%_center] 
            md:bg-[position:90%_center] 
            lg:bg-[position:92%_center] 
            z-0"
          style={{ backgroundImage: `url(${HeroImage})` }}
        ></div>

        <div className="absolute inset-0 bg-black/60 z-10"></div>


        <div className="relative z-20 flex flex-col items-center">
          <TypeAnimation
            sequence={['UNLEASH', 1000, 'ENDURE', 1000, 'EVOLVE', 1000]}
            wrapper="h1"
            speed={10}
            cursor={true}
            repeat={Infinity}
            className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6 text-blue-400 text-center break-words"
          />

          <TypeAnimation
            sequence={['This is not just a journey. This is war against your weaker self.', 100]}
            wrapper="h1"
            speed={70}
            cursor={false}
            className="max-w-xl text-lg font-semibold md:text-xl text-gray-400 mb-40"
          /><TypeAnimation
            sequence={['David Goggins. A man with sheer F#cking Will .', 100]}
            wrapper="h1"
            speed={70}
            cursor={false}
            className="max-w-xl text-lg font-semibold md:text-xl text-gray-400 mb-40"
          />
        </div>
      </section>


      <section className="relative min-h-[80vh] sm:min-h-screen py-56 px-6 md:px-16 overflow-hidden">
        <div
          className="
            absolute inset-0 
            bg-cover 
            bg-no-repeat 
            bg-fixed
            bg-[position:80%_center] 
            sm:bg-[position:85%_center] 
            md:bg-[position:90%_center] 
            lg:bg-[position:92%_center] 
            z-0"
          style={{ backgroundImage: `url(${Section2Image})` }}
        ></div>
        <div className="absolute inset-0 bg-black/70 z-10"></div>

        <motion.div
          className="max-w-4xl text-left relative z-10"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl md:text-8xl font-bold text-blue-400 mb-6">NEVER FINISHED:</h2>
          <p className="text-white font-semibold md:text-7xl">
            UNSHACKLE YOUR<br /> MIND AND WIN<br /> THE WAR WITHIN
          </p>
          <p className="text-white font-normal md:text-l">
            This is not a self help book. It’s a wake up call!{' '}
            <a href="https://geni.us/NeverFinished" className="text-blue-400 underline">
              Available now.
            </a>
          </p>
        </motion.div>
      </section>

      <section className="relative min-h-[80vh] sm:min-h-screen py-28 px-6 md:px-16 overflow-hidden">
        <div
          className="
            absolute inset-0 
            bg-cover 
            bg-no-repeat 
            bg-fixed
            bg-[position:80%_center] 
            sm:bg-[position:85%_center] 
            md:bg-[position:90%_center] 
            lg:bg-[position:92%_center] 
            z-0"
          style={{ backgroundImage: `url(${Section3Image})` }}
        ></div>
        <div className="absolute inset-0 bg-black/70 z-10"></div>

        <motion.div
          className="max-w-8xl mx-auto text-left relative z-10"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl md:text-7xl font-semibold text-blue-300 mb-5">PURE INSPIRATION</h2>
          <div className="flex flex-col gap-6">
            <p className="text-gray-400 md:text-lg">
              David brings his inspirational story to<br/> every engagement with his passionate<br/> and empowering presence.
              He electrifies<br/> audiences both large and small — from<br/> corporate executives to intimate VIP settings.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              
            </motion.div>
          </div>
          <AnimatedLink/>

        </motion.div>
      </section>

     
      <section className="w-full bg-gray-300 py-24 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl md:text-4xl font-semibold italic text-black">
            "In my pursuit to understand and learn from the greatest competitors in the world,
            David Goggins is one that sets the standard."
          </h2>
          <cite className="text-black md:text-xl font-semibold">
            <strong>- Pete Caroll</strong> "Seattle Seahawks Head Coach"
          </cite>
        </div>
      </section>


      <section className="relative min-h-[80vh] px-6 py-20 flex items-center overflow-hidden">
        <div
          className="
            absolute inset-0 
            bg-cover 
            bg-no-repeat 
            bg-fixed
            bg-[position:80%_center] 
            sm:bg-[position:85%_center] 
            md:bg-[position:90%_center] 
            lg:bg-[position:92%_center] 
            z-0"
          style={{ backgroundImage: `url(${Section4Image})` }}
        ></div>
        <div className="absolute inset-0 bg-black/50 z-10"></div>

        <div className="relative z-10 max-w-lg text-left space-y-6">
          <h2 className="text-5xl font-bold text-black leading-tight">
            SOCIAL <br />
            <span className="text-blue-400">MEDIA</span>
          </h2>
          <p className="text-black text-sm md:text-base">
            Follow David Goggins for weekly inspirational posts and updates on events and appearances.
          </p>
          <div className="space-y-4">
            <a
              href="https://www.instagram.com/davidgoggins/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between w-full bg-gray-700 text-white px-6 py-3 rounded hover:bg-gray-600 transition"
            >
              Follow David on Instagram <i className="fab fa-instagram text-xl"></i>
            </a>
            <a
              href="https://www.facebook.com/iamdavidgoggins/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between w-full bg-gray-700 text-white px-6 py-3 rounded hover:bg-gray-600 transition"
            >
              Follow David on Facebook <i className="fab fa-facebook text-xl"></i>
            </a>
            <a
              href="https://x.com/davidgoggins?lang=en"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between w-full bg-gray-700 text-white px-6 py-3 rounded hover:bg-gray-600 transition"
            >
              Follow David on Twitter <i className="fab fa-twitter text-xl"></i>
            </a>
          </div>
        </div>
      </section>

      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 py-16 bg-white/5 backdrop-blur-sm border-t border-white/10 perspective-[1000px]">
        {[
          { number: '147', label: 'Days Trained', delay: 0.1 },
          { number: '312', label: 'Miles Conquered', delay: 0.3 },
          { number: '89%', label: 'Mental Barrier Broken', delay: 0.5 }
        ].map((stat, index) => (
          <motion.div
            key={index}
            className="relative w-full h-32"
            initial={{ rotateX: 90, opacity: 0 }}
            whileInView={{ rotateX: 0, opacity: 1 }}
            transition={{
              duration: 0.7,
              delay: stat.delay,
              ease: 'easeOut'
            }}
            viewport={{ once: true }}
            style={{ transformStyle: 'preserve-3d' }}
          >
            <div className="absolute inset-0 bg-black rounded-md border border-yellow-400 flex flex-col items-center justify-center backface-hidden">
              <h2 className="text-4xl font-bold text-yellow-400">{stat.number}</h2>
              <p className="text-gray-300 text-sm">{stat.label}</p>
            </div>
          </motion.div>
        ))}
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

export default Home;

