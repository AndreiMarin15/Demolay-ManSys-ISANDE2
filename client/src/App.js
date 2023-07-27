import "./App.css";
import * as React from "react";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Layout from "./components/Layout";
import RequireAuth from "./components/RequireAuth";
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
import EventsAdd from "./pages/Events/EventsAdd-MCScribe";

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

import TurnoverDashboardScribe from "./pages/Turnover/TurnoverDashboard1-Scribe";
import TurnoverTF1 from "./pages/Turnover/TurnoverTF1";
import TurnoverTF2 from "./pages/Turnover/TurnoverTF2";
import TurnoverTF3 from "./pages/Turnover/TurnoverTF3";
import TurnoverTF4 from "./pages/Turnover/TurnoverTF4";
import TurnoverTF5 from "./pages/Turnover/TurnoverTF5";
import TurnoverTF6 from "./pages/Turnover/TurnoverTF6";
import TurnoverM1 from "./pages/Turnover/TurnoverM1";
import TurnoverOA1 from "./pages/Turnover/TurnoverOA1";
import TurnoverHR1 from "./pages/Turnover/TurnoverHR1";
import TurnoverHR2 from "./pages/Turnover/TurnoverHR2";
import TurnoverCA1 from "./pages/Turnover/TurnoverCA1";
import TurnoverNO1 from "./pages/Turnover/TurnoverNO1";
import TurnoverNO2 from "./pages/Turnover/TurnoverNO2";
import TurnoverNO3 from "./pages/Turnover/TurnoverNO3";
import TurnoverNO4 from "./pages/Turnover/TurnoverNO4";
import TurnoverDashboardOfficer from "./pages/Turnover/TurnoverDashboard1-Officer";
import TurnoverTF6Approval from "./pages/Turnover/TurnoverTF6Approval";

import Circular1 from "./pages/Circular/Circular1";
import Circular2 from "./pages/Circular/Circular2";
import Circular3 from "./pages/Circular/Circular3";
import CSCircular from "./pages/Circular/CSCircular";
import CSCircular2 from "./pages/Circular/CSCircular2";

import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Layout />}>
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
          <Route path="appstatus1/:id" element={<AppStatus1 />} />
          <Route path="appstatus2" element={<AppStatus2 />} />
          <Route path="apppayment" element={<AppPayment />} />
          <Route path="eoapp1" element={<EOApp1 />} />
          {/* protected routes only for Scribe */}
          {/* <Route
            element={
              <RequireAuth allowedRoles={[1]} allowedPositions={["Scribe"]} />
            }
          > */}
          <Route path="csapp1" element={<CSApp1 />} />
          <Route path="csappinprogress" element={<CSAppInProgress />} />
          <Route path="csform10" element={<CSForm10 />} />
          <Route path="csform10sum" element={<CSForm10Sum />} />
          <Route path="csapppending" element={<CSAppPending />} />
          {/* </Route> */}
          <Route path="caapprejected" element={<CAAppRejected />} />
          <Route path="caform10approve" element={<CAForm10Approve />} />
          <Route path="admincreate" element={<AdminCreate />} />
          <Route path="mychapter" element={<MyChapter />} />
          <Route path="allchapters" element={<AllChapters />} />
          <Route path="eventsHome" element={<EventsHome />} />
          <Route path="eventsAdd" element={<EventsAdd />} />
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
          <Route
            path="eventsMasonicService"
            element={<EventsMasonicService />}
          />
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
          <Route
            path="turnoverDashboardScribe"
            element={<TurnoverDashboardScribe />}
          />
          <Route path="turnoverTF1" element={<TurnoverTF1 />} />
          <Route path="turnoverTF2" element={<TurnoverTF2 />} />
          <Route path="turnoverTF3" element={<TurnoverTF3 />} />
          <Route path="turnoverTF4" element={<TurnoverTF4 />} />
          <Route path="turnoverTF5" element={<TurnoverTF5 />} />
          <Route path="turnoverTF6" element={<TurnoverTF6 />} />
          <Route path="turnoverM1" element={<TurnoverM1 />} />
          <Route path="turnoverOA1" element={<TurnoverOA1 />} />
          <Route path="turnoverHR1" element={<TurnoverHR1 />} />
          <Route path="turnoverHR2" element={<TurnoverHR2 />} />
          <Route path="turnoverCA1" element={<TurnoverCA1 />} />
          <Route path="turnoverNO1" element={<TurnoverNO1 />} />
          <Route path="turnoverNO2" element={<TurnoverNO2 />} />
          <Route path="turnoverNO3" element={<TurnoverNO3 />} />
          <Route path="turnoverNO4" element={<TurnoverNO4 />} />
          <Route
            path="turnoverDashboardOfficer"
            element={<TurnoverDashboardOfficer />}
          />
          <Route path="turnoverTF6Approval" element={<TurnoverTF6Approval />} />
          <Route path="eventsValidation" element={<EventsValidation />} />
          <Route path="eventsProof" element={<EventsProof />} />
          <Route
            path="eventsPaymentValidation"
            element={<EventsPaymentValidation />}
          />
          <Route path="circular1" element={<Circular1 />} />
          <Route path="circular2" element={<Circular2 />} />
          <Route path="circular3" element={<Circular3 />} />
          <Route path="cscircular" element={<CSCircular />} />
          <Route path="cscircular2" element={<CSCircular2 />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
