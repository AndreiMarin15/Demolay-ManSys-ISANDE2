import { Link } from "react-router-dom";
import logo from "../img/logo.png";
import "../styles/base.css";
import "../styles/home.css";

function Home() {
  return (
    <div id="homelogo">
      <img src={logo} id="big" alt="DeMolay"></img>
      <h1>Welcome to DeMolay!</h1>

      <div id="homechild">
        <div className="widget-container">
          <p>
            For more than one hundred years, DeMolay has helped boys become men
            of outstanding character, through dedicated mentorships and unique,
            hands-on life-skill programs.
          </p>{" "}
        </div>

        <Link to="https://demolay.ph/what-is-demolay/">
          <button className="btn btn-outline-warning" value="LEARN MORE">
            LEARN MORE
          </button>
        </Link>
        <Link to="/appform1">
          <button className="btn btn-primary" value="APPLY NOW">
            APPLY NOW
          </button>
        </Link>
        <br />
        <Link to="/Login">
          <span>Already have an account?</span>
        </Link>
      </div>
    </div>
  );
}

export default Home;
