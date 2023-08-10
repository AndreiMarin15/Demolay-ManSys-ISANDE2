import { Link, useLocation, useNavigate } from "react-router-dom";
import "../../styles/base.css";
import "../../styles/Turnover.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
 
function TurnoverNO4() {
  const location = useLocation();
  const navigate = useNavigate();
  const prevPageProps = location.state;

  const [formData, setFormData] = useState(prevPageProps?.formData ?? {});

  const handleBackButtonClick = () => {
    navigate("/turnoverno2", {
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
          `http://localhost:5000/updateF15/${prevPageProps.formData.form15ID}`,
          prevPageProps
        )
        .then((res) => {
          console.log("New Officers Updated: " + res.data);
          navigate("/turnoverDashboardscribe", {
            state: {
              ...prevPageProps,
            },
          });
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
            `http://localhost:5000/updateF15/${prevPageProps.formData.form15ID}`,
            props
          );

          if (prevPageProps.approved === false) {
            if (
              updateApproval.statusChapterAdvisor === "Approved"
            ) {
              const turnoverUpdate = {
                chapterID: prevPageProps.userData.chapterID,
                termID: prevPageProps.chapterData.currentTerm,
                fieldToUpdate: "form15Approved",
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
      navigate(`/turnoverDashboardofficer/${prevPageProps.userData.userID}`, {
        state: {
          ...prevPageProps,
        },
      });
    }
  };

  console.log(prevPageProps);

  return (
    <div className="container">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h1> New Officers Report (Form 15) </h1>
      </div>

      <hr />

      <div className="text-center mb-3">
        <p>
          We hereby certify that the information contained in this report is
          accurate for the Members of the Stated Meeting of the chapter. The
          officers were duly qualified, elected, and installed on the dates
          above pursuant to the relevant provisions of the STATUES of the
          SUPREME COUNCIL ORDER of DEMOLAY of the REPUBLIC of the Philippines.
        </p>
      </div>

      <br />

      <div className="row">
        {/* First Column */}
 
        <div className="col-md-4">
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
                  value="APPROVE"
                  onClick={onSubmit}
                >
                  SIGN
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
                if (prevPageProps.userData.position === "Scribe") {
                  navigate("/turnoverdashboardscribe", {
                    state: {
                      ...prevPageProps,
                    },
                  });
                } else {
                  navigate("/turnoverdashboardofficer", {
                    state: {
                      ...prevPageProps,
                    },
                  });
                }
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

export default TurnoverNO4;
