import { Link } from "react-router-dom";
import "../../styles/base.css";
import "../../styles/Events.css";
import { Component } from "react";

import axios from "axios";
import { useEffect, useState } from "react";

import React from "react";

function EventsProof() {
  const [formData, setFormData] = useState({
    Athletics: {
      white: 0,
      red: 0,
      blue: 0,
      purple: 0,
      gold: 0,
    },
    Attendance: {
      white: 0,
      red: 0,
      blue: 0,
      purple: 0,
      gold: 0,
    },
    "Civic Service": {
      white: 0,
      red: 0,
      blue: 0,
      purple: 0,
      gold: 0,
    },
    Conclave: {
      white: 0,
      red: 0,
      blue: 0,
      purple: 0,
      gold: 0,
    },
    "Fine Arts": {
      white: 0,
      red: 0,
      blue: 0,
      purple: 0,
      gold: 0,
    },
    Fundraising: {
      white: 0,
      red: 0,
      blue: 0,
      purple: 0,
      gold: 0,
    },
    Installing: {
      white: 0,
      red: 0,
      blue: 0,
      purple: 0,
      gold: 0,
    },
    Journalism: {
      white: 0,
      red: 0,
      blue: 0,
      purple: 0,
      gold: 0,
    },
    "Masonic Attendance": {
      white: 0,
      red: 0,
      blue: 0,
      purple: 0,
      gold: 0,
    },
    "Masonic Service": {
      white: 0,
      red: 0,
      blue: 0,
      purple: 0,
      gold: 0,
    },
    Merit: {
      white: 0,
      red: 0,
      blue: 0,
      purple: 0,
      gold: 0,
    },
    Petitions: {
      white: 0,
      red: 0,
      blue: 0,
      purple: 0,
      gold: 0,
    },

    Religion: {
      white: 0,
      red: 0,
      blue: 0,
      purple: 0,
      gold: 0,
    },
    Ritual: {
      white: 0,
      red: 0,
      blue: 0,
      purple: 0,
      gold: 0,
    },
    Scholastics: {
      white: 0,
      red: 0,
      blue: 0,
      purple: 0,
      gold: 0,
    },
    Visitation: {
      white: 0,
      red: 0,
      blue: 0,
      purple: 0,
      gold: 0,
    },

    total: 0,
    proof: "",

    isApproved: false,
  });

  const [userData, setUserData] = useState({});
  const [applications, setApplications] = useState([]);
  const [filteredApplications, setFilteredApplications] = useState({
    approvedApplications: [],
    whiteBars: [],
    redBars: [],
    blueBars: [],
    purpleBars: [],
    goldBars: [],
  });

  useEffect(() => {
    async function fetchEventsData() {
      const user = await axios.get("http://localhost:5000/getCurrentUser");

      setUserData({
        ...userData,
        userID: user.data._id,
        name: user.data.givenName + " " + user.data.lastName,
        chapterID: user.data.chapterId,
        position: user.data.position,
      });

      axios
        .get(`http://localhost:5000/getAwardApplications/${user.data._id}`)
        .then(async (res1) => {
          if (res1.data !== "") {
            console.log("EXISTING APPLICATIONS: ", res1.data);
            setApplications(res1.data);

            const filtered = res1.data.filter((application) => {
              if (
                application.isSubmitted === true &&
                application.isApproved === true &&
                application.isRequested == false
              ) {
                return true;
              } else {
                return false;
              }
            });

            const whiteBars = filtered.filter((application) => {
              if (application.color === "White") {
                return true;
              } else {
                return false;
              }
            });

            const redBars = filtered.filter((application) => {
              if (application.color === "Red") {
                return true;
              } else {
                return false;
              }
            });

            const blueBars = filtered.filter((application) => {
              if (application.color === "Blue") {
                return true;
              } else {
                return false;
              }
            });

            const purpleBars = filtered.filter((application) => {
              if (application.color === "Purple") {
                return true;
              } else {
                return false;
              }
            });

            const goldBars = filtered.filter((application) => {
              if (application.color === "Gold") {
                return true;
              } else {
                return false;
              }
            });

            setFormData({ ...formData, total: filtered.length * 50 });

            setFilteredApplications({
              ...filteredApplications,
              approvedApplications: filtered,
              whiteBars: whiteBars,
              redBars: redBars,
              blueBars: blueBars,
              purpleBars: purpleBars,
              goldBars: goldBars,
            });
          } else {
            console.log("NO APPLICATIONS");
          }
        });
    }

    fetchEventsData();
  }, []);

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertToBase64(file);

    setFormData({
      ...formData,
      proof: base64,
    });
  };

  function convertToBase64(file) {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();

      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  }

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

  const handleSubmit = () => {
    const updatedFormData = { ...formData };

    tableData.forEach((rowData) => {
      const [, col2] = rowData;

      const white = filteredApplications.whiteBars.filter((application) => {
        return application.type === col2;
      });

      const red = filteredApplications.redBars.filter((application) => {
        return application.type === col2;
      });

      const blue = filteredApplications.blueBars.filter((application) => {
        return application.type === col2;
      });

      const purple = filteredApplications.purpleBars.filter((application) => {
        return application.type === col2;
      });

      const gold = filteredApplications.goldBars.filter((application) => {
        return application.type === col2;
      });

      updatedFormData[col2] = {
        white: white.length,
        red: red.length,
        blue: blue.length,
        purple: purple.length,
        gold: gold.length,
      };
    });

    const newApplication = {};

    console.log(updatedFormData);
  };

  const RenderTableData = () => {
    return tableData.map((rowData, index) => {
      const [col1, col2] = rowData;

      const white = filteredApplications.whiteBars.filter((application) => {
        if (application.type === col2) {
          return true;
        } else {
          return false;
        }
      });

      const red = filteredApplications.redBars.filter((application) => {
        if (application.type === col2) {
          return true;
        } else {
          return false;
        }
      });

      const blue = filteredApplications.blueBars.filter((application) => {
        if (application.type === col2) {
          return true;
        } else {
          return false;
        }
      });

      const purple = filteredApplications.purpleBars.filter((application) => {
        if (application.type === col2) {
          return true;
        } else {
          return false;
        }
      });

      const gold = filteredApplications.goldBars.filter((application) => {
        if (application.type === col2) {
          return true;
        } else {
          return false;
        }
      });

      const totalBars =
        white.length + red.length + blue.length + purple.length + gold.length;

      return (
        <tr key={index}>
          <td>{col2}</td>
          <td>{white.length}</td>
          <td>{red.length}</td>
          <td>{blue.length}</td>
          <td>{purple.length}</td>
          <td>{gold.length}</td>
          <td>{"PHP " + totalBars * 50}</td>
        </tr>
      );
    });
  };

  return (
    <div className="container">
      <br />
      <br />

      {/* Header */}

      <div className="d-flex justify-content-between align-items-center mb-3">
        <h1> Request for Approved Merit Bars </h1>
      </div>
      <hr />

      <div className="row">
        {/* First Column */}
        <div className="col-md-5">
          {filteredApplications.approvedApplications.length > 0 ? (
            <table className="table">
              <thead>
                <tr>
                  <th>Category</th>
                  <th>White</th>
                  <th>Red</th>
                  <th>Blue</th>
                  <th>Purple</th>
                  <th>Gold</th>
                  <th>Amount</th>
                </tr>
              </thead>

              <tbody>{<RenderTableData />}</tbody>
            </table>
          ) : (
            <h2>Loading...</h2>
          )}
        </div>

        {/* Vertical Line */}

        <div className="col-md-1">
          <div className="vl"></div>
        </div>

        {/* Second Column */}

        <div className="col-md-6">
          <div className="row align-items-center">
            <div className="col-md-3">
              <label htmlFor="total" className="col-form-label text-right">
                Total Amount to Pay:
              </label>
            </div>
            <div className="col-md-9">
              <input
                type="text"
                className="form-control"
                disabled
                id="uploadID"
                value={
                  filteredApplications.approvedApplications.length > 0
                    ? `PHP ${
                        filteredApplications.approvedApplications.length * 50
                      }`
                    : 0
                }
              />
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-md-3">
              <label htmlFor="uploadID" className="col-form-label text-right">
                Proof:
              </label>
            </div>
            <div className="col-md-9">
              <input
                type="file"
                className="form-control"
                id="uploadID"
                onChange={handleImageUpload}
              />
            </div>
          </div>
          <div className="d-flex justify-content-end ms-5">
            <button
              type="button"
              form="button"
              className="btn"
              value="NEXT"
              onClick={handleSubmit}
              disabled={formData.proof === ""}
            >
              SUBMIT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventsProof;
