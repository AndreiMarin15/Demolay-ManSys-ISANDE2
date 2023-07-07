import { Link } from "react-router-dom";
import "../../styles/base.css";
import "../../styles/Turnover.css"
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

function renderTableData() {
    const tableData = [
        ["Ambrosio Flores", "ambrosioflores@gmail.com", "2092034911", "10-18-2003", "04-06-2023", "05-11-2023"],
        ["Ambrosio Flores", "ambrosioflores@gmail.com", "2092034911", "10-18-2003", "04-06-2023", "05-11-2023"],
        ["Ambrosio Flores", "ambrosioflores@gmail.com", "2092034911", "10-18-2003", "04-06-2023", "05-11-2023"],
        ["Ambrosio Flores", "ambrosioflores@gmail.com", "2092034911", "10-18-2003", "04-06-2023", "05-11-2023"],
        ["Ambrosio Flores", "ambrosioflores@gmail.com", "2092034911", "10-18-2003", "04-06-2023", "05-11-2023"],
    ];
  
    return tableData.map((rowData, index) => {
        const [col1, col2, col3, col4, col5, col6] = rowData;
        return (
            <tr key={index}>
                <td>{col1}</td>
                <td>{col2}</td>
                <td>{col3}</td>
                <td>{col4}</td>
                <td>{col5}</td>
                <td>{col6}</td>
            </tr>
        );
    });
}
  
function TurnoverM1 () {

    return(
    <div className="container">
        <h1> Membership Report (Form 10) </h1>
        <hr />
        <table className="table">
            <thead>
                <tr>
                    <th>Member Name</th>
                    <th>Email</th>
                    <th>Member ID</th>
                    <th>Birthday</th>
                    <th>Initiatory Degree</th>
                    <th>DeMolay Degree</th>
                </tr>
            </thead>
            <tbody>
                {renderTableData()}
            </tbody>
        </table>
        <div className="row">
            {/* First Column */}
            <div className="col-md-6">
                <div className="row align-items-center mt-3">
                    <div className="col-md-4">
                        <label htmlFor="reportedby" className="col-form-label text-left">
                            Reported By:
                        </label>
                    </div>
                    <div className="col-md-8">
                        <input
                        type="text"
                        className="form-control readonly-input"
                        value="Edwardo Rafael"
                        readOnly
                        />
                    </div>
                </div>

                <div className="row align-items-center mt-3">
                    <div className="col-md-4">
                        <label htmlFor="position" className="col-form-label text-left">
                            Position:
                        </label>
                    </div>
                    <div className="col-md-8">
                        <input
                        type="text"
                        className="form-control readonly-input"
                        value="Chapter Scribe"
                        readOnly
                        />
                    </div>
                </div>
            </div>
            {/* Second Column */}
            <div className="col-md-6">
                <div className="row align-items-center mt-3">
                    <div className="col-md-4">
                        <label htmlFor="attestedby" className="col-form-label text-left">
                            Attested By:
                        </label>
                    </div>
                    <div className="col-md-8">
                        <input
                        type="text"
                        className="form-control readonly-input"
                        value="Jonathan Que"
                        readOnly
                        />
                    </div>
                </div>

                <div className="row align-items-center mt-3">
                    <div className="col-md-4">
                        <label htmlFor="position" className="col-form-label text-left">
                            Position:
                        </label>
                    </div>
                    <div className="col-md-8">
                        <input
                        type="text"
                        className="form-control readonly-input"
                        value="Chairman of Advisory Council"
                        readOnly
                        />
                    </div>
                </div>
            </div>

        </div>
        {/* Button */}
        <div className="d-flex justify-content-between mt-4">
            <Link to="/turnoverTF3">
                <button type="button" id="back-btn">
                    BACK
                </button>
            </Link>
            <Link to="/turnoverTF5">
                <button type="submit" form="submit" id="primary-btn" value="SUBMIT">
                    SEND
                </button>
            </Link>
        </div>
    </div>)
}

export default TurnoverM1



