import { Link } from "react-router-dom";
import "../../styles/base.css";
import "../../styles/Events.css";
import { Component } from "react";

const RenderTableData = () => {
  const tableData = [
    ["1", "Attendance"],
    ["2", "Athletic"],
    ["3", "Civic Service"],
    ["4", "Conclave"],
    ["5", "Fine Arts"],
    ["6", "Fundraising"],
    ["7", "Installing"],
    ["8", "Journalism"],
    ["9", "Masonic Attendance"],
    ["10", "Masonic Service"],
    ["11", "Merit"],
    ["12", "Petitions"],
    ["13", "Religion"],
    ["14", "Ritual"],
    ["15", "Scholastics"],
    ["16", "Visitation"],
  ];

  return tableData.map((rowData, index) => {
    const [col1, col2, col3, col4] = rowData;
    return (
      <tr key={index}>
        <td>{col2}</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
    );
  });
};

const styles = {
  maxWidth: "200px",
  maxHeight: "200px",
  objectFit: "contain",
};

function EventsPaymentValidation() {
  return (
    <div className="container">
      <br />

      {/* Header */}

      <div className="d-flex justify-content-between align-items-center mb-3">
        <h1> Request for Approved Merit Bars (Payment Validation)</h1>
      </div>
      <hr />

      <div className="row">
        {/* First Column */}

        <div className="col-md-5">
          <table className="table">
            <thead>
              <tr>
                <th>Category</th>
                <th>White</th>
                <th>Red</th>
                <th>Blue</th>
                <th>Purple</th>
                <th>Gold</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>{<RenderTableData />}</tbody>
          </table>
        </div>

        {/* Vertical Line */}

        <div className="col-md-1">
          <div className="vl"></div>
        </div>

        {/* Second Column */}

        <div className="col-md-6">
          <div className="row align-items-center">
            <div className="col-md-3">
              <label htmlFor="total" className="col-form-label text-right">
                Total Amount to Pay:
              </label>
            </div>
            <div className="col-md-9">
              <input
                type="text"
                className="form-control"
                disabled
                id="uploadID"
                value=""
              />
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-md-3">
              <label htmlFor="uploadID" className="col-form-label text-right">
                Proof:
              </label>
            </div>
            <div className="col-md-9">
              {/* {selectedApplication.attendance.proof ? (
                <img
                  src={selectedApplication.attendance.proof}
                  alt="img"
                  style={styles}
                />
              ) : (
                <p></p>
              )} */}
            </div>
          </div>

          {/* Mark as Paid */}
          <div className="d-flex justify-content-end ms-5">
            <button type="button" form="submit" className="btn">
              MARK AS PAID
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventsPaymentValidation;
