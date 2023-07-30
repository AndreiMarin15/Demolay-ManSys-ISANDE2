import { Link, useLocation, useNavigate } from "react-router-dom";
import "../../styles/base.css";
import "../../styles/Turnover.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

function TurnoverNO4() {
  const location = useLocation();
  const navigate = useNavigate();
  const prevPageProps = location.state;

  const onSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        `http://localhost:5000/updateF15/${prevPageProps.form15ID}`,
        prevPageProps
      )
      .then((res) => {
        console.log("form15ID: " + res.data);

        const turnoverUpdate = {
          chapterID: prevPageProps.userData.chapterID,
          termID: prevPageProps.formData.year + prevPageProps.formData.term,
          fieldToUpdate: "form15ID",
          updateValue: res.data,
        };

        axios
          .post("http://localhost:5000/updateTurnover", turnoverUpdate)
          .then((res1) => {
            navigate("/turnoverDashboardscribe", {
              state: {
                turnoverReports: res1.data,
              },
            });
          });
      });
  };

  const handleBackButtonClick = () => {
    navigate("/turnoverno2", {
      state: prevPageProps
        ? {
            ...prevPageProps,
          }
        : {},
    });
  };

  console.log(prevPageProps);

  return (
    <div className="container">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h1> New Officers Report (Form 15) </h1>
        <Link to="/turnoverTF1">
          <button type="submit" form="submit" className="primary-btn">
            SAVE AND COMPLETE LATER
          </button>
        </Link>
      </div>

      <hr />

      <div className="text-center mb-3">
        <p>
          We hereby certify that the information contained in this report is
          accurate for the Members of the Stated Meeting of the chapter. The
          officers were duly qualified, elected, and installed on the dates
          above pursuant to the relevant provisions of the STATUES of the
          SUPREME COUNCIL ORDER of DEMOLAY of the REPUBLIC of the Philippines.
        </p>
      </div>

      <br />

      <div className="row">
        {/* First Column */}

        <div className="col-md-4">
          <div className="row align-items-center mt-3">
            <div className="col-md-4">
              <label
                htmlFor="chairmanofadvisory"
                className="col-form-label text-left"
              >
                Chairman of Advisory:
              </label>
            </div>
            <div className="col-md-8">
              <input
                type="text"
                className="form-control readonly-input"
                value="Name"
                readOnly
              />
            </div>
          </div>

          <div className="row align-items-center mt-3">
            <div className="col-md-4">
              <label
                htmlFor="chapteradvisor"
                className="col-form-label text-left"
              >
                Chapter Advisor:
              </label>
            </div>
            <div className="col-md-8">
              <input
                type="text"
                className="form-control readonly-input"
                value="Name"
                readOnly
              />
            </div>
          </div>
        </div>

        {/* Second Column */}

        <div className="col-md-4">
          <div className="row align-items-center mt-3">
            <div className="col-md-4">
              <label
                htmlFor="statuschairman"
                className="col-form-label text-left"
              >
                Status:
              </label>
            </div>
            <div className="col-md-8">
              <input
                type="text"
                className="form-control readonly-input"
                value="Name"
                readOnly
              />
            </div>
          </div>

          <div className="row align-items-center mt-3">
            <div className="col-md-4">
              <label
                htmlFor="statusadvisor"
                className="col-form-label text-left"
              >
                Status:
              </label>
            </div>
            <div className="col-md-8">
              <input
                type="text"
                className="form-control readonly-input"
                value="Name"
                readOnly
              />
            </div>
          </div>
        </div>

        {/* Third Column */}

        <div className="col-md-4">
          <div className="row align-items-center mt-3">
            <div className="col-md-4">
              <label
                htmlFor="datesignedchairman"
                className="col-form-label text-left"
              >
                Date Signed:
              </label>
            </div>
            <div className="col-md-8">
              <input
                type="text"
                className="form-control readonly-input"
                value="Name"
                readOnly
              />
            </div>
          </div>

          <div className="row align-items-center mt-3">
            <div className="col-md-4">
              <label
                htmlFor="datesignedadvisor"
                className="col-form-label text-left"
              >
                Date Signed:
              </label>
            </div>
            <div className="col-md-8">
              <input
                type="text"
                className="form-control readonly-input"
                value="Name"
                readOnly
              />
            </div>
          </div>
        </div>

        {/* Buttons */}

        <div className="d-flex justify-content-between mt-4">
          <button
            type="button"
            className="primary-btn"
            onClick={handleBackButtonClick}
          >
            BACK
          </button>
          <button
            type="submit"
            form="submit"
            className="primary-btn"
            value="SUBMIT"
            onClick={onSubmit}
          >
            SEND
          </button>
        </div>
      </div>
    </div>
  );
}

export default TurnoverNO4;
