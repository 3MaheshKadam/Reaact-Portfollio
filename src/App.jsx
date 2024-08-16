import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import NavBar from "./components/NavBar.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Projects from "./pages/Projects.jsx";
import Experience from "./pages/Experience.jsx";
import Footer from "./components/Footer.jsx";
import useThemeSwitcher from "./components/UseThemeSwitcher.jsx";
import Services from "./components/Services.jsx";

function App() {
  const [mode, setMode] = useThemeSwitcher(); // Use the theme switcher hook

  return (
    <div className={mode === "dark" ? "dark" : ""}>
      {/* Apply the theme class */}
      <Router>
        <NavBar mode={mode} setMode={setMode} />{" "}
        {/* Pass theme props to NavBar */}
        <div className="flex flex-col">
          {/* Wrap each section in a `section` element */}
          <section id="home">
            <Home />
          </section>
          <section id="about">
            <About />
          </section>
          <section id="services">
            <Services />
          </section>
          <section id="projects">
            <Projects />
          </section>
          <section id="experience">
            <Experience />
          </section>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
