import "./App.css";
import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import AppForm1 from './pages/AppForm1';
import EventsAttendance from './pages/EventsAttendance';

import Header from './components/Header'
function App() {
  return (
    <>
    <Header/>
    <Routes>
           <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element = {<Contact/>} />
          <Route path="appform1" element ={<AppForm1/>}/>
          <Route path="eventsAttendance" element ={<EventsAttendance/>}/>
      </Routes>
    </>
  );
}

export default App;