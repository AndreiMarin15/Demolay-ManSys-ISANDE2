import { Link, useLocation, useNavigate } from "react-router-dom";
import "../../styles/base.css";
import "../../styles/Turnover.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";

function TurnoverHR1() {
  const location = useLocation();
  const navigate = useNavigate();
  const prevPageProps = location.state;

  const [formData, setFormData] = useState({
    term: "",
    year: "",
    senBook: 0,
    crown: 0,
    blackRobes: 0,
    whiteRobes: 0,
    altarCloth: 0,
    bible: 0,
    candleStands: 0,
    candleLights: 0,
    banner: 0,
    charterLT: 0,
    ballotBox: 0,
    scribeNotebook: 0,
    treasNotebook: 0,
  });

  useEffect(() => {
    if (prevPageProps.formData.assetsID !== "") {
      setFormData({
        ...formData,

        assetsID: prevPageProps.formData.assetsID,
        term: prevPageProps.formData.term,
        year: prevPageProps.formData.year,
        senBook: prevPageProps.formData.senBook,
        crown: prevPageProps.formData.crown,
        blackRobes: prevPageProps.formData.blackRobes,
        whiteRobes: prevPageProps.formData.whiteRobes,
        altarCloth: prevPageProps.formData.altarCloth,
        bible: prevPageProps.formData.bible,
        candleStands: prevPageProps.formData.candleStands,
        candleLights: prevPageProps.formData.candleLights,
        banner: prevPageProps.formData.banner,
        charterLT: prevPageProps.formData.charterLT,
        ballotBox: prevPageProps.formData.ballotBox,
        scribeNotebook: prevPageProps.formData.scribeNotebook,
        treasNotebook: prevPageProps.formData.treasNotebook,

        advisoryCouncilChairman: prevPageProps.formData.advisoryCouncilChairman,
        statusAdvisoryCouncilChairman:
          prevPageProps.formData.statusAdvisoryCouncilChairman,
        dateSignedAdvisoryCouncilChairman:
          prevPageProps.formData.dateSignedAdvisoryCouncilChairman,
        chapterAdvisor: prevPageProps.formData.chapterAdvisor,
        statusChapterAdvisor: prevPageProps.formData.statusChapterAdvisor,
        dateSignedChapterAdvisor:
          prevPageProps.formData.dateSignedChapterAdvisor,
      });
    }
    console.log(formData);
  }, []);

  const onChange = (e) => {
    setFormData((prev) => {
      let helper = { ...prev };

      helper[`${e.target.id}`] = +e.target.value;

      return helper;
    });
  };

  const handleNextButtonClick = () => {
    navigate("/turnoverhr2", {
      state: {
        ...prevPageProps,
        formData: formData,
      },
    });
  };

  return (
    <div className="container">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h1>
          Report on Historical Records, Official Files and Assets, and
          Properties
        </h1>
        <Link to="">
          <button type="submit" form="submit" className="primary-btn">
            SAVE AND COMPLETE LATER
          </button>
        </Link>
      </div>

      <hr />

      <div className="d-flex justify-content-center align-items-center mb-3">
        <p>
          This is to certify that all Historical Records, Official Files and
          Assets, and Properties of <u> Manila Chapter </u> listed below have
          been formally turned over to the following term:
        </p>
      </div>
      <div className="row">
        {/* First Column */}
        <h4>
          <u> Items: </u>
        </h4>
        <p>Indicate the quantity for the following items:</p>

        <div className="col-md-3">
          <div className="row align-items-center mt-3">
            <div className="col-md-6">
              <div style={{ display: "flex", alignItems: "center" }}>
                Sentinel Book
              </div>
            </div>
            <div className="col-md-5">
              <div style={{ display: "flex" }}>
                <input
                  type="number"
                  className="form-control"
                  id="senBook"
                  value={formData.senBook}
                  disabled={prevPageProps.userData.position !== "Scribe"}
                  onChange={onChange}
                />
              </div>
            </div>
          </div>

          <div className="row align-items-center mt-3">
            <div className="col-md-6">
              <div style={{ display: "flex", alignItems: "center" }}>
                Crown of Youth
              </div>
            </div>
            <div className="col-md-5">
              <div style={{ display: "flex" }}>
                <input
                  type="number"
                  className="form-control"
                  id="crown"
                  value={formData.crown}
                  disabled={prevPageProps.userData.position !== "Scribe"}
                  onChange={onChange}
                />
              </div>
            </div>
          </div>

          <div className="row align-items-center mt-3">
            <div className="col-md-6">
              <div style={{ display: "flex", alignItems: "center" }}>
                Black Robes
              </div>
            </div>
            <div className="col-md-5">
              <div style={{ display: "flex" }}>
                <input
                  type="number"
                  className="form-control"
                  id="blackRobes"
                  value={formData.blackRobes}
                  disabled={prevPageProps.userData.position !== "Scribe"}
                  onChange={onChange}
                />
              </div>
            </div>
          </div>

          <div className="row align-items-center mt-3">
            <div className="col-md-6">
              <div style={{ display: "flex", alignItems: "center" }}>
                White Robes
              </div>
            </div>
            <div className="col-md-5">
              <div style={{ display: "flex" }}>
                <input
                  type="number"
                  className="form-control"
                  id="whiteRobes"
                  value={formData.whiteRobes}
                  disabled={prevPageProps.userData.position !== "Scribe"}
                  onChange={onChange}
                />
              </div>
            </div>
          </div>

          <div className="row align-items-center mt-3">
            <div className="col-md-6">
              <div style={{ display: "flex", alignItems: "center" }}>
                Altar Cloth
              </div>
            </div>
            <div className="col-md-5">
              <div style={{ display: "flex" }}>
                <input
                  type="number"
                  className="form-control"
                  id="altarCloth"
                  value={formData.altarCloth}
                  disabled={prevPageProps.userData.position !== "Scribe"}
                  onChange={onChange}
                />
              </div>
            </div>
          </div>

          <div className="row align-items-center mt-3">
            <div className="col-md-6">
              <div style={{ display: "flex", alignItems: "center" }}>
                Holy Bible
              </div>
            </div>
            <div className="col-md-5">
              <div style={{ display: "flex" }}>
                <input
                  type="number"
                  className="form-control"
                  id="bible"
                  value={formData.bible}
                  disabled={prevPageProps.userData.position !== "Scribe"}
                  onChange={onChange}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Second Column */}

        <div className="col-md-5">
          <div className="row align-items-center mt-3">
            <div className="col-md-7">
              <div style={{ display: "flex", alignItems: "center" }}>
                Candle Stands
              </div>
            </div>
            <div className="col-md-3">
              <div style={{ display: "flex" }}>
                <input
                  type="number"
                  className="form-control"
                  id="candleStands"
                  value={formData.candleStands}
                  disabled={prevPageProps.userData.position !== "Scribe"}
                  onChange={onChange}
                />
              </div>
            </div>
          </div>

          <div className="row align-items-center mt-3">
            <div className="col-md-7">
              <div style={{ display: "flex", alignItems: "center" }}>
                Candles/Light bulbs
              </div>
            </div>
            <div className="col-md-3">
              <div style={{ display: "flex" }}>
                <input
                  type="number"
                  className="form-control"
                  id="candleLights"
                  value={formData.candleLights}
                  disabled={prevPageProps.userData.position !== "Scribe"}
                  onChange={onChange}
                />
              </div>
            </div>
          </div>

          <div className="row align-items-center mt-3">
            <div className="col-md-7">
              <div style={{ display: "flex", alignItems: "center" }}>
                Chapter Banner
              </div>
            </div>
            <div className="col-md-3">
              <div style={{ display: "flex" }}>
                <input
                  type="number"
                  className="form-control"
                  id="banner"
                  value={formData.banner}
                  disabled={prevPageProps.userData.position !== "Scribe"}
                  onChange={onChange}
                />
              </div>
            </div>
          </div>

          <div className="row align-items-center mt-3">
            <div className="col-md-7">
              <div style={{ display: "flex", alignItems: "center" }}>
                Framed Charter/Letters Temporary
              </div>
            </div>
            <div className="col-md-3">
              <div style={{ display: "flex" }}>
                <input
                  type="number"
                  className="form-control"
                  id="charterLT"
                  value={formData.charterLT}
                  disabled={prevPageProps.userData.position !== "Scribe"}
                  onChange={onChange}
                />
              </div>
            </div>
          </div>

          <div className="row align-items-center mt-3">
            <div className="col-md-7">
              <div style={{ display: "flex", alignItems: "center" }}>
                Ballot Box
              </div>
            </div>
            <div className="col-md-3">
              <div style={{ display: "flex" }}>
                <input
                  type="number"
                  className="form-control"
                  id="ballotBox"
                  value={formData.ballotBox}
                  disabled={prevPageProps.userData.position !== "Scribe"}
                  onChange={onChange}
                />
              </div>
            </div>
          </div>

          <div className="row align-items-center mt-3">
            <div className="col-md-7">
              <div style={{ display: "flex", alignItems: "center" }}>
                Scribe Notebook
              </div>
            </div>
            <div className="col-md-3">
              <div style={{ display: "flex" }}>
                <input
                  type="number"
                  className="form-control"
                  id="scribeNotebook"
                  value={formData.scribeNotebook}
                  disabled={prevPageProps.userData.position !== "Scribe"}
                  onChange={onChange}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Button */}

      <div className="d-flex justify-content-end mt-3">
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
}

export default TurnoverHR1;
