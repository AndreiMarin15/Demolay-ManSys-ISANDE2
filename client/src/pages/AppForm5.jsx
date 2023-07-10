import { Link } from "react-router-dom";
import "../styles/base.css";
import "../styles/appform5.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

function Appform5() {

	const [formData, setFormData] = useState({
		applicantId: "",
	});

	const [passwordData, setPassword] = useState({
		applicantPassword: "",
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

	const onChange = (e) => {
		setPassword({
			...passwordData,
			applicantPassword: e.target.value,
		});

		console.log(formData, passwordData);
	};

	let { applicationId } = useParams();
	const onSubmit = (e) => {
		e.preventDefault();

		const applicationUpdate = {
			applicantId: formData.applicantId,
			applicantPassword: passwordData.applicantPassword,
		};

		console.log(applicationUpdate);
		console.log(applicationId);

		axios.post(`http://localhost:5000/newApplication5/${applicationId}`, applicationUpdate).then((res) => {
			console.log(res.data);
			//window.location.href = `/`;
		});
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
					application results once available.
				</div>
			</div>

			<form className="g-2" onSubmit={onSubmit} style={{marginLeft: "30px"}}>
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
								onChange={onChange}
								value={passwordData.applicantPassword}
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
