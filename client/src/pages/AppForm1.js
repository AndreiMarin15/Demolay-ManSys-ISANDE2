import { Link } from "react-router-dom";
import "../styles/base.css";
import "../styles/appform1.css";

function AppForm1() {
  return (
    <div id="container">
      <h1>Application</h1>
      <hr />

      <div id="child">
        <form id="application">
          <div className="grid">
            <div className="itemone">
              <label for="region" className="labels">
                Region
              </label>

              <select name="region" id="region" className="dropdown">
                <option>NCR</option>
                <option>CALABARZON</option>
                <option>MIMAROPA</option>
              </select>
            </div>

            <div class="itemtwo">
              <label for="chapter" className="labels">
                Chapter
              </label>

              <select name="chapter" id="chapter" className="dropdown">
                <option>Chapter One</option>
                <option>Chapter Two</option>
                <option>Chapter Three</option>
              </select>
            </div>
          </div>

          <Link to="/appform2">
            <button
              type="button"
              form="next"
              className="primary-btn"
              value="Next"
            >
              Next
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default AppForm1;
