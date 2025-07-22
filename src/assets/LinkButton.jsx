import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';

const AnimatedLink = () => {
  const buttonRef = useRef(null);

  useEffect(() => {
    const btn = buttonRef.current;

    // Hover animation
    const hoverIn = () => {
      gsap.to(btn, {
        scale: 1.05,
        backgroundColor: '#60a5fa', 
        duration: 0.2,
        ease: 'power2.out',
      });
    };

    const hoverOut = () => {
      gsap.to(btn, {
        scale: 1,
        backgroundColor: '#60b5fa', // Tailwind's blue-400
        duration: 0.2,
        ease: 'power2.inOut',
      });
    };

    const clickDown = () => {
      gsap.to(btn, {
        scale: 0.95,
        duration: 0.1,
      });
    };

    const clickUp = () => {
      gsap.to(btn, {
        scale: 1.05,
        duration: 0.1,
      });
    };

    btn.addEventListener('mouseenter', hoverIn);
    btn.addEventListener('mouseleave', hoverOut);
    btn.addEventListener('mousedown', clickDown);
    btn.addEventListener('mouseup', clickUp);

    return () => {
      btn.removeEventListener('mouseenter', hoverIn);
      btn.removeEventListener('mouseleave', hoverOut);
      btn.removeEventListener('mousedown', clickDown);
      btn.removeEventListener('mouseup', clickUp);
    };
  }, []);

  return (
    <Link
      ref={buttonRef}
      to="/about"
      className="bg-blue-400 text-black font-semibold px-7 py-3 rounded-full border border-black"
    >
      Learn More
    </Link>
  );
};

export default AnimatedLink;
