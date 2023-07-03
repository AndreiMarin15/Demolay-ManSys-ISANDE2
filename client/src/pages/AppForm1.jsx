import { Link } from "react-router-dom";
import "../styles/base.css";
import "../styles/appform1.css";
import { Component } from "react";

export default class Appform1 extends Component {
	render() {
		return (
			<div className="container">
				<h1>Application</h1>
				<hr />

				<div id="child">
					<form id="application1">
						<label for="region">Region</label>

						<select name="region" id="region" className="dropdown">
							<option>NCR</option>
							<option>CALABARZON</option>
							<option>MIMAROPA</option>
						</select>

						<label for="chapter" className="labels">
							Chapter
						</label>

						<select name="chapter" id="chapter" className="dropdown">
							<option>Chapter One</option>
							<option>Chapter Two</option>
							<option>Chapter Three</option>
						</select>

						<Link to="/appform2">
							<button type="button" form="next" className="primary-btn" id="next-btn1" value="Next">
								Next
							</button>
						</Link>
					</form>
				</div>
			</div>
		);
	}
}
