import { Link } from "react-router-dom";
import "../../styles/base.css";
import "../../styles/Turnover.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';

function TurnoverCA1() {
   return (
      <div className="container">
         <div className="d-flex justify-content-between align-items-center mb-3">
            <h1> Certification of Advisory Council Members </h1>
            <Link to="/turnoverTF1">
               <button type="submit" form="submit" className="primary-btn">
                  SAVE AND COMPLETE LATER
               </button>
            </Link>
         </div>

         <hr />

         <div className="row">
            
            {/* First Column */}

            <div className="col-md-4">

               <div className="row align-items-center mt-3">
                  <div className="col-md-4">
                     <label htmlFor="fullname" className="col-form-label text-right">
                        Full Name:
                     </label>
                  </div>
                  <div className="col-md-7">
                     <input type="text" className="form-control" id="fullname" placeholder="Enter Full Name" />
                  </div>
               </div>

               <div className="row align-items-center mt-3">
                  <div className="col-md-4">
                     <label htmlFor="address" className="col-form-label text-right">
                        Address:
                     </label>
                  </div>
                  <div className="col-md-7">
                     <input type="text" className="form-control" id="address" placeholder="Enter Address" />
                  </div>
               </div>

               <div className="row align-items-center mt-3">
                  <div className="col-md-4">
                     <label htmlFor="position" className="col-form-label text-right">
                        Position:
                     </label>
                  </div>
                  <div className="col-md-7">
                     <input type="text" className="form-control" id="position" placeholder="Enter Position" />
                  </div>
               </div>

               <div className="row align-items-center mt-3">
                  <div className="col-md-4">
                     <label htmlFor="email" className="col-form-label text-right">
                        Email:
                     </label>
                  </div>
                  <div className="col-md-7">
                     <input type="text" className="form-control" id="email" placeholder="Enter Email" />
                  </div>
               </div>

               <div className="row align-items-center mt-3">
                  <div className="col-md-4">
                     <label htmlFor="phoneno" className="col-form-label text-right">
                        Mobile No.:
                     </label>
                  </div>
                  <div className="col-md-7">
                     <input type="text" className="form-control" id="phoneno" placeholder="Enter Mobile No." />
                  </div>
               </div>

            </div>

            <div className="col-md-4">
               <h4> Check all that are held:</h4>

               <div className="row align-items-center mt-3">
                  <div style={{ display: 'flex', justifyContent: 'center' }}>
                     <div style={{ display: 'flex', alignItems: 'center' }}>
                        <input type="checkbox" id="checkboxLOH" style={{ verticalAlign: 'middle', marginRight: '10px' }} /> LOH
                     </div>
                     <div style={{ display: 'flex', alignItems: 'center', marginLeft: '30px', marginRight: '30px' }}>
                        <input type="checkbox" id="checkboxHLOH" style={{ verticalAlign: 'middle', marginRight: '10px' }} /> HLOH
                     </div>
                  </div>
               </div>

               <div className="row align-items-center mt-3">
                  <div style={{ display: 'flex', justifyContent: 'center' }}>
                     <div style={{ display: 'flex', alignItems: 'center' }}>
                        <input type="checkbox" id="checkboxCOH" style={{ verticalAlign: 'middle', marginRight: '10px' }} /> COH
                     </div>
                     <div style={{ display: 'flex', alignItems: 'center', marginLeft: '30px', marginRight: '30px' }}>
                        <input type="checkbox" id="checkboxCHEV" style={{ verticalAlign: 'middle', marginRight: '10px' }} /> CHEV
                     </div>
                  </div>
               </div>

               <div className="row align-items-center mt-3">
                  <div style={{ display: 'flex', justifyContent: 'center' }}>
                     <div style={{ display: 'flex', alignItems: 'center' }}>
                        <input type="checkbox" id="checkboxFMA" style={{ verticalAlign: 'middle', marginRight: '10px' }} /> FMA
                     </div>
                     <div style={{ display: 'flex', alignItems: 'center', marginLeft: '30px', marginRight: '30px' }}>
                        <input type="checkbox" id="checkboxRD" style={{ verticalAlign: 'middle', marginRight: '10px' }} /> RD
                     </div>
                  </div>
               </div>

               <div className="row align-items-center mt-3">
                  <div style={{ display: 'flex', justifyContent: 'center' }}>
                     <div style={{ display: 'flex', alignItems: 'center' }}>
                        <input type="checkbox" id="checkboxBHK" style={{ verticalAlign: 'middle', marginRight: '10px' }} /> BHK
                     </div>
                     <div style={{ display: 'flex', alignItems: 'center', marginLeft: '30px', marginRight: '30px' }}>
                        <input type="checkbox" id="checkboxLCC" style={{ verticalAlign: 'middle', marginRight: '10px' }} /> LCC
                     </div>
                  </div>
               </div>

            </div>

            <div className="col-md-4">
               <h4> Select one. </h4>

               <div className="row align-items-center mt-3">
                  <div style={{ display: 'flex', justifyContent: 'center' }}>
                     <div style={{ display: 'flex', alignItems: 'center' }}>
                        <input type="checkbox" id="checkboxNew" style={{ verticalAlign: 'middle', marginRight: '10px' }} /> New Apppointment
                     </div>
                  </div>
               </div>

               <div className="row align-items-center mt-3">
                  <div style={{ display: 'flex', justifyContent: 'center' }}>
                     <div style={{ display: 'flex', alignItems: 'center' }}>
                        <input type="checkbox" id="checkboxRe" style={{ verticalAlign: 'middle', marginRight: '10px' }} /> Re-Apppointment
                     </div>
                  </div>
               </div>

               <div className="row align-items-center mt-3">
                  <div className="col-md-9">
                     Years as Advisor
                  </div>
                  <div className="col-md-3">
                     <div style={{ display: "flex" }}>
                        <input type="text" className="form-control" id="yearsasadvisor" placeholder="1" />
                        <div style={{ display: "flex" }}>
                        <button style={{ border: "none", padding: "5px 10px", background: "transparent" }}>-</button>
                        <button style={{ border: "none", padding: "5px 10px", background: "transparent" }}>+</button>
                        </div>
                     </div>
                  </div>
               </div>

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

export default TurnoverCA1;
