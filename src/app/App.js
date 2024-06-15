import React, { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "./Home";
import Projects from "./Projects";
import Certifications from "./Certifications";
import { toast } from "react-toastify";
import CustomToastContainer from "./components/custom/CustomToastContainer";

import "../css/custom.css";

function RedirectToHome() {
  const navigate = useNavigate();
  React.useEffect(() => {
    navigate("/");
  }, [navigate]);
  return null;
}

function App() {
  useEffect(() => {
    toast.info(
      <>
        Esta aplicación está en desarrollo. Visita nuestro repositorio en{" "}
        <strong>
          <a
            href="https://github.com/Sebastian-411/portfolio"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#00c", textDecoration: "underline" }}
          >
            GitHub
          </a>
        </strong>{" "}
        para ver las tareas en proceso.
      </>
    );
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/certifications" element={<Certifications />} />
        <Route path="*" element={<RedirectToHome />} />
      </Routes>
      <CustomToastContainer />
    </div>
  );
}

export default App;
