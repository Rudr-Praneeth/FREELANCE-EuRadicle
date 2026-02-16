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
      className={`relative h-[500px] rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 ease-in-out ${
        isHovered ? 'flex-[2.5]' : 'flex-1'
      }`}
    >
      {/* Background Image */}
      <img
        src={image}
        alt={story.title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700"
        style={{ transform: isHovered ? 'scale(1.05)' : 'scale(1)' }}
      />

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary-navy/80 via-transparent to-transparent" />

      {/* Icon Container */}
      {story.iconUrl && (
        <div className="absolute top-6 left-6 w-14 h-14 bg-white rounded-xl shadow-xl flex items-center justify-center p-2 z-20">
          <img
            src={story.iconUrl}
            alt={`${story.title} icon`}
            className="w-full h-full object-contain rounded-xl"
          />
        </div>
      )}

      {/* Content */}
      <div className="absolute bottom-0 left-0 p-8 w-full z-20">
        <h3 className="text-bg-white text-h4 mb-4">
          {story.title}
        </h3>

        <div ref={btnRef} className="opacity-0">
          <button
            className="px-8 py-2.5 rounded-full bg-bg-white text-primary-navy text-subheading-sm font-semibold hover:bg-brand-500 hover:text-bg-white transition-colors duration-300 shadow-xl"
          >
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
    '/Home/AwarenessCard.jpg',
    '/Home/AspireCard.jpeg',
    '/Home/PrysmCard.jpeg',
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
      className="relative w-full min-h-screen py-16 px-6 overflow-hidden flex flex-col items-center justify-center"
      style={{ background: 'linear-gradient(to bottom left, #E1E8FF, #F9DCED)' }}
    >
      {/* Animated Cloud Background */}
      <img
        ref={cloudRef}
        src="/Home/cloud.avif"
        alt=""
        className="absolute top-0 left-0 w-[130%] h-full object-cover opacity-60 pointer-events-none mix-blend-overlay"
      />

      {/* Section Heading */}
      <div className="relative z-10 text-center mb-8">
        <h2 className="text-h1 text-primary-navy tracking-tight">
          Impact <span className="text-brand-600">Stories</span>
        </h2>
      </div>

      {/* Cards */}
      <div className="relative z-10 w-full max-w-7xl mx-auto flex gap-5 h-[520px] items-center">
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
