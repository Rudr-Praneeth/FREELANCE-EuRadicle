import React from "react";
import CapabilityLayout from "../layouts/CapabilityLayout.jsx";

function AssessmentDevelopmentCenters() {
  return (
    <CapabilityLayout
      title="Assessment & Development Centers (ACDC)"
      subtitle="Delivering objective, data-driven insights into talent potential and readiness."
      image="/Capabilities/compressed-Assessment & Development Centers inside picture.png"
      intro="Making confident talent decisions requires more than intuition-it requires data-driven insight and contextual understanding. EuRadicle’s Assessment & Development Centers are designed to evaluate readiness, identify potential, and accelerate development through evidence-based assessment approaches. By blending behavioral science, real-world simulations, and business-aligned frameworks, organizations gain clarity on talent strengths, development needs, and future readiness at both individual and cohort levels."
      cards={[
        {
          heading: "Talent Readiness & Development Diagnostics",
          description:
            "Strong talent decisions begin with clear insight. We use structured diagnostics, behavioural assessments, and simulations to evaluate readiness and potential-then translate findings into focused development actions and clearer growth pathways.",
        },
      ]}
    />
  );
}

export default AssessmentDevelopmentCenters;
