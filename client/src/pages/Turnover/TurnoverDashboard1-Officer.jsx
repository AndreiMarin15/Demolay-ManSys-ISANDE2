import { Link } from "react-router-dom";
import "../../styles/base.css";
import "../../styles/Turnover.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faFilter } from "@fortawesome/free-solid-svg-icons";

const openTab = (event, tabId) => {
   var tabContents = document.getElementsByClassName("tab-content");

   for (var i = 0; i < tabContents.length; i++) {
      tabContents[i].style.display = "none";
   }

   var tabButtons = document.getElementsByClassName("tab-button");

   for (var i = 0; i < tabButtons.length; i++) {
      tabButtons[i].classList.remove("active");
   }

   document.getElementById(tabId).style.display = "block";

   event.currentTarget.classList.add("active");
};


function TurnoverDashboard1() {

   {/* Default tab on load */}

   useEffect(() => {
      document.getElementById("tab1").style.display = "block";
   }, []);

   return (
      <div className="container">
         <h1>Home</h1>
         <hr/>
         <div className="row">

            {/* First Column */}

            <div className="col-md-2">
               <div className="row align-items-center mt-3 text-center">
                  <h3>Edwardo Rafael</h3>
                  <p>Chapter Scribe, Abad Santos #1</p>
                  <hr/>
               </div>
               <div className="row align-items-left">
                  <a href="/turnoverDashboard1" id="leftNavbar">Circulars</a>
                  <a href="/turnoverDashboard1" id="leftNavbar">For Review</a>
                  <a href="/turnoverDashboard1" id="leftNavbar">Reports</a>
                  <a href="/turnoverDashboard1" id="leftNavbar">Directory</a>
                  <a href="/turnoverDashboard1" id="leftNavbar">Chapter Profile</a>
               </div>
            </div>

            {/* Vertical Line */}

            <div className="col-md-1">
               <div className="vl"></div>
            </div>

            {/* Second Column */}

            <div className="col-md-8">
               <div className="d-flex justify-content-between align-items-center mb-3">
                  <h1> Reports </h1>
                  <input
                     type="text"
                     className="form-control form-control-sm"
                     placeholder="Search"
                  />
                  <button type="button" className="filterbtn">
                     <FontAwesomeIcon icon={faFilter} />
                  </button>
               </div>
               <div className="tabs-container">

                  {/* Tab Headers */}

                  <div className="tab-header">
                     <button
                        className="tab-button active"
                        onClick={(event) => openTab(event, 'tab1')}
                     >
                        All
                     </button>
                     <button
                        className="tab-button"
                        onClick={(event) => openTab(event, 'tab2')}
                     >
                        Started
                     </button>
                     <button
                        className="tab-button"
                        onClick={(event) => openTab(event, 'tab3')}
                     >
                        Submitted
                     </button>
                  </div>

                  {/* Tabs Content 1 */}

                  <div id="tab1" className="tab-content active">
                     <div className="boxContainer">
                        <div className="boxRow">
                           <div className="box">
                              <h4>Term and Financial Report</h4>
                              <p>Form/Report Desc</p>
                              <p className="sent-btn"> Sent by Edwardo Rafael on April 16, 2023</p>
                              <input type="checkbox"/>
                              <button className="fill-btn"> REVIEW </button>
                           </div>
                           <div className="box">
                              <h4>New Officers Report (Form 15)</h4>
                              <p>Form/Report Desc</p>
                              <p className="sent-btn"> Sent by Edwardo Rafael on April 16, 2023</p>
                              <input type="checkbox"/>
                              <button className="fill-btn"> REVIEW </button>
                           </div>
                        </div>
                     </div>
                  </div>

                  {/* Tabs Content 2 */}

                  <div id="tab2" className="tab-content">
                     <p>This is the content for Tab 2.</p>
                  </div>

                  {/* Tabs Content 3 */}

                  <div id="tab3" className="tab-content">
                     <p>This is the content for Tab 3.</p>
                  </div>
               </div>
               
               {/* Submit Button */}

               <div className="d-flex justify-content-center">
                  <Link to="/turnoverDashboard1">
                     <button type="submit" form="submit" className="primary-btn" value="SUBMIT">
                        SEND
                     </button>
                  </Link>
               </div>
            </div>
         </div>
      </div>
   );
}

export default TurnoverDashboard1;
