import { Link } from "react-router-dom";
import "../../styles/base.css";
import "../../styles/Events.css"
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

function EventsAthletic () {return(<div className="container">
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
                <h1>Add Event - Athletic </h1>
                <Link to="/eventsAthletic">
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
                            <td>Date:</td>
                            <td>date of athletic activities</td>
                        </tr>
                        <tr>
                            <td className="no-wrap">Name of Sport:</td>
                            <td>what sport did the member participate</td>
                        </tr>
                        <tr>
                            <td>Hosted by:</td>
                            <td>name of chapter or what organization hosted the athletic event</td>
                        </tr>
                        <tr>
                            <td>Location:</td>
                            <td>where the athletic event was held</td>
                        </tr>
                    </table>
                </div>
            {/* Second Column */}
                <div className="col-md-4">
                    <div className="row align-items-center mt-3">
                        <div className="col-md-4">
                            <label 
                                htmlFor="nameofsport" 
                                className="col-form-label text-left">
                                Name of Sport:
                            </label>
                        </div>
                        <div className="col-md-7">
                            <select className="form-select form-control" id="nameofsport">
                                <option>Sport 1</option>
                                <option>Sport 2</option>
                                <option>Sport 3</option>
                            </select>
                        </div>
                    </div>
                    <br/>
                    <div className="row align-items-center mt-3">
                        <div className="col-md-4">
                            <label 
                                htmlFor="date" 
                                className="col-form-label text-right">
                                Date:
                            </label>
                        </div>
                        <div className="col-md-7">
                            <input type="text" className="form-control" id="date" placeholder="MM/DD/YYYY"/>
                        </div>
                    </div>
                    <br/>
                    <div className="row align-items-center mt-3">
                        <div className="col-md-4">
                            <label 
                                htmlFor="hostedby" 
                                className="col-form-label text-right">
                                Hosted by:
                            </label>
                        </div>
                        <div className="col-md-7">
                            <select className="form-select form-control" id="hostedby">
                                <option>Hosted by 1</option>
                                <option>Hosted by 2</option>
                                <option>Hosted by 3</option>
                            </select>
                        </div>
                    </div>
                    <div className="row align-items-center mt-3">
                        <div className="col-md-4">
                            <label 
                                htmlFor="location" 
                                className="col-form-label text-right">
                                Location:
                            </label>
                        </div>
                        <div className="col-md-7">
                            <input type="text" className="form-control" id="location" placeholder="Enter Location"/>
                        </div>
                    </div>
                    <br/>
                    
                {/* Buttons */}
                    <div className="mt-5"></div> 
                    <div className="d-flex justify-content-center position-absolute bottom-0 start-50 translate-middle-x mb-4">
                        <div className="mr-2">
                            <Link to="/eventsHome">
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
        </div>)}
export default EventsAthletic


