import { Link } from "react-router-dom";
import "../../styles/base.css";
import "../../styles/Turnover.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

function TurnoverNO1() {
  const [rows, setRows] = useState(1);

  const handleAddRow = () => {
    setRows(rows + 1);
  };

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

      <hr />

      {/* Progress Line */}
      <div class="progress-line-3">
        <div class="progress-circle-3 active"></div>
        <div class="progress-circle-3"></div>
        <div class="progress-circle-3"></div>
      </div>
      <div class="progress-labels-3">
        <div class="progress-label-3">Chapter Information</div>
        <div class="progress-label-3">List of Officers</div>
        <div class="progress-label-3">Signatories of Certification</div>
      </div>

      <br />

      <div class="text-center mb-3">
        <p>
          The report covers Term <u> A </u> of DeMolay Year <u> 2023 </u> beginning <u> January 7, 2023 </u> and ending{" "}
          <u> August 5, 2023 </u>
        </p>
      </div>

      <div className="row">
        {/* First Column */}
         <div className="col-md-6">
            <div className="row align-items-center mt-3">
               <div className="col-md-4">
                  <label htmlFor="chapter" className="col-form-label text-left">
                     Chapter:
                  </label>
               </div>
               <div className="col-md-8">
                  <input type="text" className="form-control readonly-input" value="Manila Chapter" readOnly />
               </div>
            </div>

            <div className="row align-items-center mt-3">
               {[...Array(rows)].map((_, index) => (
                  <div key={index} className="row align-items-center mt-3">
                     <div className="col-md-4">
                        <label htmlFor={`sponsoringbodies-${index}`} className="col-form-label text-right">
                        Sponsoring Bodies:
                        </label>
                     </div>
                     <div className="col-md-8">
                        <input
                           type="text"
                           className="form-control"
                           id={`sponsoringbodies-${index}`}
                           placeholder="Input name here"
                        />
                     </div>
                  </div>
               ))}
               <button className="plus-btn" onClick={handleAddRow}>
               +
               </button>
            </div>

            <div className="row align-items-center mt-3">
               <div className="col-md-4">
                  <label htmlFor="schedofmeetings" className="col-form-label text-right">
                     Schedule of Stated Meetings:
                  </label>
               </div>
               <div className="col-md-8">
                  <input type="text" className="form-control" id="schedofmeetings" placeholder="Input schedule here" />
               </div>
            </div>

            <div className="row align-items-center mt-3">
               <div className="col-md-4">
               <label htmlFor="timeofmeetings" className="col-form-label text-right">
                  Time of Stated Meetings:
               </label>
               </div>
               <div className="col-md-8">
               <input type="text" className="form-control" id="timeofmeetings" placeholder="Input time here" />
               </div>
            </div>
         </div>

        {/* Second Column */}
         <div className="col-md-6">
            <div className="row align-items-center mt-3">
               <div className="col-md-4">
                  <label htmlFor="dateofelection" className="col-form-label text-right">
                     Date of Election:
                  </label>
               </div>
               <div className="col-md-8">
                  <input type="text" className="form-control" id="dateofelection" placeholder="Input date of election" />
               </div>
            </div>

            <div className="row align-items-center mt-3">
               <div className="col-md-4">
               <label htmlFor="dateofinstallation" className="col-form-label text-right">
                  Date of Installation:
               </label>
               </div>
               <div className="col-md-8">
               <input type="text" className="form-control" id="dateofinstallation" placeholder="Input date of installation" />
               </div>
            </div>
         </div>
      </div>

      {/* Next Button */}
      <div className="d-flex justify-content-end mt-3">
        <Link to="/turnoverNO2">
          <button type="submit" form="submit" className="primary-btn" value="SUBMIT">
            NEXT
          </button>
        </Link>
      </div>
    </div>
  );
}

export default TurnoverNO1;