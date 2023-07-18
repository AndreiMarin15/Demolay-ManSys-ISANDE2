import { Link } from "react-router-dom";
import "../../styles/base.css";
import "../../styles/Turnover.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

function TurnoverTF5() {
   return (
      <div className="container">
         <div className="d-flex justify-content-between align-items-center mb-3">
            <h1> Term and Financial Report </h1>
            <Link to="/turnoverTF5">
               <button type="submit" form="submit" className="primary-btn">
                  SAVE AND COMPLETE LATER
               </button>
            </Link>
         </div>
         <hr />

         {/* Progress Line */}
         
         <div class="progress-line">
            <div class="progress-circle active"></div>
            <div class="progress-circle active"></div>
            <div class="progress-circle active"></div>
            <div class="progress-circle active"></div>
            <div class="progress-circle active"></div>
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
         <h2> Bank Account Details </h2>

         {/* First Column */}

         <div className="row">
            <div className="col-md-6">
               <div className="row align-items-center mt-3">
                  <div className="col-md-4">
                     <label htmlFor="bankname" className="col-form-label text-left">
                        Name of Bank:
                     </label>
                  </div>
                  <div className="col-md-8">
                     <input
                        type="text"
                        className="form-control readonly-input"
                        value="Banco De Oro"
                        readOnly
                     />
                  </div>
               </div>

               <div className="row align-items-center mt-3">
                  <div className="col-md-4">
                     <label htmlFor="accountname" className="col-form-label text-left">
                        Account Name:
                     </label>
                  </div>
                  <div className="col-md-8">
                     <input
                        type="text"
                        className="form-control readonly-input"
                        value="Account Name"
                        readOnly
                     />
                  </div>
               </div>

               <div className="row align-items-center mt-3">
                  <div className="col-md-4">
                     <label htmlFor="accountnumber" className="col-form-label text-left">
                        Account Number:
                     </label>
                  </div>
                  <div className="col-md-8">
                     <input
                        type="text"
                        className="form-control readonly-input"
                        value="1087263840"
                        readOnly
                     />
                  </div>
               </div>

               <div className="row align-items-center mt-3">
                  <div className="col-md-4">
                     <label htmlFor="cashinbank" className="col-form-label text-right">
                        Cash in Bank:
                     </label>
                  </div>
                  <div className="col-md-8">
                     <input type="text" className="form-control" id="cashinbank" placeholder="Cash in Bank" />
                  </div>
               </div>

               <div className="row align-items-center mt-3">
                  <div className="col-md-4">
                     <label htmlFor="ar" className="col-form-label text-right">
                        Accounts Receivables:
                     </label>
                  </div>
                  <div className="col-md-8">
                     <input type="text" className="form-control" id="ar" placeholder="Accounts Receivables" />
                  </div>
               </div>

               <div className="row align-items-center mt-3">
                  <div className="col-md-4">
                     <label htmlFor="ap" className="col-form-label text-right">
                        Accounts Payables:
                     </label>
                  </div>
                  <div className="col-md-8">
                     <input type="text" className="form-control" id="ap" placeholder="Accounts Payables" />
                  </div>
               </div>
            </div>

            {/* Second Column */}

            <div className="col-md-6">
               <div className="row align-items-center mt-3">
                  <div className="col-md-4">
                     <label htmlFor="fprojects" className="col-form-label text-left">
                        Fundraising Projects:
                     </label>
                  </div>
                  <div className="col-md-7">
                     <select className="form-select form-control" id="fprojects">
                        <option>Event One</option>
                        <option>Event Two</option>
                        <option>Event Three</option>
                     </select>
                  </div>
               </div>
            </div>
         </div>

         {/* Button */}

         <div className="d-flex justify-content-between mt-4">
            <Link to="/turnoverTF4">
               <button type="button" className="primary-btn">
                  BACK
               </button>
            </Link>
            <Link to="/turnoverTF6">
               <button type="submit" form="submit" className="primary-btn" value="SUBMIT">
                  NEXT
               </button>
            </Link>
         </div>
      </div>
   );
}

export default TurnoverTF5;
