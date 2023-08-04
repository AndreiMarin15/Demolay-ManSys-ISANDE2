import { Link, useNavigate } from "react-router-dom";
import "../../styles/base.css";
import "../../styles/cscircular.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faBullhorn,
	faFilter,
	faEye,
	faCircleUser,
	faMagnifyingGlass,
	faEnvelope,
	faFileLines,
	faAddressBook,
    faAddressCard
} from "@fortawesome/free-solid-svg-icons";
import { Component } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import ViewCircular from "./ViewCircular.jsx";

const megaphone = <FontAwesomeIcon icon={faBullhorn} />;

function EOCircular() {
    const navigate = useNavigate();
	const [circulars, setCirculars] = useState({
		circulars: [],
		refresh: 0,
	});
    const [currentCircular, setCurrentCircular] = useState({})
	const [currentUser, setCurrentUser] = useState({});
	const [showPopup, setShowPopup] = useState(false);
    const [chapterData, setChapterData] = useState({});
	const [userData, setUserData] = useState({
		userID: "",
		name: "Andrei Marin",
		position: "Chapter Advisor",
		chapterID: "1",
		region: "Region NCR-B",
	});

	const { eoId } = useParams();

    const handleCircularClick = (circular) => {
        setCurrentCircular(circular)
		setShowPopup(true);
	};

	const handleClosePopup = () => {
		setCirculars({
			...circulars,
			refresh: circulars.refresh + 1,
		});
		setShowPopup(false);
	};



	useEffect(() => {
		const fetchData = async () => {
			const circs = eoId
				? await axios.get(`http://localhost:5000/getCircularsByUser/${eoId}`)
				: await axios.get(`http://localhost:5000/getCirculars`);

			const user = await axios.get(`http://localhost:5000/getCurrentUser`); // might change to get session
            const chapter = await axios.get(`http://localhost:5000/getChapterByID/${user.data.chapterAssigned}`)
			console.log(user.data);

			setCurrentUser(user.data);
            setChapterData(chapter.data);
			if (user.data.accountType === 0) {
				setUserData({
					...userData,
					userID: user.data._id,
					name: user.data.givenName + " " + user.data.lastName,
					chapterID: user.data.chapterAssigned,
					position: "Executive Officer",
				});
			}

			setCirculars({
				circulars: circs.data,
			});
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
							<small class="text-muted">Active DeMolay, {chapterData.name}</small>
							<hr className="hori-line" />
						</div>
					</div>

					<button
						className="btn-text"
						type="button"
						style={{ border: "0" }}
						onClick={() => {
							window.location.href = `/eocircular/${eoId}`;
						}}
					>
						<span>
							<FontAwesomeIcon icon={faBullhorn} style={{ marginRight: "8px" }} />
						</span>
						Circulars
					</button>
					<br />
					<button
						className="btn-text"
						type="button"
						style={{ border: "0" }}
						onClick={() => {
							window.location.href = `/eoapp1/${eoId}`;
						}}
					>
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
					{userData.position !== "Executive Officer" && (
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
					)}
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
					</div>

					<div className="row" style={{ marginTop: "10px", marginLeft: "20px" }}>
						<div className="col">
							<div class="list-group">
								{/*ONE ROW STARTS HERE */}
                                <ViewCircular showPopup={showPopup} circular={currentCircular} onClosePopup={handleClosePopup}></ViewCircular>

								{circulars.circulars.map(function (circular) {
									return (
										<>
											<div
												className="row"
												key={circular._id}
												onClick={() => {
													handleCircularClick(circular);
												}}
											>
												<div className="col-md-1 date-time">
													<p className="circ-date">
														<b>{circular.disseminatedDate}</b>
													</p>
												</div>
												<div className="col-md-11">
													<h3 class="mb-1 circ-bold">{circular.subject}</h3>
													<p class="text-muted">
														<b>
															{circular.circularText.length > 100
																? circular.circularText.slice(0, 100) + "..."
																: circular.circularText}
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
								{/*ONE ROW ENDS HERE */}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default EOCircular;
