import React from 'react';
import StoryLayout from '../layouts/StoryLayout';

const AIChangeLeadershipStory = () => {
  const storyData = {
    title: "THE AI CHANGE LEADERSHIP PATHWAY",
    tagline: "Helping senior leaders lead confidently in an AI-enabled business environment",
    heroImage: "/path-to-your-ai-hero-image.jpg", 
    overlayContent: "A curated leadership experience designed to build clarity, judgment, and readiness for responsible AI adoption.",
    sections: [
      "As AI continues to reshape industries—particularly in highly regulated and decision-intensive sectors—senior leaders are increasingly required to take informed positions on AI, often without the time or space to fully explore its implications. EuRadicle designed this leadership pathway to help leaders build clarity, confidence, and perspective while navigating AI-led change.",
      "The engagement focused on AI not as a technology topic, but as a leadership and decision-making challenge. Through contextual discussions and real-world scenarios drawn from the financial services environment, leaders explored how AI influences strategy, risk, ethics, governance, and organizational culture.",
      "As part of this pathway, EuRadicle recently delivered a customized leadership intervention for senior leaders that centered on building AI awareness, interpretability, and decision confidence. The learning journey combined virtual and in-person experiences and was shaped entirely around the organization’s industry context and leadership realities.",
      "What set this engagement apart was EuRadicle’s deep customization approach. Case studies, scenarios, and discussions were tailored to the organization’s operating environment, regulatory landscape, and participant roles—ensuring relevance, depth, and application without unnecessary technical complexity.",
      "The pathway enabled leaders to move from awareness to ownership—equipping them to guide AI conversations and initiatives with credibility, judgment, and intent."
    ],
    outcomes: [
      "Clearer understanding of AI concepts and their relevance to leadership decisions",
      "Increased confidence in evaluating AI-driven outputs, risks, and ethical considerations",
      "Greater readiness to lead AI-enabled change and address resistance within teams",
      "A more responsible, bias-aware approach to AI adoption in day-to-day leadership practice"
    ],
    quote: "At EuRadicle, we believe AI awareness is not about mastering tools—it is about developing the judgement to lead responsibly in complexity.",
    conclusion: "This program reflected that belief through its design, facilitation, and outcomes. Ready to transform your leadership for the AI era?"
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

export default AIChangeLeadershipStory;