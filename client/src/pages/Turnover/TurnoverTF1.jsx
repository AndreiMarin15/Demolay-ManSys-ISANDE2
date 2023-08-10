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
    reportedBy: "",
    position: "",
  });

  useEffect(() => {
    if (prevPageProps.formData.form1ID !== "") {
      const totalGains =
        prevPageProps.formData.initiated + prevPageProps.formData.affiliated;
      const totalLoss =
        prevPageProps.formData.majority +
        prevPageProps.formData.transferred +
        prevPageProps.formData.deaths +
        prevPageProps.formData.resigned +
        prevPageProps.formData.expelled;
      const totalNetMembers =
        prevPageProps.formData.totalMembers + totalGains - totalLoss;

      setFormData({
        ...formData,
        form1ID: prevPageProps.formData.form1ID,
        term: prevPageProps.formData.term,
        year: prevPageProps.formData.year,
        startTerm: new Date(
          prevPageProps.formData.startTerm
        ).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        }),
        endTerm: new Date(prevPageProps.formData.endTerm).toLocaleDateString(
          "en-US",
          {
            year: "numeric",
            month: "long",
            day: "numeric",
          }
        ),
        totalMembers: prevPageProps.formData.totalMembers,
        initiated: prevPageProps.formData.initiated,
        affiliated: prevPageProps.formData.affiliated,
        majority: prevPageProps.formData.majority,
        transferred: prevPageProps.formData.transferred,
        deaths: prevPageProps.formData.deaths,
        resigned: prevPageProps.formData.resigned,
        expelled: prevPageProps.formData.expelled,
        totalGains: totalGains,
        totalLoss: totalLoss,
        totalNetMembers: totalNetMembers,

        reportedBy: prevPageProps.formData.reportedBy,
        position: prevPageProps.formData.position,

        bankID: prevPageProps.formData.bankID,
        cashInBank: prevPageProps.formData.cashInBank,
        accountsReceivable: prevPageProps.formData.accountsReceivable,
        accountsPayable: prevPageProps.formData.accountsPayable,

        masterCouncilor: prevPageProps.formData.masterCouncilor,
        statusMasterCouncilor: prevPageProps.formData.statusMasterCouncilor,
        dateSignedMasterCouncilor:
          prevPageProps.formData.dateSignedMasterCouncilor,

        chapterScribe: prevPageProps.formData.chapterScribe,
        statusChapterScribe: prevPageProps.formData.statusChapterScribe,
        dateSignedChapterScribe: prevPageProps.formData.dateSignedChapterScribe,

        chapterAdvisor: prevPageProps.formData.chapterAdvisor,
        statusChapterAdvisor: prevPageProps.formData.statusChapterAdvisor,
        dateSignedChapterAdvisor:
          prevPageProps.formData.dateSignedChapterAdvisor,

        advisoryCouncilChairman: prevPageProps.formData.advisoryCouncilChairman,
        statusAdvisoryCouncilChairman:
          prevPageProps.formData.statusAdvisoryCouncilChairman,
        dateSignedAdvisoryCouncilChairman:
          prevPageProps.formData.dateSignedAdvisoryCouncilChairman,

        chapterAdvisor: prevPageProps.formData.chapterAdvisor,
        statusChapterAdvisor: prevPageProps.formData.statusChapterAdvisor,
        dateSignedChapterAdvisor:
          prevPageProps.formData.dateSignedChapterAdvisor,
        advisoryCouncilChairman: prevPageProps.formData.advisoryCouncilChairman,
        statusAdvisoryCouncilChairman:
          prevPageProps.formData.statusAdvisoryCouncilChairman,
        dateSignedAdvisoryCouncilChairman:
          prevPageProps.formData.dateSignedAdvisoryCouncilChairman,
      });

      console.log(formData);
    }
  }, []);

  const onChange = (e) => {
    setFormData((prev) => {
      let helper = { ...prev };

      helper[`${e.target.id}`] = e.target.value;

      return helper;
    });
  };

  const handleNextButtonClick = () => {
    navigate("/turnovertf2", {
      state: {
        ...prevPageProps,
        formData: formData,
      },
    });
  };

  return (
    <div className="container">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h1> Term and Financial Report </h1>
      </div>
      <hr />

      {/* Progress Line */}

      <div className="progress-container">
        <div className="progress-line">
          <div className="progress-circle active"></div>
          <div className="progress-circle"></div>
          <div className="progress-circle"></div>
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
                disabled={prevPageProps.userData.position !== "Scribe"}
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
                disabled={prevPageProps.userData.position !== "Scribe"}
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
                className="form-control readonly-input"
                id="time"
                placeholder="Enter Time"
                readOnly
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
                className="form-control readonly-input"
                id="venue"
                placeholder="Enter Venue"
                readOnly
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
                value={formData.reportedBy}
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
                value={formData.position}
                readOnly
              />
            </div>
          </div>
        </div>

        {/* Next Button */}

        <div className="d-flex justify-content-end mt-3">
          <button
            className="primary-btn"
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
