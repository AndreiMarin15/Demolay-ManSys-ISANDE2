import { Link } from "react-router-dom";
import "../../styles/base.css";
/* import "../styles/caform10approve.css"; */
import "../../styles/setmeeting.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { Component } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const edit = <FontAwesomeIcon icon={faPen} />;

function SetMeeting() {
  return (
    <div className="container container-fluid ">
      <div className="row">
        <div className="col-md-12">
          <h1 style={{marginLeft:"70px"}}>Set Meeting</h1>
        </div>
      </div>

      <hr />

      <div className="row" style={{ marginLeft: "35px" }}>
        <div className="col-md-6">
          {/* Content for the left column */}
          <h2>List of Meetings</h2>
          <br></br>
          <div className="table-responsive">
            <table className="table meeting-table">
              <thead className="thead-custom">
                <tr>
                  <th>Meeting Title</th>
                  <th>Date</th>
                  <th>Time</th>
                  <th>Meeting Venue</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Petitioning</td>
                  <td>08/08/2023</td>
                  <td>08:30 AM</td>
                  <td>
                    {" "}
                    <a href="facebook.com">zoom.com</a>
                  </td>
                </tr>

                <tr>
                  <td>Planning</td>
                  <td>08/15/2023</td>
                  <td>10:00 AM</td>
                  <td>
                    {" "}
                    <a href="facebook.com">zoom.com</a>
                  </td>
                </tr>

                <tr>
                  <td>Turnover Plans</td>
                  <td>12/08/2023</td>
                  <td>09:00 AM</td>
                  <td>
                    {" "}
                    <a href="facebook.com">zoom.com</a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="col-md-1">
          {/* Vertical line or divider */}
          <div className="vertical-line"></div>
        </div>
        <div className="col-md-5 justify-content-center">
          <h3 style={{ marginLeft: "120px" }}>Set New Meeting</h3>
          <br />
          <div className="row">
            <label
              for="lastName"
              className="col-md-4 col-form-label text-right"
            >
              Meeting Title:
            </label>
            <input
              type="text"
              name="meetTitle"
              className="form-control"
              id="meetTitle"
              placeholder="Meeting Title"
            />
          </div>

          <div className="row">
            <label
              for="lastName"
              className="col-md-4 col-form-label text-right"
            >
              Meeting Date:
            </label>
            <input
              type="text"
              name="meetDate"
              className="form-control"
              id="meetDate"
              placeholder="00/00/00"
            />
          </div>

          <div className="row">
            <label
              for="lastName"
              className="col-md-4 col-form-label text-right"
            >
              Meeting Time:
            </label>
            <input
              type="text"
              name="meetTime"
              className="form-control"
              id="meetTime"
              placeholder="00:00 AM/PM"
            />
          </div>

          <div className="row">
            <label
              for="lastName"
              className="col-md-4 col-form-label text-right"
            >
              Meeting Venue:
            </label>
            <input
              type="text"
              name="meetVenue"
              className="form-control"
              id="meetVenue"
              placeholder="Meeting Venue"
            />
          </div>
          <br />
          <br />

          <div className="row" style={{ marginLeft: "50px" }}>
            <button className="btn set-meeting" type="button">
              <b>Submit</b>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SetMeeting;
