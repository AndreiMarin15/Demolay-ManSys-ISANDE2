import { Link } from "react-router-dom";
import "../../styles/base.css";
import "../../styles/Events.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

function EventsReligion() {
  return (
    <div className="container">
      <br />
      <br />

      {/* Header */}

      <div className="d-flex justify-content-between align-items-center mb-3">
        <h1>Merit Bar Application - Religion </h1>
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
          <table className="legend-table">
            <tr>
              <td>Date</td>
              <td>date of religious service</td>
            </tr>
            <tr>
              <td className="no-wrap">Week Number:</td>
              <td>what week in the month</td>
            </tr>
            <tr>
              <td className="no-wrap">Church Name:</td>
              <td>name of the church</td>
            </tr>
            <tr>
              <td>Location:</td>
              <td>where the church is located</td>
            </tr>
          </table>
        </div>

        {/* Second Column */}

        <div className="col-md-4">
          <div className="row align-items-center mt-3">
            <div className="col-md-5">
              <label htmlFor="date" className="col-form-label text-right">
                Date:
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
              <label htmlFor="weeknumber" className="col-form-label text-left">
                Week Number:
              </label>
            </div>
            <div className="col-md-6">
              <select className="form-select form-control" id="weeknumber">
                <option>Week 1</option>
                <option>Week 2</option>
                <option>Week 3</option>
              </select>
            </div>
          </div>
          <br />
          <div className="row align-items-center mt-3">
            <div className="col-md-5">
              <label htmlFor="churchname" className="col-form-label text-right">
                Church Name:
              </label>
            </div>
            <div className="col-md-6">
              <input
                type="text"
                className="form-control"
                id="churchname"
                placeholder="Enter Name of Church"
              />
            </div>
          </div>
          <br />
          <div className="row align-items-center mt-3">
            <div className="col-md-5">
              <label htmlFor="location" className="col-form-label text-right">
                Location:
              </label>
            </div>
            <div className="col-md-6">
              <input
                type="text"
                className="form-control"
                id="location"
                placeholder="Enter Location"
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

export default EventsReligion;
