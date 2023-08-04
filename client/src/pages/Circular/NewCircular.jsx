import { Link } from "react-router-dom";
import "../../styles/messagepopup.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBullhorn } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

import ConfirmMessage from "./ConfirmMessage.jsx"; // Import the new popup component
import axios from "axios";

const NewCircular = ({ showPopup, releasedBy, onClosePopup }) => {
	const [circularDetails, setDetails] = useState({
		subject: "",
		content: "",
		senderName: "",
		senderId: "",
		dateSent: "",
		timeSent: "",
	});

	const getCurrentDate = () => {
		var today = new Date();
		var dd = String(today.getDate()).padStart(2, "0");
		var mm = String(today.getMonth() + 1).padStart(2, "0");
		var yyyy = today.getFullYear();

		today = yyyy + "-" + mm + "-" + dd;
		return today;
	};

	const getCurrentTime = () => {
		var today = new Date();
		var options = { timeZone: "Asia/Manila", hour: "numeric", minute: "numeric", hour12: true };
		var time = today.toLocaleString("en-US", options);
		return time;
	};

	const onChangeSubject = (e) => {
		setDetails({
			...circularDetails,
			subject: e.target.value,
		});
	};
	const onChangeContent = (e) => {
		setDetails({
			...circularDetails,
			content: e.target.value,
		});
	};

	const onSubmit = () => {
		const toSubmit = {
			circular: {
				subject: circularDetails?.subject || "",
				circularText: circularDetails?.content || "",
				dateReleased: getCurrentDate(),
				timeReleased: getCurrentTime(),
				releasedBy: `${releasedBy.givenName} ${releasedBy.lastName}`,
				releasedById: `${releasedBy._id}`,
			},
		};

		axios.post("http://localhost:5000/newCircular", toSubmit).then(onClosePopup);
	};

	if (!showPopup) {
		return null;
	}

	return (
		<div>
			<div className="message-popup-overlay" onClick={onClosePopup} />
			<div className="message-popup">
				<div className="message-popup-close" onClick={onClosePopup}>
					&times;
				</div>
				<div className="message-popup-header">
					<div className="message-popup-header-blue">
						<div className="message-popup-header-content">
							<span>
								<FontAwesomeIcon icon={faBullhorn} style={{ color: "#ffffff", marginRight: "10px" }} />
							</span>
							New Circular
						</div>
					</div>
					<div className="message-popup-subject">
						{" "}
						<span className="text-muted">Subject: </span>
						<input
							type="text"
							placeholder="Circular Subject"
							style={{ border: "none", width: "700px" }}
							onChange={onChangeSubject}
						/>
					</div>
				</div>
				<hr className="message-line" />
				<div className="message-popup-body">
					{/* Your compose message content here */}
					<textarea
						rows="10"
						className="form-control message-popup-textarea"
						placeholder="Type your message..."
						style={{ whiteSpace: "pre-wrap" }}
						onChange={onChangeContent}
					/>
				</div>
				<div className="message-popup-actions justify-content-end">
					<div className="message-popup-buttons-right">
						<button className="btn btn-secondary message-send-button" onClick={onSubmit}>
							Send
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default NewCircular;
