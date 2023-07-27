import { Link, useLocation, useNavigate } from "react-router-dom";
import "../../styles/base.css";
import "../../styles/Turnover.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

function TurnoverTF6() {
  const navigate = useNavigate();
  const location = useLocation();
  const prevPageProps = location.state;

  console.log(prevPageProps);

  const onSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/newTermReport", prevPageProps)
      .then((res) => {
        console.log("termReportID: " + res.data);

        const turnoverUpdate = {
          chapterID: prevPageProps.chapterData.chapter,
          termID:
            prevPageProps.chapterData.year + prevPageProps.chapterData.term,
          fieldToUpdate: "form1ID",
          updateValue: res.data,
        };

        axios
          .post("http://localhost:5000/updateTurnover", turnoverUpdate)
          .then((res1) => {
            navigate("/turnoverDashboard1", {
              state: {
                turnoverReports: res1.data,
              },
            });
          });
      });
  };

  return (
    <div className="container">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h1> Term and Financial Report </h1>
        <Link to="/turnoverTF5">
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
        <div class="progress-circle active"></div>
        <div class="progress-circle active"></div>
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

        <div className="col-md-4">
          <div className="row align-items-center mt-3">
            <div className="col-md-6">
              <label
                htmlFor="mastercouncilor"
                className="col-form-label text-left"
              >
                Master Councilor:
              </label>
            </div>
            <div className="col-md-6">
              <input
                type="text"
                className="form-control readonly-input"
                value="Name"
                readOnly
              />
            </div>
          </div>

          <div className="row align-items-center mt-3">
            <div className="col-md-6">
              <label
                htmlFor="chapterscribe"
                className="col-form-label text-left"
              >
                Chapter Scribe:
              </label>
            </div>
            <div className="col-md-6">
              <input
                type="text"
                className="form-control readonly-input"
                value="Name"
                readOnly
              />
            </div>
          </div>

          <br />

          <div className="row align-items-center mt-3">
            <div className="col-md-6">
              <label
                htmlFor="advisorycouncil"
                className="col-form-label text-left"
              >
                Advisory Council Chairman:
              </label>
            </div>
            <div className="col-md-6">
              <input
                type="text"
                className="form-control readonly-input"
                value="Name"
                readOnly
              />
            </div>
          </div>

          <div className="row align-items-center mt-3">
            <div className="col-md-6">
              <label
                htmlFor="chapteradvisor"
                className="col-form-label text-left"
              >
                Chapter Advisor:
              </label>
            </div>
            <div className="col-md-6">
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
              <label htmlFor="status" className="col-form-label text-left">
                Status:
              </label>
            </div>
            <div className="col-md-8">
              <input
                type="text"
                className="form-control readonly-input"
                value="Not applicable"
                readOnly
              />
            </div>
          </div>

          <div className="row align-items-center mt-3">
            <div className="col-md-4">
              <label htmlFor="status" className="col-form-label text-left">
                Status:
              </label>
            </div>
            <div className="col-md-8">
              <input
                type="text"
                className="form-control readonly-input"
                value="Not applicable"
                readOnly
              />
            </div>
          </div>

          <br />

          <div className="row align-items-center mt-3">
            <div className="col-md-4">
              <label htmlFor="status" className="col-form-label text-left">
                Status:
              </label>
            </div>
            <div className="col-md-8">
              <input
                type="text"
                className="form-control readonly-input"
                value="Not applicable"
                readOnly
              />
            </div>
          </div>

          <div className="row align-items-center mt-3">
            <div className="col-md-4">
              <label htmlFor="status" className="col-form-label text-left">
                Status:
              </label>
            </div>
            <div className="col-md-8">
              <input
                type="text"
                className="form-control readonly-input"
                value="Not applicable"
                readOnly
              />
            </div>
          </div>
        </div>

        {/* Third Column */}

        <div className="col-md-4">
          <div className="row align-items-center mt-3">
            <div className="col-md-4">
              <label htmlFor="datesigned" className="col-form-label text-left">
                Date Signed:
              </label>
            </div>
            <div className="col-md-8">
              <input
                type="text"
                className="form-control readonly-input"
                value="Date"
                readOnly
              />
            </div>
          </div>

          <div className="row align-items-center mt-3">
            <div className="col-md-4">
              <label htmlFor="datesigned" className="col-form-label text-left">
                Date Signed:
              </label>
            </div>
            <div className="col-md-8">
              <input
                type="text"
                className="form-control readonly-input"
                value="Date"
                readOnly
              />
            </div>
          </div>

          <br />

          <div className="row align-items-center mt-3">
            <div className="col-md-4">
              <label htmlFor="datesigned" className="col-form-label text-left">
                Date Signed:
              </label>
            </div>
            <div className="col-md-8">
              <input
                type="text"
                className="form-control readonly-input"
                value="Date"
                readOnly
              />
            </div>
          </div>

          <div className="row align-items-center mt-3">
            <div className="col-md-4">
              <label htmlFor="datesigned" className="col-form-label text-left">
                Date Signed:
              </label>
            </div>
            <div className="col-md-8">
              <input
                type="text"
                className="form-control readonly-input"
                value="Date"
                readOnly
              />
            </div>
          </div>
        </div>
      </div>

      {/* Button */}

      <div className="d-flex justify-content-between mt-4">
        <Link to="/turnoverTF5">
          <button type="button" id="back-btn">
            BACK
          </button>
        </Link>
        <button
          type="submit"
          form="submit"
          id="primary-btn"
          value="SUBMIT"
          onClick={onSubmit}
        >
          SEND
        </button>
      </div>
    </div>
  );
}

export default TurnoverTF6;
