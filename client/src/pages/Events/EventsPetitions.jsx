import { Link } from "react-router-dom";
import "../../styles/base.css";
import "../../styles/Events.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

function EventsPetitions() {
  return (
   <div className="container">
      <br />
      <nav class="eventsNavbar">
         <table class="navbar-table">
            <tbody>
               <tr class="navbar-row">
                  <td><a href="/eventsAttendance">Attendance</a></td>
                  <td><a href="/eventsAthletic">Athletic</a></td>
                  <td><a href="/eventsCivicService">Civic Service</a></td>
                  <td><a href="/eventsConclave">Conclave</a></td>
                  <td><a href="/eventsFineArts">Fine Arts</a></td>
                  <td><a href="/eventsFundRaising">Fund Raising</a></td>
                  <td><a href="/eventsInstalling">Installing</a></td>
                  <td><a href="/eventsJournalism">Journalism</a></td>
               </tr>
               <tr className="navbar-row">
                  <td><a href="/eventsMasonicAttendance">Masonic Attendance</a></td>
                  <td><a href="/eventsMasonicService">Masonic Service</a></td>
                  <td><a href="/eventsMerit">Merit</a></td>
                  <td><a href="/eventsPetitions">Petitions</a></td>
                  <td><a href="/eventsReligion">Religion</a></td>
                  <td><a href="/eventsRitual">Ritual</a></td>
                  <td><a href="/eventsScholastics">Scholastics</a></td>
                  <td><a href="/eventsVisitation">Visitation</a></td>
               </tr>
            </tbody>
         </table>
      </nav>
      <br />

      {/* Header */}

      <div className="d-flex justify-content-between align-items-center mb-3">
        <h1>Add Event - Petitions </h1>
        <Link to="/eventsPetitions">
         <button type="submit" form="submit" id="primary-btn" value="ADD NEW ENTRY">
            ADD NEW ENTRY
         </button>
        </Link>
      </div>

      {/* Instruction */}

      <div>
        <p className="instruction"> Please take note that you can only submit the form if you have completed all the requirements.</p>
      </div>
      <hr />

      <div className="row">

        {/* First Column */}

         <div className="col-md-4">
            <table class="legend-table">
               <tr>
                  <td>Name</td>
                  <td>full Name of newly initiated member</td>
               </tr>
               <tr>
                  <td>I.D. Date:</td>
                  <td>Initiatory Degree date (when the member was newly initiated)</td>
               </tr>
               <tr>
                  <td>Chapter:</td>
                  <td>the Chapter that accepted your recruited member</td>
               </tr>
               <tr>
                  <td>SCOD-OR No.:</td>
                  <td>Official Receipt Number reflecting the newly initiated member’s name</td>
               </tr>
            </table>
        </div>

        {/* Second Column */}

         <div className="col-md-4">
            <div className="row align-items-center mt-3">
               <div className="col-md-5">
               <label
                  htmlFor="name"
                  className="col-form-label text-right"
               >
                  Name:
               </label>
               </div>
               <div className="col-md-6">
               <input type="text" className="form-control" id="scod" placeholder="Enter Member Name" />
               </div>
            </div>
          <br />
            <div className="row align-items-center mt-3">
               <div className="col-md-5">
                  <label
                     htmlFor="date"
                     className="col-form-label text-right"
                  >
                     I.D. Date:
                  </label>
               </div>
               <div className="col-md-6">
                  <input type="text" className="form-control" id="date" placeholder="MM/DD/YYYY" />
               </div>
            </div>
          <br />
            <div className="row align-items-center mt-3">
               <div className="col-md-5">
               <label
                  htmlFor="chapter"
                  className="col-form-label text-left"
               >
                  Chapter:
               </label>
               </div>
               <div className="col-md-6">
               <select className="form-select form-control" id="chapter">
                  <option>Chapter 1</option>
                  <option>Chapter 2</option>
                  <option>Chapter 3</option>
               </select>
               </div>
            </div>
          <br />
            <div className="row align-items-center mt-3">
               <div className="col-md-5">
               <label
                  htmlFor="scod"
                  className="col-form-label text-right"
               >
                  SCOD-OR No.:
               </label>
               </div>
               <div className="col-md-6">
               <input type="text" className="form-control" id="scod" placeholder="Enter SCOD-OR No." />
               </div>
            </div>
         </div>

        {/* Third Column */}

         <div className="col-md-4">
            <div className="row align-items-center mt-3">
               <div className="col-md-3">
                  <label
                     htmlFor="uploadID"
                     className="col-form-label text-right"
                  >
                     Proof:
                  </label>
               </div>
               <div className="col-md-7">
                  <input type="file" className="form-control" id="uploadID" />
               </div>
            </div>
        </div>

        {/* Buttons */}

         <div className="d-flex justify-content-between mt-4">
            <Link to="/eventsHome">
               <button type="button" id="back-btn">
               HOME
               </button>
            </Link>
            <Link to="/turnoverTF3">
               <button type="submit" form="submit" id="primary-btn" value="SUBMIT">
               SUBMIT
               </button>
            </Link>
        </div>
      </div>
    </div>
  );
}

export default EventsPetitions;
