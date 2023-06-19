import { Link } from "react-router-dom";
import "../styles/base.css";
import "../styles/EventsAttendance.css"

function EventsAttendance() {
    return (
        <div className="container">
            <h1>Add Event</h1>
            <hr/>
            <div className="row">
                <div className="col-md-5">
                    <table>
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

                <div className="col-md-7">
                    <div className="row align-items-center mt-3">
                        <div className="col-md-3">
                            <label 
                                htmlFor="term" 
                                className="col-form-label text-left">
                                Term:
                            </label>
                        </div>
                        <div className="col-md-9">
                            <select className="form-select form-control" id="term">
                                <option>2022</option>
                                <option>2021</option>
                                <option>2020</option>
                            </select>
                        </div>
                    </div>
                    <br/>
                    <div className="row align-items-center mt-3">
                        <div className="col-md-3">
                            <label 
                                htmlFor="meetingname" 
                                className="col-form-label text-right">
                                Meeting Name:
                            </label>
                        </div>
                        <div className="col-md-9">
                            <select className="form-select form-control" id="meetingName">
                                <option>Meeting 1</option>
                                <option>Meeting 2</option>
                                <option>Meeting 3</option>
                            </select>
                        </div>
                    </div>
                    <br/>
                    <div className="row align-items-center mt-3">
                        <div className="col-md-3">
                            <label 
                                htmlFor="meetingdate" 
                                className="col-form-label text-right">
                                Meeting Date:
                            </label>
                        </div>
                        <div className="col-md-9">
                            <input type="text" className="form-control" id="meetingDate" placeholder="MM/DD/YYYY"/>
                        </div>
                    </div>
                    <br/>
                    <div className="row align-items-center mt-3">
                        <div className="col-md-3">
                            <label 
                                htmlFor="position" 
                                className="col-form-label text-right">
                                Position:
                            </label>
                        </div>
                        <div className="col-md-9">
                            <select className="form-select form-control" id="position">
                                <option>Position 1</option>
                                <option>Position 2</option>
                                <option>Position 3</option>
                            </select>
                        </div>
                    </div>
                    <br/>
                    <div className="row align-items-center mt-3">
                        <div className="col-md-3">
                            <label 
                                htmlFor="position" 
                                className="col-form-label text-right">
                                Performance:
                            </label>
                        </div>
                        <div className="col-md-9">
                            <select className="form-select form-control" id="performance">
                                <option>Performance 1</option>
                                <option>Performance 2</option>
                                <option>Performance 3</option>
                            </select>
                        </div>
                    </div>
                    <br/>
                    <div className="row align-items-center mt-3">
                        <div className="col-md-3">
                            <label 
                                htmlFor="uploadID"
                                className="col-form-label text-right"
                            >
                                Proof:
                            </label>
                        </div>
                        <div className="col-md-9">
                            <input type="file" className="form-control" id="uploadID" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EventsAttendance;
