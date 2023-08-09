import { Link } from "react-router-dom";
import "../../styles/base.css";
import "../../styles/Events.css";

import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

function EventsScholastics() {
  return (
    <div className="container">
      <br />
      <br />

      {/* Header */}

      <div className="d-flex justify-content-between align-items-center mb-3">
        <h1>Merit Bar Application - Scholastics </h1>
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
              <td className="no-wrap">School Year</td>
              <td>academic year of school where the applicant is attending</td>
            </tr>
            <tr>
              <td>Sem:</td>
              <td>
                defines the semster within the School Year (if applicable)
              </td>
            </tr>
            <tr>
              <td className="no-wrap">Name of School:</td>
              <td>school of applicant</td>
            </tr>
            <tr>
              <td className="no-wrap">Average Grade:</td>
              <td>
                average value of the accumulated final grades earned during the
                school year
              </td>
            </tr>
          </table>
        </div>

        {/* Second Column */}

        <div className="col-md-4">
          <div className="row align-items-center mt-3">
            <div className="col-md-5">
              <label htmlFor="sy" className="col-form-label text-right">
                School Year:
              </label>
            </div>
            <div className="col-md-6">
              <input
                type="text"
                className="form-control"
                id="sy"
                placeholder="Enter School Year"
              />
            </div>
          </div>
          <br />
          <div className="row align-items-center mt-3">
            <div className="col-md-5">
              <label htmlFor="sem" className="col-form-label text-right">
                Sem:
              </label>
            </div>
            <div className="col-md-6">
              <input
                type="text"
                className="form-control"
                id="sem"
                placeholder="Enter Sem"
              />
            </div>
          </div>
          <br />
          <div className="row align-items-center mt-3">
            <div className="col-md-5">
              <label
                htmlFor="nameofschool"
                className="col-form-label text-right"
              >
                Name of School:
              </label>
            </div>
            <div className="col-md-6">
              <input
                type="text"
                className="form-control"
                id="nameofschool"
                placeholder="Enter Name of School"
              />
            </div>
          </div>
          <br />
          <div className="row align-items-center mt-3">
            <div className="col-md-5">
              <label htmlFor="ave" className="col-form-label text-right">
                Average Grade:
              </label>
            </div>
            <div className="col-md-6">
              <input
                type="text"
                className="form-control"
                id="ave"
                placeholder="Enter Average Grade"
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
          <Link to="/turnoverTF3">
            <button type="button" className="primary-btn" value="SUBMIT">
              SUBMIT
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default EventsScholastics;
