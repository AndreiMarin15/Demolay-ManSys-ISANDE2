import { Link } from "react-router-dom";
import "../styles/base.css";
import "../styles/appform5.css";
import { Component } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

function Appform5 () {
  let { applicationId } = useParams();

  const [formData, setFormData] = useState({
    applicantId: "",
    applicantPassword: ""
  })

  // TODO: Generate applicant ID
  // 1. UseEffect to check the most recent applicantID
  // 1.a. If there is no applicant ID, generate one with the format
  // 1.b. If there is an existing applicant ID, add one
  // 2. Assign the created ID to the disabled input

  return (
      <div className="container container-fluid ">
      <div className="row">
        <div className="col-md-12">
          <h1>Application Submitted!</h1>
        </div>
      </div>

      <hr />
      <div className="row">
        <div className="col-md-12 conf-message">
          Your application has been submitted! <br />
          Please use your assigned Applicant ID below, and set a password for
          your login credentials to see your application results once available.
        </div>
      </div>

      <form className="g-2">
        <div className="row">
          <div className="col-md-4">
            <div className="row mb-3">
              <label
                for="inputEmail"
                className="col-md-4 col-form-label text-right"
              >
                Applicant ID
              </label>
              <input
                class="form-control"
                id="disabledInput"
                type="text"
                placeholder="Disabled input here..."
                disabled
              />{" "}
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-4">
            <div className="row mb-3">
              <label
                for="inputEmail"
                className="col-md-4 col-form-label text-right"
              >
                Set Password
              </label>
              <input
                class="form-control"
                id="disabledInput"
                type="text"
                placeholder="Password"
              />{" "}
            </div>
          </div>
        </div>

        <div className="col-12 sub-btn">
          <Link to="/">
            <button type="submit" className="btn btn-primary">
              SUBMIT
            </button>
          </Link>
        </div>
      </form>
      
    </div>
    )
}

export default Appform5;
