import { Link, useLocation, useNavigate } from "react-router-dom";
import "../../styles/base.css";
import "../../styles/Events.css";
import { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faFilter } from "@fortawesome/free-solid-svg-icons";

import axios from "axios";
import { useEffect, useState } from "react";

function EventsHome() {
  const location = useLocation();
  const navigate = useNavigate();
  const prevPageProps = location.state;

  // sample init data
  // const [userData, setUserData] = useState({
  //   userID: "0118-27061",
  //   name: "Philip Tolentino",
  //   position: "Scribe",
  //   chapterID: "1",
  // });

  const [userData, setUserData] = useState({});
  const [eventsData, setEventsData] = useState({});

  const [applications, setApplications] = useState([]);
  const [filteredApplications, setFilteredApplications] = useState([]);
  const [selectedApplication, setSelectedApplication] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);

  const [meritBarCtg, setCategory] = useState(-2);

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

  useEffect(() => {
    async function fetchEventsData() {
      const user = await axios.get("http://localhost:5000/getCurrentUser");

      console.log("POSITION",user.data.position)

      if(user.data.position == "Chapter Advisor"){
        console.log("NATRIGGER AKO")
        window.location.href = '/eventsValidation'
      } else {
        console.log("DI NATRIGGER")
        setUserData({
          ...userData,
          userID: user.data._id,
          name: user.data.givenName + " " + user.data.lastName,
          chapterID: user.data.chapterId,
          position: user.data.position,
        });   
  
        const events = await axios.get(
          `http://localhost:5000/getEvents/${user.data.chapterId}`
        );
  
        axios
          .get(`http://localhost:5000/getAwardApplications/${user.data._id}`)
          .then(async (res1) => {
            if (res1.data !== "") {
              console.log("EXISTING APPLICATIONS: ", res1.data);
              setApplications(res1.data);
              setCategory(-1);
            } else {
              console.log("NO APPLICATIONS");
            }
          });
  
        console.log(events.data);
  
        setEventsData(events.data);
      }

     
    }

    fetchEventsData();
  }, []);

  const styles = {
    maxWidth: "200px",
    maxHeight: "200px",
    objectFit: "contain",
  };

  const RenderTableData = () => {
    const tableData = [
      ["1", "Attendance"],
      ["2", "Athletics"],
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
              type="button"
              form="submit"
              className="btn small"
              value="VIEW"
              onClick={() => {
                setCurrentIndex(0);
                const ctg = index + 1;
                const type = col2;

                const filtered = applications.filter((application) => {
                  if (application.type === type) {
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
                  setCategory(0);
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

  const handleNavigationClick = (type) => () => {
    let newType;

    if (type === "CivicService") {
      newType = "CivicService";
    } else if (type === "FineArts") {
      newType = "Fine Arts";
    } else if (type === "MasonicAttendance") {
      newType = "Masonic Attendance";
    } else if (type === "MasonicService") {
      newType = "Masonic Service";
    } else {
      newType = type;
    }

    const filtered = applications.filter((application) => {
      if (application.type === newType) {
        return true;
      } else {
        return false;
      }
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
      if (application.isSubmitted === true && application.isApproved === true) {
        return true;
      } else {
        return false;
      }
    });

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

        navigate(`/events${type}`, {
          state: {
            userData: userData,
            applications: filtered,
            eventsData: eventsData,
            color: nextColor,
            type: newType,
          },
        });
      } else if (approved.length >= 5) {
        alert(
          `You already have 5 approved applications and achieved the highest rank (Gold) for ${type}.`
        );
        return;
      }
    }
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

  return (
    <div className="container">
      <br />
      <nav className="eventsNavbar">
        <table className="navbar-table">
          <tbody>
            <tr className="navbar-row">
              <td>
                <a href="" onClick={handleNavigationClick("Attendance")}>
                  Attendance
                </a>
              </td>
              <td>
                <a href="" onClick={handleNavigationClick("Athletics")}>
                  Athletics
                </a>
              </td>
              <td>
                <a href="" onClick={handleNavigationClick("CivicService")}>
                  Civic Service
                </a>
              </td>
              <td>
                <a href="" onClick={handleNavigationClick("Conclave")}>
                  Conclave
                </a>
              </td>
              <td>
                <a href="" onClick={handleNavigationClick("FineArts")}>
                  Fine Arts
                </a>
              </td>
              <td>
                <a href="" onClick={handleNavigationClick("Fundraising")}>
                  Fundraising
                </a>
              </td>
              <td>
                <a href="" onClick={handleNavigationClick("Installing")}>
                  Installing
                </a>
              </td>
              <td>
                <a href="" onClick={handleNavigationClick("Journalism")}>
                  Journalism
                </a>
              </td>
            </tr>
            <tr className="navbar-row">
              <td>
                <a href="" onClick={handleNavigationClick("MasonicAttendance")}>
                  Masonic Attendance
                </a>
              </td>
              <td>
                <a href="" onClick={handleNavigationClick("MasonicService")}>
                  Masonic Service
                </a>
              </td>
              <td>
                <a href="" onClick={handleNavigationClick("Merit")}>
                  Merit
                </a>
              </td>
              <td>
                <a href="" onClick={handleNavigationClick("Petitions")}>
                  Petitions
                </a>
              </td>
              <td>
                <a href="" onClick={handleNavigationClick("Religion")}>
                  Religion
                </a>
              </td>
              <td>
                <a href="" onClick={handleNavigationClick("Ritual")}>
                  Ritual
                </a>
              </td>
              <td>
                <a href="" onClick={handleNavigationClick("Scholastics")}>
                  Scholastics
                </a>
              </td>
              <td>
                <a href="" onClick={handleNavigationClick("Visitation")}>
                  Visitation
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </nav>
      <br />

      {/* Header */}

      <div className="d-flex justify-content-between align-items-center mb-3">
        <h1> Events </h1>
        {userData.position === "Scribe" && (
          <Link to="/eventsAdd">
            <button type="button" form="submit" className="primary-btn">
              CREATE NEW EVENT
            </button>
          </Link>
        )}
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

        <div
          className="col-md-3"
          style={{ maxHeight: "550px", overflowY: "auto" }}
        >
          <table className="table">
            <thead>
              <tr>
                <th>No.</th>
                <th>Merit Bar</th>
                <th>View</th>
              </tr>
            </thead>
            {applications.length > 0 && <tbody>{<RenderTableData />}</tbody>}
          </table>
        </div>

        {/* Vertical Line */}

        <div className="col-md-1">
          <div className="vl"></div>
        </div>

        {/* Second Column */}

        <div className="col-md-5 mx-auto">
          {meritBarCtg === -2 && (
            <div>
              <div>
                <h2>Loading...</h2>
              </div>
            </div>
          )}

          {meritBarCtg === -1 && applications.length > 0 && (
            <div>
              <h3>
                <i>Choose a category on the left to manage.</i>
              </h3>
            </div>
          )}

          {(meritBarCtg === -1 && applications.length === 0) ||
            (meritBarCtg === 0 && (
              <div>
                <div>
                  <h2> No data to display.</h2>
                </div>
              </div>
            ))}

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

          {meritBarCtg === 2 && (
            <>
              {eventsData.athleticEvents.map((event) => {
                if (event._id === selectedApplication.athletics.eventID) {
                  return (
                    <div key={selectedApplication.athletics.eventID}>
                      <div>
                        <h2> Athletics </h2>
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

              {/* Buttons  */}
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

          {meritBarCtg === 3 && (
            <>
              {eventsData.csEvents.map((event) => {
                if (event._id === selectedApplication.civicService.eventID) {
                  return (
                    <div key={selectedApplication.civicService.eventID}>
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

              {/* Buttons  */}
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

          {meritBarCtg === 4 && (
            <>
              {eventsData.conclaves.map((event) => {
                if (event._id === selectedApplication.conclave.eventID) {
                  return (
                    <div key={selectedApplication.conclave.eventID}>
                      <div>
                        <h2> Conclave </h2>
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

              {/* Buttons  */}
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

          {meritBarCtg === 5 && (
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

              {/* Buttons  */}
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

          {meritBarCtg === 6 && (
            <>
              {eventsData.frEvents.map((event) => {
                if (event._id === selectedApplication.fundraising.eventID) {
                  return (
                    <div key={selectedApplication.fundraising.eventID}>
                      <div>
                        <h2> Fundraising </h2>
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

              {/* Buttons  */}
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

          {meritBarCtg === 7 && (
            <>
              <div>
                <div>
                  <h2> Installing </h2>
                  {selectedApplication.isSubmitted === true && (
                    <span className="badge text-bg-info ms-2">Submitted</span>
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

              {/* Buttons  */}
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
        </div>
      </div>
    </div>
  );
}

export default EventsHome;
