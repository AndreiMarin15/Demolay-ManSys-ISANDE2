import "../../styles/base.css";
import "../../styles/Events.css";

import axios from "axios";
import { useEffect, useState } from "react";

import React from "react";

function EventsValidation() {
  const [userData, setUserData] = useState({});
  const [eventsData, setEventsData] = useState({});

  const [selectedApplication, setSelectedApplication] = useState({});

  const [applicationData, setApplicationData] = useState({
    applications: [],
    filteredApplications: [],
  });

  const [meritBarCtg, setCategory] = useState("");

  useEffect(() => {
    async function fetchEventsData() {
      const user = await axios.get("http://localhost:5000/getCurrentUser");

      setUserData({
        ...userData,
        userID: user.data._id,
        name: user.data.givenName + " " + user.data.lastName,
        chapterID: user.data.chapterId,
      });

      const events = await axios.get(
        `http://localhost:5000/getEvents/${user.data.chapterId}`
      );

      axios
        .get("http://localhost:5000/getAllAwardApplications")
        .then((applications) => {
          setApplicationData({
            ...applicationData,
            applications: applications.data,
            filteredApplications: applications.data.filter((application) => {
              if (
                application.isSubmitted === true &&
                application.isApproved !== true
              ) {
                return true;
              } else {
                return false;
              }
            }),
          });
        });
      setEventsData(events.data);
    }

    fetchEventsData();
  }, []);

  const styles = {
    maxWidth: "200px",
    maxHeight: "200px",
    objectFit: "contain",
  };

  const handleSubmit = () => {
    const props = {
      fieldToUpdate: "isApproved",
      updateValue: true,
    };

    axios
      .post(
        `http://localhost:5000/updateAwardApplication/${selectedApplication._id}`,
        props
      )
      .then((res) => {
        alert(
          `Approved application for ${selectedApplication.name} (${selectedApplication.type} - ${selectedApplication.color})`
        );
        console.log("Updated and submitted application: " + res.data);
        window.location.reload();
      });
  };

  return (
    <div className="container">
      <br />

      {/* Header */}

      <div className="d-flex justify-content-between align-items-center mb-3">
        <h1> Request for Merit Bars </h1>
      </div>
      <hr />

      <div className="row">
        {/* First Column */}

        <div className="col-md-6">
          <table className="table table-bordered-custom">
            <thead className="thead-custom">
              <tr>
                <th>Name of Applicant</th>
                <th>Category</th>
                <th>Color</th>
                <th>View Application</th>
              </tr>
            </thead>
            <tbody>
              {applicationData.filteredApplications.map(function (application) {
                return (
                  <tr key={application.applicantID}>
                    <td>{application.name}</td>
                    <td>{application.type}</td>
                    <td>{application.color}</td>
                    <td>
                      <button
                        className="btn btn-primary"
                        onClick={() => {
                          setSelectedApplication(application);
                          setCategory(application.type);
                        }}
                      >
                        {" "}
                        View Application
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Vertical Line */}

        <div className="col-md-1">
          <div className="vl"></div>
        </div>

        {/* Second Column */}
        <div className="col-md-5 mx-auto">
          {meritBarCtg === "Attendance" && (
            <>
              {eventsData.attendanceEvents.map((event) => {
                if (event._id === selectedApplication.attendance.eventID) {
                  return (
                    <div key={selectedApplication.attendance.eventID}>
                      <h2> Attendance </h2>
                      <div className="row align-items-center mt-3">
                        <div className="col-md-4">
                          <label
                            htmlFor="term"
                            className="col-form-label text-left"
                          >
                            Term:
                          </label>
                        </div>
                        <div className="col-md-8">
                          <input
                            type="text"
                            className="form-control readonly-input"
                            value={event.term}
                            readOnly
                          />
                        </div>
                      </div>
                      <div className="row align-items-center mt-3">
                        <div className="col-md-4">
                          <label
                            htmlFor="meetingname"
                            className="col-form-label text-right"
                          >
                            Meeting Name:
                          </label>
                        </div>
                        <div className="col-md-8">
                          <input
                            type="text"
                            className="form-control readonly-input"
                            value={event.meetingName}
                            readOnly
                          />
                        </div>
                      </div>
                      <div className="row align-items-center mt-3">
                        <div className="col-md-4">
                          <label
                            htmlFor="meetingdate"
                            className="col-form-label text-right"
                          >
                            Meeting Date:
                          </label>
                        </div>
                        <div className="col-md-8">
                          <input
                            type="date"
                            className="form-control readonly-input"
                            value={event.meetingDate.split("T")[0]}
                            readOnly
                          />
                        </div>
                      </div>
                    </div>
                  );
                }
              })}
              <div className="row align-items-center mt-3">
                <div className="col-md-4">
                  <label
                    htmlFor="position"
                    className="col-form-label text-right"
                  >
                    Position:
                  </label>
                </div>
                <div className="col-md-8">
                  <input
                    type="text"
                    className="form-control readonly-input"
                    value={selectedApplication.attendance.position || ""}
                    readOnly
                  />
                </div>
              </div>
              <div className="row align-items-center mt-3">
                <div className="col-md-4">
                  <label
                    htmlFor="position"
                    className="col-form-label text-right"
                  >
                    Performance:
                  </label>
                </div>
                <div className="col-md-8">
                  <input
                    type="text"
                    className="form-control readonly-input"
                    value={selectedApplication.attendance.performance || ""}
                    readOnly
                  />
                </div>
              </div>
              <div className="row align-items-center mt-3">
                <div className="col-md-4">
                  <label htmlFor="proof" className="col-form-label text-right">
                    Proof:
                  </label>
                </div>
                <div className="col-md-8">
                  {selectedApplication.attendance.proof ? (
                    <img
                      src={selectedApplication.attendance.proof}
                      alt="img"
                      style={styles}
                    />
                  ) : (
                    <p></p>
                  )}
                </div>
              </div>

              {selectedApplication.isApproved === false && (
                <div className="d-flex justify-content-end ms-5 w-100">
                  <button
                    type="button"
                    form="button"
                    className="primary-btn"
                    value="NEXT"
                    onClick={handleSubmit}
                  >
                    APPROVE
                  </button>
                </div>
              )}
            </>
          )}

          {meritBarCtg === "Athletics" && (
            <>
              {eventsData.athleticEvents.map((event) => {
                if (event._id === selectedApplication.athletics.eventID) {
                  return (
                    <div key={selectedApplication.athletics.eventID}>
                      <div>
                        <h2> Athletics </h2>
                      </div>

                      <div className="row align-items-center mt-3">
                        <div className="col-md-4">
                          <label className="col-form-label text-left">
                            Activity Name:
                          </label>
                        </div>
                        <div className="col-md-8">
                          <input
                            type="text"
                            className="form-control readonly-input"
                            value={event.activityName}
                            readOnly
                          />
                        </div>
                      </div>

                      <div className="row align-items-center mt-3">
                        <div className="col-md-4">
                          <label className="col-form-label text-right">
                            Activity Date:
                          </label>
                        </div>
                        <div className="col-md-8">
                          <input
                            type="date"
                            className="form-control readonly-input"
                            value={event.activityDate.split("T")[0]}
                            readOnly
                          />
                        </div>
                      </div>

                      <div className="row align-items-center mt-3">
                        <div className="col-md-4">
                          <label className="col-form-label text-right">
                            Host:
                          </label>
                        </div>
                        <div className="col-md-8">
                          <input
                            type="text"
                            className="form-control readonly-input"
                            value={event.host}
                            readOnly
                          />
                        </div>
                      </div>

                      <div className="row align-items-center mt-3">
                        <div className="col-md-4">
                          <label className="col-form-label text-right">
                            Location:
                          </label>
                        </div>
                        <div className="col-md-8">
                          <input
                            type="text"
                            className="form-control readonly-input"
                            value={event.location}
                            readOnly
                          />
                        </div>
                      </div>
                    </div>
                  );
                }
              })}
              <div className="row align-items-center mt-3">
                <div className="col-md-4">
                  <label htmlFor="proof" className="col-form-label text-right">
                    Proof:
                  </label>
                </div>
                <div className="col-md-8">
                  {selectedApplication.athletics.proof ? (
                    <img
                      src={selectedApplication.athletics.proof}
                      alt="img"
                      style={styles}
                    />
                  ) : (
                    <p></p>
                  )}
                </div>
              </div>

              {selectedApplication.isApproved === false && (
                <div className="d-flex justify-content-end ms-5 w-100">
                  <button
                    type="button"
                    form="button"
                    className="primary-btn"
                    value="NEXT"
                    onClick={handleSubmit}
                  >
                    APPROVE
                  </button>
                </div>
              )}
            </>
          )}

          {meritBarCtg === "Civic Service" && (
            <>
              {eventsData.csEvents.map((event) => {
                if (event._id === selectedApplication.civicService.eventID) {
                  return (
                    <div key={selectedApplication.civicService.eventID}>
                      <div>
                        <h2> Civic Service </h2>
                      </div>

                      <div className="row align-items-center mt-3">
                        <div className="col-md-4">
                          <label className="col-form-label text-left">
                            Activity Name:
                          </label>
                        </div>
                        <div className="col-md-8">
                          <input
                            type="text"
                            className="form-control readonly-input"
                            value={event.activityName}
                            readOnly
                          />
                        </div>
                      </div>

                      <div className="row align-items-center mt-3">
                        <div className="col-md-4">
                          <label className="col-form-label text-right">
                            Activity Date:
                          </label>
                        </div>
                        <div className="col-md-8">
                          <input
                            type="date"
                            className="form-control readonly-input"
                            value={event.activityDate.split("T")[0]}
                            readOnly
                          />
                        </div>
                      </div>

                      <div className="row align-items-center mt-3">
                        <div className="col-md-4">
                          <label className="col-form-label text-right">
                            Location:
                          </label>
                        </div>
                        <div className="col-md-8">
                          <input
                            type="text"
                            className="form-control readonly-input"
                            value={event.location}
                            readOnly
                          />
                        </div>
                      </div>
                    </div>
                  );
                }
              })}

              <div className="row align-items-center mt-3">
                <div className="col-md-4">
                  <label htmlFor="hours" className="col-form-label text-right">
                    Hours of Service:
                  </label>
                </div>
                <div className="col-md-8">
                  <input
                    type="number"
                    className="form-control readonly-input"
                    value={selectedApplication.civicService.hours || ""}
                    readOnly
                  />
                </div>
              </div>

              <div className="row align-items-center mt-3">
                <div className="col-md-4">
                  <label htmlFor="proof" className="col-form-label text-right">
                    Proof:
                  </label>
                </div>
                <div className="col-md-8">
                  {selectedApplication.civicService.proof ? (
                    <img
                      src={selectedApplication.civicService.proof}
                      alt="img"
                      style={styles}
                    />
                  ) : (
                    <p></p>
                  )}
                </div>
              </div>

              {selectedApplication.isApproved === false && (
                <div className="d-flex justify-content-end ms-5 w-100">
                  <button
                    type="button"
                    form="button"
                    className="primary-btn"
                    onClick={handleSubmit}
                  >
                    APPROVE
                  </button>
                </div>
              )}
            </>
          )}

          {meritBarCtg === "Conclave" && (
            <>
              {eventsData.conclaves.map((event) => {
                if (event._id === selectedApplication.conclave.eventID) {
                  return (
                    <div key={selectedApplication.conclave.eventID}>
                      <div>
                        <h2> Civic Service </h2>
                        {selectedApplication.isSubmitted === true && (
                          <span className="badge text-bg-info ms-2">
                            Submitted
                          </span>
                        )}
                        {selectedApplication.isApproved === true && (
                          <span className="badge text-bg-success ms-2">
                            Approved - {selectedApplication.color}
                          </span>
                        )}
                      </div>

                      <div className="row align-items-center mt-3">
                        <div className="col-md-4">
                          <label className="col-form-label text-left">
                            Conclave:
                          </label>
                        </div>
                        <div className="col-md-8">
                          <input
                            type="text"
                            className="form-control readonly-input"
                            value={event.activityName}
                            readOnly
                          />
                        </div>
                      </div>

                      <div className="row align-items-center mt-3">
                        <div className="col-md-4">
                          <label className="col-form-label text-right">
                            Type:
                          </label>
                        </div>
                        <div className="col-md-8">
                          <input
                            type="text"
                            className="form-control readonly-input"
                            value={event.type}
                            readOnly
                          />
                        </div>
                      </div>

                      <div className="row align-items-center mt-3">
                        <div className="col-md-4">
                          <label className="col-form-label text-right">
                            Start Date:
                          </label>
                        </div>
                        <div className="col-md-8">
                          <input
                            type="date"
                            className="form-control readonly-input"
                            value={event.startDate.split("T")[0]}
                            readOnly
                          />
                        </div>
                      </div>

                      <div className="row align-items-center mt-3">
                        <div className="col-md-4">
                          <label className="col-form-label text-right">
                            End Date:
                          </label>
                        </div>
                        <div className="col-md-8">
                          <input
                            type="date"
                            className="form-control readonly-input"
                            value={event.endDate.split("T")[0]}
                            readOnly
                          />
                        </div>
                      </div>
                    </div>
                  );
                }
              })}

              <div className="row align-items-center mt-3">
                <div className="col-md-4">
                  <label htmlFor="proof" className="col-form-label text-right">
                    Proof:
                  </label>
                </div>
                <div className="col-md-8">
                  {selectedApplication.conclave.proof ? (
                    <img
                      src={selectedApplication.conclave.proof}
                      alt="img"
                      style={styles}
                    />
                  ) : (
                    <p></p>
                  )}
                </div>
              </div>

              {selectedApplication.isApproved === false && (
                <div className="d-flex justify-content-end ms-5 w-100">
                  <button
                    type="button"
                    form="button"
                    className="primary-btn"
                    onClick={handleSubmit}
                  >
                    APPROVE
                  </button>
                </div>
              )}
            </>
          )}

          {meritBarCtg === "Fine Arts" && (
            <>
              {eventsData.faEvents.map((event) => {
                if (event._id === selectedApplication.fineArts.eventID) {
                  return (
                    <div key={selectedApplication.fineArts.eventID}>
                      <div>
                        <h2> Fine Arts </h2>
                        {selectedApplication.isSubmitted === true && (
                          <span className="badge text-bg-info ms-2">
                            Submitted
                          </span>
                        )}
                        {selectedApplication.isApproved === true && (
                          <span className="badge text-bg-success ms-2">
                            Approved - {selectedApplication.color}
                          </span>
                        )}
                      </div>

                      <div className="row align-items-center mt-3">
                        <div className="col-md-4">
                          <label className="col-form-label text-left">
                            Activity Name:
                          </label>
                        </div>
                        <div className="col-md-8">
                          <input
                            type="text"
                            className="form-control readonly-input"
                            value={event.activityName}
                            readOnly
                          />
                        </div>
                      </div>

                      <div className="row align-items-center mt-3">
                        <div className="col-md-4">
                          <label className="col-form-label text-right">
                            Activity Date:
                          </label>
                        </div>
                        <div className="col-md-8">
                          <input
                            type="date"
                            className="form-control readonly-input"
                            value={event.activityDate.split("T")[0]}
                            readOnly
                          />
                        </div>
                      </div>

                      <div className="row align-items-center mt-3">
                        <div className="col-md-4">
                          <label className="col-form-label text-right">
                            Type:
                          </label>
                        </div>
                        <div className="col-md-8">
                          <input
                            type="text"
                            className="form-control readonly-input"
                            value={event.type}
                            readOnly
                          />
                        </div>
                      </div>
                    </div>
                  );
                }
              })}

              <div className="row align-items-center mt-3">
                <div className="col-md-4">
                  <label htmlFor="hours" className="col-form-label text-right">
                    No. of Performances:
                  </label>
                </div>
                <div className="col-md-8">
                  <input
                    type="number"
                    className="form-control readonly-input"
                    value={selectedApplication.fineArts.performances || ""}
                    readOnly
                  />
                </div>
              </div>

              <div className="row align-items-center mt-3">
                <div className="col-md-4">
                  <label htmlFor="proof" className="col-form-label text-right">
                    Proof:
                  </label>
                </div>
                <div className="col-md-8">
                  {selectedApplication.fineArts.proof ? (
                    <img
                      src={selectedApplication.fineArts.proof}
                      alt="img"
                      style={styles}
                    />
                  ) : (
                    <p></p>
                  )}
                </div>
              </div>

              {selectedApplication.isApproved === false && (
                <div className="d-flex justify-content-end ms-5 w-100">
                  <button
                    type="button"
                    form="button"
                    className="primary-btn"
                    onClick={handleSubmit}
                  >
                    APPROVE
                  </button>
                </div>
              )}
            </>
          )}

          {meritBarCtg === "Fundraising" && (
            <>
              {eventsData.frEvents.map((event) => {
                if (event._id === selectedApplication.fundraising.eventID) {
                  return (
                    <div key={selectedApplication.fundraising.eventID}>
                      <div>
                        <h2> Fundraising </h2>
                      </div>

                      <div className="row align-items-center mt-3">
                        <div className="col-md-4">
                          <label className="col-form-label text-left">
                            Activity Name:
                          </label>
                        </div>
                        <div className="col-md-8">
                          <input
                            type="text"
                            className="form-control readonly-input"
                            value={event.activityName}
                            readOnly
                          />
                        </div>
                      </div>

                      <div className="row align-items-center mt-3">
                        <div className="col-md-4">
                          <label className="col-form-label text-right">
                            Activity Date:
                          </label>
                        </div>
                        <div className="col-md-8">
                          <input
                            type="date"
                            className="form-control readonly-input"
                            value={event.activityDate.split("T")[0]}
                            readOnly
                          />
                        </div>
                      </div>

                      <div className="row align-items-center mt-3">
                        <div className="col-md-4">
                          <label className="col-form-label text-right">
                            Location:
                          </label>
                        </div>
                        <div className="col-md-8">
                          <input
                            type="text"
                            className="form-control readonly-input"
                            value={event.location}
                            readOnly
                          />
                        </div>
                      </div>
                    </div>
                  );
                }
              })}

              <div className="row align-items-center mt-3">
                <div className="col-md-4">
                  <label htmlFor="hours" className="col-form-label text-right">
                    Hours Rendered:
                  </label>
                </div>
                <div className="col-md-8">
                  <input
                    type="number"
                    className="form-control readonly-input"
                    value={selectedApplication.fundraising.hours || ""}
                    readOnly
                  />
                </div>
              </div>

              <div className="row align-items-center mt-3">
                <div className="col-md-4">
                  <label htmlFor="proof" className="col-form-label text-right">
                    Proof:
                  </label>
                </div>
                <div className="col-md-8">
                  {selectedApplication.fundraising.proof ? (
                    <img
                      src={selectedApplication.fundraising.proof}
                      alt="img"
                      style={styles}
                    />
                  ) : (
                    <p></p>
                  )}
                </div>
              </div>

              {selectedApplication.isApproved === false && (
                <div className="d-flex justify-content-end ms-5 w-100">
                  <button
                    type="button"
                    form="button"
                    className="primary-btn"
                    onClick={handleSubmit}
                  >
                    APPROVE
                  </button>
                </div>
              )}
            </>
          )}

          {meritBarCtg === "Installing" && (
            <>
              <div>
                <div>
                  <h2> Installing </h2>
                </div>

                <div className="row align-items-center mt-3">
                  <div className="col-md-4">
                    <label className="col-form-label text-left">
                      Activity Date:
                    </label>
                  </div>
                  <div className="col-md-8">
                    <input
                      type="date"
                      className="form-control readonly-input"
                      value={
                        selectedApplication.installing.activityDate.split(
                          "T"
                        )[0]
                      }
                      readOnly
                    />
                  </div>
                </div>

                <div className="row align-items-center mt-3">
                  <div className="col-md-4">
                    <label className="col-form-label text-right">
                      Chapter:
                    </label>
                  </div>
                  <div className="col-md-8">
                    <input
                      type="text"
                      className="form-control readonly-input"
                      value={selectedApplication.installing.chapter}
                      readOnly
                    />
                  </div>
                </div>
              </div>

              <div className="row align-items-center mt-3">
                <div className="col-md-4">
                  <label
                    htmlFor="position"
                    className="col-form-label text-right"
                  >
                    Position:
                  </label>
                </div>
                <div className="col-md-8">
                  <input
                    type="text"
                    className="form-control readonly-input"
                    value={selectedApplication.installing.position || ""}
                    readOnly
                  />
                </div>
              </div>
              <div className="row align-items-center mt-3">
                <div className="col-md-4">
                  <label
                    htmlFor="position"
                    className="col-form-label text-right"
                  >
                    Performance:
                  </label>
                </div>
                <div className="col-md-8">
                  <input
                    type="text"
                    className="form-control readonly-input"
                    value={selectedApplication.installing.performance || ""}
                    readOnly
                  />
                </div>
              </div>
              <div className="row align-items-center mt-3">
                <div className="col-md-4">
                  <label htmlFor="proof" className="col-form-label text-right">
                    Proof:
                  </label>
                </div>
                <div className="col-md-8">
                  {selectedApplication.installing.proof ? (
                    <img
                      src={selectedApplication.installing.proof}
                      alt="img"
                      style={styles}
                    />
                  ) : (
                    <p></p>
                  )}
                </div>
              </div>

              {selectedApplication.isApproved === false && (
                <div className="d-flex justify-content-end ms-5 w-100">
                  <button
                    type="button"
                    form="button"
                    className="primary-btn"
                    onClick={handleSubmit}
                  >
                    SUBMIT
                  </button>
                </div>
              )}
            </>
          )}

          {meritBarCtg === "Journalism" && (
            <>
              <div>
                <div>
                  <h2> Journalism </h2>
                </div>
                <div className="row align-items-center mt-3">
                  <div className="col-md-4">
                    <label className="col-form-label text-right">
                      Article Name:
                    </label>
                  </div>
                  <div className="col-md-8">
                    <input
                      type="text"
                      className="form-control readonly-input"
                      value={selectedApplication.journalism.articleName}
                      readOnly
                    />
                  </div>
                </div>

                <div className="row align-items-center mt-3">
                  <div className="col-md-4">
                    <label className="col-form-label text-left">
                      Date Published:
                    </label>
                  </div>
                  <div className="col-md-8">
                    <input
                      type="date"
                      className="form-control readonly-input"
                      value={
                        selectedApplication.journalism.articleDate.split("T")[0]
                      }
                      readOnly
                    />
                  </div>
                </div>

                <div className="row align-items-center mt-3">
                  <div className="col-md-4">
                    <label className="col-form-label text-right">
                      Article Type:
                    </label>
                  </div>
                  <div className="col-md-8">
                    <input
                      type="text"
                      className="form-control readonly-input"
                      value={selectedApplication.journalism.articleType}
                      readOnly
                    />
                  </div>
                </div>
              </div>

              <div className="row align-items-center mt-3">
                <div className="col-md-4">
                  <label
                    htmlFor="position"
                    className="col-form-label text-right"
                  >
                    Position:
                  </label>
                </div>
                <div className="col-md-8">
                  <input
                    type="text"
                    className="form-control readonly-input"
                    value={selectedApplication.journalism.position || ""}
                    readOnly
                  />
                </div>
              </div>

              <div className="row align-items-center mt-3">
                <div className="col-md-4">
                  <label htmlFor="proof" className="col-form-label text-right">
                    Proof:
                  </label>
                </div>
                <div className="col-md-8">
                  {selectedApplication.journalism.proof ? (
                    <img
                      src={selectedApplication.journalism.proof}
                      alt="img"
                      style={styles}
                    />
                  ) : (
                    <p></p>
                  )}
                </div>
              </div>

              {selectedApplication.isApproved === false && (
                <div className="d-flex justify-content-end ms-5 w-100">
                  <button
                    type="button"
                    form="button"
                    className="primary-btn"
                    onClick={handleSubmit}
                  >
                    SUBMIT
                  </button>
                </div>
              )}
            </>
          )}

          {meritBarCtg === "Masonic Attendance" && (
            <>
              <div>
                <div>
                  <h2> Masonic Attendance </h2>
                </div>
                <div className="row align-items-center mt-3">
                  <div className="col-md-4">
                    <label className="col-form-label text-right">
                      Mason's Full Name:
                    </label>
                  </div>
                  <div className="col-md-8">
                    <input
                      type="text"
                      className="form-control readonly-input"
                      value={
                        selectedApplication.masonicAttendance.masonFullName
                      }
                      readOnly
                    />
                  </div>
                </div>

                <div className="row align-items-center mt-3">
                  <div className="col-md-4">
                    <label className="col-form-label text-left">
                      Date Published:
                    </label>
                  </div>
                  <div className="col-md-8">
                    <input
                      type="date"
                      className="form-control readonly-input"
                      value={
                        selectedApplication.masonicAttendance.dateAttended.split(
                          "T"
                        )[0]
                      }
                      readOnly
                    />
                  </div>
                </div>
              </div>

              <div className="row align-items-center mt-3">
                <div className="col-md-4">
                  <label htmlFor="proof" className="col-form-label text-right">
                    Proof:
                  </label>
                </div>
                <div className="col-md-8">
                  {selectedApplication.masonicAttendance.proof ? (
                    <img
                      src={selectedApplication.masonicAttendance.proof}
                      alt="img"
                      style={styles}
                    />
                  ) : (
                    <p></p>
                  )}
                </div>
              </div>

              {selectedApplication.isApproved === false && (
                <div className="d-flex justify-content-end ms-5 w-100">
                  <button
                    type="button"
                    form="button"
                    className="primary-btn"
                    onClick={handleSubmit}
                  >
                    SUBMIT
                  </button>
                </div>
              )}
            </>
          )}

          {meritBarCtg === "Masonic Service" && (
            <>
              {eventsData.msEvents.map((event) => {
                if (event._id === selectedApplication.masonicService.eventID) {
                  return (
                    <div key={selectedApplication.masonicService.eventID}>
                      <div>
                        <h2> Masonic Service </h2>
                      </div>

                      <div className="row align-items-center mt-3">
                        <div className="col-md-4">
                          <label className="col-form-label text-left">
                            Activity Name:
                          </label>
                        </div>
                        <div className="col-md-8">
                          <input
                            type="text"
                            className="form-control readonly-input"
                            value={event.activityName}
                            readOnly
                          />
                        </div>
                      </div>

                      <div className="row align-items-center mt-3">
                        <div className="col-md-4">
                          <label className="col-form-label text-right">
                            Activity Date:
                          </label>
                        </div>
                        <div className="col-md-8">
                          <input
                            type="date"
                            className="form-control readonly-input"
                            value={event.activityDate.split("T")[0]}
                            readOnly
                          />
                        </div>
                      </div>

                      <div className="row align-items-center mt-3">
                        <div className="col-md-4">
                          <label className="col-form-label text-right">
                            Location:
                          </label>
                        </div>
                        <div className="col-md-8">
                          <input
                            type="text"
                            className="form-control readonly-input"
                            value={event.location}
                            readOnly
                          />
                        </div>
                      </div>
                    </div>
                  );
                }
              })}

              <div className="row align-items-center mt-3">
                <div className="col-md-4">
                  <label htmlFor="hours" className="col-form-label text-right">
                    Hours Rendered:
                  </label>
                </div>
                <div className="col-md-8">
                  <input
                    type="number"
                    className="form-control readonly-input"
                    value={selectedApplication.masonicService.hours || ""}
                    readOnly
                  />
                </div>
              </div>

              <div className="row align-items-center mt-3">
                <div className="col-md-4">
                  <label htmlFor="proof" className="col-form-label text-right">
                    Proof:
                  </label>
                </div>
                <div className="col-md-8">
                  {selectedApplication.masonicService.proof ? (
                    <img
                      src={selectedApplication.masonicService.proof}
                      alt="img"
                      style={styles}
                    />
                  ) : (
                    <p></p>
                  )}
                </div>
              </div>
              {selectedApplication.isApproved === false && (
                <div className="d-flex justify-content-end ms-5 w-100">
                  <button
                    type="button"
                    form="button"
                    className="primary-btn"
                    onClick={handleSubmit}
                  >
                    SUBMIT
                  </button>
                </div>
              )}
            </>
          )}

          {meritBarCtg === "Merit" && (
            <>
              {eventsData.meritEvents.map((event) => {
                if (event._id === selectedApplication.merit.eventID) {
                  return (
                    <div key={selectedApplication.merit.eventID}>
                      <div>
                        <h2> Merit </h2>
                      </div>

                      <div className="row align-items-center mt-3">
                        <div className="col-md-4">
                          <label className="col-form-label text-left">
                            Activity Name:
                          </label>
                        </div>
                        <div className="col-md-8">
                          <input
                            type="text"
                            className="form-control readonly-input"
                            value={event.activityName}
                            readOnly
                          />
                        </div>
                      </div>

                      <div className="row align-items-center mt-3">
                        <div className="col-md-4">
                          <label className="col-form-label text-right">
                            Activity Date:
                          </label>
                        </div>
                        <div className="col-md-8">
                          <input
                            type="date"
                            className="form-control readonly-input"
                            value={event.activityDate.split("T")[0]}
                            readOnly
                          />
                        </div>
                      </div>

                      <div className="row align-items-center mt-3">
                        <div className="col-md-4">
                          <label className="col-form-label text-right">
                            Location:
                          </label>
                        </div>
                        <div className="col-md-8">
                          <input
                            type="text"
                            className="form-control readonly-input"
                            value={event.location}
                            readOnly
                          />
                        </div>
                      </div>
                    </div>
                  );
                }
              })}

              <div className="row align-items-center mt-3">
                <div className="col-md-4">
                  <label htmlFor="hours" className="col-form-label text-right">
                    Hours Rendered:
                  </label>
                </div>
                <div className="col-md-8">
                  <input
                    type="number"
                    className="form-control readonly-input"
                    value={selectedApplication.merit.hours || ""}
                    readOnly
                  />
                </div>
              </div>

              <div className="row align-items-center mt-3">
                <div className="col-md-4">
                  <label htmlFor="proof" className="col-form-label text-right">
                    Proof:
                  </label>
                </div>
                <div className="col-md-8">
                  {selectedApplication.merit.proof ? (
                    <img
                      src={selectedApplication.merit.proof}
                      alt="img"
                      style={styles}
                    />
                  ) : (
                    <p></p>
                  )}
                </div>
              </div>
              {selectedApplication.isApproved === false && (
                <div className="d-flex justify-content-end ms-5 w-100">
                  <button
                    type="button"
                    form="button"
                    className="primary-btn"
                    onClick={handleSubmit}
                  >
                    SUBMIT
                  </button>
                </div>
              )}
            </>
          )}

          {meritBarCtg === "Petitions" && (
            <>
              <div>
                <div>
                  <h2> Petitions </h2>
                </div>
                <div className="row align-items-center mt-3">
                  <div className="col-md-4">
                    <label className="col-form-label text-right">
                      Member's Full Name:
                    </label>
                  </div>
                  <div className="col-md-8">
                    <input
                      type="text"
                      className="form-control readonly-input"
                      value={selectedApplication.petition.memberName}
                      readOnly
                    />
                  </div>
                </div>

                <div className="row align-items-center mt-3">
                  <div className="col-md-4">
                    <label className="col-form-label text-left">
                      Initiatory Degree:
                    </label>
                  </div>
                  <div className="col-md-8">
                    <input
                      type="date"
                      className="form-control readonly-input"
                      value={selectedApplication.petition.idDate.split("T")[0]}
                      readOnly
                    />
                  </div>
                </div>
              </div>

              <div className="row align-items-center mt-3">
                <div className="col-md-4">
                  <label className="col-form-label text-right">Chapter:</label>
                </div>
                <div className="col-md-8">
                  <input
                    type="text"
                    className="form-control readonly-input"
                    value={selectedApplication.petition.chapter}
                    readOnly
                  />
                </div>
              </div>

              <div className="row align-items-center mt-3">
                <div className="col-md-4">
                  <label htmlFor="proof" className="col-form-label text-right">
                    Proof:
                  </label>
                </div>
                <div className="col-md-8">
                  {selectedApplication.petition.proof ? (
                    <img
                      src={selectedApplication.petition.proof}
                      alt="img"
                      style={styles}
                    />
                  ) : (
                    <p></p>
                  )}
                </div>
              </div>
              {selectedApplication.isApproved === false && (
                <div className="d-flex justify-content-end ms-5 w-100">
                  <button
                    type="button"
                    form="button"
                    className="primary-btn"
                    onClick={handleSubmit}
                  >
                    SUBMIT
                  </button>
                </div>
              )}
            </>
          )}

          {meritBarCtg === "Religion" && (
            <>
              <div>
                <h2> Religion </h2>
              </div>

              <div className="row align-items-center mt-3">
                <div className="col-md-4">
                  <label className="col-form-label text-right">Church:</label>
                </div>
                <div className="col-md-8">
                  <input
                    type="text"
                    className="form-control readonly-input"
                    value={selectedApplication.religion.church}
                    readOnly
                  />
                </div>
              </div>

              <div className="row align-items-center mt-3">
                <div className="col-md-4">
                  <label className="col-form-label text-left">Date:</label>
                </div>
                <div className="col-md-8">
                  <input
                    type="date"
                    className="form-control readonly-input"
                    value={selectedApplication.religion.date.split("T")[0]}
                    readOnly
                  />
                </div>
              </div>

              <div className="row align-items-center mt-3">
                <div className="col-md-4">
                  <label className="col-form-label text-right">Location:</label>
                </div>
                <div className="col-md-8">
                  <input
                    type="text"
                    className="form-control readonly-input"
                    value={selectedApplication.religion.location}
                    readOnly
                  />
                </div>
              </div>

              <div className="row align-items-center mt-3">
                <div className="col-md-4">
                  <label htmlFor="proof" className="col-form-label text-right">
                    Proof:
                  </label>
                </div>
                <div className="col-md-8">
                  {selectedApplication.religion.proof ? (
                    <img
                      src={selectedApplication.religion.proof}
                      alt="img"
                      style={styles}
                    />
                  ) : (
                    <p></p>
                  )}
                </div>
              </div>

              {selectedApplication.isApproved === false && (
                <div className="d-flex justify-content-end ms-5 w-100">
                  <button
                    type="button"
                    form="button"
                    className="primary-btn"
                    onClick={handleSubmit}
                  >
                    SUBMIT
                  </button>
                </div>
              )}
            </>
          )}

          {meritBarCtg === "Ritual" && (
            <>
              <div>
                <h2> Ritual </h2>
              </div>

              <div className="row align-items-center mt-3">
                <div className="col-md-4">
                  <label className="col-form-label text-right">Chapter:</label>
                </div>
                <div className="col-md-8">
                  <input
                    type="text"
                    className="form-control readonly-input"
                    value={selectedApplication.ritual.chapter}
                    readOnly
                  />
                </div>
              </div>

              <div className="row align-items-center mt-3">
                <div className="col-md-4">
                  <label className="col-form-label text-left">Date:</label>
                </div>
                <div className="col-md-8">
                  <input
                    type="date"
                    className="form-control readonly-input"
                    value={selectedApplication.ritual.date.split("T")[0]}
                    readOnly
                  />
                </div>
              </div>

              <div className="row align-items-center mt-3">
                <div className="col-md-4">
                  <label className="col-form-label text-right">Position:</label>
                </div>
                <div className="col-md-8">
                  <input
                    type="text"
                    className="form-control readonly-input"
                    value={selectedApplication.ritual.position}
                    readOnly
                  />
                </div>
              </div>

              <div className="row align-items-center mt-3">
                <div className="col-md-4">
                  <label htmlFor="proof" className="col-form-label text-right">
                    Proof:
                  </label>
                </div>
                <div className="col-md-8">
                  {selectedApplication.ritual.proof ? (
                    <img
                      src={selectedApplication.ritual.proof}
                      alt="img"
                      style={styles}
                    />
                  ) : (
                    <p></p>
                  )}
                </div>
              </div>

              {selectedApplication.isApproved === false && (
                <div className="d-flex justify-content-end ms-5 w-100">
                  <button
                    type="button"
                    form="button"
                    className="primary-btn"
                    onClick={handleSubmit}
                  >
                    SUBMIT
                  </button>
                </div>
              )}
            </>
          )}

          {meritBarCtg === "Scholastics" && (
            <>
              <div>
                <h2> Scholastics </h2>
              </div>

              <div className="row align-items-center mt-3">
                <div className="col-md-4">
                  <label className="col-form-label text-right">School:</label>
                </div>
                <div className="col-md-8">
                  <input
                    type="text"
                    className="form-control readonly-input"
                    value={selectedApplication.scholastics.school}
                    readOnly
                  />
                </div>
              </div>

              <div className="row align-items-center mt-3">
                <div className="col-md-4">
                  <label className="col-form-label text-right">
                    School Year:
                  </label>
                </div>
                <div className="col-md-8">
                  <input
                    type="text"
                    className="form-control readonly-input"
                    value={selectedApplication.scholastics.schoolYear}
                    readOnly
                  />
                </div>
              </div>

              <div className="row align-items-center mt-3">
                <div className="col-md-4">
                  <label className="col-form-label text-right">Semester:</label>
                </div>
                <div className="col-md-8">
                  <input
                    type="text"
                    className="form-control readonly-input"
                    value={selectedApplication.scholastics.semester}
                    readOnly
                  />
                </div>
              </div>

              <div className="row align-items-center mt-3">
                <div className="col-md-4">
                  <label className="col-form-label text-right">
                    Average Grade:
                  </label>
                </div>
                <div className="col-md-8">
                  <input
                    type="text"
                    className="form-control readonly-input"
                    value={selectedApplication.scholastics.aveGrade}
                    readOnly
                  />
                </div>
              </div>

              <div className="row align-items-center mt-3">
                <div className="col-md-4">
                  <label htmlFor="proof" className="col-form-label text-right">
                    Proof:
                  </label>
                </div>
                <div className="col-md-8">
                  {selectedApplication.scholastics.proof ? (
                    <img
                      src={selectedApplication.scholastics.proof}
                      alt="img"
                      style={styles}
                    />
                  ) : (
                    <p></p>
                  )}
                </div>
              </div>

              {selectedApplication.isApproved === false && (
                <div className="d-flex justify-content-end ms-5 w-100">
                  <button
                    type="button"
                    form="button"
                    className="primary-btn"
                    onClick={handleSubmit}
                  >
                    SUBMIT
                  </button>
                </div>
              )}
            </>
          )}

          {meritBarCtg === "Visitation" && (
            <>
              <div>
                <h2> Visitation </h2>
              </div>

              <div className="row align-items-center mt-3">
                <div className="col-md-4">
                  <label className="col-form-label text-right">Chapter:</label>
                </div>
                <div className="col-md-8">
                  <input
                    type="text"
                    className="form-control readonly-input"
                    value={selectedApplication.visitation.chapter}
                    readOnly
                  />
                </div>
              </div>

              <div className="row align-items-center mt-3">
                <div className="col-md-4">
                  <label className="col-form-label text-left">Date:</label>
                </div>
                <div className="col-md-8">
                  <input
                    type="date"
                    className="form-control readonly-input"
                    value={selectedApplication.visitation.date.split("T")[0]}
                    readOnly
                  />
                </div>
              </div>

              <div className="row align-items-center mt-3">
                <div className="col-md-4">
                  <label htmlFor="proof" className="col-form-label text-right">
                    Proof:
                  </label>
                </div>
                <div className="col-md-8">
                  {selectedApplication.visitation.proof ? (
                    <img
                      src={selectedApplication.visitation.proof}
                      alt="img"
                      style={styles}
                    />
                  ) : (
                    <p></p>
                  )}
                </div>
              </div>

              {selectedApplication.isApproved === false && (
                <div className="d-flex justify-content-end ms-5 w-100">
                  <button
                    type="button"
                    form="button"
                    className="primary-btn"
                    onClick={handleSubmit}
                  >
                    SUBMIT
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default EventsValidation;
