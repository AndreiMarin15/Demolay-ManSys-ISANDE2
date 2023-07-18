import { Link } from "react-router-dom";
import "../../styles/base.css";
import "../../styles/Turnover.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';

function TurnoverHR2() {
   return (
      <div className="container">
         <div className="d-flex justify-content-between align-items-center mb-3">
            <h1> Report on Historical Records, Official Files and Assets, and Properties </h1>
            <Link to="/turnoverTF1">
               <button type="submit" form="submit" className="primary-btn">
                  SAVE AND COMPLETE LATER
               </button>
            </Link>
         </div>

         <hr />

         <div class="d-flex justify-content-center align-items-center mb-3">
            <p> 
               This is to certify that all Historical Records, Official Files and Assets, and Properties of <u> Manila Chapter </u> listed below have been formally turned over to the following term of:
            </p>
         </div>
         <div className="row">
            <div style={{ display: 'flex', justifyContent: 'center' }}>
               <div style={{ display: 'flex', alignItems: 'center' }}>
                  <input type="checkbox" id="checkboxA" style={{ verticalAlign: 'middle', marginRight: '10px' }} /> A
               </div>
               <div style={{ display: 'flex', alignItems: 'center', marginLeft: '30px', marginRight: '30px' }}>
                  <input type="checkbox" id="checkboxB" style={{ verticalAlign: 'middle', marginRight: '10px' }} /> B
               </div>
               <div style={{ display: 'flex', alignItems: 'center' }}>
                  <input type="checkbox" id="checkboxAB" style={{ verticalAlign: 'middle', marginRight: '10px' }} /> A/B
               </div>
            </div>
            
            {/* First Column */}

            <div className="col-md-6">
               <div className="row align-items-center mt-3">
                  <h4>
                     <u> Items: </u>
                  </h4>
                  <p>
                     Select all items that are on-hand and indicate the quantity.
                  </p>
               </div>

               <div className="row align-items-center mt-3">
                  <div className="col-md-9">
                     <input type="text" className="form-control" id="itemname" placeholder="Input item name here" />
                  </div>
                  <div className="col-md-3">
                     <div style={{ display: "flex" }}>
                        <input type="text" className="form-control" id="itemname" placeholder="1" />
                        <div style={{ display: "flex" }}>
                        <button style={{ border: "none", padding: "5px 10px", background: "transparent" }}>-</button>
                        <button style={{ border: "none", padding: "5px 10px", background: "transparent" }}>+</button>
                        </div>
                     </div>
                  </div>
               </div>

               <div className="row align-items-center mt-3">
                  <div className="col-md-9">
                     <input type="text" className="form-control" id="itemname" placeholder="Input item name here" />
                  </div>
                  <div className="col-md-3">
                     <div style={{ display: "flex" }}>
                        <input type="text" className="form-control" id="itemname" placeholder="1" />
                        <div style={{ display: "flex" }}>
                        <button style={{ border: "none", padding: "5px 10px", background: "transparent" }}>-</button>
                        <button style={{ border: "none", padding: "5px 10px", background: "transparent" }}>+</button>
                        </div>
                     </div>
                  </div>
               </div>

               <div className="row align-items-center mt-3">
                  <div className="col-md-9">
                     <input type="text" className="form-control" id="itemname" placeholder="Input item name here" />
                  </div>
                  <div className="col-md-3">
                     <div style={{ display: "flex" }}>
                        <input type="text" className="form-control" id="itemname" placeholder="1" />
                        <div style={{ display: "flex" }}>
                        <button style={{ border: "none", padding: "5px 10px", background: "transparent" }}>-</button>
                        <button style={{ border: "none", padding: "5px 10px", background: "transparent" }}>+</button>
                        </div>
                     </div>
                  </div>
               </div>

               <div className="row align-items-center mt-3">
                  <div className="col-md-9">
                     <input type="text" className="form-control" id="itemname" placeholder="Input item name here" />
                  </div>
                  <div className="col-md-3">
                     <div style={{ display: "flex" }}>
                        <input type="text" className="form-control" id="itemname" placeholder="1" />
                        <div style={{ display: "flex" }}>
                        <button style={{ border: "none", padding: "5px 10px", background: "transparent" }}>-</button>
                        <button style={{ border: "none", padding: "5px 10px", background: "transparent" }}>+</button>
                        </div>
                     </div>
                  </div>
               </div>

               <button type="submit" form="submit" className="primary-btn">
                  +
               </button>

            </div>
         </div>

         {/* Button */}
         
         <div className="d-flex justify-content-between mt-4">
            <Link to="/turnoverTF3">
               <button type="button" className="primary-btn">
                  BACK
               </button>
            </Link>
            <Link to="/turnoverTF5">
               <button type="submit" form="submit" className="primary-btn" value="SUBMIT">
                  SAVE
               </button>
            </Link>
         </div>
      </div>
   );
}

export default TurnoverHR2;
