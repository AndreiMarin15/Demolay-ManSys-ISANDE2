import { Link, useLocation, useNavigate } from "react-router-dom";
import "../../styles/base.css";
import "../../styles/Turnover.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

function TurnoverTF1() {
  const location = useLocation();
  const navigate = useNavigate();
  const prevPageProps = location.state;

  const [formData, setFormData] = useState({
    term: "",
    year: "",
    startTerm: "",
    endTerm: "",
    scheduleOfMeetings: "",
    timeOfMeetings: "",
    venueOfMeetings: "",
    reportedBy: prevPageProps?.userData?.name,
    position: prevPageProps?.userData?.position,
  });

  useEffect(() => {
    axios
      .get(`http://localhost:5000/getForm1/${prevPageProps.form1ID}`)
      .then((res1) => {
        setFormData({
          ...formData,
          term: res1.data.term,
          year: res1.data.year,
          startTerm: new Date(res1.data.startTerm).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          }),
          endTerm: new Date(res1.data.endTerm).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          }),
          totalMembers: res1.data.totalMembers,
          initiated: res1.data.initiated,
          affiliated: res1.data.affiliated,
          majority: res1.data.majority,
          transferred: res1.data.transferred,
          deaths: res1.data.deaths,
          resigned: res1.data.resigned,
          expelled: res1.data.expelled,
          totalGains: res1.data.totalGains,
          totalLoss: res1.data.totalLoss,
          totalNetMembers: res1.data.totalNetMembers,
        });
      });
  }, []);

  console.log(prevPageProps);

  const onChange = (e) => {
    setFormData((prev) => {
      let helper = { ...prev };

      helper[`${e.target.id}`] = e.target.value;

      return helper;
    });
    console.log(formData);
  };

  const handleNextButtonClick = () => {
    navigate("/turnovertf2", {
      state: {
        userData: prevPageProps.userData,
        chapterData: prevPageProps.chapterData,
        form1ID: prevPageProps.form1ID,
        formData: formData,
      },
    });
  };

  return (
    <div className="container">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h1> Term and Financial Report </h1>
        <Link to="/turnoverTF1">
          <button type="submit" form="submit" className="primary-btn">
            SAVE AND COMPLETE LATER
          </button>
        </Link>
      </div>
      <hr />

      {/* Progress Line */}

      <div class="progress-line">
        <div class="progress-circle active"></div>
        <div class="progress-circle"></div>
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
        <p> Confirm if all details presented below are correct. </p>

        {/* First Column */}

        <div className="col-md-4">
          <div className="row align-items-center mt-3">
            <div className="col-md-4">
              <label htmlFor="term" className="col-form-label text-left">
                Term:
              </label>
            </div>
            <div className="col-md-7">
              <select
                className="form-select form-control"
                id="term"
                onChange={onChange}
                value={formData.term}
              >
                <option>A</option>
                <option>B</option>
              </select>
            </div>
          </div>

          <div className="row align-items-center mt-3">
            <div className="col-md-4">
              <label htmlFor="year" className="col-form-label text-left">
                Year:
              </label>
            </div>
            <div className="col-md-7">
              <select
                className="form-select form-control"
                id="year"
                onChange={onChange}
                value={formData.year}
              >
                <option>2022</option>
                <option>2023</option>
              </select>
            </div>
          </div>

          <div className="row align-items-center mt-3">
            <div className="col-md-4">
              <label htmlFor="startofterm" className="col-form-label text-left">
                Start of Term:
              </label>
            </div>
            <div className="col-md-8">
              <input
                type="text"
                className="form-control readonly-input"
                value={formData.startTerm}
                readOnly
              />
            </div>
          </div>

          <div className="row align-items-center mt-3">
            <div className="col-md-4">
              <label htmlFor="endofterm" className="col-form-label text-left">
                End of Term:
              </label>
            </div>
            <div className="col-md-8">
              <input
                type="text"
                className="form-control readonly-input"
                value={formData.endTerm}
                readOnly
              />
            </div>
          </div>

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
        </div>

        {/* Second Column */}

        <div className="col-md-4">
          <div className="row align-items-center mt-3">
            <div className="col-md-6">
              <label htmlFor="sched" className="col-form-label text-right">
                Schedule of Stated Meetings:
              </label>
            </div>
            <div className="col-md-6">
              <input
                type="text"
                className="form-control readonly-input"
                value={prevPageProps.chapterData.meetingDate}
                readOnly
              />
            </div>
          </div>

          <div className="row align-items-center mt-3">
            <div className="col-md-6">
              <label htmlFor="time" className="col-form-label text-right">
                Time of Stated Meetings:
              </label>
            </div>
            <div className="col-md-6">
              <input
                type="text"
                className="form-control"
                id="time"
                placeholder="Enter Time"
              />
            </div>
          </div>

          <div className="row align-items-center mt-3">
            <div className="col-md-6">
              <label htmlFor="time" className="col-form-label text-right">
                Venue of Stated Meetings:
              </label>
            </div>
            <div className="col-md-6">
              <input
                type="text"
                className="form-control"
                id="venue"
                placeholder="Enter Venue"
              />
            </div>
          </div>
        </div>

        {/* Third Column */}

        <div className="col-md-4">
          <div className="row align-items-center mt-3">
            <div className="col-md-4">
              <label htmlFor="reportedby" className="col-form-label text-left">
                Reported By:
              </label>
            </div>
            <div className="col-md-8">
              <input
                type="text"
                className="form-control readonly-input"
                value={prevPageProps.userData.name}
                readOnly
              />
            </div>
          </div>

          <div className="row align-items-center mt-3">
            <div className="col-md-4">
              <label htmlFor="position" className="col-form-label text-left">
                Position:
              </label>
            </div>
            <div className="col-md-8">
              <input
                type="text"
                className="form-control readonly-input"
                value={prevPageProps.userData.position}
                readOnly
              />
            </div>
          </div>
        </div>

        {/* Next Button */}

        <div className="d-flex justify-content-end mt-3">
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

export default TurnoverTF1;
