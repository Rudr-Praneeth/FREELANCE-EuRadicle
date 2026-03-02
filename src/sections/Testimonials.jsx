import React from 'react';
import { Testimonials } from '../data/home';

const TestimonialCard = ({ data }) => (
  <div className="testimonial-card flex-shrink-0 w-[85vw] sm:w-full max-w-[380px] sm:max-w-none bg-bg-white rounded-2xl p-4 sm:p-6 min-[768px]:p-7 min-[992px]:p-8 border border-brand-400/20 shadow-[0_10px_30px_-15px_rgba(45,48,71,0.1)] flex flex-col gap-2 sm:gap-4 mb-0 sm:mb-6">
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <span key={i} className="text-brand-500 text-base sm:text-xl">★</span>
      ))}
    </div>

    <h4 className="text-primary-navy leading-tight text-[clamp(15px,4vw,20px)] sm:text-[clamp(16px,2.5vw,22px)] font-semibold">
      {data.designation}
    </h4>

    <p className="text-primary-navy/70 italic leading-relaxed text-[clamp(13px,3.8vw,16px)] sm:text-[clamp(14px,2.5vw,18px)] line-clamp-3 sm:line-clamp-none">
      "{data.testimonial}"
    </p>

    <div className="mt-2 sm:mt-4 pt-3 sm:pt-6 border-t border-bg-muted flex items-center justify-between gap-3 sm:gap-4">
      <div className="flex flex-col">
        <span className="text-primary-navy text-xs sm:text-base font-medium">
          {data.by}
        </span>
        <span className="text-brand-600 font-semibold uppercase tracking-wider text-[10px] sm:text-sm">
          {data.org}
        </span>
      </div>

      {data.logoUrl && (
        <img
          src={data.logoUrl}
          alt={data.org}
          className={`h-14 sm:h-24 object-contain flex-shrink-0 ${
            data.logoUrl === "/logos/peepalco.svg" ? "w-18 sm:w-23" : "w-auto"
          }`}
        />
      )}
    </div>
  </div>
);

const MarqueeRow = ({ items }) => (
  <div className="relative w-full overflow-hidden sm:hidden py-2">
    <div className="flex gap-4 animate-marquee-x w-max">
      {[...items, ...items].map((item, idx) => (
        <TestimonialCard key={idx} data={item} />
      ))}
    </div>
  </div>
);

const MarqueeColumn = ({ items, reverse = false }) => (
  <div className="relative h-[600px] min-[600px]:h-[700px] min-[768px]:h-[800px] overflow-hidden px-2 hidden sm:block">
    <div className={`flex flex-col ${reverse ? 'animate-marquee-reverse' : 'animate-marquee'}`}>
      {[...items, ...items].map((item, idx) => (
        <TestimonialCard key={idx} data={item} />
      ))}
    </div>
  </div>
);

const TestimonialsSection = () => {
  const midPoint = Math.ceil(Testimonials.length / 2);
  const leftCol = Testimonials.slice(0, midPoint);
  const rightCol = Testimonials.slice(midPoint);

  return (
    <section className="relative w-full py-10 sm:py-14 px-4 bg-bg-white overflow-hidden">
      <style>{`
        @keyframes marquee {
          from { transform: translateY(0); }
          to { transform: translateY(-50%); }
        }
        @keyframes marquee-reverse {
          from { transform: translateY(-50%); }
          to { transform: translateY(0); }
        }
        @keyframes marquee-x {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-marquee { animation: marquee 60s linear infinite; }
        .animate-marquee-reverse { animation: marquee-reverse 60s linear infinite; }
        .animate-marquee-x { animation: marquee-x 45s linear infinite; }
        .animate-marquee:hover, .animate-marquee-reverse:hover, .animate-marquee-x:hover {
          animation-play-state: paused;
        }
        .testimonial-card { transition: transform 0.3s ease, box-shadow 0.3s ease; }
        .testimonial-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 40px -15px rgba(45,48,71,0.2);
          z-index: 10;
        }
      `}</style>

      <div className="absolute inset-0 pointer-events-none z-30">
        <div className="absolute top-0 left-0 w-full h-16 sm:h-24 bg-gradient-to-b from-bg-white via-bg-white/80 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-16 sm:h-24 bg-gradient-to-t from-bg-white via-bg-white/80 to-transparent" />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto">
        <div className="text-center mb-8 sm:mb-16">
          <h1 className="text-primary-navy text-[clamp(24px,6vw,36px)] sm:text-[clamp(28px,5vw,56px)] leading-tight font-bold">
            Trusted by Leaders{' '}
            <span className="text-brand-600 block">Across Organizations</span>
          </h1>
        </div>

        <MarqueeRow items={Testimonials} />

        <div className="hidden sm:grid grid-cols-1 md:grid-cols-2 gap-6 px-10">
          <MarqueeColumn items={leftCol} />
          <MarqueeColumn items={rightCol} reverse />
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;