import { Link } from "react-router-dom";
import "../../styles/base.css";
import "../../styles/Events.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

function EventsFineArts() {
  return (
    <div className="container">
      <br />
      <br />

      {/* Header */}

      <div className="d-flex justify-content-between align-items-center mb-3">
        <h1>Merit Bar Application - Fine Arts </h1>
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
              <td className="no-wrap">Name of Activity:</td>
              <td>title of activity conducted/participated by the member</td>
            </tr>
            <tr>
              <td>Date:</td>
              <td>date of activities</td>
            </tr>
            <tr>
              <td>Type:</td>
              <td>
                ‘Musical’ or ‘Theatrical’ not including the DeMolay Degree Drama
              </td>
            </tr>
            <tr>
              <td className="no-wrap">No. of Performance:</td>
              <td>
                how many ‘musical’ or ‘theatrical’ did he member performed
              </td>
            </tr>
          </table>
        </div>

        {/* Second Column */}

        <div className="col-md-4">
          <div className="row align-items-center mt-3">
            <div className="col-md-5">
              <label
                htmlFor="nameofactivity"
                className="col-form-label text-left"
              >
                Name of Activity:
              </label>
            </div>
            <div className="col-md-7">
              <select className="form-select form-control" id="nameofactivity">
                <option>Name 1</option>
                <option>Name 2</option>
                <option>Name 3</option>
              </select>
            </div>
          </div>
          <br />
          <div className="row align-items-center mt-3">
            <div className="col-md-5">
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
            <div className="col-md-5">
              <label htmlFor="type" className="col-form-label text-left">
                Type:
              </label>
            </div>
            <div className="col-md-7">
              <select className="form-select form-control" id="type">
                <option>Musical</option>
                <option>Theatrical</option>
              </select>
            </div>
          </div>
          <br />
          <div className="row align-items-center mt-3">
            <div className="col-md-5">
              <label htmlFor="noofperf" className="col-form-label text-right">
                No. of Performance:
              </label>
            </div>
            <div className="col-md-7">
              <input
                type="text"
                className="form-control"
                id="noofperf"
                placeholder="00"
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

export default EventsFineArts;
