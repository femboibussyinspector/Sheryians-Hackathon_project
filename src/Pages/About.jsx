import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import Phase2Image from './phase2.jpg';
import Phase3Image from './phase3.jpg';
import Phase1Image from "./phase1.jpg";
import Aboutpfp from "./About-pfp.jpg"
import Phase4Image from './phase4.jpg';
import { Link } from 'react-router-dom';

import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const About = () => {
  
  const backgroundTextRef = useRef(null);
  const phase1TextRef = useRef(null);
  const phase1ImageRef = useRef(null);
  const phase2TextRef = useRef(null);
const phase2ImageRef = useRef(null)
const section1TextRef = useRef(null);
const section1ImageRef = useRef(null);
  useEffect(() => {


  


const splitSection1 = new SplitType(section1TextRef.current, { types: "lines" });


gsap.from(splitSection1.lines, {
  scrollTrigger: {
    trigger: section1TextRef.current,
    start: "top 85%",
    end: "bottom 60%",
    scrub: true,
  },
  opacity: 0,
  y: 30,
  stagger: 0.08,
  ease: "power3.out",
});


gsap.fromTo(
  section1TextRef.current,
  { y: 80, opacity: 0 },
  {
    scrollTrigger: {
      trigger: section1TextRef.current,
      start: "top 90%",
      end: "top 20%",
      scrub: true,
    },
    y: 0,
    opacity: 1,
    ease: "power2.out",
  }
);


gsap.to(section1TextRef.current, {
  scrollTrigger: {
    trigger: section1TextRef.current,
    start: "top 50%",
    end: "top -99%",
    scrub: true,
  },
  opacity: 0,
  y: -20,
  ease: "power2.out",
});

gsap.from(section1ImageRef.current, {
  scrollTrigger: {
    trigger: section1ImageRef.current,
    start: "top 90%",
    toggleActions: "play none none none",
  },
  clipPath: "inset(0 100% 0 0)",
  duration: 1.5,
  ease: "power2.out",
});


gsap.fromTo(
  section1ImageRef.current,
  { y: 100, opacity: 0 },
  {
    scrollTrigger: {
      trigger: section1ImageRef.current,
      start: "top 90%",
      end: "top 20%",
      scrub: true,
    },
    y: 0,
    opacity: 1,
    ease: "power2.out",
  }
);


gsap.to(section1ImageRef.current, {
  scrollTrigger: {
    trigger: section1ImageRef.current,
    start: "top 50%",
    end: "top -99%",
    scrub: true,
  },
  opacity: 0,
  y: -40,
  ease: "power2.out",
});;


    gsap.to(backgroundTextRef.current, {
      scrollTrigger: {
        trigger: backgroundTextRef.current,
        start: 'top 50%',
        end: 'bottom 10%',
        scrub: 0.5,
        
      },
      y: -300, 
      ease: 'none',
    });


    const split = new SplitType(phase1TextRef.current, { types: "lines" });
    gsap.from(split.lines, {
      scrollTrigger: {
        trigger: phase1TextRef.current,
        start: "top 85%",
        end: "bottom 60%",
        scrub: true,
      },
      opacity: 0,
      y: 30,
      stagger: 0.08,
      ease: "power3.out",
    });

  
gsap.to(phase1ImageRef.current, {
  scrollTrigger: {
    trigger: phase1ImageRef.current,
    start: 'top 50%',
    end: 'top -99%',
    scrub: true,
  },
  opacity: 0,
  y: -40,
  ease: 'power2.out',
});
gsap.to(phase1TextRef.current, {
  scrollTrigger: {
    trigger: phase1TextRef.current,
    start: 'top 50%',
    end: 'top -99%',
    scrub: true,
  },
  opacity: 0,
  y: -20,
  ease: 'power2.out',
});

    gsap.from(phase1ImageRef.current, {
      scrollTrigger: {
        trigger: phase1ImageRef.current,
        start: "top 90%",
        toggleActions: "play none none none",
      },
      clipPath: "inset(0 100% 0 0)",
      duration: 1.5,
      ease: "power2.out",
    });
    const split2 = new SplitType(phase2TextRef.current, { types: 'lines' });

gsap.from(split2.lines, {
  scrollTrigger: {
    trigger: phase2TextRef.current,
    start: 'top 85%',
    end: 'bottom 60%',
    scrub: true,
  },
  opacity: 0,
  y: 30,
  stagger: 0.08,
  ease: 'power3.out',
});


gsap.from(phase2ImageRef.current, {
  scrollTrigger: {
    trigger: phase2ImageRef.current,
    start: 'top 90%',
    toggleActions: 'play none none none',
  },
  clipPath: 'inset(0 100% 0 0)',
  duration: 1.5,
  ease: 'power2.out',
});

gsap.fromTo(
  phase2TextRef.current,
  { y: 80, opacity: 0 },
  {
    scrollTrigger: {
      trigger: phase2TextRef.current,
      start: 'top 90%',
      end: 'top 20%',
      scrub: true,
    },
    y: 0,
    opacity: 1,
    ease: 'power2.out',
  }
);


gsap.fromTo(
  phase2ImageRef.current,
  { y: 100, opacity: 0 },
  {
    scrollTrigger: {
      trigger: phase2ImageRef.current,
      start: 'top 90%',
      end: 'top 20%',
      scrub: true,
    },
    y: 0,
    opacity: 1,
    ease: 'power2.out',
  }
);
gsap.to(phase2TextRef.current, {
  scrollTrigger: {
    trigger: phase2TextRef.current,
    start: 'top 50%',
    end: 'top 99%',
    scrub: true,
  },
  opacity: 0,
  y: -800,
});

const split3 = new SplitType(window.phase3TextRef, { types: 'lines' });


gsap.from(split3.lines, {
  scrollTrigger: {
    trigger: window.phase3TextRef,
    start: 'top 85%',
    end: 'bottom 60%',
    scrub: true,
  },
  opacity: 0,
  y: 30,
  stagger: 0.08,
  ease: 'power3.out',
});


gsap.from(window.phase3ImageRef, {
  scrollTrigger: {
    trigger: window.phase3ImageRef,
    start: 'top 90%',
    toggleActions: 'play none none none',
  },
  clipPath: 'inset(0 100% 0 0)',
  duration: 1.5,
  ease: 'power2.out',
});


gsap.fromTo(
  window.phase3ImageRef,
  { y: 100, opacity: 0 },
  {
    scrollTrigger: {
      trigger: window.phase3ImageRef,
      start: 'top 90%',
      end: 'top 20%',
      scrub: true,
    },
    y: 0,
    opacity: 1,
    ease: 'power2.out',
  }
);


gsap.fromTo(
  window.phase3TextRef,
  { y: 80, opacity: 0 },
  {
    scrollTrigger: {
      trigger: window.phase3TextRef,
      start: 'top 90%',
      end: 'top 20%',
      scrub: true,
    },
    y: 0,
    opacity: 1,
    ease: 'power2.out',
  }
);


gsap.to(window.phase3TextRef, {
  scrollTrigger: {
    trigger: window.phase3TextRef,
    start: 'top 1%',
    end: 'bottom -100%',
    scrub: true,
  },
  opacity: 0,
  y: -40,
  ease: 'power2.out',
});


gsap.to(window.phase3ImageRef, {
  scrollTrigger: {
    trigger: window.phase3ImageRef,
    start: 'top 10%',
    end: 'bottom -100%',
    scrub: true,
  },
  opacity: 0,
  y: -50,
  ease: 'power2.out',
});

gsap.to(window.phase3RollingRef, {
  scrollTrigger: {
    trigger: window.phase3RollingRef,
    start: 'top 100%',
    end: 'bottom -200%',
    scrub: true,
  },
  y: -200,
  ease: 'none',
});


const split4 = new SplitType(window.phase4TextRef, { types: 'lines' });

gsap.from(split4.lines, {
  scrollTrigger: {
    trigger: window.phase4TextRef,
    start: 'top 85%',
    end: 'bottom 60%',
    scrub: true,
  },
  opacity: 0,
  y: 30,
  stagger: 0.08,
  ease: 'power3.out',
});

gsap.from(window.phase4ImageRef, {
  scrollTrigger: {
    trigger: window.phase4ImageRef,
    start: 'top 90%',
    toggleActions: 'play none none none',
  },
  clipPath: 'inset(0 100% 0 0)',
  duration: 1.5,
  ease: 'power2.out',
});

gsap.fromTo(
  window.phase4ImageRef,
  { y: 100, opacity: 0 },
  {
    scrollTrigger: {
      trigger: window.phase4ImageRef,
      start: 'top 90%',
      end: 'top 20%',
      scrub: true,
    },
    y: 0,
    opacity: 1,
    ease: 'power2.out',
  }
);

gsap.fromTo(
  window.phase4TextRef,
  { y: 80, opacity: 0 },
  {
    scrollTrigger: {
      trigger: window.phase4TextRef,
      start: 'top 90%',
      end: 'top 20%',
      scrub: true,
    },
    y: 0,
    opacity: 1,
    ease: 'power2.out',
  }
);





gsap.to(window.phase4RollingRef, {
  scrollTrigger: {
    trigger: window.phase4RollingRef,
    start: 'left right',
    end: 'right left',
    scrub: true,
  },
  x: -800,
  ease: 'none',
});
}, []);




  return (
    <div className="bg-black text-white relative overflow-hidden">
      
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="w-full h-full opacity-10 mix-blend-overlay bg-[url('/grunge.png')] bg-repeat"></div>
      </div>

      
      <div
        ref={backgroundTextRef}style={{
          transform: 'rotate(90deg) translateY(-50%)',
          transformOrigin: 'left center',
        }}
       className="absolute left-1/2 top-0 transform -translate-x-1/2 text-[12vw] font-extrabold tracking-wide text-yellow-300 opacity-[0.3] whitespace-nowrap z-0 pointer-events-none"
      >
        UNBREAKABLE 
      </div>


      <section className="relative min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-20">
  {/* Background Wave */}
  <div className="absolute top-0 left-0 w-full z-0 overflow-hidden">
    <svg
      className="w-full h-[520px]"
      viewBox="0 0 1440 320"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="#e0bc38"
        d="M0,224L48,224C96,224,192,224,288,213.3C384,203,480,181,576,160C672,139,768,117,864,133.3C960,149,1056,203,1152,208C1248,213,1344,171,1392,149.3L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
      />
    </svg>
  </div>


  <div
  className="relative z-10 text-left md:w-1/2 mt-40 px-4"
  ref={section1TextRef} 
>
  <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
    David Goggins
  </h1>
  <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-xl">
    Discover the relentless journey of a man who turned pain into power,
    weakness into will, and suffering into strength. Unbreakable.
    Unstoppable.
  </p>
</div>



  <div className="relative z-10 mt-10 md:mt-40 md:w-1/2 flex justify-center" ref={section1ImageRef}>
    <img
      src={Aboutpfp}
      alt="David Goggins Profile"
      className="w-[300px] h-[300px] object-cover rounded-xl shadow-2xl"
    />
  </div>
</section>



      <section className="relative z-10 flex flex-col md:flex-row items-center justify-center min-h-screen px-6 md:px-24 gap-16 py-32">
    
        <div className="md:w-1/2" ref={phase1TextRef}>
          <h2 className="text-4xl md:text-5xl text-yellow-300 font-bold mb-6">Phase 1: Origins</h2>
          <p className="text-lg leading-relaxed max-w-xl">
            Born in 1975 in Buffalo, New York, he faced an abusive father,
            racism, and bullying, leading to low self-esteem and a stutter. After
            high school, Goggins joined the Air Force at 19, aiming to be a
            Pararescueman but quit due to sickle cell trait and swimming
            struggles. He later worked as a pest control fumigator, earning
            $1,000 monthly. Overweight at nearly 300 pounds, depressed, and
            directionless, Goggins felt trapped in a cycle of self-loathing until
            a documentary inspired his transformation at 24.
          </p>
        </div>

  
        <div
          ref={phase1ImageRef}
          className="md:w-1/2 overflow-hidden rounded-xl shadow-2xl max-w-md"
        >
          <img
            src={Phase1Image}
            alt="Goggins Phase 1"
            className="object-cover w-full h-full"
          />
        </div>
      </section>
     
<section className="relative z-10 flex flex-col md:flex-row-reverse items-center justify-center min-h-screen px-6 md:px-24 gap-16 py-32 bg-black text-gray-100 overflow-hidden">


<div
  ref={backgroundTextRef}
  className="absolute top-1/2 right-0 transform -translate-y-1/2 text-[9vw] font-black tracking-tight text-yellow-300 opacity-[0.3] whitespace-nowrap z-0 rotate-180 pointer-events-none"
  style={{ writingMode: 'vertical-rl' }}
>
  STAY HARD · STAY HARD · STAY HARD
</div>


<div
  ref={phase2ImageRef}
  className="md:w-1/2 overflow-hidden rounded-xl shadow-2xl max-w-md"
>
  <img
    src={Phase2Image}
    alt="Goggins Phase 2"
    className="object-cover w-full h-full"
  />
</div>


<div className="md:w-1/2" ref={phase2TextRef}>
  <h2 className="text-4xl md:text-5xl font-bold mb-6 text-yellow-400">
    Phase 2: The SEAL Trials
  </h2>
  <p className="text-lg leading-relaxed max-w-xl text-gray-300">
  At 24, David Goggins, weighing nearly 300 pounds and stuck in a miserable pest control job, saw a Navy SEAL documentary that sparked his transformation. To qualify for SEAL training, he lost over 100 pounds in three months through intense running, cycling, swimming, and calorie restriction. Entering Basic Underwater Demolition/SEAL (BUD/S) training in 1999, Goggins faced grueling physical and mental challenges. Despite multiple setbacks, including injuries and failing initial attempts, his relentless determination led to success. Completing BUD/S transformed his mindset, instilling discipline and resilience, paving the way for his ultramarathon running and motivational career.
  </p>
</div>
</section>
<section className="relative z-10 flex flex-col md:flex-row items-center justify-center min-h-screen px-6 md:px-24 gap-16 py-32 bg-black text-gray-100 overflow-hidden">

 
  <div
    ref={el => (window.phase3RollingRef = el)}
    className="absolute top-1/2 left-0 transform -translate-y-1/2 text-[4vw] font-black tracking-tight text-yellow-300 opacity-[0.3] whitespace-nowrap z-0 rotate-180 pointer-events-none"
    style={{ writingMode: 'vertical-rl' }}
  >
    THEY DON'T KNOW ME SON
  </div>


  <div className="md:w-1/2" ref={el => (window.phase3TextRef = el)}>
    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-yellow-400">
      Phase 3: Relentless Resolve
    </h2>
    <p className="text-lg leading-relaxed max-w-xl text-gray-300">
    After becoming a Navy SEAL, David Goggins discovered ultramarathons as a new challenge to push his limits. Inspired to raise funds for fallen SEALs, he entered the 2005 San Diego One Day, a 100-mile race, with minimal preparation. Despite severe pain, dehydration, and injuries, he finished, sparking his ultrarunning career. Goggins competed in grueling races like the Badwater Ultramarathon, running 135 miles through Death Valley, and the Leadville 100, often placing highly despite setbacks like stress fractures. His ultramarathon journey showcased his mental toughness, transforming him into a motivational figure inspiring others to embrace discomfort.
    </p>
  </div>


  <div
    ref={el => (window.phase3ImageRef = el)}
    className="md:w-1/2 overflow-hidden rounded-xl shadow-2xl max-w-md"
  >
    <img
      src={Phase3Image}
      alt="Goggins Phase 3"
      className="object-cover w-full h-full"
    />
  </div>
</section>

<section
  id="phase4"
  className="relative flex flex-col md:flex-row items-center justify-center px-6 md:px-20 py-16 md:py-24 gap-10 bg-black overflow-hidden"
>
  <div
    ref={el => (window.phase4RollingRef = el)}
    className="absolute top-8 left-0 w-full text-center text-yellow-400 text-4xl sm:text-6xl md:text-9xl font-extrabold whitespace-nowrap tracking-wide opacity-40 pointer-events-none select-none"
  >
    DON'T BE MEDIOCRE DON'T BE MEDIOCRE DON'T BE MEDIOCRE DON'T BE MEDIOCRE
  </div>


  <div
    ref={el => (window.phase4TextRef = el)}
    className="z-10 md:w-1/2 text-left"
  >
    <h2 className="text-4xl md:text-6xl font-bold text-yellow-300 leading-tight">
      Milestones of the Toughest Man Alive:
    </h2>
    <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-xl">
      In this final transformation, David Goggins defined himself not by past pain,
      but by relentless forward motion. He set milestones, conquered ultramarathons,
      crushed military records, and became a global symbol of endurance.
    </p>
  </div>

  <div className="z-10 md:w-1/2 flex justify-center">
    <img
      ref={el => (window.phase4ImageRef = el)}
      src={Phase4Image}
      alt="Phase 4 - David Goggins"
      className="w-full max-w-md md:max-w-lg rounded-2xl"
    />
  </div>
</section>


<div className="w-full flex justify-center mt-10 mb-16 px-6">
<Link
  to="/AchievementsTimeline"
  className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 px-6 rounded-full shadow-lg transition duration-300"
>
  ATHLETIC ACHIEVEMENTS
</Link>

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
  )};
export default About;
