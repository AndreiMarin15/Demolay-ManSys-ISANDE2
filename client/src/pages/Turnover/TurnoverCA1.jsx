import { Link, useLocation, useNavigate } from "react-router-dom";
import "../../styles/base.css";
import "../../styles/Turnover.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";

function TurnoverCA1() {
  const location = useLocation();
  const navigate = useNavigate();
  const prevPageProps = location.state;

  const [formData, setFormData] = useState({
    term: "",
    year: "",

    chairID: "",
    chairEmail: "",
    chairAddress: "",
    chairPhone: "",
    chairIsReAppt: "",
    chairYears: "",

    caID: "",
    caEmail: "",
    caAddress: "",
    caPhone: "",
    caIsReAppt: "",
    caYears: "",
  });

  useEffect(() => {
    if (prevPageProps.advisoryID !== "") {
      setFormData({
        ...formData,
        term: prevPageProps.formData.term,
        year: prevPageProps.formData.year,

        chairID: prevPageProps.formData.chairID,
        chairEmail: prevPageProps.formData.chairEmail,
        chairAddress: prevPageProps.formData.chairAddress,
        chairPhone: prevPageProps.formData.chairPhone,
        chairIsReAppt: prevPageProps.formData.chairIsReAppt,
        chairYears: prevPageProps.formData.chairYears,

        caID: prevPageProps.formData.caID,
        caEmail: prevPageProps.formData.caEmail,
        caAddress: prevPageProps.formData.caAddress,
        caPhone: prevPageProps.formData.caPhone,
        caIsReAppt: prevPageProps.formData.caIsReAppt,
        caYears: prevPageProps.formData.caYears,
      });
    }
  }, []);

  const onChange = (e) => {
    setFormData((prev) => {
      let helper = { ...prev };

      helper[`${e.target.id}`] = e.target.value;

      return helper;
    });
  };

  const handleBackButtonClick = () => {
    navigate("/turnoverdashboardscribe", {
      state: {
        userData: prevPageProps.userData,
        chapterData: prevPageProps.chapterData,
        turnoverID: prevPageProps.turnoverID,
      },
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (prevPageProps.userData.position === "Scribe") {
      axios
        .post(
          `http://localhost:5000/updateAdvisory/${prevPageProps.advisoryID}`,
          formData
        )
        .then((res) => {
          console.log("Advisory Updated: " + res.data);

          navigate("/turnoverDashboardscribe");
        });
    } else if (prevPageProps.userData.position === "Chapter Advisor") {
      if (prevPageProps.approved === false) {
        const turnoverUpdate = {
          chapterID: prevPageProps.userData.chapterID,
          termID: prevPageProps.chapterData.currentTerm,
          fieldToUpdate: "advisoryApproved",
          updateValue: true,
        };

        axios.post("http://localhost:5000/updateTurnover", turnoverUpdate);
      } else {
        alert("Already approved.");
      }

      navigate("/turnoverdashboardofficer");
    }
  };

  console.log(formData);

  return (
    <div className="container">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h1> Certification of Advisory Council Members </h1>
        <Link to="">
          <button type="submit" form="submit" className="primary-btn">
            SAVE AND COMPLETE LATER
          </button>
        </Link>
      </div>

      <hr />

      <div className="row">
        <h3> Advisory Council Chairman </h3>
        {/* First Column */}

        <div className="col-md-6">
          <div className="row align-items-center mt-3">
            <div className="col-md-4">
              <label htmlFor="chairID" className="col-form-label text-right">
                Full Name:
              </label>
            </div>
            <div className="col-md-7">
              {/* <select className="form-select form-control" id="chairID">
                <option value="" disabled>
                  Select
                </option>
                {advisors.map((advisor) => {
                  return (
                    <option key={advisor.userId} value={advisor.userId}>
                      {advisor.name}
                    </option>
                  );
                })}
              </select> */}
              <input
                type="text"
                className="form-control"
                id="chairID"
                placeholder="Enter Full Name"
                onChange={onChange}
                value={formData.chairID}
                disabled={prevPageProps.userData.position === "Chapter Advisor"}
              />
            </div>
          </div>

          <div className="row align-items-center mt-3">
            <div className="col-md-4">
              <label
                htmlFor="chairAddress"
                className="col-form-label text-right"
              >
                Address:
              </label>
            </div>
            <div className="col-md-7">
              <input
                type="text"
                className="form-control"
                id="chairAddress"
                placeholder="Enter Address"
                onChange={onChange}
                value={formData.chairAddress}
                disabled={prevPageProps.userData.position === "Chapter Advisor"}
              />
            </div>
          </div>

          <div className="row align-items-center mt-3">
            <div className="col-md-4">
              <label htmlFor="chairEmail" className="col-form-label text-right">
                Email:
              </label>
            </div>
            <div className="col-md-7">
              <input
                type="email"
                className="form-control"
                id="chairEmail"
                placeholder="Enter Email"
                onChange={onChange}
                value={formData.chairEmail}
                disabled={prevPageProps.userData.position === "Chapter Advisor"}
              />
            </div>
          </div>

          <div className="row align-items-center mt-3">
            <div className="col-md-4">
              <label htmlFor="chairPhone" className="col-form-label text-right">
                Mobile No.:
              </label>
            </div>
            <div className="col-md-7">
              <input
                type="text"
                className="form-control"
                id="chairPhone"
                placeholder="Enter Mobile No."
                onChange={onChange}
                value={formData.chairPhone}
                disabled={prevPageProps.userData.position === "Chapter Advisor"}
              />
            </div>
          </div>
        </div>

        <div className="col-md-5">
          <div className="row align-items-center mt-3">
            <div className="col-md-4">
              <label
                htmlFor="chairIsReAppt"
                className="col-form-label text-left"
              >
                Appointment Status:
              </label>
            </div>
            <div className="col-md-7">
              <select
                className="form-select form-control"
                id="chairIsReAppt"
                onChange={onChange}
                value={
                  formData.chairIsReAppt ? "Re-Appointed" : "Newly Appointed"
                }
                disabled={prevPageProps.userData.position === "Chapter Advisor"}
              >
                <option value="" disabled>
                  Select
                </option>
                <option value={false}>Newly Appointed</option>
                <option value={true}>Re-Appointed</option>
              </select>
            </div>
            <div className="col-md-4">
              <label htmlFor="chairYears" className="col-form-label text-left">
                Years as Advisor:
              </label>
            </div>
            <div className="col-md-3">
              <input
                type="number"
                min="0"
                className="form-control"
                id="chairYears"
                placeholder="0"
                onChange={onChange}
                value={formData.chairYears}
                disabled={prevPageProps.userData.position === "Chapter Advisor"}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="row mt-5">
        <h3> Chapter Advisor </h3>
        {/* First Column */}

        <div className="col-md-6">
          <div className="row align-items-center mt-3">
            <div className="col-md-4">
              <label htmlFor="caID" className="col-form-label text-right">
                Full Name:
              </label>
            </div>
            <div className="col-md-7">
              <input
                type="text"
                className="form-control"
                id="caID"
                placeholder="Enter Full Name"
                onChange={onChange}
                value={formData.caID}
                disabled={prevPageProps.userData.position === "Chapter Advisor"}
              />
            </div>
          </div>

          <div className="row align-items-center mt-3">
            <div className="col-md-4">
              <label htmlFor="caAddress" className="col-form-label text-right">
                Address:
              </label>
            </div>
            <div className="col-md-7">
              <input
                type="text"
                className="form-control"
                id="caAddress"
                placeholder="Enter Address"
                onChange={onChange}
                value={formData.caAddress}
                disabled={prevPageProps.userData.position === "Chapter Advisor"}
              />
            </div>
          </div>

          <div className="row align-items-center mt-3">
            <div className="col-md-4">
              <label htmlFor="caEmail" className="col-form-label text-right">
                Email:
              </label>
            </div>
            <div className="col-md-7">
              <input
                type="email"
                className="form-control"
                id="caEmail"
                placeholder="Enter Email"
                onChange={onChange}
                value={formData.caEmail}
                disabled={prevPageProps.userData.position === "Chapter Advisor"}
              />
            </div>
          </div>

          <div className="row align-items-center mt-3">
            <div className="col-md-4">
              <label htmlFor="caPhone" className="col-form-label text-right">
                Mobile No.:
              </label>
            </div>
            <div className="col-md-7">
              <input
                type="text"
                className="form-control"
                id="caPhone"
                placeholder="Enter Mobile No."
                onChange={onChange}
                value={formData.caPhone}
                disabled={prevPageProps.userData.position === "Chapter Advisor"}
              />
            </div>
          </div>
        </div>

        <div className="col-md-5">
          <div className="row align-items-center mt-3">
            <div className="col-md-4">
              <label htmlFor="caIsReAppt" className="col-form-label text-left">
                Appointment Status:
              </label>
            </div>
            <div className="col-md-7">
              <select
                className="form-select form-control"
                id="caIsReAppt"
                onChange={onChange}
                value={formData.caIsReAppt ? "Re-Appointed" : "Newly Appointed"}
                disabled={prevPageProps.userData.position === "Chapter Advisor"}
              >
                <option value="" disabled>
                  Select
                </option>
                <option value={false}>Newly Appointed</option>
                <option value={true}>Re-Appointed</option>
              </select>
            </div>
            <div className="col-md-4">
              <label htmlFor="caYears" className="col-form-label text-left">
                Years as Advisor:
              </label>
            </div>
            <div className="col-md-3">
              <input
                type="number"
                min="0"
                className="form-control"
                id="caYears"
                placeholder="0"
                onChange={onChange}
                value={formData.caYears}
                disabled={prevPageProps.userData.position === "Chapter Advisor"}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Button */}
      {prevPageProps.userData.position === "Chapter Advisor" ? (
        <div className="d-flex">
          <button
            type="submit"
            form="submit"
            className="primary-btn"
            value="DISAPPROVE"
          >
            DISAPPROVE
          </button>
          <button
            type="submit"
            form="submit"
            className="primary-btn"
            value="APPROVE"
            onClick={onSubmit}
          >
            APPROVE
          </button>
        </div>
      ) : (
        <div className="d-flex justify-content-between mt-4">
          <button
            type="button"
            className="primary-btn"
            onClick={handleBackButtonClick}
          >
            BACK
          </button>
          <button
            type="submit"
            form="submit"
            className="primary-btn"
            value="SUBMIT"
            onClick={onSubmit}
          >
            SUBMIT
          </button>
        </div>
      )}
    </div>
  );
}

export default TurnoverCA1;
