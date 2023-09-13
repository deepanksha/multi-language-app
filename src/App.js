import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./styles/App.scss";
import i18n from "./i18n";

import LanguageSelector from "./components/LanguageSelector";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";

function App() {
  i18n.changeLanguage("en");
  return (
    <Router>
      <Header />
      <LanguageSelector />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
