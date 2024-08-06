import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Projects from "./pages/Projects.jsx";
import Experience from "./pages/Experience.jsx";
import Footer from "./components/Footer.jsx";
import useThemeSwitcher from "./components/UseThemeSwitcher.jsx";

function App() {
  const [mode, setMode] = useThemeSwitcher(); // Use the theme switcher hook

  return (
    <div className={mode === "dark" ? "dark" : ""}>
      {" "}
      {/* Apply the theme class */}
      <Router>
        <NavBar mode={mode} setMode={setMode} />{" "}
        {/* Pass theme props to NavBar */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
