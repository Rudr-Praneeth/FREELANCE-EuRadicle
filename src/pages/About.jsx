import React from 'react'
import AboutSection from '../sections/AboutSection'
import Timeline from '../sections/Timeline'
import OurApproach from '../sections/OurApproach'
import MindsBehind from '../sections/MindsBehind'
import GlobalFootprintsSection from '../sections/GlobalFooterSection'
import BeyondBusiness from '../sections/BeyondBusiness'

const About = () => {
    const items = [
      {
        year: "2020",
        title: "The Inception",
        text: "Founded with a clear intent to help organizations build leadership and capability that turns strategy into performance. Beginning with core leadership development and capability-building solutions for global & local organizations, a strong virtual delivery model was established to deliver impact even despite uncertainty of the covid era.",
        logo: "Timeline Logo/2020 - 2021.png",
      },
      {
        year: "2021",
        title: "Building Resilience",
        text: "Expanded partnerships with enterprise organizations and global industry leaders, while scaling delivery across India. This phase strengthened consultant-led execution and established long-term trust as a partner for complex, large-scale service delivery engagements.",
        logo: "Timeline Logo/2021 - 2023.png"
      },
      {
        year: "2022",
        title: "Gaining Momentum",
        text: "Expanded client footprints as credibility and goodwill grew through human capital and capability consulting engagements delivered across India and Europe, strengthening long-term enterprise relationships.",
        logo: "Timeline Logo/2021 - 2023.png"
      },
      {
        year: "2023",
        title: "The Strategic Shift",
        text: "Transitioned into a capability consulting model, building specialized teams across consulting, creative solutions, content development, and research in Hyderabad to support global operations and enable long-term enterprise engagements beyond standalone engagements.",
        logo: "Timeline Logo/2021 - 2023.png"
      },
      {
        year: "2024",
        title: "Deepening Consulting Impact",
        text: "Strengthened positioning as a trusted consulting partner, delivering leadership journeys, behavioural transformation, and assessment-led development for large organizations and growing enterprises. Expanded global readiness by progressing firm registration in Texas to support a growing US-based client ecosystem.",
        logo: "Timeline Logo/2023 - 2025.png"
      },
      {
        year: "2025–26",
        title: "Where We Are Today",
        text: "A global talent and capability consulting firm with consultants and delivery capabilities across India, the USA, and the UAE. Work with organizations across industries-including enterprises with Fortune 500 footprints-is guided by three core commitments: end-to-end accountability, deep expertise, and agile, co-created solutions.",
        logo: "Timeline Logo/2023 - 2025.png"
      },
    ];
  return (
    <div>
      <AboutSection />
      <Timeline  items={items}/>
      <OurApproach />
      <MindsBehind />
      <GlobalFootprintsSection />
      <BeyondBusiness />
    </div>
  )
}

export default About