import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Stories } from '../data/home.js';

gsap.registerPlugin(useGSAP);

const StoryCard = ({ story, index, isHovered, onHover, onLeave, image }) => {
  const cardRef = useRef(null);
  const btnRef = useRef(null);
  const navigate = useNavigate();

  const slug = story.title
    .toLowerCase()
    .split(' ')
    .includes('awareness')
    ? 'awareness'
    : story.title.toLowerCase().split(' ')[0];

  useGSAP(() => {
    gsap.to(btnRef.current, {
      opacity: isHovered ? 1 : 0,
      y: isHovered ? 0 : 20,
      duration: 0.4,
      ease: 'power2.out',
    });
  }, { dependencies: [isHovered], scope: cardRef });

  return (
    <div
      ref={cardRef}
      onMouseEnter={() => onHover(index)}
      onMouseLeave={onLeave}
      onClick={() => navigate(`/stories/${slug}`)}
      className={`relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 ease-in-out flex-shrink-0 w-full min-[768px]:w-auto h-[380px] min-[600px]:h-[420px] min-[768px]:h-[480px] min-[992px]:h-[520px] ${
        isHovered ? 'min-[768px]:flex-[2.5]' : 'min-[768px]:flex-1'
      }`}
    >
      <img
        src={image}
        alt={story.title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700"
        style={{ transform: isHovered ? 'scale(1.05)' : 'scale(1)' }}
      />

      <div className="absolute inset-0 bg-gradient-to-t from-primary-navy/80 via-transparent to-transparent" />

      {story.iconUrl && (
        <div className="absolute top-4 left-4 min-[600px]:top-5 min-[600px]:left-5 min-[768px]:top-6 min-[768px]:left-6 w-12 h-12 min-[600px]:w-14 min-[600px]:h-14 bg-white rounded-xl shadow-xl flex items-center justify-center p-2 z-20">
          <img
            src={story.iconUrl}
            alt={`${story.title} icon`}
            className="w-full h-full object-contain rounded-xl"
          />
        </div>
      )}

      <div className="absolute bottom-0 left-0 p-5 min-[600px]:p-6 min-[768px]:p-7 min-[992px]:p-8 w-full z-20">
        <h3 className="text-bg-white text-h4 mb-3 min-[600px]:mb-4 text-[clamp(18px,3vw,28px)] leading-tight">
          {story.title}
        </h3>

        <div ref={btnRef} className="opacity-0">
          <button className="px-6 py-2 min-[600px]:px-7 min-[600px]:py-2.5 min-[768px]:px-8 rounded-full bg-bg-white text-primary-navy text-subheading-sm font-semibold hover:bg-brand-500 hover:text-bg-white transition-colors duration-300 shadow-xl text-sm min-[600px]:text-base">
            Know More
          </button>
        </div>
      </div>
    </div>
  );
};

const ImpactStories = () => {
  const container = useRef(null);
  const cloudRef = useRef(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const images = [
    '/Home/compressed-AwarenessCard.jpg',
    '/Home/compressed-AspireCard.jpeg',
    '/Home/compressed-PrysmCard.jpeg',
  ];

  useGSAP(() => {
    gsap.to(cloudRef.current, {
      x: '-15%',
      duration: 25,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    });
  }, { scope: container });

  return (
    <section
      ref={container}
      className="relative w-full min-h-screen py-12 px-4 max-[600px]:px-5 min-[600px]:py-14 min-[600px]:px-6 min-[768px]:py-16 min-[768px]:px-8 min-[992px]:py-20 min-[992px]:px-10 overflow-hidden flex flex-col items-center justify-center"
      style={{ background: 'linear-gradient(to bottom left, #E1E8FF, #F9DCED)' }}
    >
      <img
        ref={cloudRef}
        src="/Home/compressed-cloud.avif"
        alt=""
        className="absolute top-0 left-0 w-[160%] min-[600px]:w-[150%] min-[768px]:w-[140%] min-[992px]:w-[130%] h-full object-cover opacity-60 pointer-events-none mix-blend-overlay"
      />

      <div className="relative z-10 text-center mb-6 min-[600px]:mb-7 min-[768px]:mb-8">
        <h2 className="text-h1 text-primary-navy tracking-tight text-[clamp(28px,5vw,56px)]">
          Impact <span className="text-brand-600">Stories</span>
        </h2>
      </div>

      <div className="relative z-10 w-full max-w-[95%] min-[600px]:max-w-2xl min-[768px]:max-w-4xl min-[992px]:max-w-7xl mx-auto flex flex-col min-[768px]:flex-row gap-4 min-[600px]:gap-5 items-stretch min-[768px]:items-center min-[768px]:h-[480px] min-[992px]:h-[520px]">
        {Stories.map((story, index) => (
          <StoryCard
            key={index}
            index={index}
            story={story}
            image={images[index]}
            isHovered={hoveredIndex === index}
            onHover={setHoveredIndex}
            onLeave={() => setHoveredIndex(null)}
          />
        ))}
      </div>
    </section>
  );
};

export default ImpactStories;
