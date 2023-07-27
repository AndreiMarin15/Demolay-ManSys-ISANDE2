import React, { useState } from "react";
import MessagePopup from "./MessagePopup";
import ConfirmMessage from "./ConfirmMessage";

const ParentComponent = () => {
  const [showMessagePopup, setShowMessagePopup] = useState(true);
  const [showConfirmMessage, setShowConfirmMessage] = useState(false);

  const handleSendClick = () => {
    console.log("Called");
    setShowMessagePopup(false);
    setShowConfirmMessage(true);
  };

  const handleClosePopups = () => {
    setShowMessagePopup(true);
    setShowConfirmMessage(false);
  };

  return (
    <div>
      {showMessagePopup && (
        <MessagePopup
          showPopup={showMessagePopup}
          onSendClick={handleSendClick}
        />
      )}
      {showConfirmMessage && (
        <ConfirmMessage onClosePopup={handleClosePopups} />
      )}
    </div>
  );
};

export default ParentComponent;
