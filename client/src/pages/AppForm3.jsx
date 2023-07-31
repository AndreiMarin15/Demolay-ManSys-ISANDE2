import { Link } from "react-router-dom";
import "../styles/base.css";
import "../styles/appform3.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

function Appform3() {
	const [formData, setFormData] = useState({
		chapters: [],

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
		parentApproved: false,
	});

	let { applicationId } = useParams();

	useEffect(() => {
		axios.get("http://localhost:5000/getAllChapters").then((res1) => {
			setFormData({
				...FormData,
				chapters: res1.data.map((res) => {
					return {
						key: res.name,
						value: res.chapterID,
					};
				}),
				//
				chapterApplied: res1.data[0].name,

				yearApplied: null,

				appliedInAnotherChapter: false,
				parentApproved: false,
			});
		});
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

	const onTickParent = (e) => {
		setFormData((prev) => ({
			...prev,
			parentApproved: e.target.checked,
		}));
	};

	const onSubmit = (e) => {
		e.preventDefault();

		const applicationUpdate = {
			appliedInAnotherChapter: formData.appliedInAnotherChapter,
			chapterApplied: formData.chapterApplied,
			yearApplied: formData.yearApplied,
			status: formData.status,

			relativeName: formData.relativeName,
			relationship: formData.relationship,
			lodge: formData.lodge,

			reference1Name: formData.reference1Name,
			reference1Age: formData.reference1Age,
			reference1Email: formData.reference1Email,
			reference1Mobile: formData.reference1Mobile,

			reference2Name: formData.reference2Name,
			reference2Age: formData.reference2Age,
			reference2Email: formData.reference2Email,
			reference2Mobile: formData.reference2Mobile,

			parentName: formData.parentName,
			parentRelationship: formData.parentRelationship,
			parentEmail: formData.parentEmail,
			parentMobile: formData.parentMobile,
			parentApproved: formData.parentApproved,
		};

		console.log(applicationUpdate);
		console.log(applicationId);

		axios.post(`http://localhost:5000/newApplication3/${applicationId}`, applicationUpdate).then((res) => {
			console.log(res.data);
			window.location.href = `/appform4/${applicationId}`;
		});
	};

	return (
		<div className="container container-fluid ">
			<div className="row">
				<div className="col-md-6">
					<h1>Application</h1>
				</div>

				<div className="col-md-6">
					<h1 className="position-absolute end-0"> [Chapter] </h1>
				</div>
			</div>
			<hr />

			<form className="g-2" id="application2" onSubmit={onSubmit}>
				<div className="row m-2">
					<div class="form-check form-check-inline reg-checkbox">
						<input
							className="form-check-input"
							type="checkbox"
							id="appliedInAnotherChapter"
							onChange={onTickApplied}
							checked={formData.appliedInAnotherChapter}
						/>
						<label className="form-check-label" for="gridCheck">
							Applied in any other DeMolay Chapter
						</label>
					</div>
				</div>

				<div className="row m-2">
					<p>Indicate the year, Chapter, and status.</p>
				</div>

				<form className="g-2">
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
								<label for="checkbox" className="col-md-1 col-form-label text-right">
									Status:
								</label>
								<input
									type="text"
									className="form-control"
									id="status"
									placeholder="Status"
									onChange={onChange}
									value={formData.status}
								/>
							</div>
						</div>
					</div>
				</form>

				<hr />
				<div className="row m-2">
					<p>List your relatives who may be a Freemason, DeMolay, or member of any Masonic appendant organization.</p>
				</div>

				<form className="g-2">
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
								/>
							</div>
						</div>
					</div>
				</form>
				<hr />
				<div className="row m-2">
					<p>References: List at least 2 friends whom you have known for at least a year.</p>
				</div>

				<form className="g-2">
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
								/>
							</div>
						</div>
					</div>
					<hr />
				</form>

				<div className="row m-2">
					<p>Parent or Guardian</p>
				</div>

				<form className="g-2">
					<div className="row">
						<div className="col-md-3">
							<div className="row mb-3">
								<label for="parentName" className="col-md-4 col-form-label text-right">
									Name
								</label>
								<input
									type="email"
									className="form-control"
									id="parentName"
									placeholder="Full Name"
									onChange={onChange}
									value={formData.parentName}
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
								/>
							</div>
						</div>
					</div>

					<div className="row position-relative">
						<div className="col-auto m-2">
							<div className="form-check form-check-inline">
								<input
									className="form-check-input"
									type="checkbox"
									id="gridCheck"
									onChange={onTickParent}
									checked={formData.parentApproved}
								/>
								<label className="form-check-label" for="gridCheck">
									We, the parent/guardian hereby grant our CONSENT and APPROVE our son/ward in joining DeMolay.
								</label>
							</div>
						</div>
					</div>
				</form>

				<div className="row">
					<div className="col-md-6">
						<Link to="/appform2">
							<button type="submit" className="btn btn-primary float-start">
								Back
							</button>
						</Link>
					</div>

					<div className="col-md-4"/>

					<div className="col-md-2 float-end">
						<input type="submit" value="Next" className="btn btn-primary justify-content-end" />
					</div>
				</div>
			</form>
		</div>
	);
}

export default Appform3;
