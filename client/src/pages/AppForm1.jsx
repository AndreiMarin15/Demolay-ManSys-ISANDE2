import "../styles/base.css";
import "../styles/appform1.css";
import axios from "axios";

import { useEffect, useState, useRef } from "react";

function Appform1() {
	const API_REGION = "https://psgc.gitlab.io/api/regions/";
	const [formData, setFormData] = useState({
		regionId: "",
		chapterId: "",
		regions: [],
		chapters: [],
	});

	let triggers = useRef(0);
	useEffect(() => {
		async function fetchData() {
			axios.get(API_REGION).then(async (res1) => {
				console.log(res1);
				const res2 = await axios.get(`http://localhost:5000/getChapters/${res1.data[0].code}`);
				console.log(res2.data[0].chapterID);
				setFormData({
					...formData,
					regions: res1.data.map((res) => {
						return {
							name: res.name,
							id: res.code,
						};
					}),
					chapters: res2.data.map((res) => {
						return {
							name: res.name,
							id: res.chapterID,
						};
					}),

					regionId: res1.data[0].code,
					chapterId: res2.data[0].chapterID,
				});
			});
		}
		if (triggers.current === 0) {
			fetchData();
			console.log(formData);
			triggers.current += 1;
		}
	}, [formData]);

	const onChangeRegion = async (e) => {
		axios.get(`http://localhost:5000/getChapters/${e.target.value}`).then((result) => {
			console.log(e.target.value);
			console.log(result);
			console.log(result.data[0].chapterID)
			setFormData({
				...formData,
				chapters: result.data.map((res) => {
					return {
						name: res.name,
						id: res.chapterID,
					};
				}),
				chapterId: result.data[0].chapterID,
				regionId: result.data[0].phRegion,
			});
		});
	};

	const onChangeChapter = (e) => {
		console.log(e.target.value)
		setFormData({
			...formData,
			chapterId: e.target.value,
		});
	};

	const onSubmit = (e) => {
		e.preventDefault();

		const application = {
			regionId: formData.regionId,
			chapterId: formData.chapterId,
		};
		console.log(application);

		console.log(application);

		axios.post("http://localhost:5000/newApplication", application).then((res) => {
			console.log("data: " + res.data);
			window.location.href = `/appform2/${res.data}/${formData.chapterId}`;
		});
	};

	return (
		<div className="container">
			<h1>Application</h1>
			<hr />

			<div id="child">
				<form onSubmit={onSubmit} id="application1">
					<label for="region">Region</label>

					<select name="region" id="regionId" className="dropdown" onChange={onChangeRegion} value={formData.regionId}>
						{formData.regions.map(function (region) {
							return (
								<option key={region.name} value={region.id}>
									{region.name}
								</option>
							);
						})}
					</select>

					<label for="chapter" className="labels">
						Chapter
					</label>

					<select
						name="chapter"
						id="chapterId"
						className="dropdown"
						onChange={onChangeChapter}
						value={formData.chapterId}
					>
						{formData.chapters.map(function (chapter) {
							return (
								<option key={chapter.name} value={chapter.id}>
									{chapter.name}
								</option>
							);
						})}
					</select>

					<input type="submit" value="Next" className="primary-btn" id="next-btn1" />
				</form>
			</div>
		</div>
	);
}

export default Appform1;
