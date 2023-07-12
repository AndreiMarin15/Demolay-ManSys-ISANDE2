import { Link } from "react-router-dom";
import "../../styles/base.css";
import "../../styles/Events.css";
import { Component } from "react";


const RenderTableData = () => {
   const tableData = [
      ["1", "Attendance", "Validated", "1st"],
      ["2", "Athletic", "Not Started", "N/A"],
      ["3", "Civic Service", "Not Started", "N/A"],
      ["4", "Conclave", "Validated", "2nd"],
      ["5", "Fine Arts", "Not Started", "N/A"],
   ];

   return tableData.map((rowData, index) => {
      const [col1, col2, col3, col4] = rowData;
      return (
         <tr key={index}>
            <td>{col1}</td>
            <td>{col2}</td>
            <td>{col3}</td>
            <td>{col4}</td>
            <td>
               <button>View</button>
            </td>
         </tr>
      );
   });
};

function EventsHome() {
   return (
      <div className="container">
         <br />
         <nav class="eventsNavbar">
            <table class="navbar-table">
               <tbody>
                  <tr class="navbar-row">
                     <td>
                        <a href="/eventsAttendance">Attendance</a>
                     </td>
                     <td>
                        <a href="/eventsAthletic">Athletic</a>
                     </td>
                     <td>
                        <a href="/eventsCivicService">Civic Service</a>
                     </td>
                     <td>
                        <a href="/eventsConclave">Conclave</a>
                     </td>
                     <td>
                        <a href="/eventsFineArts">Fine Arts</a>
                     </td>
                     <td>
                        <a href="/eventsFundRaising">Fund Raising</a>
                     </td>
                     <td>
                        <a href="/eventsInstalling">Installing</a>
                     </td>
                     <td>
                        <a href="/eventsJournalism">Journalism</a>
                     </td>
                  </tr>
                  <tr className="navbar-row">
                     <td>
                        <a href="/eventsMasonicAttendance">Masonic Attendance</a>
                     </td>
                     <td>
                        <a href="/eventsMasonicService">Masonic Service</a>
                     </td>
                     <td>
                        <a href="/eventsMerit">Merit</a>
                     </td>
                     <td>
                        <a href="/eventsPetitions">Petitions</a>
                     </td>
                     <td>
                        <a href="/eventsReligion">Religion</a>
                     </td>
                     <td>
                        <a href="/eventsRitual">Ritual</a>
                     </td>
                     <td>
                        <a href="/eventsScholastics">Scholastics</a>
                     </td>
                     <td>
                        <a href="/eventsVisitation">Visitation</a>
                     </td>
                  </tr>
               </tbody>
            </table>
         </nav>
         <br />

         {/* Header */}

         <div className="d-flex justify-content-between align-items-center mb-3">
            <h1> Events </h1>
         </div>

         {/* Instruction */}

         <div>
            <p className="instruction">
               {" "}
               Please take note that you can only submit the form if you have completed all the requirements.
            </p>
         </div>
         <hr />

         <div className="row">

            {/* First Column */}

            <div className="col-md-6">
               <table className="table">
                  <thead>
                     <tr>
                        <th>No.</th>
                        <th>Merit Bar</th>
                        <th>Status</th>
                        <th>No. of Instance</th>
                        <th>View</th>
                     </tr>
                  </thead>
                  <tbody>{<RenderTableData />}</tbody>
               </table>
            </div>

            {/* Vertical Line */}

            <div className="col-md-1">
               <div className="vl"></div>
            </div>

            {/* Second Column */}

            <div className="col-md-5 mx-auto">
               <h2> Attendance </h2>
               <div className="row align-items-center mt-3">
                  <div className="col-md-4">
                     <label htmlFor="term" className="col-form-label text-left">
                        Term:
                     </label>
                  </div>
                  <div className="col-md-8">
                     <input
                        type="text"
                        className="form-control readonly-input"
                        value="2023 - A"
                        readOnly
                     />
                  </div>
               </div>
               <div className="row align-items-center mt-3">
                  <div className="col-md-4">
                     <label htmlFor="meetingname" className="col-form-label text-right">
                        Meeting Name:
                     </label>
                  </div>
                  <div className="col-md-8">
                     <input
                        type="text"
                        className="form-control readonly-input"
                        value="Meeting 1"
                        readOnly
                     />
                  </div>
               </div>
               <div className="row align-items-center mt-3">
                  <div className="col-md-4">
                     <label htmlFor="meetingdate" className="col-form-label text-right">
                        Meeting Date:
                     </label>
                  </div>
                  <div className="col-md-8">
                     <input
                        type="text"
                        className="form-control readonly-input"
                        value="01/01/23"
                        readOnly
                     />
                  </div>
               </div>
               <div className="row align-items-center mt-3">
                  <div className="col-md-4">
                     <label htmlFor="position" className="col-form-label text-right">
                        Position:
                     </label>
                  </div>
                  <div className="col-md-8">
                     <input
                        type="text"
                        className="form-control readonly-input"
                        value="Junior Deacon"
                        readOnly
                     />
                  </div>
               </div>
               <div className="row align-items-center mt-3">
                  <div className="col-md-4">
                     <label htmlFor="position" className="col-form-label text-right">
                        Performance:
                     </label>
                  </div>
                  <div className="col-md-8">
                     <input
                        type="text"
                        className="form-control readonly-input"
                        value="Beginner"
                        readOnly
                     />
                  </div>
               </div>
               <div className="row align-items-center mt-3">
                  <div className="col-md-4">
                     <label htmlFor="proof" className="col-form-label text-right">
                        Proof:
                     </label>
                  </div>
                  <div className="col-md-8">
                     <input
                        type="text"
                        className="form-control readonly-input"
                        value=" "
                        readOnly
                     />
                  </div>
               </div>

               {/* Buttons */}
               
               <div className="d-flex justify-content-center mt-4">
                  <div className="mr-2">
                     <Link to="/eventsHome">
                        <button type="button" form="button" id="primary-btn" value="PREVIOUS">
                           PREVIOUS
                        </button>
                     </Link>
                  </div>
                  <div className="ms-2">
                     <Link to="/appform1">
                        <button type="button" form="button" id="primary-btn" value="NEXT">
                           NEXT
                        </button>
                     </Link>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );

}

export default EventsHome;
