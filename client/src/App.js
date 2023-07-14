import "./App.css";
import * as React from "react";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

import Home from "./pages/Home";
import Login from "./pages/Login";
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
import CSForm10Sum from "./pages/CSForm10Sum";
import CSAppInProgress from "./pages/CSAppInProgress";
import CSAppPending from "./pages/CSAppPending";
import CAAppRejected from "./pages/CAAppRejected";
import CAForm10Approve from "./pages/CAForm10Approve";
import AdminCreate from "./pages/AdminCreate";
import MyChapter from "./pages/MyChapter";
import AllChapters from "./pages/AllChapters";

import EventsHome from "./pages/Events/EventsHome-Member";
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
import EventsValidation from "./pages/Events/EventsValidation-Advisor";
import EventsProof from "./pages/Events/EventsProof-Advisor";
import EventsPaymentValidation from "./pages/Events/EventsPaymentValidation-Admin";

import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="appform1" element={<AppForm1 />} />
        <Route path="appform2" element={<AppForm2 />} /> {/* testing */}
        <Route path="appform2/:applicationId" element={<AppForm2 />} />
        <Route path="appform3" element={<AppForm3 />} />
        <Route path="appform3/:applicationId" element={<AppForm3 />} />
        <Route path="appform4" element={<AppForm4 />} />
        <Route path="appform4/:applicationId" element={<AppForm4 />} />
        <Route path="appform5" element={<AppForm5 />} />
        <Route path="appform5/:applicationId" element={<AppForm5 />} />
        <Route path="appstatus1" element={<AppStatus1 />} />
        <Route path="appstatus2" element={<AppStatus2 />} />
        <Route path="apppayment" element={<AppPayment />} />
        <Route path="eoapp1" element={<EOApp1 />} />
        <Route path="csapp1" element={<CSApp1 />} />
        <Route path="csappinprogress" element={<CSAppInProgress />} />
        <Route path="csform10" element={<CSForm10 />} />
        <Route path="csform10sum" element={<CSForm10Sum />} />
        <Route path="csapppending" element={<CSAppPending />} />
        <Route path="caapprejected" element={<CAAppRejected />} />
        <Route path="caform10approve" element={<CAForm10Approve />} />
        <Route path="admincreate" element={<AdminCreate />} />
        <Route path="mychapter" element={<MyChapter />} />
        <Route path="allchapters" element={<AllChapters />} />
        <Route path="eventsHome" element={<EventsHome />} />
        <Route path="eventsAttendance" element={<EventsAttendance />} />
        <Route path="eventsAthletic" element={<EventsAthletic />} />
        <Route path="eventsCivicService" element={<EventsCivicService />} />
        <Route path="eventsConclave" element={<EventsConclave />} />
        <Route path="eventsFineArts" element={<EventsFineArts />} />
        <Route path="eventsFundraising" element={<EventsFundraising />} />
        <Route path="eventsInstalling" element={<EventsInstalling />} />
        <Route path="eventsJournalism" element={<EventsJournalism />} />
        <Route
          path="eventsMasonicAttendance"
          element={<EventsMasonicAttendance />}
        />
        <Route path="eventsMasonicService" element={<EventsMasonicService />} />
        <Route path="eventsMerit" element={<EventsMerit />} />
        <Route path="eventsPetitions" element={<EventsPetitions />} />
        <Route path="eventsReligion" element={<EventsReligion />} />
        <Route path="eventsRitual" element={<EventsRitual />} />
        <Route path="eventsScholastics" element={<EventsScholastics />} />
        <Route path="eventsVisitation" element={<EventsVisitation />} />
        <Route path="eventsValidation" element={<EventsValidation />} />
        <Route path="eventsProof" element={<EventsProof />} />
        <Route
          path="eventsPaymentValidation"
          element={<EventsPaymentValidation />}
        />
      </Routes>
    </>
  );
}

export default App;
