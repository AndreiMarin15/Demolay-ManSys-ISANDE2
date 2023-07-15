import { Link } from "react-router-dom";
import "../../styles/base.css";
import "../../styles/Turnover.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

function TurnoverTF1() {
   return (
      <div className="container">
         <div className="d-flex justify-content-between align-items-center mb-3">
            <h1> Term and Financial Report </h1>
            <Link to="/turnoverTF1">
               <button type="submit" form="submit" id="primary-btn">
                  SAVE AND COMPLETE LATER
               </button>
            </Link>
         </div>
         <hr/>

         {/* Progress Line */}

         <div class="progress-line">
            <div class="progress-circle active"></div>
            <div class="progress-circle"></div>
            <div class="progress-circle"></div>
            <div class="progress-circle"></div>
            <div class="progress-circle"></div>
            <div class="progress-circle"></div>
         </div>
         <div class="progress-labels">
            <div class="progress-label">Chapter Information</div>
            <div class="progress-label">Membership Survey</div>
            <div class="progress-label">Supreme Council Fees</div>
            <div class="progress-label">Updated Directory of Active Members</div>
            <div class="progress-label">Financial Report</div>
            <div class="progress-label">Signatories</div>
         </div>
         <br />
         <div className="row">
            <p> Confirm if all details presented below are correct. </p>

            {/* First Column */}

            <div className="col-md-4">
               <div className="row align-items-center mt-3">
                  <div className="col-md-4">
                     <label htmlFor="term" className="col-form-label text-left">
                        Term:
                     </label>
                  </div>
                  <div className="col-md-7">
                     <select className="form-select form-control" id="term">
                        <option>A</option>
                        <option>B</option>
                     </select>
                  </div>
               </div>

               <div className="row align-items-center mt-3">
                  <div className="col-md-4">
                     <label htmlFor="year" className="col-form-label text-left">
                        Year:
                     </label>
                  </div>
                  <div className="col-md-7">
                     <select className="form-select form-control" id="year">
                        <option>2022</option>
                        <option>2023</option>
                     </select>
                  </div>
               </div>

               <div className="row align-items-center mt-3">
                  <div className="col-md-4">
                     <label htmlFor="startofterm" className="col-form-label text-left">
                        Start of Term:
                     </label>
                  </div>
                  <div className="col-md-8">
                     <input
                        type="text"
                        className="form-control readonly-input"
                        value="January 6, 2023"
                        readOnly
                     />
                  </div>
               </div>

               <div className="row align-items-center mt-3">
                  <div className="col-md-4">
                     <label htmlFor="endofterm" className="col-form-label text-left">
                        End of Term:
                     </label>
                  </div>
                  <div className="col-md-8">
                     <input
                        type="text"
                        className="form-control readonly-input"
                        value="April 26, 2023"
                        readOnly
                     />
                  </div>
               </div>

               <div className="row align-items-center mt-3">
                  <div className="col-md-4">
                     <label htmlFor="chapter" className="col-form-label text-left">
                        Chapter:
                     </label>
                  </div>
                  <div className="col-md-8">
                     <input
                        type="text"
                        className="form-control readonly-input"
                        value="Manila Chapter"
                        readOnly
                     />
                  </div>
               </div>
            </div>

            {/* Second Column */}

            <div className="col-md-4">
               <div className="row align-items-center mt-3">
                  <div className="col-md-6">
                     <label
                        htmlFor="sched"
                        className="col-form-label text-right"
                     >
                        Schedule of Stated Meetings:
                     </label>
                  </div>
                  <div className="col-md-6">
                     <input
                        type="text"
                        className="form-control"
                        id="sched"
                        placeholder="Enter Schedule"
                     />
                  </div>
               </div>

               <div className="row align-items-center mt-3">
                  <div className="col-md-6">
                     <label
                        htmlFor="time"
                        className="col-form-label text-right"
                     >
                        Time of Stated Meetings:
                     </label>
                  </div>
                  <div className="col-md-6">
                     <input
                        type="text"
                        className="form-control"
                        id="time"
                        placeholder="Enter Time"
                     />
                  </div>
               </div>

               <div className="row align-items-center mt-3">
                  <div className="col-md-6">
                     <label
                        htmlFor="time"
                        className="col-form-label text-right"
                     >
                        Venue of Stated Meetings:
                     </label>
                  </div>
                  <div className="col-md-6">
                     <input
                        type="text"
                        className="form-control"
                        id="venue"
                        placeholder="Enter Venue"
                     />
                  </div>
               </div>
            </div>

            {/* Third Column */}
            
            <div className="col-md-4">
               <div className="row align-items-center mt-3">
                  <div className="col-md-4">
                     <label htmlFor="reportedby" className="col-form-label text-left">
                        Reported By:
                     </label>
                  </div>
                  <div className="col-md-8">
                     <input
                        type="text"
                        className="form-control readonly-input"
                        value="Edwardo Rafael"
                        readOnly
                     />
                  </div>
               </div>

               <div className="row align-items-center mt-3">
                  <div className="col-md-4">
                     <label htmlFor="position" className="col-form-label text-left">
                        Position:
                     </label>
                  </div>
                  <div className="col-md-8">
                     <input
                        type="text"
                        className="form-control readonly-input"
                        value="Chapter Scribe"
                        readOnly
                     />
                  </div>
               </div>
            </div>

            {/* Next Button */}

            <div className="d-flex justify-content-end mt-3">
               <Link to="/turnoverTF2">
                  <button type="submit" form="submit" id="primary-btn" value="SUBMIT">
                     NEXT
                  </button>
               </Link>
            </div>
         </div>
      </div>
   );
}

export default TurnoverTF1;
