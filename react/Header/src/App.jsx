import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Form  from "./components/Form"
import "./App.css"


const App = () => {
  return (
    <Router>
      <Header />
      <div className="page-content">
        <Routes>
          <Route>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/form" element={<Form />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
