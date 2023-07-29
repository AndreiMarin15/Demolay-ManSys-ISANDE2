import { Link } from "react-router-dom";
import "../../styles/base.css";
import "../../styles/circular2.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBullhorn,
  faFilter,
  faEye,
  faCircleUser,
  faMagnifyingGlass,
  faFileLines,
  faAddressBook,
} from "@fortawesome/free-solid-svg-icons";
import { Component } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import MessagePopup from "./MessagePopup.jsx";

const megaphone = <FontAwesomeIcon icon={faBullhorn} />;

function MemberCircular2() {
  return (
    <div className="container container-fluid ">
      <div className="row">
        <div className="col-md-12">
          <h1>Home</h1>
        </div>
      </div>

      <hr />

      <div className="row">
        <div className="col-md-3">
          {/* Content for the left column */}
          <div
            className="row justify-content-center"
            style={{
              marginTop: "10px",
              marginLeft: "50px",
            }}
          >
            <FontAwesomeIcon
              icon={faCircleUser}
              style={{ fontSize: "150px" }}
            />
            <div className="text-center">
              <h5 className="name">Joey Cruz</h5>
              <small class="text-muted">
                Active DeMolay, Jose Abad Santos #1
              </small>
              <hr className="hori-line" />
            </div>
          </div>

          <div className="text-start" style={{ marginLeft: "100px" }}>
            <Link to="/cscircular">
              <button
                className="btn-text"
                type="button"
                style={{ border: "0" }}
              >
                <span>
                  <FontAwesomeIcon
                    icon={faBullhorn}
                    style={{ marginRight: "8px" }}
                  />
                </span>
                Circulars
              </button>
            </Link>
            <br />
            <button className="btn-text" type="button" style={{ border: "0" }}>
              <span>
                <FontAwesomeIcon
                  icon={faMagnifyingGlass}
                  style={{ marginRight: "8px" }}
                />
              </span>
              For Review
            </button>
            <br />
            <button className="btn-text" type="button" style={{ border: "0" }}>
              <span>
                <FontAwesomeIcon
                  icon={faFileLines}
                  style={{ marginRight: "8px" }}
                />
              </span>
              Forms and Reports
            </button>
            <br />
            <button className="btn-text" type="button" style={{ border: "0" }}>
              <span>
                <FontAwesomeIcon
                  icon={faAddressBook}
                  style={{ marginRight: "8px" }}
                />
              </span>
              Directory
            </button>
          </div>
        </div>
        <div className="col-md-1">
          {/* Vertical line or divider */}
          <div className="vertical-line"></div>
        </div>
        <div
          className="col-md-8 justify-content-center"
          style={{ marginLeft: "-60px" }}
        >
          <div className="row">
            <div className="col">
              <h1>
                <span>
                  <FontAwesomeIcon
                    icon={faBullhorn}
                    style={{ marginRight: "15px" }}
                  />
                </span>
                Circulars
              </h1>
            </div>

            <div className="col" style={{ marginTop: "15px" }}>
              <div className="d-flex justify-content-end mb-2">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search"
                />
                <div className="input-group-append">
                  <button type="button" className="filterbtn">
                    <FontAwesomeIcon icon={faFilter} />
                  </button>
                </div>
              </div>
            </div>

            <div
              className="row"
              style={{ marginTop: "20px", marginLeft: "20px" }}
            >
              <div className="col">
                <div class="container-fluid">
                  <div class="d-flex w-100 justify-content-end">
                    <small class="text-muted"> Today | 03:05 PM</small>
                  </div>
                  <h3 class="mb-1">Lorem Ipsum</h3>
                  <br />
                  <p class="text-muted">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Pharetra massa massa ultricies mi quis. Risus in
                    hendrerit gravida rutrum. Risus viverra adipiscing at in
                    tellus integer feugiat scelerisque varius. Nunc pulvinar
                    sapien et ligula. Ultrices gravida dictum fusce ut. Nunc id
                    cursus metus aliquam eleifend mi. A erat nam at lectus urna.
                    Sit amet nulla facilisi morbi tempus iaculis. Bibendum enim
                    facilisis gravida neque convallis a cras semper. Arcu risus
                    quis varius quam quisque id. Nunc mi ipsum faucibus vitae
                    aliquet.
                    <br />
                    <br />
                    Pretium fusce id velit ut tortor pretium viverra. Quisque
                    egestas diam in arcu cursus euismod quis viverra. Cursus
                    mattis molestie a iaculis at. Nunc sed augue lacus viverra
                    vitae congue eu consequat. Suspendisse in est ante in nibh.
                    Nibh ipsum consequat nisl vel. Pharetra magna ac placerat
                    vestibulum lectus mauris ultrices. Volutpat lacus laoreet
                    non curabitur gravida arcu. Malesuada fames ac turpis
                    egestas maecenas pharetra convallis posuere. Pulvinar proin
                    gravida hendrerit lectus. Sed libero enim sed faucibus
                    turpis in.
                  </p>

                  <hr className="horizontal-line" />
                  <div class="container-fluid">
                    <label>
                      <input className="form-check-input" type="checkbox" />I
                      hereby acknowledge that I have read and understood the
                      circular sent on April 13, 2023.
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MemberCircular2;
