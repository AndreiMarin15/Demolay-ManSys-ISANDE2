import { Link, useLocation, useNavigate } from "react-router-dom";
import "../../styles/base.css";
import "../../styles/Events.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

function EventsRitual() {
  const location = useLocation();
  const navigate = useNavigate();
  const prevPageProps = location.state;

  const [chapters, setChapters] = useState([]);

  const [formData, setFormData] = useState({
    date: "",
    chapter: "",
    position: "",
    proof: "",
    color: "",
  });

  useEffect(() => {
    axios
      .get("http://localhost:5000/getAllChapters")
      .then((res) => {
        setChapters(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

    console.log(prevPageProps);
    setFormData({ ...formData, color: prevPageProps.color });
  }, []);

  useEffect(() => {
    console.log(formData);
  }, [formData]);

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

    if (prevPageProps.applications.length < 5) {
      const appData = {
        date: formData.date,
        chapter: formData.chapter,
        position: formData.position,
        proof: formData.proof,
      };

      const newApplication = {
        applicantID: prevPageProps.userData.userID,
        name: prevPageProps.userData.name,
        chapterID: prevPageProps.userData.chapterID,
        type: prevPageProps.type,
        color: prevPageProps.color,

        ritual: appData,

        isSubmitted: false,
        isApproved: false,
      };

      axios
        .post(`http://localhost:5000/newAwardApplication/`, newApplication)
        .then((res) => {
          window.location.href = `/eventsHome`;
        });
    }
  };
  return (
    <div className="container">
      <br />
      <br />

      {/* Header */}

      <div className="d-flex justify-content-between align-items-center mb-3">
        <h1>Merit Bar Application - Ritual </h1>
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
              <td>Chapter:</td>
              <td>the chapter that conducted the Degree/s or Service</td>
            </tr>
            <tr>
              <td>Date</td>
              <td>date of event</td>
            </tr>
            <tr>
              <td>Position:</td>
              <td>
                part on the degree or service on which the member performs it{" "}
              </td>
            </tr>
          </table>
        </div>

        {/* Second Column */}

        <div className="col-md-4">
          <div className="row align-items-center mt-3">
            <div className="col-md-3">
              <label htmlFor="chapter" className="col-form-label text-left">
                Chapter:
              </label>
            </div>
            <div className="col-md-9">
              <select
                className="form-select form-control"
                id="chapter"
                placeholder="Select Chapter"
                onChange={onChange}
              >
                <option value="" hidden>
                  Select Chapter
                </option>
                {chapters.map((chapter) => {
                  return (
                    <option key={chapter.chapterID} value={chapter.name}>
                      {chapter.name}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
          <br />
          <div className="row align-items-center mt-3">
            <div className="col-md-3">
              <label htmlFor="date" className="col-form-label text-right">
                Date:
              </label>
            </div>
            <div className="col-md-9">
              <input
                type="text"
                className="form-control"
                id="date"
                placeholder="MM/DD/YYYY"
                onChange={onChange}
              />
            </div>
          </div>
          <br />
          <div className="row align-items-center mt-3">
            <div className="col-md-3">
              <label htmlFor="position" className="col-form-label text-right">
                Position:
              </label>
            </div>
            <div className="col-md-9">
              <input
                type="text"
                className="form-control"
                id="position"
                placeholder="Enter Position"
                onChange={onChange}
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
              formData.chapter === "" ||
              formData.position === "" ||
              formData.date === "" ||
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

export default EventsRitual;
