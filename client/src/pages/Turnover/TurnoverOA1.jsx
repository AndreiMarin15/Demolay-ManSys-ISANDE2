import { Link } from "react-router-dom";
import "../../styles/base.css";
import "../../styles/Turnover.css"
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';

function renderTableData() {
    const tableData = [
        ["Ambrosio Flores", "Scribe", "ambrosioflores@gmail.com", "09178060658", "287 Katipunan Avenue, Quezon City"],
        ["Ambrosio Flores", "Scribe", "ambrosioflores@gmail.com", "09178060658", "287 Katipunan Avenue, Quezon City"],
        ["Ambrosio Flores", "Scribe", "ambrosioflores@gmail.com", "09178060658", "287 Katipunan Avenue, Quezon City"],
        ["Ambrosio Flores", "Scribe", "ambrosioflores@gmail.com", "09178060658", "287 Katipunan Avenue, Quezon City"],
        ["Ambrosio Flores", "Scribe", "ambrosioflores@gmail.com", "09178060658", "287 Katipunan Avenue, Quezon City"],
    ];
  
    return tableData.map((rowData, index) => {
        const [col1, col2, col3, col4, col5] = rowData;
        return (
            <tr key={index}>
                <td>{col1}</td>
                <td>{col2}</td>
                <td>{col3}</td>
                <td>{col4}</td>
                <td>{col5}</td>
                <td>
                    <FontAwesomeIcon icon={faEdit} />
                </td>
            </tr>
        );
    });
}
  
function TurnoverOA1 () {

    return(
    <div className="container">
        <h1> Officers' Address Report (Form 16) </h1>
        <hr />
        <p> This report covers Term A of DeMolay Year 2023 beginning January 8, 2023 and ending June 18, 2023</p>
        <br />
        <table className="table">
            <thead>
                <tr>
                    <th>Offcer Name</th>
                    <th> Position </th>
                    <th>Email</th>
                    <th>Mobile</th>
                    <th>Address</th>
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

export default TurnoverOA1



