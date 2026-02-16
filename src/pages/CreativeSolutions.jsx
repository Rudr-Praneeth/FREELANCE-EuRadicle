import React from "react";
import CapabilityLayout from "../layouts/CapabilityLayout.jsx";

function CreativeSolutions() {
  return (
    <CapabilityLayout
      badge="Creative Solutions"
      title="Creative Solutions"
      subtitle="Designing immersive learning and engagement experiences that turn insight into sustained action."
      image="/Home/CreativeSolutions.avif"
    >
      <p>
        Learning experiences must engage the mind, emotion, and application—not just deliver content. 
        EuRadicle’s Creative Solutions capability focuses on designing immersive, learner-centric experiences 
        that drive real capability development. By blending instructional design, storytelling, and operational 
        excellence, organizations create learning journeys that are impactful, scalable, and aligned with business goals.
      </p>

      <h2 className="text-h4 text-[var(--color-primary-mauve)]">
        E-Learning & Digital Course Design
      </h2>

      <p>
        Modern learning requires flexibility, accessibility, and engagement. This focus area centers on designing digital learning experiences that are interactive, learner-centric, and scalable. Thoughtful design ensures learning remains relevant and impactful, regardless of location or format.
      </p>

      <h2 className="text-h4 text-[var(--color-primary-mauve)]">
        Storyboarding & Learning Content Development
      </h2>

      <p>
        Effective learning content is structured with intention and flow. This dimension focuses on blending narrative, visuals, and interactivity to create learning journeys that hold attention and reinforce understanding. Well-crafted content enhances retention and application in real work contexts.
      </p>

      <h2 className="text-h4 text-[var(--color-primary-mauve)]">
        Collateral Design & Visual Communication
      </h2>

      <p>
        Visual clarity plays a critical role in learning experience and brand perception. This area emphasizes designing professional, engaging materials that support comprehension while reinforcing organizational identity. Strong visual communication enhances learner engagement and recall.
      </p>

      <h2 className="text-h4 text-[var(--color-primary-mauve)]">
        Program Management & Learning Operations
      </h2>

      <p>
        Behind every successful learning initiative is disciplined execution. This focus area supports end-to-end coordination, ensuring logistics, governance, and quality are managed seamlessly. Strong learning operations create reliability, consistency, and confidence for stakeholders.
      </p>

      <h2 className="text-h4 text-[var(--color-primary-mauve)]">
        Learning Analytics & Reporting
      </h2>

      <p>
        Measuring impact is essential to sustaining learning investments. This area focuses on translating learning data into meaningful insights that demonstrate effectiveness and ROI. Clear reporting enables organizations to refine approaches and make informed decisions about future learning priorities.
      </p>
    </CapabilityLayout>
  );
}

export default CreativeSolutions;
