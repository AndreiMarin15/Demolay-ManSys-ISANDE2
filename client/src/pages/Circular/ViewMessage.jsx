import { Link } from "react-router-dom";
import "../../styles/messagepopup.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBullhorn } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

import ConfirmMessage from "./ConfirmMessage.jsx"; // Import the new popup component
import axios from "axios";

const ViewMessage = ({ showPopup, message, onClosePopup }) => {
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
							View Circular
						</div>
					</div>
					<div className="message-popup-subject">
						{" "}
						<span className="text-muted">Subject: </span>
						{message.subject}
					</div>
				</div>
				<hr className="message-line" />
				<div className="message-popup-body">
					{/* Your compose message content here */}
					<p className="text-muted" style={{ whiteSpace: "pre-wrap" }}>
						{message.message}
					</p>

					{message.circularLink ? <a href={message.circularLink}>View Cirular</a> : ""}
                    <br />
                    {message.sender ? <p className="text-muted" style={{ whiteSpace: "pre-wrap" }}>Regards,</p> : ""}
                    {message.sender ? <p className="text-muted" style={{ whiteSpace: "pre-wrap" }}>{message.sender}</p> : ""}
				
				</div>
			</div>
		</div>
	);
};

export default ViewMessage;
