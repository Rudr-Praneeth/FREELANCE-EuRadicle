import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../sections/Hero'
import Showreel from '../sections/Showreel'
import ImpactSection from '../sections/ImpactSection'
import ImpactStories from '../sections/ImpactStories'
import BlogsSection from '../sections/BlogsSection'
import Testimonials from '../sections/Testimonials'
import LogoSection from '../sections/LogoSection'
import JourneySection from '../sections/JourneySection'

const Home = () => {
  return (
    <div>
    <Navbar />
    <Hero />
    <Showreel />
    <ImpactSection />
    <ImpactStories />
    <Testimonials />
    <BlogsSection />
    <LogoSection />
    <JourneySection />
    </div>
  )
}

export default Home