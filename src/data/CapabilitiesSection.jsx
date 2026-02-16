import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { capabilities } from '../data/capabilities';

gsap.registerPlugin(ScrollTrigger);

const CapabilityCard = ({ title, imageUrl, index }) => {
  const cardRef = useRef(null);
  const navigate = useNavigate();
  
  const slug = title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '');

  useGSAP(() => {
    const card = cardRef.current;
    const line = card.querySelector(".scan-line");
    const glow = card.querySelector(".line-glow");
    const content = card.querySelector(".stat-content");

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: card,
        start: "top 90%",
        toggleActions: "play none none none",
      },
    });

    tl.fromTo(card, 
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out", delay: (index % 4) * 0.1 }
    )
    .fromTo([line, glow],
      { x: "4rem", opacity: 0 },
      { x: 0, opacity: 1, duration: 0.8, ease: "power2.inOut" },
      "-=0.4"
    )
    .fromTo(content,
      { clipPath: "inset(0 0 0 100%)" },
      { clipPath: "inset(0 0 0 0%)", duration: 0.8, ease: "power2.inOut" },
      "<"
    )
    .to(glow, { opacity: 0.3, duration: 0.4 });
  }, { scope: cardRef });

  return (
    <div 
      ref={cardRef}
      onClick={() => navigate(`/capabilities/${slug}`)}
      className="group relative flex flex-col w-full h-full min-h-[340px] bg-bg-white rounded-xl overflow-hidden border border-brand-400/20 shadow-sm cursor-pointer opacity-0"
    >
      <div className="relative h-44 w-full overflow-hidden">
        <img 
          src={imageUrl || "/api/placeholder/400/320"} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-primary-navy/20 transition-opacity duration-500 group-hover:opacity-0" />
      </div>

      <div className="flex flex-col flex-grow p-5">
        <div className="relative mb-6 pl-3">
          <div className="scan-line absolute left-0 top-0 h-full w-px bg-brand-500 z-20" />
          <div className="line-glow absolute left-0 top-0 h-full w-[2px] bg-brand-500 blur-[4px] shadow-[0_0_15px_1px_rgba(198,150,189,0.8)] z-10" />
          
          <div className="stat-content">
            <h3 className="text-h6 text-primary-navy uppercase tracking-tight leading-tight">
              {title}
            </h3>
          </div>
        </div>

        <div className="mt-auto">
          <div className="inline-flex items-center gap-1.5 text-body-xs text-brand-600 font-bold group/btn">
            <span className="relative overflow-hidden uppercase tracking-wider">
              Know More
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-brand-500 translate-x-[-101%] group-hover/btn:translate-x-0 transition-transform duration-300" />
            </span>
            <span className="text-base transition-transform duration-300 group-hover/btn:translate-x-1">
              →
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

const CapabilitiesSection = () => {
  const container = useRef(null);

  return (
    <section 
      ref={container}
      className="relative w-full py-16 bg-bg-muted/30 px-4 overflow-hidden mt-10"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-h2 text-primary-navy tracking-tight">
            OUR <span className="text-brand-600">CAPABILITIES</span>
          </h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilities.map((cap, index) => (
            <CapabilityCard 
              key={index} 
              index={index}
              title={cap.title} 
              imageUrl={cap.imageUrl} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CapabilitiesSection;