import React from 'react'
import Navbar from '../components/Navbar'
import CapabilitiesSection from '../data/CapabilitiesSection'
import OurServices from '../sections/OurServices'
import JourneySection from '../sections/JourneySection'

const Capabilities = () => {
  return (
    <div>
      <Navbar />
      <CapabilitiesSection />
      <OurServices />
      <JourneySection />
    </div>
  )
}

export default Capabilities