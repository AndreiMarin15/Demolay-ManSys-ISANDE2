import { Link } from "react-router-dom";
import "../../styles/base.css";
import "../../styles/Turnover.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const RenderTableData = () => {
   const tableData = [
      ["Ambrosio Flores", "10-18-2003", "04-06-2023", "05-11-2023", "0917806068"],
      ["Ambrosio Flores", "10-18-2003", "04-06-2023", "05-11-2023", "0917806068"],
      ["Ambrosio Flores", "10-18-2003", "04-06-2023", "05-11-2023", "0917806068"],
      ["Ambrosio Flores", "10-18-2003", "04-06-2023", "05-11-2023", "0917806068"],
      ["Ambrosio Flores", "10-18-2003", "04-06-2023", "05-11-2023", "0917806068"],
   ];

   return tableData.map((rowData, index) => {
      const [col1, col2, col3, col4, col5] = rowData;
      return (
         <tr key={index}>
            <td>{col1}</td>
            <td>
               <select>
                  <option value="option1">Yes</option>
                  <option value="option2">No</option>
               </select>
            </td>
            <td>
               <input type="text" placeholder="Search" />
               <button style={{ border: 'none', background: 'none' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                     <path fill="none" d="M0 0h24v24H0z" />
                     <path fill="currentColor" d="M15 14l6 6-2 2-6-6a7.94 7.94 0 111.38-1.37zM8 14a6 6 0 100-12 6 6 0 000 12z" />
                  </svg>
               </button>
            </td>
            <td>{col2}</td>
            <td>{col3}</td>
            <td>{col4}</td>
            <td>{col5}</td>
         </tr>
      );
   });
};

function TurnoverTF4() {
   return (
      <div className="container">
         <div className="d-flex justify-content-between align-items-center mb-3">
            <h1> Term and Financial Report </h1>
            <Link to="/turnoverTF4">
               <button type="submit" form="submit" id="primary-btn">
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
         <table className="table">
            <thead>
               <tr>
                  <th>Member Name</th>
                  <th>Transferred?</th>
                  <th>Chapter</th>
                  <th>Birthday</th>
                  <th>Initiatory Degree</th>
                  <th>DeMolay Degree</th>
                  <th>Mobile</th>
               </tr>
            </thead>
            <tbody>
               {<RenderTableData />}
            </tbody>
         </table>

         {/* Button */}

         <div className="d-flex justify-content-between mt-4">
            <Link to="/turnoverTF3">
               <button type="button" id="back-btn">
                  BACK
               </button>
            </Link>
            <Link to="/turnoverTF5">
               <button type="submit" form="submit" id="primary-btn" value="SUBMIT">
                  NEXT
               </button>
            </Link>
         </div>
      </div>
   );
}

export default TurnoverTF4;
