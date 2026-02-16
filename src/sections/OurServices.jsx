import React, { useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { Services } from '../data/capabilities';

gsap.registerPlugin(ScrollTrigger);

const ServiceCard = ({ service, index }) => {
  const cardRef = useRef(null);
  const detailsRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  useGSAP(() => {
    const line = cardRef.current.querySelector(".scan-line");
    const glow = cardRef.current.querySelector(".line-glow");
    const content = cardRef.current.querySelector(".stat-content");

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: cardRef.current,
        start: "top 90%",
        toggleActions: "play none none none",
      },
    });

    tl.fromTo([line, glow], 
      { x: "4rem", opacity: 0 },
      { x: 0, opacity: 1, duration: 0.8, ease: "power2.inOut", delay: index * 0.1 }
    )
    .fromTo(content,
      { clipPath: "inset(0 0 0 100%)" },
      { clipPath: "inset(0 0 0 0%)", duration: 0.8, ease: "power2.inOut" },
      "<"
    )
    .to(glow, { opacity: 0.3, duration: 0.4 });
  }, { scope: cardRef });

  useGSAP(() => {
    gsap.to(detailsRef.current, {
      height: isHovered ? "auto" : 0,
      opacity: isHovered ? 1 : 0,
      duration: 0.4,
      ease: "power2.inOut"
    });
  }, { dependencies: [isHovered] });

  return (
    <div 
      ref={cardRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative w-full border border-brand-400/20 bg-bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-500 overflow-hidden mb-4"
    >
      <div className="px-8 py-6 flex flex-col md:flex-row md:items-center justify-between gap-4 cursor-pointer">
        <div className="relative pl-5">
          <div className="scan-line absolute left-0 top-0 h-full w-px bg-brand-500 z-20" />
          <div className="line-glow absolute left-0 top-0 h-full w-[2px] bg-brand-500 blur-[4px] shadow-[0_0_15px_1px_rgba(198,150,189,0.8)] z-10" />
          
          <div className="stat-content">
            <h3 className="text-h6 text-primary-navy uppercase tracking-tight">
              {service.title}
            </h3>
            <p className="text-body-xs text-brand-600 font-semibold mt-0.5">
              {service.tagline}
            </p>
          </div>
        </div>
        
        <div className={`transition-transform duration-500 hidden md:block ${isHovered ? 'rotate-180' : 'rotate-0'}`}>
          <span className="text-xl text-brand-500">↓</span>
        </div>
      </div>

      <div ref={detailsRef} className="h-0 opacity-0 overflow-hidden">
        <div className="px-13 pb-8">
          <div className="w-full h-px bg-bg-muted mb-5" />
          <p className="text-body-sm text-primary-navy/70 leading-relaxed max-w-5xl">
            {service.description}
          </p>
        </div>
      </div>
    </div>
  );
};

const OurServices = () => {
  return (
    <section className="w-full py-10 bg-bg-muted/30">
      <div className="max-w-6xl mx-auto px-10">
        <div className="mb-8">
          <h1 className="text-h2 text-primary-navy tracking-tight text-center">
            OUR <span className="text-brand-600">SERVICES</span>
          </h1>
        </div>
        
        <div className="flex flex-col gap-2">
          {Services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;