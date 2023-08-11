import { Link, useLocation, useNavigate } from "react-router-dom";
import "../../styles/base.css";
import "../../styles/Events.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

function EventsMasonicService() {
  const location = useLocation();
  const navigate = useNavigate();
  const prevPageProps = location.state;

  const [eventsData, setEventsData] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState({
    activityName: "",
    activityDate: "",
    location: "",
  });

  const [formData, setFormData] = useState({
    eventID: "",
    hours: 0,
    proof: "",
    color: "",
  });

  useEffect(() => {
    console.log(prevPageProps);
    setEventsData(prevPageProps.eventsData?.msEvents || []);
    setFormData({ ...formData, color: prevPageProps.color });
    console.log(eventsData);
  }, []);

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    const selectedEventData = eventsData.find((event) => event._id === value);

    setSelectedEvent((prev) => ({
      ...prev,
      activityName: selectedEventData?.activityName || "",
      activityDate: selectedEventData?.activityDate || "",
      location: selectedEventData?.location || "",
    }));
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const onChange = (e) => {
    setFormData((prev) => {
      let helper = { ...prev };

      helper[`${e.target.id}`] = e.target.value;

      return helper;
    });
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertToBase64(file);

    setFormData({
      ...formData,
      proof: base64,
    });
  };

  function convertToBase64(file) {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();

      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      formData.eventID === "" ||
      formData.hours === "" ||
      formData.proof === ""
    ) {
      alert("Please fill in all the required fields.");
      return;
    }

    if (prevPageProps.applications.length < 5) {
      const appData = {
        eventID: formData.eventID,
        hours: formData.hours,
        proof: formData.proof,
      };

      const newApplication = {
        applicantID: prevPageProps.userData.userID,
        name: prevPageProps.userData.name,
        chapterID: prevPageProps.userData.chapterID,
        type: prevPageProps.type,
        color: prevPageProps.color,

        masonicService: appData,

        isSubmitted: false,
        isApproved: false,
      };

      axios
        .post(`http://localhost:5000/newAwardApplication/`, newApplication)
        .then((res) => {
          window.location.href = `/eventsHome`;
        });

      // Reset the form after submission
      setSelectedEvent({
        activityName: "",
        activityDate: "",
        location: "",
      });
    }
  };
  return (
    <div className="container">
      <br />
      <br />

      {/* Header */}

      <div className="d-flex justify-content-between align-items-center mb-3">
        <h1>Merit Bar Application - Masonic Service </h1>
      </div>

      {/* Instruction */}

      <div>
        <p className="instruction">
          {" "}
          Please take note that you can only submit the form if you have
          completed all the requirements.
        </p>
      </div>
      <hr />

      <div className="row">
        {/* First Column */}

        <div className="col-md-4">
          <table class="legend-table">
            <tr>
              <td className="no-wrap">Activity Name:</td>
              <td>
                title of Masonic Service activity conducted/participated by the
                member
              </td>
            </tr>
            <tr>
              <td>Date:</td>
              <td>date of Masonic Service Activities</td>
            </tr>
            <tr>
              <td>Location:</td>
              <td>where the Masonic Service activity was held</td>
            </tr>
            <tr>
              <td className="no-wrap">Hours of Service:</td>
              <td>number of hour garnered by the member</td>
            </tr>
          </table>
        </div>

        {/* Second Column */}

        <div className="col-md-4">
          <div className="row align-items-center mt-3">
            <div className="col-md-5">
              <label
                htmlFor="activityName"
                className="col-form-label text-left"
              >
                Activity Name:
              </label>
            </div>
            <div className="col-md-7">
              <select
                className="form-select form-control"
                id="eventID"
                onChange={handleChange}
              >
                <option value="" hidden>
                  Select
                </option>
                {eventsData.map((event) => (
                  <option key={event._id} value={event._id}>
                    {event.activityName}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <br />
          <div className="row align-items-center mt-3">
            <div className="col-md-5">
              <label
                htmlFor="activityDate"
                className="col-form-label text-right"
              >
                Date:
              </label>
            </div>
            <div className="col-md-7">
              <input
                type="date"
                className="form-control"
                id="activityDate"
                placeholder="MM/DD/YYYY"
                value={selectedEvent.activityDate.split("T")[0]}
                disabled
              />
            </div>
          </div>
          <br />
          <div className="row align-items-center mt-3">
            <div className="col-md-5">
              <label htmlFor="location" className="col-form-label text-right">
                Location:
              </label>
            </div>
            <div className="col-md-7">
              <input
                type="text"
                className="form-control"
                id="location"
                placeholder="Enter Location"
                value={selectedEvent.location}
                disabled
              />
            </div>
          </div>
          <br />
          <div className="row align-items-center mt-3">
            <div className="col-md-5">
              <label htmlFor="hours" className="col-form-label text-right">
                Hours of Service:
              </label>
            </div>
            <div className="col-md-7">
              <input
                type="number"
                min="0"
                className="form-control"
                id="hours"
                placeholder="Enter Number of Hours"
                onChange={(e) => {
                  setFormData(() => ({
                    ...formData,
                    hours: +e.target.value,
                  }));
                }}
              />
            </div>
          </div>

          <br />
        </div>

        {/* Third Column */}

        <div className="col-md-4">
          <div className="row align-items-center mt-3">
            <div className="col-md-2">
              <label htmlFor="uploadID" className="col-form-label text-right">
                Proof:
              </label>
            </div>
            <div className="col-md-10">
              <input
                type="file"
                className="form-control"
                id="uploadproof"
                onChange={handleImageUpload}
              />
            </div>
          </div>
        </div>

        {/* Buttons */}

        <div className="d-flex justify-content-between mt-4">
          <Link to="/eventsHome">
            <button type="button" className="primary-btn">
              BACK
            </button>
          </Link>
          <button
            type="button"
            className="btn"
            value="SUBMIT"
            disabled={
              formData.eventID === "" ||
              formData.hours === "" ||
              formData.proof === "" ||
              formData.color === ""
            }
            onClick={handleSubmit}
          >
            SUBMIT
          </button>
        </div>
      </div>
    </div>
  );
}

export default EventsMasonicService;
