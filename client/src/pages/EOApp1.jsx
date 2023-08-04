import { Link } from "react-router-dom";
import "../styles/base.css";
import "../styles/eoapp1.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter, faSquareXmark, faSquareCheck } from "@fortawesome/free-solid-svg-icons";
import { Component } from "react";
import { useParams } from "react-router-dom";

import axios from "axios";
import { useEffect, useState } from "react";

const reject = <FontAwesomeIcon icon={faSquareXmark} />;
const approve = <FontAwesomeIcon icon={faSquareCheck} />;

function EOApp1() {
	const {eoId} = useParams()
	const [applicationData, setApplicationData] = useState({
		applications: [],
		filteredApplications: [],
	});

	const [applicantInformationData, setApplicantInformation] = useState({
		uid: "",
		applicationId: "",
		fullName: "",
		age: "",
		contact: "",
		firstLineSigner: "",
		otherDetails: "",
	});

	const handleSearch = async (e) => {
		const searchString = e.target.value;
		const regex = new RegExp(searchString, "i");
		const filteredApplications = await applicationData.applications.filter((applicant) => {
			if (
				applicant.status !== "Approved" &&
				(regex.test(applicant.givenName) || regex.test(applicant.lastName) || regex.test(applicant.applicantId))
			) {
				return true;
			} else {
				return false;
			}
		});

		setApplicationData({
			...applicationData,
			filteredApplications: filteredApplications,
		});
	};

	useEffect(() => {
		axios.get("http://localhost:5000/getApplications").then((applications) => {
			console.log(applications.data);
			setApplicationData({
				...applicationData,
				applications: applications.data,
				filteredApplications: applications.data.filter(applicant => {
					if (applicant.status !== "Approved") {
						return true;
					} else {
						return false;
					}
				}),
			});

			setApplicantInformation({
				...applicantInformationData,
				uid: applications.data[0]._id,
				applicationId: applications.data[0].applicantId,
				fullName: applications.data[0].givenName + " " + applications.data[0].lastName,
				age: calculateAge(applications.data[0].birthdate),
				contact: applications.data[0].mobile,
				firstLineSigner: applications.data[0].firstLineSigner ? applications.data[0].firstLineSigner : "N/A",
				otherDetails: applications.data[0].notes ? applications.data[0].notes : "N/A",
			});
		});
	}, []);

	function calculateAge(dateString) {
		var birthday = new Date(dateString);
		var ageDifMs = Date.now() - birthday.getTime();
		var ageDate = new Date(ageDifMs); // miliseconds from epoch
		return Math.abs(ageDate.getUTCFullYear() - 1970);
	}

	const changeInformation = (application) => {
		console.log(application);
		setApplicantInformation({
			...applicantInformationData,
			uid: application._id,
			applicationId: application.applicantId,
			fullName: application.givenName + " " + application.lastName,
			age: calculateAge(application.birthdate),
			contact: application.mobile,
			firstLineSigner: application.firstLineSigner ? application.firstLineSigner : "N/A",
			otherDetails: application.notes ? application.notes : "N/A",
		});
	};

	const approveForPetitioning = (applicationId) => {
		const approval = {
			status: "Approved",
			applicationId: applicationId,
		};

		axios.post("http://localhost:5000/approveApplication", approval).then((result) => {
			console.log(result.data);
			alert(`Approved Application: ${applicantInformationData.applicationId}`);
		});
	};

	const rejectApplication = (applicationId) => {
		const rejection = {
			status: "Rejected",
			applicationId: applicationId,
		};

		axios.post("http://localhost:5000/rejectApplication", rejection).then((result) => {
			alert(`Rejected Application: ${applicantInformationData.applicationId}`);
		});
	};

	const redirect = () => {
		window.location.href = `/appform4/${applicantInformationData.uid}/${eoId}`;
	};

	return (
		<div className="container container-fluid ">
			<div className="row">
				<div className="col-md-12">
					<h1>Pending Applications</h1>
				</div>
			</div>

			<hr />

			<div className="row" style={{ marginLeft: "35px" }}>
				<div className="col-md-5">
					{/* Content for the left column */}
					<div className="input-group mb-3">
						<input type="text" className="form-control form-control-sm" placeholder="Search" onChange={handleSearch} />
						<div className="input-group-append">
							<button type="button" className="filterbtn">
								<FontAwesomeIcon icon={faFilter} />
							</button>
						</div>
					</div>
					<br />
					<div className="table-responsive">
						<table className="table table-bordered-custom">
							<thead className="thead-custom">
								<tr>
									<th>#</th>
									<th>Applicant Name</th>
									<th>View</th>
								</tr>
							</thead>
							<tbody>
								{applicationData.filteredApplications.map(function (application) {
									return (
										<tr key={application.applicantId}>
											<td> {application.applicantId} </td>
											<td>
												{application.givenName} {application.lastName}
											</td>
											<td>
												<button className="btn btn-primary" onClick={() => changeInformation(application)}>
													{" "}
													View Application
												</button>
											</td>
										</tr>
									);
								})}
							</tbody>
						</table>
					</div>
				</div>
				<div className="col-md-1">
					{/* Vertical line or divider */}
					<div className="vertical-line"></div>
				</div>
				<div className="col-md-6 justify-content-center">
					<h2 className="text-center" style={{ marginLeft: "-40px" }}>
						Applicant Information
					</h2>
					<table className="info-table" style={{ marginLeft: "130px" }}>
						<tr>
							<td>Full Name</td>
							<td> {applicantInformationData.fullName} </td>
						</tr>

						<tr>
							<td>Age:</td>
							<td>{applicantInformationData.age}</td>
						</tr>

						<tr>
							<td>Contact:</td>
							<td>{applicantInformationData.contact}</td>
						</tr>

						<tr>
							<td>First Line Signer:</td>
							<td>{applicantInformationData.firstLineSigner}</td>
						</tr>

						<tr>
							<td>Other Details:</td>
							<td>{applicantInformationData.otherDetails}</td>
						</tr>
					</table>

					<div className="col-12 text-center" style={{ marginLeft: "-30px", marginTop: "20px" }}>
						<button type="submit" className="btn custom" onClick={redirect}>
							View Full Application
						</button>
					</div>
					<br />
					<br />

					<div className="row" style={{ marginLeft: "70px" }}>
						<div className="col-md-6">
							<button
								type="button"
								style={{ border: "0" }}
								onClick={() => rejectApplication(applicantInformationData.uid)}
							>
								<span>
									<FontAwesomeIcon icon={faSquareXmark} style={{ marginRight: "8px" }} />
								</span>
								<b> Reject Application </b>
							</button>
						</div>

						<div className="col-md-6">
							<button
								type="button"
								style={{ border: "0" }}
								onClick={() => approveForPetitioning(applicantInformationData.uid)}
							>
								<span>
									<FontAwesomeIcon icon={faSquareCheck} style={{ marginRight: "8px" }} />
								</span>
								<b>Approve for Petitioning</b>
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default EOApp1;
