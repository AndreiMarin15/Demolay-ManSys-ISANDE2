import { Link } from "react-router-dom";
import logo from "../img/logo.png";
import "../styles/base.css";
import "../styles/home.css";

function Home() {
  return (
    <div id="homelogo">
      <img src={logo} id="big"></img>
      <h1>Welcome to DeMolay!</h1>

      <div id="homechild">
        <form id="login">
          <label for="idnum">ID Number</label>
          <input type="text" id="idnum" name="idnum" />
          <br></br>
          <label for="pass">Password</label>
          <input type="password" id="pass" name="pass" />
        </form>

        <Link to="/appform1">
          <button type="submit" form="login" class="primary-btn" value="LOGIN">
            LOGIN
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
