import { Link } from "react-router-dom";
import "../../styles/base.css";
import "../../styles/Turnover.css"
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";


function TurnoverTF2 () {

    return(
    <div className="container">
        <h1> Term & Financial Report </h1>
        <hr/>
        <div className="row">
            {/* First Column */}
            <div className="col-md-6">
                <div className="row align-items-center mt-3">
                    <div className="col-md-4">
                        <label htmlFor="totalmembers" className="col-form-label text-left">
                            Total Members:
                        </label>
                    </div>
                    <div className="col-md-8">
                        <input
                        type="text"
                        className="form-control"
                        value="53"
                        readOnly
                        />
                    </div>
                </div>

                <div className="row align-items-center mt-3">
                    <div className="col-md-4">
                        <label htmlFor="initiatedmembers" className="col-form-label text-left">
                            Initiated Members:
                        </label>
                    </div>
                    <div className="col-md-8">
                        <input
                        type="text"
                        className="form-control"
                        value="13"
                        readOnly
                        />
                    </div>
                </div>

                <div className="row align-items-center mt-3">
                    <div className="col-md-4">
                        <label htmlFor="affiliatedmembers" className="col-form-label text-left">
                            Affiliated Members:
                        </label>
                    </div>
                    <div className="col-md-8">
                        <input
                        type="text"
                        className="form-control"
                        value="3"
                        readOnly
                        />
                    </div>
                </div>

                <div className="row align-items-center mt-3">
                    <div className="col-md-4">
                        <label htmlFor="membershipgain" className="col-form-label text-left">
                            Total Membership Gains:
                        </label>
                    </div>
                    <div className="col-md-8">
                        <input
                        type="text"
                        className="form-control"
                        value="16"
                        readOnly
                        />
                    </div>
                </div>

                <div className="row align-items-center mt-3">
                    <div className="col-md-4">
                        <label htmlFor="reachedmajority" className="col-form-label text-left">
                            Reached Majority:
                        </label>
                    </div>
                    <div className="col-md-8">
                        <input
                        type="text"
                        className="form-control"
                        value="5"
                        readOnly
                        />
                    </div>
                </div>

                <div className="row align-items-center mt-3">
                    <div className="col-md-4">
                        <label htmlFor="transferredmembers" className="col-form-label text-left">
                            Transferred Members:
                        </label>
                    </div>
                    <div className="col-md-8">
                        <input
                        type="text"
                        className="form-control"
                        value="1"
                        readOnly
                        />
                    </div>
                </div>
            </div>
            {/* Second Column */}
            <div className="col-md-6">
                <div className="row align-items-center mt-3">
                    <div className="col-md-5">
                        <label htmlFor="deaths" className="col-form-label text-left">
                            Deaths:
                        </label>
                    </div>
                    <div className="col-md-7">
                        <input
                        type="text"
                        className="form-control"
                        value="0"
                        readOnly
                        />
                    </div>
                </div>

                <div className="row align-items-center mt-3">
                    <div className="col-md-5">
                        <label htmlFor="resigned" className="col-form-label text-left">
                            Resigned:
                        </label>
                    </div>
                    <div className="col-md-7">
                        <input
                        type="text"
                        className="form-control"
                        value="2"
                        readOnly
                        />
                    </div>
                </div>

                <div className="row align-items-center mt-3">
                    <div className="col-md-5">
                        <label htmlFor="expelled" className="col-form-label text-left">
                            Expelled:
                        </label>
                    </div>
                    <div className="col-md-7">
                        <input
                        type="text"
                        className="form-control"
                        value="2"
                        readOnly
                        />
                    </div>
                </div>

                <div className="row align-items-center mt-3">
                    <div className="col-md-5">
                        <label htmlFor="membershiplosses" className="col-form-label text-left">
                            Total Membership Losses:
                        </label>
                    </div>
                    <div className="col-md-7">
                        <input
                        type="text"
                        className="form-control"
                        value="10"
                        readOnly
                        />
                    </div>
                </div>

                <div className="row align-items-center mt-3">
                    <div className="col-md-5">
                        <label htmlFor="membershiptermend" className="col-form-label text-left">
                            Total Membership as of Term-end:
                        </label>
                    </div>
                    <div className="col-md-7">
                        <input
                        type="text"
                        className="form-control"
                        value="59"
                        readOnly
                        />
                    </div>
                </div>

                <div className="row align-items-center mt-3">
                    <div className="col-md-5">
                        <label htmlFor="transferredmembers" className="col-form-label text-left">
                            Transferred Members:
                        </label>
                    </div>
                    <div className="col-md-7">
                        <input
                        type="text"
                        className="form-control"
                        value="1"
                        readOnly
                        />
                    </div>
                </div>
                {/* Next Button */}
                <div className="d-flex justify-content-end">
                    <Link to="/appform1">
                    <button type="submit" form="submit" id="primary-btn" value="SUBMIT">
                        NEXT
                    </button>
                    </Link>
                </div>
            </div>
        </div>    
    </div>)
}

export default TurnoverTF2



