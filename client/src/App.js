import "./App.css";
import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import AppForm1 from './pages/AppForm1';
import EventsAttendance from './pages/EventsAttendance';
import EventsAthletic from './pages/EventsAthletic';
import EventsCivicService from './pages/EventsCivicService';
import EventsConclave from './pages/EventsConclave';
import EventsFineArts from './pages/EventsFineArts';
import EventsFundraising from './pages/EventsFundraising';
import EventsInstalling from './pages/EventsInstalling';
import EventsJournalism from './pages/EventsJournalism';
import EventsMasonicAttendance from './pages/EventsMasonicAttendance';
import EventsMasonicService from './pages/EventsMasonicService';

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
          <Route path="eventsAthletic" element ={<EventsAthletic/>}/>
          <Route path="eventsCivicService" element ={<EventsCivicService/>}/>
          <Route path="eventsConclave" element ={<EventsConclave/>}/>
          <Route path="eventsFineArts" element ={<EventsFineArts/>}/>
          <Route path="eventsFundraising" element ={<EventsFundraising/>}/>
          <Route path="eventsInstalling" element ={<EventsInstalling/>}/>
          <Route path="eventsJournalism" element ={<EventsJournalism/>}/>
          <Route path="eventsMasonicAttendance" element ={<EventsMasonicAttendance/>}/>
          <Route path="eventsMasonicService" element ={<EventsMasonicService/>}/>
          
      </Routes>
    </>
  );
}

export default App;