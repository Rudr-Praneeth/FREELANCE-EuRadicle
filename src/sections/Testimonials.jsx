import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Testimonials } from '../data/home';

gsap.registerPlugin(useGSAP);

const TestimonialCard = ({ data }) => (
  <div className="w-full bg-bg-white rounded-2xl p-8 border border-brand-400/20 shadow-[0_10px_30px_-15px_rgba(45,48,71,0.1)] flex flex-col gap-4 mb-8">
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <span key={i} className="text-brand-500 text-xl">★</span>
      ))}
    </div>
    <h4 className="text-h6 text-primary-navy leading-tight">
      {data.designation}
    </h4>
    <p className="text-body-sm text-primary-navy/70 italic leading-relaxed">
      "{data.testimonial}"
    </p>
    <div className="mt-4 pt-6 border-t border-bg-muted flex items-center justify-between">
      <div className="flex flex-col">
        <span className="text-subheading-sm text-primary-navy">{data.by}</span>
        <span className="text-body-xs text-brand-600 font-semibold uppercase tracking-wider">{data.org}</span>
      </div>
      {data.logoUrl && (
        <img 
          src={data.logoUrl} 
          alt={data.org} 
          className="h-8 w-auto grayscale opacity-70 object-contain"
        />
      )}
    </div>
  </div>
);

const MarqueeColumn = ({ items, reverse = false }) => {
  const colRef = useRef(null);
  const trackRef = useRef(null);
  const timeline = useRef(null);

  useGSAP(() => {
    const track = trackRef.current;
    const height = track.scrollHeight / 2;

    timeline.current = gsap.to(track, {
      y: reverse ? height : -height,
      duration: 90,
      ease: "none",
      repeat: -1,
    });

    if (reverse) {
      gsap.set(track, { y: -height });
    }
  }, { scope: colRef });

  const handleMouseEnter = () => timeline.current?.pause();
  const handleMouseLeave = () => timeline.current?.play();

  return (
    <div 
      ref={colRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative h-[800px] overflow-hidden px-4 flex items-center justify-center"
    >
      <div ref={trackRef} className="flex flex-col">
        {[...items, ...items].map((item, idx) => (
          <TestimonialCard key={idx} data={item} />
        ))}
      </div>
    </div>
  );
};

const TestimonialsSection = () => {
  const container = useRef(null);
  
  const midPoint = Math.ceil(Testimonials.length / 2);
  const leftCol = Testimonials.slice(0, midPoint);
  const rightCol = Testimonials.slice(midPoint).length ? Testimonials.slice(midPoint) : Testimonials.slice(0, midPoint);

  return (
    <section 
      ref={container}
      className="relative w-full py-24 bg-bg-white overflow-hidden px-16"
    >
      <div className="absolute inset-0 pointer-events-none z-30">
        <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-bg-white via-bg-white/80 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-bg-white via-bg-white/80 to-transparent" />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h1 className="text-h1 text-primary-navy">
            Trusted by Leaders <span className="text-brand-600"><br />Across Organizations</span>
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
          <MarqueeColumn items={leftCol} />
          <MarqueeColumn items={rightCol} reverse={true} />
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;