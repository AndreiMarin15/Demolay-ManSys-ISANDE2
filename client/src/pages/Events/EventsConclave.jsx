import { Link } from "react-router-dom";
import "../../styles/base.css";
import "../../styles/Events.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

function EventsConclave() {
  return (
    <div className="container">
      <br />
      <br />

      {/* Header */}

      <div className="d-flex justify-content-between align-items-center mb-3">
        <h1>Merit Bar Application - Conclave </h1>
      </div>

      {/* Instruction */}

      <div>
        <p className="instruction">
          {" "}
          Please take note that you can only submit the form if you have
          completed all the requirements.
        </p>
      </div>
      <hr />

      <div className="row">
        {/* First Column */}

        <div className="col-md-4">
          <table class="legend-table">
            <tr>
              <td>Duration:</td>
              <td>defines how long the conclave is</td>
            </tr>
            <tr>
              <td>Type:</td>
              <td>
                defines if it is National or Luzon, Visayas, Mindanao
                Jurisdictional Conclave
              </td>
            </tr>
            <tr>
              <td className="no-wrap">Chap Rep:</td>
              <td>name of the chapter that was represented by the member</td>
            </tr>
            <tr>
              <td>OR No.:</td>
              <td>
                official receipt number from the host reflecting the member’s
                name or registration sheet that includes the member’s name with
                a copy of the OR reflecting the chapter’s name{" "}
              </td>
            </tr>
          </table>
        </div>

        {/* Second Column */}

        <div className="col-md-4">
          <div className="row align-items-center mt-3">
            <div className="col-md-3">
              <label htmlFor="duration" className="col-form-label text-left">
                Duration:
              </label>
            </div>
            <div className="col-md-3">
              <input
                type="text"
                className="form-control"
                id="startdate"
                placeholder="Start Date"
              />
            </div>
            <div className="col-md-3">
              <input
                type="text"
                className="form-control"
                id="enddate"
                placeholder="End Date"
              />
            </div>
          </div>
          <br />
          <div className="row align-items-center mt-3">
            <div className="col-md-3">
              <label htmlFor="type" className="col-form-label text-left">
                Type:
              </label>
            </div>
            <div className="col-md-8">
              <select className="form-select form-control" id="type">
                <option>National / Luzon</option>
                <option>Visayas</option>
                <option>Mindanao</option>
              </select>
            </div>
          </div>
          <br />
          <div className="row align-items-center mt-3">
            <div className="col-md-3">
              <label htmlFor="chaprep" className="col-form-label text-left">
                Chap Rep:
              </label>
            </div>
            <div className="col-md-8">
              <select className="form-select form-control" id="chaprep">
                <option>Loyalty</option>
                <option>Jose Abad</option>
                <option>Others</option>
              </select>
            </div>
          </div>
          <br />
          <div className="row align-items-center mt-3">
            <div className="col-md-3">
              <label htmlFor="orno" className="col-form-label text-right">
                OR No:
              </label>
            </div>
            <div className="col-md-8">
              <input
                type="text"
                className="form-control"
                id="orno"
                placeholder="Enter OR No."
              />
            </div>
          </div>
        </div>

        {/* Third Column */}

        <div className="col-md-4">
          <div className="row align-items-center mt-3">
            <div className="col-md-3">
              <label htmlFor="uploadID" className="col-form-label text-right">
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
            <button type="button" className="primary-btn">
              BACK
            </button>
          </Link>
          <button type="button" className="primary-btn" value="SUBMIT">
            SUBMIT
          </button>
        </div>
      </div>
    </div>
  );
}

export default EventsConclave;
