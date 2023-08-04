import { Link } from "react-router-dom";
import "../../styles/base.css";
import "../../styles/cscircular.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faBullhorn,
	faFilter,
	faEye,
	faCircleUser,
	faMagnifyingGlass,
	faFileLines,
	faAddressBook,
	faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { Component } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import ViewMessage from "./ViewMessage.jsx";

const megaphone = <FontAwesomeIcon icon={faBullhorn} />;

function Inbox() {
	const [showPopup, setShowPopup] = useState(false);
	const [circulars, setCirculars] = useState({
		circulars: [],
		refresh: 0,
	});

	const [messages, setMessages] = useState({
		messages: [],
	});

	const [currentUser, setCurrentUser] = useState({});
	const [userChapter, setChapter] = useState({});
	const [clickedMessage, setClicked] = useState({});
	const { memberId } = useParams();

	const handleClosePopup = () => {
		setCirculars({
			...circulars,
			refresh: circulars.refresh + 1,
		});
		setShowPopup(false);
	};

	const handleMessageClick = (message) => {
		setClicked(message);
		setShowPopup(true);
	};

	useEffect(() => {
		const fetchData = async () => {
			const user = await axios.get(`http://localhost:5000/getUser/${memberId}`); // might change to get session
			const chapter = await axios.get(`http://localhost:5000/getChapterByID/${user.data.chapterId}`);
			console.log(user.data);
			console.log(chapter.data);
			setCurrentUser(user.data);
			setChapter(chapter.data);
			setMessages({
				messages: user.data.inbox,
			});
			console.log(user.data.inbox);
		};

		fetchData();
	}, []);

	const styles = {
		borderRadius: "50%",
		width: "200px",
		height: "200px",
		objectFit: "cover",
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
						{currentUser.photo ? (
							<img src={currentUser.photo} alt="img" style={styles} />
						) : (
							<FontAwesomeIcon icon={faCircleUser} style={{ fontSize: "150px" }} />
						)}

						<div className="text-center">
							<h5 className="name">
								{currentUser?.givenName || " "} {currentUser?.lastName || " "}
							</h5>
							<small class="text-muted">Active DeMolay, {userChapter.name}</small>
							<hr className="hori-line" />
						</div>
					</div>

					<div className="text-start" style={{ marginLeft: "100px" }}>
						<button
							className="btn-text"
							type="button"
							style={{ border: "0" }}
							onClick={() => {
								window.location.href = `/membercircular/${memberId}`;
							}}
						>
							<span>
								<FontAwesomeIcon icon={faBullhorn} style={{ marginRight: "8px" }} />
							</span>
							Circulars
						</button>
						<br />
						<button className="btn-text" type="button" style={{ border: "0" }}>
							<span>
								<FontAwesomeIcon icon={faEnvelope} style={{ marginRight: "8px" }} />
							</span>
							Inbox
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
									<FontAwesomeIcon icon={faEnvelope} style={{ marginRight: "15px" }} />
								</span>
								Inbox
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
					</div>

					<div className="row" style={{ marginTop: "10px", marginLeft: "30px" }}>
						<div className="col-md-1">
							<h4>All</h4>
						</div>
						<div className="col-md-1">
							<h4>Unread</h4>
						</div>
						<div className="col-md-1">
							<h4>Read</h4>
						</div>

						<div className="row" style={{ marginTop: "10px", marginLeft: "20px" }}>
							<div className="col">
								<div class="list-group">
									<ViewMessage
										showPopup={showPopup}
										onClosePopup={handleClosePopup}
										message={clickedMessage}
									></ViewMessage>

									{messages.messages.map(function (message) {
										return (
											<>
												<div
													className="row"
													key={message._id}
													onClick={() => {
														handleMessageClick(message);
													}}
												>
													<div className="col-md-11">
														<h3 class="mb-1 circ-bold">{message.subject}</h3>
														<p class="text-muted">
															<b>
																{message.message.length > 100 ? message.message.slice(0, 100) + "..." : message.message}
															</b>
														</p>
													</div>
												</div>
												<div class="d-flex w-100 justify-content-end">
													<small class="view-btn">
														<span style={{ margin: "5px" }}>
															<FontAwesomeIcon icon={faEye} />
														</span>
														View
													</small>
												</div>
											</>
										);
									})}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Inbox;
