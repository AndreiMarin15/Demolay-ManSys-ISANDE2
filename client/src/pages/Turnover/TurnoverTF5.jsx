import { Link, useLocation, useNavigate } from "react-router-dom";
import "../../styles/base.css";
import "../../styles/Turnover.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

function TurnoverTF5() {
  const navigate = useNavigate();
  const location = useLocation();
  const prevPageProps = location.state;

  const [formData, setFormData] = useState(prevPageProps?.formData ?? {});

  const handleNextButtonClick = () => {
    navigate("/turnovertf6", {
      state: {
        userData: prevPageProps.userData,
        chapterData: prevPageProps.chapterData,
        turnoverID: prevPageProps.turnoverID,
        formData: formData,
      },
    });
  };

  const handleBackButtonClick = () => {
    navigate("/turnovertf2", {
      state: {
        userData: prevPageProps.userData,
        chapterData: prevPageProps.chapterData,
        turnoverID: prevPageProps.turnoverID,
        formData: formData,
      },
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
          <div className="progress-circle active"></div>
          <div className="progress-circle"></div>
        </div>
        <div className="progress-labels">
          <div className="progress-label">Chapter Information</div>
          <div className="progress-label">Membership Survey</div>
          <div className="progress-label">Financial Report</div>
          <div className="progress-label">Signatories</div>
        </div>
      </div>
      <br />
      <h2> Bank Account Details </h2>

      {/* First Column */}

      <div className="row">
        <div className="col-md-6">
          <div className="row align-items-center mt-3">
            <div className="col-md-4">
              <label htmlFor="bankname" className="col-form-label text-left">
                Name of Bank:
              </label>
            </div>
            <div className="col-md-8">
              <input
                type="text"
                className="form-control readonly-input"
                value="Banco De Oro"
                readOnly
              />
            </div>
          </div>

          <div className="row align-items-center mt-3">
            <div className="col-md-4">
              <label htmlFor="accountname" className="col-form-label text-left">
                Account Name:
              </label>
            </div>
            <div className="col-md-8">
              <input
                type="text"
                className="form-control readonly-input"
                value="Account Name"
                readOnly
              />
            </div>
          </div>

          <div className="row align-items-center mt-3">
            <div className="col-md-4">
              <label
                htmlFor="accountnumber"
                className="col-form-label text-left"
              >
                Account Number:
              </label>
            </div>
            <div className="col-md-8">
              <input
                type="text"
                className="form-control readonly-input"
                value="1087263840"
                readOnly
              />
            </div>
          </div>

          <div className="row align-items-center mt-3">
            <div className="col-md-4">
              <label htmlFor="cashinbank" className="col-form-label text-right">
                Cash in Bank:
              </label>
            </div>
            <div className="col-md-8">
              <input
                type="text"
                className="form-control"
                id="cashinbank"
                placeholder="Cash in Bank"
              />
            </div>
          </div>

          <div className="row align-items-center mt-3">
            <div className="col-md-4">
              <label htmlFor="ar" className="col-form-label text-right">
                Accounts Receivables:
              </label>
            </div>
            <div className="col-md-8">
              <input
                type="text"
                className="form-control"
                id="ar"
                placeholder="Accounts Receivables"
              />
            </div>
          </div>

          <div className="row align-items-center mt-3">
            <div className="col-md-4">
              <label htmlFor="ap" className="col-form-label text-right">
                Accounts Payables:
              </label>
            </div>
            <div className="col-md-8">
              <input
                type="text"
                className="form-control"
                id="ap"
                placeholder="Accounts Payables"
              />
            </div>
          </div>
        </div>

        {/* Second Column */}

        <div className="col-md-6">
          <div className="row align-items-center mt-3">
            <div className="col-md-4">
              <label htmlFor="fprojects" className="col-form-label text-left">
                Fundraising Projects:
              </label>
            </div>
            <div className="col-md-7">
              <select className="form-select form-control" id="fprojects">
                <option>Event One</option>
                <option>Event Two</option>
                <option>Event Three</option>
              </select>
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
          onClick={handleNextButtonClick}
        >
          NEXT
        </button>
      </div>
    </div>
  );
}

export default TurnoverTF5;
