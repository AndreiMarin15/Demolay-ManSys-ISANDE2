import "./App.css";
import * as React from "react";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import AppForm1 from "./pages/AppForm1";
import AppForm2 from "./pages/AppForm2";
import AppForm3 from "./pages/AppForm3";
import AppForm4 from "./pages/AppForm4";
import AppForm5 from "./pages/AppForm5";


import AppStatus1 from "./pages/AppStatus1";
import AppStatus2 from "./pages/AppStatus2";
import AppPayment from "./pages/AppPayment";
import EOApp1 from "./pages/EOApp1";
import CSApp1 from "./pages/CSApp1";
import CSForm10 from "./pages/CSForm10";

import EventsHome from './pages/Events/EventsHome-Member';
import EventsAttendance from "./pages/Events/EventsAttendance";
import EventsAthletic from "./pages/Events/EventsAthletic";
import EventsCivicService from "./pages/Events/EventsCivicService";
import EventsConclave from "./pages/Events/EventsConclave";
import EventsFineArts from "./pages/Events/EventsFineArts";
import EventsFundraising from "./pages/Events/EventsFundraising";
import EventsInstalling from "./pages/Events/EventsInstalling";
import EventsJournalism from "./pages/Events/EventsJournalism";
import EventsMasonicAttendance from "./pages/Events/EventsMasonicAttendance";
import EventsMasonicService from "./pages/Events/EventsMasonicService";
import EventsMerit from "./pages/Events/EventsMerit";
import EventsPetitions from "./pages/Events/EventsPetitions";
import EventsReligion from "./pages/Events/EventsReligion";
import EventsRitual from "./pages/Events/EventsRitual";
import EventsScholastics from "./pages/Events/EventsScholastics";
import EventsVisitation from "./pages/Events/EventsVisitation";
import EventsValidation from './pages/Events/EventsValidation-Advisor';
import EventsProof from './pages/Events/EventsProof-Advisor';
import EventsPaymentValidation from './pages/Events/EventsPaymentValidation-Admin';

import TurnoverDashboard1 from "./pages/Turnover/TurnoverDashboard1";
import TurnoverTF1 from "./pages/Turnover/TurnoverTF1";
import TurnoverTF2 from "./pages/Turnover/TurnoverTF2";
import TurnoverTF3 from "./pages/Turnover/TurnoverTF3";

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
        <Route path="appform2/:applicationId" element={<AppForm2 />} />
        <Route path="appform3" element={<AppForm3 />} />
        <Route path="appform3/:applicationId" element={<AppForm3 />} />
        <Route path="appform4" element={<AppForm4 />} />
        <Route path="appform5" element={<AppForm5 />} />
        <Route path="appstatus1" element={<AppStatus1 />} />
        <Route path="appstatus2" element={<AppStatus2 />} />
        <Route path="apppayment" element={<AppPayment />} />
        <Route path="eoapp1" element={<EOApp1 />} />
        <Route path="csapp1" element={<CSApp1 />} />
        <Route path="csform10" element={<CSForm10 />} />
        <Route path="eventsHome" element ={<EventsHome/>}/>
        <Route path="eventsAttendance" element={<EventsAttendance />} />
        <Route path="eventsAthletic" element={<EventsAthletic />} />
        <Route path="eventsCivicService" element={<EventsCivicService />} />
        <Route path="eventsConclave" element={<EventsConclave />} />
        <Route path="eventsFineArts" element={<EventsFineArts />} />
        <Route path="eventsFundraising" element={<EventsFundraising />} />
        <Route path="eventsInstalling" element={<EventsInstalling />} />
        <Route path="eventsJournalism" element={<EventsJournalism />} />
        <Route path="eventsMasonicAttendance" element={<EventsMasonicAttendance />}/>
        <Route path="eventsMasonicService" element={<EventsMasonicService />} />
        <Route path="eventsMerit" element={<EventsMerit />} />
        <Route path="eventsPetitions" element={<EventsPetitions />} />
        <Route path="eventsReligion" element={<EventsReligion />} />
        <Route path="eventsRitual" element={<EventsRitual />} />
        <Route path="eventsScholastics" element={<EventsScholastics />} />
        <Route path="eventsVisitation" element={<EventsVisitation />} />
        <Route path="eventsValidation" element ={<EventsValidation/>}/>
        <Route path="eventsProof" element ={<EventsProof/>}/>
        <Route path="eventsPaymentValidation" element ={<EventsPaymentValidation/>}/>

        <Route path="turnoverDashboard1" element ={<TurnoverDashboard1/>}/>
        <Route path="turnoverTF1" element ={<TurnoverTF1/>}/>
        <Route path="turnoverTF2" element ={<TurnoverTF2/>}/>
        <Route path="turnoverTF3" element ={<TurnoverTF3/>}/>

      </Routes>
    </>
  );
}

export default App;
