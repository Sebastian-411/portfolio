import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "./Home";
import Projects from "./Projects";
import Certifications from "./Certifications";

function RedirectToHome() {
  const navigate = useNavigate();
  React.useEffect(() => {
    navigate("/");
  }, [navigate]);
  return null;
}

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/certifications" element={<Certifications />} />
        <Route path="*" element={<RedirectToHome />} />
      </Routes>
    </div>
  );
}

export default App;
