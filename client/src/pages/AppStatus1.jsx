import { Link } from "react-router-dom";
import "../styles/base.css";
import "../styles/appstatus1.css";

import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

function AppStatus1() {
	let { id } = useParams();

	const [formData, setFormData] = useState({
		applicantId: "",
		chapter: "",
		dateCreated: "",
		status: "",
	});

	useEffect(() => {
		async function fetchData() {
			const application = await axios.get(`http://localhost:5000/getStatus1/${id}`);

			setFormData({
				...formData,
				applicantId: application.data.applicantId,
				chapter: application.data.chapter,
				dateCreated: application.data.dateCreated,
				status: application.data.status,
			});
		}
		fetchData();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
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
					<h2>Left Column</h2>
					<p>This is where the applicant's submitted application form will go.</p>
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

						{formData.status == "In Review" && (
							<tr>
								<td>Status:</td>
								<td>
									{" "}
									<p className="text-center" id="status-review">
										{formData.status}
									</p>
								</td>
							</tr>
						)}

						{formData.status == "Approved" && (
							<tr>
								<td>Status:</td>
								<td>
									{" "}
									<p className="text-center" id="app-status">
										Approved
									</p>
								</td>
							</tr>
						)}
					</table>

					{formData.status == "In Review" && (
						<p className="text-center" id="desc" style={{ marginLeft: "-80px" }}>
							Your application is currently in review by an investigation committee. <br />
							Expect results within 5 days.
						</p>
					)}

					{formData.status == "Approved" && (
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
										<b>Member ID:</b> 2092034911{" "}
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
								<input type="file" className="form-control" id="uploadProof" />
							</div>

							<div className="col-12 text-center" style={{ marginLeft: "-30px", marginTop: "20px" }}>
								<Link to="/">
									<button type="submit" className="btn btn-primary">
										SUBMIT
									</button>
								</Link>
							</div>
						</>
					)}
				</div>
			</div>
			{formData.status == "In Review" && (
				<div className="col-12 sub-btn">
					<Link to="/">
						<button type="submit" className="btn btn-primary">
							SUBMIT
						</button>
					</Link>
				</div>
			)}
		</div>
	);
}

export default AppStatus1;
