import { Link } from "react-router-dom";
import "../../styles/base.css";
import "../../styles/Turnover.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

function TurnoverNO4() {
   return (
      <div className="container">
         <div className="d-flex justify-content-between align-items-center mb-3">
            <h1> New Officers Report (Form 15) </h1>
            <Link to="/turnoverTF1">
               <button type="submit" form="submit" className="primary-btn">
                  SAVE AND COMPLETE LATER
               </button>
            </Link>
         </div>
         
         <hr/>

         <div class="text-center mb-3">
            <p>
               We hereby certify that the information contained in this report is accurate for the Members of the Stated Meeting of the chapter. The officers were duly qualified, elected, and installed on the dates above pursuant to the relevant provisions of the STATUES of the SUPREME COUNCIL ORDER of DEMOLAY of the REPUBLIC of the Philippines. 
            </p>
         </div>

         <br />

         <div className="row">

            {/* First Column */}

            <div className="col-md-4">

               <div className="row align-items-center mt-3">
                  <div className="col-md-4">
                     <label htmlFor="chairmanofadvisory" className="col-form-label text-left">
                           Chairman of Advisory:
                     </label>
                  </div>
                  <div className="col-md-8">
                     <input
                     type="text"
                     className="form-control readonly-input"
                     value="Name"
                     readOnly
                     />
                  </div>
               </div>

               <div className="row align-items-center mt-3">
                  <div className="col-md-4">
                     <label htmlFor="chapteradvisor" className="col-form-label text-left">
                           Chapter Advisor:
                     </label>
                  </div>
                  <div className="col-md-8">
                     <input
                     type="text"
                     className="form-control readonly-input"
                     value="Name"
                     readOnly
                     />
                  </div>
               </div>

            </div>

            {/* Second Column */}

            <div className="col-md-4">
               
               <div className="row align-items-center mt-3">
                  <div className="col-md-4">
                     <label htmlFor="statuschairman" className="col-form-label text-left">
                           Status:
                     </label>
                  </div>
                  <div className="col-md-8">
                     <input
                     type="text"
                     className="form-control readonly-input"
                     value="Name"
                     readOnly
                     />
                  </div>
               </div>

               <div className="row align-items-center mt-3">
                  <div className="col-md-4">
                     <label htmlFor="statusadvisor" className="col-form-label text-left">
                           Status:
                     </label>
                  </div>
                  <div className="col-md-8">
                     <input
                     type="text"
                     className="form-control readonly-input"
                     value="Name"
                     readOnly
                     />
                  </div>
               </div>

            </div>

            {/* Third Column */}

            <div className="col-md-4">
               
               <div className="row align-items-center mt-3">
                  <div className="col-md-4">
                     <label htmlFor="datesignedchairman" className="col-form-label text-left">
                           Date Signed:
                     </label>
                  </div>
                  <div className="col-md-8">
                     <input
                     type="text"
                     className="form-control readonly-input"
                     value="Name"
                     readOnly
                     />
                  </div>
               </div>

               <div className="row align-items-center mt-3">
                  <div className="col-md-4">
                     <label htmlFor="datesignedadvisor" className="col-form-label text-left">
                           Date Signed:
                     </label>
                  </div>
                  <div className="col-md-8">
                     <input
                     type="text"
                     className="form-control readonly-input"
                     value="Name"
                     readOnly
                     />
                  </div>
               </div>

            </div>
            

            {/* Buttons */}

            <div className="d-flex justify-content-between mt-4">
               <Link to="/turnoverNO3">
                  <button type="button" className="primary-btn">
                     BACK
                  </button>
               </Link>
               <Link to="/turnoverNO5">
                  <button type="submit" form="submit" className="primary-btn" value="SUBMIT">
                     SEND
                  </button>
               </Link>
            </div>
         </div>
      </div>
   );
}

export default TurnoverNO4;
