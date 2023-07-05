import { Link } from "react-router-dom";
import "../../styles/base.css";
import "../../styles/Events.css"
import { Component } from "react";

function renderTableData() {
    const tableData = [
      ["1", "Manila", "3 White, 5 Red, 1 Purple", "P1,000"],
    ];
  
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
  }

function EventsProof() {
    return (
        <div className="container">
            <br/>
            <nav class="eventsNavbar">
                <table class="navbar-table">
                <tbody>
                        <tr class="navbar-row">
                            <td><a href="/eventsAttendance">Attendance</a></td>
                            <td><a href="/eventsAthletic">Athletic</a></td>
                            <td><a href="/eventsCivicService">Civic Service</a></td>
                            <td><a href="/eventsConclave">Conclave</a></td>
                            <td><a href="/eventsFineArts">Fine Arts</a></td>
                            <td><a href="/eventsFundRaising">Fund Raising</a></td>
                            <td><a href="/eventsInstalling">Installing</a></td>
                            <td><a href="/eventsJournalism">Journalism</a></td>
                        </tr>
                        <tr className="navbar-row">
                            <td><a href="/eventsMasonicAttendance">Masonic Attendance</a></td>
                            <td><a href="/eventsMasonicService">Masonic Service</a></td>
                            <td><a href="/eventsMerit">Merit</a></td>
                            <td><a href="/eventsPetitions">Petitions</a></td>
                            <td><a href="/eventsReligion">Religion</a></td>
                            <td><a href="/eventsRitual">Ritual</a></td>
                            <td><a href="/eventsScholastics">Scholastics</a></td>
                            <td><a href="/eventsVisitation">Visitation</a></td>
                        </tr>
                    </tbody>
                </table>
            </nav>
            <br/>
            {/* Header */}
            <div className="d-flex justify-content-between align-items-center mb-3">
                <h1> Events </h1>
            </div>
            {/* Instruction */}
            <div>
                <p className="instruction"> Please take note that you can only submit the form if you have completed all the requirements. Otherwise, your data will not be saved.  </p>
            </div>
            <hr/>

            <div className="row">
            {/* First Column */}
                <div className="col-md-7">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>No.</th>
                                <th>Name of Requester</th>
                                <th>Requested Merit Bar</th>
                                <th>Amount</th>
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
                <div className="col-md-4"> {/* Increase the column width */}
                    <div className="row align-items-center mt-">
                        <div className="col-md-3">
                            <label 
                                htmlFor="uploadID"
                                className="col-form-label text-right"
                            >
                                Proof:
                            </label>
                        </div>
                        <div className="col-md-7">
                            <input type="file" className="form-control" id="uploadID" />
                        </div>
                    </div>
                </div>
            </div>         
        </div>
    )
}

export default EventsProof;
