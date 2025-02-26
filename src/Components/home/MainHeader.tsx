"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import "./MainHeader.css";

export const MainHeader = () => {
  const headerRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);
  const mobileImageRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      headerRef.current,
      { opacity: 0, y: 100 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    );

    gsap.fromTo(
      textRef.current,
      { opacity: 0, y: 100 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out", delay: 0.3 }
    );

    gsap.fromTo(
      imageRef.current,
      { opacity: 0, y: 100 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out", delay: 0.5 }
    );

    gsap.fromTo(
      mobileImageRef.current,
      { opacity: 0, y: 100 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out", delay: 0.7 }
    );
  }, []);

  return (
    <div   className="relative min-h-screen bg-image overflow-hidden">
     
      <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-blue-500 clip-polygon-overlay z-10" />

      
      <div
        ref={textRef}
        className="relative z-20 w-11/12 md:w-4/5 mx-auto h-full flex items-center pt-[6rem] md:py-[10rem]"
      >
        <div className="max-w-2xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold uppercase tracking-wide text-transparent [-webkit-text-stroke:1px_white] leading-tight">
            Impulsa tu
          </h1>
          <h1 className="text-5xl sm:text-6xl md:text-6xl font-black uppercase text-white tracking-wide leading-tight">
            Transformación Digital
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-white mt-4 md:mt-6 mb-6 md:mb-8 max-w-lg">
            Desarrollamos software y páginas web personalizadas para potenciar
            tu negocio. Además, ofrecemos formación en tecnología para que
            domines las herramientas del futuro.
          </p>
          <button className="relative inline-flex items-center justify-center bg-gradient-to-r from-purple-700 to-blue-500 font-bold text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3 uppercase transform transition-all hover:-translate-y-0.5 hover:bg-[#c3e350] clip-polygon-button text-white">
            ¡Comienza ahora! →
          </button>
        </div>
      </div>
 
      <div
        ref={imageRef}
        className="absolute right-0 top-0 h-full z-20 hidden md:block"
      >
        <img
          src="https://web.frtl.utn.edu.ar/wp-content/uploads/2021/10/ingeniero-sistemas-foto.png"
          alt="Ingeniero en sistemas"
          className="h-full object-cover"
        />
      </div>

    
      <div
        ref={mobileImageRef}
        className="absolute right-0 bottom-0 w-full h-1/2 z-20 md:hidden"
      >
        <img
          src="https://8094883.fs1.hubspotusercontent-na1.net/hub/8094883/hubfs/landing-entrenadores-0001.png?width=800&name=landing-entrenadores-0001.png"
          alt="Ingeniero en sistemas"
          className="w-full h-full object-cover object-top"
        />
      </div>
    </div>
  );
};
