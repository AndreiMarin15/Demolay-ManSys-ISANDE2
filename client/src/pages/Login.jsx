import { Link } from "react-router-dom";
import logo from "../img/logo.png";
import "../styles/base.css";
import "../styles/home.css";
import { useEffect, useState } from "react";
import axios from "axios";

function Login() {
	const [formData, setFormData] = useState({
		idNumber: "",
		password: "",
	});

	useEffect(() => {
		console.log(formData);
	}, [formData]);

	const onChange = (e) => {
		setFormData((prev) => {
			let helper = { ...prev };

			helper[`${e.target.id}`] = e.target.value;

			return helper;
		});
	};

	const onSubmit = async (e) => {
		e.preventDefault();

		const loginDetails = {
			idNumber: formData.idNumber,
			password: formData.password,
		};
		const result = await axios.post(
			"http://localhost:5000/login",
			loginDetails
		);
		console.log(result.data);
		console.log("TRRIGER");
		if (result.data === "WP") {
			alert("Incorrect Credentials. Please try again.");
		} else if (result.data[0] === 1) {
			window.location.href = `/appstatus1/${result.data[1]}`;
			console.log(result.data[1]);
		} else if (result.data[0] === 0) {
			window.location.href = `/circular1/${result.data[1]}`;
			console.log(result.data[1]);
		} else if (result.data[0] === 2) {
			window.location.href = `/membercircular/${result.data[1]}`;
			console.log(result.data[1]);
		} else if (result.data[0] === 3) {
			window.location.href = `/cscircular/${result.data[1]}`;
			console.log(result.data[1]);
		} else if (result.data[0] === 4) {
			window.location.href = `/sendcircular/${result.data[1]}`;
			console.log(result.data[1]);
		} else if (result.data[0] === -1) {
			alert("No Account Found");
		} else if (result.data[0] === 5) {
			window.location.href = `/turnoverdashboardofficer/${result.data[1]}`;
		} else if (result.data[0] === 6) {
			window.location.href = `/turnoverdashboardofficer/${result.data[1]}`;
			console.log(result.data[1]);
		} else {
			console.log("Not Triggered");
			console.log(result.data[0]);
		}

		console.log(result);
	};

	return (
		<div id="homelogo">
			<img src={logo} id="big" alt="DeMolay"></img>
			<h1>Enter your account details:</h1>

			<div id="homechild">
				<form id="login" onSubmit={onSubmit}>
					<label for="idnum">ID Number</label>
					<input
						type="text"
						id="idNumber"
						name="idnum"
						onChange={onChange}
						value={formData.idNumber}
					/>
					<br></br>
					<label for="pass">Password</label>
					<input
						type="password"
						id="password"
						name="pass"
						onChange={onChange}
						value={formData.password}
					/>
				</form>

				<button type="submit" form="login" class="primary-btn" value="LOGIN">
					LOGIN
				</button>
			</div>
		</div>
	);
}

export default Login;
