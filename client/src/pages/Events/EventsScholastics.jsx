import { Link, useLocation, useNavigate } from "react-router-dom";
import "../../styles/base.css";
import "../../styles/Events.css";

import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

function EventsScholastics() {
  const location = useLocation();
  const navigate = useNavigate();
  const prevPageProps = location.state;

  const [formData, setFormData] = useState({
    school: "",
    schoolYear: "",
    semester: "",
    aveGrade: "",
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
        school: formData.school,
        schoolYear: formData.schoolYear,
        semester: formData.semester,
        aveGrade: formData.aveGrade,
        proof: formData.proof,
      };

      const newApplication = {
        applicantID: prevPageProps.userData.userID,
        name: prevPageProps.userData.name,
        chapterID: prevPageProps.userData.chapterID,
        type: prevPageProps.type,
        color: prevPageProps.color,

        scholastics: appData,

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
        <h1>Merit Bar Application - Scholastics </h1>
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
              <td className="no-wrap">Name of School:</td>
              <td>school of applicant</td>
            </tr>
            <tr>
              <td className="no-wrap">School Year</td>
              <td>academic year of school where the applicant is attending</td>
            </tr>
            <tr>
              <td>Semester:</td>
              <td>
                defines the Semester within the School Year (if applicable)
              </td>
            </tr>

            <tr>
              <td className="no-wrap">Average Grade:</td>
              <td>
                average value of the accumulated final grades earned during the
                school year
              </td>
            </tr>
          </table>
        </div>

        {/* Second Column */}

        <div className="col-md-4">
          <div className="row align-items-center mt-3">
            <div className="col-md-4">
              <label htmlFor="school" className="col-form-label text-right">
                Name of School:
              </label>
            </div>
            <div className="col-md-8">
              <input
                type="text"
                className="form-control"
                id="school"
                placeholder="Enter Name of School"
                onChange={onChange}
              />
            </div>
          </div>
          <br />
          <div className="row align-items-center mt-3">
            <div className="col-md-4">
              <label htmlFor="schoolYear" className="col-form-label text-right">
                School Year:
              </label>
            </div>
            <div className="col-md-8">
              <input
                type="text"
                className="form-control"
                id="schoolYear"
                placeholder="Enter School Year"
                onChange={onChange}
              />
            </div>
          </div>
          <br />
          <div className="row align-items-center mt-3">
            <div className="col-md-4">
              <label htmlFor="semester" className="col-form-label text-right">
                Semester:
              </label>
            </div>
            <div className="col-md-8">
              <input
                type="text"
                className="form-control"
                id="semester"
                placeholder="Enter Sem"
                onChange={onChange}
              />
            </div>
          </div>
          <br />

          <div className="row align-items-center mt-3">
            <div className="col-md-4">
              <label htmlFor="aveGrade" className="col-form-label text-right">
                Average Grade:
              </label>
            </div>
            <div className="col-md-8">
              <input
                type="text"
                className="form-control"
                id="aveGrade"
                placeholder="Enter Average Grade"
                onChange={onChange}
              />
            </div>
          </div>
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
              formData.school === "" ||
              formData.schoolYear === "" ||
              formData.semester === "" ||
              formData.aveGrade === "" ||
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

export default EventsScholastics;
