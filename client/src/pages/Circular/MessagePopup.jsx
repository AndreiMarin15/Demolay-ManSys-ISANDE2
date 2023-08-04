import { Link } from "react-router-dom";
import "../../styles/messagepopup.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

import ConfirmMessage from "./ConfirmMessage.jsx"; // Import the new popup component
import axios from "axios";

const MessagePopup = ({ showPopup, onSendClick, onClosePopup, member, circularId, user, memberId }) => {
	const [reminderDetails, setReminder] = useState({
		subject: "",
		message: "",
	
	});
	const [linkCircular, setLink] = useState(false);
	const [addSignature, setSign] = useState(false);

	const [circularLink, setCircular] = useState("");
	const [use, setUser] = useState("");

	useEffect(() => {
		setReminder({
			subject: "Circular Reminder",
		});
		setCircular(`/membercircular2/${memberId}/${circularId}`);
		setUser(`${user.givenName} ${user.lastName}`);
	}, []);

	const sendMessage = () => {
		const toSend = {
			circularId: circularId,
			subject: reminderDetails.subject,
			message: reminderDetails.message,
			circularLink: circularLink,
			sender: use,
		};
		console.log(toSend);
		setLink(false);
		setSign(false);

		axios.post(`http://localhost:5000/sendMessage/${member._id}`, toSend).then(onClosePopup);
	};

	const handleLink = () => {
		setLink(true);
	};

	const handleSign = () => {
		setSign(true);
	};

	const onChangeContent = (e) => {
		setReminder({
			...reminderDetails,
			message: e.target.value,
		});
	};
	if (!showPopup) return null;

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
								<FontAwesomeIcon icon={faPaperPlane} style={{ color: "#ffffff", marginRight: "15px" }} />
							</span>
							Send to: {member.givenName} {member.lastName} 
						</div>
					</div>
					<div className="message-popup-subject">
						{" "}
						<span className="text-muted">Subject:</span> Circular Reminder
					</div>
				</div>
				<hr className="message-line" />
				<div className="message-popup-body">
					{/* Your compose message content here */}
					<textarea
						rows="10"
						className="form-control message-popup-textarea"
						placeholder="Type your message..."
						onChange={onChangeContent}
					/>
					{linkCircular === true && <a href={circularLink}>View Cirular</a>}
					{addSignature === true && (
						<>
							<p>Regards,</p> <br></br> <p>{use}</p>
						</>
					)}
				</div>
				<div className="message-popup-actions">
					<div className="message-popup-buttons-left">
						<button className="btn btn-secondary message-popup-button" onClick={handleLink}>
							Link Circular
						</button>
						<button className="btn btn-secondary message-popup-button" onClick={handleSign}>
							Add Signature
						</button>
					</div>
					<div className="message-popup-buttons-right">
						<button
							className="btn btn-secondary message-send-button"
							onClick={() => {
								sendMessage();
							}}
						>
							Send
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MessagePopup;
