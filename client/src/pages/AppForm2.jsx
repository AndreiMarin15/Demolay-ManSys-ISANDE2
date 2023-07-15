import { useParams } from "react-router-dom";
import "../styles/base.css";
import "../styles/appform2.css";
import axios from "axios";
import { useEffect, useState } from "react";


const API_REGION = "https://psgc.gitlab.io/api/regions/";
const API_PROVINCE = "https://psgc.gitlab.io/api/provinces/";
const API_CITY = "https://psgc.gitlab.io/api/cities-municipalities/";

function Appform2() {
  const [photoData, setPhoto] = useState({
    photo: "",
  });

  const [formData, setFormData] = useState({
    cities: [],
    provinces: [],
    regions: [],
    religions: [],
    years: [],
    chapters: [],

    lastName: "",
    givenName: "",
    middleName: "",

    streetAddress: "",
    apt: "",
    brgy: "",
    city: "",
    province: "",
    memberRegion: "",
    zipCode: "",

    email: "",
    birthdate: "",
    currentSchool: "",
    facebook: "",
    birthplace: "",
    course: "",
    mobile: "",
    religion: "",
    phone: "",

    schoolAddress: "",
    hobbies: "",
    interests: "",
    clubs: "",

    appliedInAnotherChapter: false,
    chapterApplied: "",
    yearApplied: 0,
    status: "",

    relativeName: "",
    relationship: "",
    lodge: "",

    reference1Name: "",
    reference1Age: 0,
    reference1Email: "",
    reference1Mobile: "",

    reference2Name: "",
    reference2Age: 0,
    reference2Email: "",
    reference2Mobile: "",

    parentName: "",
    parentRelationship: "",
    parentEmail: "",
    parentMobile: "",
    parentApproved: false,
  });

  const [selectedRegion, setSelectedRegion] = useState("");
  const [selectedProvince, setSelectedProvince] = useState("");
  const [provincesByRegion, setProvincesByRegion] = useState([]);
  const [citiesByProvince, setCitiesByProvince] = useState([]);

  let { applicationId } = useParams();

  useEffect(() => {
    fetchData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchData = async () => {
    try {
      const [regionsResponse, provincesResponse, citiesResponse] =
        await Promise.all([
          axios.get(API_REGION),
          axios.get(API_PROVINCE),
          axios.get(API_CITY),
        ]);

      setFormData({
        ...formData,

        regions: regionsResponse.data,
        provinces: provincesResponse.data.sort((a,b) => a.name.localeCompare(b.name)),
        cities: citiesResponse.data.sort((a,b) => a.name.localeCompare(b.name)),
      });

      console.log(
        formData.regions,
        formData.provinces,
        formData.cities
      );
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleRegionChange = (e) => {
    const regionId = e.target.value;
    setFormData({
      ...formData,
      memberRegion: regionId,
    });
    setSelectedRegion(regionId);

    const filteredProvinces = formData.provinces.filter(
      (province) => province.regionCode === regionId
    );
    setProvincesByRegion(filteredProvinces);

    // Reset selected province and cities when region changes
    setSelectedProvince("");
    setCitiesByProvince([]);

    // If no provinces in the selected region, filter cities by region
    if (filteredProvinces.length === 0) {
      const filteredCitiesByRegion = formData.cities.filter(
        (city) => city.regionCode === regionId
      );
      setCitiesByProvince(filteredCitiesByRegion);
    }
  };

  const handleProvinceChange = (e) => {
    const provinceId = e.target.value;
    setFormData({
      ...formData,
      province: provinceId,
    });
    setSelectedProvince(provinceId);

    const filteredCities = formData.cities.filter(
      (city) => city.provinceCode === provinceId
    );
    setCitiesByProvince(filteredCities);
  };

  const onChange = (e) => {
    setFormData((prev) => {
      let helper = { ...prev };

      helper[`${e.target.id}`] = e.target.value;

      return helper;
    });
    console.log(formData);
  };

  const onChangeCity = (e) => {
    setFormData({
      ...formData,
      city: e.target.value,
    });
    console.log(formData);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const applicationUpdate = {
      lastName: formData.lastName,
      givenName: formData.givenName,
      middleName: formData.middleName,

      streetAddress: formData.streetAddress,
      apt: formData.apt,
      brgy: formData.brgy,
      city: formData.city ? formData.city : 0,
      province: formData.province ? formData.province : 0,
      memberRegion: formData.memberRegion,
      zipCode: formData.zipCode,

      photo: photoData.photo,

      email: formData.email,
      birthdate: formData.birthdate,
      currentSchool: formData.currentSchool,
      facebook: formData.facebook,
      birthplace: formData.birthplace,
      course: formData.course,
      mobile: formData.mobile,
      religion: formData.religion,
      phone: formData.phone,

      schoolAddress: formData.schoolAddress,
      hobbies: formData.hobbies,
      interests: formData.interests,
      clubs: formData.clubs,
    };

    console.log(applicationUpdate);
    console.log(applicationId);
    axios
      .post(
        `http://localhost:5000/newApplication2/${applicationId}`,
        applicationUpdate
      )
      .then((res) => {
        console.log(res.data);
        window.location.href = `/appform3/${applicationId}`;
      });
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertToBase64(file);

    setPhoto({
      ...photoData,
      photo: base64,
    });

    console.log(photoData);
  };

  function convertToBase64(file) {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();

      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  }

  return (
    <div className="container container-fluid ">
      <div className="row">
        <div className="col-md-6">
          <h1>Application</h1>
        </div>

        <div className="col-md-6">
          <h1 className="position-absolute end-0">
            [Chapter chosen from previous page]
          </h1>
        </div>
      </div>
      <hr />

      <form className="g-2" id="application2" onSubmit={onSubmit}>
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
                name="lastName"
                className="form-control"
                id="lastName"
                placeholder="Last Name"
                onChange={onChange}
                value={formData.lastName}
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
              <input
                type="file"
                className="form-control"
                id="photo"
                accept=".jpeg, .png, .jpg"
                onChange={handleImageUpload}
              />
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
                id="givenName"
                placeholder="Given Name"
                onChange={onChange}
                value={formData.givenName}
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
                id="middleName"
                placeholder="Middle Name"
                onChange={onChange}
                value={formData.middleName}
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
                id="streetAddress"
                placeholder="1234 Main St"
                onChange={onChange}
                value={formData.streetAddress}
              />
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
              <select
                className="form-select form-control"
                id="memberRegion"
                onChange={handleRegionChange}
                value={formData.memberRegion}
              >
                {formData.regions.map(function (region) {
                  return (
                    <option key={region.code} value={region.code}>
                      {region.name}
                    </option>
                  );
                })}
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

              <input
                type="text"
                className="form-control"
                id="zipCode"
                placeholder="1234"
                onChange={onChange}
                value={formData.zipCode}
              />
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
                id="apt"
                placeholder="Apartment, studio, or floor"
                onChange={onChange}
                value={formData.apt}
              />
            </div>
          </div>

          <div className="col-md-3">
            <div className="row mb-3">
              {selectedRegion && (
                <>
                  <label
                    for="inputProvince"
                    className="col-md-4 col-form-label text-right"
                  >
                    State/Province
                  </label>
                  <select
                    className="form-select form-control"
                    id="province"
                    onChange={handleProvinceChange}
                    value={formData.province}
                  >
                    {provincesByRegion.map(function (province) {
                      return (
                        <option key={province.code} value={province.code}>
                          {province.name}
                        </option>
                      );
                    })}
                  </select>
                </>
              )}
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
              <input
                type="text"
                className="form-control"
                id="brgy"
                placeholder="Malate"
                onChange={onChange}
                value={formData.brgy}
              />
            </div>
          </div>

          <div className="col-md-3">
            <div className="row mb-3">
              {selectedRegion &&
                // eslint-disable-next-line eqeqeq
                (selectedProvince || provincesByRegion == 0) && (
                  <>
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
                      onChange={onChangeCity}
                      value={formData.city}
                    >
                      {citiesByProvince.map(function (city) {
                        return (
                          <option key={city.code} value={city.code}>
                            {city.name}
                          </option>
                        );
                      })}
                    </select>
                  </>
                )}
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
                id="email"
                placeholder="Email"
                onChange={onChange}
                value={formData.email}
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
                id="facebook"
                placeholder="Facebook"
                onChange={onChange}
                value={formData.facebook}
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
                type="text"
                className="form-control"
                id="mobile"
                placeholder="09178060641"
                onChange={onChange}
                value={formData.mobile}
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
              <input
                type="date"
                className="form-control"
                id="birthdate"
                onChange={onChange}
                value={formData.birthdate}
              />
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
                id="birthplace"
                placeholder="Olongapo, Zambales"
                onChange={onChange}
                value={formData.birthplace}
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
                id="religion"
                placeholder="Select"
                onChange={onChange}
                value={formData.religion}
              >
                {formData.religions.map(function (religion) {
                  return (
                    <option key={religion} value={religion}>
                      {religion}
                    </option>
                  );
                })}
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
                id="currentSchool"
                placeholder="De La Salle University"
                onChange={onChange}
                value={formData.currentSchool}
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
                id="course"
                placeholder="BS Information Systems"
                onChange={onChange}
                value={formData.course}
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
                id="phone"
                placeholder="8954061"
                onChange={onChange}
                value={formData.phone}
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
              id="schoolAddress"
              placeholder="1004 Malate Manila"
              onChange={onChange}
              value={formData.schoolAddress}
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
              <input
                type="text"
                className="form-control"
                id="hobbies"
                onChange={onChange}
                value={formData.hobbies}
              />
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
              <input
                type="text"
                className="form-control"
                id="interests"
                onChange={onChange}
                value={formData.interests}
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="row mb-3">
            <label for="list" className="col-md-2 col-form-label text-right">
              List your Clubs/Organizations/Groups
            </label>
            <input
              type="text"
              className="form-control"
              id="clubs"
              onChange={onChange}
              value={formData.clubs}
            />
          </div>
        </div>

        <div className="col-12">
          <input
            type="submit"
            value="Next"
            className="btn btn-primary float-end"
          />
        </div>
      </form>
    </div>
  );
}

export default Appform2;
