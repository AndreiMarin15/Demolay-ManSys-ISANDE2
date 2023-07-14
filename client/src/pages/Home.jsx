import { Link } from "react-router-dom";
import logo from "../img/logo.png";
import "../styles/base.css";
import "../styles/home.css";
import { useEffect } from "react";
import axios from "axios";

function Home() {
  useEffect(() => {
    axios.get(`http://localhost:5000/initDatabase`).then((respone) => {
      console.log(respone.data);
    });
  }, []);

  return (
    <div id="homelogo">
      <img src={logo} id="big" alt="DeMolay"></img>
      <h1>Welcome to DeMolay!</h1>

      <div id="homechild">
        <div class="widget-container">
          <p>
            For more than one hundred years, DeMolay has helped boys become men
            of outstanding character, through dedicated mentorships and unique,
            hands-on life-skill programs.
          </p>{" "}
        </div>

        <Link to="/About">
          <button class="btn btn-outline-warning" value="LEARN MORE">
            LEARN MORE
          </button>
        </Link>
        <Link to="/appform1">
          <button class="btn btn-primary" value="APPLY NOW">
            APPLY NOW
          </button>
        </Link>
        <Link to="/Login">
          <span>Already have an account?</span>
        </Link>
      </div>
    </div>
  );
}

export default Home;
