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
		this.setState({
			regions: [
				{ name: "NCR", id: 1 },
				{ name: "MIMAROPA", id: 2 },
				{ name: "CALABARZON", id: 3 },
			],
			chapters: [
				{ name: "Chapter One", id: 1 },
				{ name: "Chapter Two", id: 2 },
				{ name: "Chapter Three", id: 3 },
			],
			regionId: "1",
			chapterId: "1",
		});
	}

	onChangeRegion(e) {
		this.setState({
			regionId: e.target.value,
		});
		console.log(e.target.value);
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
			window.location.href = `/appform2/${res.data}`
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
