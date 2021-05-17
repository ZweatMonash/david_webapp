import React from "react";
import Navbar from "./components/navbar/navbar";
import Hero from "./components/hero/hero";
import Timeline from "./components/timeline/timeline";
import Skills from "./components/skills/skills";
import Footer from "./components/footer/footer";
const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Timeline />
      <Skills />
      <Footer />
    </div>
  );
};

export default App;
