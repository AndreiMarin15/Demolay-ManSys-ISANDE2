import { Link } from "react-router-dom";
import "../styles/base.css";
import "../styles/csapp1.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faFilter } from "@fortawesome/free-solid-svg-icons";
import { Component } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const element = <FontAwesomeIcon icon={faArrowRight} />;

function CSApp1() {
	const [applicationData, setApplicationData] = useState({
		applications: [],
		filteredApplications: [],
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
		proofOfPayment: "",
	});

	useEffect(() => {
		const fetchData = () => {
			axios.get("http://localhost:5000/petitionedApplications").then(async (applications) => {
				console.log(applications.data);
				setApplicationData({
					...applicationData,
					applications: applications.data,
					filteredApplications: applications.data,
				});

				setApplicantInformation({
					...applicantInformationData,
					uid: applications.data[0]._id,
					applicationId: applications.data[0].applicantId,
					lastName: applications.data[0].lastName,
					givenName: applications.data[0].givenName,
					middleName: applications.data[0].middleName,
					email: applications.data[0].email,
					age: calculateAge(applications.data[0].birthdate),
					contact: applications.data[0].mobile,
					firstLineSigner: applications.data[0].firstLineSigner ? applications.data[0].firstLineSigner : "N/A",
					otherDetails: applications.data[0].notes ? applications.data[0].notes : "N/A",
					photo: applications.data[0].photo,
					proofOfPayment: applications.data[0].proofOfPayment ? applications.data[0].proofOfPayment : "",
				});
			});
		};

		fetchData();
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
			proofOfPayment: application.proofOfPayment,
		});
	};

	const addToForm10 = async () => {
		const form10 = await axios.get("http://localhost:5000/getForm10");
		console.log(form10);

		if (!form10.data.initiatedMembers.includes(applicantInformationData.applicationId)) {
			form10.data.initiatedMembers.push(applicantInformationData.applicationId);

			const updated = { updatedMembers: form10.data.initiatedMembers };
			console.log(form10.data.initiatedMembers);
			console.log(updated);
			axios.post(`http://localhost:5000/updateForm10/${form10.data.form10Id}`, updated).then((result) => {
				alert(`Applicant ${applicantInformationData.applicationId} added to Form 10 ${form10.data.form10Id}`);
			});
		} else {
			alert(
				`Applicant ${applicantInformationData.applicationId} is already in Form 10 ${form10.data.form10Id}. Kindly submit the Form10 to finalize their application.`
			);
		}

		//	const index = applicationData.applications.findIndex(
		//		(member) => member.applicationId === applicantInformationData.applicationId
		//	);
		//	if (index !== -1) {
		//		applicationData.applications.splice(index, 1);
		//		await applicationData.applications.save();
		//	}
		//
		//	const index2 = applicationData.filteredApplications.findIndex(
		//		(member) => member.applicationId === applicantInformationData.applicationId
		//	);
		//	if (index2 !== -1) {
		//		applicationData.filteredApplications.splice(index2, 1);
		//		await applicationData.filteredApplications.save();
		//	}
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
					<h1>Approved Applications</h1>
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
						<table className="table table-bordered-custom">
							<thead className="thead-custom">
								<tr>
									<th>#</th>
									<th>Applicant Name</th>
									<th>Status</th>
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
											<td>
												{application.proofOfPayment ? (
													<span className="green-circle"></span>
												) : (
													<span className="red-circle"></span>
												)}
												{application.proofOfPayment ? "Paid" : "Not Paid"}
											</td>
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
					<h2 className="text-center" style={{ marginLeft: "-40px" }}>
						Applicant Information
					</h2>
					<div className="table-responsive">
						<table className="info-table" style={{ marginLeft: "130px" }}>
							<tr>
								<td>ID Number:</td>
								<td>{applicantInformationData.applicationId}</td>
							</tr>

							<tr>
								<td>Last Name:</td>
								<td>{applicantInformationData.lastName}</td>
							</tr>

							<tr>
								<td>Given Name:</td>
								<td>{applicantInformationData.givenName}</td>
							</tr>

							<tr>
								<td>Middle Name:</td>
								<td>{applicantInformationData.middleName}</td>
							</tr>

							<tr>
								<td>Email:</td>
								<td>{applicantInformationData.email}</td>
							</tr>

							<tr>
								<td>First-line Signer:</td>
								<td>{applicantInformationData.firstLineSigner}</td>
							</tr>

							<tr>
								<td>Other Details:</td>
								<td>{applicantInformationData.otherDetails}</td>
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
								<tr>
									<td>Proof of Payment:</td>
									<td>
										{applicantInformationData.proofOfPayment ? (
											<img src={applicantInformationData.proofOfPayment} alt="img" style={styles} />
										) : (
											<p>Not yet uploaded</p>
										)}
									</td>
								</tr>
								<tr>
									<td>Admin Status:</td>
									<td>
										{applicantInformationData.proofOfPayment ? (
											<span className="green-circle"></span>
										) : (
											<span className="red-circle"></span>
										)}
										{applicantInformationData.proofOfPayment ? "Paid" : "Not Paid"}
									</td>
								</tr>
							</tbody>
						</table>
					</div>

					<div className="col-12 text-center" style={{ marginLeft: "-30px", marginTop: "20px" }}>
						<button
							type="submit"
							className="btn custom"
							onClick={() => {
								addToForm10();
							}}
						>
							FORM 10
							<FontAwesomeIcon icon={faArrowRight} style={{ color: "#ffffff", marginLeft: "10px" }} />
						</button>
					</div>
					<br />
					<br />
				</div>
			</div>
		</div>
	);
}

export default CSApp1;
