import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import React from "react";
import About from "./components/about";
import Contact from "./components/contact";
import Service from "./components/service";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/service" element={<Service />} />
      </Routes>
    </Router>
  );
}

export default App;
