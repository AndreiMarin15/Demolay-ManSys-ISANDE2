import { Link } from "react-router-dom";
import "../styles/base.css";
import "../styles/csform10.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faFilter,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import { Component } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const right = <FontAwesomeIcon icon={faArrowRight} />;
const left = <FontAwesomeIcon icon={faArrowLeft} />;

function CSForm10() {
  return (
    <div className="container container-fluid ">
      <div className="row">
        <div className="col-md-12">
          <h1>Form 10</h1>
        </div>
      </div>

      <hr />

      <div className="row" style={{ marginLeft: "35px" }}>
        <div className="col-md-5">
          {/* Content for the left column */}
          <h2>Approved Applicants</h2>
          <br />
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
            <table className="table table-bordered-custom approved">
              <thead className="thead-custom">
                <tr>
                  <th>#</th>
                  <th>Applicant Name</th>
                  <th>View</th>
                  <th>Add to Form 10</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>John Doe</td>
                  <td>
                    <a href="facebook.com">View Details</a>
                  </td>
                  <td>
                    <button type="submit" className="btn custom-add">
                      FORM 10
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        style={{ color: "#ffffff", marginLeft: "10px" }}
                      />
                    </button>
                  </td>
                </tr>

                <tr>
                  <td>2</td>
                  <td>Joe Alwyn</td>

                  <td>
                    <a href="facebook.com">View Details</a>
                  </td>
                  <td>
                    <button type="submit" className="btn custom-add">
                      FORM 10
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        style={{ color: "#ffffff", marginLeft: "10px" }}
                      />
                    </button>
                  </td>
                </tr>

                <tr>
                  <td>3</td>
                  <td>Nick Jonas</td>

                  <td>
                    <a href="facebook.com">View Details</a>
                  </td>
                  <td>
                    <button type="submit" className="btn custom-add">
                      FORM 10
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        style={{ color: "#ffffff", marginLeft: "10px" }}
                      />
                    </button>
                  </td>
                </tr>

                <tr>
                  <td>4</td>
                  <td>Peter Parker</td>

                  <td>
                    <a href="facebook.com">View Details</a>
                  </td>
                  <td>
                    <button type="submit" className="btn custom-add">
                      FORM 10
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        style={{ color: "#ffffff", marginLeft: "10px" }}
                      />
                    </button>
                  </td>
                </tr>

                <tr>
                  <td>5</td>
                  <td>Harry Styles</td>

                  <td>
                    <a href="facebook.com">View Details</a>
                  </td>
                  <td>
                    <button type="submit" className="btn custom-add">
                      FORM 10
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        style={{ color: "#ffffff", marginLeft: "10px" }}
                      />
                    </button>
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
          <h2>Initiated Members</h2>
          <br />
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
            <table className="table table-bordered-custom approved">
              <thead className="thead-custom">
                <tr>
                  <th>#</th>
                  <th>Applicant Name</th>
                  <th>View</th>
                  <th>Return</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>John Doe</td>
                  <td>
                    <a href="facebook.com">View Details</a>
                  </td>
                  <td>
                    <button type="submit" className="btn custom-add">
                      <FontAwesomeIcon
                        icon={faArrowLeft}
                        style={{ color: "#ffffff", marginRight: "8px" }}
                      />
                      Return
                    </button>
                  </td>
                </tr>

                <tr>
                  <td>2</td>
                  <td>Joe Alwyn</td>

                  <td>
                    <a href="facebook.com">View Details</a>
                  </td>
                  <td>
                    <button type="submit" className="btn custom-add">
                      <FontAwesomeIcon
                        icon={faArrowLeft}
                        style={{ color: "#ffffff", marginRight: "8px" }}
                      />
                      Return
                    </button>
                  </td>
                </tr>

                <tr>
                  <td>3</td>
                  <td></td>

                  <td></td>
                  <td></td>
                </tr>

                <tr>
                  <td>4</td>
                  <td></td>

                  <td></td>
                  <td></td>
                </tr>

                <tr>
                  <td>5</td>
                  <td></td>

                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>6</td>
                  <td></td>

                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>7</td>
                  <td></td>

                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>8</td>
                  <td></td>

                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>9</td>
                  <td></td>

                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>10</td>
                  <td></td>

                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="col-12 text-end" style={{ marginTop: "20px" }}>
            <Link to="/appform4">
              <button type="submit" className="btn custom">
                Next
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

export default CSForm10;
