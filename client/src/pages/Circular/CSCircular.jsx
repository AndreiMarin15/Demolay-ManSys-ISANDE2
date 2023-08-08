import { Link, useLocation, useNavigate } from "react-router-dom";
import "../../styles/base.css";
import "../../styles/cscircular.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBullhorn,
  faFilter,
  faEye,
  faCircleUser,
  faMagnifyingGlass,
  faFileLines,
  faAddressBook,
  faPhoneSquare
} from "@fortawesome/free-solid-svg-icons";
import { Component } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const megaphone = <FontAwesomeIcon icon={faBullhorn} />;

function CSCircular() {
  const location = useLocation();
  const navigate = useNavigate();

  const { scribeId } = useParams();
  const [user, setUser] = useState({});
  const [chapter, setChapter] = useState({});
  const [circulars, setCirculars] = useState({
    circulars: [],
    refresh: 0,
  });

  useEffect(() => {
    const fetchData = async () => {
      const user = await axios.get("http://localhost:5000/getCurrentUser");
      const chapter = await axios.get(
        `http://localhost:5000/getChapterByID/${user.data.chapterId}`
      );
      const circs = user.data._id
        ? await axios.get(
            `http://localhost:5000/getCircularsByUser/${user.data._id}`
          )
        : await axios.get(`http://localhost:5000/getCirculars`);

      setUser(user.data);
      setChapter(chapter.data);
      setCirculars({
        circulars: circs.data,
      });
      console.log(circs.data);
      console.log(user.data._id);
    };

    fetchData();
  }, []);

  const handleCircularClick = (circular) => {
    window.location.href = `/cscircular2/${user._id}/${circular._id}`;
  };
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
              <h5 className="name">
                {user.givenName} {user.lastName}
              </h5>
              <small class="text-muted">Scribe, {chapter.name}</small>
              <hr className="hori-line" />
            </div>
          </div>

          <div className="text-start" style={{ marginLeft: "100px" }}>
            <button className="btn-text" type="button" style={{ border: "0" }}>
              <span>
                <FontAwesomeIcon
                  icon={faBullhorn}
                  style={{ marginRight: "8px" }}
                />
              </span>
              Circulars
            </button>
            <br />
            <button
              className="btn-text"
              type="button"
              style={{ border: "0" }}
              onClick={() => {
                window.location.href = `/csappinprogress/${scribeId}`;
              }}
            >
              <span>
                <FontAwesomeIcon
                  icon={faMagnifyingGlass}
                  style={{ marginRight: "8px" }}
                />
              </span>
              For Review
            </button>
            <br />
            <button
              className="btn-text"
              type="button"
              style={{ border: "0" }}
              onClick={() => {
                window.location.href = `/csapp1/${scribeId}`;
              }}
            >
              <span>
                <FontAwesomeIcon
                  icon={faMagnifyingGlass}
                  style={{ marginRight: "8px" }}
                />
              </span>
              Approve Membership
            </button>
            <br />
            
            <button className="btn-text" type="button" style={{ border: "0" }} onClick={( ) => {window.location.href = `/setMeeting/${scribeId}`}}>
              <span>
                <FontAwesomeIcon
                  icon={faPhoneSquare}
                  style={{ marginRight: "8px" }}
                />
              </span>
              Meetings
            </button>

            <button
              className="btn-text"
              type="button"
              style={{ border: "0" }}
              onClick={() => {
                navigate("/turnoverdashboardscribe", {
                  state: {
                    userData: {
                      userID: user._id,
                      name: user.givenName + " " + user.lastName,
                      chapterID: user.chapterId,
                    },
                    chapterData: chapter,
                  },
                });
              }}
            >
              <span>
                <FontAwesomeIcon
                  icon={faFileLines}
                  style={{ marginRight: "8px" }}
                />
              </span>
              Forms and Reports
            </button>


            <br />
            <button
              className="btn-text"
              type="button"
              style={{ border: "0" }}
              onClick={() => {
                navigate("/mychapter", {
                  state: {
                    scribeID: scribeId,
                    userData: user,
                    chapterData: chapter,
                  },
                });
              }}
            >
              <span>
                <FontAwesomeIcon
                  icon={faAddressBook}
                  style={{ marginRight: "8px" }}
                />
              </span>
              Chapter Directory
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
          </div>

          <div
            className="row"
            style={{ marginTop: "10px", marginLeft: "30px" }}
          >
            <div className="col-md-1">
              <h4>All</h4>
            </div>
            <div className="col-md-1">
              <h4>Unread</h4>
            </div>
            <div className="col-md-1">
              <h4>Read</h4>
            </div>
          </div>

          <div
            className="row"
            style={{ marginTop: "10px", marginLeft: "20px" }}
          >
            <div className="col">
              <div class="list-group">
                {/*ONE ROW STARTS HERE */}
                {circulars.circulars.map(function (circular) {
                  return (
                    <>
                      <div
                        className="row"
                        key={circular._id}
                        onClick={() => {
                          handleCircularClick(circular);
                        }}
                      >
                        <div className="col-md-1 date-time">
                          <p className="circ-date">
                            <b>{circular.disseminatedDate}</b>
                          </p>
                        </div>
                        <div className="col-md-11">
                          <h3 class="mb-1 circ-bold">{circular.subject}</h3>
                          <p class="text-muted">
                            <b>
                              {circular.circularText.length > 100
                                ? circular.circularText.slice(0, 100) + "..."
                                : circular.circularText}
                            </b>
                          </p>
                        </div>
                      </div>
                      <div class="d-flex w-100 justify-content-end">
                        <small class="view-btn">
                          <span style={{ margin: "5px" }}>
                            <FontAwesomeIcon icon={faEye} />
                          </span>
                          View
                        </small>
                      </div>
                    </>
                  );
                })}
                {/*ONE ROW ENDS HERE */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CSCircular;
