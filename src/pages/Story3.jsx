import React from 'react';
import StoryLayout from '../layouts/StoryLayout';

const CatalystStory = () => {
  const storyData = {
    title: "CATALYST: Developing Business Consultants for Strategic Roles",
    tagline: "Helping leaders transition from functional execution to enterprise-level value creation",
    heroImage: "/path-to-your-catalyst-hero.jpg",
    overlayContent: "A high-impact leadership journey designed to help experienced managers and senior leaders transition from functional execution to enterprise-level thinking, influence, and value creation.",
    sections: [
      "CATALYST is EuRadicle’s consultative leadership pathway, built for professionals at a critical career inflection point—where success depends not just on delivery, but on how effectively leaders think, influence, and engage as strategic partners.",
      "This program was delivered under the client-facing name PRYSM – Professional Readiness for Young Strategic Minds, and was designed to enable senior leaders to operate as trusted internal consultants rather than functional specialists.",
      "The journey focused on building structured and strategic thinking, audience-centric communication, stakeholder engagement, emotional regulation, personal leadership presence, and a value-driven consultative mindset. Through real business scenarios, reflective dialogue, and practical frameworks, participants explored how to navigate complex stakeholder environments, align diverse perspectives, and drive outcomes with clarity and credibility.",
      "Rather than teaching skills in isolation, CATALYST integrated strategic thinking, relationship building, influence, and personal leadership into a cohesive readiness journey—ensuring direct translation into day-to-day leadership effectiveness.",
      "The impact analysis revealed a clear shift in how participants approached leadership and decision-making, demonstrating a visible movement from solution execution to consultative ownership."
    ],
    outcomes: [
      "Sharper strategic and analytical thinking for enterprise-level decision-making",
      "Greater confidence in influencing stakeholders across functions and hierarchies",
      "Improved ability to communicate value with clarity, intent, and credibility",
      "Stronger consultative presence rooted in empathy, insight, and trust",
      "Enhanced capability to navigate complexity and drive alignment in diverse teams"
    ],
    quote: "At EuRadicle, we view professional readiness as a mindset shift—not a skill checklist. Future-ready leaders create value by combining structured thinking with consultative influence.",
    conclusion: "Participants showed tangible improvements in decision speed, stakeholder trust, and collaboration. Ready to build your internal consultative pipeline?"
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

export default CatalystStory;