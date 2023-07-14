import "../styles/base.css";
import DataTable from "react-data-table-component";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

export default function MyChapter() {
  const [activeTab, setActiveTab] = useState("luzon");
  const [searchText, setSearchText] = useState("");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleSearch = (e) => {
    setSearchText(e.target.value);
  };

  const columns = [
    {
      name: "Chapter Number",
      selector: (row) => row.id,
      sortable: true,
    },

    {
      name: "Name",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "Location",
      selector: (row) => row.location,
      sortable: true,
    },
    {
      name: "Membership",
      selector: (row) => row.memberCount,
      sortable: true,
    },
    {
      name: "Sponsoring Body",
      selector: (row) => row.sponsor,
      sortable: true,
    },
    {
      name: "Status",
      selector: (row) => row.status,
      sortable: true,
    },
  ];

  const luzonData = [
    {
      id: "1",
      name: "Jose Abad Santos Chapter No. 1",
      location: "Manila",
      memberCount: 42,
      sponsor: "Masonic Senior DeMolay Club",
      status: "In Good Standing",
    },
    {
      id: "2",
      name: "Emmanuel Baja Chapter No. 2",
      location: "Cavite City",
      memberCount: 67,
      sponsor: "Cavite Lodge No. 2",
      status: "In Good Standing",
    },
    {
      id: "3",
      name: "Loyalty Chapter No. 3",
      location: "Manila",
      memberCount: 26,
      sponsor: "Luzon Bodies A. & A.S.R.",
      status: "In Good Standing",
    },
  ];

  const visayasData = [
    {
      id: "5",
      name: "Lapu-Lapu Chapter No. 5",
      location: "Cebu City",
      memberCount: 31,
      sponsor: "Maktan Lodge No. 30",
      status: "In Good Standing",
    },
    {
      id: "7",
      name: "Leon Kilat Chapter No. 7",
      location: "Dumaguete City",
      memberCount: 20,
      sponsor: "Mt. Kaladias Lodge No. 91",
      status: "Delinquent",
    },
  ];

  const mindanaoData = [
    {
      id: "11",
      name: "Feliciano Iñigo Chapter No. 11",
      location: "Davao City",
      memberCount: 12,
      sponsor:
        "Manobo Chapter No. 31-RAM, Haribon Council No. 30-RSM, and Rajah Commandery No. 30-KT",
      status: "Delinquent",
    },
  ];

  const getActiveTableData = () => {
    switch (activeTab) {
      case "luzon":
        return luzonData;
      case "visayas":
        return visayasData;
      case "mindanao":
        return mindanaoData;
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
          <h1> Chapter Directory </h1>
        </div>

        <hr />

        <div>
          <ul className="nav nav-pills mb-3">
            <li className="nav-item" role="presentation">
              <button
                className={`nav-link ${activeTab === "luzon" ? "active" : ""}`}
                onClick={() => handleTabClick("luzon")}
              >
                Luzon
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className={`nav-link ${
                  activeTab === "visayas" ? "active" : ""
                }`}
                onClick={() => handleTabClick("visayas")}
              >
                Visayas
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className={`nav-link ${
                  activeTab === "mindanao" ? "active" : ""
                }`}
                onClick={() => handleTabClick("mindanao")}
              >
                Mindanao
              </button>
            </li>
          </ul>
        </div>

        <DataTable
          columns={columns}
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
