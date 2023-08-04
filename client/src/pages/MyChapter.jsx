import "../styles/base.css";
import DataTable from "react-data-table-component";
import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function MyChapter() {
  const navigate = useNavigate();
  const location = useLocation();
  const prevPageProps = location.state;

  const [activeTab, setActiveTab] = useState("members");
  const [searchText, setSearchText] = useState("");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleSearch = (e) => {
    setSearchText(e.target.value);
  };

  const membersColumns = [
    {
      name: "DeMolay ID",
      selector: (row) => row.id,
      sortable: true,
    },
    {
      name: "Last Name",
      selector: (row) => row.lastName,
      sortable: true,
    },
    {
      name: "First Name",
      selector: (row) => row.firstName,
      sortable: true,
    },
    {
      name: "Email",
      selector: (row) => row.email,
      sortable: true,
    },
    {
      name: "Contact Number",
      selector: (row) => row.contact,
    },
    {
      name: "Initiatory Degree",
      selector: (row) => row.idDate,
      sortable: true,
    },
    {
      name: "DeMolay Degree",
      selector: (row) => row.ddDate,
      sortable: true,
    },
    {
      name: "Position",
      selector: (row) => row.position,
      sortable: true,
    },
    {
      name: "Dual Chapter",
      selector: (row) => row.dualChapter,
      sortable: true,
    },
    {
      name: "Status",
      selector: (row) => row.status,
      sortable: true,
    },
  ];

  const advisoryColumns = [
    {
      name: "ID",
      selector: (row) => row.id,
      sortable: true,
    },
    {
      name: "Last Name",
      selector: (row) => row.lastName,
      sortable: true,
    },
    {
      name: "First Name",
      selector: (row) => row.firstName,
      sortable: true,
    },
    {
      name: "Email",
      selector: (row) => row.email,
      sortable: true,
    },
    {
      name: "Contact Number",
      selector: (row) => row.contact,
    },
    {
      name: "Position",
      selector: (row) => row.position,
      sortable: true,
    },
  ];

  const membersData = [
    {
      id: "18-27061",
      lastName: "Tolentino",
      firstName: "Philip",
      email: "philipm.tolentino@gmail.com",
      contact: "0995 966 0823",
      idDate: "January 28, 2018",
      ddDate: "March 04, 2018",
      position: "",
      dualChapter: "A. Mabini Chapter No. 37",
      status: "Senior",
    },
    {
      id: "15-16813",
      lastName: "Gaspar",
      firstName: "Johanne",
      email: "yayanpara02@gmail.com",
      contact: "0907 582 2002",
      idDate: "April 12, 2015",
      ddDate: "May 10, 2015",
      position: "Master Councilor",
      dualChapter: "",
      status: "Active",
    },
    {
      id: "12-14419",
      lastName: "Tolentino",
      firstName: "Jacob",
      email: "jacobm.tolentino@gmail.com",
      contact: "0915 804 8757",
      idDate: "November 11, 2012",
      ddDate: "November 11, 2012",
      position: "",
      dualChapter: "A. Mabini Chapter No. 37",
      status: "Senior",
    },
  ];

  const advisoryData = [
    {
      id: "1",
      lastName: "Fronda",
      firstName: "Ariel",
      email: "adfronda@yahoo.com",
      contact: "0999 999 0000",
      position: "Chairman",
    },
    {
      id: "2",
      lastName: "Pasiona",
      firstName: "Garry",
      email: "gpasiona@gmail.com",
      contact: "0999 999 0002",
      position: "Chapter Advisor",
    },
    {
      id: "3",
      lastName: "Joaquin",
      firstName: "Joseph",
      email: "jjjoaquin@gmail.com",
      contact: "0999 999 0003",
      position: "Member",
    },
  ];

  const getActiveTableColumns = () => {
    switch (activeTab) {
      case "members":
        return membersColumns;
      case "officers":
        return membersColumns;
      case "advisoryCouncil":
        return advisoryColumns;
      default:
        return [];
    }
  };

  const getActiveTableData = () => {
    switch (activeTab) {
      case "members":
        return membersData;
      case "officers":
        return membersData.filter(
          (record) =>
            record.position === "Master Councilor" ||
            record.position === "Senior Councilor" ||
            record.position === "Junior Councilor" ||
            record.position === "Scribe" ||
            record.position === "Treasurer"
        );
      case "advisoryCouncil":
        return advisoryData;
      default:
        return [];
    }
  };

  const filteredData = getActiveTableData().filter((record) => {
    const values = Object.values(record).join(" ").toLowerCase();
    return values.includes(searchText.toLowerCase());
  });

  return (
    <>
      <div className="container">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h1> {prevPageProps.chapterData.name} </h1>
        </div>

        <hr />

        <div>
          <ul className="nav nav-pills mb-3">
            <li className="nav-item" role="presentation">
              <button
                className={`nav-link ${
                  activeTab === "members" ? "active" : ""
                }`}
                onClick={() => handleTabClick("members")}
              >
                Members
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className={`nav-link ${
                  activeTab === "officers" ? "active" : ""
                }`}
                onClick={() => handleTabClick("officers")}
              >
                Officers
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className={`nav-link ${
                  activeTab === "advisoryCouncil" ? "active" : ""
                }`}
                onClick={() => handleTabClick("advisoryCouncil")}
              >
                Advisory Council
              </button>
            </li>
          </ul>
        </div>

        <DataTable
          columns={getActiveTableColumns()}
          data={filteredData}
          selectableRows
          highlightOnHover
          fixedHeader
          pagination
          subHeader
          subHeaderComponent={
            <input
              type="text"
              placeholder="Search"
              value={searchText}
              onChange={handleSearch}
            />
          }
        />
      </div>
    </>
  );
}
