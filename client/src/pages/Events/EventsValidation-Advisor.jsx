import { Link } from "react-router-dom";
import "../../styles/base.css";
import "../../styles/Events.css";
import { Component } from "react";

import React from 'react';

const RenderTableData = () => {
   const tableData = [
      ["1", "Ambrosio Flores", "Attendance"],
      ["2", "Emilio Aguinaldo", "Athletic"],
      ["3", "Jose Rizal", "Conclave"],
      ["4", "Elpidio Quirino", "Attendance"],
   ];

   return tableData.map((rowData, index) => {
      const [col1, col2, col3] = rowData;
      return (
         <tr key={index}>
            <td>{col1}</td>
            <td>{col2}</td>
            <td>{col3}</td>
            <td>
               <button type="submit" form="submit" className="primary-btn" value="VIEW">
                  VIEW
               </button>
            </td>
         </tr>
      );
   });
};

function EventsValidation() {
   return (
      <div className="container">
         <br/>

<<<<<<< Updated upstream
         {/* Header */}
=======
  const [selectedApplication, setSelectedApplication] = useState({});
>>>>>>> Stashed changes

         <div className="d-flex justify-content-between align-items-center mb-3">
            <h1> Request for Merit Bars </h1>
         </div>
         <hr/>

<<<<<<< Updated upstream
         <div className="row">

            {/* First Column */}

            <div className="col-md-6">
               <table className="table">
                  <thead>
                     <tr>
                        <th>No.</th>
                        <th>Name of Requester</th>
                        <th>Requested Merit Bar</th>
                        <th>View</th>
                     </tr>
                  </thead>
                  <tbody>
                     {<RenderTableData />}
                  </tbody>
               </table>
            </div>

            {/* Vertical Line */}
=======
  const [meritBarCtg, setCategory] = useState("");

  // const handleNavigation = (action) => {
  //   if (action === "prev") {
  //     setCurrentIndex((prevIndex) =>
  //       prevIndex === 0 ? prevIndex : prevIndex - 1
  //     );
  //   } else if (action === "next") {
  //     setCurrentIndex((prevIndex) =>
  //       prevIndex === currentList.length - 1 ? prevIndex : prevIndex + 1
  //     );
  //   }

  //   setCurrentDisplay(currentList[currentIndex]);
  // };
>>>>>>> Stashed changes

            <div className="col-md-1">
               <div className="vl"></div>
            </div>
            
            {/* Second Column */}

<<<<<<< Updated upstream
            <div className="col-md-5 mx-auto">
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
                     <label htmlFor="meetingname" className="col-form-label text-right">
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
                     <label htmlFor="meetingdate" className="col-form-label text-right">
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
                  <Link to="/appform1">
                     <button type="button" form="button" className="primary-btn" value="NEXT">
                        VALIDATE
                     </button>
                  </Link>
               </div>
            </div>
         </div>         
      </div>
   );
=======
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

  // const onChangeMeritBar = (e) => {
  //   setCategory({
  //     ...meritBars,
  //     meritBarCtg: e.target.value,
  //   });

  //   console.log(selectedApplication);
  // };

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
        {/* <div className="row align-items-center mt-3">
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
        </div> */}
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

              {/* Buttons 

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
              </div>*/}
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
>>>>>>> Stashed changes
}

export default EventsValidation;
