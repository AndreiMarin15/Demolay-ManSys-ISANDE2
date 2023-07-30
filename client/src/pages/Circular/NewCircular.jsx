import { Link } from "react-router-dom";
import "../../styles/messagepopup.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBullhorn } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

import ConfirmMessage from "./ConfirmMessage.jsx"; // Import the new popup component

const NewCircular = ({ showPopup, onSendClick, onClosePopup }) => {

  const [circularDetails, setDetails] = useState({
    subject: "",
    text: "",
    senderName: "",
    senderId: "",
    dateAndTimeSent: ""
  })

  if (!showPopup) {return null};

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
                <FontAwesomeIcon
                  icon={faBullhorn}
                  style={{ color: "#ffffff", marginRight: "10px" }}
                />
              </span>
              New Circular
            </div>
          </div>
          <div className="message-popup-subject">
            {" "}
            <span className="text-muted">Subject:  </span>  
            <input type="text" placeholder="Circular Subject" style={{border: "none", width: "700px"}} />
          </div>
        </div>
        <hr className="message-line" />
        <div className="message-popup-body">
          {/* Your compose message content here */}
          <textarea
            rows="10"
            className="form-control message-popup-textarea"
            placeholder="Type your message..."
          />
        </div>
        <div className="message-popup-actions justify-content-end">
          <div className="message-popup-buttons-right">
            <button
              className="btn btn-secondary message-send-button"
              onClick={onSendClick}
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewCircular;
