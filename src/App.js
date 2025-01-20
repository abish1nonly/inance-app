import { BrowserRouter as Router, Routes, Route, Navigate  } from "react-router-dom";
import Home from "./components/home";
import React from "react";
import About from "./components/about";
import Contact from "./components/contact";
import Service from "./components/service";

function App() {
  return (
    <Router>
      <Routes>
        {/* Redirect from the root to the default language */}
        <Route path="/" element={<Navigate to="/en" replace />} />

        {/* Define language-specific routes */}
        <Route path="/:lang" element={<Home />} />
        <Route path="/:lang/about" element={<About />} />
        <Route path="/:lang/contact" element={<Contact />} />
        <Route path="/:lang/services" element={<Service />} />
      </Routes>
    </Router>
  );
}

export default App;
