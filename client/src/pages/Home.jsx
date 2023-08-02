import { Link } from "react-router-dom";
import logo from "../img/logo.png";
import "../styles/base.css";
import "../styles/home.css";
import { useEffect, useState } from "react";
import axios from "axios";

function Home() {
  useEffect(() => {
    axios.get(`http://localhost:5000/initDatabase`);
  }, []);

  const [formData, setFormData] = useState({
    idNumber: "",
    password: "",
  });

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  const onChange = (e) => {
    setFormData((prev) => {
      let helper = { ...prev };

      helper[`${e.target.id}`] = e.target.value;

      return helper;
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const loginDetails = {
      idNumber: formData.idNumber,
      password: formData.password,
    };

    axios.post("http://localhost:5000/login", loginDetails).then((result) => {
      if (!result.data) {
        alert("Incorrect Credentials. Please try again.");
      } else if (result.data[0] === 1) {
        window.location.href = `/appstatus1/${result.data[1]}`;
        console.log(result.data[1]);
      } else if (result.data[0] === 0) {
        window.location.href = `/admincreate/`;
        console.log(result.data[1]);
      }

      console.log(result);
    });
  };

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
        <br />
        <Link to="/Login">
          <span>Already have an account?</span>
        </Link>
      </div>
    </div>
  );

}

export default Home;
