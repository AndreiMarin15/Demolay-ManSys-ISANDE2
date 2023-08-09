import { Link } from "react-router-dom";
import "../../styles/base.css";
import "../../styles/Events.css";
import { Component } from "react";

const RenderTableData = () => {
  const tableData = [["1", "Athletic", "3 White, 5 Red, 1 Purple", "P1,000"]];

  return tableData.map((rowData, index) => {
    const [col1, col2, col3, col4] = rowData;
    return (
      <tr key={index}>
        <td>{col1}</td>
        <td>{col2}</td>
        <td>{col3}</td>
        <td>{col4}</td>
      </tr>
    );
  });
};

function EventsProof() {
  return (
    <div className="container">
      <br />
      <br />

      {/* Header */}

      <div className="d-flex justify-content-between align-items-center mb-3">
        <h1> Request for Merit Bars - Payment</h1>
      </div>
      <hr />

      <div className="row">
        {/* First Column */}
        <div className="col-md-6">
          <table className="table">
            <thead>
              <tr>
                <th>No.</th>
                <th>Requested Merit Bar</th>
                <th>Quantity</th>
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

        <div className="col-md-4">
          <div className="row align-items-center mt-">
            <div className="col-md-2">
              <label htmlFor="uploadID" className="col-form-label text-right">
                Proof:
              </label>
            </div>
            <div className="col-md-12">
              <input type="file" className="form-control" id="uploadID" />
            </div>
            <div className="d-flex justify-content-end mt-4">
              <button
                type="button"
                className="primary-btn"
                value="SUBMIT"
                onClick={() => {}}
              >
                SUBMIT
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventsProof;
