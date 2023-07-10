import { Link } from "react-router-dom";
import "../../styles/base.css";
import "../../styles/Events.css"
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

function EventsAdd () {

const [formData, setFormData] = useState({
    meritBars: [],

    meritBar: "",
    name: "",
});

useEffect(() => {
    setFormData({
        ...FormData,
        meritBars: [
            {
                key: "Attendance",
                value: 1,
            },
            {
                key: "Athletic",
                value: 2,
            },
            {
                key: "Civil Service",
                value: 3,
            },
            {
                key: "Conclave",
                value: 4,
            },
            {
                key: "Fine Arts",
                value: 5,
            },
            {
                key: "Fundraising",
                value: 6,
            },
            {
                key: "Installing",
                value: 7,
            },
            {
                key: "Journalism",
                value: 8,
            },
            {
                key: "Masonic Service",
                value: 9,
            },
            {
                key: "Merit",
                value: 10,
            },
            {
                key: "Petitions",
                value: 11,
            },
            {
                key: "Religion",
                value: 12,
            },
            {
                key: "Ritual",
                value: 13,
            },
            {
                key: "Scholastics",
                value: 14,
            },
            {
                key: "Visitation",
                value: 15,
            },
        ],

        meritBar: 1,
    });

    console.log(formData);
}, []);

const onChangeMeritBar = (e) => {
    setFormData({
        ...formData,
        meritBar: e.target.value,
    });
    console.log(formData.meritBar);
};

    return (
        <div className="container">
            <br/>

            {/* Header */}
            <div className="d-flex justify-content-between align-items-center mb-3">
                <h1>Add Event </h1>
            </div>

            <hr/>

            <div className="row">
            {/* First Column */}
                <div className="col-md-5">
                    <div className="row align-items-center mt-3">
                        <div className="col-md-4">
                            <label 
                                htmlFor="meritBar" 
                                className="col-form-label text-right">
                                Merit Bar:
                            </label>
                        </div>
                        <div className="col-md-7">
                            <select 
                                className="form-select form-control" 
                                name="meritBar" 
                                id="meritBar"
                                value={formData.meritBar}
								onChange={onChangeMeritBar}
                            >
                                {formData.meritBars.map(function (meritBar) {
									return (
										<option value={meritBar.value} key={meritBar.key}>
											{" "}
											{meritBar.key}{" "}
										</option>
									);
								})}
							</select>{" "}
                        </div>
                    </div>
                    <br />
                </div>

                {/* Vertical Line */}
                <div className="col-md-1">
                    <div className="vl"></div>
                </div>

                {/* Second Column */}

                {
                    // Attendance
                    formData.meritBar == 1 && (
                        <>
                            <div className="col-md-6"> 
                                <div className="row align-items-center mt-3">
                                    <div className="col-md-4">
                                        <label 
                                            htmlFor="activityname" 
                                            className="col-form-label text-right">
                                            Name of Activity:
                                        </label>
                                    </div>
                                    <div className="col-md-7">
                                        <input type="text" className="form-control" id="activityname" placeholder="Enter Activity Name"/>
                                    </div>
                                </div>

                                <div className="row align-items-center mt-3">
                                    <div className="col-md-4">
                                        <label 
                                            htmlFor="activitydate" 
                                            className="col-form-label text-right">
                                            Date of Activity:
                                        </label>
                                    </div>
                                    <div className="col-md-7">
                                        <input type="text" className="form-control" id="activitydate" placeholder="Enter Activity Date"/>
                                    </div>
                                </div>

                                <div className="row align-items-center mt-3">
                                    <div className="col-md-4">
                                        <label 
                                            htmlFor="term" 
                                            className="col-form-label text-left">
                                            Term:
                                        </label>
                                    </div>
                                    <div className="col-md-7">
                                        <select className="form-select form-control" id="nameofsport">
                                            <option>Term A</option>
                                            <option>Term B</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                }

                {
                    // Athletics
                    formData.meritBar == 2 && (
                        <>
                            <div className="col-md-6"> 
                                <div className="row align-items-center mt-3">
                                    <div className="col-md-4">
                                        <label 
                                            htmlFor="activityname" 
                                            className="col-form-label text-right">
                                            Name of Activity:
                                        </label>
                                    </div>
                                    <div className="col-md-7">
                                        <input type="text" className="form-control" id="activityname" placeholder="Enter Activity Name"/>
                                    </div>
                                </div>

                                <div className="row align-items-center mt-3">
                                    <div className="col-md-4">
                                        <label 
                                            htmlFor="activitydate" 
                                            className="col-form-label text-right">
                                            Date of Activity:
                                        </label>
                                    </div>
                                    <div className="col-md-7">
                                        <input type="text" className="form-control" id="activitydate" placeholder="Enter Activity Date"/>
                                    </div>
                                </div>

                                <div className="row align-items-center mt-3">
                                    <div className="col-md-4">
                                        <label 
                                            htmlFor="hostchapter" 
                                            className="col-form-label text-right">
                                            Host Chapter:
                                        </label>
                                    </div>
                                    <div className="col-md-7">
                                        <input type="text" className="form-control" id="hostchapter" placeholder="Enter Host Chapter"/>
                                    </div>
                                </div>

                                <div className="row align-items-center mt-3">
                                    <div className="col-md-4">
                                        <label 
                                            htmlFor="location" 
                                            className="col-form-label text-right">
                                            Location:
                                        </label>
                                    </div>
                                    <div className="col-md-7">
                                        <input type="text" className="form-control" id="location" placeholder="Enter Location"/>
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                }

                {
                    // Civil Service
                    formData.meritBar == 3 && (
                        <>
                            <div className="col-md-6"> 
                                <div className="row align-items-center mt-3">
                                    <div className="col-md-4">
                                        <label 
                                            htmlFor="activityname" 
                                            className="col-form-label text-right">
                                            Name of Activity:
                                        </label>
                                    </div>
                                    <div className="col-md-7">
                                        <input type="text" className="form-control" id="activityname" placeholder="Enter Activity Name"/>
                                    </div>
                                </div>

                                <div className="row align-items-center mt-3">
                                    <div className="col-md-4">
                                        <label 
                                            htmlFor="activitydate" 
                                            className="col-form-label text-right">
                                            Date of Activity:
                                        </label>
                                    </div>
                                    <div className="col-md-7">
                                        <input type="text" className="form-control" id="activitydate" placeholder="Enter Activity Date"/>
                                    </div>
                                </div>

                                <div className="row align-items-center mt-3">
                                    <div className="col-md-4">
                                        <label 
                                            htmlFor="location" 
                                            className="col-form-label text-right">
                                            Location:
                                        </label>
                                    </div>
                                    <div className="col-md-7">
                                        <input type="text" className="form-control" id="location" placeholder="Enter Location"/>
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                }

                {
                    // Conclave
                    formData.meritBar == 4 && (
                        <>
                            <div className="col-md-6"> 
                                <div className="row align-items-center mt-3">
                                    <div className="col-md-4">
                                        <label 
                                            htmlFor="activityname" 
                                            className="col-form-label text-right">
                                            Name of Activity:
                                        </label>
                                    </div>
                                    <div className="col-md-7">
                                        <input type="text" className="form-control" id="activityname" placeholder="Enter Activity Name"/>
                                    </div>
                                </div>

                                <div className="row align-items-center mt-3">
                                    <div className="col-md-4">
                                        <label 
                                            htmlFor="type" 
                                            className="col-form-label text-left">
                                            Type:
                                        </label>
                                    </div>
                                    <div className="col-md-7">
                                        <select className="form-select form-control" id="type">
                                            <option>National</option>
                                            <option>Luzon</option>
                                            <option>Visayas</option>
                                            <option>Minadanao</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="row align-items-center mt-3">
                                    <div className="col-md-3">
                                        <label htmlFor="duration" className="col-form-label text-left">
                                            Duration:
                                        </label>
                                    </div>
                                    <div className="col-md-4">
                                        <input type="text" className="form-control" id="startdate" placeholder="Start Date"/>
                                    </div>
                                    <div className="col-md-4">
                                        <input type="text" className="form-control" id="enddate" placeholder="End Date"/>
                                    </div>
                                </div>

                            </div>
                        </>
                    )
                }

                {
                    // Fine Arts
                    formData.meritBar == 5 && (
                        <>
                            <div className="col-md-6"> 
                                <div className="row align-items-center mt-3">
                                    <div className="col-md-4">
                                        <label 
                                            htmlFor="activityname" 
                                            className="col-form-label text-right">
                                            Name of Activity:
                                        </label>
                                    </div>
                                    <div className="col-md-7">
                                        <input type="text" className="form-control" id="activityname" placeholder="Enter Activity Name"/>
                                    </div>
                                </div>

                                <div className="row align-items-center mt-3">
                                    <div className="col-md-4">
                                        <label 
                                            htmlFor="activitydate" 
                                            className="col-form-label text-right">
                                            Date of Activity:
                                        </label>
                                    </div>
                                    <div className="col-md-7">
                                        <input type="text" className="form-control" id="activitydate" placeholder="Enter Activity Date"/>
                                    </div>
                                </div>

                                <div className="row align-items-center mt-3">
                                    <div className="col-md-4">
                                        <label 
                                            htmlFor="type" 
                                            className="col-form-label text-left">
                                            Type:
                                        </label>
                                    </div>
                                    <div className="col-md-7">
                                        <select className="form-select form-control" id="type">
                                            <option>Musical</option>
                                            <option>Theatrical</option>
                                        </select>
                                    </div>
                                </div>

                            </div>
                        </>
                    )
                }

                {
                    // Fundraising
                    formData.meritBar == 6 && (
                        <>
                            <div className="col-md-6"> 
                                <div className="row align-items-center mt-3">
                                    <div className="col-md-4">
                                        <label 
                                            htmlFor="activityname" 
                                            className="col-form-label text-right">
                                            Name of Activity:
                                        </label>
                                    </div>
                                    <div className="col-md-7">
                                        <input type="text" className="form-control" id="activityname" placeholder="Enter Activity Name"/>
                                    </div>
                                </div>

                                <div className="row align-items-center mt-3">
                                    <div className="col-md-4">
                                        <label 
                                            htmlFor="activitydate" 
                                            className="col-form-label text-right">
                                            Date of Activity:
                                        </label>
                                    </div>
                                    <div className="col-md-7">
                                        <input type="text" className="form-control" id="activitydate" placeholder="Enter Activity Date"/>
                                    </div>
                                </div>

                                <div className="row align-items-center mt-3">
                                    <div className="col-md-4">
                                        <label 
                                            htmlFor="location" 
                                            className="col-form-label text-right">
                                            Location:
                                        </label>
                                    </div>
                                    <div className="col-md-7">
                                        <input type="text" className="form-control" id="location" placeholder="Enter Location"/>
                                    </div>
                                </div>

                            </div>
                        </>
                    )
                }

                {/* Buttons */}
                <div className="d-flex justify-content-between mt-4">
                    <Link to="/turnoverTF1">
                        <button type="button" id="back-btn">
                            BACK
                        </button>
                    </Link>
                    <Link to="/turnoverTF3">
                        <button type="submit" form="submit" id="primary-btn" value="SUBMIT">
                            SUBMIT
                        </button>
                    </Link>
                </div>
            </div>


        </div>
    )
}
export default EventsAdd


