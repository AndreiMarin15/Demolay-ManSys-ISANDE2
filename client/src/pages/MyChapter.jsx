import "../styles/base.css";
import DataTable from "react-data-table-component";
import { useEffect, useState } from "react";

export default function MyChapter() {
  const columns = [
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

  const data = [
    {
      id: "18-27061",
      lastName: "Tolentino",
      firstName: "Philip",
      email: "philipm.tolentino@gmail.com",
      contact: "0995 966 0823",
      idDate: "January 28, 2018",
      ddDate: "March 04, 2018",
      position: "Member",
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
      position: "Member",
      dualChapter: "A. Mabini Chapter No. 37",
      status: "Senior",
    },
  ];

  const tableData = data.map((record) => {
    return {
      id: record.id,
      lastName: record.lastName,
      firstName: record.firstName,
      email: record.email,
      contact: record.contact,
      idDate: record.idDate,
      ddDate: record.ddDate,
      position: record.position,
      dualChapter: record.dualChapter,
      status: record.status,
    };
  });

  const [searchText, setSearchText] = useState("");

  const handleSearch = (e) => {
    setSearchText(e.target.value);
  };

  const filteredData = tableData.filter((record) => {
    const values = Object.values(record).join(" ").toLowerCase();
    return values.includes(searchText.toLowerCase());
  });

  return (
    <>
      <div className="container">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h1> [My Chapter] </h1>
        </div>

        <hr />

        <DataTable
          columns={columns}
          data={filteredData}
          selectableRows
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
