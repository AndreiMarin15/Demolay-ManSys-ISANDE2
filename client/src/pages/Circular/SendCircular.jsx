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
} from "@fortawesome/free-solid-svg-icons";
import { Component } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import NewCircular from "./NewCircular.jsx";

const megaphone = <FontAwesomeIcon icon={faBullhorn} />;

function SendCircular() {
	const [showPopup, setShowPopup] = useState(false);
	const [circulars, setCirculars] = useState({
		circulars: [],
		refresh: 0,
	});

	useEffect(() => {
		const fetchData = async () => {
			const circs = await axios.get("http://localhost:5000/getCirculars");

			setCirculars({
				circulars: circs.data,
			});
		};

		fetchData();
	}, [circulars.refresh]);

	const handleReminderClick = () => {
		setShowPopup(true);
	};

	const handleClosePopup = () => {
		setCirculars({
			...circulars,
			refresh: circulars.refresh + 1,
		});
		setShowPopup(false);
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
							<h5 className="name">Miguel Lim</h5>
							<small class="text-muted">Grand Master</small>
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
					</div>

					<NewCircular showPopup={showPopup} onClosePopup={handleClosePopup} onSendClick={() => {}} />

					<div className="row" style={{ marginTop: "10px", marginLeft: "30px" }}>
						<div className="d-flex justify-content-end">
							<button className="btn" type="button" onClick={handleReminderClick}>
								New Circular
							</button>
						</div>
					</div>

					<div className="row" style={{ marginTop: "10px", marginLeft: "20px" }}>
						<div className="col">
							<div class="list-group">
								{circulars.circulars.map(function (circular) {
									return (
										<Link
											to={`/cscircular2/${circular._id}`}
											href="#"
											class="list-group-item list-group-item-action"
											aria-current="true"
										>
											<div className="row" key={circular._id}>
												<div className="col-md-1 date-time">
													<p className="circ-date">
														<b>
															{circular.dateReleased} <br /> {circular.timeReleased}
														</b>
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
										</Link>
									);
								})}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default SendCircular;
