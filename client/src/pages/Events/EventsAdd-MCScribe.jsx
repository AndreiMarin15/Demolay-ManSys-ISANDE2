import { Link, useLocation, useNavigate } from "react-router-dom";
import "../../styles/base.css";
import "../../styles/Events.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

function EventsAdd() {
  const location = useLocation();
  const navigate = useNavigate();
  const prevPageProps = location.state;

  // sample init data
  const [userData, setUserData] = useState({
    userID: "0118-27061",
    name: "Philip Tolentino",
    position: "Scribe",
    chapterID: "37",
  });

  const [chapters, setChapters] = useState([]);
  const [eventsData, setEventsData] = useState({});
  const [newEvent, setNewEvent] = useState([]);
  const [formData, setFormData] = useState({
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
        key: "Civic Service",
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
        key: "Masonic Service",
        value: 7,
      },
      {
        key: "Merit",
        value: 8,
      },
    ],

    meritBar: 0,
  });

  useEffect(() => {
    {
      /* Add fetch userData for current user from members and return id, name, position, chapter */
    }

    const fetchEventsData = async () => {
      try {
        const res1 = await axios.get(
          `http://localhost:5000/getEvents/${userData.chapterID}`
        );
        if (res1.data) {
          console.log("EXISTING EVENTS: ", res1.data);
          setEventsData(res1.data);
        } else {
          console.log("NO EXISTING EVENTS");
          const newEvents = {
            chapterID: userData.chapterID,
          };
          const res2 = await axios.post(
            `http://localhost:5000/newEvents`,
            newEvents
          );
          setEventsData(res2.data);
        }
      } catch (error) {
        console.error("Error fetching events data:", error);
      }
    };

    axios
      .get("http://localhost:5000/getAllChapters")
      .then((res) => {
        setChapters(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

    fetchEventsData();
  }, []);

  useEffect(() => {
    console.log(newEvent);
  }, [newEvent]);

  const onChangeMeritBar = (e) => {
    setFormData({
      ...formData,
      meritBar: e.target.value,
    });

    setNewEvent([]);
  };

  const handleCreateNewEvent = () => {
    if (formData.meritBar == 1) {
      if (!newEvent.meetingName || !newEvent.meetingDate || !newEvent.term) {
        alert("Please fill in all the required fields.");
        return;
      }
    }

    handleCreate();
  };

  const handleCreate = () => {
    try {
      if (formData.meritBar == 1) {
        eventsData.attendanceEvents.push(newEvent);

        const props = {
          fieldToUpdate: "attendanceEvents",
          updateValue: eventsData.attendanceEvents,
        };

        axios
          .post(`http://localhost:5000/updateEvents/${eventsData._id}`, props)
          .then((res) => {
            console.log("Added new event: " + res);
          });
      } else if (formData.meritBar == 2) {
        eventsData.athleticEvents.push(newEvent);

        const props = {
          fieldToUpdate: "athleticEvents",
          updateValue: eventsData.athleticEvents,
        };

        axios
          .post(`http://localhost:5000/updateEvents/${eventsData._id}`, props)
          .then((res) => {
            console.log("Added new event: " + res);
          });
      } else if (formData.meritBar == 3) {
        eventsData.csEvents.push(newEvent);

        const props = {
          fieldToUpdate: "csEvents",
          updateValue: eventsData.csEvents,
        };

        axios
          .post(`http://localhost:5000/updateEvents/${eventsData._id}`, props)
          .then((res) => {
            console.log("Added new event: " + res);
          });
      } else if (formData.meritBar == 4) {
        eventsData.conclaves.push(newEvent);

        const props = {
          fieldToUpdate: "conclaves",
          updateValue: eventsData.conclaves,
        };

        axios
          .post(`http://localhost:5000/updateEvents/${eventsData._id}`, props)
          .then((res) => {
            console.log("Added new event: " + res);
          });
      } else if (formData.meritBar == 5) {
        eventsData.faEvents.push(newEvent);

        const props = {
          fieldToUpdate: "faEvents",
          updateValue: eventsData.faEvents,
        };

        axios
          .post(`http://localhost:5000/updateEvents/${eventsData._id}`, props)
          .then((res) => {
            console.log("Added new event: " + res);
          });
      } else if (formData.meritBar == 6) {
        eventsData.frEvents.push(newEvent);

        const props = {
          fieldToUpdate: "frEvents",
          updateValue: eventsData.frEvents,
        };

        axios
          .post(`http://localhost:5000/updateEvents/${eventsData._id}`, props)
          .then((res) => {
            console.log("Added new event: " + res);
          });
      } else if (formData.meritBar == 7) {
        eventsData.msEvents.push(newEvent);

        const props = {
          fieldToUpdate: "msEvents",
          updateValue: eventsData.msEvents,
        };

        axios
          .post(`http://localhost:5000/updateEvents/${eventsData._id}`, props)
          .then((res) => {
            console.log("Added new event: " + res);
          });
      } else if (formData.meritBar == 8) {
        eventsData.meritEvents.push(newEvent);

        const props = {
          fieldToUpdate: "meritEvents",
          updateValue: eventsData.meritEvents,
        };

        axios
          .post(`http://localhost:5000/updateEvents/${eventsData._id}`, props)
          .then((res) => {
            console.log("Added new event: " + res);
          });
      }

      window.location.reload();
    } catch (error) {
      console.error("Error saving new event:", error);
    }
  };

  return (
    <div className="container">
      <br />

      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h1>Add Event </h1>
      </div>

      <hr />

      <div className="row">
        {/* First Column */}
        <div className="col-md-5">
          <div className="row align-items-center mt-3">
            <div className="col-md-2">
              <label
                htmlFor="meritBar"
                className="col-form-label text-right ps-4"
              >
                Merit Bar:
              </label>
            </div>
            <div className="col-md-5 ps-5">
              <select
                className="form-select"
                name="meritBar"
                id="meritBar"
                value={formData.meritBar}
                onChange={onChangeMeritBar}
              >
                <option value="" hidden>
                  Select Merit Bar
                </option>
                {formData.meritBars.map(function (meritBar) {
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
        <br />

        {/* Vertical Line */}
        <div className="col-md-1">
          <div className="vl"></div>
        </div>

        {
          // Attendance
          formData.meritBar == 1 && (
            <>
              <div className="col-md-6">
                <div className="row align-items-center mt-3">
                  <div className="col-md-4">
                    <label
                      htmlFor="activityname"
                      className="col-form-label text-right"
                    >
                      Name of Activity:
                    </label>
                  </div>
                  <div className="col-md-7">
                    <input
                      type="text"
                      className="form-control"
                      id="activityname"
                      min="1"
                      placeholder="Enter Activity Name"
                      onChange={(e) =>
                        setNewEvent((prevEvent) => ({
                          ...prevEvent,
                          meetingName: e.target.value,
                        }))
                      }
                    />
                  </div>
                </div>

                <div className="row align-items-center mt-3">
                  <div className="col-md-4">
                    <label
                      htmlFor="activitydate"
                      className="col-form-label text-right"
                    >
                      Date of Activity:
                    </label>
                  </div>
                  <div className="col-md-7">
                    <input
                      type="date"
                      className="form-control"
                      id="activitydate"
                      placeholder="Enter Activity Date"
                      onChange={(e) =>
                        setNewEvent((prevEvent) => ({
                          ...prevEvent,
                          meetingDate: e.target.value,
                        }))
                      }
                    />
                  </div>
                </div>

                <div className="row align-items-center mt-3">
                  <div className="col-md-4">
                    <label htmlFor="term" className="col-form-label text-left">
                      Term:
                    </label>
                  </div>
                  <div className="col-md-7">
                    <select
                      className="form-select form-control"
                      id="term"
                      placeholder="Select Term"
                      onChange={(e) =>
                        setNewEvent((prevEvent) => ({
                          ...prevEvent,
                          term: e.target.value,
                        }))
                      }
                    >
                      <option value="" hidden>
                        Select
                      </option>
                      <option>Term A</option>
                      <option>Term B</option>
                    </select>
                  </div>
                </div>
              </div>
            </>
          )
        }

        {
          // Athletics
          formData.meritBar == 2 && (
            <>
              <div className="col-md-6">
                <div className="row align-items-center mt-3">
                  <div className="col-md-4">
                    <label
                      htmlFor="activityName"
                      className="col-form-label text-right"
                    >
                      Name of Activity:
                    </label>
                  </div>
                  <div className="col-md-7">
                    <input
                      type="text"
                      className="form-control"
                      id="activityName"
                      placeholder="Enter Activity Name"
                      onChange={(e) =>
                        setNewEvent((prevEvent) => ({
                          ...prevEvent,
                          activityName: e.target.value,
                        }))
                      }
                      required
                    />
                  </div>
                </div>

                <div className="row align-items-center mt-3">
                  <div className="col-md-4">
                    <label
                      htmlFor="activityDate"
                      className="col-form-label text-right"
                    >
                      Date of Activity:
                    </label>
                  </div>
                  <div className="col-md-7">
                    <input
                      type="date"
                      className="form-control"
                      id="activityDate"
                      placeholder="Enter Activity Date"
                      onChange={(e) =>
                        setNewEvent((prevEvent) => ({
                          ...prevEvent,
                          activityDate: e.target.value,
                        }))
                      }
                    />
                  </div>
                </div>

                <div className="row align-items-center mt-3">
                  <div className="col-md-4">
                    <label htmlFor="host" className="col-form-label text-right">
                      Hosted by:
                    </label>
                  </div>
                  <div className="col-md-7">
                    <input
                      type="text"
                      className="form-control"
                      id="host"
                      placeholder="Enter Host"
                      onChange={(e) =>
                        setNewEvent((prevEvent) => ({
                          ...prevEvent,
                          host: e.target.value,
                        }))
                      }
                    />
                  </div>
                </div>

                <div className="row align-items-center mt-3">
                  <div className="col-md-4">
                    <label
                      htmlFor="location"
                      className="col-form-label text-right"
                    >
                      Location:
                    </label>
                  </div>
                  <div className="col-md-7">
                    <input
                      type="text"
                      className="form-control"
                      id="location"
                      placeholder="Enter Location"
                      onChange={(e) =>
                        setNewEvent((prevEvent) => ({
                          ...prevEvent,
                          location: e.target.value,
                        }))
                      }
                    />
                  </div>
                </div>
              </div>
            </>
          )
        }

        {
          // Civil Service & Fundraising & Masonic Service
          (formData.meritBar == 3 ||
            formData.meritBar == 6 ||
            formData.meritBar == 7 ||
            formData.meritBar == 8) && (
            <>
              <div className="col-md-6">
                <div className="row align-items-center mt-3">
                  <div className="col-md-4">
                    <label
                      htmlFor="activityName"
                      className="col-form-label text-right"
                    >
                      Name of Activity:
                    </label>
                  </div>
                  <div className="col-md-7">
                    <input
                      type="text"
                      className="form-control"
                      id="activityName"
                      placeholder="Enter Activity Name"
                      onChange={(e) =>
                        setNewEvent((prevEvent) => ({
                          ...prevEvent,
                          activityName: e.target.value,
                        }))
                      }
                    />
                  </div>
                </div>

                <div className="row align-items-center mt-3">
                  <div className="col-md-4">
                    <label
                      htmlFor="activityDate"
                      className="col-form-label text-right"
                    >
                      Date of Activity:
                    </label>
                  </div>
                  <div className="col-md-7">
                    <input
                      type="date"
                      className="form-control"
                      id="activityDate"
                      placeholder="Enter Activity Date"
                      onChange={(e) =>
                        setNewEvent((prevEvent) => ({
                          ...prevEvent,
                          activityDate: e.target.value,
                        }))
                      }
                    />
                  </div>
                </div>

                <div className="row align-items-center mt-3">
                  <div className="col-md-4">
                    <label
                      htmlFor="location"
                      className="col-form-label text-right"
                    >
                      Location:
                    </label>
                  </div>
                  <div className="col-md-7">
                    <input
                      type="text"
                      className="form-control"
                      id="location"
                      placeholder="Enter Location"
                      onChange={(e) =>
                        setNewEvent((prevEvent) => ({
                          ...prevEvent,
                          location: e.target.value,
                        }))
                      }
                    />
                  </div>
                </div>
              </div>
            </>
          )
        }

        {
          // Conclave
          formData.meritBar == 4 && (
            <>
              <div className="col-md-6">
                <div className="row align-items-center mt-3">
                  <div className="col-md-4">
                    <label
                      htmlFor="activityName"
                      className="col-form-label text-right"
                    >
                      Name of Activity:
                    </label>
                  </div>
                  <div className="col-md-7">
                    <input
                      type="text"
                      className="form-control"
                      id="activityName"
                      placeholder="Enter Activity Name"
                      onChange={(e) =>
                        setNewEvent((prevEvent) => ({
                          ...prevEvent,
                          activityName: e.target.value,
                        }))
                      }
                    />
                  </div>
                </div>

                <div className="row align-items-center mt-3">
                  <div className="col-md-4">
                    <label htmlFor="type" className="col-form-label text-left">
                      Type:
                    </label>
                  </div>
                  <div className="col-md-7">
                    <select
                      className="form-select form-control"
                      id="type"
                      onChange={(e) =>
                        setNewEvent((prevEvent) => ({
                          ...prevEvent,
                          type: e.target.value,
                        }))
                      }
                    >
                      <option value="" hidden>
                        Select
                      </option>
                      <option value="National">National</option>
                      <option value="Jurisdictional - Luzon">Luzon</option>
                      <option value="Jurisdictional - Visayas">Visayas</option>
                      <option value="Jurisdictional - Minadanao">
                        Minadanao
                      </option>
                    </select>
                  </div>
                </div>

                <div className="row align-items-center mt-3">
                  <div className="col-md-3">
                    <label
                      htmlFor="duration"
                      className="col-form-label text-left"
                    >
                      Duration:
                    </label>
                  </div>
                  <div className="col-md-4">
                    <input
                      type="date"
                      className="form-control"
                      id="startDate"
                      placeholder="Start Date"
                      onChange={(e) =>
                        setNewEvent((prevEvent) => ({
                          ...prevEvent,
                          startDate: e.target.value,
                        }))
                      }
                    />
                  </div>
                  <div className="col-md-4">
                    <input
                      type="date"
                      className="form-control"
                      id="endDate"
                      placeholder="End Date"
                      onChange={(e) =>
                        setNewEvent((prevEvent) => ({
                          ...prevEvent,
                          endDate: e.target.value,
                        }))
                      }
                    />
                  </div>
                </div>
              </div>
            </>
          )
        }

        {
          // Fine Arts
          formData.meritBar == 5 && (
            <>
              <div className="col-md-6">
                <div className="row align-items-center mt-3">
                  <div className="col-md-4">
                    <label
                      htmlFor="activityName"
                      className="col-form-label text-right"
                    >
                      Name of Activity:
                    </label>
                  </div>
                  <div className="col-md-7">
                    <input
                      type="text"
                      className="form-control"
                      id="activityName"
                      placeholder="Enter Activity Name"
                      onChange={(e) =>
                        setNewEvent((prevEvent) => ({
                          ...prevEvent,
                          activityName: e.target.value,
                        }))
                      }
                    />
                  </div>
                </div>

                <div className="row align-items-center mt-3">
                  <div className="col-md-4">
                    <label
                      htmlFor="activityDate"
                      className="col-form-label text-right"
                    >
                      Date of Activity:
                    </label>
                  </div>
                  <div className="col-md-7">
                    <input
                      type="date"
                      className="form-control"
                      id="activityDate"
                      placeholder="Enter Activity Date"
                      onChange={(e) =>
                        setNewEvent((prevEvent) => ({
                          ...prevEvent,
                          activityDate: e.target.value,
                        }))
                      }
                    />
                  </div>
                </div>

                <div className="row align-items-center mt-3">
                  <div className="col-md-4">
                    <label htmlFor="type" className="col-form-label text-left">
                      Type:
                    </label>
                  </div>
                  <div className="col-md-7">
                    <select
                      className="form-select form-control"
                      id="type"
                      onChange={(e) =>
                        setNewEvent((prevEvent) => ({
                          ...prevEvent,
                          type: e.target.value,
                        }))
                      }
                    >
                      <option value="" hidden>
                        Select
                      </option>
                      <option>Musical</option>
                      <option>Theatrical</option>
                    </select>
                  </div>
                </div>
              </div>
            </>
          )
        }

        {/* Buttons */}
        <div className="d-flex justify-content-between mt-4">
          <button
            type="button"
            className="primary-btn"
            value="SUBMIT"
            onClick={handleCreateNewEvent}
          >
            CREATE
          </button>
        </div>
      </div>
    </div>
  );
}
export default EventsAdd;
