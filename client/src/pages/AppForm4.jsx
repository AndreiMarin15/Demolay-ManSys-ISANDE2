import { Link } from "react-router-dom";
import "../styles/base.css";
import "../styles/appform3.css";
import { Component } from "react";

export default class Appform4 extends Component {
  render() {
    return (
      <div className="container container-fluid ">
      <div className="row">
        <div className="col-md-6">
          <h1>Review Application</h1>
        </div>

        <div className="col-md-6">
          <h1 className="position-absolute end-0"> [Chapter] </h1>
        </div>
      </div>
      <hr />

      <form className="g-2">
        <div className="row">
          <div className="col-md-6">
            <div className="row mb-3">
              <label
                for="inputLast"
                className="col-md-4 col-form-label text-right"
              >
                Last Name:
              </label>
              <input
                type="text"
                className="form-control"
                id="inputLast"
                placeholder="Last Name"
              />
            </div>
          </div>

          <div className="col-md-6">
            <div className="row mb-3">
              <label
                for="uploadID"
                className="col-md-4 col-form-label text-right"
              >
                ID (2 x 2) Photo:
              </label>
              <input type="file" className="form-control" id="uploadID" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="row mb-3">
              <label
                for="inputGiven"
                className="col-md-4 col-form-label text-right"
              >
                Given Name:
              </label>
              <input
                type="text"
                className="form-control"
                id="inputGiven"
                placeholder="Given Name"
              />
            </div>
          </div>
        </div>
        <div className="row mb-4">
          <div className="col-md-6">
            <div className="row mb-3">
              <label
                for="inputMiddle"
                className="col-md-4 col-form-label text-right"
              >
                Middle Name:
              </label>
              <input
                type="text"
                className="form-control"
                id="inputMiddle"
                placeholder="Middle Name"
              />
            </div>
          </div>
        </div>
        <div className="row mb-2">
          <h4>Address Details</h4>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="row mb-3">
              <label
                for="inputStreet"
                className="col-md-4 col-form-label text-right"
              >
                Street Address
              </label>
              <input
                type="text"
                className="form-control"
                id="inputStreet"
                placeholder="1234 Main St"
              />
            </div>
          </div>

          <div className="col-md-3">
            <div className="row mb-3">
              <label
                for="inputCity"
                className="col-md-4 col-form-label text-right"
              >
                City
              </label>
              <select
                className="form-select form-control"
                id="inputCity"
                placeholder="New York City"
              >
                <option>Manila</option>
                <option>Muntinlupa</option>
                <option>Makati</option>
              </select>
            </div>
          </div>

          <div className="col-md-3">
            <div className="row mb-3">
              <label
                for="inputCity"
                className="col-md-4 col-form-label text-right"
              >
                Zip Code{" "}
              </label>
              <select
                className="form-select form-control"
                id="inputCity"
                placeholder="New York City"
              >
                <option>Manila</option>
                <option>Muntinlupa</option>
                <option>Makati</option>
              </select>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="row mb-3">
              <label
                for="inputApt"
                className="col-md-4 col-form-label text-right"
              >
                Apt, suite, etc (optional)
              </label>
              <input
                type="text"
                className="form-control"
                id="inputAddress2"
                placeholder="Apartment, studio, or floor"
              />
            </div>
          </div>

          <div className="col-md-3">
            <div className="row mb-3">
              <label
                for="inputProvince"
                className="col-md-4 col-form-label text-right"
              >
                State/Province
              </label>
              <select className="form-select form-control" id="inputBrgy">
                <option>Laguna</option>
                <option>Metro Manila</option>
                <option>Pampanga</option>
              </select>
            </div>
          </div>
        </div>
        <div className="row mb-4">
          <div className="col-md-6">
            <div className="row mb-3">
              <label
                for="inputBrgy"
                className="col-md-4 col-form-label text-right"
              >
                Barangay/District
              </label>
              <select className="form-select form-control" id="inputBrgy">
                <option>Malate</option>
                <option>Platero</option>
                <option>Tagapo</option>
              </select>
            </div>
          </div>

          <div className="col-md-3">
            <div className="row mb-3">
              <label
                for="inputRegion"
                className="col-md-4 col-form-label text-right"
              >
                Region{" "}
              </label>
              <select className="form-select form-control" id="inputRegion">
                <option>NCR</option>
                <option>Region IV</option>
                <option>Region V</option>
              </select>
            </div>
          </div>
        </div>
        <div className="row mb-2">
          <h4>Personal Details</h4>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="row mb-3">
              <label
                for="inputEmail"
                className="col-md-4 col-form-label text-right"
              >
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="inputEmail"
                placeholder="Email"
              />
            </div>
          </div>

          <div className="col-md-5">
            <div className="row mb-3">
              <label
                for="inputFB"
                className="col-md-4 col-form-label text-right"
              >
                Facebook Name
              </label>
              <input
                type="text"
                className="form-control"
                id="inputFB"
                placeholder="Facebook"
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
                for="inputBday"
                className="col-md-4 col-form-label text-right"
              >
                Birthdate
              </label>
              <input type="date" className="form-control" id="inputBday" />
            </div>
          </div>

          <div className="col-md-5">
            <div className="row mb-3">
              <label
                for="inputBirthplace"
                className="col-md-4 col-form-label text-right"
              >
                Birthplace
              </label>
              <input
                type="text"
                className="form-control"
                id="inputBirthplace"
                placeholder="Olongapo, Zambales"
              />
            </div>
          </div>

          <div className="col-md-3">
            <div className="row mb-3">
              <label
                for="inputReligion"
                className="col-md-4 col-form-label text-right"
              >
                Religion
              </label>
              <select
                className="form-select form-control"
                id="inputReligion"
                placeholder="Select"
              >
                <option>Christian</option>
                <option>Roman Catholic</option>
                <option>...</option>
              </select>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="row mb-3">
              <label
                for="inputSchool"
                className="col-md-4 col-form-label text-right"
              >
                Current School
              </label>
              <input
                type="text"
                className="form-control"
                id="inputSchool"
                placeholder="De La Salle University"
              />
            </div>
          </div>

          <div className="col-md-5">
            <div className="row mb-3">
              <label
                for="inputCourse"
                className="col-md-4 col-form-label text-right"
              >
                Level/Course
              </label>
              <input
                type="text"
                className="form-control"
                id="inputCourse"
                placeholder="BS Information Systems"
              />
            </div>
          </div>

          <div className="col-md-3">
            <div className="row mb-3">
              <label
                for="inputCont"
                className="col-sm-4 col-form-label text-right"
              >
                Contact No.
              </label>
              <input
                type="text"
                className="form-control"
                id="inputCont"
                placeholder="8954061"
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="row mb-3">
            <label
              for="schoolAdd"
              className="col-md-2 col-form-label text-right"
            >
              School Address
            </label>
            <input
              type="text"
              className="form-control"
              id="schoolAdd"
              placeholder="1004 Malate Manila"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="row mb-3">
              <label
                for="inputHobbies"
                className="col-md-4 col-form-label text-right"
              >
                Hobbies
              </label>
              <input type="text" className="form-control" id="inputHobbies" />
            </div>
          </div>

          <div className="col-md-6">
            <div className="row mb-3">
              <label
                for="inputInterests"
                className="col-md-4 col-form-label text-right"
              >
                Interests{" "}
              </label>
              <input type="text" className="form-control" id="inputInterests" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="row mb-3">
            <label for="list" className="col-md-2 col-form-label text-right">
              List your Clubs/Organizations/Groups
            </label>
            <input type="text" className="form-control" id="inputHobbies" />
          </div>
        </div>
      </form>

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
      </form>

      <div className="row">
        <p className="warning-msg">
          Please ENSURE that all details for submission are ACCURATE. You will
          no longer be able to modify the details once submitted.
        </p>
      </div>
      <div className="col-12 text-center">
        <Link to="/appform5">
          <button type="submit" className="btn btn-primary">
            SUBMIT
          </button>
        </Link>
      </div>
    </div>
    )
  }
}

