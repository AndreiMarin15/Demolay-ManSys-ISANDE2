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

const megaphone = <FontAwesomeIcon icon={faBullhorn} />;

function Circular2() {
	const { circularId } = useParams();
	const [circularDetails, setDetails] = useState({
		subject: "",
		circularText: "",
		realeasedBy: "",
		releasedById: "",
		dateReleased: "",
		timeReleased: "",
		readBy: [],
		isDisseminated: false,
		disseminatedDate: "",
		disseminateTo: [],
	});

	const [options, setOptions] = useState({
		executiveOfficers: [],
		advisoryCouncil: [],
		chapterOfficers: [],
		members: [],
	});

	const [checkBoxTicks, setTicks] = useState({
		executiveOfficers: false,
		advisoryCouncil: false,
		chapterOfficers: false,
		members: false,
	});

	const onTickEO = (e) => {
		if (circularDetails.disseminateTo.length > 0) {
			if (e.target.checked) {
				const newDisseminate = circularDetails.disseminateTo.concat(options.executiveOfficers);

				setDetails((prev) => ({
					...prev,
					disseminateTo: newDisseminate,
				}));
			} else {
				const filtered = circularDetails.disseminateTo.filter((item) => !options.executiveOfficers.includes(item));
				setDetails((prev) => ({
					...prev,
					disseminateTo: filtered,
				}));
			}
		} else {
			if (e.target.checked) {
				setDetails((prev) => ({
					...prev,
					disseminateTo: options.members,
				}));
			}
		}

		setTicks((prev) => ({
			...prev,
			executiveOfficers: e.target.checked,
		}));
	};

	const onTickAdvisory = (e) => {
		if (circularDetails.disseminateTo.length > 0) {
			if (e.target.checked) {
				const newDisseminate = circularDetails.disseminateTo.concat(options.advisoryCouncil);

				setDetails((prev) => ({
					...prev,
					disseminateTo: newDisseminate,
				}));
			} else {
				const filtered = circularDetails.disseminateTo.filter((item) => !options.advisoryCouncil.includes(item));
				setDetails((prev) => ({
					...prev,
					disseminateTo: filtered,
				}));
			}
		} else {
			if (e.target.checked) {
				setDetails((prev) => ({
					...prev,
					disseminateTo: options.members,
				}));
			}
		}

		setTicks((prev) => ({
			...prev,
			advisoryCouncil: e.target.checked,
		}));
	};

	const onTickOfficers = (e) => {
		if (circularDetails.disseminateTo.length > 0) {
			if (e.target.checked) {
				const newDisseminate = circularDetails.disseminateTo.concat(options.chapterOfficers);

				setDetails((prev) => ({
					...prev,
					disseminateTo: newDisseminate,
				}));
			} else {
				const filtered = circularDetails.disseminateTo.filter((item) => !options.chapterOfficers.includes(item));
				setDetails((prev) => ({
					...prev,
					disseminateTo: filtered,
				}));
			}
		} else {
			if (e.target.checked) {
				setDetails((prev) => ({
					...prev,
					disseminateTo: options.chapterOfficers,
				}));
			}
		}

		setTicks((prev) => ({
			...prev,
			chapterOfficers: e.target.checked,
		}));
	};

	const onTickMembers = (e) => {
		if (circularDetails.disseminateTo.length > 0) {
			if (e.target.checked) {
				const newDisseminate = circularDetails.disseminateTo.concat(options.members);

				setDetails((prev) => ({
					...prev,
					disseminateTo: newDisseminate,
				}));
			} else {
				const filtered = circularDetails.disseminateTo.filter((item) => !options.members.includes(item));
				setDetails((prev) => ({
					...prev,
					disseminateTo: filtered,
				}));
			}
		} else {
			if (e.target.checked) {
				setDetails((prev) => ({
					...prev,
					disseminateTo: options.members,
				}));
			}
		}
		setTicks((prev) => ({
			...prev,
			members: e.target.checked,
		}));

		console.log(options.members);
		console.log(circularDetails.disseminateTo);
	};

	const [isDisseminated, setDisseminated] = useState({
		disseminated: false,
	});

	useEffect(() => {
		const fetchData = async () => {
			const circular = await axios.get(`http://localhost:5000/getCircular/${circularId}`);
			const executiveOfficers = await axios.get("http://localhost:5000/getEOs");
			const members = await axios.get("http://localhost:5000/getMemberIDs");
			const chapterOfficers = await axios.get("http://localhost:5000/getChapterScribes");
			const advisoryCouncil = await axios.get("http://localhost:5000/getAdvisoryCouncil");

			setOptions({
				executiveOfficers: executiveOfficers.data,
				advisoryCouncil: advisoryCouncil.data,
				chapterOfficers: chapterOfficers.data,
				members: members.data,
			});

			setDetails({
				...circularDetails,
				subject: circular.data.subject,
				circularText: circular.data.circularText,
				realeasedBy: circular.data.realeasedBy,
				releasedById: circular.data.releasedById,
				dateReleased: circular.data.dateReleased,
				timeReleased: circular.data.timeReleased,
				disseminatedDate: circular.data.disseminatedDate ? circular.data.disseminatedDate : "",
				isDisseminated: circular.data.isDisseminated ? circular.data.isDisseminated : false,
			});
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

	const disseminateCirculars = () => {
		const today = getCurrentDate()
		setDetails({
			...circularDetails,
			isDisseminated: true,
			disseminatedDate: today
		});
		console.log(circularDetails.disseminateTo);
		const disseminate = {
			disseminateTo: circularDetails.disseminateTo,
			disseminatedDate: today
		};

		axios.post(`http://localhost:5000/disseminateCircular/${circularId}`, disseminate)
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
							<h5 className="name">Bea Lim</h5>
							<small class="text-muted">Executive Director, Jose Abad Santos #1</small>
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

						<div className="row" style={{ marginTop: "20px", marginLeft: "20px" }}>
							<div className="col">
								<div class="container-fluid circ-cont">
									<div class="d-flex w-100 justify-content-end">
										<small class="text-muted">
											{" "}
											<span className="green-circle"></span>Released on {circularDetails.dateReleased}
										</small>
									</div>
									<h3 class="mb-1">{circularDetails.subject}</h3>
									<br />
									<p class="text-muted">{circularDetails.circularText}</p>

									{!circularDetails.isDisseminated ? (
										<div class="container-fluid circ-cont">
											<div class="d-flex w-100 justify-content-start">
												<h4>Disseminate to:</h4>
											</div>
											<small>Select all that apply.</small>

											<div className="row circ-options">
												<div class="col circ-col">
													<div class="form-check">
														<input class="form-check-input" type="checkbox" id="checkbox1" />
														<label class="form-check-label" for="checkbox1" onChange={onTickEO}>
															Executive Officers
														</label>
													</div>
												</div>
												<div class="col circ-col">
													<div class="form-check">
														<input class="form-check-input" type="checkbox" id="checkbox2" onChange={onTickAdvisory} />
														<label class="form-check-label" for="checkbox2">
															Advisory Council
														</label>
													</div>
												</div>
												<div class="col circ-col">
													<div class="form-check">
														<input class="form-check-input" type="checkbox" id="checkbox3" onChange={onTickOfficers} />
														<label class="form-check-label" for="checkbox3">
															Chapter Officers
														</label>
													</div>
												</div>
												<div class="col circ-col">
													<div class="form-check">
														<input class="form-check-input" type="checkbox" id="checkbox4" onChange={onTickMembers} />
														<label class="form-check-label" for="checkbox4">
															Organization Members
														</label>
													</div>
												</div>
											</div>

											<div className="col-12 text-center">
												<button
													type="button"
													className="circ-btn"
													onClick={() => {
														disseminateCirculars();
													}}
												>
													Disseminate
												</button>
											</div>
										</div>
									) : (
										<div class="container-fluid desc-cont text-center">
											<p className="circ-desc">This circular was disseminated on {circularDetails.disseminatedDate}.</p>
										</div>
									)}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Circular2;
