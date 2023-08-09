import { Link, useLocation, useNavigate } from "react-router-dom";
import "../../styles/base.css";
import "../../styles/Events.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

function EventsAttendance() {
  const location = useLocation();
  const navigate = useNavigate();
  const prevPageProps = location.state;

  const officerPositions = [
    "Master Councilor",
    "Senior Councilor",
    "Junior Councilor",
    "Treasurer",
    "Scribe",
    "Senior Deacon",
    "Junior Deacon",
    "Senior Steward",
    "Junior Steward",
    "Chaplain",
    "Almoner",
    "Marshal",
    "Standard Bearer",
    "Orator",
    "1st Preceptor",
    "2nd Preceptor",
    "3rd Preceptor",
    "4th Preceptor",
    "5th Preceptor",
    "6th Preceptor",
    "7th Preceptor",
    "Sentinel",
    "Organist",
  ];

  const [eventsData, setEventsData] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState({
    term: "",
    meetingName: "",
    meetingDate: "",
  });

<<<<<<< Updated upstream
  useEffect(() => {
    console.log(prevPageProps);
    setEventsData(prevPageProps.eventsData.attendanceEvents || []);
=======
  const [formData, setFormData] = useState({
    eventID: "",
    position: "",
    performance: "",
    attendance: "",
    proof: "",
    color: "",
  });

  useEffect(() => {
    console.log(prevPageProps);
    setEventsData(prevPageProps.eventsData?.attendanceEvents || []);
    setFormData({ ...formData, color: prevPageProps.color });
    console.log(eventsData);
>>>>>>> Stashed changes
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const selectedEventData = eventsData.find(
      (event) => event.meetingName === value
    );

    setSelectedEvent((prev) => ({
      ...prev,
      [name]: value,
      meetingDate: selectedEventData?.meetingDate || "",
      term: selectedEventData?.term || "",
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
<<<<<<< Updated upstream
    // Handle form submission and save attendance data to the backend
    // ...
=======

    if (
      formData.eventID === "" ||
      formData.position === "" ||
      formData.performance === "" ||
      formData.attendance === "" ||
      formData.proof === ""
    ) {
      alert("Please fill in all the required fields.");
      return;
    }

    if (prevPageProps.applications.length < 5) {
      const attendance = {
        eventID: formData.eventID,
        position: formData.position,
        performance: formData.performance,
        attendance: formData.attendance,
        proof: formData.proof,
      };

      const newApplication = {
        applicantID: prevPageProps.userData.userID,
        name: prevPageProps.userData.name,
        chapterID: prevPageProps.userData.chapterID,
        type: "Attendance",
        color: prevPageProps.color,
        attendance: attendance,
        isSubmitted: false,
        isApproved: false,
      };

      axios
        .post(`http://localhost:5000/newAwardApplication/`, newApplication)
        .then((res) => {
          window.location.href = `/eventsHome`;
        });
    }
>>>>>>> Stashed changes

    // Reset the form after submission
    setSelectedEvent({
      term: "",
      meetingName: "",
      meetingDate: "",
    });
  };

  return (
    <div className="container">
      <br />
<<<<<<< Updated upstream
      <nav className="eventsNavbar">
        <table className="navbar-table">
          <tbody>
            <tr className="navbar-row">
              <td>
                <a href="/eventsAttendance">Attendance</a>
              </td>
              <td>
                <a href="/eventsAthletic">Athletic</a>
              </td>
              <td>
                <a href="/eventsCivicService">Civic Service</a>
              </td>
              <td>
                <a href="/eventsConclave">Conclave</a>
              </td>
              <td>
                <a href="/eventsFineArts">Fine Arts</a>
              </td>
              <td>
                <a href="/eventsFundRaising">Fund Raising</a>
              </td>
              <td>
                <a href="/eventsInstalling">Installing</a>
              </td>
              <td>
                <a href="/eventsJournalism">Journalism</a>
              </td>
            </tr>
            <tr className="navbar-row">
              <td>
                <a href="/eventsMasonicAttendance">Masonic Attendance</a>
              </td>
              <td>
                <a href="/eventsMasonicService">Masonic Service</a>
              </td>
              <td>
                <a href="/eventsMerit">Merit</a>
              </td>
              <td>
                <a href="/eventsPetitions">Petitions</a>
              </td>
              <td>
                <a href="/eventsReligion">Religion</a>
              </td>
              <td>
                <a href="/eventsRitual">Ritual</a>
              </td>
              <td>
                <a href="/eventsScholastics">Scholastics</a>
              </td>
              <td>
                <a href="/eventsVisitation">Visitation</a>
              </td>
            </tr>
          </tbody>
        </table>
      </nav>
=======
>>>>>>> Stashed changes
      <br />

      {/* Header */}

      <div className="d-flex justify-content-between align-items-center mb-3">
        <h1>Merit Bar Application - Attendance </h1>
      </div>

      {/* Instruction */}

      <div>
        <p className="instruction">
          {" "}
          Please take note that you can only submit the form if you have
          completed all the requirements.{" "}
        </p>
      </div>
      <hr />
      <div className="row">
        {/* First Column */}

        <div className="col-md-4">
          <table className="legend-table">
            <tr>
              <td>Term:</td>
              <td>means Term of Office</td>
            </tr>
            <tr>
              <td className="no-wrap">Meeting Name:</td>
              <td>name of Stated Meetings</td>
            </tr>
            <tr>
              <td>Meeting Date:</td>
              <td>date of Stated Meetings</td>
            </tr>
            <tr>
              <td>Position:</td>
              <td>
                officer’s position or position assigned to a Member during
                Opening and Closing Ceremonies
              </td>
            </tr>
            <tr>
              <td>Performance:</td>
              <td>
                based on the delivery of the Ritual part. A member should attain
                and maintain Expert Status
              </td>
            </tr>
            <tr>
              <td>Attendance:</td>
              <td>Present, Absent, or Left Early</td>
            </tr>
          </table>
        </div>

        {/* Second Column */}

        <div className="col-md-4">
          <div className="row align-items-center mt-3">
            <div className="col-md-4">
              <label
                htmlFor="meetingname"
                className="col-form-label text-right"
              >
                Meeting Name:
              </label>
            </div>
            <div className="col-md-7">
              <select
                className="form-select form-control"
                id="meetingname"
                name="meetingName"
                value={selectedEvent.meetingName}
                onChange={handleChange}
              >
                {eventsData.map((event) => (
                  <option key={event._id} value={event.meetingName}>
                    {event.meetingName}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <br />
          <div className="row align-items-center mt-3">
            <div className="col-md-4">
              <label
                htmlFor="meetingdate"
                className="col-form-label text-right"
              >
                Meeting Date:
              </label>
            </div>
            <div className="col-md-7">
              <input
                type="text"
                className="form-control"
                id="meetingdate"
                name="meetingDate"
                placeholder="MM/DD/YYYY"
                value={selectedEvent.meetingDate}
                onChange={handleChange}
              />
            </div>
          </div>
          <br />
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
                name="term"
                value={selectedEvent.term}
                onChange={handleChange}
              >
                <option>2022</option>
                <option>2021</option>
                <option>2020</option>
              </select>
            </div>
          </div>
          <br />
          <div className="row align-items-center mt-3">
            <div className="col-md-4">
              <label htmlFor="position" className="col-form-label text-right">
                Position:
              </label>
            </div>
            <div className="col-md-7">
              <select className="form-select form-control" id="position">
                {officerPositions.map((position) => {
                  return <option key={position}>{position}</option>;
                })}
              </select>
            </div>
          </div>
          <br />
          <div className="row align-items-center mt-3">
            <div className="col-md-4">
              <label htmlFor="position" className="col-form-label text-right">
                Performance:
              </label>
            </div>
            <div className="col-md-7">
              <select className="form-select form-control" id="performance">
                <option>Beginner</option>
                <option>Amateur</option>
                <option>Expert</option>
                <option>Master</option>
              </select>
            </div>
          </div>
        </div>

        {/* Third Column */}

        <div className="col-md-4">
          <div className="row align-items-center mt-3">
            <div className="col-md-3">
              <label htmlFor="attendance" className="col-form-label text-right">
                Attendance:
              </label>
            </div>
            <div className="col-md-7">
              <select className="form-select form-control" id="attendance">
                <option>Present</option>
                <option>Absent</option>
                <option>Left Early</option>
              </select>
            </div>
          </div>
          <br />
          <div className="row align-items-center mt-3">
            <div className="col-md-3">
              <label
                htmlFor="uploadproof"
                className="col-form-label text-right"
              >
                Proof:
              </label>
            </div>
            <div className="col-md-7">
              <input type="file" className="form-control" id="uploadproof" />
            </div>
          </div>
        </div>

        {/* Buttons */}

        <div className="d-flex justify-content-between mt-4">
          <button type="button" className="primary-btn">
            BACK
          </button>
          <button
            type="button"
            className="primary-btn"
            value="SUBMIT"
            onClick={handleSubmit}
          >
            SUBMIT
          </button>
        </div>
      </div>
    </div>
  );
}

export default EventsAttendance;
