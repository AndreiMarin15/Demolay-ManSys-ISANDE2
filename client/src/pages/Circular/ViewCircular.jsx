import { Link } from "react-router-dom";
import "../../styles/messagepopup.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBullhorn } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

import ConfirmMessage from "./ConfirmMessage.jsx"; // Import the new popup component
import axios from "axios";



const ViewCircular = ({ showPopup, circular, onClosePopup }) => {
	

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
						{circular.subject}
					</div>
				</div>
				<hr className="message-line" />
				<div className="message-popup-body">
					{/* Your compose message content here */}
					{circular.circularText.split("\n").map((item, key) => {
						return (
							<p key={key}>
								{item}
								<br />
							</p>
						);
					})}
				</div>
				
			</div>
		</div>
	);
};

export default ViewCircular;
