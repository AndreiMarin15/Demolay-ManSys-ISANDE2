import { Link } from "react-router-dom";
import logo from "../img/logo.png";
import "../styles/base.css";
import "../styles/home.css";


function Home() {
	return (
		<div id="container">
			<img src={logo}></img>
			<h1>Welcome to DeMolay!</h1>
			
			<div id="child">
				<form id="login">
				<label for="idnum">ID Number</label>
				<input type="number" id="idnum" name="idnum"/>
				<br></br>
				<label for="pass">Password</label>
				<input type="password" id="pass" name="pass"/>
				</form>

				<button type="submit" form="login" value="LOGIN"> 
					LOGIN 
				</button>
			</div>
		</div>
	);
}

export default Home;
