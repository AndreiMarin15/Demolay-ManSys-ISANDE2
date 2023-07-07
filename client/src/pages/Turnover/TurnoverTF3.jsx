import { Link } from "react-router-dom";
import "../../styles/base.css";
import "../../styles/Turnover.css"
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";


function TurnoverTF3 () {

    return(
    <div className="container">
        <div className="d-flex justify-content-between align-items-center mb-3">
            <h1> Term and Financial Report </h1>
            <Link to="/eventsAthletic">
                <button type="submit" form="submit" id="primary-btn">
                    SAVE AND COMPLETE LATER
                </button>
            </Link>
        </div>
        <hr/>
        {/* Progress Line */}
        <div class="progress-line">
            <div class="progress-circle active"></div>
            <div class="progress-circle active"></div>
            <div class="progress-circle active"></div>
            <div class="progress-circle"></div>
            <div class="progress-circle"></div>
            <div class="progress-circle"></div>
        </div>
        <div class="progress-labels">
            <div class="progress-label">Chapter Information</div>
            <div class="progress-label">Membership Survey</div>
            <div class="progress-label">Supreme Council Fees</div>
            <div class="progress-label">Updated Directory of Active Members</div>
            <div class="progress-label">Financial Report</div>
            <div class="progress-label">Signatories</div>
        </div>
        <br />
        <div className="row">
            <h2> Unremmited Degree Fees of Initiatives </h2>
            {/* First Column */}
            <div className="col-md-6">
                <div className="row align-items-center mt-3">
                    <div className="col-md-6">
                        <label htmlFor="reportednotpaid" className="col-form-label text-left">
                            Reported this term but not paid:
                        </label>
                    </div>
                    <div className="col-md-6">
                        <input
                        type="text"
                        className="form-control"
                        value="3"
                        readOnly
                        />
                    </div>
                </div>

                <div className="row align-items-center mt-3">
                    <div className="col-md-6">
                        <label htmlFor="notreportednotpaid" className="col-form-label text-left">
                            Not reported and not paid this term:
                        </label>
                    </div>
                    <div className="col-md-6">
                        <input
                        type="text"
                        className="form-control"
                        value="1"
                        readOnly
                        />
                    </div>
                </div>

                <div className="row align-items-center mt-3">
                    <div className="col-md-6">
                        <label htmlFor="notreportednotpaidprior" className="col-form-label text-left">
                            Not reported and not paid prior this term:
                        </label>
                    </div>
                    <div className="col-md-6">
                        <input
                        type="text"
                        className="form-control"
                        value="5"
                        readOnly
                        />
                    </div>
                </div>
            </div>
            {/* Second Column */}
            <div className="col-md-6">
                <div className="row align-items-center mt-3">
                    <div className="col-md-7">
                        <label htmlFor="amount" className="col-form-label text-left">
                            Amount:
                        </label>
                    </div>
                    <div className="col-md-5">
                        <input
                        type="text"
                        className="form-control"
                        value="PHP 2,400"
                        readOnly
                        />
                    </div>
                </div>

                <div className="row align-items-center mt-3">
                    <div className="col-md-7">
                        <label htmlFor="amount" className="col-form-label text-left">
                            Amount:
                        </label>
                    </div>
                    <div className="col-md-5">
                        <input
                        type="text"
                        className="form-control"
                        value="PHP 800"
                        readOnly
                        />
                    </div>
                </div>

                <div className="row align-items-center mt-3">
                    <div className="col-md-7">
                        <label htmlFor="amount" className="col-form-label text-left">
                            Amount:
                        </label>
                    </div>
                    <div className="col-md-5">
                        <input
                        type="text"
                        className="form-control"
                        value="PHP 4,000"
                        readOnly
                        />
                    </div>
                </div>

                <div className="row align-items-center mt-3">
                    <div className="col-md-7">
                        <label htmlFor="totalamount" className="col-form-label text-left">
                            Total Amount Remmitted with this Report:
                        </label>
                    </div>
                    <div className="col-md-5">
                        <input
                        type="text"
                        className="form-control"
                        value="PHP 7,200"
                        readOnly
                        />
                    </div>
                </div>

                <div className="row align-items-center mt-3">
                    <div className="col-md-7">
                        <label 
                            htmlFor="uploadID"
                            className="col-form-label text-right"
                        >
                            Proof of Payment:
                        </label>
                    </div>
                    <div className="col-md-5">
                        <input type="file" className="form-control" id="uploadID" />
                    </div>
                </div>
            </div>
            {/* Button */}
            <div className="d-flex justify-content-between mt-4">
                <Link to="/appform1">
                    <button type="button" id="back-btn">
                        BACK
                    </button>
                </Link>
                <Link to="/appform1">
                    <button type="submit" form="submit" id="primary-btn" value="SUBMIT">
                        NEXT
                    </button>
                </Link>
            </div>
        </div>    
    </div>)
}

export default TurnoverTF3



