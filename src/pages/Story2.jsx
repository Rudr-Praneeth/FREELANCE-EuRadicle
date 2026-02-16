import React from 'react';
import StoryLayout from '../layouts/StoryLayout';

const AspireStory = () => {
  const storyData = {
    title: "ASPIRE",
    tagline: "Enabling women leaders to rise with confidence, clarity, and sustained impact",
    heroImage: "/path-to-your-aspire-hero.jpg",
    overlayContent: "A thoughtfully designed leadership journey focused on strengthening presence, decision-making, and personal sustainability for women leaders navigating complex professional and personal realities.",
    sections: [
      "As organizations accelerate growth and transformation, women leaders are often required to operate at high intensity across multiple roles—professional, personal, and relational. EuRadicle designed ASCENT as a leadership journey that helps women leaders build confidence, resilience, and leadership presence while staying anchored to what matters most.",
      "The program was recently delivered as a customized women leadership initiative within the insurance and financial services sector, with two parallel cohorts running simultaneously for different leadership teams. EuRadicle managed the engagement end-to-end, including program design, coordination, facilitation, and ongoing stakeholder alignment—demonstrating our capability to handle complex, multi-track leadership journeys seamlessly.",
      "The journey blended immersive leadership sessions with back-to-back coaching conversations, creating space for reflection, dialogue, and application. Participants explored leadership confidence, influence, and decision-making, while also addressing a core reality many women leaders face—balancing the three worlds of work, family, and self.",
      "Every element of the program was customized to reflect the organization’s context, leadership expectations, and brand identity, ensuring strong alignment and ownership. The program created a supportive yet challenging space for women leaders to reflect, recalibrate, and lead with greater intention and confidence."
    ],
    outcomes: [
      "Increased leadership confidence and clarity in navigating professional responsibilities",
      "Greater self-awareness around priorities, boundaries, and sustainable performance",
      "Improved ability to balance leadership demands across work, family, and personal identity",
      "Stronger sense of agency, presence, and long-term leadership direction"
    ],
    quote: "At EuRadicle, we believe leadership development must address both performance and sustainability. ASCENT reflects our philosophy of designing journeys that are deeply personalized and human.",
    conclusion: "ASCENT is delivered with strong program governance and execution excellence, ensuring leaders lead with greater intention. Ready to enable your women leaders to rise?"
  };

  return (
    <StoryLayout 
      title={storyData.title}
      tagline={storyData.tagline}
      heroImage={storyData.heroImage}
      overlayContent={storyData.overlayContent}
      sections={storyData.sections}
      outcomes={storyData.outcomes}
      quote={storyData.quote}
      conclusion={storyData.conclusion}
    />
  );
};

export default AspireStory;