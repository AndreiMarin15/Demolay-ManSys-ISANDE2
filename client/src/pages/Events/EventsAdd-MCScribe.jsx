import { Link } from "react-router-dom";
import "../../styles/base.css";
import "../../styles/Events.css"
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

function EventsAdd () 
    {return(<div className="container">
        <br/>
        {/* Header */}
        <div className="d-flex justify-content-between align-items-center mb-3">
            <h1>Add Event </h1>
        </div>
        {/* Instruction */}
        <hr/>
        <div className="row">
        {/* Second Column */}
            <div className="col-md-5">
                <div className="row align-items-center mt-3">
                    <div className="col-md-4">
                        <label 
                            htmlFor="year" 
                            className="col-form-label text-right">
                            Year:
                        </label>
                    </div>
                    <div className="col-md-7">
                        <input type="text" className="form-control" id="year" placeholder="YYYY"/>
                    </div>
                </div>
                <br/>
                <div className="row align-items-center mt-3">
                    <div className="col-md-4">
                        <label 
                            htmlFor="term" 
                            className="col-form-label text-left">
                            Term:
                        </label>
                    </div>
                    <div className="col-md-7">
                        <select className="form-select form-control" id="nameofsport">
                            <option>Term A</option>
                            <option>Term B</option>
                        </select>
                    </div>
                </div>
                <br/>
                <div className="row align-items-center mt-3">
                    <div className="col-md-4">
                        <label 
                            htmlFor="meritbar" 
                            className="col-form-label text-right">
                            Merit Bar:
                        </label>
                    </div>
                    <div className="col-md-7">
                        <select className="form-select form-control" id="meritbar">
                            <option>Attendance</option>
                            <option>Athletic</option>
                            <option>Civil Service</option>
                            <option>Conclave</option>
                            <option>Fine Arts</option>
                            <option>Fundraising</option>
                            <option>Installing</option>
                            <option>Journalism</option>
                            <option>Masonic Service</option>
                            <option>Merit</option>
                            <option>Petitions</option>
                            <option>Religion</option>
                            <option>Ritual</option>
                            <option>Scholastics</option>
                            <option>Visitation</option>
                        </select>
                    </div>
                </div>
                <br />
            </div>
            {/* Vertical Line */}
            <div className="col-md-1">
                <div className="vl"></div>
            </div>
            {/* Second Column */}
            <div className="col-md-6"> 
                <div className="row align-items-center mt-3">
                    <div className="col-md-4">
                        <label 
                            htmlFor="eventname" 
                            className="col-form-label text-right">
                            Event Name:
                        </label>
                    </div>
                    <div className="col-md-7">
                        <input type="text" className="form-control" id="year" placeholder="Enter Event Name"/>
                    </div>
                </div>

                <div className="row align-items-center mt-3">
                    <div className="col-md-4">
                        <label 
                            htmlFor="eventdate" 
                            className="col-form-label text-right">
                            Event Date:
                        </label>
                    </div>
                    <div className="col-md-7">
                        <input type="text" className="form-control" id="year" placeholder="MM/DD/YYYY"/>
                    </div>
                </div>
            </div>
            {/* Buttons */}
            <div className="d-flex justify-content-between mt-4">
                <Link to="/turnoverTF1">
                    <button type="button" id="back-btn">
                        BACK
                    </button>
                </Link>
                <Link to="/turnoverTF3">
                    <button type="submit" form="submit" id="primary-btn" value="SUBMIT">
                        SUBMIT
                    </button>
                </Link>
            </div>
        </div>         
    </div>)}
export default EventsAdd


