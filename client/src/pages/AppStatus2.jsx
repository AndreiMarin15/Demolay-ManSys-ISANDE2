import { Link } from "react-router-dom";
import "../styles/base.css";
import "../styles/appstatus2.css";

import { Component } from "react";

export default class AppStatus2 extends Component {
  render() {
    return (
      /* NEED TO CHANGE HEADER -- ADD Log Out AND My Application BUTTONS */
      <div className="container container-fluid ">
        <div className="row">
          <div className="col-md-12">
            <h1>My Application</h1>
          </div>
        </div>

        <hr />

        <div className="row" style={{ marginLeft: "40px" }}>
          <div className="col-md-7">
            {/* Content for the left column */}
            <h2>Left Column</h2>
            <p>
              This is where the applicant's submitted application form will go.
            </p>
          </div>
          <div className="col-md-1">
            {/* Vertical line or divider */}
            <div className="vertical-line"></div>
          </div>
          <div className="col-md-4 justify-content-center">
            {/* Content for the right column */}
            <h2 className="text-center" style={{ marginLeft: "-80px" }}>
              Application Details
            </h2>
            <table className="details-table">
              <tr>
                <td>Applicant ID:</td>
                <td>1092034911</td>
              </tr>

              <tr>
                <td>Chapter applied to:</td>
                <td>Ambrosio A. Flores</td>
              </tr>

              <tr>
                <td>Application Date:</td>
                <td>March 27, 2023</td>
              </tr>

              <tr>
                <td>Status:</td>
                <td>
                  {" "}
                  <p className="text-center" id="app-status">
                    Approved
                  </p>
                </td>
              </tr>
            </table>

            <hr
              style={{
                color: "black",
                height: "1px",
                marginLeft: "-35px",
              }}
            />

            <table
              style={{
                marginLeft: "80px",
                border: "1px solid black",
                padding: "50px",
              }}
            >
              <tr>
                <td style={{ padding: "8px" }}>
                  <b>Member ID:</b> 2092034911{" "}
                </td>
              </tr>
            </table>

            <p
              className="text-center"
              id="cont"
              style={{ marginLeft: "-80px" }}
            >
              If you wish to continue, kindly upload your proof of payment{" "}
              <a href="/AppPayment">here</a>.{" "}
            </p>
          </div>
        </div>
      </div>
    );
  }
}
