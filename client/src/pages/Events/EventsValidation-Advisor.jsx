import { Link } from "react-router-dom";
import "../../styles/base.css";
import "../../styles/Events.css"
import { Component } from "react";

function renderTableData() {
    const tableData = [
      ["1", "Ambrosio Flores", "Attendance"],
      ["2", "Emilio Aguinaldo", "Athletic"],
      ["3", "Jose Rizal", "Conclave"],
      ["4", "Elpidio Quirino", "Attendance"],
    ];
  
    return tableData.map((rowData, index) => {
      const [col1, col2, col3] = rowData;
      return (
        <tr key={index}>
          <td>{col1}</td>
          <td>{col2}</td>
          <td>{col3}</td>
          <td><button>View</button></td>
        </tr>
      );
    });
  }

function EventsValidation() {
    return (
        <div className="container">
            <br/>
            {/* Header */}
            <div className="d-flex justify-content-between align-items-center mb-3">
                <h1> Request for Merit Bars </h1>
            </div>
            <hr/>

            <div className="row">
            {/* First Column */}
                <div className="col-md-6">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>No.</th>
                                <th>Name of Requester</th>
                                <th>Requested Merit Bar</th>
                                <th>View</th>
                            </tr>
                        </thead>
                        <tbody>
                            {renderTableData()}
                        </tbody>
                    </table>
                </div>

            {/* Vertical Line */}
                <div className="col-md-1">
                    <div className="vl"></div>
                </div>
            {/* Second Column */}
                <div className="col-md-5 mx-auto">
                    <h2> Attendance </h2>
                    <div className="row align-items-center mt-3">
                        <div className="col-md-4">
                            <label htmlFor="term" className="col-form-label text-left">
                                Term:
                            </label>
                        </div>
                        <div className="col-md-8">
                            <input
                            type="text"
                            className="form-control readonly-input"
                            value="2023 - A"
                            readOnly
                            />
                        </div>
                    </div>
                    <div className="row align-items-center mt-3">
                        <div className="col-md-4">
                            <label htmlFor="meetingname" className="col-form-label text-right">
                                Meeting Name:
                            </label>
                        </div>
                        <div className="col-md-8">
                            <input
                            type="text"
                            className="form-control readonly-input"
                            value="Meeting 1"
                            readOnly
                            />
                        </div>
                    </div>
                    <div className="row align-items-center mt-3">
                        <div className="col-md-4">
                            <label htmlFor="meetingdate" className="col-form-label text-right">
                                Meeting Date:
                            </label>
                        </div>
                        <div className="col-md-8">
                            <input
                            type="text"
                            className="form-control readonly-input"
                            value="01/01/23"
                            readOnly
                            />
                        </div>
                    </div>
                    <div className="row align-items-center mt-3">
                        <div className="col-md-4">
                            <label htmlFor="position" className="col-form-label text-right">
                                Position:
                            </label>
                        </div>
                        <div className="col-md-8">
                            <input
                            type="text"
                            className="form-control readonly-input"
                            value="Junior Deacon"
                            readOnly
                            />
                        </div>
                    </div>
                    <div className="row align-items-center mt-3">
                        <div className="col-md-4">
                            <label htmlFor="position" className="col-form-label text-right">
                                Performance:
                            </label>
                        </div>
                        <div className="col-md-8">
                            <input
                            type="text"
                            className="form-control readonly-input"
                            value="Beginner"
                            readOnly
                            />
                        </div>
                    </div>
                    <div className="row align-items-center mt-3">
                        <div className="col-md-4">
                            <label htmlFor="proof" className="col-form-label text-right">
                                Proof:
                            </label>
                        </div>
                        <div className="col-md-8">
                            <input
                            type="text"
                            className="form-control readonly-input"
                            value=" "
                            readOnly
                            />
                        </div>
                    </div>
                    {/* Buttons */}
                    <div className="d-flex justify-content-center mt-4">
                        <Link to="/appform1">
                            <button type="button" form="button" id="primary-btn" value="NEXT">
                            VALIDATE
                            </button>
                        </Link>
                    </div>
                </div>
            </div>         
        </div>
    )
}

export default EventsValidation;
