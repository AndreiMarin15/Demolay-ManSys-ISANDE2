import { Link } from "react-router-dom";
import "../../styles/base.css";
import "../../styles/Events.css"
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

function EventsMasonicService () {
  return(<div className="container">
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
                <h1>Add Event - Masonic Service </h1>
                <Link to="/eventsMasonicService">
                    <button type="submit" form="submit" id="primary-btn" value="ADD NEW ENTRY">
                        ADD NEW ENTRY
                    </button>
                </Link>
            </div>
            {/* Instruction */}
            <div>
                <p className="instruction"> Please take note that you can only submit the form if you have completed all the requirements.</p>
            </div>
            <hr/>

            <div className="row">
            {/* First Column */}
                <div className="col-md-4">
                    <table class="legend-table">
                        <tr>
                            <td className="no-wrap">Name of Masonic Service:</td>
                            <td>title of Masonic Service activity conducted/participated by the member</td>
                        </tr>
                        <tr>
                            <td>Date:</td>
                            <td>date of Masonic Service Activities</td>
                        </tr>
                        <tr>
                            <td className="no-wrap">Number of Hours:</td>
                            <td>number of hour garnered by the member</td>
                        </tr>
                        <tr>
                            <td>Location:</td>
                            <td>where the Masonic Service activity was held</td>
                        </tr>
                    </table>
                </div>
            {/* Second Column */}
                <div className="col-md-4">
                    <div className="row align-items-center mt-3">
                        <div className="col-md-6">
                            <label 
                                htmlFor="nameofmasonicservice" 
                                className="col-form-label text-left">
                                Name of Masonic Service:
                            </label>
                        </div>
                        <div className="col-md-5">
                            <select className="form-select form-control" id="nameofmasonicservice">
                                <option>Name 1</option>
                                <option>Name 2</option>
                                <option>Name 3</option>
                            </select>
                        </div>
                    </div>
                    <br/>
                    <div className="row align-items-center mt-3">
                        <div className="col-md-6">
                            <label 
                                htmlFor="date" 
                                className="col-form-label text-right">
                                Date:
                            </label>
                        </div>
                        <div className="col-md-5">
                            <input type="text" className="form-control" id="date" placeholder="MM/DD/YYYY"/>
                        </div>
                    </div>
                    <br/>
                    <div className="row align-items-center mt-3">
                        <div className="col-md-6">
                            <label 
                                htmlFor="noofhours" 
                                className="col-form-label text-right">
                                No. of Hours:
                            </label>
                        </div>
                        <div className="col-md-5">
                            <input type="text" className="form-control" id="noofhours" placeholder="00"/>
                        </div>
                    </div>
                    <br/>
                    <div className="row align-items-center mt-3">
                        <div className="col-md-6">
                            <label 
                                htmlFor="location" 
                                className="col-form-label text-right">
                                Location:
                            </label>
                        </div>
                        <div className="col-md-5">
                            <input type="text" className="form-control" id="location" placeholder="Enter Location"/>
                        </div>
                    </div>
                </div>
                {/* Third Column */}
                <div className="col-md-4"> 
                    <div className="row align-items-center mt-3">
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
                {/* Buttons */}
                <div className="d-flex justify-content-between mt-4">
                    <Link to="/eventsHome">
                        <button type="button" id="back-btn">
                            HOME
                        </button>
                    </Link>
                    <Link to="/turnoverTF3">
                        <button type="submit" form="submit" id="primary-btn" value="SUBMIT">
                            SUBMIT
                        </button>
                    </Link>
                </div>
            </div>         
        </div>)
}

export default EventsMasonicService


