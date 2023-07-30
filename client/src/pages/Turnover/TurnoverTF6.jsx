import { Link, useLocation, useNavigate } from "react-router-dom";
import "../../styles/base.css";
import "../../styles/Turnover.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

function TurnoverTF6() {
  const navigate = useNavigate();
  const location = useLocation();
  const prevPageProps = location.state;

  const [formData, setFormData] = useState(prevPageProps?.formData ?? {});

  const handleBackButtonClick = () => {
    navigate("/turnovertf5", {
      state: {
        userData: prevPageProps.userData,
        chapterData: prevPageProps.chapterData,
        turnoverID: prevPageProps.turnoverID,
        formData: formData,
      },
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        `http://localhost:5000/updateTF/${prevPageProps.formData._id}`,
        prevPageProps
      )
      .then((res) => {
        console.log("TermReport updated: " + res.data);

        navigate("/turnoverDashboardscribe");
      });
  };

  console.log(prevPageProps);

  return (
    <div className="container">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h1> Term and Financial Report </h1>
        <Link to="/turnoverTF5">
          <button type="submit" form="submit" className="primary-btn">
            SAVE AND COMPLETE LATER
          </button>
        </Link>
      </div>
      <hr />

      {/* Progress Line */}

      <div className="progress-container">
        <div className="progress-line">
          <div className="progress-circle "></div>
          <div className="progress-circle"></div>
          <div className="progress-circle"></div>
          <div className="progress-circle active"></div>
        </div>
        <div className="progress-labels">
          <div className="progress-label">Chapter Information</div>
          <div className="progress-label">Membership Survey</div>
          <div className="progress-label">Financial Report</div>
          <div className="progress-label">Signatories</div>
        </div>
      </div>
      <br />
      <div className="row">
        {/* First Column */}

        <div className="col-md-4">
          <div className="row align-items-center mt-3">
            <div className="col-md-6">
              <label
                htmlFor="mastercouncilor"
                className="col-form-label text-left"
              >
                Master Councilor:
              </label>
            </div>
            <div className="col-md-6">
              <input
                type="text"
                className="form-control readonly-input"
                value="Name"
                readOnly
              />
            </div>
          </div>

          <div className="row align-items-center mt-3">
            <div className="col-md-6">
              <label
                htmlFor="chapterscribe"
                className="col-form-label text-left"
              >
                Chapter Scribe:
              </label>
            </div>
            <div className="col-md-6">
              <input
                type="text"
                className="form-control readonly-input"
                value="Name"
                readOnly
              />
            </div>
          </div>

          <br />

          <div className="row align-items-center mt-3">
            <div className="col-md-6">
              <label
                htmlFor="advisorycouncil"
                className="col-form-label text-left"
              >
                Advisory Council Chairman:
              </label>
            </div>
            <div className="col-md-6">
              <input
                type="text"
                className="form-control readonly-input"
                value="Name"
                readOnly
              />
            </div>
          </div>

          <div className="row align-items-center mt-3">
            <div className="col-md-6">
              <label
                htmlFor="chapteradvisor"
                className="col-form-label text-left"
              >
                Chapter Advisor:
              </label>
            </div>
            <div className="col-md-6">
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
                htmlFor="statuscouncilor"
                className="col-form-label text-left"
              >
                Status:
              </label>
            </div>
            <div className="col-md-8">
              <input
                type="text"
                className="form-control readonly-input"
                value="Not applicable"
                readOnly
              />
            </div>
          </div>

          <div className="row align-items-center mt-3">
            <div className="col-md-4">
              <label
                htmlFor="statusscribe"
                className="col-form-label text-left"
              >
                Status:
              </label>
            </div>
            <div className="col-md-8">
              <input
                type="text"
                className="form-control readonly-input"
                value="Not applicable"
                readOnly
              />
            </div>
          </div>

          <br />

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
                value="Not applicable"
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
                value="Not applicable"
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
                htmlFor="datesignedcouncilor"
                className="col-form-label text-left"
              >
                Date Signed:
              </label>
            </div>
            <div className="col-md-8">
              <input
                type="text"
                className="form-control readonly-input"
                value="Date"
                readOnly
              />
            </div>
          </div>

          <div className="row align-items-center mt-3">
            <div className="col-md-4">
              <label
                htmlFor="datesignedscribe"
                className="col-form-label text-left"
              >
                Date Signed:
              </label>
            </div>
            <div className="col-md-8">
              <input
                type="text"
                className="form-control readonly-input"
                value="Date"
                readOnly
              />
            </div>
          </div>

          <br />

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
                value="Date"
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
                value="Date"
                readOnly
              />
            </div>
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
          onClick={onSubmit}
        >
          SEND
        </button>
      </div>
    </div>
  );
}

export default TurnoverTF6;
