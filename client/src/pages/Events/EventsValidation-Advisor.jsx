import { Link } from "react-router-dom";
import "../../styles/base.css";
import "../../styles/Events.css";
import { Component } from "react";
import axios from "axios";
import { useEffect, useState } from "react";

import React from "react";

function EventsValidation() {
  const [userData, setUserData] = useState({});
  const [eventsData, setEventsData] = useState({});

  const [selectedApplication, setSelectedApplication] = useState({});
  const [currentList, setCurrentList] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentDisplay, setCurrentDisplay] = useState({});

  const [applicationData, setApplicationData] = useState({
    applications: [],
    filteredApplications: [],
  });

  const [meritBars, setCategory] = useState({
    meritBars: [
      {
        key: "Attendance",
        value: 1,
      },
      {
        key: "Athletic",
        value: 2,
      },
      {
        key: "Civil Service",
        value: 3,
      },
      {
        key: "Conclave",
        value: 4,
      },
      {
        key: "Fine Arts",
        value: 5,
      },
      {
        key: "Fundraising",
        value: 6,
      },
      {
        key: "Installing",
        value: 7,
      },
      {
        key: "Journalism",
        value: 8,
      },
      {
        key: "Merit",
        value: 9,
      },
      {
        key: "Petitions",
        value: 10,
      },
      {
        key: "Visitation",
        value: 11,
      },
    ],

    meritBarCtg: 0,
  });

  const handleNavigation = (action) => {
    if (action === "prev") {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? prevIndex : prevIndex - 1
      );
    } else if (action === "next") {
      setCurrentIndex((prevIndex) =>
        prevIndex === currentList.length - 1 // change which list is being displayed
          ? prevIndex
          : prevIndex + 1
      );
    }

    setCurrentDisplay(currentList[currentIndex]);
  };

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

  const onChangeMeritBar = (e) => {
    setCategory({
      ...meritBars,
      meritBarCtg: e.target.value,
    });

    if (+e.target.value === 1) {
      setCurrentList(selectedApplication.attendance);
      setCurrentDisplay(selectedApplication.attendance[currentIndex]);
    }
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
        console.log("Updated and submitted application: " + res.data);
        window.location.href = "/eventsvalidation";
      });
  };

  return (
    <div className="container">
      <br />

      {/* Header */}

      <div className="d-flex justify-content-between align-items-center mb-3">
        <h1> Request for Merit Bars </h1>
        <div className="row align-items-center mt-3">
          <div className="col-md-4">
            <label htmlFor="meritBar" className="col-form-label text-right">
              Merit Bar:
            </label>
          </div>
          <div className="col-md-7">
            <select
              className="form-select"
              name="meritBar"
              id="meritBar"
              value={meritBars.meritBarCtg}
              onChange={onChangeMeritBar}
            >
              <option value="" disabled={meritBars.meritBarCtg !== 0} hidden>
                Select Merit Bar
              </option>
              {meritBars.meritBars.map(function (meritBar) {
                return (
                  <option value={meritBar.value} key={meritBar.key}>
                    {" "}
                    {meritBar.key}{" "}
                  </option>
                );
              })}
            </select>{" "}
          </div>
        </div>
      </div>
      <hr />

      <div className="row">
        {/* First Column */}

        <div className="col-md-6">
          <table className="table table-bordered-custom">
            <thead className="thead-custom">
              <tr>
                <th>Name of Applicant</th>
                <th>Chapter</th>
                <th>View Merit Bar Application</th>
              </tr>
            </thead>
            <tbody>
              {applicationData.filteredApplications.map(function (application) {
                return (
                  <tr key={application.applicantID}>
                    <td>{application.name}</td>
                    <td>{application.chapterID}</td>
                    <td>
                      <button
                        className="btn btn-primary"
                        onClick={() => {
                          setSelectedApplication(application);
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
          {meritBars.meritBarCtg === "1" && (
            <>
              {eventsData.attendanceEvents.map((event) => {
                if (event._id === currentList[currentIndex].eventID) {
                  return (
                    <div key={currentList[currentIndex].eventID}>
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
                    value={currentList[currentIndex].position || ""}
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
                    value={currentList[currentIndex].performance || ""}
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
                  {currentList[currentIndex].proof ? (
                    <img
                      src={currentList[currentIndex].proof}
                      alt="img"
                      style={styles}
                    />
                  ) : (
                    <p></p>
                  )}
                </div>
              </div>

              {/* Buttons */}

              <div className="d-flex justify-content-center mt-4">
                <div className="mr-2">
                  <button
                    type="button"
                    form="button"
                    className="primary-btn"
                    value="PREVIOUS"
                    onClick={() => handleNavigation("prev")}
                  >
                    PREVIOUS
                  </button>
                </div>
                <div className="ms-2">
                  <button
                    type="button"
                    form="button"
                    className="primary-btn"
                    value="NEXT"
                    onClick={() => handleNavigation("next")}
                  >
                    NEXT
                  </button>
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
                    VALIDATE
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
