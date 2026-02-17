// App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import JourneySection from "./sections/JourneySection";
import Home from "./pages/Home";
import About from "./pages/About";
import Capabilities from "./pages/Capabilities.jsx";
import GrowWithUs from "./pages/GrowWithUs.jsx"
import BlogPowerSkills from "./pages/BlogPowerSkills.jsx";
import BlogPsychologicalSafety from "./pages/BlogPsychologicalSafety.jsx";
import BlogCapabilityBuilding from "./pages/BlogCapabilityBuilding.jsx";
import Story1 from "./pages/Story1.jsx";
import LeadershipDevelopment from "./pages/LeadershipDevelopment.jsx";
import ConsultingTalentManagement from "./pages/ConsultingTalentManagement.jsx";
import AssessmentDevelopmentCenters from "./pages/AssessmentDevelopmentCenters.jsx";
import PowerSkillsDevelopment from "./pages/PowerSkillsDevelopment.jsx";
import DigitalBusinessTransformation from "./pages/DigitalBusinessTransformation.jsx";
import CommercialSalesEnablement from "./pages/CommercialSalesEnablement.jsx";
import CreativeSolutions from "./pages/CreativeSolutions.jsx";
import GetInTouch from "./pages/GetInTouch.jsx";
import Contact from "./pages/Contact.jsx";
import NotFound from "./pages/NotFound.jsx"

const App = () => {
  return (
    <Router>
      <div className="overflow-hidden">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/why-euradicle" element={<About />} />
          <Route path="/capabilities" element={<Capabilities />} />
          <Route path="/grow-with-us" element={<GrowWithUs />}/>
          <Route path="/get-in-touch" element={<GetInTouch />}/>
          <Route path="/contact" element={<Contact />}/>
          <Route path="/blogs/power-skills" element={<BlogPowerSkills />} />
          <Route path="/blogs/ai-ethics" element={<BlogPsychologicalSafety />} />
          <Route path="/blogs/chatai-at" element={<BlogCapabilityBuilding />} />
          <Route path="/capabilities/leadership-development" element={<LeadershipDevelopment />} />
          <Route path="/capabilities/consulting-talent-management" element={<ConsultingTalentManagement />} />
          <Route path="/capabilities/assessment-development-centers" element={<AssessmentDevelopmentCenters />} />
          <Route path="/capabilities/power-skills-development" element={<PowerSkillsDevelopment />} />
          <Route path="/capabilities/digital-business-transformation" element={<DigitalBusinessTransformation />} />
          <Route path="/capabilities/commercial-sales-enablement" element={<CommercialSalesEnablement />} />
          <Route path="/capabilities/dei-culture-building" element={<CreativeSolutions />} />
          {/* <Route path="/stories/awareness" element={<Story1 />} /> */}



          <Route path="*" element={<NotFound />}/>
        </Routes>
        <JourneySection />
      </div>
    </Router>
  );
};

export default App;
