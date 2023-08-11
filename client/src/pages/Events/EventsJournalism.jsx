import { Link, useLocation, useNavigate } from "react-router-dom";
import "../../styles/base.css";
import "../../styles/Events.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

function EventsJournalism() {
  const location = useLocation();
  const navigate = useNavigate();
  const prevPageProps = location.state;

  const [formData, setFormData] = useState({
    articleName: "",
    articleDate: "",
    type: "",
    position: "",
    proof: "",
    color: "",
  });

  useEffect(() => {
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
        articleName: formData.articleName,
        articleDate: formData.articleDate,
        articleType: formData.type,
        position: formData.position,
        proof: formData.proof,
      };

      const newApplication = {
        applicantID: prevPageProps.userData.userID,
        name: prevPageProps.userData.name,
        chapterID: prevPageProps.userData.chapterID,
        type: prevPageProps.type,
        color: prevPageProps.color,

        journalism: appData,

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
        <h1>Merit Bar Application - Journalism </h1>
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
          <table class="legend-table">
            <tr>
              <td className="no-wrap">Article Name:</td>
              <td>title of the newspaper article</td>
            </tr>
            <tr>
              <td>Date:</td>
              <td>date when the chapter newspaper was issued</td>
            </tr>
            <tr>
              <td>Position:</td>
              <td>position of the member in the newspaper committee</td>
            </tr>
          </table>
        </div>

        {/* Second Column */}

        <div className="col-md-4">
          <div className="row align-items-center mt-3">
            <div className="col-md-4">
              <label
                htmlFor="articleName"
                className="col-form-label text-right"
              >
                Article Name:
              </label>
            </div>
            <div className="col-md-7">
              <input
                type="text"
                className="form-control"
                id="articleName"
                placeholder="Enter Article Name"
                onChange={onChange}
              />
            </div>
          </div>
          <br />
          <div className="row align-items-center mt-3">
            <div className="col-md-4">
              <label
                htmlFor="articleDate"
                className="col-form-label text-right"
              >
                Date:
              </label>
            </div>
            <div className="col-md-7">
              <input
                type="date"
                className="form-control"
                id="articleDate"
                placeholder="MM/DD/YYYY"
                onChange={onChange}
              />
            </div>
          </div>
          <br />
          <div className="row align-items-center mt-3">
            <div className="col-md-4">
              <label htmlFor="type" className="col-form-label text-right">
                Type:
              </label>
            </div>
            <div className="col-md-7">
              <input
                type="text"
                className="form-control"
                id="type"
                placeholder="Enter Type"
                onChange={onChange}
              />
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
              <select
                className="form-select form-control"
                id="position"
                onChange={onChange}
              >
                <option value="" hidden>
                  Select
                </option>
                <option>Editor</option>
                <option>Layout</option>
                <option>Artist</option>
              </select>
            </div>
          </div>
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
              formData.articleName === "" ||
              formData.articleDate === "" ||
              formData.position === "" ||
              formData.type === "" ||
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

export default EventsJournalism;
