import { Link, useLocation, useNavigate } from "react-router-dom";
import "../../styles/base.css";
import "../../styles/Events.css";
import { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faFilter } from "@fortawesome/free-solid-svg-icons";

import axios from "axios";
import { useEffect, useState } from "react";

const RenderTableData = () => {
  const tableData = [
    ["1", "Attendance", "Validated", "1st"],
    ["2", "Athletic", "Not Started", "N/A"],
    ["3", "Civic Service", "Not Started", "N/A"],
    ["4", "Conclave", "Validated", "2nd"],
    ["5", "Fine Arts", "Not Started", "N/A"],
  ];

  return tableData.map((rowData, index) => {
    const [col1, col2, col3, col4] = rowData;
    return (
      <tr key={index}>
        <td>{col1}</td>
        <td>{col2}</td>
        <td>{col3}</td>
        <td>{col4}</td>
        <td>
          <button
            type="submit"
            form="submit"
            className="primary-btn"
            value="VIEW"
          >
            VIEW
          </button>
        </td>
      </tr>
    );
  });
};

function EventsHome() {
  const location = useLocation();
  const navigate = useNavigate();
  const prevPageProps = location.state;

  // sample init data
<<<<<<< Updated upstream
  const [userData, setUserData] = useState({
    userID: "0118-27061",
    name: "Philip Tolentino",
    position: "Scribe",
    chapterID: "1",
  });

  const [eventsData, setEventsData] = useState({});

=======
  // const [userData, setUserData] = useState({
  //   userID: "0118-27061",
  //   name: "Philip Tolentino",
  //   chapterID: "1",
  // });

  const [userData, setUserData] = useState({});
  const [eventsData, setEventsData] = useState({});

  const [applications, setApplications] = useState([]);
  const [filteredApplications, setFilteredApplications] = useState([]);
  const [selectedApplication, setSelectedApplication] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);

  const [meritBarCtg, setCategory] = useState(0);

  const handleNavigation = (action) => {
    let nextIndex;
    if (action === "prev") {
      nextIndex = currentIndex === 0 ? currentIndex : currentIndex - 1;
    } else if (action === "next") {
      nextIndex =
        currentIndex === filteredApplications.length - 1
          ? currentIndex
          : currentIndex + 1;
    }

    setCurrentIndex(nextIndex);
    setSelectedApplication(filteredApplications[nextIndex]);
  };

>>>>>>> Stashed changes
  useEffect(() => {
    async function fetchEventsData() {
      axios
        .get(`http://localhost:5000/getEvents/${userData.chapterID}`)
        .then(async (res1) => {
<<<<<<< Updated upstream
          if (res1.data[0] !== undefined) {
            console.log("EXISTING EVENTS: ", res1.data[0]);
            setEventsData(res1.data[0]);
          } else {
            console.log("NO EXISTING EVENTS: ", eventsData);
          }
        });
=======
          if (res1.data !== "") {
            console.log("EXISTING APPLICATIONS: ", res1.data);
            setApplications(res1.data);
          } else {
            console.log("NO APPLICATIONS");
          }
        });

      setEventsData(events.data);
>>>>>>> Stashed changes
    }

    fetchEventsData();
  }, []);

<<<<<<< Updated upstream
=======
  const styles = {
    maxWidth: "200px",
    maxHeight: "200px",
    objectFit: "contain",
  };

  const handleSubmit = () => {
    const props = {
      fieldToUpdate: "isSubmitted",
      updateValue: true,
    };

    axios
      .post(
        `http://localhost:5000/updateAwardApplication/${selectedApplication._id}`,
        props
      )
      .then((res) => {
        console.log("Updated and submitted application: " + res.data);
        window.location.reload();
      });
  };

  const RenderTableData = () => {
    const tableData = [
      ["1", "Attendance"],
      ["2", "Athletic"],
      ["3", "Civic Service"],
      ["4", "Conclave"],
      ["5", "Fine Arts"],
      ["6", "Fundraising"],
      ["7", "Installing"],
      ["8", "Journalism"],
      ["9", "Masonic Attendance"],
      ["10", "Masonic Service"],
      ["11", "Merit"],
      ["12", "Petitions"],
      ["13", "Religion"],
      ["14", "Ritual"],
      ["15", "Scholastics"],
      ["16", "Visitation"],
    ];

    return tableData.map((rowData, index) => {
      const [col1, col2] = rowData;
      return (
        <tr key={index}>
          <td>{col1}</td>
          <td>{col2}</td>
          <td>
            <button
              type="submit"
              form="submit"
              className="btn small"
              value="VIEW"
              onClick={() => {
                const ctg = index + 1;

                if (ctg === 1) {
                  const filtered = applications.filter((application) => {
                    if (application.type === "Attendance") {
                      return true;
                    } else {
                      return false;
                    }
                  });

                  if (filtered.length > 0) {
                    setFilteredApplications(filtered);
                    setSelectedApplication(filtered[currentIndex]);
                    setCategory(ctg);
                  } else {
                    setFilteredApplications([]);
                    setSelectedApplication({});
                  }
                }
              }}
            >
              VIEW
            </button>
          </td>
        </tr>
      );
    });
  };

>>>>>>> Stashed changes
  return (
    <div className="container">
      <br />
      <nav className="eventsNavbar">
        <table className="navbar-table">
          <tbody>
            <tr className="navbar-row">
              <td>
                <a
                  href=""
                  onClick={() => {
<<<<<<< Updated upstream
                    navigate("/eventsAttendance", {
                      state: {
                        eventsData: eventsData,
                      },
=======
                    const filtered = applications.filter((application) => {
                      if (application.type === "Attendance") {
                        return true;
                      } else {
                        return false;
                      }
>>>>>>> Stashed changes
                    });

                    const submitted = filtered.filter((application) => {
                      if (
                        application.isSubmitted === true &&
                        application.isApproved === false
                      ) {
                        return true;
                      } else {
                        return false;
                      }
                    });

                    const approved = filtered.filter((application) => {
                      if (
                        application.isSubmitted === true &&
                        application.isApproved === true
                      ) {
                        return true;
                      } else {
                        return false;
                      }
                    });

                    console.log(filtered, submitted, approved);

                    if (submitted.length > 0) {
                      alert(
                        "You have an on-going application. You may only apply after it has been reviewed and approved."
                      );
                    } else {
                      if (approved.length < 5) {
                        let nextColor;

                        if (approved.length === 0) {
                          nextColor = "White";
                        } else if (approved.length === 1) {
                          nextColor = "Red";
                        } else if (approved.length === 2) {
                          nextColor = "Blue";
                        } else if (approved.length === 3) {
                          nextColor = "Purple";
                        } else if (approved.length === 4) {
                          nextColor = "Gold";
                        }

                        navigate("/eventsAttendance", {
                          state: {
                            userData: userData,
                            applications: filtered,
                            eventsData: eventsData,
                            color: nextColor,
                          },
                        });
                      } else if (approved.length >= 5) {
                        alert(
                          "You already have 5 approved applications and achieved the highest rank (Gold) for Attendance."
                        );
                        return;
                      }
                    }
                  }}
                >
                  Attendance
                </a>
              </td>
              <td>
                <a href="/eventsAthletic">Athletics</a>
              </td>
              <td>
                <a href="/eventsCivicService">Civic Service</a>
              </td>
              <td>
                <a href="/eventsConclave">Conclave</a>
              </td>
              <td>
                <a href="/eventsFineArts">Fine Arts</a>
              </td>
              <td>
                <a href="/eventsFundRaising">Fundraising</a>
              </td>
              <td>
                <a href="/eventsInstalling">Installing</a>
              </td>
              <td>
                <a href="/eventsJournalism">Journalism</a>
              </td>
            </tr>
            <tr className="navbar-row">
              <td>
                <a href="/eventsMasonicAttendance">Masonic Attendance</a>
              </td>
              <td>
                <a href="/eventsMasonicService">Masonic Service</a>
              </td>
              <td>
                <a href="/eventsMerit">Merit</a>
              </td>
              <td>
                <a href="/eventsPetitions">Petitions</a>
              </td>
              <td>
                <a href="/eventsReligion">Religion</a>
              </td>
              <td>
                <a href="/eventsRitual">Ritual</a>
              </td>
              <td>
                <a href="/eventsScholastics">Scholastics</a>
              </td>
              <td>
                <a href="/eventsVisitation">Visitation</a>
              </td>
            </tr>
          </tbody>
        </table>
      </nav>
      <br />

      {/* Header */}

      <div className="d-flex justify-content-between align-items-center mb-3">
        <h1> Events </h1>
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

        <div className="col-md-6">
          <table className="table">
            <thead>
              <tr>
                <th>No.</th>
                <th>Merit Bar</th>
                <th>Status</th>
                <th>No. of Instance</th>
                <th>View</th>
              </tr>
            </thead>
            <tbody>{<RenderTableData />}</tbody>
          </table>
        </div>

        {/* Vertical Line */}

        <div className="col-md-1">
          <div className="vl"></div>
        </div>

        {/* Second Column */}

        <div className="col-md-5 mx-auto">
<<<<<<< Updated upstream
          <h2> Attendance </h2>
          <div className="row align-items-center mt-3">
            <div className="col-md-4">
              <label htmlFor="term" className="col-form-label text-left">
                Term:
              </label>
            </div>
            <div className="col-md-8">
              <input
                type="text"
                className="form-control readonly-input"
                value="2023 - A"
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
                value="Meeting 1"
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
                type="text"
                className="form-control readonly-input"
                value="01/01/23"
                readOnly
              />
            </div>
          </div>
          <div className="row align-items-center mt-3">
            <div className="col-md-4">
              <label htmlFor="position" className="col-form-label text-right">
                Position:
              </label>
            </div>
            <div className="col-md-8">
              <input
                type="text"
                className="form-control readonly-input"
                value="Junior Deacon"
                readOnly
              />
            </div>
          </div>
          <div className="row align-items-center mt-3">
            <div className="col-md-4">
              <label htmlFor="position" className="col-form-label text-right">
                Performance:
              </label>
            </div>
            <div className="col-md-8">
              <input
                type="text"
                className="form-control readonly-input"
                value="Beginner"
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
              <input
                type="text"
                className="form-control readonly-input"
                value=" "
                readOnly
              />
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
              >
                NEXT
              </button>
            </div>
          </div>
=======
          {meritBarCtg === 1 && (
            <>
              {eventsData.attendanceEvents.map((event) => {
                if (event._id === selectedApplication.attendance.eventID) {
                  return (
                    <div key={selectedApplication.attendance.eventID}>
                      <div>
                        <h2> Attendance </h2>
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

              {/* Buttons  */}
              {applications.length > 1 && (
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
              )}
              {selectedApplication.isSubmitted === false && (
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
>>>>>>> Stashed changes
        </div>
      </div>
    </div>
  );
}

export default EventsHome;
