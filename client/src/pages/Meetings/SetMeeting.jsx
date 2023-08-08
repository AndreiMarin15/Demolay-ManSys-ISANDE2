import { Link } from "react-router-dom";
import "../../styles/base.css";
/* import "../styles/caform10approve.css"; */
import "../../styles/setmeeting.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { Component } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const edit = <FontAwesomeIcon icon={faPen} />;

function SetMeeting() {
	const { userId } = useParams();
	const [meetingList, setList] = useState({
		meetingList: [],
		refresh: 0,
	});

	const [formData, setFormData] = useState({
		meetingTitle: "",
		meetingDate: "",
		meetingTime: "",
		meetingVenue: "",
	});

	const [senderDetails, setSender] = useState({
		senderName: "",
		senderId: "",
	});

	useEffect(() => {
		const fetchData = async () => {
			const user = await axios.get("http://localhost:5000/getCurrentUser");
			const meetings = await axios.get("http://localhost:5000/getMeetings");
			setSender({
				senderName: user.data.givenName ? `${user.data.givenName} ${user.data.lastName}` : " ",
				senderId: user.data._id,
			});
			setList({
				meetingList: meetings.data,
			});
		};
		fetchData();
	}, []);

	useEffect(() => {
		const fetchData = async () => {
			const meetings = await axios.get("http://localhost:5000/getMeetings");

			setList({
				meetingList: meetings.data,
			});
		};

		fetchData();
	}, [meetingList.refresh]);

	const onChange = (e) => {
		setFormData((prev) => {
			let helper = { ...prev };

			helper[`${e.target.id}`] = e.target.value;

			return helper;
		});
		console.log(formData);
	};

	function getCurrentDate() {
		let today = new Date();
		let year = today.getFullYear();
		let month = today.getMonth() + 1;
		let day = today.getDate();

		if (month < 10) {
			month = "0" + month;
		}
		if (day < 10) {
			day = "0" + day;
		}

		let formattedDate = year + "-" + month + "-" + day;
		return formattedDate;
	}

	const onSubmit = () => {
		const meeting = {
			title: formData.meetingTitle,
			date: formData.meetingDate,
			time: formData.meetingTime,
			dateSet: getCurrentDate(),
			meetingVenue: formData.meetingVenue,
			senderName: senderDetails.senderName,
			senderId: senderDetails.senderId,
		};

		axios.post("http://localhost:5000/newMeeting", meeting).then((result) => {
			alert("Meeting Created");
			setList({
				...meetingList,
				refresh: meetingList.refresh + 1,
			});

			setFormData({
        ...formData,
				meetingTitle: "",
				meetingDate: "",
				meetingTime: "",
				meetingVenue: "",
			});
		});
	};

	function isLink(str) {
		const regex = /^(https?:\/\/|www\.)([^\s.]+\.?)+(com|net|us|[^\s.]+)$/;
		return regex.test(str);
	}

	// true

	return (
		<div className="container container-fluid ">
			<div className="row">
				<div className="col-md-12">
					<h1 style={{ marginLeft: "70px" }}>Set Meeting</h1>
				</div>
			</div>

			<hr />

			<div className="row" style={{ marginLeft: "35px" }}>
				<div className="col-md-6">
					{/* Content for the left column */}
					<h2>List of Meetings</h2>
					<br></br>
					<div className="table-responsive">
						<table className="table meeting-table">
							<thead className="thead-custom">
								<tr>
									<th>Meeting Title</th>
									<th>Date</th>
									<th>Time</th>
									<th>Set By</th>
									<th>Meeting Venue</th>
								</tr>
							</thead>
							<tbody>
								{meetingList.meetingList.map(function (meeting) {
									return (
										<tr key={meeting._id}>
											<td>{meeting.title}</td>
											<td>{meeting.date}</td>
											<td>{meeting.time}</td>
											<td>{meeting.senderName ? meeting.senderName : " "}</td>
											<td>
												{isLink(meeting.meetingVenue) ? <a href={meeting.meetingVenue}>Link</a> : meeting.meetingVenue}{" "}
											</td>
										</tr>
									);
								})}
							</tbody>
						</table>
					</div>
				</div>
				<div className="col-md-1">
					{/* Vertical line or divider */}
					<div className="vertical-line"></div>
				</div>
				<div className="col-md-5 justify-content-center">
					<h3 style={{ marginLeft: "120px" }}>Set New Meeting</h3>
					<br />
					<div className="row">
						<label for="lastName" className="col-md-4 col-form-label text-right">
							Meeting Title:
						</label>
						<input
							type="text"
							name="meetTitle"
							className="form-control"
							id="meetingTitle"
							placeholder="Meeting Title"
							onChange={onChange}
              value={formData.meetingTitle}
						/>
					</div>

					<div className="row">
						<label for="lastName" className="col-md-4 col-form-label text-right">
							Meeting Date:
						</label>
						<input type="date" name="meetDate" className="form-control" id="meetingDate" onChange={onChange} value={formData.meetingDate} />
					</div>

					<div className="row">
						<label for="lastName" className="col-md-4 col-form-label text-right">
							Meeting Time:
						</label>
						<input
							type="text"
							name="meetTime"
							className="form-control"
							id="meetingTime"
							placeholder="00:00 AM/PM"
							onChange={onChange}
              value={formData.meetingTime}
						/>
					</div>

					<div className="row">
						<label for="lastName" className="col-md-4 col-form-label text-right">
							Meeting Venue:
						</label>
						<input
							type="text"
							name="meetVenue"
							className="form-control"
							id="meetingVenue"
							placeholder="Meeting Venue"
							onChange={onChange}
              value={formData.meetingVenue}
						/>
					</div>
					<br />
					<br />

					<div className="row" style={{ marginLeft: "50px" }}>
						<button
							className="btn set-meeting"
							type="button"
							onClick={() => {
								onSubmit();
							}}
						>
							<b>Submit</b>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default SetMeeting;
