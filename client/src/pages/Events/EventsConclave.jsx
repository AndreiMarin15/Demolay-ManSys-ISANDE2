import { Link } from "react-router-dom";
import "../../styles/base.css";
import "../../styles/Events.css"
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

function EventsConclave () {
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
                <h1>Add Event - Conclave </h1>
                <Link to="/eventsConclave">
                    <button type="submit" form="submit" id="primary-btn" value="ADD NEW ENTRY">
                        ADD NEW ENTRY
                    </button>
                </Link>
            </div>
            {/* Instruction */}
            <div>
                <p className="instruction"> Please take note that you can only submit the form if you have completed all the requirements. Otherwise, your data will not be saved.  </p>
            </div>
            <hr/>

            <div className="row">
            {/* First Column */}
                <div className="col-md-4">
                    <table class="legend-table">
                        <tr>
                            <td>Duration:</td>
                            <td>defines how long the conclave is</td>
                        </tr>
                        <tr>
                            <td>Type:</td>
                            <td>defines if it is National or Luzon, Visayas, Mindanao Jurisdictional Conclave</td>
                        </tr>
                        <tr>
                            <td className="no-wrap">Chap Rep:</td>
                            <td>name of the chapter that was represented by the member</td>
                        </tr>
                        <tr>
                            <td>OR No.:</td>
                            <td>official receipt number from the host reflecting the member’s name or registration sheet that includes the member’s name with a copy of the OR reflecting the chapter’s name </td>
                        </tr>
                    </table>
                </div>
            {/* Second Column */}
                <div className="col-md-4">
                    <div className="row align-items-center mt-3">
                        <div className="col-md-3">
                            <label 
                                htmlFor="duration" 
                                className="col-form-label text-left">
                                Duration:
                            </label>
                        </div>
                        <div className="col-md-4">
                            <select className="form-select form-control" id="duration1">
                                <option>Duration 1</option>
                                <option>Duration 2</option>
                                <option>Duration 3</option>
                            </select>
                        </div>
                        -
                        <div className="col-md-4">
                            <select className="form-select form-control" id="duration2">
                                <option>Duration 1</option>
                                <option>Duration 2</option>
                                <option>Duration 3</option>
                            </select>
                        </div>
                    </div>
                    <br/>
                    <div className="row align-items-center mt-3">
                        <div className="col-md-3">
                            <label 
                                htmlFor="type" 
                                className="col-form-label text-left">
                                Type:
                            </label>
                        </div>
                        <div className="col-md-8">
                            <select className="form-select form-control" id="type">
                                <option>Type 1</option>
                                <option>Type 2</option>
                                <option>Type 3</option>
                            </select>
                        </div>
                    </div>
                    <br/>
                    <div className="row align-items-center mt-3">
                        <div className="col-md-3">
                            <label 
                                htmlFor="chaprep" 
                                className="col-form-label text-left">
                                Chap Rep:
                            </label>
                        </div>
                        <div className="col-md-8">
                            <select className="form-select form-control" id="chaprep">
                                <option>Chap Rep 1</option>
                                <option>Chap Rep 2</option>
                                <option>Chap Rep 3</option>
                            </select>
                        </div>
                    </div>
                    <br/>
                    <div className="row align-items-center mt-3">
                        <div className="col-md-3">
                            <label 
                                htmlFor="orno" 
                                className="col-form-label text-right">
                                OR No:
                            </label>
                        </div>
                        <div className="col-md-8">
                            <input type="text" className="form-control" id="orno" placeholder="Enter OR No."/>
                        </div>
                    </div>
                    <br/>
                    
                {/* Buttons */}
                    <div className="mt-5"></div> 
                    <div className="d-flex justify-content-center position-absolute bottom-0 start-50 translate-middle-x mb-4">
                        <div className="mr-2">
                            <Link to="/appform1">
                                <button type="submit" form="submit" id="primary-btn" value="BACK">
                                BACK
                                </button>
                            </Link>
                        </div>
                        <div>
                            <Link to="/appform1">
                            <button type="submit" form="submit" id="primary-btn" value="SUBMIT">
                                SUBMIT
                            </button>
                            </Link>
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
            </div>         
        </div>)
}

export default EventsConclave



