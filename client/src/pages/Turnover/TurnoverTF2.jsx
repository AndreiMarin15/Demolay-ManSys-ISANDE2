import { Link } from "react-router-dom";
import "../../styles/base.css";
import "../../styles/Turnover.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

function TurnoverTF2() {
   return (
      <div className="container">
         <div className="d-flex justify-content-between align-items-center mb-3">
            <h1> Term and Financial Report </h1>
            <Link to="/turnoverTF2">
               <button type="submit" form="submit" className="primary-btn">
                  SAVE AND COMPLETE LATER
               </button>
            </Link>
         </div>
         <hr/>

         {/* Progress Line */}
         
         <div class="progress-line">
            <div class="progress-circle active"></div>
            <div class="progress-circle active"></div>
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

            {/* First Column */}

            <div className="col-md-6">
               <div className="row align-items-center mt-3">
                  <div className="col-md-4">
                     <label htmlFor="totalmembers" className="col-form-label text-left">
                        Total Members:
                     </label>
                  </div>
                  <div className="col-md-8">
                     <input
                        type="text"
                        className="form-control readonly-input"
                        value="53"
                        readOnly
                     />
                  </div>
               </div>

               <div className="row align-items-center mt-3">
                  <div className="col-md-4">
                     <label htmlFor="initiatedmembers" className="col-form-label text-left">
                        Initiated Members:
                     </label>
                  </div>
                  <div className="col-md-8">
                     <input
                        type="text"
                        className="form-control readonly-input"
                        value="13"
                        readOnly
                     />
                  </div>
               </div>

               <div className="row align-items-center mt-3">
                  <div className="col-md-4">
                     <label htmlFor="affiliatedmembers" className="col-form-label text-left">
                        Affiliated Members:
                     </label>
                  </div>
                  <div className="col-md-8">
                     <input
                        type="text"
                        className="form-control readonly-input"
                        value="3"
                        readOnly
                     />
                  </div>
               </div>

               <div className="row align-items-center mt-3">
                  <div className="col-md-4">
                     <label htmlFor="membershipgain" className="col-form-label text-left">
                        Total Membership Gains:
                     </label>
                  </div>
                  <div className="col-md-8">
                     <input
                        type="text"
                        className="form-control readonly-input"
                        value="16"
                        readOnly
                     />
                  </div>
               </div>

               <div className="row align-items-center mt-3">
                  <div className="col-md-4">
                     <label htmlFor="reachedmajority" className="col-form-label text-left">
                        Reached Majority:
                     </label>
                  </div>
                  <div className="col-md-8">
                     <input
                        type="text"
                        className="form-control readonly-input"
                        value="5"
                        readOnly
                     />
                  </div>
               </div>

               <div className="row align-items-center mt-3">
                  <div className="col-md-4">
                     <label htmlFor="transferredmembers" className="col-form-label text-left">
                        Transferred Members:
                     </label>
                  </div>
                  <div className="col-md-8">
                     <input
                        type="text"
                        className="form-control readonly-input"
                        value="1"
                        readOnly
                     />
                  </div>
               </div>
            </div>

            {/* Second Column */}

            <div className="col-md-6">
               <div className="row align-items-center mt-3">
                  <div className="col-md-5">
                     <label htmlFor="deaths" className="col-form-label text-left">
                        Deaths:
                     </label>
                  </div>
                  <div className="col-md-7">
                     <input
                        type="text"
                        className="form-control readonly-input"
                        value="0"
                        readOnly
                     />
                  </div>
               </div>

               <div className="row align-items-center mt-3">
                  <div className="col-md-5">
                     <label htmlFor="resigned" className="col-form-label text-left">
                        Resigned:
                     </label>
                  </div>
                  <div className="col-md-7">
                     <input
                        type="text"
                        className="form-control readonly-input"
                        value="2"
                        readOnly
                     />
                  </div>
               </div>

               <div className="row align-items-center mt-3">
                  <div className="col-md-5">
                     <label htmlFor="expelled" className="col-form-label text-left">
                        Expelled:
                     </label>
                  </div>
                  <div className="col-md-7">
                     <input
                        type="text"
                        className="form-control readonly-input"
                        value="2"
                        readOnly
                     />
                  </div>
               </div>

               <div className="row align-items-center mt-3">
                  <div className="col-md-5">
                     <label htmlFor="membershiplosses" className="col-form-label text-left">
                        Total Membership Losses:
                     </label>
                  </div>
                  <div className="col-md-7">
                     <input
                        type="text"
                        className="form-control readonly-input"
                        value="10"
                        readOnly
                     />
                  </div>
               </div>

               <div className="row align-items-center mt-3">
                  <div className="col-md-5">
                     <label htmlFor="membershiptermend" className="col-form-label text-left">
                        Total Membership as of Term-end:
                     </label>
                  </div>
                  <div className="col-md-7">
                     <input
                        type="text"
                        className="form-control readonly-input"
                        value="59"
                        readOnly
                     />
                  </div>
               </div>

               <div className="row align-items-center mt-3">
                  <div className="col-md-5">
                     <label htmlFor="transferredmembers" className="col-form-label text-left">
                        Transferred Members:
                     </label>
                  </div>
                  <div className="col-md-7">
                     <input
                        type="text"
                        className="form-control readonlyinput"
                        value="1"
                        readOnly
                     />
                  </div>
               </div>
            </div>

            {/* Button */}

            <div className="d-flex justify-content-between mt-4">
               <Link to="/turnoverTF1">
                  <button type="button" className="primary-btn">
                     BACK
                  </button>
               </Link>
               <Link to="/turnoverTF3">
                  <button type="submit" form="submit" className="primary-btn" value="SUBMIT">
                     NEXT
                  </button>
               </Link>
            </div>
         </div>
      </div>
   );
}

export default TurnoverTF2;
