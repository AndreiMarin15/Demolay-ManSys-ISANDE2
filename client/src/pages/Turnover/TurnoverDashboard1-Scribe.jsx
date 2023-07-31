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
	});

	useEffect(() => {
		axios.get(`http://localhost:5000/getChapterByID/${userData.chapterID}`).then(async (res1) => {
			const res2 = await axios.get(
				`http://localhost:5000/getTurnoverReports/${userData.chapterID}/${res1.data.currentTerm}`
			);
			setChapterData(res1.data);
			setTurnoverData({
				turnoverStatusID: res2.data._id,
				form1ID: res2.data.form1ID,
			});
		});

		{
			/* Add fetch userData for current user from members and return id, name, position, chapter */
		}

		document.getElementById("tab1").style.display = "block";
	}, []);

	const handleForm1Click = () => {
		navigate("/turnovertf1", {
			state: {
				userData: userData,
				chapterData: chapterData,
				form1ID: turnoverData.form1ID,
			},
		});
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
							<h5 className="name">Edwardo Rafael</h5>
							<small class="text-muted">Chapter Scribe, Jose Abad Santos #1</small>
							<hr className="hori-line" />
						</div>
					</div>

					<div className="text-start" style={{ marginLeft: "100px" }}>
						<button className="btn-text" type="button" style={{ border: "0" }}>
							<span>
								<FontAwesomeIcon icon={faBullhorn} style={{ marginRight: "8px" }} />
							</span>
							Circulars
						</button>
						<br />
						<button className="btn-text" type="button" style={{ border: "0" }}>
							<span>
								<FontAwesomeIcon icon={faMagnifyingGlass} style={{ marginRight: "8px" }} />
							</span>
							For Review
						</button>
						<br />
						<button className="btn-text" type="button" style={{ border: "0" }}>
							<span>
								<FontAwesomeIcon icon={faFileLines} style={{ marginRight: "8px" }} />
							</span>
							Reports
						</button>
						<br />
						<button className="btn-text" type="button" style={{ border: "0" }}>
							<span>
								<FontAwesomeIcon icon={faAddressBook} style={{ marginRight: "8px" }} />
							</span>
							Directory
						</button>
						<br />
						<button className="btn-text" type="button" style={{ border: "0" }}>
							<span>
								<FontAwesomeIcon icon={faAddressCard} style={{ marginRight: "8px" }} />
							</span>
							Chapter Profile
						</button>
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
									<div className="box">
										<h4>Certificate of Complete Turnover</h4>
										<p>Form/Report Desc</p>
										<input type="checkbox" />
										<button className="fill-btn"> FILL IN </button>
									</div>
									<div className="box">
										<h4>Term and Financial Report</h4>
										<p>Form/Report Desc</p>
										<input type="checkbox" />
										<button className="fill-btn"> FILL IN</button>
									</div>
									<div className="box">
										<h4>Membership Report (Form 10)</h4>
										<p>Form/Report Desc</p>
										<input type="checkbox" />
										<button className="fill-btn"> FILL IN</button>
									</div>
								</div>
								<div className="boxRow">
									<div className="box">
										<h4>New Officers Report (Form 15)</h4>
										<p>Form/Report Desc</p>
										<input type="checkbox" />
										<button className="fill-btn"> FILL IN</button>
									</div>
									<div className="box">
										<h4>Report on Historical Records, Official Files and Assets, and Properties</h4>
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

			{/* Submit Button */}

			<div className="d-flex justify-content-center">
				<Link to="">
					<button type="submit" form="submit" className="primary-btn" value="SUBMIT">
						SUBMIT
					</button>
				</Link>
			</div>
		</div>
	);
}

export default TurnoverDashboard1;
