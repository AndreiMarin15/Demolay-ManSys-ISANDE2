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

function CSApp1() {
  return (
    <div className="container container-fluid ">
      <div className="row">
        <div className="col-md-12">
          <h1>Approved Applications</h1>
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
                  <th>Status</th>
                  <th>View</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>John Doe</td>
                  <td>
                    <span className="green-circle"></span>
                    Paid
                  </td>
                  <td>
                    <a href="facebook.com">View Application</a>
                  </td>
                </tr>

                <tr>
                  <td>2</td>
                  <td>Joe Alwyn</td>
                  <td>
                    <span className="red-circle"></span>
                    Not Paid
                  </td>
                  <td>
                    <a href="facebook.com">View Application</a>
                  </td>
                </tr>

                <tr>
                  <td>3</td>
                  <td>Nick Jonas</td>
                  <td>
                    <span className="orange-circle"></span>
                    To Verify
                  </td>
                  <td>
                    <a href="facebook.com">View Application</a>
                  </td>
                </tr>

                <tr>
                  <td>4</td>
                  <td>Peter Parker</td>
                  <td>
                    <span className="orange-circle"></span>
                    To Verify
                  </td>
                  <td>
                    <a href="facebook.com">View Application</a>
                  </td>
                </tr>

                <tr>
                  <td>5</td>
                  <td>Harry Styles</td>
                  <td>
                    <span className="green-circle"></span>
                    Paid
                  </td>
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
          <div className="table-responsive">
            <table className="info-table" style={{ marginLeft: "130px" }}>
              <tr>
                <td>ID Number:</td>
                <td>2092034911</td>
              </tr>

              <tr>
                <td>Last Name:</td>
                <td>Doe</td>
              </tr>

              <tr>
                <td>Given Name:</td>
                <td>John</td>
              </tr>

              <tr>
                <td>Middle Name:</td>
                <td>Almacen</td>
              </tr>

              <tr>
                <td>Email:</td>
                <td>johndoe@gmail.com</td>
              </tr>

              <tr>
                <td>First-line Signer:</td>
                <td>Juan Dela Cruz</td>
              </tr>

              <tr>
                <td>Other Details:</td>
                <td>Notes</td>
              </tr>
            </table>
          </div>

          <br />
          <br />
          <div className="table-responsive">
            <table className="small-table" style={{ marginLeft: "130px" }}>
              <tbody>
                <tr>
                  <td>ID Picture:</td>
                  <td>
                    <a href="http://facebook.com">Doe-Picture.png</a>
                  </td>
                </tr>
                <tr>
                  <td>Proof of Payment:</td>
                  <td>
                    <a href="http://facebook.com">Doe-Payment.png</a>
                  </td>
                </tr>
                <tr>
                  <td>Admin Status:</td>
                  <td>
                    <span className="green-circle"></span>
                    Paid
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div
            className="col-12 text-center"
            style={{ marginLeft: "-30px", marginTop: "20px" }}
          >
            <Link to="/appform4">
              <button type="submit" className="btn custom">
                FORM 10
                <FontAwesomeIcon
                  icon={faArrowRight}
                  style={{ color: "#ffffff", marginLeft: "10px" }}
                />
              </button>
            </Link>
          </div>
          <br />
          <br />
        </div>
      </div>
    </div>
  );
}

export default CSApp1;
