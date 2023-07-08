import { Link } from "react-router-dom";
import "../styles/base.css";
import "../styles/eoapp1.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import { Component } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

function EOApp1() {
  return (
    <div className="container container-fluid ">
      <div className="row">
        <div className="col-md-12">
          <h1>Pending Applications</h1>
        </div>
      </div>

      <hr />

      <div className="row" style={{ marginLeft: "35px" }}>
        <div className="col-md-5">
          {/* Content for the left column */}
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control form-control-sm"
              placeholder="Search"
            />
            <div className="input-group-append">
              <button type="button" className="filterbtn">
                <FontAwesomeIcon icon={faFilter} />
              </button>
            </div>
          </div>
          <br />
          <div className="table-responsive">
            <table className="table table-bordered-custom">
              <thead className="thead-custom">
                <tr>
                  <th>#</th>
                  <th>Applicant Name</th>
                  <th>View</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>John Doe</td>
                  <td>
                    <a href="facebook.com">View Application</a>
                  </td>
                </tr>

                <tr>
                  <td>2</td>
                  <td>Joe Alwyn</td>
                  <td>
                    <a href="facebook.com">View Application</a>
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
        <div className="col-md-6 justify-content-center">
          <h2 className="text-center" style={{ marginLeft: "-40px" }}>
            Applicant Information
          </h2>
          <table className="info-table" style={{ marginLeft: "130px" }}>
            <tr>
              <td>Full Name</td>
              <td>John Doe</td>
            </tr>

            <tr>
              <td>Age:</td>
              <td>16</td>
            </tr>

            <tr>
              <td>Contact:</td>
              <td>09998765432</td>
            </tr>

            <tr>
              <td>First Line Signer:</td>
              <td>Kobi Tolentino</td>
            </tr>

            <tr>
              <td>Other Details:</td>
              <td>Notes</td>
            </tr>
          </table>

          <div
            className="col-12 text-center"
            style={{ marginLeft: "-30px", marginTop: "20px" }}
          >
            <Link to="/appform4">
              <button type="submit" className="btn custom">
                View Full Application
              </button>
            </Link>
          </div>
          <br />
          <br />

          <div className="row" style={{ marginLeft: "70px" }}>
            <div className="col-md-6">
              <b>Reject Application</b>
            </div>

            <div className="col-md-6">
              <b>Approve for Petitioning</b>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EOApp1;
