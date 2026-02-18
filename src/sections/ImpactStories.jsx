import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { Stories } from '../data/home.js'

gsap.registerPlugin(useGSAP)

const StoryCard = ({ story, index, isHovered, onHover, onLeave, image, slug }) => {
  const cardRef = useRef(null)
  const titleRef = useRef(null)
  const contentRef = useRef(null)
  const imageRef = useRef(null)
  const navigate = useNavigate()

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out', duration: 0.5 } })

    if (isHovered) {
      tl.to(imageRef.current, { scale: 1.08 }, 0)
        .to(titleRef.current, { y: -20 }, 0)
        .to(contentRef.current, { autoAlpha: 1, y: 0 }, 0.05)
        .to(cardRef.current, { scale: 1.02 }, 0)
    } else {
      tl.to(imageRef.current, { scale: 1 }, 0)
        .to(titleRef.current, { y: 0 }, 0)
        .to(contentRef.current, { autoAlpha: 0, y: 20 }, 0)
        .to(cardRef.current, { scale: 1 }, 0)
    }
  }, { dependencies: [isHovered], scope: cardRef })

  return (
    <div
      ref={cardRef}
      onMouseEnter={() => onHover(index)}
      onMouseLeave={onLeave}
      onClick={() => navigate(`/stories/${slug}`)}
      className={`relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 ease-in-out flex-shrink-0 w-full min-[768px]:w-auto h-[380px] min-[600px]:h-[420px] min-[768px]:h-[480px] min-[992px]:h-[520px] ${
        isHovered ? 'min-[768px]:flex-[2]' : 'min-[768px]:flex-1'
      }`}
    >
      <img
        ref={imageRef}
        src={image}
        alt={story.title}
        className="absolute inset-0 w-full h-full object-cover will-change-transform"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-primary-navy/80 via-primary-navy/20 to-transparent" />

      {story.iconUrl && (
        <div className="absolute top-6 left-6 w-14 h-14 bg-white rounded-xl shadow-xl flex items-center justify-center p-2 z-20">
          <img
            src={story.iconUrl}
            alt={`${story.title} icon`}
            className="w-full h-full object-contain rounded-xl"
          />
        </div>
      )}

      <div className="absolute bottom-0 left-0 w-full p-8 z-20">
        <h3
          ref={titleRef}
          className="text-bg-white text-[clamp(20px,3vw,28px)] leading-tight font-semibold"
        >
          {story.title}
        </h3>

        <div
          ref={contentRef}
          className="absolute left-8 bottom-8 opacity-0 translate-y-5"
        >
          <h4 className="italic text-white mb-4 text-body">
            {story.tagline}
          </h4>
          <button className="relative bottom-25 left-0 px-8 py-2.5 rounded-full bg-bg-white text-primary-navy text-subheading-sm font-semibold hover:bg-brand-500 hover:text-bg-white transition-colors duration-300 shadow-xl">
            Know More
          </button>
        </div>
      </div>
    </div>
  )
}

const ImpactStories = () => {
  const container = useRef(null)
  const cloudRef = useRef(null)
  const [hoveredIndex, setHoveredIndex] = useState(null)

  const images = [
    '/Home/compressed-AwarenessCard.jpg',
    '/Home/compressed-AspireCard.jpeg',
    '/Home/compressed-PrysmCard.jpeg',
  ]

  useGSAP(() => {
    gsap.to(cloudRef.current, {
      x: '-12%',
      duration: 30,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    })
  }, { scope: container })

  return (
    <section
      ref={container}
      className="relative w-full min-h-screen py-16 px-6 overflow-hidden flex flex-col items-center justify-center"
      style={{ background: 'linear-gradient(to bottom left, #E1E8FF, #F9DCED)' }}
    >
      <img
        ref={cloudRef}
        src="/Home/compressed-cloud.avif"
        alt=""
        className="absolute top-0 left-0 w-[140%] h-full object-cover opacity-60 pointer-events-none mix-blend-overlay"
      />

      <div className="relative z-10 text-center mb-12">
        <h2 className="text-[clamp(32px,5vw,56px)] font-bold text-primary-navy tracking-tight">
          Impact <span className="text-brand-600">Stories</span>
        </h2>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col min-[768px]:flex-row gap-6 items-stretch min-[768px]:h-[500px]">
        {Stories.map((story, index) => (
          <StoryCard
            key={index}
            index={index}
            story={story}
            image={images[index]}
            isHovered={hoveredIndex === index}
            onHover={setHoveredIndex}
            onLeave={() => setHoveredIndex(null)}
            slug={story.path}
          />
        ))}
      </div>
    </section>
  )
}

export default ImpactStories
