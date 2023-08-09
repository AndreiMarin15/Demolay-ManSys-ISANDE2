import { Link } from "react-router-dom";
import "../../styles/base.css";
import "../../styles/Events.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

function EventsMasonicAttendance() {
  return (
    <div className="container">
      <br />
      <br />

      {/* Header */}

      <div className="d-flex justify-content-between align-items-center mb-3">
        <h1>Merit Bar Application - Masonic Attendance </h1>
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
              <td>Date:</td>
              <td>
                defines the date when did the Master Mason attended your
                Chapter’s meeting
              </td>
            </tr>
            <tr>
              <td className="no-wrap">Mason's Full Name:</td>
              <td>
                defines the date when did the Master Mason attended your
                Chapter’s meeting
              </td>
            </tr>
          </table>
        </div>

        {/* Second Column */}

        <div className="col-md-4">
          <div className="row align-items-center mt-3">
            <div className="col-md-4">
              <label htmlFor="date" className="col-form-label text-right">
                Date:
              </label>
            </div>
            <div className="col-md-7">
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
            <div className="col-md-4">
              <label
                htmlFor="masonsfullname"
                className="col-form-label text-right"
              >
                Mason's Full Name:
              </label>
            </div>
            <div className="col-md-7">
              <input
                type="text"
                className="form-control"
                id="masonsfullname"
                placeholder="Enter Mason's Full Name"
              />
            </div>
          </div>
          <br />
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

export default EventsMasonicAttendance;
