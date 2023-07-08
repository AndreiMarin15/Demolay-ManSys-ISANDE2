import { Link } from "react-router-dom";
import "../styles/base.css";
import "../styles/appform5.css";
import { Component } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

function AdminCreate() {
  return (
    <div className="container container-fluid ">
      <div className="row">
        <div className="col-md-12">
          <h1>Create User</h1>
        </div>
      </div>

      <hr />
      <br />
      <form className="g-2" style={{ marginLeft: "30px" }}>
        <div className="row">
          <div className="col-md-4">
            <div className="row mb-3">
              <label
                for="lastName"
                className="col-md-4 col-form-label text-right"
              >
                User Last Name
              </label>
              <input
                class="form-control"
                id="lastName"
                type="text"
                placeholder="Last Name"
              />{" "}
            </div>
          </div>

          <div className="col-md-4">
            <div className="row mb-3">
              <label
                for="givenName"
                className="col-md-4 col-form-label text-right"
              >
                User Given Name
              </label>
              <input
                class="form-control"
                id="givenName"
                type="text"
                placeholder="Given Name"
              />{" "}
            </div>
          </div>

          <div className="col-md-4">
            <div className="row mb-3">
              <label
                for="middleName"
                className="col-md-4 col-form-label text-right"
              >
                User Middle Name
              </label>
              <input
                class="form-control"
                id="middleName"
                type="text"
                placeholder="Middle Name"
              />{" "}
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-4">
            <div className="row mb-3">
              <label
                for="userID"
                className="col-md-4 col-form-label text-right"
              >
                User ID
              </label>
              <input
                class="form-control"
                id="staffID"
                type="text"
                placeholder="User ID"
              />{" "}
            </div>
          </div>

          <div className="col-md-4">
            <div className="row mb-3">
              <label
                for="position"
                className="col-md-4 col-form-label text-right"
              >
                Position
              </label>
              <select
                name="position"
                id="position"
                className="dropdown"
                style={{ width: "auto", height: "100%" }}
              >
                <option>Advisory Council</option>
                <option>Master Mason</option>
                <option>Senior Demolay</option>
                <option>Admin Staff</option>
              </select>{" "}
            </div>
          </div>
        </div>
        <br />
        <div className="col-12 sub-btn">
          <Link to="/">
            <button type="submit" className="btn btn-primary">
              Create
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
}
export default AdminCreate;
