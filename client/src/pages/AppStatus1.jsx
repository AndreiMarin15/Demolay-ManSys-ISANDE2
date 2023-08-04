import { Link } from "react-router-dom";
import "../styles/base.css";
import "../styles/appstatus1.css";

import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

function AppStatus1() {
	let { id } = useParams();

	const [photoData, setPhoto] = useState({
		photo: "",
	});

	const [formData, setFormData] = useState({
		applicantId: "",
		chapter: "",
		dateCreated: "",
		status: "",
		petStatus: "",
		memberId: "",
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
	function calculateAge(dateString) {
		var birthday = new Date(dateString);
		var ageDifMs = Date.now() - birthday.getTime();
		var ageDate = new Date(ageDifMs); // miliseconds from epoch
		return Math.abs(ageDate.getUTCFullYear() - 1970);
	}
	useEffect(() => {
		async function fetchData() {
			const application = await axios.get(`http://localhost:5000/getStatus1/${id}`);
			const applicationInfo = await axios.get(`http://localhost:5000/applications/${id}`);

			console.log(application);
			console.log(applicationInfo);
			setFormData({
				...formData,
				applicantId: application.data.applicantId,
				chapter: application.data.chapter,
				dateCreated: application.data.dateCreated,
				status: application.data.status,
				petStatus: application.data.petStatus ? application.data.petStatus : "In Progress",
				memberId: application.data.acceptedId ? application.data.acceptedId : "Waiting for Approval",
			});

			setApplicantInformation({
				...applicantInformationData,
				uid: applicationInfo.data[0]._id,
				applicationId: applicationInfo.data[0].applicantId,
				fullName: applicationInfo.data[0].givenName + " " + applicationInfo.data[0].lastName,
				age: calculateAge(applicationInfo.data[0].birthdate),
				contact: applicationInfo.data[0].mobile,
				firstLineSigner: applicationInfo.data[0].firstLineSigner ? applicationInfo.data[0].firstLineSigner : "N/A",
				otherDetails: applicationInfo.data[0].notes ? applicationInfo.data[0].notes : "N/A",
			});
		}
		fetchData();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const redirect = () => {
		window.location.href = `/appform4/${applicantInformationData.uid}`;
	};

	const handleImageUpload = async (e) => {
		const file = e.target.files[0];
		const base64 = await convertToBase64(file);

		setPhoto({
			...photoData,
			photo: base64,
		});

		console.log(photoData);
	};

	function convertToBase64(file) {
		return new Promise((resolve, reject) => {
			const fileReader = new FileReader();

			fileReader.readAsDataURL(file);
			fileReader.onload = () => {
				resolve(fileReader.result);
			};
			fileReader.onerror = (error) => {
				reject(error);
			};
		});
	}

	const submitProofOfPayment = () => {
		const update = {
			proofOfPayment: photoData.photo,
			applicationId: applicantInformationData.uid,
		};

		axios.post("http://localhost:5000/submitProofOfPayment", update).then((res) => {
			alert("Submitted Proof of Payment. Kindly wait for Scribe Approval");
		});
	};

	return (
		/* NEED TO CHANGE HEADER -- ADD Log Out AND My Application BUTTONS */
		<div className="container container-fluid ">
			<div className="row">
				<div className="col-md-12">
					<h1>My Application</h1>
				</div>
			</div>

			<hr />

			<div className="row" style={{ marginLeft: "40px" }}>
				<div className="col-md-7">
					{/* Content for the left column */}
					<h2 className="text-center" style={{ marginLeft: "-40px" }}>
						Applicant Information
					</h2>
					<table className="info-table" style={{ marginLeft: "130px" }}>
						<tr>
							<td>Full Name</td>
							<td> {applicantInformationData.fullName ? applicantInformationData.fullName : "N/A"} </td>
						</tr>

						<tr>
							<td>Age:</td>
							<td>{applicantInformationData.age ? applicantInformationData.age : "N/A"}</td>
						</tr>

						<tr>
							<td>Contact:</td>
							<td>{applicantInformationData.contact ? applicantInformationData.contact : "N/A"}</td>
						</tr>

						<tr>
							<td>First Line Signer:</td>
							<td>{applicantInformationData.firstLineSigner ? applicantInformationData.firstLineSigner : "N/A"}</td>
						</tr>

						<tr>
							<td>Other Details:</td>
							<td>{applicantInformationData.otherDetails ? applicantInformationData.otherDetails : "N/A"}</td>
						</tr>
					</table>

					<div className="col-12 text-center" style={{ marginLeft: "-30px", marginTop: "20px" }}>
						<button type="submit" className="btn custom" onClick={redirect}>
							View Full Application
						</button>
					</div>
				</div>
				<div className="col-md-1">
					{/* Vertical line or divider */}
					<div className="vertical-line"></div>
				</div>
				<div className="col-md-4">
					{/* Content for the right column */}
					<h2 className="text-center" style={{ marginLeft: "-80px" }}>
						Application Details
					</h2>
					<table className="details-table">
						<tr>
							<td>Applicant ID:</td>
							<td>{formData.applicantId}</td>
						</tr>

						<tr>
							<td>Chapter applied to:</td>
							<td>{formData.chapter}</td>
						</tr>

						<tr>
							<td>Application Date:</td>
							<td>{formData.dateCreated ? formData.dateCreated.substring(0, 10) : "2000-1-1"}</td>
						</tr>

						{formData.status === "In Review" && (
							<tr>
								<td>EO Status:</td>
								<td>
									{" "}
									<p className="text-center" id="status-review">
										{formData.status}
									</p>
								</td>
							</tr>
						)}

						{formData.status === "Approved" && (
							<>
								<tr>
									<td>EO Status:</td>
									<td>
										{" "}
										<p className="text-center" id="app-status">
											Approved
										</p>
									</td>
								</tr>

								<tr>
									<td>Petition Status:</td>
									<td>
										{" "}
										<p className="text-center"> {formData.petStatus} </p>
									</td>
								</tr>
							</>
						)}

						{formData.status === "Rejected" && (
							<tr>
								<td>EO Status:</td>
								<td>
									{" "}
									<p className="text-center" id="status-rejected">
										Rejected
									</p>
								</td>
							</tr>
						)}
					</table>

					{formData.status === "In Review" && (
						<p className="text-center" id="desc" style={{ marginLeft: "-80px" }}>
							Your application is currently in review by an investigation committee. <br />
							Expect results within 5 days.
						</p>
					)}

					{(formData.status === "Rejected" || formData.petStatus === "Rejected") && (
						<p className="text-center" id="desc" style={{ marginLeft: "-80px" }}>
							We regret to inform you that upon evaluation, <br /> your application was rejected.
						</p>
					)}

					{formData.status === "Approved" &&
						formData.petStatus === "Approved" &&
						formData.memberId === "Waiting for Approval" && (
							<>
								<hr
									style={{
										color: "black",
										height: "1px",
										marginLeft: "-35px",
									}}
								/>

								<table
									style={{
										marginLeft: "80px",
										border: "1px solid black",
										padding: "50px",
									}}
								>
									<tr>
										<td style={{ padding: "8px" }}>
											<b>Member ID:</b> {formData.memberId}{" "}
										</td>
									</tr>
								</table>

								<p className="text-center" id="cont" style={{ marginLeft: "-80px" }}>
									If you wish to continue, kindly upload your proof of payment below.
								</p>

								<div className="row" style={{ marginLeft: "80px" }}>
									<label for="uploadProof" className="col-form-label text-right">
										Proof of Payment:
									</label>
									<input
										type="file"
										className="form-control"
										id="photo"
										accept=".jpeg, .png, .jpg"
										onChange={handleImageUpload}
									/>
								</div>

								<div className="row">
									<button type="submit" className="btn btn-primary" onClick={submitProofOfPayment}>
										SUBMIT
									</button>
								</div>
							</>
						)}

					{formData.status === "Approved" && formData.petStatus === "Approved" && formData.memberId && (
						<>
							<hr
								style={{
									color: "black",
									height: "1px",
									marginLeft: "-35px",
								}}
							/>

							<table
								style={{
									marginLeft: "80px",
									border: "1px solid black",
									padding: "50px",
								}}
							>
								<tr>
									<td style={{ padding: "8px" }}>
										<b>Member ID:</b> {formData.memberId}{" "}
									</td>
								</tr>
							</table>

							<p className="text-center" id="cont" style={{ marginLeft: "-80px" }}>
								Congratulations! You are now a member of Demolay Chapter<br></br> {formData.chapter}
							</p>

							<p className="text-center" id="cont" style={{ marginLeft: "-80px" }}>
								Please Proceed to Log In using your Member ID <br></br> and the same password that you used in your application
							</p>
							<div className="row">
								<button type="submit" className="btn btn-primary" onClick={() => {window.location.href = `/login`}}>
									Log In
								</button>
							</div>
						</>
					)}
				</div>
			</div>
		</div>
	);
}
export default AppStatus1;
