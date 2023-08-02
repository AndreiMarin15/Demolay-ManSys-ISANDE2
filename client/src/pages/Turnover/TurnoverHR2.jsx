import { Link, useLocation, useNavigate } from "react-router-dom";
import "../../styles/base.css";
import "../../styles/Turnover.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";

function TurnoverHR2() {
  const location = useLocation();
  const navigate = useNavigate();
  const prevPageProps = location.state;

  const [formData, setFormData] = useState(prevPageProps?.formData ?? {});

  const handleBackButtonClick = () => {
    navigate("/turnoverhr1", {
      state: {
        ...prevPageProps,
        formData: formData,
      },
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (prevPageProps.userData.position === "Scribe") {
      axios
        .post(
          `http://localhost:5000/updateAR/${prevPageProps.formData.assetsID}`,
          prevPageProps
        )
        .then((res) => {
          console.log("Assets Updated: " + res.data);
          navigate("/turnoverDashboardscribe");
        });
    } else {
      if (prevPageProps.userData.position === "Chapter Advisor") {
        if (prevPageProps.formData.statusChapterAdvisor === "Approved") {
          alert("Already approved.");
        } else {
          const updateApproval = {
            chapterAdvisor: prevPageProps.userData.userID,
            statusChapterAdvisor: "Approved",
            dateSignedChapterAdvisor: new Date(),
          };

          const props = {
            ...prevPageProps,
            updateApproval: updateApproval,
          };

          axios.post(
            `http://localhost:5000/updateAR/${prevPageProps.formData.assetsID}`,
            props
          );

          if (prevPageProps.approved === false) {
            if (
              updateApproval.statusChapterAdvisor === "Approved" &&
              prevPageProps.formData.statusAdvisoryCouncilChairman ===
                "Approved"
            ) {
              const turnoverUpdate = {
                chapterID: prevPageProps.userData.chapterID,
                termID: prevPageProps.chapterData.currentTerm,
                fieldToUpdate: "assetsApproved",
                updateValue: true,
              };

              axios.post(
                "http://localhost:5000/updateTurnover",
                turnoverUpdate
              );
            }
          }
        }
      } else if (
        prevPageProps.userData.position === "Advisory Council Chairman"
      ) {
        if (
          prevPageProps.formData.statusAdvisoryCouncilChairman === "Approved"
        ) {
          alert("Already approved.");
        } else {
          const updateApproval = {
            advisoryCouncilChairman: prevPageProps.userData.userID,
            statusAdvisoryCouncilChairman: "Approved",
            dateSignedAdvisoryCouncilChairman: new Date(),
          };

          const props = {
            ...prevPageProps,
            updateApproval: updateApproval,
          };

          axios.post(
            `http://localhost:5000/updateAR/${prevPageProps.formData.assetsID}`,
            props
          );

          if (prevPageProps.approved === false) {
            if (
              updateApproval.statusAdvisoryCouncilChairman === "Approved" &&
              prevPageProps.formData.statusChapterAdvisor === "Approved"
            ) {
              const turnoverUpdate = {
                chapterID: prevPageProps.userData.chapterID,
                termID: prevPageProps.chapterData.currentTerm,
                fieldToUpdate: "assetsApproved",
                updateValue: true,
              };

              axios.post(
                "http://localhost:5000/updateTurnover",
                turnoverUpdate
              );
            }
          }
        }
      }
      navigate("/turnoverDashboardofficer");
    }
  };

  const handleDisapprove = (e) => {
    e.preventDefault();

    if (prevPageProps.userData.position === "Chapter Advisor") {
      if (prevPageProps.formData.statusChapterAdvisor === "Approved") {
        alert("Already approved.");
      } else {
        const updateApproval = {
          chapterAdvisor: prevPageProps.userData.userID,
          statusChapterAdvisor: "For Revisions",
          dateSignedChapterAdvisor: new Date(),
        };

        const props = {
          ...prevPageProps,
          updateApproval: updateApproval,
        };

        axios.post(
          `http://localhost:5000/updateAR/${prevPageProps.formData.assetsID}`,
          props
        );
        alert("Disapproved: Waiting for revisions.");
      }
    } else if (
      prevPageProps.userData.position === "Advisory Council Chairman"
    ) {
      if (prevPageProps.formData.statusAdvisoryCouncilChairman === "Approved") {
        alert("Already approved.");
      } else {
        const updateApproval = {
          advisoryCouncilChairman: prevPageProps.userData.userID,
          statusAdvisoryCouncilChairman: "For Revisions",
          dateSignedAdvisoryCouncilChairman: new Date(),
        };

        const props = {
          ...prevPageProps,
          updateApproval: updateApproval,
        };

        axios.post(
          `http://localhost:5000/updateAR/${prevPageProps.formData.assetsID}`,
          props
        );
        alert("Disapproved: Waiting for revisions.");
      }
    }
    navigate("/turnoverdashboardofficer");
  };

  console.log(prevPageProps);

  return (
    <div className="container">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h1>
          Report on Historical Records, Official Files and Assets, and
          Properties
        </h1>
        <Link to="/">
          <button type="submit" form="submit" className="primary-btn">
            SAVE AND COMPLETE LATER
          </button>
        </Link>
      </div>

      <hr />

      <div className="d-flex justify-content-center align-items-center mb-3">
        <p>
          This is to certify that all Historical Records, Official Files and
          Assets, and Properties of <u> Manila Chapter </u> listed below have
          been formally turned over to the following term:
        </p>
      </div>

      <div className="row">
        {/* First Column */}

        <div className="col-md-4">
          <div className="row align-items-center mt-3">
            <div className="col-md-4">
              <label
                htmlFor="chairmanofadvisory"
                className="col-form-label text-left"
              >
                Chairman of Advisory:
              </label>
            </div>
            <div className="col-md-8">
              <input
                type="text"
                className="form-control readonly-input"
                value="Name"
                readOnly
              />
            </div>
          </div>

          <div className="row align-items-center mt-3">
            <div className="col-md-4">
              <label
                htmlFor="chapteradvisor"
                className="col-form-label text-left"
              >
                Chapter Advisor:
              </label>
            </div>
            <div className="col-md-8">
              <input
                type="text"
                className="form-control readonly-input"
                value="Name"
                readOnly
              />
            </div>
          </div>
        </div>

        {/* Second Column */}

        <div className="col-md-4">
          <div className="row align-items-center mt-3">
            <div className="col-md-4">
              <label
                htmlFor="statuschairman"
                className="col-form-label text-left"
              >
                Status:
              </label>
            </div>
            <div className="col-md-8">
              <input
                type="text"
                className="form-control readonly-input"
                value={prevPageProps.formData.statusAdvisoryCouncilChairman}
                readOnly
              />
            </div>
          </div>

          <div className="row align-items-center mt-3">
            <div className="col-md-4">
              <label
                htmlFor="statusadvisor"
                className="col-form-label text-left"
              >
                Status:
              </label>
            </div>
            <div className="col-md-8">
              <input
                type="text"
                className="form-control readonly-input"
                value={prevPageProps.formData.statusChapterAdvisor}
                readOnly
              />
            </div>
          </div>
        </div>

        {/* Third Column */}

        <div className="col-md-4">
          <div className="row align-items-center mt-3">
            <div className="col-md-4">
              <label
                htmlFor="datesignedchairman"
                className="col-form-label text-left"
              >
                Date Signed:
              </label>
            </div>
            <div className="col-md-8">
              <input
                type="date"
                className="form-control readonly-input"
                value={prevPageProps.formData.dateSignedAdvisoryCouncilChairman}
                readOnly
              />
            </div>
          </div>

          <div className="row align-items-center mt-3">
            <div className="col-md-4">
              <label
                htmlFor="datesignedadvisor"
                className="col-form-label text-left"
              >
                Date Signed:
              </label>
            </div>
            <div className="col-md-8">
              <input
                type="date"
                className="form-control readonly-input"
                value={prevPageProps.formData.dateSignedChapterAdvisor}
                readOnly
              />
            </div>
          </div>
        </div>

        {/* Buttons */}

        <div className="d-flex justify-content-between mt-4">
          <button
            type="button"
            className="primary-btn"
            onClick={handleBackButtonClick}
          >
            BACK
          </button>
          {prevPageProps.userData.position === "Scribe" &&
            prevPageProps.approved === false && (
              <button
                className="primary-btn"
                type="submit"
                form="submit"
                id="primary-btn"
                value="SUBMIT"
                onClick={onSubmit}
              >
                SEND
              </button>
            )}

          {(prevPageProps.userData.position === "Chapter Advisor" ||
            prevPageProps.userData.position === "Advisory Council Chairman") &&
            prevPageProps.approved === false && (
              <div className="d-flex justify-content-between">
                <button
                  type="submit"
                  form="submit"
                  className="primary-btn"
                  value="DISAPPROVE"
                  onClick={handleDisapprove}
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
            )}

          {(prevPageProps.userData.position === "Executive Officer" ||
            prevPageProps.userData.position === "Master Councilor" ||
            prevPageProps.approved === true) && (
            <button
              className="primary-btn"
              type="submit"
              form="submit"
              id="primary-btn"
              value="SUBMIT"
              onClick={() => {
                navigate("/turnoverdashboardofficer");
              }}
            >
              RETURN TO DASHBOARD
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default TurnoverHR2;
