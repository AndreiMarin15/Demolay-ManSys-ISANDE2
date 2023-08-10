import { Link, useLocation, useNavigate } from "react-router-dom";
import "../../styles/base.css";
import "../../styles/Events.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

function EventsConclave() {
  const location = useLocation();
  const navigate = useNavigate();
  const prevPageProps = location.state;

  const [eventsData, setEventsData] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState({
    activityName: "",
    type: "",
    startDate: "",
    endDate: "",
  });

  const [formData, setFormData] = useState({
    eventID: "",
    proof: "",
    color: "",
  });

  useEffect(() => {
    console.log(prevPageProps);
    setEventsData(prevPageProps.eventsData?.conclaves || []);
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
      type: selectedEventData?.type || "",
      startDate: selectedEventData?.startDate || "",
      endDate: selectedEventData?.endDate || "",
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
    if (formData.eventID === "" || formData.proof === "") {
      alert("Please fill in all the required fields.");
      return;
    }

    if (prevPageProps.applications.length < 5) {
      const appData = {
        eventID: formData.eventID,
        proof: formData.proof,
      };

      const newApplication = {
        applicantID: prevPageProps.userData.userID,
        name: prevPageProps.userData.name,
        chapterID: prevPageProps.userData.chapterID,
        type: prevPageProps.type,
        color: prevPageProps.color,

        conclave: appData,

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
        type: "",
        startDate: "",
        endDate: "",
      });
    }
  };

  return (
    <div className="container">
      <br />
      <br />

      {/* Header */}

      <div className="d-flex justify-content-between align-items-center mb-3">
        <h1>Merit Bar Application - Conclave </h1>
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
              <td>Type:</td>
              <td>
                defines if it is National or Luzon, Visayas, Mindanao
                Jurisdictional Conclave
              </td>
            </tr>
            <tr>
              <td>Duration:</td>
              <td>defines how long the conclave is</td>
            </tr>
          </table>
        </div>

        {/* Second Column */}

        <div className="col-md-4">
          <div className="row align-items-center mt-3">
            <div className="col-md-4">
              <label
                htmlFor="activityName"
                className="col-form-label text-left"
              >
                Conclave:
              </label>
            </div>
            <div className="col-md-8">
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
            <div className="col-md-4">
              <label htmlFor="type" className="col-form-label text-left">
                Type:
              </label>
            </div>
            <div className="col-md-8">
              <input
                type="text"
                className="form-control"
                id="type"
                value={selectedEvent.type}
                disabled
              />
            </div>
          </div>

          <br />

          <div className="row align-items-center mt-3">
            <div className="col-md-4">
              <label
                htmlFor="activityDate"
                className="col-form-label text-right"
              >
                Start Date:
              </label>
            </div>
            <div className="col-md-8">
              <input
                type="date"
                className="form-control"
                id="startDate"
                name="startDate"
                placeholder="MM/DD/YYYY"
                value={selectedEvent.startDate.split("T")[0]}
                disabled
              />
            </div>
          </div>
          <div className="row align-items-center mt-3">
            <div className="col-md-4">
              <label
                htmlFor="activityDate"
                className="col-form-label text-right"
              >
                End Date:
              </label>
            </div>
            <div className="col-md-8">
              <input
                type="date"
                className="form-control"
                id="endDate"
                name="endDate"
                placeholder="MM/DD/YYYY"
                value={selectedEvent.endDate.split("T")[0]}
                disabled
              />
            </div>
          </div>

          <br />
        </div>

        {/* Third Column */}

        <div className="col-md-4">
          <div className="row align-items-center mt-3">
            <div className="col-md-3">
              <label htmlFor="uploadID" className="col-form-label text-right">
                Proof:
              </label>
            </div>
            <div className="col-md-7">
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

export default EventsConclave;
