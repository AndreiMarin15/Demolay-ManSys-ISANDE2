import { Link, useLocation, useNavigate } from "react-router-dom";
import "../../styles/base.css";
import "../../styles/Turnover.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

function TurnoverTF2() {
  const navigate = useNavigate();
  const location = useLocation();
  const prevPageProps = location.state;

  const [formData, setFormData] = useState(prevPageProps?.formData ?? null);

  const onChange = (e) => {
    setFormData((prev) => {
      let helper = { ...prev };

      helper[`${e.target.id}`] = e.target.value;

      return helper;
    });
    console.log(formData);
  };

  const handleNextButtonClick = () => {
    navigate("/turnovertf5", {
      state: {
        userData: prevPageProps.userData,
        chapterData: prevPageProps.chapterData,
        form1ID: prevPageProps.form1ID,
        formData: formData,
      },
    });
  };

  const handleBackButtonClick = () => {
    navigate("/turnovertf1", {
      state: {
        userData: prevPageProps.userData,
        chapterData: prevPageProps.chapterData,
        form1ID: prevPageProps.form1ID,
        formData: formData,
      },
    });
  };

  console.log(prevPageProps);
  return (
    <div className="container">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h1> Term and Financial Report </h1>
        <Link to="/turnoverTF2">
          <button type="submit" form="submit" className="primary-btn">
            SAVE AND COMPLETE LATER
          </button>
        </Link>
      </div>
      <hr />

      {/* Progress Line */}

      <div class="progress-line">
        <div class="progress-circle active"></div>
        <div class="progress-circle active"></div>
        <div class="progress-circle"></div>
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
        {/* First Column */}

        <div className="col-md-6">
          <div className="row align-items-center mt-3">
            <div className="col-md-4">
              <label
                htmlFor="totalmembers"
                className="col-form-label text-left"
              >
                Total Members:
              </label>
            </div>
            <div className="col-md-8">
              <input
                type="text"
                className="form-control readonly-input"
                value={formData.totalMembers}
                readOnly
              />
            </div>
          </div>

          <div className="row align-items-center mt-3">
            <div className="col-md-4">
              <label
                htmlFor="initiatedmembers"
                className="col-form-label text-left"
              >
                Initiated Members:
              </label>
            </div>
            <div className="col-md-8">
              <input
                type="text"
                className="form-control readonly-input"
                value={formData.initiated}
                readOnly
              />
            </div>
          </div>

          <div className="row align-items-center mt-3">
            <div className="col-md-4">
              <label
                htmlFor="affiliatedmembers"
                className="col-form-label text-left"
              >
                Affiliated Members:
              </label>
            </div>
            <div className="col-md-8">
              <input
                type="text"
                className="form-control readonly-input"
                value={formData.affiliated}
                readOnly
              />
            </div>
          </div>

          <div className="row align-items-center mt-3">
            <div className="col-md-4">
              <label
                htmlFor="membershipgain"
                className="col-form-label text-left"
              >
                Total Membership Gains:
              </label>
            </div>
            <div className="col-md-8">
              <input
                type="text"
                className="form-control readonly-input"
                value={formData.initiated + formData.affiliated}
                readOnly
              />
            </div>
          </div>

          <div className="row align-items-center mt-3">
            <div className="col-md-4">
              <label
                htmlFor="reachedmajority"
                className="col-form-label text-left"
              >
                Reached Majority:
              </label>
            </div>
            <div className="col-md-8">
              <input
                type="text"
                className="form-control readonly-input"
                value={formData.majority}
                readOnly
              />
            </div>
          </div>

          <div className="row align-items-center mt-3">
            <div className="col-md-4">
              <label
                htmlFor="transferredmembers"
                className="col-form-label text-left"
              >
                Transferred Members:
              </label>
            </div>
            <div className="col-md-8">
              <input
                type="text"
                className="form-control readonly-input"
                value={formData.transferred}
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
                className="form-control readonly-input"
                value={formData.deaths}
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
                className="form-control readonly-input"
                value={formData.resigned}
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
                className="form-control readonly-input"
                value={formData.expelled}
                readOnly
              />
            </div>
          </div>

          <div className="row align-items-center mt-3">
            <div className="col-md-5">
              <label
                htmlFor="membershiplosses"
                className="col-form-label text-left"
              >
                Total Membership Losses:
              </label>
            </div>
            <div className="col-md-7">
              <input
                type="text"
                className="form-control readonly-input"
                value={
                  formData.majority +
                  formData.transferred +
                  formData.resigned +
                  formData.deaths +
                  formData.expelled
                }
                readOnly
              />
            </div>
          </div>

          <div className="row align-items-center mt-3">
            <div className="col-md-5">
              <label
                htmlFor="membershiptermend"
                className="col-form-label text-left"
              >
                Total Membership as of Term-end:
              </label>
            </div>
            <div className="col-md-7">
              <input
                type="text"
                className="form-control readonly-input"
                value="59"
                readOnly
              />
            </div>
          </div>

          <div className="row align-items-center mt-3">
            <div className="col-md-5">
              <label
                htmlFor="transferredmembers"
                className="col-form-label text-left"
              >
                Transferred Members:
              </label>
            </div>
            <div className="col-md-7">
              <input
                type="text"
                className="form-control readonlyinput"
                value={
                  formData.totalMembers +
                  formData.totalGains -
                  formData.totalLoss
                }
                readOnly
              />
            </div>
          </div>
        </div>

        {/* Button */}

        <div className="d-flex justify-content-between mt-4">
          <button type="button" id="back-btn" onClick={handleBackButtonClick}>
            BACK
          </button>
          <button
            type="submit"
            form="submit"
            id="primary-btn"
            value="SUBMIT"
            onClick={handleNextButtonClick}
          >
            NEXT
          </button>
        </div>
      </div>
    </div>
  );
}

export default TurnoverTF2;
