import { Link } from "react-router-dom";
import "../styles/base.css";
import "../styles/csappinprogress.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter, faSquareXmark, faSquareCheck } from "@fortawesome/free-solid-svg-icons";
import { Component } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const reject = <FontAwesomeIcon icon={faSquareXmark} />;
const approve = <FontAwesomeIcon icon={faSquareCheck} />;

function CSAppInProgress() {
	const [applicationData, setApplicationData] = useState({
		applications: [],
		filteredApplications: [],
		chapters: [],
	});

	const [applicantInformationData, setApplicantInformation] = useState({
		uid: "",
		applicationId: "",
		lastName: "",
		givenName: "",
		middleName: "",
		email: "",
		age: "",
		contact: "",
		firstLineSigner: "",
		otherDetails: "",
		photo: "",
	});

	useEffect(() => {
		const fetchData = () => {
			axios
				.get("http://localhost:5000/getApplications")
				.then(async (applications) => {
					const chapters = await axios.get("http://localhost:5000/getAllChaptersById");
					console.log(applications.data);
					setApplicationData({
						...applicationData,
						applications: applications.data,
						filteredApplications: applications.data.filter((applicant) => {
							console.log(applicant)
							
							if(!applicant.petStatus === "Approved")
							{if (applicant.status === "Approved" || applicant.status == null) {
								return true;
							} else {
								return false;
							}}
						}),
						chapters: chapters.data.map((chapter) => {
							return {
								chapterId: chapter.chapterID,
								name: chapter.name,
							};
						}),
					});
				})
				.then(() => {
					if (!Object.keys(applicationData).length) {
						setApplicantInformation({
							...applicantInformationData,
							uid: applicationData.filteredApplications[0]._id,
							applicationId: applicationData.filteredApplications[0].applicantId,
							lastName: applicationData.filteredApplications[0].lastName,
							givenName: applicationData.filteredApplications[0].givenName,
							middleName: applicationData.filteredApplications[0].middleName,
							email: applicationData.filteredApplications[0].email,
							age: calculateAge(applicationData.filteredApplications[0].birthdate),
							contact: applicationData.filteredApplications[0].mobile,
							firstLineSigner: applicationData.filteredApplications[0].firstLineSigner
								? applicationData.filteredApplications[0].firstLineSigner
								: "N/A",
							otherDetails: applicationData.filteredApplications[0].notes
								? applicationData.filteredApplications[0].notes
								: "N/A",
							photo: applicationData.filteredApplications[0].photo,
						});
					}
				});
		};

		fetchData();

		console.log(applicationData.chapters);
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
			lastName: application.lastName,
			givenName: application.givenName,
			middleName: application.middleName,
			email: application.email,
			age: calculateAge(application.birthdate),
			contact: application.mobile,
			firstLineSigner: application.firstLineSigner ? application.firstLineSigner : "N/A",
			otherDetails: application.notes ? application.notes : "N/A",
			photo: application.photo,
		});
	};

	const approveApplication = (applicationId) => {
		const approval = {
			petStatus: "Approved",
			applicationId: applicationId,
		};

		axios.post("http://localhost:5000/updatePetition", approval).then((result) => {
			console.log(result.data);
			alert(`Approved Petition: ${applicantInformationData.applicationId}`);
		});
	};

	const rejectApplication = (applicationId) => {
		const rejection = {
			petStatus: "Rejected",
			applicationId: applicationId,
		};

		axios.post("http://localhost:5000/updatePetition", rejection).then((result) => {
			console.log(result.data);
			alert(`Rejected Petition: ${applicantInformationData.applicationId}`);
		});
	};

	const redirect = () => {
		window.location.href = `/appform4/${applicantInformationData.uid}`;
	};

	const getChapter = (chapterId) => {
		let name = "No Chapter";
		applicationData.chapters.forEach((chapter) => {
			if (chapter.chapterId == chapterId) {
				name = chapter.name;
			}
		});

		return name;
	};

	const styles = {
		maxWidth: "200px",
		maxHeight: "200px",
		objectFit: "contain",
	};

	return (
		<div className="container container-fluid ">
			<div className="row">
				<div className="col-md-12">
					<h1>In-Progress Applications</h1>
				</div>
			</div>

			<hr />

			<div className="row" style={{ marginLeft: "35px" }}>
				<div className="col-md-5">
					{/* Content for the left column */}
					<div className="input-group mb-3">
						<input type="text" className="form-control form-control-sm" placeholder="Search" />
						<div className="input-group-append">
							<button type="button" className="filterbtn">
								<FontAwesomeIcon icon={faFilter} />
							</button>
						</div>
					</div>
					<br />
					<div className="table-responsive">
						<table className="table app-table">
							<thead className="thead-custom">
								<tr>
									<th>#</th>
									<th>Applicant Name</th>
									<th>Chapter</th>
									<th>View</th>
								</tr>
							</thead>
							<tbody>
								{applicationData.filteredApplications.map(function (application) {
									return (
										<tr key={application.applicantId}>
											<td>{application.applicantId}</td>
											<td>
												{" "}
												{application.givenName} {application.lastName}{" "}
											</td>
											<td> {getChapter(application.chapterId)}</td>
											<td>
												<button className="btn btn-primary" onClick={() => changeInformation(application)}>
													{" "}
													View
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
					<br />
					<div className="table-responsive">
						<table className="info-table" style={{ marginLeft: "130px" }}>
							<tr>
								<td>ID Number:</td>
								<td>
									{applicantInformationData.applicationId
										? applicantInformationData.applicationId
										: "Select an Application"}
								</td>
							</tr>

							<tr>
								<td>Last Name:</td>
								<td>{applicantInformationData.lastName ? applicantInformationData.lastName : ""}</td>
							</tr>

							<tr>
								<td>Given Name:</td>
								<td>{applicantInformationData.givenName ? applicantInformationData.givenName : ""}</td>
							</tr>

							<tr>
								<td>Middle Name:</td>
								<td>{applicantInformationData.middleName ? applicantInformationData.middleName : ""}</td>
							</tr>

							<tr>
								<td>Email:</td>
								<td>{applicantInformationData.email ? applicantInformationData.email : ""}</td>
							</tr>

							<tr>
								<td>First-line Signer:</td>
								<td>{applicantInformationData.firstLineSigner ? applicantInformationData.firstLineSigner : ""}</td>
							</tr>

							<tr>
								<td>Other Details:</td>
								<td>{applicantInformationData.otherDetails ? applicantInformationData.otherDetails : ""}</td>
							</tr>
						</table>
					</div>

					<br />
					<br />
					<div className="table-responsive">
						<table className="small-table" style={{ marginLeft: "130px" }}>
							<tbody>
								<tr>
									<td>ID Picture:</td>
									<td>
										{applicantInformationData.photo ? (
											<img src={applicantInformationData.photo} alt="img" style={styles} />
										) : (
											<p></p>
										)}
									</td>
								</tr>
								
								
							</tbody>
						</table>
					</div>

					<br />
					<br />
					<div className="row" style={{ marginLeft: "70px" }}>
						<div className="col-md-6">
							<button type="button" style={{ border: "0" }} onClick={() => {rejectApplication(applicantInformationData.uid)}}>
								<span>
									<FontAwesomeIcon icon={faSquareXmark} style={{ marginRight: "8px" }} />
								</span>
								<b> Reject Application </b>
							</button>
						</div>

						<div className="col-md-6">
							<button type="button" style={{ border: "0" }} onClick={() => {approveApplication(applicantInformationData.uid)}}>
								<span>
									<FontAwesomeIcon icon={faSquareCheck} style={{ marginRight: "8px" }} />
								</span>
								<b>Approve Petition</b>
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default CSAppInProgress;
