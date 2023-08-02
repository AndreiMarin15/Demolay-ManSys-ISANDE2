import { Link, useLocation, useNavigate } from "react-router-dom";
import "../../styles/base.css";
import "../../styles/Turnover.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {

	faFileText,
	faFilter,
	faEye,
	faCircleUser,
	faMagnifyingGlass,
	faBullhorn,
	faFileLines,
	faAddressBook,
	faAddressCard,

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
    eoCertification: false,
    isComplete: false,
  });

  useEffect(() => {
    {
      /* Add fetch userData for current user from members and return id, name, position, chapter */
    }
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
              ...turnoverData,
              turnoverStatusID: res2.data._id,
              form1ID: res2.data.form1ID,
              form1Approved: res2.data.form1Approved,
              form15ID: res2.data.form15ID,
              form15Approved: res2.data.form15Approved,
              assetsID: res2.data.assetsID,
              assetsApproved: res2.data.assetsApproved,
              advisoryID: res2.data.advisoryID,
              advisoryApproved: res2.data.advisoryApproved,
              eoCertification: res2.data.eoCertification,
              isComplete: res2.data.isComplete,
            });
          } else {
            console.log(
              `NO EXISTING TURNOVER REPORTS FOR TERM ${res1.data.currentTerm}: `
            );
            const newTurnover = {
              chapterID: userData.chapterID,
              termID: res1.data.currentTerm,
            };
            axios
              .post(`http://localhost:5000/newTurnover`, newTurnover)
              .then((res3) => {
                setTurnoverData({
                  ...turnoverData,
                  turnoverStatusID: res3.data._id,
                });
              });
          }
        });
    }

    getTurnoverReports();

    console.log(turnoverData);

    document.getElementById("tab1").style.display = "block";
  }, []);

  const handleForm1Click = () => {
    if (turnoverData.form1ID !== "") {
      console.log("EXISTING FORM 1: ", turnoverData.form1ID);
      axios
        .get(`http://localhost:5000/getForm1/${turnoverData.form1ID}`)
        .then((res1) => {
          const form1Data = {
            form1ID: turnoverData.form1ID,
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

            reportedBy: res1.data.reportedBy,
            position: res1.data.position,

            bankID: res1.data.bankID,
            cashInBank: res1.data.cashInBank,
            accountsReceivable: res1.data.accountsReceivable,
            accountsPayable: res1.data.accountsPayable,

            masterCouncilor: res1.data.masterCouncilor,
            statusMasterCouncilor: res1.data.statusMasterCouncilor,
            dateSignedMasterCouncilor: new Date(
              res1.data.dateSignedMasterCouncilor
            )
              .toISOString()
              .split("T")[0],

            chapterScribe: res1.data.chapterScribe,
            statusChapterScribe: res1.data.statusChapterScribe,
            dateSignedChapterScribe: new Date(res1.data.dateSignedChapterScribe)
              .toISOString()
              .split("T")[0],

            chapterAdvisor: res1.data.chapterAdvisor,
            statusChapterAdvisor: res1.data.statusChapterAdvisor,
            dateSignedChapterAdvisor: new Date(
              res1.data.dateSignedChapterAdvisor
            )
              .toISOString()
              .split("T")[0],
            advisoryCouncilChairman: res1.data.advisoryCouncilChairman,
            statusAdvisoryCouncilChairman:
              res1.data.statusAdvisoryCouncilChairman,
            dateSignedAdvisoryCouncilChairman: new Date(
              res1.data.dateSignedAdvisoryCouncilChairman
            )
              .toISOString()
              .split("T")[0],
          };

          navigate("/turnovertf1", {
            state: {
              userData: userData,
              chapterData: chapterData,
              turnoverID: turnoverData.turnoverStatusID,
              formData: form1Data,
              approved: turnoverData.form1Approved,
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

        reportedBy: userData.name,
        position: userData.position,

        bankID: "",
        cashInBank: 0,
        accountsReceivable: 0,
        accountsPayable: 0,

        masterCouncilor: "",
        statusMasterCouncilor: "Pending",
        dateSignedMasterCouncilor: new Date(),

        chapterScribe: userData.userID,
        statusChapterScribe: "Pending",
        dateSignedChapterScribe: new Date(),

        chapterAdvisor: "",
        statusChapterAdvisor: "Pending",
        dateSignedChapterAdvisor: new Date(),

        advisoryCouncilChairman: "",
        statusAdvisoryCouncilChairman: "Pending",
        dateSignedAdvisoryCouncilChairman: new Date(),
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
            approved: turnoverData.form1Approved,
          },
        });
      });
    }
  };

  const handleForm15Click = () => {
    if (turnoverData.form15ID !== "") {
      console.log("EXISTING FORM 15: ", turnoverData.form15ID);
      axios
        .get(`http://localhost:5000/getForm15/${turnoverData.form15ID}`)
        .then((res1) => {
          const form15Data = {
            form15ID: turnoverData.form15ID,
            term: res1.data.term,
            year: res1.data.year,
            electDate: new Date(res1.data.electDate)
              .toISOString()
              .split("T")[0],
            installDate: new Date(res1.data.installDate)
              .toISOString()
              .split("T")[0],
            officers: res1.data.officers,

            advisoryCouncilChairman: res1.data.advisoryCouncilChairman,
            statusAdvisoryCouncilChairman:
              res1.data.statusAdvisoryCouncilChairman,
            dateSignedAdvisoryCouncilChairman: new Date(
              res1.data.dateSignedAdvisoryCouncilChairman
            )
              .toISOString()
              .split("T")[0],

            chapterAdvisor: res1.data.chapterAdvisor,
            statusChapterAdvisor: res1.data.statusChapterAdvisor,
            dateSignedChapterAdvisor: new Date(
              res1.data.dateSignedChapterAdvisor
            )
              .toISOString()
              .split("T")[0],
          };

          navigate("/turnoverno1", {
            state: {
              userData: userData,
              chapterData: chapterData,
              turnoverID: turnoverData.turnoverStatusID,
              formData: form15Data,
              approved: turnoverData.form15Approved,
            },
          });
        });
    } else {
      console.log("NO EXISTING NEW OFFICERS REPORT");
      // mock data
      const newForm15 = {
        chapterID: userData.chapterID,
        term: "A",
        year: "2022",
        electDate: new Date(),
        installDate: new Date(),
        officers: [],
        advisoryCouncilChairman: "",
        statusAdvisoryCouncilChairman: "Pending",
        dateSignedAdvisoryCouncilChairman: new Date(),

        chapterAdvisor: "",
        statusChapterAdvisor: "Pending",
        dateSignedChapterAdvisor: new Date(),
      };

      axios.post(`http://localhost:5000/newF15`, newForm15).then((res) => {
        const turnoverUpdate = {
          chapterID: userData.chapterID,
          termID: chapterData.currentTerm,
          fieldToUpdate: "form15ID",
          updateValue: res.data._id,
        };

        axios.post("http://localhost:5000/updateTurnover", turnoverUpdate);

        navigate("/turnoverno1", {
          state: {
            userData: userData,
            chapterData: chapterData,
            turnoverID: turnoverData.turnoverStatusID,
            formData: res.data,
            approved: turnoverData.form15Approved,
          },
        });
      });
    }
  };

  const handleAssetClick = () => {
    if (turnoverData.assetsID !== "") {
      console.log("EXISTING ASSETS REPORT: ", turnoverData.assetsID);
      axios
        .get(`http://localhost:5000/getAR/${turnoverData.assetsID}`)
        .then((res1) => {
          const arData = {
            assetsID: turnoverData.assetsID,
            year: res1.data.year,
            term: res1.data.term,
            senBook: res1.data.senBook,
            crown: res1.data.crown,
            blackRobes: res1.data.blackRobes,
            whiteRobes: res1.data.whiteRobes,
            altarCloth: res1.data.altarCloth,
            bible: res1.data.bible,
            candleStands: res1.data.candleStands,
            candleLights: res1.data.candleLights,
            banner: res1.data.banner,
            charterLT: res1.data.charterLT,
            ballotBox: res1.data.ballotBox,
            scribeNotebook: res1.data.scribeNotebook,
            treasNotebook: res1.data.treasNotebook,

            advisoryCouncilChairman: res1.data.advisoryCouncilChairman,
            statusAdvisoryCouncilChairman:
              res1.data.statusAdvisoryCouncilChairman,
            dateSignedAdvisoryCouncilChairman: new Date(
              res1.data.dateSignedAdvisoryCouncilChairman
            )
              .toISOString()
              .split("T")[0],

            chapterAdvisor: res1.data.chapterAdvisor,
            statusChapterAdvisor: res1.data.statusChapterAdvisor,
            dateSignedChapterAdvisor: new Date(
              res1.data.dateSignedChapterAdvisor
            )
              .toISOString()
              .split("T")[0],
          };

          navigate("/turnoverhr1", {
            state: {
              userData: userData,
              chapterData: chapterData,
              turnoverID: turnoverData.turnoverStatusID,
              formData: arData,
              approved: turnoverData.assetsApproved,
            },
          });
        });
    } else {
      console.log("NO EXISTING NEW OFFICERS REPORT");
      // mock data
      const newAR = {
        chapterID: userData.chapterID,
        term: "A",
        year: "2022",
        senBook: 1,
        crown: 1,
        blackRobes: 19,
        whiteRobes: 4,
        altarCloth: 1,
        bible: 2,
        candleStands: 7,
        candleLights: 7,
        banner: 1,
        charterLT: 1,
        ballotBox: 2,
        scribeNotebook: 1,
        treasNotebook: 0,

        advisoryCouncilChairman: "",
        statusAdvisoryCouncilChairman: "Pending",
        dateSignedAdvisoryCouncilChairman: new Date(),

        chapterAdvisor: "",
        statusChapterAdvisor: "Pending",
        dateSignedChapterAdvisor: new Date(),
      };

      axios.post(`http://localhost:5000/newAR`, newAR).then((res) => {
        const turnoverUpdate = {
          chapterID: userData.chapterID,
          termID: chapterData.currentTerm,
          fieldToUpdate: "assetsID",
          updateValue: res.data._id,
        };

        axios.post("http://localhost:5000/updateTurnover", turnoverUpdate);

        navigate("/turnoverhr1", {
          state: {
            userData: userData,
            chapterData: chapterData,
            turnoverID: turnoverData.turnoverStatusID,
            formData: res.data,
            approved: turnoverData.assetsApproved,
          },
        });
      });
    }
  };

  const handleCAClick = () => {
    if (turnoverData.advisoryID !== "") {
      console.log("EXISTING ADVISORY REPORT: ", turnoverData.advisoryID);
      axios
        .get(`http://localhost:5000/getAdvisory/${turnoverData.advisoryID}`)
        .then((res1) => {
          const advisoryData = {
            term: res1.data.term,
            year: res1.data.year,

            chairID: res1.data.chairID,
            chairEmail: res1.data.chairEmail,
            chairAddress: res1.data.chairAddress,
            chairPhone: res1.data.chairPhone,
            chairIsReAppt: res1.data.chairIsReAppt,
            chairYears: res1.data.chairYears,

            caID: res1.data.caID,
            caEmail: res1.data.caEmail,
            caAddress: res1.data.caAddress,
            caPhone: res1.data.caPhone,
            caIsReAppt: res1.data.caIsReAppt,
            caYears: res1.data.caYears,
          };

          navigate("/turnoverca1", {
            state: {
              userData: userData,
              chapterData: chapterData,
              turnoverID: turnoverData.turnoverStatusID,
              formData: advisoryData,
              advisoryID: turnoverData.advisoryID,
            },
          });
        });
    } else {
      console.log("NO EXISTING REPORT");
      // mock data
      const newAdvisory = {
        chapterID: userData.chapterID,
        term: "A",
        year: "2022",

        chairID: "",
        chairEmail: "",
        chairAddress: "",
        chairPhone: "",
        chairIsReAppt: false,
        chairYears: 0,

        caID: "",
        caEmail: "",
        caAddress: "",
        caPhone: "",
        caIsReAppt: false,
        caYears: 0,
      };

      axios
        .post(`http://localhost:5000/newAdvisory`, newAdvisory)
        .then((res) => {
          const turnoverUpdate = {
            chapterID: userData.chapterID,
            termID: chapterData.currentTerm,
            fieldToUpdate: "advisoryID",
            updateValue: res.data._id,
          };

          axios.post("http://localhost:5000/updateTurnover", turnoverUpdate);

          navigate("/turnoverca1", {
            state: {
              userData: userData,
              chapterData: chapterData,
              turnoverID: turnoverData.turnoverStatusID,
              formData: res.data,
              advisoryID: res.data._id,
            },
          });
        });
    }
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
              {userData.position}, <br />
              {chapterData.name}
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
                  {/*turnoverData.form1ID && ()*/}
                  <div className="box">
                    <h4>Term and Financial Report</h4>
                    <button className="fill-btn" onClick={handleForm1Click}>
                      {turnoverData.form1ID === "" || null
                        ? "CREATE"
                        : turnoverData.form1Approved
                        ? "REVIEW"
                        : "EDIT"}
                    </button>
                    <br />

                    {turnoverData.form1Approved ? (
                      <span className="badge text-bg-success mt-3">
                        Approved
                      </span>
                    ) : turnoverData.form1ID === "" ? (
                      <span className="badge text-bg-secondary mt-3">
                        No Report Yet
                      </span>
                    ) : turnoverData.form1ID !== "" &&
                      !turnoverData.form1Approved ? (
                      <span className="badge text-bg-warning mt-3">
                        Pending Approval
                      </span>
                    ) : (
                      <span />
                    )}
                    {turnoverData.eoCertification && (
                      <span className="badge text-bg-info ms-2">Certified</span>
                    )}
                  </div>
                  <div className="box">
                    <h4>New Officers Report (Form 15)</h4>
                    <button className="fill-btn" onClick={handleForm15Click}>
                      {turnoverData.form15ID === ""
                        ? "CREATE"
                        : turnoverData.form15Approved
                        ? "REVIEW"
                        : "EDIT"}
                    </button>
                    <br />
                    {turnoverData.form15Approved ? (
                      <span className="badge text-bg-success mt-3">
                        Approved
                      </span>
                    ) : turnoverData.form15ID === "" ? (
                      <span className="badge text-bg-secondary mt-3">
                        No Report Yet
                      </span>
                    ) : turnoverData.form15ID !== "" &&
                      !turnoverData.form15Approved ? (
                      <span className="badge text-bg-warning mt-3">
                        Pending Approval
                      </span>
                    ) : (
                      <span />
                    )}
                    {turnoverData.eoCertification && (
                      <span className="badge text-bg-info ms-2">Certified</span>
                    )}
                  </div>
                </div>
                <div className="boxRow">
                  {/*turnoverData.form15ID && ()*/}

                  <div className="box">
                    <h4>
                      Report on Historical Records, Official Files, Assets, &
                      Properties
                    </h4>
                    <button className="fill-btn" onClick={handleAssetClick}>
                      {turnoverData.assetsID === ""
                        ? "CREATE"
                        : turnoverData.assetsApproved
                        ? "REVIEW"
                        : "EDIT"}
                    </button>
                    <br />
                    {turnoverData.assetsApproved ? (
                      <span className="badge text-bg-success mt-3">
                        Approved
                      </span>
                    ) : turnoverData.assetsID === "" ? (
                      <span className="badge text-bg-secondary mt-3">
                        No Report Yet
                      </span>
                    ) : turnoverData.assetsID !== "" &&
                      !turnoverData.assetsApproved ? (
                      <span className="badge text-bg-warning mt-3">
                        Pending Approval
                      </span>
                    ) : (
                      <span />
                    )}
                    {turnoverData.eoCertification && (
                      <span className="badge text-bg-info ms-2">Certified</span>
                    )}
                  </div>
                  <div className="box">
                    <h4>Certification of Advisory Council Members</h4>
                    <button className="fill-btn mt-4" onClick={handleCAClick}>
                      {turnoverData.advisoryID === ""
                        ? "CREATE"
                        : turnoverData.advisoryApproved
                        ? "REVIEW"
                        : "EDIT"}
                    </button>
                    <br />
                    {turnoverData.advisoryApproved ? (
                      <span className="badge text-bg-success mt-3">
                        Approved
                      </span>
                    ) : turnoverData.advisoryID === "" ? (
                      <span className="badge text-bg-secondary mt-3">
                        No Report Yet
                      </span>
                    ) : turnoverData.advisoryID !== "" &&
                      !turnoverData.advisoryApproved ? (
                      <span className="badge text-bg-warning mt-3">
                        Pending Approval
                      </span>
                    ) : (
                      <span />
                    )}
                    {turnoverData.eoCertification && (
                      <span className="badge text-bg-info ms-2">Certified</span>
                    )}
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

          {/* Submit Button 

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
          </div>*/}
        </div>
      </div>
    </div>
  );

}

export default TurnoverDashboard1;
