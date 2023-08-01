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
		chapters: [],
		position: "",
		initialPassword: "",
		email: "",
		lastName: "",
		givenName: "",
		middleName: "",
		userId: "",
	});
	const [memberData, setMember] = useState({
		idNumber: "",
		chapterId: "",
		initiatoryDegreeDate: "",
		demolayDegreeDate: "",
	});
	const [advisoryCouncilData, setAdvisoryCouncil] = useState({
		assignedChapterId: "",
	});

	const [adminData, setAdminData] = useState({});

	const onSubmit = (e) => {
		e.preventDefault();

		if (formData.position == 1) {
			// member
			const member = {
				lastName: formData.lastName,
				givenName: formData.givenName,
				middleName: formData.middleName,
				initialPassword: formData.initialPassword,
				email: formData.email,
				idNumber: memberData.idNumber,
				chapterId: memberData.chapterId,
				initiatoryDegreeDate: memberData.initiatoryDegreeDate,
				demolayDegreeDate: memberData.demolayDegreeDate,
			};

			axios.post(`http://localhost:5000/createMember/`, member).then((res) => {
				console.log(res.data);
				alert("Member Account Created");
			});
		} else if (formData.position == 2) {
			// advisory
			const advisory = {
				lastName: 			formData.lastName,
				givenName: 			formData.givenName,
				middleName: 		formData.middleName,
				userId: 			formData.userId,
				initialPassword: 	formData.initialPassword,
				email: 				formData.email,
				assignedChapterId: 	advisoryCouncilData.assignedChapterId,
			};

			axios.post(`http://localhost:5000/createAdvisor/`, advisory).then((res) => {
				console.log(res.data);
				alert("Advisor Account Created");
			});
		} else if (formData.position == 3) {
			// admin
			const admin = {
				lastName: formData.lastName,
				givenName: formData.givenName,
				middleName: formData.middleName,
				userId: formData.userId,
				email: formData.email,
				initialPassword: formData.initialPassword,
			};

			axios.post(`http://localhost:5000/createAdmin/`, admin).then((res) => {
				console.log(res.data);
				alert("Admin Account Created");
			});
		} else if(formData.position == 4){
			const grandMaster = {
				lastName: formData.lastName,
				givenName: formData.givenName,
				middleName: formData.middleName,
				userId: formData.userId,
				email: formData.email,
				initialPassword: formData.initialPassword,
			}

			axios.post(`http://localhost:5000/createGrandMaster/`, grandMaster).then((res) => {
				console.log(res.data);
				alert("Grand Master Account Created");
			});
		} else if(formData.position == 5){
			const chapterScribe = {
				lastName: formData.lastName,
				givenName: formData.givenName,
				middleName: formData.middleName,
				userId: formData.userId,
				email: formData.email,
				chapterId: advisoryCouncilData.assignedChapterId,
				initialPassword: formData.initialPassword,
			}

			axios.post(`http://localhost:5000/createScribe/`, chapterScribe).then((res) => {
				console.log(res.data);
				alert("Chapter Scribe Account Created");
			});
		}

		else if(formData.position == 6){
			const executiveOfficer = {
				lastName: formData.lastName,
				givenName: formData.givenName,
				middleName: formData.middleName,
				userId: formData.userId,
				email: formData.email,
				initialPassword: formData.initialPassword,
			}

			axios.post(`http://localhost:5000/createEO/`, executiveOfficer).then((res) => {
				console.log(res.data);
				alert("Chapter Scribe Account Created");
			});
		}
	};

	useEffect(() => {
		async function fetchData() {
			const chap = await axios.get("http://localhost:5000/getAllChapters");
			setFormData({
				...FormData,
				positions: [
					{
						key: "Member",
						value: 1,
					},
					{
						key: "Advisory Council",
						value: 2,
					},
					{
						key: "Admin",
						value: 3,
					},
					{
						key: "Grand Master",
						value: 4
					},
					{
						key: "Chapter Scribe",
						value: 5
					},
					{
						key: "Executive Officer",
						value: 6
					}
				],
				chapters: chap.data.map((chapter) => {
					return {
						key: chapter.name,
						value: chapter.chapterId,
					};
				}),

				position: 1,
			});
		}
		fetchData();

		console.log(formData);
	}, []);

	const onChangeChapterMember = (e) => {
		setMember({
			...memberData,
			chapterId: e.target.value,
		});
	};

	const onChangeChapterAdvisory = (e) => {
		setAdvisoryCouncil({
			...advisoryCouncilData,
			assignedChapterId: e.target.value,
		});
	};

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

	const onChangeMember = (e) => {
		setMember((prev) => {
			let helper = { ...prev };

			helper[`${e.target.id}`] = e.target.value;

			return helper;
		});
		console.log(memberData);
	};

	const onChangeAdvisoryCouncil = (e) => {
		setAdvisoryCouncil((prev) => {
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
			<form className="g-2" style={{ marginLeft: "30px" }} onSubmit={onSubmit}>
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

					<div className="col-md-4">
						<div className="row mb-3">
							<label for="email" className="col-md-4 col-form-label text-right">
								Email
							</label>
							<input
								autoComplete="off"
								class="form-control"
								id="email"
								type="text"
								placeholder="email"
								onChange={onChange}
								value={formData.email}
							/>{" "}
						</div>
					</div>

					<div className="col-md-4">
						<div className="row mb-3">
							<label for="initialPassword" className="col-md-4 col-form-label text-right">
								Initial Password
							</label>
							<input
								class="form-control"
								id="initialPassword"
								autoComplete="off"
								type="password"
								placeholder="Password"
								onChange={onChange}
								value={formData.initialPassword}
							/>{" "}
						</div>
					</div>

					{
						// eslint-disable-next-line eqeqeq
						formData.position != 1 && (
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
						)
					}
				</div>
				<br />

				{
					// eslint-disable-next-line eqeqeq
					formData.position == 1 && (
						<>
							<div className="row">
								<div className="col-md-4">
									<div className="row mb-3" id="divYears">
										<label for="idNumber" className="col-md-4 col-form-label text-right">
											ID Number
										</label>
										<input
											class="form-control"
											id="idNumber"
											type="text"
											placeholder="User ID"
											onChange={onChangeMember}
											value={memberData.idNumber}
										/>{" "}
									</div>
								</div>

								<div className="col-md-4">
									<div className="row mb-3" id="divYears">
										<label for="chapterId" className="col-md-4 col-form-label text-right">
											Chapter
										</label>
										<select
											className="dropdown"
											name="chapter"
											id="chapterId"
											onChange={onChangeChapterMember}
											value={memberData.chapterId}
										>
											{formData.chapters.map(function (chapter) {
												return (
													<option key={chapter.key} value={chapter.value}>
														{chapter.key}
													</option>
												);
											})}
										</select>{" "}
									</div>
								</div>

								<div className="col-md-4">
									<div className="row mb-3" id="divYears">
										<label for="initiatoryDegreeDate" className="col-md-4 col-form-label text-right">
											Initiatory Degree Date
										</label>
										<input
											class="form-control"
											id="initiatoryDegreeDate"
											type="date"
											placeholder="Years"
											onChange={onChangeMember}
											value={memberData.initiatoryDegreeDate}
										/>{" "}
									</div>
								</div>

								<div className="col-md-4">
									<div className="row mb-3" id="divYears">
										<label for="demolayDegreeDate" className="col-md-4 col-form-label text-right">
											DeMolay Degree Date
										</label>
										<input
											class="form-control"
											id="demolayDegreeDate"
											type="date"
											placeholder="Years"
											onChange={onChangeMember}
											value={memberData.demolayDegreeDate}
										/>{" "}
									</div>
								</div>
							</div>
						</>
					)
				}

				{
					// eslint-disable-next-line eqeqeq
					(formData.position == 2 || formData.position == 5) && (
						<>
							<div className="row">
								<div className="col-md-4">
									<div className="row mb-3" id="divYears">
										<label for="yearsAsSenior" className="col-md-4 col-form-label text-right">
											Assigned Chapter
										</label>
										<select
											className="dropdown"
											name="chapter"
											id="assignedChapterId"
											onChange={onChangeChapterAdvisory}
											value={advisoryCouncilData.assignedChapterId}
										>
											{formData.chapters.map(function (chapter) {
												return (
													<option key={chapter.key} value={chapter.value}>
														{chapter.key}
													</option>
												);
											})}
										</select>{" "}
									</div>
								</div>
							</div>
						</>
					)
				}

				<div className="col-12 sub-btn">
					<button type="submit" className="btn btn-primary">
						Create
					</button>
				</div>
			</form>
		</div>
	);
}
export default AdminCreate;
