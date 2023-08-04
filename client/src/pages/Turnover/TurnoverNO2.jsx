import { Link, useLocation, useNavigate } from "react-router-dom";
import "../../styles/base.css";
import "../../styles/Turnover.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

function TurnoverNO2() {
  const location = useLocation();
  const navigate = useNavigate();
  const prevPageProps = location.state;

  const [members, setMembers] = useState([]);
  const [officers, setOfficers] = useState(
    prevPageProps?.formData?.officers || []
  );
  const [formData, setFormData] = useState(prevPageProps?.formData ?? {});

  // Fetch organization members' names from the MongoDB database on component mount
  useEffect(() => {
    console.log(prevPageProps);
    const fetchMembers = async () => {
      const membersData = await axios.get(
        `http://localhost:5000/getAllMembers/${prevPageProps.userData.chapterID}` // ${prevPageProps.userData.chapterID}
      );
      setMembers(membersData.data);
    };

    fetchMembers();
  }, []);

  const officerPositions = [
    "Master Councilor",
    "Senior Councilor",
    "Junior Councilor",
    "Treasurer",
    "Scribe",
    "Senior Deacon",
    "Junior Deacon",
    "Senior Steward",
    "Junior Steward",
    "Chaplain",
    "Almoner",
    "Marshal",
    "Standard Bearer",
    "Orator",
    "1st Preceptor",
    "2nd Preceptor",
    "3rd Preceptor",
    "4th Preceptor",
    "5th Preceptor",
    "6th Preceptor",
    "7th Preceptor",
    "Sentinel",
    "Organist",
  ];

  const marshalIndex = officerPositions.findIndex(
    (position) => position === "Marshal"
  );
  const firstColumnPositions = officerPositions.slice(0, 6);
  const secondColumnPositions = officerPositions.slice(6, 12);
  const thirdColumnPositions = officerPositions.slice(12, 18);
  const fourthColumnPositions = officerPositions.slice(18);

  const getSelectedMemberId = (position) => {
    const officer = officers.find((officer) => officer.position === position);
    return officer ? officer.memberId : "";
  };

  const handleDropdownChange = (selectedMemberId, position) => {
    // Check if the selected member is already assigned to another position
    const isMemberAssigned = officers.some(
      (officer) =>
        officer.memberId === selectedMemberId && officer.position !== position
    );

    // Create a copy of the previous officers' state
    const updatedOfficers = [...officers];

    // Find the officer object for the current dropdown position
    const currentOfficer = updatedOfficers.find(
      (officer) => officer.position === position
    );

    // Clear the previous position if the member is already assigned elsewhere
    if (isMemberAssigned) {
      const previousOfficer = updatedOfficers.find(
        (officer) => officer.memberId === selectedMemberId
      );
      if (previousOfficer) {
        previousOfficer.memberId = "";
      }
    }

    // Update the current dropdown selection or create a new officer object if needed
    if (currentOfficer) {
      currentOfficer.memberId = selectedMemberId;
    } else {
      updatedOfficers.push({ position, memberId: selectedMemberId });
    }

    // Update the state with the modified officers array
    setOfficers(updatedOfficers);
  };

  const handleNextButtonClick = () => {
    navigate("/turnoverno4", {
      state: {
        ...prevPageProps,
        formData: { ...formData, officers: officers },
      },
    });
  };

  const handleBackButtonClick = () => {
    navigate("/turnoverno1", {
      state: {
        ...prevPageProps,
        formData: { ...formData, officers: officers },
      },
    });
  };

  return (
    <div className="container">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h1> New Officers Report (Form 15) </h1>
        <Link to="/turnoverTF1">
          <button type="submit" form="submit" className="primary-btn">
            SAVE AND COMPLETE LATER
          </button>
        </Link>
      </div>

      <hr />

      {/* Progress Line */}

      <div className="progress-line-3">
        <div className="progress-circle-3"></div>
        <div className="progress-circle-3 active"></div>
        <div className="progress-circle-3"></div>
      </div>
      <div className="progress-labels-3">
        <div className="progress-label-3">Chapter Information</div>
        <div className="progress-label-3">List of Officers</div>
        <div className="progress-label-3">Signatories of Certification</div>
      </div>

      <br />

      <div className="d-flex justify-content-between">
        {/* First column */}
        <div>
          {firstColumnPositions.map((position) => (
            <div key={position} className="mb-4">
              <label htmlFor={position} className="col-form-label">
                {position}:
              </label>
              <select
                className="form-select"
                id={position}
                value={getSelectedMemberId(position) || ""}
                onChange={(e) => handleDropdownChange(e.target.value, position)}
                disabled={prevPageProps.userData.position !== "Scribe"}
              >
                <option value="">Select {position}</option>
                {members.map((member) => (
                  <option key={member.memberId} value={member.memberId}>
                    {member.name}
                  </option>
                ))}
              </select>
            </div>
          ))}
        </div>

        {/* Second column */}
        <div>
          {secondColumnPositions.map((position) => (
            <div key={position} className="mb-4">
              <label htmlFor={position} className="col-form-label">
                {position}:
              </label>
              <select
                className="form-select"
                id={position}
                value={getSelectedMemberId(position) || ""}
                onChange={(e) => handleDropdownChange(e.target.value, position)}
                disabled={prevPageProps.userData.position !== "Scribe"}
              >
                <option value="">Select {position}</option>
                {members.map((member) => (
                  <option key={member.memberId} value={member.memberId}>
                    {member.name}
                  </option>
                ))}
              </select>
            </div>
          ))}
        </div>

        {/* Third column */}
        <div>
          {thirdColumnPositions.map((position) => (
            <div key={position} className="mb-4">
              <label htmlFor={position} className="col-form-label">
                {position}:
              </label>
              <select
                className="form-select"
                id={position}
                value={getSelectedMemberId(position) || ""}
                onChange={(e) => handleDropdownChange(e.target.value, position)}
                disabled={prevPageProps.userData.position !== "Scribe"}
              >
                <option value="">Select {position}</option>
                {members.map((member) => (
                  <option key={member.memberId} value={member.memberId}>
                    {member.name}
                  </option>
                ))}
              </select>
            </div>
          ))}
        </div>

        {/* Fourth column */}
        <div>
          {fourthColumnPositions.map((position) => (
            <div key={position} className="mb-4">
              <label htmlFor={position} className="col-form-label">
                {position}:
              </label>
              <select
                className="form-select"
                id={position}
                value={getSelectedMemberId(position) || ""}
                onChange={(e) => handleDropdownChange(e.target.value, position)}
                disabled={prevPageProps.userData.position !== "Scribe"}
              >
                <option value="">Select {position}</option>
                {members.map((member) => (
                  <option key={member.memberId} value={member.memberId}>
                    {member.name}
                  </option>
                ))}
              </select>
            </div>
          ))}
        </div>
      </div>

      <div className="d-flex justify-content-between mt-4">
        <button
          type="button"
          className="primary-btn"
          onClick={handleBackButtonClick}
        >
          BACK
        </button>

        <button
          type="submit"
          form="submit"
          className="primary-btn"
          value="SUBMIT"
          onClick={handleNextButtonClick}
        >
          NEXT
        </button>
      </div>
    </div>
  );

  <div className="row">
    {/* First Column */}

    <div className="col-md-6">
      <div className="row align-items-center mt-3">
        <div className="col-md-4">
          <label htmlFor="mastercouncilor" className="col-form-label text-left">
            Master Councilor:
          </label>
        </div>
        <div className="col-md-8">
          <input type="text" placeholder="Search" />
          <button style={{ border: "none", background: "none" }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path
                fill="currentColor"
                d="M15 14l6 6-2 2-6-6a7.94 7.94 0 111.38-1.37zM8 14a6 6 0 100-12 6 6 0 000 12z"
              />
            </svg>
          </button>
          `
        </div>
      </div>

      <div className="row align-items-center mt-3">
        <div className="col-md-4">
          <label htmlFor="seniorcouncilor" className="col-form-label text-left">
            Senior Councilor:
          </label>
        </div>
        <div className="col-md-8">
          <input type="text" placeholder="Search" />
          <button style={{ border: "none", background: "none" }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path
                fill="currentColor"
                d="M15 14l6 6-2 2-6-6a7.94 7.94 0 111.38-1.37zM8 14a6 6 0 100-12 6 6 0 000 12z"
              />
            </svg>
          </button>
          `
        </div>
      </div>

      <div className="row align-items-center mt-3">
        <div className="col-md-4">
          <label htmlFor="juniorcouncilor" className="col-form-label text-left">
            Junior Councilor:
          </label>
        </div>
        <div className="col-md-8">
          <input type="text" placeholder="Search" />
          <button style={{ border: "none", background: "none" }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path
                fill="currentColor"
                d="M15 14l6 6-2 2-6-6a7.94 7.94 0 111.38-1.37zM8 14a6 6 0 100-12 6 6 0 000 12z"
              />
            </svg>
          </button>
          `
        </div>
      </div>

      <div className="row align-items-center mt-3">
        <div className="col-md-4">
          <label htmlFor="treasurer" className="col-form-label text-left">
            Treasurer:
          </label>
        </div>
        <div className="col-md-8">
          <input type="text" placeholder="Search" />
          <button style={{ border: "none", background: "none" }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path
                fill="currentColor"
                d="M15 14l6 6-2 2-6-6a7.94 7.94 0 111.38-1.37zM8 14a6 6 0 100-12 6 6 0 000 12z"
              />
            </svg>
          </button>
          `
        </div>
      </div>

      <div className="row align-items-center mt-3">
        <div className="col-md-4">
          <label htmlFor="scribe" className="col-form-label text-left">
            Scribe:
          </label>
        </div>
        <div className="col-md-8">
          <input type="text" placeholder="Search" />
          <button style={{ border: "none", background: "none" }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path
                fill="currentColor"
                d="M15 14l6 6-2 2-6-6a7.94 7.94 0 111.38-1.37zM8 14a6 6 0 100-12 6 6 0 000 12z"
              />
            </svg>
          </button>
          `
        </div>
      </div>

      <div className="row align-items-center mt-3">
        <div className="col-md-4">
          <label htmlFor="seniordeacon" className="col-form-label text-left">
            Senior Deacon:
          </label>
        </div>
        <div className="col-md-8">
          <input type="text" placeholder="Search" />
          <button style={{ border: "none", background: "none" }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path
                fill="currentColor"
                d="M15 14l6 6-2 2-6-6a7.94 7.94 0 111.38-1.37zM8 14a6 6 0 100-12 6 6 0 000 12z"
              />
            </svg>
          </button>
          `
        </div>
      </div>

      <div className="row align-items-center mt-3">
        <div className="col-md-4">
          <label htmlFor="juniordeacon" className="col-form-label text-left">
            Junior Deacon:
          </label>
        </div>
        <div className="col-md-8">
          <input type="text" placeholder="Search" />
          <button style={{ border: "none", background: "none" }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path
                fill="currentColor"
                d="M15 14l6 6-2 2-6-6a7.94 7.94 0 111.38-1.37zM8 14a6 6 0 100-12 6 6 0 000 12z"
              />
            </svg>
          </button>
          `
        </div>
      </div>
    </div>

    {/* Second Column */}

    <div className="col-md-6">
      <div className="row align-items-center mt-3">
        <div className="col-md-4">
          <label htmlFor="seniorsteward" className="col-form-label text-left">
            Senior Steward:
          </label>
        </div>
        <div className="col-md-8">
          <input type="text" placeholder="Search" />
          <button style={{ border: "none", background: "none" }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path
                fill="currentColor"
                d="M15 14l6 6-2 2-6-6a7.94 7.94 0 111.38-1.37zM8 14a6 6 0 100-12 6 6 0 000 12z"
              />
            </svg>
          </button>
          `
        </div>
      </div>

      <div className="row align-items-center mt-3">
        <div className="col-md-4">
          <label htmlFor="juniorsteward" className="col-form-label text-left">
            Junior Steward:
          </label>
        </div>
        <div className="col-md-8">
          <input type="text" placeholder="Search" />
          <button style={{ border: "none", background: "none" }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path
                fill="currentColor"
                d="M15 14l6 6-2 2-6-6a7.94 7.94 0 111.38-1.37zM8 14a6 6 0 100-12 6 6 0 000 12z"
              />
            </svg>
          </button>
          `
        </div>
      </div>

      <div className="row align-items-center mt-3">
        <div className="col-md-4">
          <label htmlFor="marshal" className="col-form-label text-left">
            Marshal:
          </label>
        </div>
        <div className="col-md-8">
          <input type="text" placeholder="Search" />
          <button style={{ border: "none", background: "none" }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path
                fill="currentColor"
                d="M15 14l6 6-2 2-6-6a7.94 7.94 0 111.38-1.37zM8 14a6 6 0 100-12 6 6 0 000 12z"
              />
            </svg>
          </button>
          `
        </div>
      </div>

      <div className="row align-items-center mt-3">
        <div className="col-md-4">
          <label htmlFor="chaplain" className="col-form-label text-left">
            Chaplain:
          </label>
        </div>
        <div className="col-md-8">
          <input type="text" placeholder="Search" />
          <button style={{ border: "none", background: "none" }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path
                fill="currentColor"
                d="M15 14l6 6-2 2-6-6a7.94 7.94 0 111.38-1.37zM8 14a6 6 0 100-12 6 6 0 000 12z"
              />
            </svg>
          </button>
          `
        </div>
      </div>

      <div className="row align-items-center mt-3">
        <div className="col-md-4">
          <label htmlFor="almanor" className="col-form-label text-left">
            Almanor:
          </label>
        </div>
        <div className="col-md-8">
          <input type="text" placeholder="Search" />
          <button style={{ border: "none", background: "none" }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path
                fill="currentColor"
                d="M15 14l6 6-2 2-6-6a7.94 7.94 0 111.38-1.37zM8 14a6 6 0 100-12 6 6 0 000 12z"
              />
            </svg>
          </button>
          `
        </div>
      </div>

      <div className="row align-items-center mt-3">
        <div className="col-md-4">
          <label htmlFor="orator" className="col-form-label text-left">
            Orator:
          </label>
        </div>
        <div className="col-md-8">
          <input type="text" placeholder="Search" />
          <button style={{ border: "none", background: "none" }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path
                fill="currentColor"
                d="M15 14l6 6-2 2-6-6a7.94 7.94 0 111.38-1.37zM8 14a6 6 0 100-12 6 6 0 000 12z"
              />
            </svg>
          </button>
          `
        </div>
      </div>

      <div className="row align-items-center mt-3">
        <div className="col-md-4">
          <label htmlFor="organist" className="col-form-label text-left">
            Organist:
          </label>
        </div>
        <div className="col-md-8">
          <input type="text" placeholder="Search" />
          <button style={{ border: "none", background: "none" }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path
                fill="currentColor"
                d="M15 14l6 6-2 2-6-6a7.94 7.94 0 111.38-1.37zM8 14a6 6 0 100-12 6 6 0 000 12z"
              />
            </svg>
          </button>
          `
        </div>
      </div>
    </div>

    {/* Buttons */}

    <div className="d-flex justify-content-between mt-4">
      <Link to="/turnoverNO1">
        <button type="button" className="primary-btn">
          BACK
        </button>
      </Link>
      <Link to="/turnoverNO3">
        <button
          type="submit"
          form="submit"
          className="primary-btn"
          value="SUBMIT"
        >
          NEXT
        </button>
      </Link>
    </div>
  </div>;
}

export default TurnoverNO2;
