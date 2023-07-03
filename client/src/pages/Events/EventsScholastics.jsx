import { Link } from "react-router-dom";
import "../../styles/base.css";
import "../../styles/Events.css"

import { Component } from "react";

export default class EventsScholastics extends Component {
    render(){
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
                <h1>Add Event - Scholastics </h1>
                <Link to="/eventsScholastics">
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
                            <td className="no-wrap">School Year</td>
                            <td>academic year of school where the applicant is attending</td>
                        </tr>
                        <tr>
                            <td>Sem:</td>
                            <td>defines the semster within the School Year (if applicable)</td>
                        </tr>
                        <tr>
                            <td className="no-wrap">Name of School:</td>
                            <td>school of applicant</td>
                        </tr>
                        <tr>
                            <td className="no-wrap">Average Grade:</td>
                            <td>average value of the accumulated final grades earned during the school year</td>
                        </tr>
                    </table>
                </div>
            {/* Second Column */}
                <div className="col-md-4">
                    <div className="row align-items-center mt-3">
                        <div className="col-md-5">
                            <label 
                                htmlFor="sy" 
                                className="col-form-label text-right">
                                School Year:
                            </label>
                        </div>
                        <div className="col-md-6">
                            <input type="text" className="form-control" id="sy" placeholder="Enter School Year"/>
                        </div>
                    </div>
                    <br/>
                    <div className="row align-items-center mt-3">
                        <div className="col-md-5">
                            <label 
                                htmlFor="sem" 
                                className="col-form-label text-right">
                                Sem:
                            </label>
                        </div>
                        <div className="col-md-6">
                            <input type="text" className="form-control" id="sem" placeholder="Enter Sem"/>
                        </div>
                    </div>
                    <br/>
                    <div className="row align-items-center mt-3">
                        <div className="col-md-5">
                            <label 
                                htmlFor="nameofschool" 
                                className="col-form-label text-right">
                                Name of School:
                            </label>
                        </div>
                        <div className="col-md-6">
                            <input type="text" className="form-control" id="nameofschool" placeholder="Enter Name of School"/>
                        </div>
                    </div>
                    <br/>
                    <div className="row align-items-center mt-3">
                        <div className="col-md-5">
                            <label 
                                htmlFor="ave" 
                                className="col-form-label text-right">
                                Average Grade:
                            </label>
                        </div>
                        <div className="col-md-6">
                            <input type="text" className="form-control" id="ave" placeholder="Enter Average Grade"/>
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
}


