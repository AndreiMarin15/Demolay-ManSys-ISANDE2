import { Link, useLocation, useNavigate } from "react-router-dom";
import "../../styles/base.css";
import "../../styles/Events.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

function EventsPetitions() {
  const location = useLocation();
  const navigate = useNavigate();
  const prevPageProps = location.state;

  const [chapters, setChapters] = useState([]);

  const [formData, setFormData] = useState({
    name: "",
    date: "",
    chapter: "",
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
        memberName: formData.name,
        idDate: formData.date,
        chapter: formData.chapter,
        proof: formData.proof,
      };

      const newApplication = {
        applicantID: prevPageProps.userData.userID,
        name: prevPageProps.userData.name,
        chapterID: prevPageProps.userData.chapterID,
        type: prevPageProps.type,
        color: prevPageProps.color,

        petition: appData,

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
        <h1>Merit Bar Application - Petitions </h1>
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
              <td>Name</td>
              <td>full Name of newly initiated member</td>
            </tr>
            <tr>
              <td>I.D. Date:</td>
              <td>
                Initiatory Degree date (when the member was newly initiated)
              </td>
            </tr>
            <tr>
              <td>Chapter:</td>
              <td>the Chapter that accepted your recruited member</td>
            </tr>
            <tr>
              <td>SCOD-OR No.:</td>
              <td>
                Official Receipt Number reflecting the newly initiated member’s
                name
              </td>
            </tr>
          </table>
        </div>

        {/* Second Column */}

        <div className="col-md-5">
          <div className="row align-items-center mt-3">
            <div className="col-md-3">
              <label htmlFor="name" className="col-form-label text-right">
                Name:
              </label>
            </div>
            <div className="col-md-9">
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Enter Member Name"
                onChange={onChange}
              />
            </div>
          </div>
          <br />
          <div className="row align-items-center mt-3">
            <div className="col-md-3">
              <label htmlFor="date" className="col-form-label text-right">
                I.D. Date:
              </label>
            </div>
            <div className="col-md-9">
              <input
                type="date"
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
              <label htmlFor="scod" className="col-form-label text-right">
                SCOD-OR No.:
              </label>
            </div>
            <div className="col-md-9">
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
              formData.name === "" ||
              formData.chapter === "" ||
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

export default EventsPetitions;
