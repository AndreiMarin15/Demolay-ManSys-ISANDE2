import { Link } from "react-router-dom";
import "../styles/base.css";
import "../styles/appform3.css";
import { Component } from "react";

export default class AppForm3 extends Component {
  render() {
    return (
<div className="container container-fluid ">
      <div className="row">
        <div className="col-md-6">
          <h1>Application</h1>
        </div>

        <div className="col-md-6">
          <h1 className="position-absolute end-0"> [Chapter] </h1>
        </div>
      </div>
      <hr />

      <div className="row m-2">
        <p>Have you applied in any other DeMolay Chapter?</p>
      </div>

      <div className="row m-2">
        <div class="form-check form-check-inline reg-checkbox">
          <input
            class="form-check-input"
            type="checkbox"
            id="inlineCheckbox1"
            value="option1"
          />
          <label class="form-check-label" for="inlineCheckbox1">
            Yes
          </label>
        </div>
        <div class="form-check form-check-inline reg-checkbox">
          <input
            class="form-check-input"
            type="checkbox"
            id="inlineCheckbox2"
            value="option2"
          />
          <label class="form-check-label" for="inlineCheckbox2">
            No
          </label>
        </div>
      </div>

      <div className="row m-2">
        <p>Indicate the year, Chapter, and status.</p>
      </div>

      <form className="g-2">
        <div className="row m-2">
          <div className="col-md-3">
            <div className="row mb-3">
              <label
                for="inputChapter"
                className="col-md-4 col-form-label text-right"
              >
                Chapter
              </label>
              <select className="form-select form-control" id="inputChapter">
                <option>Chapter One</option>
                <option>Chapter Two</option>
                <option>Chapter Three</option>
              </select>
            </div>
          </div>

          <div className="col-md-3">
            <div className="row mb-3">
              <label
                for="chapYear"
                className="col-md-4 col-form-label text-right"
              >
                Year
              </label>
              <select className="form-select form-control" id="chapYear">
                <option>2022</option>
                <option>2021</option>
                <option>2020</option>
              </select>
            </div>
          </div>

          <div className="col-md-1">
            <div className="row mb-3">
              <label
                for="checkbox"
                className="col-md-4 col-form-label text-right"
              >
                Status:
              </label>
            </div>
          </div>
        </div>
      </form>

      <hr />
      <div className="row m-2">
        <p>
          List your relatives who may be a Freemason, DeMolay, or member of any
          Masonic appendant organization.
        </p>
      </div>

      <form className="g-2">
        <div className="row">
          <div className="col-md-4">
            <div className="row mb-3">
              <label
                for="inputEmail"
                className="col-md-4 col-form-label text-right"
              >
                Name
              </label>
              <input
                type="email"
                className="form-control"
                id="inputEmail"
                placeholder="Full Name"
              />
            </div>
          </div>

          <div className="col-md-4">
            <div className="row mb-3">
              <label
                for="inputFB"
                className="col-md-4 col-form-label text-right"
              >
                Relationship
              </label>
              <input
                type="text"
                className="form-control"
                id="inputFB"
                placeholder="i.e. Father"
              />
            </div>
          </div>

          <div className="col-md-4">
            <div className="row mb-3">
              <label
                for="inputnum"
                className="col-md-4 col-form-label text-right"
              >
                Lodge/Chapter
              </label>
              <input
                type="text"
                className="form-control"
                id="inputnum"
                placeholder="Lodge Name"
              />
            </div>
          </div>
        </div>
      </form>
      <hr />
      <div className="row m-2">
        <p>
          References: List at least 2 friends whom you have known for at least a
          year.
        </p>
      </div>

      <form className="g-2">
        <div className="row">
          <div className="col-md-4">
            <div className="row mb-3">
              <label
                for="inputEmail"
                className="col-md-4 col-form-label text-right"
              >
                Name
              </label>
              <input
                type="email"
                className="form-control"
                id="inputEmail"
                placeholder="Full Name"
              />
            </div>
          </div>

          <div className="col-md-2">
            <div className="row mb-3">
              <label
                for="inputFB"
                className="col-md-4 col-form-label text-right"
              >
                Age
              </label>
              <input
                type="number"
                className="form-control"
                id="inputFB"
                placeholder="23"
              />
            </div>
          </div>

          <div className="col-md-3">
            <div className="row mb-3">
              <label
                for="inputnum"
                className="col-md-4 col-form-label text-right"
              >
                Email
              </label>
              <input
                type="text"
                className="form-control"
                id="inputnum"
                placeholder="Email"
              />
            </div>
          </div>

          <div className="col-md-3">
            <div className="row mb-3">
              <label
                for="inputnum"
                className="col-md-4 col-form-label text-right"
              >
                Mobile No.
              </label>
              <input
                type="number"
                className="form-control"
                id="inputnum"
                placeholder="09178060641"
              />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-4">
            <div className="row mb-3">
              <label
                for="inputEmail"
                className="col-md-4 col-form-label text-right"
              >
                Name
              </label>
              <input
                type="email"
                className="form-control"
                id="inputEmail"
                placeholder="Full Name"
              />
            </div>
          </div>

          <div className="col-md-2">
            <div className="row mb-3">
              <label
                for="inputFB"
                className="col-md-4 col-form-label text-right"
              >
                Age
              </label>
              <input
                type="number"
                className="form-control"
                id="inputFB"
                placeholder="23"
              />
            </div>
          </div>

          <div className="col-md-3">
            <div className="row mb-3">
              <label
                for="inputnum"
                className="col-md-4 col-form-label text-right"
              >
                Email
              </label>
              <input
                type="text"
                className="form-control"
                id="inputnum"
                placeholder="Email"
              />
            </div>
          </div>

          <div className="col-md-3">
            <div className="row mb-3">
              <label
                for="inputnum"
                className="col-md-4 col-form-label text-right"
              >
                Mobile No.
              </label>
              <input
                type="number"
                className="form-control"
                id="inputnum"
                placeholder="09178060641"
              />
            </div>
          </div>
        </div>
        <hr />
      </form>

      <div className="row m-2">
        <p>Parent or Guardian</p>
      </div>

      <form className="g-2">
        <div className="row">
          <div className="col-md-3">
            <div className="row mb-3">
              <label
                for="inputEmail"
                className="col-md-4 col-form-label text-right"
              >
                Name
              </label>
              <input
                type="email"
                className="form-control"
                id="inputEmail"
                placeholder="Full Name"
              />
            </div>
          </div>

          <div className="col-md-3">
            <div className="row mb-3">
              <label
                for="inputFB"
                className="col-md-4 col-form-label text-right"
              >
                Relationship
              </label>
              <input
                type="number"
                className="form-control"
                id="inputFB"
                placeholder="i.e. Father"
              />
            </div>
          </div>

          <div className="col-md-3">
            <div className="row mb-3">
              <label
                for="inputnum"
                className="col-md-4 col-form-label text-right"
              >
                Email
              </label>
              <input
                type="text"
                className="form-control"
                id="inputnum"
                placeholder="Email"
              />
            </div>
          </div>

          <div className="col-md-3">
            <div className="row mb-3">
              <label
                for="inputnum"
                className="col-md-4 col-form-label text-right"
              >
                Mobile No.
              </label>
              <input
                type="number"
                className="form-control"
                id="inputnum"
                placeholder="09178060641"
              />
            </div>
          </div>
        </div>

        <div className="row position-relative">
          <div className="col-auto m-2">
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="checkbox"
                id="gridCheck"
              />
              <label className="form-check-label" for="gridCheck">
                We, the parent/guardian hereby grant our CONSENT and APPROVE our
                son/ward in joining DeMolay.
              </label>
            </div>
          </div>
        </div>
      </form>

      <div className="row">
        <div className="col-6">
          <Link to="/appform2">
            <button type="submit" className="btn btn-primary float-start">
              Back
            </button>
          </Link>
        </div>

        <div className="col-6">
          <Link to="/appform4">
            <button type="submit" className="btn btn-primary float-end">
              Next
            </button>
          </Link>
        </div>
      </div>
    </div>
    )
  }
}


