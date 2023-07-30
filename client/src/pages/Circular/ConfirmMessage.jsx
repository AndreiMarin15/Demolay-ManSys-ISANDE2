import { Link } from "react-router-dom";

const ConfirmMessage = ({ onClosePopup }) => {
  return (
    <div>
      <div className="new-popup-overlay" onClick={onClosePopup} />
      <div className="new-popup">
        <div className="new-popup-header">
          <div className="new-popup-title">New Popup Content</div>
        </div>
        <div className="new-popup-body">
          {/* Your new popup content here */}
          <p>This is the new popup content.</p>
        </div>
        <div className="new-popup-actions">
          <button
            className="btn btn-primary new-popup-button"
            onClick={onClosePopup}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmMessage;
