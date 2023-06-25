import "./App.css";
import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import AppForm1 from './pages/AppForm1';
import EventsAttendance from './pages/Events/EventsAttendance';
import EventsAthletic from './pages/Events/EventsAthletic';
import EventsCivicService from './pages/Events/EventsCivicService';
import EventsConclave from './pages/Events/EventsConclave';
import EventsFineArts from './pages/Events/EventsFineArts';
import EventsFundraising from './pages/Events/EventsFundraising';
import EventsInstalling from './pages/Events/EventsInstalling';
import EventsJournalism from './pages/Events/EventsJournalism';
import EventsMasonicAttendance from './pages/Events/EventsMasonicAttendance';
import EventsMasonicService from './pages/Events/EventsMasonicService';
import EventsMerit from './pages/Events/EventsMerit';
import EventsPetitions from './pages/Events/EventsPetitions';
import EventsReligion from './pages/Events/EventsReligion';
import EventsRitual from './pages/Events/EventsRitual';
import EventsScholastics from './pages/Events/EventsScholastics';
import EventsVisitation from './pages/Events/EventsVisitation';

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
          <Route path="eventsMerit" element ={<EventsMerit/>}/>
          <Route path="eventsPetitions" element ={<EventsPetitions/>}/>
          <Route path="eventsReligion" element ={<EventsReligion/>}/>
          <Route path="eventsRitual" element ={<EventsRitual/>}/>
          <Route path="eventsScholastics" element ={<EventsScholastics/>}/>
          <Route path="eventsVisitation" element ={<EventsVisitation/>}/>
          
      </Routes>
    </>
  );
}

export default App;