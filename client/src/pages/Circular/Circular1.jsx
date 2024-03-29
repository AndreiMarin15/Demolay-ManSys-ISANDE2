import { Link } from "react-router-dom";
import "../../styles/base.css";
import "../../styles/circular1.css";
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

function Circular1() {
	const {adminId} = useParams()
	const [circulars, setCirculars] = useState({
		circulars: [],
		circulars2: [],
		refresh: 0,
	});

	const [user, setUser] = useState({})

	useEffect(() => {
		const fetchData = async () => {
			const circs = await axios.get("http://localhost:5000/getCirculars");
			const user = await axios.get("http://localhost:5000/getCurrentUser");
			const midPoint = Math.ceil(circs.data.length / 2);

			setCirculars({
				circulars: circs.data.filter((_, i) => i % 2 === 0),
				circulars2: circs.data.filter((_, i) => i % 2 === 1),
			});

			setUser(user.data)
		};

		fetchData();
	}, [circulars.refresh]);

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
							<h5 className="name">{user.givenName} {user.lastName}</h5>
							<small class="text-muted">{user.position ? user.position : "Admin"} {user.chapterId ? user.chapterId : ""}</small>
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
						<button className="btn-text" type="button" style={{ border: "0" }} onClick={() => {window.location.href = `/adminCreate`}}>
							<span>
								<FontAwesomeIcon icon={faAddressBook} style={{ marginRight: "8px" }} />
							</span>
							Create Accounts
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

					<div className="row" style={{ marginTop: "20px", marginLeft: "50px" }}>
						<div className="col">
							<div class="list-group">
								{circulars.circulars.map(function (circular) {
									return (
										<>
											<a
												href={`/circular2/${adminId}/${circular._id}`}
												class="list-group-item list-group-item-action "
												aria-current="true"
											>
												<div class="d-flex w-100 justify-content-end" key={circular._id}>
													<small class="text-muted">
														{" "}
														{circular.disseminatedDate ? (
															<span className="green-circle"></span>
														) : (
															<span className="darkorange-circle"></span>
														)}
														{circular.disseminatedDate
															? `Disseminated on ${circular.disseminatedDate}`
															: "For Dissemination"}
													</small>
												</div>
												<h3 class="mb-1">
													{circular.subject.length > 20 ? circular.subject.slice(0, 20) + "..." : circular.subject}
												</h3>

												<p class="text-muted">
													{circular.circularText.length > 150
														? circular.circularText.slice(0, 150) + "..."
														: circular.circularText}
												</p>
												<div class="d-flex w-100 justify-content-end">
													<small class="view-btn">
														<span style={{ margin: "5px" }}>
															<FontAwesomeIcon icon={faEye} />
														</span>
														View
													</small>
												</div>
											</a>
										</>
									);
								})}
							</div>
						</div>
						<div className="col">
							<div class="list-group">
								{circulars.circulars2.map(function (circular) {
									return (
										<>
											<a
												href={`/circular2/${circular._id}`}
												class="list-group-item list-group-item-action "
												aria-current="true"
											>
												<div class="d-flex w-100 justify-content-end">
													<small class="text-muted">
														{" "}
														{circular.disseminatedDate ? (
															<span className="green-circle"></span>
														) : (
															<span className="darkorange-circle"></span>
														)}
														{circular.disseminatedDate
															? `Disseminated on ${circular.disseminatedDate}`
															: "For Dissemination"}
													</small>
												</div>
												<h3 class="mb-1">
													{circular.subject.length > 20 ? circular.subject.slice(0, 20) + "..." : circular.subject}
												</h3>

												<p class="text-muted">
													{circular.circularText.length > 150
														? circular.circularText.slice(0, 150) + "..."
														: circular.circularText}
												</p>
												<div class="d-flex w-100 justify-content-end">
													<small class="view-btn">
														<span style={{ margin: "5px" }}>
															<FontAwesomeIcon icon={faEye} />
														</span>
														View
													</small>
												</div>
											</a>
										</>
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

export default Circular1;
