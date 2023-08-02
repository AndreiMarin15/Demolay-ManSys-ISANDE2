import { Link, useLocation, useNavigate } from "react-router-dom";
import "../../styles/base.css";
import "../../styles/Turnover.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

function TurnoverTF6() {
  const navigate = useNavigate();
  const location = useLocation();
  const prevPageProps = location.state;

  const [formData, setFormData] = useState(prevPageProps?.formData ?? {});

  const handleBackButtonClick = () => {
    navigate("/turnovertf5", {
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
          `http://localhost:5000/updateTF/${prevPageProps.formData.form1ID}`,
          prevPageProps
        )
        .then((res) => {
          const updateApproval = {
            chapterScribe: prevPageProps.userData.userID,
            statusChapterScribe: "Approved",
            dateSignedChapterScribe: new Date(),
          };

          const props = {
            ...prevPageProps,
            updateApproval: updateApproval,
          };

          axios.post(
            `http://localhost:5000/updateTF/${prevPageProps.formData.form1ID}`,
            props
          );

          if (prevPageProps.approved === false) {
            if (
              updateApproval.statusChapterScribe === "Approved" &&
              prevPageProps.formData.statusMasterCouncilor === "Approved" &&
              prevPageProps.formData.statusChapterAdvisor === "Approved" &&
              prevPageProps.formData.statusAdvisoryCouncilChairman ===
                "Approved"
            ) {
              const turnoverUpdate = {
                chapterID: prevPageProps.userData.chapterID,
                termID: prevPageProps.chapterData.currentTerm,
                fieldToUpdate: "form1Approved",
                updateValue: true,
              };

              axios.post(
                "http://localhost:5000/updateTurnover",
                turnoverUpdate
              );
            }
          }

          navigate("/turnoverDashboardscribe");
        });
    } else {
      if (prevPageProps.userData.position === "Master Councilor") {
        if (prevPageProps.formData.statusMasterCouncilor === "Approved") {
          alert("Already approved.");
        } else {
          const updateApproval = {
            masterCouncilor: prevPageProps.userData.userID,
            statusMasterCouncilor: "Approved",
            dateSignedMasterCouncilor: new Date(),
          };

          const props = {
            ...prevPageProps,
            updateApproval: updateApproval,
          };

          axios.post(
            `http://localhost:5000/updateTF/${prevPageProps.formData.form1ID}`,
            props
          );

          if (prevPageProps.approved === false) {
            if (
              updateApproval.statusMasterCouncilor === "Approved" &&
              prevPageProps.formData.statusChapterScribe === "Approved" &&
              prevPageProps.formData.statusChapterAdvisor === "Approved" &&
              prevPageProps.formData.statusAdvisoryCouncilChairman ===
                "Approved"
            ) {
              const turnoverUpdate = {
                chapterID: prevPageProps.userData.chapterID,
                termID: prevPageProps.chapterData.currentTerm,
                fieldToUpdate: "form1Approved",
                updateValue: true,
              };

              axios.post(
                "http://localhost:5000/updateTurnover",
                turnoverUpdate
              );
            }
          }
        }
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
              `http://localhost:5000/updateTF/${prevPageProps.formData.form1ID}`,
              props
            );

            if (prevPageProps.approved === false) {
              if (
                updateApproval.statusChapterAdvisor === "Approved" &&
                prevPageProps.formData.statusAdvisoryCouncilChairman ===
                  "Approved" &&
                prevPageProps.formData.statusChapterScribe === "Approved" &&
                prevPageProps.formData.statusMasterCouncilor === "Approved"
              ) {
                const turnoverUpdate = {
                  chapterID: prevPageProps.userData.chapterID,
                  termID: prevPageProps.chapterData.currentTerm,
                  fieldToUpdate: "form1Approved",
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
              `http://localhost:5000/updateTF/${prevPageProps.formData.form1ID}`,
              props
            );

            if (prevPageProps.approved === false) {
              if (
                updateApproval.statusAdvisoryCouncilChairman === "Approved" &&
                prevPageProps.formData.statusChapterAdvisor === "Approved" &&
                prevPageProps.formData.statusChapterScribe === "Approved" &&
                prevPageProps.formData.statusMasterCouncilor === "Approved"
              ) {
                const turnoverUpdate = {
                  chapterID: prevPageProps.userData.chapterID,
                  termID: prevPageProps.chapterData.currentTerm,
                  fieldToUpdate: "form1Approved",
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
        navigate("/turnoverdashboardofficer");
      }
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
          `http://localhost:5000/updateTF/${prevPageProps.formData.form1ID}`,
          props
        );
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
          `http://localhost:5000/updateTF/${prevPageProps.formData.form1ID}`,
          props
        );
      }
    }
    alert("Disapproved: Waiting for revisions.");
    navigate("/turnoverdashboardofficer");
  };

  console.log(prevPageProps);

  return (
    <div className="container">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h1> Term and Financial Report </h1>
        <button type="submit" form="submit" className="primary-btn">
          SAVE AND COMPLETE LATER
        </button>
      </div>
      <hr />

      {/* Progress Line */}

      <div className="progress-container">
        <div className="progress-line">
          <div className="progress-circle "></div>
          <div className="progress-circle"></div>
          <div className="progress-circle"></div>
          <div className="progress-circle active"></div>
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
        {/* First Column */}

        <div className="col-md-4">
          <div className="row align-items-center mt-3">
            <div className="col-md-6">
              <label
                htmlFor="mastercouncilor"
                className="col-form-label text-left"
              >
                Master Councilor:
              </label>
            </div>
            <div className="col-md-6">
              <input
                type="text"
                className="form-control readonly-input"
                value="Name"
                readOnly
              />
            </div>
          </div>

          <div className="row align-items-center mt-3">
            <div className="col-md-6">
              <label
                htmlFor="chapterscribe"
                className="col-form-label text-left"
              >
                Chapter Scribe:
              </label>
            </div>
            <div className="col-md-6">
              <input
                type="text"
                className="form-control readonly-input"
                value="Name"
                readOnly
              />
            </div>
          </div>

          <br />

          <div className="row align-items-center mt-3">
            <div className="col-md-6">
              <label
                htmlFor="advisorycouncil"
                className="col-form-label text-left"
              >
                Advisory Council Chairman:
              </label>
            </div>
            <div className="col-md-6">
              <input
                type="text"
                className="form-control readonly-input"
                value="Name"
                readOnly
              />
            </div>
          </div>

          <div className="row align-items-center mt-3">
            <div className="col-md-6">
              <label
                htmlFor="chapteradvisor"
                className="col-form-label text-left"
              >
                Chapter Advisor:
              </label>
            </div>
            <div className="col-md-6">
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
                htmlFor="statuscouncilor"
                className="col-form-label text-left"
              >
                Status:
              </label>
            </div>
            <div className="col-md-8">
              <input
                type="text"
                className="form-control readonly-input"
                value={prevPageProps.formData.statusMasterCouncilor}
                readOnly
              />
            </div>
          </div>

          <div className="row align-items-center mt-3">
            <div className="col-md-4">
              <label
                htmlFor="statusscribe"
                className="col-form-label text-left"
              >
                Status:
              </label>
            </div>
            <div className="col-md-8">
              <input
                type="text"
                className="form-control readonly-input"
                value={prevPageProps.formData.statusChapterScribe}
                readOnly
              />
            </div>
          </div>

          <br />

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
                htmlFor="datesignedcouncilor"
                className="col-form-label text-left"
              >
                Date Signed:
              </label>
            </div>
            <div className="col-md-8">
              <input
                type="date"
                className="form-control readonly-input"
                value={prevPageProps.formData.dateSignedMasterCouncilor}
                readOnly
              />
            </div>
          </div>

          <div className="row align-items-center mt-3">
            <div className="col-md-4">
              <label
                htmlFor="datesignedscribe"
                className="col-form-label text-left"
              >
                Date Signed:
              </label>
            </div>
            <div className="col-md-8">
              <input
                type="date"
                className="form-control readonly-input"
                value={prevPageProps.formData.dateSignedChapterScribe}
                readOnly
              />
            </div>
          </div>

          <br />

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
      </div>

      {/* Button */}

      <div className="d-flex justify-content-between mt-4">
        <button
          className="primary-btn"
          type="button"
          id="back-btn"
          onClick={handleBackButtonClick}
        >
          BACK
        </button>

        {prevPageProps.userData.position === "Scribe" ||
          (prevPageProps.userData.position === "Master Councilor" &&
            prevPageProps.approved === false && (
              <button
                className="primary-btn"
                type="submit"
                form="submit"
                id="primary-btn"
                value="SUBMIT"
                onClick={onSubmit}
              >
                SIGN
              </button>
            ))}

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
  );
}

export default TurnoverTF6;
