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
  //   chapterID: "1",
  // });
  const [userData, setUserData] = useState({});
  const [application, setApplication] = useState({});
  const [eventsData, setEventsData] = useState({});

  const [currentList, setCurrentList] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentDisplay, setCurrentDisplay] = useState({});

  const [meritBarCtg, setCategory] = useState(0);

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
        .get(`http://localhost:5000/getAwardApplications/${user.data._id}`)
        .then(async (res1) => {
          if (res1.data !== "") {
            console.log("APPLICATIONS EXIST: ", res1.data);
            setApplication(res1.data);

            setCurrentList(res1.data.attendance);
            setCurrentDisplay(res1.data.attendance[currentIndex]);
          } else {
            console.log("NO EXISTING APPLICATION YET");

            const newApplication = {
              applicantID: user.data._id,
              name: user.data.givenName + " " + user.data.lastName,
              chapterID: user.data.chapterId,
            };

            axios
              .post(`http://localhost:5000/newAwardApplication`, newApplication)
              .then((res2) => {
                setApplication(res2.data);
              });
          }
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
      fieldToUpdate: "isSubmitted",
      updateValue: true,
    };

    axios
      .post(
        `http://localhost:5000/updateAwardApplication/${application._id}`,
        props
      )
      .then((res) => {
        console.log("Updated and submitted application: " + res.data);
        setApplication(res.data);
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
              className="primary-btn small"
              value="VIEW"
              onClick={() => {
                setCurrentIndex(0);
                setCategory(index + 1);
              }}
            >
              VIEW
            </button>
          </td>
        </tr>
      );
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
                <a
                  href=""
                  onClick={() => {
                    navigate("/eventsAttendance", {
                      state: {
                        userData: userData,
                        applications: application,
                        eventsData: eventsData,
                      },
                    });
                  }}
                >
                  Attendance
                </a>
              </td>
              <td>
                <a href="/eventsAthletic">Athletic</a>
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
                <a href="/eventsFundRaising">Fund Raising</a>
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
            <tbody>{<RenderTableData />}</tbody>
          </table>
        </div>

        {/* Vertical Line */}

        <div className="col-md-1">
          <div className="vl"></div>
        </div>

        {/* Second Column */}
        <div className="col-md-5 mx-auto">
          {meritBarCtg === 1 && (
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
              {application.attendance.length >= 6 && (
                <div className="d-flex justify-content-end ms-5 w-100">
                  <button
                    type="button"
                    form="button"
                    className="primary-btn"
                    value="NEXT"
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
              {eventsData.attendanceEvents.map((event) => {
                if (event._id === currentList[currentIndex].eventID) {
                  return <></>;
                }
              })}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default EventsHome;
