import { Link } from "react-router-dom";
import "../styles/base.css";
import "../styles/csapp1.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faFilter } from "@fortawesome/free-solid-svg-icons";
import { Component } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const element = <FontAwesomeIcon icon={faArrowRight} />;

function CAAppRejected() {
  return (
    <div className="container container-fluid ">
      <div className="row">
        <div className="col-md-12">
          <h1>Rejected Applications</h1>
        </div>
      </div>

      <hr />

      <div className="row" style={{ marginLeft: "35px" }}>
        <div className="col-md-4">
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

                <tr>
                  <td>3</td>
                  <td>Nick Jonas</td>

                  <td>
                    <a href="facebook.com">View Application</a>
                  </td>
                </tr>

                <tr>
                  <td>4</td>
                  <td>Peter Parker</td>

                  <td>
                    <a href="facebook.com">View Application</a>
                  </td>
                </tr>

                <tr>
                  <td>5</td>
                  <td>Harry Styles</td>

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
        <div className="col-md-7 justify-content-center">
          <h2 className="text-center" style={{ marginLeft: "-40px" }}>
            Applicant Information
          </h2>
          <div className="table-responsive">
            <table className="info-table" style={{ marginLeft: "180px" }}>
              <tr>
                <td>Full Name:</td>
                <td>John A. Doe</td>
              </tr>

              <tr>
                <td>Age:</td>
                <td>16</td>
              </tr>

              <tr>
                <td>Contact:</td>
                <td>09918764321</td>
              </tr>

              <tr>
                <td>First-line Signer:</td>
                <td>Juan Dela Cruz</td>
              </tr>

              <tr>
                <td>Reason:</td>
                <td>Notes</td>
              </tr>
            </table>
          </div>

          <br />
          <br />

          <div
            className="col-12 text-center"
            style={{ marginLeft: "-30px", marginTop: "20px" }}
          >
            <Link to="/appform4">
              <button type="button" className="btn custom">
                View Full Application
              </button>
            </Link>
          </div>

          <br />
          <div className="row text-center" style={{ marginLeft: "200px" }}>
            <div className="col-md-6">
              <p>
                <span>
                  <input
                    class="form-check-input"
                    style={{ margin: "5px" }}
                    type="checkbox"
                    value=""
                  />
                </span>
                Overrule Ballot
              </p>
            </div>
          </div>
          <br />
          <br />
        </div>
      </div>
    </div>
  );
}

export default CAAppRejected;
