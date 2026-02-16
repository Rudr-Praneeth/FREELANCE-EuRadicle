import React from 'react'
import AboutSection from '../sections/AboutSection'
import Timeline from '../sections/Timeline'
import OurApproach from '../sections/OurApproach'
import MindsBehind from '../sections/MindsBehind'
import GlobalFootprintsSection from '../sections/GlobalFooterSection'

const About = () => {
  return (
    <div>
      <AboutSection />
      <Timeline />
      <OurApproach />
      <MindsBehind />
      <GlobalFootprintsSection />
    </div>
  )
}

export default About