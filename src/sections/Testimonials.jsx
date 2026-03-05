import React from 'react';
import { Testimonials } from '../data/home';

const TestimonialCard = ({ data }) => {
  const isParticipantVoice = !data.by && !data.designation;

  return (
    <div className="testimonial-card relative flex-shrink-0 w-[85vw] sm:w-full max-w-[380px] sm:max-w-none bg-bg-white rounded-2xl p-4 sm:p-5 md:p-5 lg:p-6 border border-brand-400/20 shadow-[0_10px_30px_-15px_rgba(45,48,71,0.1)] flex flex-col gap-2 sm:gap-3 mb-0 sm:mb-4">
      {isParticipantVoice && (
        <img 
          src="/ParticipantsVoices.png" 
          alt="Participant Voice Logo" 
          className="absolute top-4 right-4 w-8 h-8 sm:w-9 sm:h-9 object-contain opacity-80"
        />
      )}

      <div className="flex gap-1">
        {[...Array(5)].map((_, i) => (
          <span key={i} className="text-brand-500 text-base sm:text-lg">★</span>
        ))}
      </div>
      <p className="text-primary-navy/70 italic leading-relaxed text-[clamp(13px,3.8vw,16px)] sm:text-[clamp(13px,1.6vw,16px)] line-clamp-4 sm:line-clamp-3">
        "{data.testimonial}"
      </p>

      <div className="mt-2 sm:mt-3 pt-3 sm:pt-4 border-t border-bg-muted flex items-center justify-between gap-3">
        <div className="flex flex-col">
          <span className="text-primary-navy text-xs sm:text-sm font-medium">
            {isParticipantVoice ? "Participant Voices" : data.by}
          </span>
          <span className="text-primary-navy text-xs sm:text-sm font-medium">
              {isParticipantVoice ? "" : data.designation}
          </span>
          <span className="text-brand-600 font-semibold uppercase tracking-wider text-[10px] sm:text-xs">
            {data.org}
          </span>
        </div>

        {data.logoUrl && (
          <img
            src={data.logoUrl}
            alt={data.org}
            className={`h-12 sm:h-16 md:h-18 object-contain flex-shrink-0 ${
              data.logoUrl === "/logos/peepalco.svg" ? "w-16 sm:w-20" : "w-auto"
            }`}
          />
        )}
      </div>
    </div>
  );
};

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
  <div className="relative h-[520px] md:h-[600px] lg:h-[650px] overflow-hidden px-2 hidden sm:block">
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
        .animate-marquee { animation: marquee 80s linear infinite; }
        .animate-marquee-reverse { animation: marquee-reverse 80s linear infinite; }
        .animate-marquee-x { animation: marquee-x 65s linear infinite; }
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
        {/* <div className="absolute top-0 left-0 w-full h-16 sm:h-24 bg-gradient-to-b from-bg-white via-bg-white/80 to-transparent" /> */}
        <div className="absolute bottom-0 left-0 w-full h-16 sm:h-24 bg-gradient-to-t from-bg-white via-bg-white/80 to-transparent" />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto">
        <div className="text-center mb-8 sm:mb-16">
          <h1 className="text-primary-navy text-h1">
            Trusted by Leaders{' '}
            <span className="text-primary-mauve block">Across Organizations</span>
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