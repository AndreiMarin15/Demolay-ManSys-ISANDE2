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

function MemberCircular2() {
	const { memberId, circularId } = useParams();

	const [currentUser, setCurrentUser] = useState({});
	const [userChapter, setChapter] = useState({});
	const [circular, setCircular] = useState({});
	const [readBy, setRead] = useState(false);

	useEffect(() => {
		console.log(memberId, circularId);
		const fetchData = async () => {
			const circ = await axios.get(`http://localhost:5000/getCircular/${circularId}`);
			const user = await axios.get(`http://localhost:5000/getUser/${memberId}`); // might change to get session
			const chapter = await axios.get(`http://localhost:5000/getChapterByID/${user.data.chapterId}`);

			console.log(user.data);
			console.log(chapter.data);
			setCurrentUser(user.data);
			setChapter(chapter.data);
			setCircular(circ.data);

			if (circ.data.readBy.includes(memberId)) {
				setRead(true);
			} else {
				setRead(false);
			}
		};

		fetchData();
	}, []);

	const handleTick = async (e) => {
		setRead(e.target.checked);

		const message = await axios.post(`http://localhost:5000/updateRead/${memberId}/${circularId}`, {
			readBy: e.target.checked,
		});
		alert(message.data);
		console.log(readBy);
	};

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
											{circular.dateReleased} | {circular.timeReleased}
										</small>
									</div>
									<h3 class="mb-1">{circular.subject}</h3>
									<br />
									<div style={{ whiteSpace: 'pre-wrap' }}>{circular.circularText}</div>
									

									<hr className="horizontal-line" />
									<div class="container-fluid">
										<label>
											<input className="form-check-input" type="checkbox" checked={readBy} onChange={handleTick} />I
											hereby acknowledge that I have read and understood the circular sent on {circular.dateReleased}.
										</label>
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

export default MemberCircular2;
