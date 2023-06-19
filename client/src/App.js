import "./App.css";
import * as React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import AppForm1 from "./pages/AppForm1";
import AppForm2 from "./pages/AppForm2";
import AppForm3 from "./pages/AppForm3";
import AppForm4 from "./pages/AppForm4";
import AppForm5 from "./pages/AppForm5";

import Header from "./components/Header";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="appform1" element={<AppForm1 />} />
        <Route path="appform2" element={<AppForm2 />} />
        <Route path="appform3" element={<AppForm3 />} />
        <Route path="appform4" element={<AppForm4 />} />
        <Route path="appform5" element={<AppForm5 />} />
      </Routes>
    </>
  );
}

export default App;
