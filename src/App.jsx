import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";  
import About from "./pages/About";
import Capabilities from "./pages/Capabilities.jsx";

const App = () => {
  return (
    <Router>
      <div className="overflow-hidden">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/why-euradicle" element={<About />}/>
          <Route path="/capabilities" element={<Capabilities />}/>
          <Route
            path="/grow-with-us"
            element={
              <div className="pt-24 text-center text-h2">Grow With Us</div>
            }
          />

          <Route
            path="/stories/:id"
            element={
              <div className="pt-24 text-center text-h2">
                Impact Story Detail
              </div>
            }
          />
          <Route
            path="*"
            element={
              <div className="pt-24 text-center text-h2">
                404 - Page Not Found
              </div>
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
