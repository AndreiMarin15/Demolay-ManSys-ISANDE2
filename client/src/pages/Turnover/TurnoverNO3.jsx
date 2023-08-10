import { Link } from "react-router-dom";
import "../../styles/base.css";
import "../../styles/Turnover.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

function TurnoverNO3() {
  return (
    <div className="container">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h1> New Officers Report (Form 15) </h1>
      </div>

      <hr />

      {/* Progress Line */}

      <div class="progress-line-3">
        <div class="progress-circle-3"></div>
        <div class="progress-circle-3 active"></div>
        <div class="progress-circle-3"></div>
      </div>
      <div class="progress-labels-3">
        <div class="progress-label-3">Chapter Information</div>
        <div class="progress-label-3">List of Officers</div>
        <div class="progress-label-3">Signatories of Certification</div>
      </div>

      <br />

      <div className="row">
        {/* First Column */}

        <div className="col-md-6">
          <div className="row align-items-center mt-3">
            <div className="col-md-4">
              <label
                htmlFor="standardbearer"
                className="col-form-label text-left"
              >
                Standard Bearer:
              </label>
            </div>
            <div className="col-md-8">
              <input type="text" placeholder="Search" />
              <button style={{ border: "none", background: "none" }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path
                    fill="currentColor"
                    d="M15 14l6 6-2 2-6-6a7.94 7.94 0 111.38-1.37zM8 14a6 6 0 100-12 6 6 0 000 12z"
                  />
                </svg>
              </button>
              `
            </div>
          </div>

          <div className="row align-items-center mt-3">
            <div className="col-md-4">
              <label
                htmlFor="1stpreceptor"
                className="col-form-label text-left"
              >
                1st Preceptor:
              </label>
            </div>
            <div className="col-md-8">
              <input type="text" placeholder="Search" />
              <button style={{ border: "none", background: "none" }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path
                    fill="currentColor"
                    d="M15 14l6 6-2 2-6-6a7.94 7.94 0 111.38-1.37zM8 14a6 6 0 100-12 6 6 0 000 12z"
                  />
                </svg>
              </button>
              `
            </div>
          </div>

          <div className="row align-items-center mt-3">
            <div className="col-md-4">
              <label
                htmlFor="2ndpreceptor"
                className="col-form-label text-left"
              >
                2nd Preceptor:
              </label>
            </div>
            <div className="col-md-8">
              <input type="text" placeholder="Search" />
              <button style={{ border: "none", background: "none" }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path
                    fill="currentColor"
                    d="M15 14l6 6-2 2-6-6a7.94 7.94 0 111.38-1.37zM8 14a6 6 0 100-12 6 6 0 000 12z"
                  />
                </svg>
              </button>
              `
            </div>
          </div>

          <div className="row align-items-center mt-3">
            <div className="col-md-4">
              <label
                htmlFor="3rdpreceptor"
                className="col-form-label text-left"
              >
                3rd Preceptor:
              </label>
            </div>
            <div className="col-md-8">
              <input type="text" placeholder="Search" />
              <button style={{ border: "none", background: "none" }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path
                    fill="currentColor"
                    d="M15 14l6 6-2 2-6-6a7.94 7.94 0 111.38-1.37zM8 14a6 6 0 100-12 6 6 0 000 12z"
                  />
                </svg>
              </button>
              `
            </div>
          </div>

          <div className="row align-items-center mt-3">
            <div className="col-md-4">
              <label
                htmlFor="4thpreceptor"
                className="col-form-label text-left"
              >
                4th Preceptor:
              </label>
            </div>
            <div className="col-md-8">
              <input type="text" placeholder="Search" />
              <button style={{ border: "none", background: "none" }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path
                    fill="currentColor"
                    d="M15 14l6 6-2 2-6-6a7.94 7.94 0 111.38-1.37zM8 14a6 6 0 100-12 6 6 0 000 12z"
                  />
                </svg>
              </button>
              `
            </div>
          </div>
        </div>

        {/* Second Column */}

        <div className="col-md-6">
          <div className="row align-items-center mt-3">
            <div className="col-md-4">
              <label
                htmlFor="5thpreceptor"
                className="col-form-label text-left"
              >
                5th Preceptor:
              </label>
            </div>
            <div className="col-md-8">
              <input type="text" placeholder="Search" />
              <button style={{ border: "none", background: "none" }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path
                    fill="currentColor"
                    d="M15 14l6 6-2 2-6-6a7.94 7.94 0 111.38-1.37zM8 14a6 6 0 100-12 6 6 0 000 12z"
                  />
                </svg>
              </button>
              `
            </div>
          </div>

          <div className="row align-items-center mt-3">
            <div className="col-md-4">
              <label
                htmlFor="6thpreceptor"
                className="col-form-label text-left"
              >
                6th Preceptor:
              </label>
            </div>
            <div className="col-md-8">
              <input type="text" placeholder="Search" />
              <button style={{ border: "none", background: "none" }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path
                    fill="currentColor"
                    d="M15 14l6 6-2 2-6-6a7.94 7.94 0 111.38-1.37zM8 14a6 6 0 100-12 6 6 0 000 12z"
                  />
                </svg>
              </button>
              `
            </div>
          </div>

          <div className="row align-items-center mt-3">
            <div className="col-md-4">
              <label
                htmlFor="7thpreceptor"
                className="col-form-label text-left"
              >
                7th Preceptor:
              </label>
            </div>
            <div className="col-md-8">
              <input type="text" placeholder="Search" />
              <button style={{ border: "none", background: "none" }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path
                    fill="currentColor"
                    d="M15 14l6 6-2 2-6-6a7.94 7.94 0 111.38-1.37zM8 14a6 6 0 100-12 6 6 0 000 12z"
                  />
                </svg>
              </button>
              `
            </div>
          </div>

          <div className="row align-items-center mt-3">
            <div className="col-md-4">
              <label htmlFor="sentinel" className="col-form-label text-left">
                Sentinel:
              </label>
            </div>
            <div className="col-md-8">
              <input type="text" placeholder="Search" />
              <button style={{ border: "none", background: "none" }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path
                    fill="currentColor"
                    d="M15 14l6 6-2 2-6-6a7.94 7.94 0 111.38-1.37zM8 14a6 6 0 100-12 6 6 0 000 12z"
                  />
                </svg>
              </button>
              `
            </div>
          </div>
        </div>

        {/* Buttons */}

        <div className="d-flex justify-content-between mt-4">
          <Link to="/turnoverNO2">
            <button type="button" className="primary-btn">
              BACK
            </button>
          </Link>
          <Link to="/turnoverNO4">
            <button
              type="submit"
              form="submit"
              className="primary-btn"
              value="SUBMIT"
            >
              NEXT
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default TurnoverNO3;
