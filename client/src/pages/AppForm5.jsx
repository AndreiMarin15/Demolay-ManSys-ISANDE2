import { Link } from "react-router-dom";
import "../styles/base.css";
import "../styles/appform5.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState, useRef } from "react";

function Appform5() {
	let { applicationId } = useParams();

	const [formData, setFormData] = useState({
		applicantId: "",
		status: "In Review",
	});

	const [passwordData, setPassword] = useState({
		applicantPassword: "",
		passwordConfirm: "",
	});

	const [applicantAge, setAge] = useState({
		birthdate: "",
		age: "",
	});

	// TODO: Generate applicant ID
	// 1. UseEffect to check the most recent applicantID
	// 1.a. If there is no applicant ID, generate one with the format YEARNumber (20230001)
	// 1.b. If there is an existing applicant ID, add one
	// 2. Assign the created ID to the disabled input

	useEffect(() => {
		async function fetchData() {
			let highestId = await axios.get("http://localhost:5000/generateID");
			highestId.data = highestId.data + 1;
			setFormData({
				...formData,
				applicantId: highestId.data,
			});
		}
		fetchData();
	}, [formData]);

	useEffect(() => {
		async function fetchAge() {
			let application = await axios.get(`http://localhost:5000/applications/${applicationId}`);

			let age = calculateAge(application.data.birthdate);

			setAge({
				...applicantAge,
				birthdate: application.data.birthdate,
				age: age,
			});
		}
	}, []);

	function calculateAge(dateString) {
		var birthday = new Date(dateString);
		var ageDifMs = Date.now() - birthday.getTime();
		var ageDate = new Date(ageDifMs); // miliseconds from epoch
		return Math.abs(ageDate.getUTCFullYear() - 1970);
	}

	const onChangePassword = (e) => {
		setPassword({
			...passwordData,
			applicantPassword: e.target.value,
		});

		console.log(formData, passwordData);
	};

	useEffect(() => {
		if (passwordData.passwordConfirm !== passwordData.applicantPassword) {
			passwordConfirmRef.current.style.borderColor = "red";
			console.log(passwordData);
		} else {
			passwordConfirmRef.current.style.borderColor = "black";
		}
	}, [passwordData.passwordConfirm]);

	const passwordConfirmRef = useRef(null);

	const onChangeConfirm = (e) => {
		setPassword({
			...passwordData,
			passwordConfirm: e.target.value,
		});
	};

	const onSubmit = (e) => {
		e.preventDefault();
		const currentDate = new Date();
		const options = { year: "numeric", month: "2-digit", day: "2-digit" };
		const formattedDate = currentDate.toLocaleDateString("en-US", options).split("/").reverse().join("-");

		console.log(formattedDate);

		if (passwordData.applicantPassword === passwordData.passwordConfirm) {
			if (applicantAge.age > 17 || applicantAge.age < 17) {
				const applicationUpdate = {
					applicantId: formData.applicantId,
					applicantPassword: passwordData.applicantPassword,
					status: "In Progress",
					dateCreated: currentDate,
				};

				console.log(applicationUpdate);
				console.log(applicationId);

				axios.post(`http://localhost:5000/newApplication5/${applicationId}`, applicationUpdate).then((res) => {
					console.log(res.data);
					alert("Application Submited");
					window.location.href = `/appstatus1/${applicationId}`;
				});
			} else {
				const applicationUpdate = {
					applicantId: formData.applicantId,
					applicantPassword: passwordData.applicantPassword,
					status: "Approved",
					dateCreated: currentDate,
				};

				console.log(applicationUpdate);
				console.log(applicationId);

				axios.post(`http://localhost:5000/newApplication5/${applicationId}`, applicationUpdate).then((res) => {
					console.log(res.data);
					alert("Application Submited");
					window.location.href = `/appstatus1/${applicationId}`;
				});
			}
		} else {
			alert(`Passwords don't match. Please try again.`);
		}
	};

	return (
		<div className="container container-fluid ">
			<div className="row">
				<div className="col-md-12">
					<h1>Application Submitted!</h1>
				</div>
			</div>

			<hr />
			<div className="row">
				<div className="col-md-12 conf-message">
					Your application has been submitted! <br />
					Please use your assigned Applicant ID below, and set a password for your login credentials to see your
					application results once available. <br />

					<span style={{color: "red"}}>Kindly save your Applicant ID. It will be necessary in order to view your application status.</span>
				</div>
			</div>

			<form className="g-2" onSubmit={onSubmit} style={{ marginLeft: "30px" }}>
				<div className="row">
					<div className="col-md-4">
						<div className="row mb-3">
							<label for="inputEmail" className="col-md-4 col-form-label text-right">
								Applicant ID
							</label>
							<input
								className="form-control"
								id="applicantId"
								type="text"
								placeholder="Disabled input here..."
								value={formData.applicantId}
								disabled
							/>{" "}
						</div>
					</div>
				</div>

				<div className="row">
					<div className="col-md-4">
						<div className="row mb-3">
							<label for="applicantPassword" className="col-md-4 col-form-label text-right">
								Set Password
							</label>
							<input
								class="form-control"
								id="applicantPassword"
								type="password"
								placeholder="Password"
								onChange={onChangePassword}
								value={passwordData.applicantPassword}
							/>
						</div>
					</div>
				</div>

				<div className="row">
					<div className="col-md-4">
						<div className="row mb-3">
							<label for="applicantPassword" className="col-md-4 col-form-label text-right">
								Confirm Password
							</label>

							<input
								class="form-control"
								id="passwordConfirm"
								type="password"
								placeholder="Confirm Password"
								onChange={onChangeConfirm}
								ref={passwordConfirmRef}
								value={passwordData.passwordConfirm}
							/>
						</div>
					</div>
				</div>

				<div className="col-12 sub-btn">
					<button type="submit" className="btn btn-primary">
						SUBMIT
					</button>
				</div>
			</form>
		</div>
	);
}

export default Appform5;
