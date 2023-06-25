import { Link } from "react-router-dom";
import "../../styles/base.css";
import "../../styles/Events.css"

function EventsAttendance() {
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
                <h1>Add Event - Attendance </h1>
                <Link to="/eventsAttendance">
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
                            <td>Term:</td>
                            <td>means Term of Office</td>
                        </tr>
                        <tr>
                            <td className="no-wrap">Meeting Name:</td>
                            <td>name of Stated Meetings</td>
                        </tr>
                        <tr>
                            <td>Meeting Date:</td>
                            <td>date of Stated Meetings</td>
                        </tr>
                        <tr>
                            <td>Position:</td>
                            <td>officer’s position or position assigned to a Member during Opening and Closing Ceremonies</td>
                        </tr>
                        <tr>
                            <td>Performance:</td>
                            <td>based on the delivery of the Ritual part. A member should attain and maintain Expert Status</td>
                        </tr>
                        <tr>
                            <td>Attendance:</td>
                            <td>to be filled by Award’s Advisor or Chapter Dad</td>
                        </tr>
                    </table>
                </div>
            {/* Second Column */}
                <div className="col-md-4">
                    <div className="row align-items-center mt-3">
                        <div className="col-md-4">
                            <label 
                                htmlFor="term" 
                                className="col-form-label text-left">
                                Term:
                            </label>
                        </div>
                        <div className="col-md-7">
                            <select className="form-select form-control" id="term">
                                <option>2022</option>
                                <option>2021</option>
                                <option>2020</option>
                            </select>
                        </div>
                    </div>
                    <br/>
                    <div className="row align-items-center mt-3">
                        <div className="col-md-4">
                            <label 
                                htmlFor="meetingname" 
                                className="col-form-label text-right">
                                Meeting Name:
                            </label>
                        </div>
                        <div className="col-md-7">
                            <select className="form-select form-control" id="meetingname">
                                <option>Meeting 1</option>
                                <option>Meeting 2</option>
                                <option>Meeting 3</option>
                            </select>
                        </div>
                    </div>
                    <br/>
                    <div className="row align-items-center mt-3">
                        <div className="col-md-4">
                            <label 
                                htmlFor="meetingdate" 
                                className="col-form-label text-right">
                                Meeting Date:
                            </label>
                        </div>
                        <div className="col-md-7">
                            <input type="text" className="form-control" id="meetingdate" placeholder="MM/DD/YYYY"/>
                        </div>
                    </div>
                    <br/>
                    <div className="row align-items-center mt-3">
                        <div className="col-md-4">
                            <label 
                                htmlFor="position" 
                                className="col-form-label text-right">
                                Position:
                            </label>
                        </div>
                        <div className="col-md-7">
                            <select className="form-select form-control" id="position">
                                <option>Position 1</option>
                                <option>Position 2</option>
                                <option>Position 3</option>
                            </select>
                        </div>
                    </div>
                    <br/>
                    <div className="row align-items-center mt-3">
                        <div className="col-md-4">
                            <label 
                                htmlFor="position" 
                                className="col-form-label text-right">
                                Performance:
                            </label>
                        </div>
                        <div className="col-md-7">
                            <select className="form-select form-control" id="performance">
                                <option>Performance 1</option>
                                <option>Performance 2</option>
                                <option>Performance 3</option>
                            </select>
                        </div>
                    </div>
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
                                htmlFor="attendance" 
                                className="col-form-label text-right">
                                Attendance:
                            </label>
                        </div>
                        <div className="col-md-7">
                            <select className="form-select form-control" id="attendance">
                                <option>Attendance 1</option>
                                <option>Attendance 2</option>
                                <option>Attendance 3</option>
                            </select>
                        </div>
                    </div>
                    <br></br>
                    <div className="row align-items-center mt-3">
                        <div className="col-md-3">
                            <label 
                                htmlFor="uploadproof"
                                className="col-form-label text-right"
                            >
                                Proof:
                            </label>
                        </div>
                        <div className="col-md-7">
                            <input type="file" className="form-control" id="uploadproof" />
                        </div>
                    </div>
                </div>
            </div>         
        </div>
    );
}

export default EventsAttendance;
