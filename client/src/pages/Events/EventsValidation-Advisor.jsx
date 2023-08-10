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
        </div>
      </div>
    </div>
  );
}

export default EventsValidation;
