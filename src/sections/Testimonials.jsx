import React from 'react';
import { Testimonials } from '../data/home';

const TestimonialCard = ({ data }) => (
  <div className="testimonial-card w-full bg-bg-white rounded-2xl p-5 min-[600px]:p-6 min-[768px]:p-7 min-[992px]:p-8 border border-brand-400/20 shadow-[0_10px_30px_-15px_rgba(45,48,71,0.1)] flex flex-col gap-3 min-[600px]:gap-4 mb-6 min-[600px]:mb-8">
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <span key={i} className="text-brand-500 text-lg min-[600px]:text-xl">★</span>
      ))}
    </div>
    <h4 className="text-h6 text-primary-navy leading-tight text-[clamp(16px,2.5vw,22px)]">
      {data.designation}
    </h4>
    <p className="text-body-sm text-primary-navy/70 italic leading-relaxed text-[clamp(14px,2.5vw,18px)]">
      "{data.testimonial}"
    </p>
    <div className="mt-3 min-[600px]:mt-4 pt-4 min-[600px]:pt-6 border-t border-bg-muted flex items-center justify-between gap-4">
      <div className="flex flex-col">
        <span className="text-subheading-sm text-primary-navy text-sm min-[600px]:text-base">
          {data.by}
        </span>
        <span className="text-body-xs text-brand-600 font-semibold uppercase tracking-wider text-xs min-[600px]:text-sm">
          {data.org}
        </span>
      </div>
      {data.logoUrl && (
        <img
          src={data.logoUrl}
          alt={data.org}
          className={`h-12 min-[600px]:h-14 min-[768px]:h-16 object-contain flex-shrink-0 ${
      data.logoUrl === "/logos/peepalco.png" ? "w-24" : "w-auto" }`}
       />
      )}
    </div>
  </div>
);

const MarqueeColumn = ({ items, reverse = false }) => (
  <div className="relative h-[600px] min-[600px]:h-[700px] min-[768px]:h-[800px] overflow-hidden px-2 min-[600px]:px-3 min-[768px]:px-4">
    <div
      className={`flex flex-col will-change-transform ${
        reverse ? 'animate-marquee-reverse' : 'animate-marquee'
      }`}
    >
      {[...items, ...items, ...items].map((item, idx) => (
        <TestimonialCard key={idx} data={item} />
      ))}
    </div>
  </div>
);

const TestimonialsSection = () => {
  const midPoint = Math.ceil(Testimonials.length / 2);
  const leftCol = Testimonials.slice(0, midPoint);
  const rightCol = Testimonials.slice(midPoint).length
    ? Testimonials.slice(midPoint)
    : Testimonials.slice(0, midPoint);

  return (
    <section className="relative w-full py-14 px-4 max-[600px]:px-5 min-[600px]:py-16 min-[600px]:px-6 min-[768px]:py-20 min-[768px]:px-8 min-[992px]:py-24 min-[992px]:px-12 min-[1200px]:px-16 bg-bg-white overflow-hidden">
      <div className="absolute inset-0 pointer-events-none z-30">
        <div className="absolute top-0 left-0 w-full h-24 min-[600px]:h-32 min-[768px]:h-40 bg-gradient-to-b from-bg-white via-bg-white/80 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-24 min-[600px]:h-32 min-[768px]:h-40 bg-gradient-to-t from-bg-white via-bg-white/80 to-transparent" />
      </div>

      <div className="relative z-20 max-w-[95%] min-[600px]:max-w-2xl min-[768px]:max-w-4xl min-[992px]:max-w-6xl min-[1200px]:max-w-7xl mx-auto">
        <div className="text-center mb-10 min-[600px]:mb-12 min-[768px]:mb-16 min-[992px]:mb-20">
          <h1 className="text-h1 text-primary-navy text-[clamp(28px,5vw,56px)] leading-tight">
            Trusted by Leaders{' '}
            <span className="text-brand-600 block">
              Across Organizations
            </span>
          </h1>
        </div>

        <div className="grid grid-cols-1 min-[768px]:grid-cols-2 gap-2 min-[600px]:gap-3 min-[768px]:gap-4">
          <MarqueeColumn items={leftCol} />
          <div className="hidden min-[768px]:block">
            <MarqueeColumn items={rightCol} reverse />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
