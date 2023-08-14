// TODO: No turnover & check clearance if full 4 thingies are done.
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
	faPhoneSquare
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
	const { officerId } = useParams();

	//sample init data
	const [userData, setUserData] = useState({
		userID: "",
		name: "Andrei Marin",
		position: "Chapter Advisor",
		chapterID: "1",
		region: "Region NCR-B",
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
	});

	useEffect(() => {
		async function getTurnoverReports() {
			axios.get("http://localhost:5000/getCurrentUser").then(async (res) => {
				if (res.data.accountType === 0) {
					setUserData({
						...userData,
						userID: res.data._id,
						name: res.data.givenName + " " + res.data.lastName,
						chapterID: res.data.chapterAssigned,
						position: "Executive Officer",
					});
					console.log("text", res.data);
				} else {
					setUserData({
						...userData,
						userID: res.data._id,
						name: res.data.givenName + " " + res.data.lastName,
						chapterID: res.data.chapterAssigned,
					});
				}
				axios.get(`http://localhost:5000/getChapterByID/${res.data.chapterAssigned}`).then(async (res1) => {
					setChapterData(res1.data);

					const res2 = await axios.get(
						`http://localhost:5000/getTurnoverReports/${res.data.chapterAssigned}/${res1.data.currentTerm}`
					);
					if (res2.data !== "") {
						console.log("TURNOVER REPORTS EXISTS: ", res2.data, res.data.chapterAssigned, res1.data.currentTerm);
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
							eoCertification: res2.data.eoCertification,
						});
					} else {
						console.log(`NO EXISTING TURNOVER REPORTS FOR TERM ${res1.data.currentTerm}: `, res2.data);
						const newTurnover = {
							chapterID: userData.chapterID,
							termID: res1.data.currentTerm,
						};
						axios.post(`http://localhost:5000/newTurnover`, newTurnover).then((res3) => {
							setTurnoverData({
								turnoverStatusID: res3.data._id,
							});
						});
					}
				});
			});
		}

		getTurnoverReports();

		document.getElementById("tab1").style.display = "block";
	}, [turnoverData.eoCertification]);

	const handleForm1Click = () => {
		if (turnoverData.form1ID !== "") {
			console.log("EXISTING FORM 1: ", turnoverData.form1ID);
			axios.get(`http://localhost:5000/getForm1/${turnoverData.form1ID}`).then((res1) => {
				const form1Data = {
					form1ID: turnoverData.form1ID,
					term: res1.data.term,
					year: res1.data.year,
					startTerm: new Date(res1.data.startTerm).toLocaleDateString("en-US", {
						year: "numeric",
						month: "long",
						day: "numeric",
					}),
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

					chapterScribe: res1.data.chapterScribe,
					statusChapterScribe: res1.data.statusChapterScribe,
					dateSignedChapterScribe: new Date(res1.data.dateSignedChapterScribe).toISOString().split("T")[0],

					chapterAdvisor: res1.data.chapterAdvisor,
					statusChapterAdvisor: res1.data.statusChapterAdvisor,
					dateSignedChapterAdvisor: new Date(res1.data.dateSignedChapterAdvisor).toISOString().split("T")[0],
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
		}
	};

	const handleForm15Click = () => {
		if (turnoverData.form15ID !== "") {
			console.log("EXISTING FORM 15: ", turnoverData.form15ID);
			axios.get(`http://localhost:5000/getForm15/${turnoverData.form15ID}`).then((res1) => {
				const form15Data = {
					form15ID: turnoverData.form15ID,
					term: res1.data.term,
					year: res1.data.year,
					electDate: new Date(res1.data.electDate).toISOString().split("T")[0],
					installDate: new Date(res1.data.installDate).toISOString().split("T")[0],
					officers: res1.data.officers,

					chapterAdvisor: res1.data.chapterAdvisor,
					statusChapterAdvisor: res1.data.statusChapterAdvisor,
					dateSignedChapterAdvisor: new Date(res1.data.dateSignedChapterAdvisor).toISOString().split("T")[0],
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
		}
	};

	const handleAssetClick = () => {
		if (turnoverData.assetsID !== "") {
			console.log("EXISTING ASSETS REPORT: ", turnoverData.assetsID);
			axios.get(`http://localhost:5000/getAR/${turnoverData.assetsID}`).then((res1) => {
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

					chapterAdvisor: res1.data.chapterAdvisor,
					statusChapterAdvisor: res1.data.statusChapterAdvisor,
					dateSignedChapterAdvisor: new Date(res1.data.dateSignedChapterAdvisor).toISOString().split("T")[0],
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
		}
	};

	const handleCAClick = () => {
		if (turnoverData.advisoryID !== "") {
			console.log("EXISTING ADVISORY REPORT: ", turnoverData.advisoryID);
			axios.get(`http://localhost:5000/getAdvisory/${turnoverData.advisoryID}`).then((res1) => {
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
						approved: turnoverData.advisoryApproved,
					},
				});
			});
		} else {
			alert("NO EXISTING REPORT YET");
			console.log("NO EXISTING REPORT");
		}
	};

	const handleEOCertify = () => {
		const result = window.confirm(
			"You are about to certify these reports and approve the Chapter to proceed with their Installation of Officers. Do you wish to continue?"
		);
		if (result) {
			if (turnoverData.eoCertification === false) {
				const turnoverUpdate = {
					chapterID: userData.chapterID,
					termID: chapterData.currentTerm,
					fieldToUpdate: "eoCertification",
					updateValue: true,
				};

				axios.post("http://localhost:5000/updateTurnover", turnoverUpdate);
			}

			setTurnoverData({
				...turnoverData,
				eoCertification: true,
			});

			window.alert(`Certified Reports of Term ${chapterData.currentTerm} ${chapterData.name}.`);
		}
	};

	return (
		<div className="container">
			<h1>Home</h1>
			<hr />
			<div className="row">
				{/* First Column */}

				<div className="col-md-3">
					{/* Content for the left column */}
					<div
						className="row justify-content-center"
						style={{
							marginTop: "10px",
							marginLeft: "50px",
						}}
					>
						<FontAwesomeIcon icon={faCircleUser} style={{ fontSize: "150px" }} />
						<div className="text-center">
							<h5 className="name">{userData.name}</h5>

							<small class="text-muted">
								{userData.position}, <br />
								{userData.position === "Executive Officer" ? userData.region : chapterData.name}
							</small>
							<hr className="hori-line" />
						</div>
					</div>
					<div className="text-start" style={{ marginLeft: "100px" }}>
						<button
							className="btn-text"
							type="button"
							style={{ border: "0" }}
							onClick={() => {
								window.location.href = `/eocircular/${userData.userID}`;
							}}
						>
							<span>
								<FontAwesomeIcon icon={faBullhorn} style={{ marginRight: "8px" }} />
							</span>
							Circulars
						</button>
						<br />
						{(userData.position === "Executive Officer" || userData.position === "AdvisoryCouncil") && (
							<>
								<button
									className="btn-text"
									type="button"
									style={{ border: "0" }}
									onClick={() => {
										window.location.href = `/eoapp1/${userData.userID}`;
									}}
								>
									<span>
										<FontAwesomeIcon icon={faMagnifyingGlass} style={{ marginRight: "8px" }} />
									</span>
									For Review
								</button>
								<br />
							</>
						)}
						<button
							className="btn-text"
							type="button"
							style={{ border: "0" }}
							onClick={() => {
								window.location.href = `/setMeeting/${officerId}`;
							}}
						>
							<span>
								<FontAwesomeIcon icon={faPhoneSquare} style={{ marginRight: "8px" }} />
							</span>
							Meetings
						</button>

						<button className="btn-text" type="button" style={{ border: "0" }}>
							<span>
								<FontAwesomeIcon icon={faFileLines} style={{ marginRight: "8px" }} />
							</span>
							Forms and Reports
						</button>
						<br />
						{userData.position !== "Executive Officer" ||
							(userData.position === "AdvisoryCouncil" && (
								<button
									className="btn-text"
									type="button"
									style={{ border: "0" }}
									onClick={() => {
										navigate("/mychapter", {
											state: {
												chapterData: chapterData,
											},
										});
									}}
								>
									<span>
										<FontAwesomeIcon icon={faAddressCard} style={{ marginRight: "8px" }} />
									</span>
									Chapter Directory
								</button>
							))}
					</div>
				</div>

				{/* Vertical Line */}

				<div className="col-md-1">
					<div className="vl"></div>
				</div>

				{/* Second Column */}

				<div className="col-md-8 justify-content-center" style={{ marginLeft: "-60px" }}>
					<div className="d-flex justify-content-between align-items-center mb-3">
						<h1>
							<span>
								<FontAwesomeIcon icon={faFileText} style={{ marginRight: "15px" }} />
							</span>
							Reports
						</h1>
						<div className="d-flex justify-content-end mb-2">
							<input type="text" className="form-control" placeholder="Search" />
							<div className="input-group-append">
								<button type="button" className="filterbtn">
									<FontAwesomeIcon icon={faFilter} />
								</button>
							</div>
						</div>
					</div>
					<div className="tabs-container">
						{/* Tab Headers */}

						<div className="tab-header">
							<button className="tab-button active" onClick={(event) => openTab(event, "tab1")}>
								All
							</button>
							<button className="tab-button" onClick={(event) => openTab(event, "tab2")}>
								Started
							</button>
							<button className="tab-button" onClick={(event) => openTab(event, "tab3")}>
								Submitted
							</button>
						</div>

						{/* Tabs Content 1 */}

						<div id="tab1" className="tab-content active">
							<div className="boxContainer">
								<div className="boxRow">
									{turnoverData.form1ID !== "" && (
										<div className="box">
											<h4>Term and Financial Report</h4>
											<button className="fill-btn center" onClick={handleForm1Click}>
												{" "}
												REVIEW{" "}
											</button>
											<br />
											{turnoverData.form1Approved ? (
												<span className="badge text-bg-success mt-3">Signed</span>
											) : (
												<span className="badge text-bg-warning mt-3">Pending</span>
											)}
											{turnoverData.eoCertification && <span className="badge text-bg-info ms-2">Certified</span>}
										</div>
									)}
									{turnoverData.form15ID !== "" && (
										<div className="box">
											<h4>New Officers Report (Form 15)</h4>
											<button className="fill-btn" onClick={handleForm15Click}>
												{" "}
												REVIEW{" "}
											</button>
											<br />
											{turnoverData.form15Approved ? (
												<span className="badge text-bg-success mt-3">Signed</span>
											) : (
												<span className="badge text-bg-warning mt-3">Pending</span>
											)}
											{turnoverData.eoCertification && <span className="badge text-bg-info ms-2">Certified</span>}
										</div>
									)}
								</div>
								<div className="boxRow">
									{turnoverData.assetsID !== "" && (
										<div className="box">
											<h4>Report on Historical Records, Official Files, Assets, & Properties</h4>
											<button className="fill-btn" onClick={handleAssetClick}>
												{" "}
												REVIEW{" "}
											</button>
											<br />
											{turnoverData.assetsApproved ? (
												<span className="badge text-bg-success mt-3">Signed</span>
											) : (
												<span className="badge text-bg-warning mt-3">Pending</span>
											)}
											{turnoverData.eoCertification && <span className="badge text-bg-info ms-2">Certified</span>}
										</div>
									)}
									{turnoverData.advisoryID !== "" && (
										<div className="box">
											<h4>Certification of Advisory Council Members</h4>
											<button className="fill-btn mt-4" onClick={handleCAClick}>
												REVIEW{" "}
											</button>
											<br />
											{turnoverData.advisoryApproved ? (
												<span className="badge text-bg-success mt-3">Signed</span>
											) : (
												<span className="badge text-bg-warning mt-3">Pending</span>
											)}
											{turnoverData.eoCertification && <span className="badge text-bg-info ms-2">Certified</span>}
										</div>
									)}
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

					{userData.position === "Executive Officer" &&
						turnoverData.eoCertification === false &&
						turnoverData.form1Approved === true &&
						turnoverData.form15Approved === true &&
						turnoverData.assetsApproved === true &&
						turnoverData.advisoryApproved === true && (
							<div className="d-flex justify-content-center">
								<button type="submit" form="submit" className="primary-btn" value="SUBMIT" onClick={handleEOCertify}>
									CERTIFY REPORTS
								</button>
							</div>
						)}
				</div>
			</div>
		</div>
	);
}

export default TurnoverDashboard1;
