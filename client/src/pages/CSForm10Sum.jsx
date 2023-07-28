import { Link } from "react-router-dom";
import "../styles/base.css";
import "../styles/csform10.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Component } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const right = <FontAwesomeIcon icon={faArrowRight} />;
const left = <FontAwesomeIcon icon={faArrowLeft} />;

function CSForm10Sum() {
	return (
		<div className="container container-fluid ">
			<div className="row">
				<div className="col-md-12">
					<h1>Form 10</h1>
				</div>
			</div>

			<hr />

			<div className="row" style={{ marginLeft: "35px" }}>
				<div className="row text-center" style={{ marginLeft: "-35px" }}>
					<h2>SUMMARY LIST</h2>
				</div>
				<div className="col-md-5">
					{/* Content for the left column */}
					<br />
					<div className="table-responsive">
						<table className="table table-bordered-custom approved">
							<thead className="thead-custom">
								<tr>
									<th>#</th>
									<th>Applicant Name</th>
									<th>View</th>
									<th>Return</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>1</td>
									<td>John Doe</td>
									<td>
										<a href="facebook.com">View Details</a>
									</td>
									<td>
										<button type="submit" className="btn custom-add">
											<FontAwesomeIcon icon={faArrowLeft} style={{ color: "#ffffff", marginRight: "8px" }} />
											Return
										</button>
									</td>
								</tr>

								<tr>
									<td>2</td>
									<td>Joe Alwyn</td>

									<td>
										<a href="facebook.com">View Details</a>
									</td>
									<td>
										<button type="submit" className="btn custom-add">
											<FontAwesomeIcon icon={faArrowLeft} style={{ color: "#ffffff", marginRight: "8px" }} />
											Return
										</button>
									</td>
								</tr>

								<tr>
									<td>3</td>
									<td></td>

									<td></td>
									<td></td>
								</tr>

								<tr>
									<td>4</td>
									<td></td>

									<td></td>
									<td></td>
								</tr>

								<tr>
									<td>5</td>
									<td></td>

									<td></td>
									<td></td>
								</tr>
								<tr>
									<td>6</td>
									<td></td>

									<td></td>
									<td></td>
								</tr>
								<tr>
									<td>7</td>
									<td></td>

									<td></td>
									<td></td>
								</tr>
								<tr>
									<td>8</td>
									<td></td>

									<td></td>
									<td></td>
								</tr>
								<tr>
									<td>9</td>
									<td></td>

									<td></td>
									<td></td>
								</tr>
								<tr>
									<td>10</td>
									<td></td>

									<td></td>
									<td></td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div className="col-md-1">
					{/* Vertical line or divider */}
					<div className="vertical-line"></div>
				</div>
				<div className="col-md-6 justify-content-center">
					<br />
					<div className="table-responsive">
						<table className="info-table" style={{ marginLeft: "130px" }}>
							<tr>
								<td>ID Number:</td>
								<td>2092034911</td>
							</tr>

							<tr>
								<td>Last Name:</td>
								<td>Doe</td>
							</tr>

							<tr>
								<td>Given Name:</td>
								<td>John</td>
							</tr>

							<tr>
								<td>Middle Name:</td>
								<td>Almacen</td>
							</tr>

							<tr>
								<td>Email:</td>
								<td>johndoe@gmail.com</td>
							</tr>

							<tr>
								<td>First-line Signer:</td>
								<td>Juan Dela Cruz</td>
							</tr>

							<tr>
								<td>Other Details:</td>
								<td>Notes</td>
							</tr>
						</table>
					</div>

					<br />
					<br />
					<div className="table-responsive">
						<table className="small-table" style={{ marginLeft: "130px" }}>
							<tbody>
								<tr>
									<td>ID Picture:</td>
									<td>
										<a href="http://facebook.com">Doe-Picture.png</a>
									</td>
								</tr>
								<tr>
									<td>Proof of Payment:</td>
									<td>
										<a href="http://facebook.com">Doe-Payment.png</a>
									</td>
								</tr>
								<tr>
									<td>Admin Status:</td>
									<td>
										<span className="green-circle"></span>
										Paid
									</td>
								</tr>
							</tbody>
						</table>
					</div>
					<div className="col-12 text-center" style={{ marginLeft: "-30px", marginTop: "20px" }}>
						<Link to="/appform4">
							<button type="submit" className="btn custom">
								SUBMIT
							</button>
						</Link>
					</div>
					<br />
					<br />
				</div>
			</div>
		</div>
	);
}

export default CSForm10Sum;
