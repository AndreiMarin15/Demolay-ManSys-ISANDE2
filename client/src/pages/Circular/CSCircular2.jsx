import { Link } from "react-router-dom";
import "../../styles/base.css";
import "../../styles/circular2.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faBullhorn,
	faFilter,
	faEye,
	faCircleUser,
	faMagnifyingGlass,
	faFileLines,
	faAddressBook,
} from "@fortawesome/free-solid-svg-icons";
import { Component } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import MessagePopup from "./MessagePopup.jsx";

const megaphone = <FontAwesomeIcon icon={faBullhorn} />;

function CSCircular2() {
	const { scribeId, circularId } = useParams();

	const [showPopup, setShowPopup] = useState(false);
	const [circularDetails, setDetails] = useState({
		subject: "",
		circularText: "",
		realeasedBy: "",
		releasedById: "",
		dateReleased: "",
		timeReleased: "",
		readBy: [],
	});
	const [clickedMember, setMember] = useState({});

	const [members, setMembers] = useState({
		members: [],
	});

	const [user, setUser] = useState({});
	const [chapter, setChapter] = useState({});
	const[currentMemberId, setMemberId] = useState("")

	const handleReminderClick = (member, memberId) => {
		setMember(member);
		setMemberId(memberId)
		setShowPopup(true);
	};

	const handleClosePopup = () => {
		setShowPopup(false);
	};

	useEffect(() => {
		const fetchData = async () => {
			const user = await axios.get("http://localhost:5000/getCurrentUser");
			const circular = await axios.get(`http://localhost:5000/getCircular/${circularId}`);
			const chapter = user.data.chapterId
				? await axios.get(`http://localhost:5000/getChapterByID/${user.data.chapterId}`)
				: "None";
			const members = user.data.chapterId
				? await axios.get(`http://localhost:5000/getMembers/${user.data.chapterId}`)
				: await axios.get(`http://localhost:5000/getMembers`);

			setDetails({
				subject: circular.data.subject,
				circularText: circular.data.circularText,
				realeasedBy: circular.data.realeasedBy,
				releasedById: circular.data.releasedById,
				dateReleased: circular.data.dateReleased,
				timeReleased: circular.data.timeReleased,
				readBy: circular.data.readBy,
			});
			setUser(user.data);
			setMembers({
				members: members.data,
			});
			if (chapter !== "None") {
				setChapter(chapter.data);
			}
		};

		fetchData();
	}, []);

	const getCurrentDate = () => {
		var today = new Date();
		var dd = String(today.getDate()).padStart(2, "0");
		var mm = String(today.getMonth() + 1).padStart(2, "0");
		var yyyy = today.getFullYear();

		today = yyyy + "-" + mm + "-" + dd;
		return today;
	};

	const getCurrentTime = () => {
		var today = new Date();
		var options = { timeZone: "Asia/Manila", hour: "numeric", minute: "numeric", hour12: true };
		var time = today.toLocaleString("en-US", options);
		return time;
	};

	return (
		<div className="container container-fluid ">
			<div className="row">
				<div className="col-md-12">
					<h1>Home</h1>
				</div>
			</div>

			<hr />

			<div className="row">
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
							<h5 className="name">
								{user.givenName} {user.lastName}
							</h5>
							<small class="text-muted">{chapter.name ? chapter.name : "Grand Master"}</small>
							<hr className="hori-line" />
						</div>
					</div>

					<div className="text-start" style={{ marginLeft: "100px" }}>
						<Link to="/cscircular">
							<button className="btn-text" type="button" style={{ border: "0" }}>
								<span>
									<FontAwesomeIcon icon={faBullhorn} style={{ marginRight: "8px" }} />
								</span>
								Circulars
							</button>
						</Link>
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
							Forms and Reports
						</button>
						<br />
						<button className="btn-text" type="button" style={{ border: "0" }}>
							<span>
								<FontAwesomeIcon icon={faAddressBook} style={{ marginRight: "8px" }} />
							</span>
							Directory
						</button>
					</div>
				</div>
				<div className="col-md-1">
					{/* Vertical line or divider */}
					<div className="vertical-line"></div>
				</div>
				<div className="col-md-8 justify-content-center" style={{ marginLeft: "-60px" }}>
					<div className="row">
						<div className="col">
							<h1>
								<span>
									<FontAwesomeIcon icon={faBullhorn} style={{ marginRight: "15px" }} />
								</span>
								Circulars
							</h1>
						</div>

						<div className="col" style={{ marginTop: "15px" }}>
							<div className="d-flex justify-content-end mb-2">
								<input type="text" className="form-control" placeholder="Search" />
								<div className="input-group-append">
									<button type="button" className="filterbtn">
										<FontAwesomeIcon icon={faFilter} />
									</button>
								</div>
							</div>
						</div>

						<div className="row" style={{ marginTop: "20px", marginLeft: "20px" }}>
							<div className="col">
								<div class="container-fluid">
									<div class="d-flex w-100 justify-content-end">
										<small class="text-muted">
											{" "}
											{circularDetails.dateReleased} | {circularDetails.timeReleased}
										</small>
									</div>
									<h3 class="mb-1">{circularDetails.subject}</h3>
									<br />
									<p class="text-muted" style={{ whiteSpace: "pre-wrap" }}>
										{circularDetails.circularText}
									</p>

									<hr className="horizontal-line" />
									<div class="container-fluid">
										<h4 className="heading4">Circular Status for Members</h4>
										<small className="text-muted">
											As of {getCurrentDate()} at {getCurrentTime()}
										</small>

										<MessagePopup
											showPopup={showPopup}
											onClosePopup={handleClosePopup}
											member={clickedMember}
											circularId={circularId}
											user={user}
											memberId={currentMemberId}
										/>
										<table className="table circ-table" style={{ marginTop: "20px" }}>
											<thead className="bg-light">
												<tr>
													<th>Member Name</th>
													<th>Circular Read?</th>

													<th></th>
												</tr>
											</thead>
											<tbody>
												{/* Add your table rows here */}
												{members.members.map(function (member) {
													return (
														<tr key={member._id}>
															<td>
																{member.givenName} {member.lastName}
															</td>
															<td>
																{circularDetails.readBy.includes(member._id.toString()) ? (
																	<p
																		style={{
																			color: "green",
																		}}
																	>
																		Read
																	</p>
																) : (
																	<p
																		style={{
																			color: "red",
																		}}
																	>
																		Unread
																	</p>
																)}
															</td>

															<td>
																{circularDetails.readBy.includes(member._id.toString()) ? (
																	<p></p>
																) : (
																	<button
																		className="circtable-btn"
																		onClick={() => {
																			handleReminderClick(member, member._id);
																		}}
																	>
																		Remind
																	</button>
																)}
															</td>
														</tr>
													);
												})}

												{/* Add more rows as needed */}
											</tbody>
										</table>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default CSCircular2;
