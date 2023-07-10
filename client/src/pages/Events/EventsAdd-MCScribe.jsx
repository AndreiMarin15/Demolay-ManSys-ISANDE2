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
            key: "Merit",
            value: 9,
         },
         {
            key: "Petitions",
            value: 10,
         },
         {
            key: "Visitation",
            value: 11,
         },
      ],
        meritBar: 1,
    });
}, []);

const onChangeMeritBar = (e) => {
   setFormData({
   ...formData,
   meritBar: e.target.value,
   });
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
                                 <option 
                                    value={meritBar.value} 
                                    key={meritBar.key}>
                                    {" "}
                                    {meritBar.key}{" "}
                                 </option>
                              );
                           })}
                        </select>{" "}
                     </div>
                  </div>
               </div>
               <br />

               {/* Vertical Line */}
               <div className="col-md-1">
                  <div className="vl"></div>
               </div>

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

               {
                  // Installing
                  formData.meritBar == 7 && (
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
                                    htmlFor="chapter" 
                                    className="col-form-label text-left">
                                    Chapter:
                                 </label>
                              </div>
                              <div className="col-md-7">
                                 <select className="form-select form-control" id="chapter">
                                    <option>Chapter 1</option>
                                    <option>Chapter 2</option>
                                    <option>Chapter 3</option>
                                 </select>
                              </div>
                           </div>
                        </div>
                     </>
                  )
               }

               {
                  // Journalism
                  formData.meritBar == 8 && (
                     <>
                        <div className="col-md-6"> 
                           <div className="row align-items-center mt-3">
                              <div className="col-md-4">
                                 <label 
                                    htmlFor="articlename" 
                                    className="col-form-label text-right">
                                    Name of Article:
                                 </label>
                              </div>
                              <div className="col-md-7">
                                 <input type="text" className="form-control" id="articlename" placeholder="Enter Article Name"/>
                              </div>
                           </div>

                           <div className="row align-items-center mt-3">
                              <div className="col-md-4">
                                 <label 
                                    htmlFor="articledate" 
                                    className="col-form-label text-right">
                                    Date of Article:
                                 </label>
                              </div>
                              <div className="col-md-7">
                                 <input type="text" className="form-control" id="articledate" placeholder="Enter Article Date"/>
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
                                    <option>Printed</option>
                                    <option>Digital</option>
                                 </select>
                              </div>
                           </div>
                        </div>
                     </>
                  )
               }

               {
                  // Merit
                  formData.meritBar == 9 && (
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
                  // Petitions
                  formData.meritBar == 10 && (
                     <>
                        <div className="col-md-6">
                        <div className="row align-items-center mt-3">
                           <div className="col-md-4">
                              <label 
                                 htmlFor="name" 
                                 className="col-form-label text-right">
                                 Name:
                              </label>
                           </div>
                           <div className="col-md-7">
                              <input type="text" className="form-control" id="scod" placeholder="Enter Member Name"/>
                           </div>
                        </div>

                           <div className="row align-items-center mt-3">
                              <div className="col-md-4">
                                 <label 
                                    htmlFor="date" 
                                    className="col-form-label text-right">
                                    I.D. Date:
                                 </label>
                              </div>
                              <div className="col-md-7">
                                    <input type="text" className="form-control" id="date" placeholder="MM/DD/YYYY"/>
                              </div>
                           </div>

                           <div className="row align-items-center mt-3">
                              <div className="col-md-4">
                                 <label 
                                    htmlFor="chapter" 
                                    className="col-form-label text-left">
                                    Chapter:
                                 </label>
                              </div>
                              <div className="col-md-7">
                                 <select className="form-select form-control" id="chapter">
                                    <option>Chapter 1</option>
                                    <option>Chapter 2</option>
                                    <option>Chapter 3</option>
                                 </select>
                              </div>
                           </div>

                           <div className="row align-items-center mt-3">
                              <div className="col-md-4">
                                 <label 
                                    htmlFor="scod" 
                                    className="col-form-label text-right">
                                    SCOD-OR No.:
                                 </label>
                              </div>
                              <div className="col-md-7">
                                 <input type="text" className="form-control" id="scod" placeholder="Enter SCOD-OR No."/>
                              </div>
                           </div>
                        </div>
                     </>
                  )
               }

               {
                  // Visitation
                  formData.meritBar == 11 && (
                     <>
                        <div className="col-md-6">
                           <div className="row align-items-center mt-3">
                              <div className="col-md-4">
                                 <label 
                                    htmlFor="chapter" 
                                    className="col-form-label text-left">
                                    Chapter:
                                 </label>
                              </div>
                              <div className="col-md-7">
                                 <select className="form-select form-control" id="chapter">
                                    <option>Chapter 1</option>
                                    <option>Chapter 2</option>
                                    <option>Chapter 3</option>
                                 </select>
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


