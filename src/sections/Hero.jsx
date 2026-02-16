import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Hero = () => {
  const container = useRef(null);
  const videoRef = useRef(null);
  const badgeRef = useRef(null);
  const titleRef = useRef(null);
  const sublineRef = useRef(null);
  const buttonRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out', duration: 1 } });

    tl.fromTo(videoRef.current, { opacity: 0 }, { opacity: 1, duration: 1.5 })
      .from(badgeRef.current, { y: 20, opacity: 0 }, '-=0.5')
      .from(titleRef.current, { y: 30, opacity: 0 }, '-=0.7')
      .from(sublineRef.current, { y: 20, opacity: 0 }, '-=0.7')
      .from(buttonRef.current, { scale: 0.8, opacity: 0 }, '-=0.5');
  }, { scope: container });

  return (
    <section ref={container} className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-bg-dark text-bg-white mt-10">
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="h-full w-full object-cover opacity-0"
        >
          <source src="/Home/background.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-primary-navy/40" />
      </div>

      <div className="relative z-10 flex flex-col items-center px-4 text-center max-w-5xl mx-auto">
        <div 
          ref={badgeRef}
          className="mb-8 flex items-center gap-2 rounded-full border border-bg-white/30 bg-bg-white/10 px-4 py-1 backdrop-blur-md"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
          <span className="text-subheading-sm uppercase tracking-wider">Truly Transforming</span>
        </div>

        <h1 
          ref={titleRef}
          className="text-h1 mb-6 max-w-4xl"
        >
          Reimagining Talent <br />
          For A Changing <span className="text-brand-500">World</span>
        </h1>

        <p 
          ref={sublineRef}
          className="text-body-lg mb-10 max-w-2xl text-bg-muted/90"
        >
          We develop talent that performs with purpose and leads with impact turning your people into your most enduring edge.
        </p>

        <button 
          ref={buttonRef}
          className="group relative overflow-hidden rounded-full border-2 border-bg-white px-8 py-3 transition-colors hover:bg-bg-white"
        >
          <span className="text-subheading relative z-10 group-hover:text-primary-purple transition-colors">
            View Programs
          </span>
          <div className="absolute inset-0 z-0 translate-y-full bg-bg-white transition-transform duration-300 group-hover:translate-y-0" />
        </button>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
        <div className="h-6 w-px bg-bg-white" />
      </div>
    </section>
  );
};

export default Hero;