import { Link } from "react-router-dom";
import "../styles/base.css";
import "../styles/csappinprogress.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFilter,
  faSquareXmark,
  faSquareCheck,
} from "@fortawesome/free-solid-svg-icons";
import { Component } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const reject = <FontAwesomeIcon icon={faSquareXmark} />;
const approve = <FontAwesomeIcon icon={faSquareCheck} />;

function CSAppInProgress() {
  return (
    <div className="container container-fluid ">
      <div className="row">
        <div className="col-md-12">
          <h1>In-Progress Applications</h1>
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
            <table className="table app-table">
              <thead className="thead-custom">
                <tr>
                  <th></th>
                  <th>#</th>
                  <th>Applicant Name</th>
                  <th>Chapter</th>
                  <th>View</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="checkbox-cell">
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                      />
                    </div>
                  </td>
                  <td>1</td>
                  <td>John Doe</td>
                  <td></td>
                  <td>
                    {" "}
                    <a href="facebook.com">View</a>
                  </td>
                </tr>

                <tr>
                  <td class="checkbox-cell">
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                      />
                    </div>
                  </td>
                  <td>2</td>
                  <td>Joe Alwyn</td>
                  <td></td>
                  <td>
                    {" "}
                    <a href="facebook.com">View</a>
                  </td>
                </tr>

                <tr>
                  <td class="checkbox-cell">
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                      />
                    </div>
                  </td>
                  <td>3</td>
                  <td>Taylor Lautner</td>
                  <td></td>
                  <td>
                    {" "}
                    <a href="facebook.com">View</a>
                  </td>
                </tr>

                <tr>
                  <td class="checkbox-cell">
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                      />
                    </div>
                  </td>
                  <td>4</td>
                  <td>Harry Styles</td>
                  <td></td>
                  <td>
                    {" "}
                    <a href="facebook.com">View</a>
                  </td>
                </tr>

                <tr>
                  <td class="checkbox-cell">
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                      />
                    </div>
                  </td>
                  <td>5</td>
                  <td>Tom Hiddleston</td>
                  <td></td>
                  <td>
                    {" "}
                    <a href="facebook.com">View</a>
                  </td>
                </tr>

                <tr>
                  <td class="checkbox-cell">
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                      />
                    </div>
                  </td>
                  <td>6</td>
                  <td>John Mayer</td>
                  <td></td>
                  <td>
                    {" "}
                    <a href="facebook.com">View</a>
                  </td>
                </tr>

                <tr>
                  <td class="checkbox-cell">
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                      />
                    </div>
                  </td>
                  <td>7</td>
                  <td>Joe Jonas</td>
                  <td></td>
                  <td>
                    {" "}
                    <a href="facebook.com">View</a>
                  </td>
                </tr>

                <tr>
                  <td class="checkbox-cell">
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                      />
                    </div>
                  </td>
                  <td>8</td>
                  <td>Calvin Harris</td>
                  <td></td>
                  <td>
                    {" "}
                    <a href="facebook.com">View</a>
                  </td>
                </tr>

                <tr>
                  <td class="checkbox-cell">
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                      />
                    </div>
                  </td>
                  <td>9</td>
                  <td>Jake Gyllenhaal</td>
                  <td></td>
                  <td>
                    {" "}
                    <a href="facebook.com">View</a>
                  </td>
                </tr>

                <tr>
                  <td class="checkbox-cell">
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                      />
                    </div>
                  </td>
                  <td>10</td>
                  <td>Lucas Till</td>
                  <td></td>
                  <td>
                    {" "}
                    <a href="facebook.com">View</a>
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
          <br />
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
                    <span className="orange-circle"></span>
                    Petitioning
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <br />
          <br />
          <div className="row" style={{ marginLeft: "70px" }}>
            <div className="col-md-6">
              <button type="button" style={{ border: "0" }}>
                <span>
                  <FontAwesomeIcon
                    icon={faSquareXmark}
                    style={{ marginRight: "8px" }}
                  />
                </span>
                <b> Reject Application </b>
              </button>
            </div>

            <div className="col-md-6">
              <button type="button" style={{ border: "0" }}>
                <span>
                  <FontAwesomeIcon
                    icon={faSquareCheck}
                    style={{ marginRight: "8px" }}
                  />
                </span>
                <b>Approve for Petitioning</b>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CSAppInProgress;
