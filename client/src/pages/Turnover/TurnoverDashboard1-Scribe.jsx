import { Link, useLocation, useNavigate } from "react-router-dom";
import "../../styles/base.css";
import "../../styles/Turnover.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faFilter,
  faLariSign,
} from "@fortawesome/free-solid-svg-icons";

const openTab = (event, tabId) => {
  var tabContents = document.getElementsByClassName("tab-content");

  for (var i = 0; i < tabContents.length; i++) {
    tabContents[i].style.display = "none";
  }

  var tabButtons = document.getElementsByClassName("tab-button");

  for (var i = 0; i < tabButtons.length; i++) {
    tabButtons[i].classList.remove("active");
  }

  document.getElementById(tabId).style.display = "block";

  event.currentTarget.classList.add("active");
};

function TurnoverDashboard1() {
  const navigate = useNavigate();
  const location = useLocation();
  const prevPageProps = location.state;

  //sample init data
  const [userData, setUserData] = useState({
    userID: "0118-27061",
    name: "Philip Tolentino",
    position: "Scribe",
    chapterID: "45",
  });

  const [chapterData, setChapterData] = useState({});

  const [turnoverData, setTurnoverData] = useState({
    turnoverStatusID: "",
    form1ID: "",
    form1Approved: false,
    form15ID: "",
    form15Approved: false,
    assetsID: "",
    assetsApproved: false,
    advisoryID: "",
    advisoryApproved: false,
    advisorApproval: false,
    eoCertification: false,
    isComplete: false,
  });

  useEffect(() => {
    async function getTurnoverReports() {
      axios
        .get(`http://localhost:5000/getChapterByID/${userData.chapterID}`)
        .then(async (res1) => {
          setChapterData(res1.data);

          const res2 = await axios.get(
            `http://localhost:5000/getTurnoverReports/${userData.chapterID}/${res1.data.currentTerm}`
          );
          if (res2.data !== "") {
            console.log("TURNOVER REPORTS EXISTS: ", res2.data);
            setTurnoverData({
              turnoverStatusID: res2.data._id,
              form1ID: res2.data.form1ID,
              form1Approved: res2.data.form1Approved,
              form15ID: res2.data.form15ID,
              form15Approved: res2.data.form15Approved,
              assetsID: res2.data.assetsID,
              assetsApproved: res2.data.assetsApproved,
              advisoryID: res2.data.advisoryID,
              advisoryApproved: res2.data.advisoryApproved,
              advisorApproval: res2.data.advisorApproval,
              eoCertification: res2.data.eoCertification,
              isComplete: res2.data.isComplete,
            });
          } else {
            console.log(
              `NO EXISTING TURNOVER REPORTS FOR TERM ${res1.data.currentTerm}: `,
              res2.data
            );
            const newTurnover = {
              chapterID: userData.chapterID,
              termID: res1.data.currentTerm,
            };
            axios
              .post(`http://localhost:5000/newTurnover`, newTurnover)
              .then((res3) => {
                setTurnoverData({
                  turnoverStatusID: res3.data._id,
                });
              });
          }
        });
    }
    {
      /* Add fetch userData for current user from members and return id, name, position, chapter */
    }
    getTurnoverReports();

    document.getElementById("tab1").style.display = "block";
  }, []);

  const handleForm1Click = () => {
    if (turnoverData.form1ID !== "") {
      console.log("EXISTING FORM 1: ", turnoverData.form1ID);
      axios
        .get(`http://localhost:5000/getForm1/${turnoverData.form1ID}`)
        .then((res1) => {
          const form1Data = {
            term: res1.data.term,
            year: res1.data.year,
            startTerm: new Date(res1.data.startTerm).toLocaleDateString(
              "en-US",
              {
                year: "numeric",
                month: "long",
                day: "numeric",
              }
            ),
            endTerm: new Date(res1.data.endTerm).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            }),
            totalMembers: res1.data.totalMembers,
            initiated: res1.data.initiated,
            affiliated: res1.data.affiliated,
            majority: res1.data.majority,
            transferred: res1.data.transferred,
            deaths: res1.data.deaths,
            resigned: res1.data.resigned,
            expelled: res1.data.expelled,
            totalGains: res1.data.totalGains,
            totalLoss: res1.data.totalLoss,
            totalNetMembers: res1.data.totalNetMembers,
          };

          navigate("/turnovertf1", {
            state: {
              userData: userData,
              chapterData: chapterData,
              turnoverID: turnoverData.turnoverStatusID,
              formData: form1Data,
            },
          });
        });
    } else {
      console.log("NO EXISTING TERM AND FINANCIAL REPORT");
      // mock data
      const newForm1 = {
        chapterID: userData.chapterID,
        term: "A",
        year: "2022",
        startTerm: new Date(),
        endTerm: new Date(),
        totalMembers: 30,
        initiated: 15,
        affiliated: 5,
        majority: 3,
        transferred: 1,
        deaths: 0,
        resigned: 2,
        expelled: 1,
        totalGains: 0,
        totalLoss: 0,
        totalNetMembers: 0,
      };

      axios.post(`http://localhost:5000/newTF`, newForm1).then((res) => {
        const turnoverUpdate = {
          chapterID: userData.chapterID,
          termID: chapterData.currentTerm,
          fieldToUpdate: "form1ID",
          updateValue: res.data._id,
        };

        axios.post("http://localhost:5000/updateTurnover", turnoverUpdate);

        navigate("/turnovertf1", {
          state: {
            userData: userData,
            chapterData: chapterData,
            turnoverID: turnoverData.turnoverStatusID,
            formData: res.data,
          },
        });
      });
    }
  };

  const handleForm15Click = () => {
    navigate("/turnoverno1", {
      state: {
        userData: userData,
        chapterData: chapterData,
        turnoverID: turnoverData.turnoverStatusID,
        form15ID: turnoverData.form15ID,
      },
    });
  };

  return (
    <div className="container">
      <h1>Home</h1>
      <hr />
      <div className="row">
        {/* First Column */}

        <div className="col-md-2">
          <div className="row align-items-center mt-3 text-center">
            <h3>{userData.name}</h3>
            <p>
              {userData.position}, {chapterData.name}
            </p>
            <hr />
          </div>
          <div className="row align-items-left">
            <a href="/turnoverDashboard1" id="leftNavbar">
              Circulars
            </a>
            <a href="/turnoverDashboard1" id="leftNavbar">
              For Review
            </a>
            <a href="/turnoverDashboard1" id="leftNavbar">
              Reports
            </a>
            <a href="/turnoverDashboard1" id="leftNavbar">
              Directory
            </a>
            <a href="/turnoverDashboard1" id="leftNavbar">
              Chapter Profile
            </a>
          </div>
        </div>

        {/* Vertical Line */}

        <div className="col-md-1">
          <div className="vl"></div>
        </div>

        {/* Second Column */}

        <div className="col-md-8">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h1> Reports </h1>
            <input
              type="text"
              className="form-control form-control-sm"
              placeholder="Search"
            />
            <button type="button" className="filterbtn">
              <FontAwesomeIcon icon={faFilter} />
            </button>
          </div>
          <div className="tabs-container">
            {/* Tab Headers */}
            <div className="tab-header">
              <button
                className="tab-button active"
                onClick={(event) => openTab(event, "tab1")}
              >
                All
              </button>
              <button
                className="tab-button"
                onClick={(event) => openTab(event, "tab2")}
              >
                Started
              </button>
              <button
                className="tab-button"
                onClick={(event) => openTab(event, "tab3")}
              >
                Submitted
              </button>
            </div>
            {/* Tabs Content 1 */}
            <div id="tab1" className="tab-content active">
              <div className="boxContainer">
                <div className="boxRow">
                  <div className="box">
                    <h4>Certificate of Complete Turnover</h4>
                    <p>Form/Report Desc</p>
                    <input type="checkbox" />
                    <button className="fill-btn"> FILL IN </button>
                  </div>
                  {/*turnoverData.form1ID && ()*/}
                  <div className="box">
                    <h4>Term and Financial Report</h4>
                    <p>Form/Report Desc</p>
                    <input type="checkbox" />
                    <button className="fill-btn" onClick={handleForm1Click}>
                      {" "}
                      FILL IN
                    </button>
                  </div>
                </div>
                <div className="boxRow">
                  {/*turnoverData.form15ID && ()*/}
                  <div className="box">
                    <h4>New Officers Report (Form 15)</h4>
                    <p>Form/Report Desc</p>
                    <input type="checkbox" />
                    <button className="fill-btn" onClick={handleForm15Click}>
                      {" "}
                      FILL IN
                    </button>
                  </div>

                  <div className="box">
                    <h4>
                      Report on Historical Records, Official Files and Assets,
                      and Properties
                    </h4>
                    <p>Form/Report Desc</p>
                    <input type="checkbox" />
                    <button className="fill-btn"> FILL IN</button>
                  </div>
                  <div className="box">
                    <h4>Certification of Advisory Council Members</h4>
                    <p>Form/Report Desc</p>
                    <input type="checkbox" />
                    <button className="fill-btn"> FILL IN</button>
                  </div>
                </div>
              </div>
            </div>

            {/* Tabs Content 2 */}

            <div id="tab2" className="tab-content">
              <p>This is the content for Tab 2.</p>
            </div>

            {/* Tabs Content 3 */}

            <div id="tab3" className="tab-content">
              <p>This is the content for Tab 3.</p>
            </div>
          </div>

          {/* Submit Button */}

          <div className="d-flex justify-content-center">
            <Link to="">
              <button
                type="submit"
                form="submit"
                className="primary-btn"
                value="SUBMIT"
              >
                SUBMIT
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TurnoverDashboard1;
