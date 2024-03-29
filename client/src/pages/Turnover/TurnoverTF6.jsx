import { Link, useLocation, useNavigate } from "react-router-dom";
import "../../styles/base.css";
import "../../styles/Turnover.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
 
function TurnoverTF6() {
	const navigate = useNavigate();
	const location = useLocation();
	const prevPageProps = location.state;

	const [formData, setFormData] = useState(prevPageProps?.formData ?? {});

	const handleBackButtonClick = () => {
		navigate("/turnovertf5", {
			state: {
				...prevPageProps,
				formData: formData,
			},
		});
	};

	const onSubmit = (e) => {
		e.preventDefault();
		if (prevPageProps.userData.position === "Scribe") {
			axios
				.post(
					`http://localhost:5000/updateTF/${prevPageProps.formData.form1ID}`,
					prevPageProps
				)
				.then((res) => {
					const updateApproval = {
						chapterScribe: prevPageProps.userData.userID,
						statusChapterScribe: "Approved",
						dateSignedChapterScribe: new Date(),
					};

					const props = {
						...prevPageProps,
						updateApproval: updateApproval,
					};

					axios.post(
						`http://localhost:5000/updateTF/${prevPageProps.formData.form1ID}`,
						props
					);

					if (prevPageProps.approved === false) {
						if (
							updateApproval.statusChapterScribe === "Approved" &&
							prevPageProps.formData.statusChapterAdvisor === "Approved"
						) {
							const turnoverUpdate = {
								chapterID: prevPageProps.userData.chapterID,
								termID: prevPageProps.chapterData.currentTerm,
								fieldToUpdate: "form1Approved",
								updateValue: true,
							};
							axios.post(
								"http://localhost:5000/updateTurnover",
								turnoverUpdate
							);
						}
					}

					navigate("/turnoverDashboardscribe", {
						state: {
							...prevPageProps,
						},
					});
				});
		} else {
			if (prevPageProps.userData.position === "Chapter Advisor") {
				if (prevPageProps.formData.statusChapterAdvisor === "Approved") {
					alert("Already approved.");
				} else {
					const updateApproval = {
						chapterAdvisor: prevPageProps.userData.userID,
						statusChapterAdvisor: "Approved",
						dateSignedChapterAdvisor: new Date(),
					};

					const props = {
						...prevPageProps,
						updateApproval: updateApproval,
					};

					axios.post(
						`http://localhost:5000/updateTF/${prevPageProps.formData.form1ID}`,
						props
					);

					if (prevPageProps.approved === false) {
						if (
							updateApproval.statusChapterAdvisor === "Approved" &&
							prevPageProps.formData.statusChapterScribe === "Approved"
						) {
							const turnoverUpdate = {
								chapterID: prevPageProps.userData.chapterID,
								termID: prevPageProps.chapterData.currentTerm,
								fieldToUpdate: "form1Approved",
								updateValue: true,
							};

							axios.post(
								"http://localhost:5000/updateTurnover",
								turnoverUpdate
							);
						}
					}
				}
			}
			navigate(`/turnoverdashboardofficer/${prevPageProps.userData.userID}`, {
				state: {
					...prevPageProps,
				},
			});
		}
	};

	console.log("formdata", prevPageProps.userData.position);

	return (
		<div className="container">
			<div className="d-flex justify-content-between align-items-center mb-3">
				<h1> Term and Financial Report </h1>
			</div>
			<hr />

			{/* Progress Line */}

			<div className="progress-container">
				<div className="progress-line">
					<div className="progress-circle "></div>
					<div className="progress-circle"></div>
					<div className="progress-circle"></div>
					<div className="progress-circle active"></div>
				</div>
				<div className="progress-labels">
					<div className="progress-label">Chapter Information</div>
					<div className="progress-label">Membership Survey</div>
					<div className="progress-label">Financial Report</div>
					<div className="progress-label">Signatories</div>
				</div>
			</div>
			<br />
			<div className="row">
				{/* First Column */}

				<div className="col-md-4">
					<div className="row align-items-center mt-3">
						<div className="col-md-6">
							<label
								htmlFor="chapterscribe"
								className="col-form-label text-left"
							>
								Chapter Scribe:
							</label>
						</div>
						<div className="col-md-6">
							<input
								type="text"
								className="form-control readonly-input"
								value="Name"
								readOnly
							/>
						</div>
					</div>

					<br />

					<div className="row align-items-center mt-3">
						<div className="col-md-6">
							<label
								htmlFor="chapteradvisor"
								className="col-form-label text-left"
							>
								Chapter Advisor:
							</label>
						</div>
						<div className="col-md-6">
							<input
								type="text"
								className="form-control readonly-input"
								value="Name"
								readOnly
							/>
						</div>
					</div>
				</div>

				{/* Second Column */}

				<div className="col-md-4">
					<div className="row align-items-center mt-3">
						<div className="col-md-4">
							<label
								htmlFor="statusscribe"
								className="col-form-label text-left"
							>
								Status:
							</label>
						</div>
						<div className="col-md-8">
							<input
								type="text"
								className="form-control readonly-input"
								value={prevPageProps.formData.statusChapterScribe}
								readOnly
							/>
						</div>
					</div>

					<br />

					<div className="row align-items-center mt-3">
						<div className="col-md-4">
							<label
								htmlFor="statusadvisor"
								className="col-form-label text-left"
							>
								Status:
							</label>
						</div>
						<div className="col-md-8">
							<input
								type="text"
								className="form-control readonly-input"
								value={prevPageProps.formData.statusChapterAdvisor}
								readOnly
							/>
						</div>
					</div>
				</div>

				{/* Third Column */}

				<div className="col-md-4">
					<div className="row align-items-center mt-3">
						<div className="col-md-4">
							<label
								htmlFor="datesignedscribe"
								className="col-form-label text-left"
							>
								Date Signed:
							</label>
						</div>
						<div className="col-md-8">
							<input
								type="date"
								className="form-control readonly-input"
								value={prevPageProps.formData.dateSignedChapterScribe}
								readOnly
							/>
						</div>
					</div>

					<br />

					<div className="row align-items-center mt-3">
						<div className="col-md-4">
							<label
								htmlFor="datesignedadvisor"
								className="col-form-label text-left"
							>
								Date Signed:
							</label>
						</div>
						<div className="col-md-8">
							<input
								type="date"
								className="form-control readonly-input"
								value={prevPageProps.formData.dateSignedChapterAdvisor}
								readOnly
							/>
						</div>
					</div>
				</div>
			</div>

			{/* Button */}

			<div className="d-flex justify-content-between mt-4">
				<button
					className="primary-btn"
					type="button"
					id="back-btn"
					onClick={handleBackButtonClick}
				>
					BACK
				</button>

				{(prevPageProps.userData.position === "Scribe" ||
					prevPageProps.userData.position === "Master Councilor") &&
					prevPageProps.approved === false && (
						<button
							className="primary-btn"
							type="submit"
							form="submit"
							id="primary-btn"
							value="SUBMIT"
							onClick={onSubmit}
						>
							SIGN
						</button>
					)}

				{(prevPageProps.userData.position === "Chapter Advisor" ||
					prevPageProps.userData.position === "Advisory Council Chairman") &&
					prevPageProps.approved === false && (
						<div className="d-flex justify-content-between">
							<button
								type="submit"
								form="submit"
								className="primary-btn"
								value="APPROVE"
								onClick={onSubmit}
							>
								SIGN
							</button>
						</div>
					)}

				{prevPageProps.userData.position === "Executive Officer" && (
					<button
						className="primary-btn"
						type="submit"
						form="submit"
						id="primary-btn"
						value="SUBMIT"
						onClick={onSubmit}
					>
						Submit
					</button>
				)}
			</div>
		</div>
	);
}

export default TurnoverTF6;
