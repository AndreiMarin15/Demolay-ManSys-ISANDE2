import { Link } from "react-router-dom";
import "../styles/base.css";
import "../styles/appform1.css"

function AppForm1() {
    return (
        <div id="container">
            <h1>Application</h1>
            <hr/>

            <div id="child">
                <form id="application">
                    <div>
                        <label for="region">Region</label>
                   
                        <select name="region" id="region" class="dropdown">
                            <option>NCR</option>
                            <option>CALABARZON</option>
                            <option>MIMAROPA</option>
                        </select>
                  
                        <label for="chapter">Chapter</label>
                    
                        <select name="chapter" id="chapter" class="dropdown">
                            <option>Chapter One</option>
                            <option>Chapter Two</option>
                            <option>Chapter Three</option>
                        </select>
                    </div>

                    <Link to="/appform2">
                    <button type="button" form="next" id="primary-btn" value="Next">
						Next 
                    </button>
                    </Link>


                </form>
            </div>
        </div>
    )
}

export default AppForm1;