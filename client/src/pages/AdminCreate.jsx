import { Link } from "react-router-dom";
import "../styles/base.css";
import "../styles/appform5.css";
import { Component } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

function AdminCreate() {
	const [formData, setFormData] = useState({
		positions: [],

		position: "",
		lastName: "",
		givenName: "",
		middleName: "",
		userId: "",
	});
	const [advisoryCouncilData, setAdvisoryCouncil] = useState({});
	const [masterMasonData, setMasterMason] = useState({
		suffix: "",
		masonicLodge: "",
		yearsAsAdvisor: "",
	});
	const [seniorDemolayData, setSeniorDemolay] = useState({
		yearsAsAdvisor: "",
	});
	const [adminData, setAdminData] = useState({});

	useEffect(() => {
		setFormData({
			...FormData,
			positions: [
				{
					key: "Advisory Council",
					value: 1,
				},
				{
					key: "Master Mason",
					value: 2,
				},
				{
					key: "Senior Demolay",
					value: 3,
				},
				{
					key: "Admin User",
					value: 4,
				},
			],

			position: 1,
		});

		console.log(formData);
	}, []);

	const onChangePosition = (e) => {
		setFormData({
			...formData,
			position: e.target.value,
		});
		console.log(formData.position);
	};

	const onChange = (e) => {
		setFormData((prev) => {
			let helper = { ...prev };

			helper[`${e.target.id}`] = e.target.value;

			return helper;
		});
		console.log(formData);
	};

	const onChangeSeniorDemolay = (e) => {
		setSeniorDemolay((prev) => {
			let helper = { ...prev };

			helper[`${e.target.id}`] = e.target.value;

			return helper;
		});
	};

	const onChangeMasterMason = (e) => {
		setMasterMason((prev) => {
			let helper = { ...prev };

			helper[`${e.target.id}`] = e.target.value;

			return helper;
		});
	};

	return (
		<div className="container container-fluid ">
			<div className="row">
				<div className="col-md-12">
					<h1>Create User</h1>
				</div>
			</div>

			<hr />
			<br />
			<form className="g-2" style={{ marginLeft: "30px" }}>
				<div className="row">
					<div className="col-md-4">
						<div className="row mb-3">
							<label for="lastName" className="col-md-4 col-form-label text-right">
								User Last Name
							</label>
							<input
								class="form-control"
								id="lastName"
								type="text"
								placeholder="Last Name"
								onChange={onChange}
								value={formData.lastName}
							/>{" "}
						</div>
					</div>

					<div className="col-md-4">
						<div className="row mb-3">
							<label for="givenName" className="col-md-4 col-form-label text-right">
								User Given Name
							</label>
							<input
								class="form-control"
								id="givenName"
								type="text"
								placeholder="Given Name"
								onChange={onChange}
								value={formData.givenName}
							/>{" "}
						</div>
					</div>

					<div className="col-md-4">
						<div className="row mb-3">
							<label for="middleName" className="col-md-4 col-form-label text-right">
								User Middle Name
							</label>
							<input
								class="form-control"
								id="middleName"
								type="text"
								placeholder="Middle Name"
								onChange={onChange}
								value={formData.middleName}
							/>{" "}
						</div>
					</div>
				</div>

				<div className="row">
					<div className="col-md-4">
						<div className="row mb-3">
							<label for="userID" className="col-md-4 col-form-label text-right">
								User ID
							</label>
							<input
								class="form-control"
								id="userId"
								type="text"
								placeholder="User ID"
								onChange={onChange}
								value={formData.userId}
							/>{" "}
						</div>
					</div>

					<div className="col-md-4">
						<div className="row mb-3">
							<label for="position" className="col-md-4 col-form-label text-right">
								Position
							</label>
							<select
								name="position"
								id="position"
								className="dropdown"
								style={{ width: "auto", height: "100%" }}
								value={formData.position}
								onChange={onChangePosition}
							>
								{formData.positions.map(function (position) {
									return (
										<option value={position.value} key={position.key}>
											{" "}
											{position.key}{" "}
										</option>
									);
								})}
							</select>{" "}
						</div>
					</div>
				</div>
				<br />

				{
					// eslint-disable-next-line eqeqeq
					formData.position == 2 && (
						<>
							<div className="row">
								<div className="col-md-4">
									<div className="row mb-3" id="divYears">
										<label for="yearsAsSenior" className="col-md-4 col-form-label text-right">
											Suffix
										</label>
										<input
											class="form-control"
											id="suffix"
											type="text"
											placeholder="User ID"
											onChange={onChangeMasterMason}
											value={masterMasonData.suffix}
										/>{" "}
									</div>
								</div>

								<div className="col-md-4">
									<div className="row mb-3" id="divYears">
										<label for="masonicLodge" className="col-md-4 col-form-label text-right">
											Masonic Lodge
										</label>
										<input
											class="form-control"
											id="masonicLodge"
											type="text"
											placeholder="Lodge"
											onChange={onChangeMasterMason}
											value={masterMasonData.masonicLodge}
										/>{" "}
									</div>
								</div>

								<div className="col-md-4">
									<div className="row mb-3" id="divYears">
										<label for="yearsAdvisor" className="col-md-4 col-form-label text-right">
											Years as Advisor
										</label>
										<input
											class="form-control"
											id="yearsAsAdvisor"
											type="text"
											placeholder="Years"
											onChange={onChangeMasterMason}
											value={masterMasonData.yearsAsAdvisor}
										/>{" "}
									</div>
								</div>
							</div>
						</>
					)
				}

				{
					// eslint-disable-next-line eqeqeq
					formData.position == 3 && (
						<>
							<div className="row">
								<div className="col-md-4">
									<div className="row mb-3" id="divYears">
										<label for="yearsAsSenior" className="col-md-4 col-form-label text-right">
											Years as Advisor
										</label>
										<input
											class="form-control"
											id="yearsAsAdvisor"
											type="text"
											placeholder="User ID"
											onChange={onChangeSeniorDemolay}
											value={masterMasonData.yearsAsAdvisor}
										/>{" "}
									</div>
								</div>
							</div>
						</>
					)
				}

				<div className="col-12 sub-btn">
					<Link to="/">
						<button type="submit" className="btn btn-primary">
							Create
						</button>
					</Link>
				</div>
			</form>
		</div>
	);
}
export default AdminCreate;
