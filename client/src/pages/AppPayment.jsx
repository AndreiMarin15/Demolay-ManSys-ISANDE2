import { Link } from "react-router-dom";
import "../styles/base.css";
import "../styles/apppayment.css";

import { Component } from "react";

export default class AppPayment extends Component {
  render() {
    return (
      /* NEED TO CHANGE HEADER -- ADD Log Out AND My Application BUTTONS */
      <div className="container container-fluid ">
        <div className="row">
          <div className="col-md-12">
            <h1>Membership Payment</h1>
          </div>
        </div>
        <hr />
        <form className="g-2">
          <div className="row">
            <div className="col-md-3">
              <div className="row mb-3">
                <label
                  for="appID"
                  className="col-md-4 col-form-label text-right"
                >
                  Applicant ID:
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="appID"
                  placeholder="Applicant ID"
                />
              </div>
            </div>

            <div className="col-md-3">
              <div className="row mb-3">
                <label
                  for="inputLast"
                  className="col-md-4 col-form-label text-right"
                >
                  Last Name:
                </label>
                <input type="text" className="form-control" id="inputLast" />
              </div>
            </div>

            <div className="col-md-3">
              <div className="row mb-3">
                <label
                  for="inputFirst"
                  className="col-md-4 col-form-label text-right"
                >
                  First Name:
                </label>
                <input type="text" className="form-control" id="inputFirst" />
              </div>
            </div>

            <div className="col-md-3">
              <div className="row mb-3">
                <label
                  for="inputMiddle"
                  className="col-md-4 col-form-label text-right"
                >
                  Middle Name:
                </label>
                <input type="text" className="form-control" id="inputMiddle" />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-3">
              <div className="row mb-3">
                <label
                  for="inputBirthday"
                  className="col-md-4 col-form-label text-right"
                >
                  Birthday:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputBirthday"
                  placeholder="Birthday"
                />
              </div>
            </div>

            <div className="col-md-4">
              <div className="row mb-3">
                <label
                  for="inputEmail"
                  className="col-md-4 col-form-label text-right"
                >
                  Email:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputEmail"
                  placeholder="Email"
                />
              </div>
            </div>

            <div className="col-md-5">
              <div className="row mb-3">
                <label
                  for="inputSigner"
                  className="col-md-4 col-form-label text-right"
                >
                  First-line Signer:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputSigner"
                  placeholder="First-line signer"
                />
              </div>
            </div>
          </div>
        </form>

        <br />
        <hr />

        <div className="row">
          <div className="col-md-6">
            <p id="paymentdetails">
              <b>Payment Details</b>
              <br /> <br />
              <b>Bank Name and Branch:</b> Bank of the Philippine Islands (BPI){" "}
              <br />
              <b>Branch:</b> Padre Faura <br />
              <b>Account Name:</b> Supreme Council Order of DeMolay <br />
              <b>Account Number:</b> 4981 0018 48
            </p>
          </div>

          <div className="col-md-6">
            <label
              for="uploadProof"
              className="col-md-4 col-form-label text-right"
            >
              Proof of Payment:
            </label>
            <input type="file" className="form-control" id="uploadProof" />
          </div>
        </div>

        <div className="col-12 text-center">
          <Link to="/">
            <button type="submit" className="btn btn-primary">
              SUBMIT
            </button>
          </Link>
        </div>
      </div>
    );
  }
}
