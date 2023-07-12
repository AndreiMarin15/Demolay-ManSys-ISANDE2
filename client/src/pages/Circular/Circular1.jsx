import { Link } from "react-router-dom";
import "../../styles/base.css";
import "../../styles/circular1.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBullhorn,
  faFilter,
  faEye,
  faCircleUser,
} from "@fortawesome/free-solid-svg-icons";
import { Component } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const megaphone = <FontAwesomeIcon icon={faBullhorn} />;

function Circular1() {
  return (
    <div className="container container-fluid ">
      <div className="row">
        <div className="col-md-12">
          <h1>Home</h1>
        </div>
      </div>

      <hr />

      <div className="row">
        <div className="col-md-2">
          {/* Content for the left column */}
          <div
            className="row justify-content-center"
            style={{
              marginTop: "10px",
              marginLeft: "60px",
            }}
          >
            <FontAwesomeIcon
              icon={faCircleUser}
              style={{ fontSize: "150px" }}
            />
            <div className="text-center">
              <h5 className="name">Bea Lim</h5>
              <small class="text-muted">
                Executive Director, Jose Abad Santos #1
              </small>
              <hr className="hori-line" />
            </div>
          </div>

          <div className="row" style={{ marginLeft: "60px" }}>
            <p>Circulars</p>
            <p>For Review</p>
            <p>Forms and Reports</p>
            <p>Directory</p>
          </div>
        </div>
        <div className="col-md-1">
          {/* Vertical line or divider */}
          <div className="vertical-line"></div>
        </div>
        <div
          className="col-md-9 justify-content-center"
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
          </div>

          <div
            className="row"
            style={{ marginTop: "20px", marginLeft: "50px" }}
          >
            <div className="col">
              <div class="list-group">
                <a
                  href="#"
                  class="list-group-item list-group-item-action "
                  aria-current="true"
                >
                  <div class="d-flex w-100 justify-content-end">
                    <small class="text-muted">
                      {" "}
                      <span className="green-circle"></span>Disseminated on
                      03/04/23
                    </small>
                  </div>
                  <h3 class="mb-1">Lorem Ipsum</h3>

                  <p class="text-muted">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                  <div class="d-flex w-100 justify-content-end">
                    <small class="view-btn">
                      <span style={{ margin: "5px" }}>
                        <FontAwesomeIcon icon={faEye} />
                      </span>
                      View
                    </small>
                  </div>
                </a>
                <a
                  href="#"
                  class="list-group-item list-group-item-action "
                  aria-current="true"
                >
                  <div class="d-flex w-100 justify-content-end">
                    <small class="text-muted">
                      {" "}
                      <span className="darkorange-circle"></span>For
                      Dissemination
                    </small>
                  </div>
                  <h3 class="mb-1">Lorem Ipsum</h3>

                  <p class="text-muted">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                  <div class="d-flex w-100 justify-content-end">
                    <small class="view-btn">
                      <span style={{ margin: "5px" }}>
                        <FontAwesomeIcon icon={faEye} />
                      </span>
                      View
                    </small>
                  </div>
                </a>
                <a
                  href="#"
                  class="list-group-item list-group-item-action "
                  aria-current="true"
                >
                  <div class="d-flex w-100 justify-content-end">
                    <small class="text-muted">
                      {" "}
                      <span className="darkorange-circle"></span>For
                      Dissemination
                    </small>
                  </div>
                  <h3 class="mb-1">Lorem Ipsum</h3>

                  <p class="text-muted">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                  <div class="d-flex w-100 justify-content-end">
                    <small class="view-btn">
                      <span style={{ margin: "5px" }}>
                        <FontAwesomeIcon icon={faEye} />
                      </span>
                      View
                    </small>
                  </div>
                </a>
                <a
                  href="#"
                  class="list-group-item list-group-item-action "
                  aria-current="true"
                >
                  <div class="d-flex w-100 justify-content-end">
                    <small class="text-muted">
                      {" "}
                      <span className="green-circle"></span>Disseminated on
                      03/04/23
                    </small>
                  </div>
                  <h3 class="mb-1">Lorem Ipsum</h3>

                  <p class="text-muted">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                  <div class="d-flex w-100 justify-content-end">
                    <small class="view-btn">
                      <span style={{ margin: "5px" }}>
                        <FontAwesomeIcon icon={faEye} />
                      </span>
                      View
                    </small>
                  </div>
                </a>
              </div>
            </div>
            <div className="col">
              <div class="list-group">
                <a
                  href="#"
                  class="list-group-item list-group-item-action "
                  aria-current="true"
                >
                  <div class="d-flex w-100 justify-content-end">
                    <small class="text-muted">
                      {" "}
                      <span className="darkorange-circle"></span>For
                      Dissemination
                    </small>
                  </div>
                  <h3 class="mb-1">Lorem Ipsum</h3>

                  <p class="text-muted">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                  <div class="d-flex w-100 justify-content-end">
                    <small class="view-btn">
                      <span style={{ margin: "5px" }}>
                        <FontAwesomeIcon icon={faEye} />
                      </span>
                      View
                    </small>
                  </div>
                </a>
                <a
                  href="#"
                  class="list-group-item list-group-item-action "
                  aria-current="true"
                >
                  <div class="d-flex w-100 justify-content-end">
                    <small class="text-muted">
                      {" "}
                      <span className="green-circle"></span>Disseminated on
                      03/04/23
                    </small>
                  </div>
                  <h3 class="mb-1">Lorem Ipsum</h3>

                  <p class="text-muted">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                  <div class="d-flex w-100 justify-content-end">
                    <small class="view-btn">
                      <span style={{ margin: "5px" }}>
                        <FontAwesomeIcon icon={faEye} />
                      </span>
                      View
                    </small>
                  </div>
                </a>
                <a
                  href="#"
                  class="list-group-item list-group-item-action "
                  aria-current="true"
                >
                  <div class="d-flex w-100 justify-content-end">
                    <small class="text-muted">
                      {" "}
                      <span className="green-circle"></span>Disseminated on
                      03/04/23
                    </small>
                  </div>
                  <h3 class="mb-1">Lorem Ipsum</h3>

                  <p class="text-muted">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                  <div class="d-flex w-100 justify-content-end">
                    <small class="view-btn">
                      <span style={{ margin: "5px" }}>
                        <FontAwesomeIcon icon={faEye} />
                      </span>
                      View
                    </small>
                  </div>
                </a>
                <a
                  href="#"
                  class="list-group-item list-group-item-action "
                  aria-current="true"
                >
                  <div class="d-flex w-100 justify-content-end">
                    <small class="text-muted">
                      {" "}
                      <span className="darkorange-circle"></span>For
                      Dissemination
                    </small>
                  </div>
                  <h3 class="mb-1">Lorem Ipsum</h3>

                  <p class="text-muted">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                  <div class="d-flex w-100 justify-content-end">
                    <small class="view-btn">
                      <span style={{ margin: "5px" }}>
                        <FontAwesomeIcon icon={faEye} />
                      </span>
                      View
                    </small>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Circular1;
