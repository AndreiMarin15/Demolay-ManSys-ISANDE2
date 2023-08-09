import { Link } from "react-router-dom";
import "../../styles/base.css";
import "../../styles/Events.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

function EventsPetitions() {
  return (
    <div className="container">
      <br />
      <br />

      {/* Header */}

      <div className="d-flex justify-content-between align-items-center mb-3">
        <h1>Merit Bar Application - Petitions </h1>
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
              <td>Name</td>
              <td>full Name of newly initiated member</td>
            </tr>
            <tr>
              <td>I.D. Date:</td>
              <td>
                Initiatory Degree date (when the member was newly initiated)
              </td>
            </tr>
            <tr>
              <td>Chapter:</td>
              <td>the Chapter that accepted your recruited member</td>
            </tr>
            <tr>
              <td>SCOD-OR No.:</td>
              <td>
                Official Receipt Number reflecting the newly initiated member’s
                name
              </td>
            </tr>
          </table>
        </div>

        {/* Second Column */}

        <div className="col-md-4">
          <div className="row align-items-center mt-3">
            <div className="col-md-5">
              <label htmlFor="name" className="col-form-label text-right">
                Name:
              </label>
            </div>
            <div className="col-md-6">
              <input
                type="text"
                className="form-control"
                id="scod"
                placeholder="Enter Member Name"
              />
            </div>
          </div>
          <br />
          <div className="row align-items-center mt-3">
            <div className="col-md-5">
              <label htmlFor="date" className="col-form-label text-right">
                I.D. Date:
              </label>
            </div>
            <div className="col-md-6">
              <input
                type="text"
                className="form-control"
                id="date"
                placeholder="MM/DD/YYYY"
              />
            </div>
          </div>
          <br />
          <div className="row align-items-center mt-3">
            <div className="col-md-5">
              <label htmlFor="chapter" className="col-form-label text-left">
                Chapter:
              </label>
            </div>
            <div className="col-md-6">
              <select className="form-select form-control" id="chapter">
                <option>Chapter 1</option>
                <option>Chapter 2</option>
                <option>Chapter 3</option>
              </select>
            </div>
          </div>
          <br />
          <div className="row align-items-center mt-3">
            <div className="col-md-5">
              <label htmlFor="scod" className="col-form-label text-right">
                SCOD-OR No.:
              </label>
            </div>
            <div className="col-md-6">
              <input
                type="text"
                className="form-control"
                id="scod"
                placeholder="Enter SCOD-OR No."
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

export default EventsPetitions;
