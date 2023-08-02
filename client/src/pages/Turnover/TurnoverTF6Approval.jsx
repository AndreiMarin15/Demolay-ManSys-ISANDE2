import { Link } from "react-router-dom";
import "../../styles/base.css";
import "../../styles/Turnover.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

function TurnoverTF6Approval() {
  return (
    <div className="container">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h1> Term and Financial Report </h1>
        <button type="submit" form="submit" className="primary-btn">
          SAVE AND COMPLETE LATER
        </button>
      </div>
      <hr />

      {/* Progress Line */}

      <div class="progress-line">
        <div class="progress-circle active"></div>
        <div class="progress-circle active"></div>
        <div class="progress-circle active"></div>
        <div class="progress-circle active"></div>
      </div>

      <div class="progress-labels">
        <div class="progress-label">Chapter Information</div>
        <div class="progress-label">Membership Survey</div>
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
              <label
                htmlFor="statuscouncilor"
                className="col-form-label text-left"
              >
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
              <label
                htmlFor="statusscribe"
                className="col-form-label text-left"
              >
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
              <label
                htmlFor="statuschairman"
                className="col-form-label text-left"
              >
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
              <label
                htmlFor="statusadvisor"
                className="col-form-label text-left"
              >
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
              <label
                htmlFor="datesignedcouncilor"
                className="col-form-label text-left"
              >
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
              <label
                htmlFor="datesignedscribe"
                className="col-form-label text-left"
              >
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
              <label
                htmlFor="datesignedchairman"
                className="col-form-label text-left"
              >
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
              <label
                htmlFor="datesignedadvisor"
                className="col-form-label text-left"
              >
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
        <Link to="/turnoverDashboard2">
          <button type="button" className="primary-btn">
            BACK
          </button>
        </Link>

        <div className="d-flex justify-content-between">
          <Link to="/turnoverTF1">
            <button
              type="submit"
              form="submit"
              className="primary-btn"
              value="DISAPPROVE"
            >
              DISAPPROVE
            </button>
          </Link>
          <Link to="/turnoverTF1">
            <button
              type="submit"
              form="submit"
              className="primary-btn"
              value="APPROVE"
            >
              APPROVE
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default TurnoverTF6Approval;
