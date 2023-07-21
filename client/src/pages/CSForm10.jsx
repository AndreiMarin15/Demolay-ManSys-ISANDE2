import { Link } from "react-router-dom";
import "../styles/base.css";
import "../styles/csform10.css";
import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faFilter,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import { Component } from "react";
import { useParams, Redirect } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

import { Table, Tag, Transfer } from "antd";
import { DatePicker, Radio, Space } from "antd";
import difference from "lodash/difference";

const TableTransfer = ({ leftColumns, rightColumns, ...restProps }) => (
  <Transfer {...restProps}>
    {({
      direction,
      filteredItems,
      onItemSelectAll,
      onItemSelect,
      selectedKeys: listSelectedKeys,
      disabled: listDisabled,
    }) => {
      const columns = direction === "left" ? leftColumns : rightColumns;
      const rowSelection = {
        getCheckboxProps: (item) => ({
          disabled: listDisabled || item.disabled,
        }),
        onSelectAll(selected, selectedRows) {
          const treeSelectedKeys = selectedRows
            .filter((item) => !item.disabled)
            .map(({ key }) => key);
          const diffKeys = selected
            ? difference(treeSelectedKeys, listSelectedKeys)
            : difference(listSelectedKeys, treeSelectedKeys);
          onItemSelectAll(diffKeys, selected);
        },
        onSelect({ key }, selected) {
          onItemSelect(key, selected);
        },
        selectedRowKeys: listSelectedKeys,
      };

      const handleRowClick = ({ key, disabled: itemDisabled }, event) => {
        if (itemDisabled || listDisabled || event.target.tagName === "A")
          return;
        onItemSelect(key, !listSelectedKeys.includes(key));
      };

      return (
        <Table
          rowSelection={rowSelection}
          columns={columns}
          dataSource={filteredItems}
          size="small"
          style={{
            pointerEvents: listDisabled ? "none" : undefined,
          }}
          onRow={({ key, disabled: itemDisabled }) => ({
            onClick: (event) =>
              handleRowClick({ key, disabled: itemDisabled }, event),
          })}
        />
      );
    }}
  </Transfer>
);

const mockTags = ["Not Paid", "To Verify", "Paid"];

const mockData = [
  {
    key: 0,
    id: "18-27061",
    name: "Tolentino, Philip",
    tag: mockTags[0],
    sponsor: "Jacob M. Tolentino",
  },
  {
    key: 1,
    id: "15-16813",
    name: "Gaspar, Johanne",
    tag: mockTags[1],
    sponsor: "Jacob M. Tolentino",
  },
  {
    key: 2,
    id: "12-14419",
    name: "Tolentino, Jacob",
    tag: mockTags[2],
    sponsor: "Geoffry Ryann Z. Velarde",
  },
];

const leftTableColumns = [
  {
    dataIndex: "name",
    title: "Name",
  },
  {
    dataIndex: "tag",
    title: "Payment Status",
    render: (tag) => <Tag>{tag}</Tag>,
  },
  {
    dataIndex: "description",
    title: "Application Form",
    render: () => <Link to="/appstatus1/">{`View`}</Link>,
  },
];

const rightTableColumns = [
  {
    dataIndex: "name",
    title: "Name",
  },
  {
    dataIndex: "sponsor",
    title: "First-line Signer",
  },
];

export default function CSForm10() {
  const [targetKeys, setTargetKeys] = useState([]);

  const onChange = (nextTargetKeys) => {
    setTargetKeys(nextTargetKeys);
  };

  return (
    <div className="container container-fluid">
      <div className="row">
        <Space direction="horizontal" wrap={true} size={30} align="end">
          <h1>Form 10</h1>
          <h4>Initiatory Degree: </h4>
          <DatePicker size="large" />
          <h4>DeMolay Degree: </h4>
          <DatePicker size="large" />
        </Space>
      </div>

      <hr />

      <div className="row">
        <Space direction="horizontal" wrap={true} size={350} align="end">
          <h2>Approved Applicants</h2>

          <h2>Initiated Members</h2>
        </Space>
      </div>
      <TableTransfer
        dataSource={mockData}
        targetKeys={targetKeys}
        showSearch={true}
        onChange={onChange}
        filterOption={(inputValue, item) => {
          const columns = [...leftTableColumns, ...rightTableColumns];
          return columns.some((column) =>
            String(item[column.dataIndex])
              .toLowerCase()
              .includes(inputValue.toLowerCase())
          );
        }}
        leftColumns={leftTableColumns}
        rightColumns={rightTableColumns}
      />

      <br />

      <hr />

      <div className="col-12 text-end" style={{ marginTop: "20px" }}>
        <Link>
          <button type="submit" className="btn custom">
            Next
          </button>
        </Link>
      </div>
    </div>
  );
}

<div className="row" style={{ marginLeft: "35px" }}>
  <div className="col-md-5">
    {/* Content for the left column */}

    <br />
    <div className="input-group mb-3">
      <input
        type="text"
        className="form-control form-control-sm"
        placeholder="Search"
      />
      <div className="input-group-append">
        <button type="button" className="filterbtn">
          <FontAwesomeIcon icon={faFilter} />
        </button>
      </div>
    </div>
    <br />
    <div className="table-responsive">
      <table className="table table-bordered-custom approved">
        <thead className="thead-custom">
          <tr>
            <th>#</th>
            <th>Applicant Name</th>
            <th>View</th>
            <th>Add to Form 10</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>John Doe</td>
            <td>
              <a href="facebook.com">View Details</a>
            </td>
            <td>
              <button type="submit" className="btn custom-add">
                FORM 10
                <FontAwesomeIcon
                  icon={faArrowRight}
                  style={{ color: "#ffffff", marginLeft: "10px" }}
                />
              </button>
            </td>
          </tr>

          <tr>
            <td>2</td>
            <td>Joe Alwyn</td>

            <td>
              <a href="facebook.com">View Details</a>
            </td>
            <td>
              <button type="submit" className="btn custom-add">
                FORM 10
                <FontAwesomeIcon
                  icon={faArrowRight}
                  style={{ color: "#ffffff", marginLeft: "10px" }}
                />
              </button>
            </td>
          </tr>

          <tr>
            <td>3</td>
            <td>Nick Jonas</td>

            <td>
              <a href="facebook.com">View Details</a>
            </td>
            <td>
              <button type="submit" className="btn custom-add">
                FORM 10
                <FontAwesomeIcon
                  icon={faArrowRight}
                  style={{ color: "#ffffff", marginLeft: "10px" }}
                />
              </button>
            </td>
          </tr>

          <tr>
            <td>4</td>
            <td>Peter Parker</td>

            <td>
              <a href="facebook.com">View Details</a>
            </td>
            <td>
              <button type="submit" className="btn custom-add">
                FORM 10
                <FontAwesomeIcon
                  icon={faArrowRight}
                  style={{ color: "#ffffff", marginLeft: "10px" }}
                />
              </button>
            </td>
          </tr>

          <tr>
            <td>5</td>
            <td>Harry Styles</td>

            <td>
              <a href="facebook.com">View Details</a>
            </td>
            <td>
              <button type="submit" className="btn custom-add">
                FORM 10
                <FontAwesomeIcon
                  icon={faArrowRight}
                  style={{ color: "#ffffff", marginLeft: "10px" }}
                />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  <div className="col-md-1">
    {/* Vertical line or divider*/}
    <div className="vertical-line"></div>
  </div>
  <div className="col-md-6 justify-content-center">
    <h2>Initiated Members</h2>
    <br />
    <div className="input-group mb-3">
      <input
        type="text"
        className="form-control form-control-sm"
        placeholder="Search"
      />
      <div className="input-group-append">
        <button type="button" className="filterbtn">
          <FontAwesomeIcon icon={faFilter} />
        </button>
      </div>
    </div>
    <br />
    <div className="table-responsive">
      <table className="table table-bordered-custom approved">
        <thead className="thead-custom">
          <tr>
            <th>#</th>
            <th>Applicant Name</th>
            <th>View</th>
            <th>Return</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>John Doe</td>
            <td>
              <a href="facebook.com">View Details</a>
            </td>
            <td>
              <button type="submit" className="btn custom-add">
                <FontAwesomeIcon
                  icon={faArrowLeft}
                  style={{ color: "#ffffff", marginRight: "8px" }}
                />
                Return
              </button>
            </td>
          </tr>

          <tr>
            <td>2</td>
            <td>Joe Alwyn</td>

            <td>
              <a href="facebook.com">View Details</a>
            </td>
            <td>
              <button type="submit" className="btn custom-add">
                <FontAwesomeIcon
                  icon={faArrowLeft}
                  style={{ color: "#ffffff", marginRight: "8px" }}
                />
                Return
              </button>
            </td>
          </tr>

          <tr>
            <td>3</td>
            <td></td>

            <td></td>
            <td></td>
          </tr>

          <tr>
            <td>4</td>
            <td></td>

            <td></td>
            <td></td>
          </tr>

          <tr>
            <td>5</td>
            <td></td>

            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>6</td>
            <td></td>

            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>7</td>
            <td></td>

            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>8</td>
            <td></td>

            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>9</td>
            <td></td>

            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>10</td>
            <td></td>

            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
    <div className="col-12 text-end" style={{ marginTop: "20px" }}>
      <Link to="/appform4">
        <button type="submit" className="btn custom">
          Next
        </button>
      </Link>
    </div>
    <br />
    <br />
  </div>
</div>;
