import { Link } from "react-router-dom";
import "../styles/base.css";
import "../styles/csform10.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Component } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const right = <FontAwesomeIcon icon={faArrowRight} />;
const left = <FontAwesomeIcon icon={faArrowLeft} />;

function CSForm10Sum() {
	let { form10Id } = useParams();

	const [applicants, setApplicants] = useState({
		applicants: [],
	});

	const [applicantInformationData, setApplicantInformation] = useState({
		uid: "",
		applicationId: "",
		lastName: "",
		givenName: "",
		middleName: "",
		email: "",
		
		contact: "",
		firstLineSigner: "",
		otherDetails: "",
		photo: "",
		proofOfPayment: "",
	});

	useEffect(() => {
		axios.get(`http://localhost:5000/retrieveInitiatedMembers/${form10Id}`).then((result) => {
			setApplicants({
				applicants: result.data,
			});

			console.log("1", result);
			console.log("2", applicants.applicants);

			setApplicantInformation({
				uid: result.data[0]._id,
				applicationId: result.data[0].applicantId,
				lastName: result.data[0].lastName,
				givenName: result.data[0].givenName,
				middleName: result.data[0].middleName,
				email: result.data[0].email,
				contact: result.data[0].mobile,
				firstLineSigner: result.data[0].firstLineSigner ? result.data[0].firstLineSigner : "N/A",
				otherDetails: result.data[0].notes ? result.data[0].notes : "N/A",
				photo: result.data[0].photo,
				proofOfPayment: result.data[0].proofOfPayment,
			});
		});
	}, []);

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
			contact: application.mobile,
			firstLineSigner: application.firstLineSigner ? application.firstLineSigner : "N/A",
			otherDetails: application.notes ? application.notes : "N/A",
			photo: application.photo,
			proofOfPayment: application.proofOfPayment,
		});
	};

	const submitForm10 = async () => {
		const initiate = {
			toInitiate: applicants.applicants
		}

		axios.post("http://localhost:5000/acceptForm10", initiate).then(result => {
			alert("Form 10 Accepted and Applicants Initiated")
		})
	}

	const styles = {
		maxWidth: "200px",
		maxHeight: "200px",
		objectFit: "contain",
	};

	return (
		<div className="container container-fluid ">
			<div className="row">
				<div className="col-md-12">
					<h1>Form 10: {form10Id}</h1>
				</div>
			</div>

			<hr />

			<div className="row" style={{ marginLeft: "35px" }}>
				<div className="row text-center" style={{ marginLeft: "-35px" }}>
					<h2>SUMMARY LIST</h2>
				</div>
				<div className="col-md-5">
					{/* Content for the left column */}
					<br />
					<div className="table-responsive">
						<table className="table table-bordered-custom approved">
							<thead className="thead-custom">
								<tr>
									<th>#</th>
									<th>Applicant Name</th>
									<th>View</th>
								</tr>
							</thead>
							<tbody>
								{applicants.applicants.map(function (applicant) {
									return (
										<tr key={applicant.applicantId}>
											<td>{applicant.applicantId}</td>
											<td>{applicant.givenName} {applicant.lastName}</td>
											<td>
												<button className="btn custom-add" onClick={() => changeInformation(applicant)}>
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
						
							<button className="btn custom" onClick={() => {submitForm10()}}>
								ACCEPT FORM 10
							</button>
						
					</div>
					<br />
					<br />
				</div>
			</div>
		</div>
	);
}

export default CSForm10Sum;
