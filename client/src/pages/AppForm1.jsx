import "../styles/base.css";
import "../styles/appform1.css";
import axios from "axios";
import { Component } from "react";

export default class Appform1 extends Component {
	constructor(props) {
		super(props);

		this.onChangeChapter = this.onChangeChapter.bind(this);
		this.onChangeRegion = this.onChangeRegion.bind(this);
		this.onSubmit = this.onSubmit.bind(this);

		this.state = {
			regionId: "",
			chapterId: "",
			regions: [],
			chapters: [],
		};
	}

	componentDidMount() {
		axios
			.get("http://localhost:5000/getRegions")
			.then((res1) => {
				this.setState({
					regions: res1.data.map((res) => {
						return {
							name: res.regionName,
							id: res.regionID,
						};
					}),

					regionId: res1.data[0].regionID,
				});

				console.log(`Current RegID: ${this.state.regionId}`);
				return axios.get(`http://localhost:5000/getChapters/${this.state.regionId}`);
			})
			.then((res2) => {
				this.setState({
					chapters: res2.data.map((res) => {
						return {
							name: res.name,
							id: res.chapterId,
						};
					}),

					chapterId: res2.data[0].chapterID,
				});
			})
			.catch((err) => console.log(err));
	}

	onChangeRegion(e) {
		this.setState({
			regionId: e.target.value,
		});
		axios.get(`http://localhost:5000/getChapters/${e.target.value}`).then((result) => {
			this.setState({
				chapters: result.data.map((res) => {
					return {
						name: res.name,
						id: res.chapterID,
					};
				}),
				chapterId: result.data[0].chapterID,
			});

			console.log(this.state.chapters);
		});
	}

	onChangeChapter(e) {
		this.setState({
			chapterId: e.target.value,
		});

		console.log(e.target.value);
	}

	onSubmit(e) {
		e.preventDefault();

		const application = {
			regionId: this.state.regionId,
			chapterId: this.state.chapterId,
		};
		console.log(application);

		axios.post("http://localhost:5000/newApplication", application).then((res) => {
			console.log("data: " + res.data);
			window.location.href = `/appform2/${res.data}`;
		});
	}

	render() {
		return (
			<div className="container">
				<h1>Application</h1>
				<hr />

				<div id="child">
					<form onSubmit={this.onSubmit} id="application1">
						<label for="region">Region</label>

						<select
							name="region"
							id="region"
							className="dropdown"
							onChange={this.onChangeRegion}
							value={this.state.regionId}
						>
							{this.state.regions.map(function (region) {
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
							id="chapter"
							className="dropdown"
							onChange={this.onChangeChapter}
							value={this.state.chapterId}
						>
							{this.state.chapters.map(function (chapter) {
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
}
