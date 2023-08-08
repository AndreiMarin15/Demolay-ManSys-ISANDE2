import "../styles/base.css";
import "../styles/appform3.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const API_REGION = "https://psgc.gitlab.io/api/regions/";
const API_PROVINCE = "https://psgc.gitlab.io/api/provinces/";
const API_CITY = "https://psgc.gitlab.io/api/cities-municipalities/";

function Appform4() {
	let { applicationId, eoId } = useParams();

	const [formData, setFormData] = useState({
		cities: [],
		provinces: [],
		regions: [],
		religions: [],
		chapters: [],

		lastName: "",
		givenName: "",
		middleName: "",
		photo: "",

		streetAddress: "",
		apt: "",
		brgy: "",
		city: "",
		province: "",
		memberRegion: "",
		zipCode: "",

		email: "",
		birthdate: "",
		currentSchool: "",
		facebook: "",
		birthplace: "",
		course: "",
		mobile: "",
		religion: "",
		phone: "",

		schoolAddress: "",
		hobbies: "",
		interests: "",
		clubs: "",

		appliedInAnotherChapter: false,
		chapterApplied: "",
		yearApplied: "",
		status: "",

		relativeName: "",
		relationship: "",
		lodge: "",

		reference1Name: "",
		reference1Age: 0,
		reference1Email: "",
		reference1Mobile: "",

		reference2Name: "",
		reference2Age: 0,
		reference2Email: "",
		reference2Mobile: "",

		parentName: "",
		parentRelationship: "",
		parentEmail: "",
		parentMobile: "",

		
	});

	useEffect(() => {
		axios.get(`http://localhost:5000/applications/${applicationId}`).then(async (response) => {
			const regionsResponse = await axios.get(API_REGION);
			const provincesResponse = await axios.get(API_PROVINCE);
			const citiesResponse = await axios.get(API_CITY);

			setFormData({
				...FormData,
				chapters: response.data[2].map((res) => {
					return {
						key: res.name,
						value: res.chapterID,
					};
				}),

				regions: regionsResponse.data,
				provinces: provincesResponse.data,
				cities: citiesResponse.data,

				religions: ["Christian", "Roman Catholic", "Islam", "Iglesia Ni Cristo", "Others"],

				lastName: response.data[0].lastName,
				givenName: response.data[0].givenName,
				middleName: response.data[0].middleName,

				streetAddress: response.data[0].streetAddress,
				apt: response.data[0].apt,
				brgy: response.data[0].brgy,
				city: response.data[0].city ? response.data[0].city : " ",
				province: response.data[0].province ? response.data[0].province : " ",
				memberRegion: response.data[0].memberRegion,
				zipCode: response.data[0].zipCode,

				email: response.data[0].email,
				birthdate: response.data[0].birthdate ? response.data[0].birthdate : "2000-01-01",
				currentSchool: response.data[0].currentSchool,
				facebook: response.data[0].facebook,
				birthplace: response.data[0].birthplace,
				course: response.data[0].course,
				mobile: response.data[0].mobile,
				religion: response.data[0].religion,
				phone: response.data[0].phone,

				photo: response.data[0].photo ? response.data[0].photo : null,

				schoolAddress: response.data[0].schoolAddress,
				hobbies: response.data[0].hobbies,
				interests: response.data[0].interests,
				clubs: response.data[0].clubs,

				appliedInAnotherChapter: response.data[0].appliedInAnotherChapter,
				chapterApplied: response.data[0].chapterApplied,
				yearApplied: response.data[0].yearApplied,
				status: response.data[0].status,

				relativeName: response.data[0].relativeName,
				relationship: response.data[0].relationship,
				lodge: response.data[0].lodge,

				reference1Name: response.data[0].reference1Name,
				reference1Age: response.data[0].reference1Age,
				reference1Email: response.data[0].reference1Email,
				reference1Mobile: response.data[0].reference1Mobile,

				reference2Name: response.data[0].reference2Name,
				reference2Age: response.data[0].reference2Age,
				reference2Email: response.data[0].reference2Email,
				reference2Mobile: response.data[0].reference2Mobile,

				parentName: response.data[0].parentName,
				parentRelationship: response.data[0].parentRelationship,
				parentEmail: response.data[0].parentEmail,
				parentMobile: response.data[0].parentMobile,
			});
		});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const onChange = (e) => {
		setFormData((prev) => {
			let helper = { ...prev };

			helper[`${e.target.id}`] = e.target.value;

			return helper;
		});

		console.log(formData);
	};

	const onTickApplied = (e) => {
		setFormData((prev) => ({
			...prev,
			appliedInAnotherChapter: e.target.checked,
		}));
	};

	const onSubmit = (e) => {
		e.preventDefault();
		//const applicationUpdate = {
		//	lastName: formData.lastName,
		//	givenName: formData.givenName,
		//	middleName: formData.middleName,

		//	streetAddress: formData.streetAddress,
		//	apt: formData.apt,
		//	brgy: formData.brgy,
		//	city: formData.city ? formData.city : 0,
		//	province: formData.province ? formData.province : 0,
		//	memberRegion: formData.memberRegion,
		//	zipCode: formData.zipCode,

		//	email: formData.email,
		//	birthdate: formData.birthdate,
		//	currentSchool: formData.currentSchool,
		//	facebook: formData.facebook,
		//	birthplace: formData.birthplace,
		//	course: formData.course,
		//	mobile: formData.mobile,
		//	religion: formData.religion,
		//	phone: formData.phone,

		//	schoolAddress: formData.schoolAddress,
		//	hobbies: formData.hobbies,
		//	interests: formData.interests,
		//	clubs: formData.clubs,

		//	appliedInAnotherChapter: formData.appliedInAnotherChapter,
		//	chapterApplied: formData.chapterApplied,
		//	yearApplied: formData.yearApplied,
		//	status: formData.status,

		//	relativeName: formData.relativeName,
		//	relationship: formData.relationship,
		//	lodge: formData.lodge,

		//	reference1Name: formData.reference1Name,
		//	reference1Age: formData.reference1Age,
		//	reference1Email: formData.reference1Email,
		//	reference1Mobile: formData.reference1Mobile,

		//	reference2Name: formData.reference2Name,
		//	reference2Age: formData.reference2Age,
		//	reference2Email: formData.reference2Email,
		//	reference2Mobile: formData.reference2Mobile,

		//	parentName: formData.parentName,
		//	parentRelationship: formData.parentRelationship,
		//	parentEmail: formData.parentEmail,
		//	parentMobile: formData.parentMobile,
		//};

		//console.log(applicationUpdate);
		//console.log(applicationId);
		//	axios.post(`http://localhost:5000/newApplication4/${applicationId}`, applicationUpdate).then((res) => {
		//		console.log(res.data);
		//		window.location.href = `/appform5/${applicationId}`;
		//	});

		window.location.href = `/appform5/${applicationId}`;
	};
	const styles = {
		width: "200px",
		height: "200px",
		objectFit: "cover",
	};
	return (
		<div className="container container-fluid ">
			<div className="row">
				<div className="col-md-6">
					<h1>Application</h1>
				</div>

				
			</div>
			<hr />

			<form className="g-2" id="application2" onSubmit={onSubmit}>
				<div className="row">
					<div className="col-md-6">
						<div className="row mb-3">
							<label for="lastName" className="col-md-4 col-form-label text-right">
								Last Name:
							</label>
							<input
								type="text"
								name="lastName"
								className="form-control"
								id="lastName"
								placeholder="Last Name"
								onChange={onChange}
								value={formData.lastName}
								disabled
							/>
						</div>
					</div>

					<div className="col-md-6">
						<div className="row mb-3">
							<label for="uploadID" className="col-md-4 col-form-label text-right">
								ID (2 x 2) Photo:
							</label>

							{formData.photo ? (
								<img
									src={formData.photo}
									alt=""
									style={styles}
								/> /* pwede gawing label toh para if clinick picture mag iinput @yana */
							) : (
								<input type="file" className="form-control" id="photo" accept=".jpeg, .png, .jpg" />
							)}
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-md-6">
						<div className="row mb-3">
							<label for="inputGiven" className="col-md-4 col-form-label text-right">
								Given Name:
							</label>
							<input
								type="text"
								className="form-control"
								id="givenName"
								placeholder="Given Name"
								onChange={onChange}
								value={formData.givenName}
								disabled
							/>
						</div>
					</div>
				</div>
				<div className="row mb-4">
					<div className="col-md-6">
						<div className="row mb-3">
							<label for="inputMiddle" className="col-md-4 col-form-label text-right">
								Middle Name:
							</label>
							<input
								type="text"
								className="form-control"
								id="middleName"
								placeholder="Middle Name"
								onChange={onChange}
								value={formData.middleName}
								disabled
							/>
						</div>
					</div>
				</div>
				<div className="row mb-2">
					<h4>Address Details</h4>
				</div>
				<div className="row">
					<div className="col-md-6">
						<div className="row mb-3">
							<label for="inputStreet" className="col-md-4 col-form-label text-right">
								Street Address
							</label>
							<input
								type="text"
								className="form-control"
								id="streetAddress"
								placeholder="1234 Main St"
								onChange={onChange}
								value={formData.streetAddress}
								disabled
							/>
						</div>
					</div>

					<div className="col-md-3">
						<div className="row mb-3">
							<label for="inputRegion" className="col-md-4 col-form-label text-right">
								Region{" "}
							</label>
							<select
								className="form-select form-control"
								id="memberRegion"
								onChange={onChange}
								value={formData.memberRegion}
								disabled
							>
								{formData.regions.map(function (region) {
									return (
										<option key={region.code} value={region.code}>
											{region.name}
										</option>
									);
								})}
							</select>
						</div>
					</div>

					<div className="col-md-3">
						<div className="row mb-3">
							<label for="inputCity" className="col-md-4 col-form-label text-right">
								Zip Code{" "}
							</label>

							<input
								type="text"
								className="form-control"
								id="zipCode"
								placeholder="1234"
								onChange={onChange}
								value={formData.zipCode}
								disabled
							/>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-md-6">
						<div className="row mb-3">
							<label for="inputApt" className="col-md-4 col-form-label text-right">
								Apt, suite, etc (optional)
							</label>
							<input
								type="text"
								className="form-control"
								id="apt"
								placeholder="Apartment, studio, or floor"
								onChange={onChange}
								value={formData.apt}
								disabled
							/>
						</div>
					</div>

					<div className="col-md-3">
						<div className="row mb-3">
							<label for="inputProvince" className="col-md-4 col-form-label text-right">
								Province
							</label>
							<select
								className="form-select form-control"
								id="province"
								onChange={onChange}
								value={formData.province}
								disabled
							>
								{formData.provinces.map(function (province) {
									return (
										<option key={province.code} value={province.code}>
											{province.name}
										</option>
									);
								})}
							</select>
						</div>
					</div>
				</div>
				<div className="row mb-in4">
					<div className="col-md-6">
						<div className="row mb-3">
							<label for="putBrgy" className="col-md-4 col-form-label text-right">
								Barangay/District
							</label>
							<input
								type="text"
								className="form-control"
								id="brgy"
								placeholder="Malate"
								onChange={onChange}
								value={formData.brgy}
								disabled
							/>
						</div>
					</div>

					<div className="col-md-3">
						<div className="row mb-3">
							<label for="inputCity" className="col-md-4 col-form-label text-right">
								City
							</label>
							<select
								className="form-select form-control"
								id="inputCity"
								placeholder="New York City"
								onChange={onChange}
								value={formData.city}
								disabled
							>
								{formData.cities.map(function (city) {
									return (
										<option key={city.code} value={city.code}>
											{city.name}
										</option>
									);
								})}
							</select>
						</div>
					</div>
				</div>
				<div className="row mb-2">
					<h4>Personal Details</h4>
				</div>
				<div className="row">
					<div className="col-md-4">
						<div className="row mb-3">
							<label for="inputEmail" className="col-md-4 col-form-label text-right">
								Email
							</label>
							<input
								type="email"
								className="form-control"
								id="email"
								placeholder="Email"
								onChange={onChange}
								value={formData.email}
								disabled
							/>
						</div>
					</div>

					<div className="col-md-5">
						<div className="row mb-3">
							<label for="inputFB" className="col-md-4 col-form-label text-right">
								Facebook Name
							</label>
							<input
								type="text"
								className="form-control"
								id="facebook"
								placeholder="Facebook"
								onChange={onChange}
								value={formData.facebook}
								disabled
							/>
						</div>
					</div>

					<div className="col-md-3">
						<div className="row mb-3">
							<label for="inputnum" className="col-md-4 col-form-label text-right">
								Mobile No.
							</label>
							<input
								type="text"
								className="form-control"
								id="mobile"
								placeholder="09178060641"
								onChange={onChange}
								value={formData.mobile}
								disabled
							/>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-md-4">
						<div className="row mb-3">
							<label for="inputBday" className="col-md-4 col-form-label text-right">
								Birthdate
							</label>
							<input
								type="date"
								className="form-control"
								id="birthdate"
								onChange={onChange}
								value={formData.birthdate ? formData.birthdate.substring(0, 10) : "1-1-2000"}
								disabled
							/>
						</div>
					</div>

					<div className="col-md-5">
						<div className="row mb-3">
							<label for="inputBirthplace" className="col-md-4 col-form-label text-right">
								Birthplace
							</label>
							<input
								type="text"
								className="form-control"
								id="birthplace"
								placeholder="Olongapo, Zambales"
								onChange={onChange}
								value={formData.birthplace}
								disabled
							/>
						</div>
					</div>

					<div className="col-md-3">
						<div className="row mb-3">
							<label for="inputReligion" className="col-md-4 col-form-label text-right">
								Religion
							</label>
							<select
								className="form-select form-control"
								id="religion"
								placeholder="Select"
								onChange={onChange}
								value={formData.religion}
								disabled
							>
								{formData.religions.map(function (religion) {
									return (
										<option key={religion} value={religion}>
											{religion}
										</option>
									);
								})}
							</select>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-md-4">
						<div className="row mb-3">
							<label for="inputSchool" className="col-md-4 col-form-label text-right">
								Current School
							</label>
							<input
								type="text"
								className="form-control"
								id="currentSchool"
								placeholder="De La Salle University"
								onChange={onChange}
								value={formData.currentSchool}
								disabled
							/>
						</div>
					</div>

					<div className="col-md-5">
						<div className="row mb-3">
							<label for="inputCourse" className="col-md-4 col-form-label text-right">
								Level/Course
							</label>
							<input
								type="text"
								className="form-control"
								id="course"
								placeholder="BS Information Systems"
								onChange={onChange}
								value={formData.course}
								disabled
							/>
						</div>
					</div>

					<div className="col-md-3">
						<div className="row mb-3">
							<label for="inputCont" className="col-sm-4 col-form-label text-right">
								Contact No.
							</label>
							<input
								type="text"
								className="form-control"
								id="phone"
								placeholder="8954061"
								onChange={onChange}
								value={formData.phone}
								disabled
							/>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="row mb-3">
						<label for="schoolAdd" className="col-md-2 col-form-label text-right">
							School Address
						</label>
						<input
							type="text"
							className="form-control"
							id="schoolAddress"
							placeholder="1004 Malate Manila"
							onChange={onChange}
							value={formData.schoolAddress}
							disabled
						/>
					</div>
				</div>
				<div className="row">
					<div className="col-md-6">
						<div className="row mb-3">
							<label for="inputHobbies" className="col-md-4 col-form-label text-right">
								Hobbies
							</label>
							<input
								type="text"
								className="form-control"
								id="hobbies"
								onChange={onChange}
								value={formData.hobbies}
								disabled
							/>
						</div>
					</div>

					<div className="col-md-6">
						<div className="row mb-3">
							<label for="inputInterests" className="col-md-4 col-form-label text-right">
								Interests{" "}
							</label>
							<input
								type="text"
								className="form-control"
								id="interests"
								onChange={onChange}
								value={formData.interests}
								disabled
							/>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="row mb-3">
						<label for="list" className="col-md-2 col-form-label text-right">
							List your Clubs/Organizations/Groups
						</label>
						<input
							type="text"
							className="form-control"
							id="clubs"
							onChange={onChange}
							value={formData.clubs}
							disabled
						/>
					</div>
				</div>

				<div className="row m-2">
					<div class="form-check form-check-inline reg-checkbox">
						<input
							className="form-check-input"
							type="checkbox"
							id="appliedInAnotherChapter"
							onChange={onTickApplied}
							checked={formData.appliedInAnotherChapter}
							disabled
						/>
						<label className="form-check-label" for="gridCheck">
							Applied in any other DeMolay Chapter
						</label>
					</div>
				</div>

				<div className="row m-2">
					<p>Indicate the year, Chapter, and status.</p>
				</div>

				<div className="row m-2">
					<div className="col-md-3">
						<div className="row mb-3">
							<label for="inputChapter" className="col-md-4 col-form-label text-right">
								Chapter
							</label>
							<select
								className="form-select form-control"
								id="chapterApplied"
								onChange={onChange}
								value={formData.chapterApplied}
								disabled
							>
								{formData.chapters.map(function (chapter) {
									return (
										<option key={chapter.key} value={chapter.value}>
											{chapter.key}
										</option>
									);
								})}
							</select>
						</div>
					</div>

					<div className="col-md-3">
						<div className="row mb-3">
							<label for="chapYear" className="col-md-4 col-form-label text-right">
								Year
							</label>
							<input
								type="text"
								className="form-control"
								id="yearApplied"
								placeholder="Year Applied"
								onChange={onChange}
								value={formData.yearApplied}
							/>
						</div>
					</div>

					<div className="col-md-1">
						<div className="row mb-3">
							<label for="checkbox" className="col-md-4 col-form-label text-right">
								Status:
							</label>
							<input
								type="text"
								id="status"
								placeholder="Status"
								onChange={onChange}
								value={formData.status}
								disabled
							/>
						</div>
					</div>
				</div>

				<hr />
				<div className="row m-2">
					<p>List your relatives who may be a Freemason, DeMolay, or member of any Masonic appendant organization.</p>
				</div>

				<div className="row">
					<div className="col-md-4">
						<div className="row mb-3">
							<label for="inputEmail" className="col-md-4 col-form-label text-right">
								Name
							</label>
							<input
								type="text"
								className="form-control"
								id="relativeName"
								placeholder="Full Name"
								onChange={onChange}
								value={formData.relativeName}
								disabled
							/>
						</div>
					</div>

					<div className="col-md-4">
						<div className="row mb-3">
							<label for="inputFB" className="col-md-4 col-form-label text-right">
								Relationship
							</label>
							<input
								type="text"
								className="form-control"
								id="relationship"
								placeholder="i.e. Father"
								onChange={onChange}
								value={formData.relationship}
								disabled
							/>
						</div>
					</div>

					<div className="col-md-4">
						<div className="row mb-3">
							<label for="inputnum" className="col-md-4 col-form-label text-right">
								Lodge/Chapter
							</label>
							<input
								type="text"
								className="form-control"
								id="lodge"
								placeholder="Lodge Name"
								onChange={onChange}
								value={formData.lodge}
								disabled
							/>
						</div>
					</div>
				</div>

				<hr />
				<div className="row m-2">
					<p>References: List at least 2 friends whom you have known for at least a year.</p>
				</div>

				<div className="row">
					<div className="col-md-4">
						<div className="row mb-3">
							<label for="reference1Name" className="col-md-4 col-form-label text-right">
								Name
							</label>
							<input
								type="text"
								className="form-control"
								id="reference1Name"
								placeholder="Full Name"
								onChange={onChange}
								value={formData.reference1Name}
								disabled
							/>
						</div>
					</div>

					<div className="col-md-2">
						<div className="row mb-3">
							<label for="reference1Age" className="col-md-4 col-form-label text-right">
								Age
							</label>
							<input
								type="text"
								className="form-control"
								id="reference1Age"
								placeholder="23"
								onChange={onChange}
								value={formData.reference1Age}
								disabled
							/>
						</div>
					</div>

					<div className="col-md-3">
						<div className="row mb-3">
							<label for="reference1Email" className="col-md-4 col-form-label text-right">
								Email
							</label>
							<input
								type="text"
								className="form-control"
								id="reference1Email"
								placeholder="Email"
								onChange={onChange}
								value={formData.reference1Email}
								disabled
							/>
						</div>
					</div>

					<div className="col-md-3">
						<div className="row mb-3">
							<label for="reference1Mobile" className="col-md-4 col-form-label text-right">
								Mobile No.
							</label>
							<input
								type="text"
								className="form-control"
								id="reference1Mobile"
								placeholder="09178060641"
								onChange={onChange}
								value={formData.reference1Mobile}
								disabled
							/>
						</div>
					</div>
				</div>

				<div className="row">
					<div className="col-md-4">
						<div className="row mb-3">
							<label for="reference2Name" className="col-md-4 col-form-label text-right">
								Name
							</label>
							<input
								type="text"
								className="form-control"
								id="reference2Name"
								placeholder="Full Name"
								onChange={onChange}
								value={formData.reference2Name}
								disabled
							/>
						</div>
					</div>

					<div className="col-md-2">
						<div className="row mb-3">
							<label for="referece2Age" className="col-md-4 col-form-label text-right">
								Age
							</label>
							<input
								type="text"
								className="form-control"
								id="reference2Age"
								placeholder="23"
								onChange={onChange}
								value={formData.reference2Age}
								disabled
							/>
						</div>
					</div>

					<div className="col-md-3">
						<div className="row mb-3">
							<label for="reference2Email" className="col-md-4 col-form-label text-right">
								Email
							</label>
							<input
								type="text"
								className="form-control"
								id="reference2Email"
								placeholder="Email"
								onChange={onChange}
								value={formData.reference2Email}
								disabled
							/>
						</div>
					</div>

					<div className="col-md-3">
						<div className="row mb-3">
							<label for="reference2Mobile" className="col-md-4 col-form-label text-right">
								Mobile No.
							</label>
							<input
								type="text"
								className="form-control"
								id="reference2Mobile"
								placeholder="09178060641"
								onChange={onChange}
								value={formData.reference2Mobile}
								disabled
							/>
						</div>
					</div>
				</div>
				<hr />

				<div className="row m-2">
					<p>Parent or Guardian</p>
				</div>

				<div className="row">
					<div className="col-md-3">
						<div className="row mb-3">
							<label for="parentName" className="col-md-4 col-form-label text-right">
								Name
							</label>
							<input
								type="text"
								className="form-control"
								id="parentName"
								placeholder="Full Name"
								onChange={onChange}
								value={formData.parentName}
								disabled
							/>
						</div>
					</div>

					<div className="col-md-3">
						<div className="row mb-3">
							<label for="parentRelationship" className="col-md-4 col-form-label text-right">
								Relationship
							</label>
							<input
								type="text"
								className="form-control"
								id="parentRelationship"
								placeholder="i.e. Father"
								onChange={onChange}
								value={formData.parentRelationship}
								disabled
							/>
						</div>
					</div>

					<div className="col-md-3">
						<div className="row mb-3">
							<label for="parentEmail" className="col-md-4 col-form-label text-right">
								Email
							</label>
							<input
								type="text"
								className="form-control"
								id="parentEmail"
								placeholder="Email"
								onChange={onChange}
								value={formData.parentEmail}
								disabled
							/>
						</div>
					</div>

					<div className="col-md-3">
						<div className="row mb-3">
							<label for="parentMobile" className="col-md-4 col-form-label text-right">
								Mobile No.
							</label>
							<input
								type="text"
								className="form-control"
								id="parentMobile"
								placeholder="09178060641"
								onChange={onChange}
								value={formData.parentMobile}
								disabled
							/>
						</div>
					</div>
				</div>

				

				{eoId ? (
					""
				) : (
					<>
					<div className="row">
					<p className="warning-msg">
						Please ENSURE that all details for submission are ACCURATE. You will no longer be able to modify the details
						once submitted.
					</p>
					<p className="warning-msg">If you wish to edit your application, kindly go back to the previous pages</p>
					<p className="warning-msg">
						To access your application form in another session, you may do so using your unique application ID:{" "}
						{applicationId}
					</p>
				</div>
					<div className="col-12 text-center">
						<input type="submit" value="Submit" className="btn btn-primary" />
					</div>
					</>
				)}
			</form>
		</div>
	);
}

export default Appform4;
