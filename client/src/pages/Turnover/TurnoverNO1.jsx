import { Link, useLocation, useNavigate } from "react-router-dom";
import "../../styles/base.css";
import "../../styles/Turnover.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

function TurnoverNO1() {
  const location = useLocation();
  const navigate = useNavigate();
  const prevPageProps = location.state;

  const [rows, setRows] = useState(1);

  const handleAddRow = () => {
    setRows(rows + 1);
  };

  const onChange = (e) => {
    setFormData((prev) => {
      let helper = { ...prev };

      helper[`${e.target.id}`] = e.target.value;

      return helper;
    });
  };

  const handleNextButtonClick = () => {
    navigate("/turnoverno2", {
      state: {
        userData: prevPageProps.userData,
        chapterData: prevPageProps.chapterData,
        form15ID: prevPageProps.form15ID,
        formData: prevPageProps.formData ? prevPageProps.formData : formData,
      },
    });
  };

  const [formData, setFormData] = useState({
    term: "",
    year: "",
    electDate: "",
    installDate: "",
    officers: [],
  });

  useEffect(() => {
    console.log(prevPageProps);
    if (prevPageProps.form15ID) {
      axios
        .get(`http://localhost:5000/getForm15/${prevPageProps.form15ID}`)
        .then((res1) => {
          setFormData({
            ...formData,
            term: res1.data.term,
            year: res1.data.year,
            electDate: new Date(res1.data.electDate).toLocaleDateString(
              "en-US",
              {
                year: "numeric",
                month: "long",
                day: "numeric",
              }
            ),
            installDate: new Date(res1.data.installDate).toLocaleDateString(
              "en-US",
              {
                year: "numeric",
                month: "long",
                day: "numeric",
              }
            ),
            officers: res1.data.officers,
          });
        });
    }
  }, []);

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

      {/* Progress Line */}
      <div className="progress-line-3">
        <div className="progress-circle-3 active"></div>
        <div className="progress-circle-3"></div>
        <div className="progress-circle-3"></div>
      </div>
      <div className="progress-labels-3">
        <div className="progress-label-3">Chapter Information</div>
        <div className="progress-label-3">List of Officers</div>
        <div className="progress-label-3">Signatories of Certification</div>
      </div>

      <br />

      <div className="text-center mb-3">
        <p>
          The report covers Term <u> A </u> of DeMolay Year <u> 2023 </u>{" "}
          beginning <u> January 7, 2023 </u> and ending <u> August 5, 2023 </u>
        </p>
      </div>

      <div className="row">
        {/* First Column */}
        <div className="col-md-6">
          <div className="row align-items-center mt-3">
            <div className="col-md-4">
              <label htmlFor="chapter" className="col-form-label text-left">
                Chapter:
              </label>
            </div>
            <div className="col-md-8">
              <input
                type="text"
                className="form-control readonly-input"
                value={prevPageProps.chapterData.name}
                readOnly
              />
            </div>
          </div>

          <div className="row align-items-center mt-3">
            <div className="col-md-4">
              <label
                htmlFor="sponsoringBodies"
                className="col-form-label text-right"
              >
                Sponsoring Bodies:
              </label>
            </div>
            <div className="col-md-8">
              <input
                type="text"
                className="form-control readonly-input"
                value={prevPageProps.chapterData.sponsoringBodies}
                readOnly
              />
            </div>
          </div>
        </div>

        {/* Second Column */}
        <div className="col-md-6">
          <div className="row align-items-center mt-3">
            <div className="col-md-4">
              <label htmlFor="electDate" className="col-form-label text-right">
                Date of Election:
              </label>
            </div>
            <div className="col-md-8">
              <input
                type="date"
                className="form-control"
                id="electDate"
                placeholder="Input date of election"
                onChange={onChange}
              />
            </div>
          </div>

          <div className="row align-items-center mt-3">
            <div className="col-md-4">
              <label
                htmlFor="installDate"
                className="col-form-label text-right"
              >
                Date of Installation:
              </label>
            </div>
            <div className="col-md-8">
              <input
                type="date"
                className="form-control"
                id="installDate"
                placeholder="Input date of installation"
                onChange={onChange}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Next Button */}
      <div className="d-flex justify-content-end mt-3">
        <button
          type="submit"
          form="submit"
          className="primary-btn"
          value="SUBMIT"
          onClick={handleNextButtonClick}
        >
          NEXT
        </button>
      </div>
    </div>
  );

  <>
    <div className="row align-items-center mt-3">
      <div className="col-md-4">
        <label htmlFor="schedofmeetings" className="col-form-label text-right">
          Schedule of Stated Meetings:
        </label>
      </div>
      <div className="col-md-8">
        <input
          type="text"
          className="form-control readonly-input"
          value={prevPageProps.chapterData.meetingDate}
          readOnly
        />
      </div>
    </div>
    <div className="row align-items-center mt-3">
      <div className="col-md-4">
        <label htmlFor="timeofmeetings" className="col-form-label text-right">
          Time of Stated Meetings:
        </label>
      </div>
      <div className="col-md-8">
        <input
          type="text"
          className="form-control"
          id="timeofmeetings"
          placeholder="Input time here"
        />
      </div>
    </div>
    <div className="row align-items-center mt-3">
      {[...Array(rows)].map((_, index) => (
        <div key={index} className="row align-items-center mt-3">
          <div className="col-md-4">
            <label
              htmlFor={`sponsoringbodies-${index}`}
              className="col-form-label text-right"
            >
              Sponsoring Bodies:
            </label>
          </div>
          <div className="col-md-8">
            <input
              type="text"
              className="form-control"
              id={`sponsoringbodies-${index}`}
              placeholder="Input name here"
            />
          </div>
        </div>
      ))}
      <button className="plus-btn" onClick={handleAddRow}>
        +
      </button>
    </div>
    ;
  </>;
}

export default TurnoverNO1;
