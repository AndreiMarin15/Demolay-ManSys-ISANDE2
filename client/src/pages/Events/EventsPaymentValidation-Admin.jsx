import { Link } from "react-router-dom";
import "../../styles/base.css";
import "../../styles/Events.css"
import { Component } from "react";

function renderTableData() {
    const tableData = [
        ["1", "Athletic", "3 White", "2 White - Manila, 1 White - Baguio", "Mark As Paid"],
        [" ", " ", "1 Red", "1 Red - Cavite", "Mark As Paid"],
      ];
      
      return tableData.map((rowData, index) => {
        const [col1, col2, col3, col4, col5] = rowData;
        return (
          <tr key={index}>
            <td>{col1}</td>
            <td>{col2}</td>
            <td>{col3}</td>
            <td>{col4}</td>
            <td><button>View</button></td>
            <td>
              {col5}
              <input type="checkbox" name={`paid${index}`} />
            </td>
          </tr>
        );
      });      
  }

function EventsPaymentValidation() {
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
                <h1> Request for Merit Bars </h1>
            </div>
            <hr/>

            <div className="row">
            {/* First Column */}
                <div className="col-md-12">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>No.</th>
                                <th>Merit Bars</th>
                                <th>Quantity</th>
                                <th>Chapter</th>
                                <th>Proof of Payment</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {renderTableData()}
                        </tbody>
                    </table>
                </div>
            </div>         
        </div>
    )
}

export default EventsPaymentValidation;
