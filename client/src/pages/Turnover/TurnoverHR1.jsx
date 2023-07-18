import { Link } from "react-router-dom";
import "../../styles/base.css";
import "../../styles/Turnover.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';

function TurnoverHR1() {
   return (
      <div className="container">
         <div className="d-flex justify-content-between align-items-center mb-3">
            <h1> Report on Historical Records, Official Files and Assets, and Properties </h1>
            <Link to="/turnoverTF1">
               <button type="submit" form="submit" id="primary-btn">
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

            <div className="col-md-5">
               <div className="row align-items-center mt-3">
                  <h4>
                     <u> Items: </u>
                  </h4>
                  <p>
                     Select all items that are on-hand and indicate the quantity.
                  </p>
                  <div className="col-md-7">
                     <div style={{ display: 'flex', alignItems: 'center' }}>
                        <input type="checkbox" id="sentinelbook" style={{ verticalAlign: 'middle' }} /> Sentinel Book
                     </div>
                  </div>
                  <div className="col-md-5">
                     <div style={{ display: "flex" }}>
                        <input type="text" className="form-control" id="sentinelbook" placeholder="1" />
                        <div style={{ display: "flex" }}>
                           <button style={{ border: "none", padding: "5px 10px", background: "transparent" }}>-</button>
                           <button style={{ border: "none", padding: "5px 10px", background: "transparent" }}>+</button>
                        </div>
                     </div>
                  </div>
               </div>

               <div className="row align-items-center mt-3">
                  <div className="col-md-7">
                     <div style={{ display: 'flex', alignItems: 'center' }}>
                        <input type="checkbox" id="Crown of Youth" style={{ verticalAlign: 'middle' }} /> Crown of Youth
                     </div>
                  </div>
                  <div className="col-md-5">
                     <div style={{ display: "flex" }}>
                        <input type="text" className="form-control" id="crownofyouth" placeholder="1" />
                        <div style={{ display: "flex" }}>
                           <button style={{ border: "none", padding: "5px 10px", background: "transparent" }}>-</button>
                           <button style={{ border: "none", padding: "5px 10px", background: "transparent" }}>+</button>
                        </div>
                     </div>
                  </div>
               </div>

               <div className="row align-items-center mt-3">
                  <div className="col-md-7">
                     <div style={{ display: 'flex', alignItems: 'center' }}>
                        <input type="checkbox" id="blackrobes" style={{ verticalAlign: 'middle' }} /> Black Robes
                     </div>
                  </div>
                  <div className="col-md-5">
                     <div style={{ display: "flex" }}>
                        <input type="text" className="form-control" id="blackrobes" placeholder="19" />
                        <div style={{ display: "flex" }}>
                           <button style={{ border: "none", padding: "5px 10px", background: "transparent" }}>-</button>
                           <button style={{ border: "none", padding: "5px 10px", background: "transparent" }}>+</button>
                        </div>
                     </div>
                  </div>
               </div>

               <div className="row align-items-center mt-3">
                  <div className="col-md-7">
                     <div style={{ display: 'flex', alignItems: 'center' }}>
                        <input type="checkbox" id="whiterobes" style={{ verticalAlign: 'middle' }} /> White Robes
                     </div>
                  </div>
                  <div className="col-md-5">
                     <div style={{ display: "flex" }}>
                        <input type="text" className="form-control" id="whiterobes" placeholder="4" />
                        <div style={{ display: "flex" }}>
                           <button style={{ border: "none", padding: "5px 10px", background: "transparent" }}>-</button>
                           <button style={{ border: "none", padding: "5px 10px", background: "transparent" }}>+</button>
                        </div>
                     </div>
                  </div>
               </div>

               <div className="row align-items-center mt-3">
                  <div className="col-md-7">
                     <div style={{ display: 'flex', alignItems: 'center' }}>
                        <input type="checkbox" id="knighthoodrobes" style={{ verticalAlign: 'middle' }} /> Knighthood Robes
                     </div>
                  </div>
                  <div className="col-md-5">
                     <div style={{ display: "flex" }}>
                        <input type="text" className="form-control" id="knighthoodrobes" placeholder="4" />
                        <div style={{ display: "flex" }}>
                           <button style={{ border: "none", padding: "5px 10px", background: "transparent" }}>-</button>
                           <button style={{ border: "none", padding: "5px 10px", background: "transparent" }}>+</button>
                        </div>
                     </div>
                  </div>
               </div>

               <div className="row align-items-center mt-3">
                  <div className="col-md-7">
                     <div style={{ display: 'flex', alignItems: 'center' }}>
                        <input type="checkbox" id="altarcloth" style={{ verticalAlign: 'middle' }} /> Altar Cloth
                     </div>
                  </div>
                  <div className="col-md-5">
                     <div style={{ display: "flex" }}>
                        <input type="text" className="form-control" id="altarcloth" placeholder="1" />
                        <div style={{ display: "flex" }}>
                           <button style={{ border: "none", padding: "5px 10px", background: "transparent" }}>-</button>
                           <button style={{ border: "none", padding: "5px 10px", background: "transparent" }}>+</button>
                        </div>
                     </div>
                  </div>
               </div>

               <div className="row align-items-center mt-3">
                  <div className="col-md-7">
                     <div style={{ display: 'flex', alignItems: 'center' }}>
                        <input type="checkbox" id="holybible" style={{ verticalAlign: 'middle' }} /> Holy Bible
                     </div>
                  </div>
                  <div className="col-md-5">
                     <div style={{ display: "flex" }}>
                        <input type="text" className="form-control" id="holybible" placeholder="1" />
                        <div style={{ display: "flex" }}>
                           <button style={{ border: "none", padding: "5px 10px", background: "transparent" }}>-</button>
                           <button style={{ border: "none", padding: "5px 10px", background: "transparent" }}>+</button>
                        </div>
                     </div>
                  </div>
               </div>

            </div>

            {/* Second Column */}

            <div className="col-md-7">
               <div className="row align-items-center mt-3">
                  <div className="col-md-9">
                     <div style={{ display: 'flex', alignItems: 'center' }}>
                        <input type="checkbox" id="candlestands" style={{ verticalAlign: 'middle' }} /> Candle Stands & Candles/Lightbulbs
                     </div>
                  </div>
                  <div className="col-md-3">
                     <div style={{ display: "flex" }}>
                        <input type="text" className="form-control" id="candlestands" placeholder="7" />
                        <div style={{ display: "flex" }}>
                           <button style={{ border: "none", padding: "5px 10px", background: "transparent" }}>-</button>
                           <button style={{ border: "none", padding: "5px 10px", background: "transparent" }}>+</button>
                        </div>
                     </div>
                  </div>
               </div>

               <div className="row align-items-center mt-3">
                  <div className="col-md-9">
                     <div style={{ display: 'flex', alignItems: 'center' }}>
                        <input type="checkbox" id="chapterbanner" style={{ verticalAlign: 'middle' }} /> Chapter Banner
                     </div>
                  </div>
                  <div className="col-md-3">
                     <div style={{ display: "flex" }}>
                        <input type="text" className="form-control" id="chapterbanner" placeholder="1" />
                        <div style={{ display: "flex" }}>
                           <button style={{ border: "none", padding: "5px 10px", background: "transparent" }}>-</button>
                           <button style={{ border: "none", padding: "5px 10px", background: "transparent" }}>+</button>
                        </div>
                     </div>
                  </div>
               </div>

               <div className="row align-items-center mt-3">
                  <div className="col-md-9">
                     <div style={{ display: 'flex', alignItems: 'center' }}>
                        <input type="checkbox" id="framedcharter" style={{ verticalAlign: 'middle' }} /> Framed Charter/Letters Temporary
                     </div>
                  </div>
                  <div className="col-md-3">
                     <div style={{ display: "flex" }}>
                        <input type="text" className="form-control" id="framedcharter" placeholder="1" />
                        <div style={{ display: "flex" }}>
                           <button style={{ border: "none", padding: "5px 10px", background: "transparent" }}>-</button>
                           <button style={{ border: "none", padding: "5px 10px", background: "transparent" }}>+</button>
                        </div>
                     </div>
                  </div>
               </div>

               <div className="row align-items-center mt-3">
                  <div className="col-md-9">
                     <div style={{ display: 'flex', alignItems: 'center' }}>
                        <input type="checkbox" id="ballotbox" style={{ verticalAlign: 'middle' }} /> Ballot Box
                     </div>
                  </div>
                  <div className="col-md-3">
                     <div style={{ display: "flex" }}>
                        <input type="text" className="form-control" id="ballotbox" placeholder="1" />
                        <div style={{ display: "flex" }}>
                           <button style={{ border: "none", padding: "5px 10px", background: "transparent" }}>-</button>
                           <button style={{ border: "none", padding: "5px 10px", background: "transparent" }}>+</button>
                        </div>
                     </div>
                  </div>
               </div>

               <div className="row align-items-center mt-3">
                  <div className="col-md-9">
                     <div style={{ display: 'flex', alignItems: 'center' }}>
                        <input type="checkbox" id="scribenotebook" style={{ verticalAlign: 'middle' }} /> Scribe Notebook
                     </div>
                  </div>
                  <div className="col-md-3">
                     <div style={{ display: "flex" }}>
                        <input type="text" className="form-control" id="scribenotebook" placeholder="1" />
                        <div style={{ display: "flex" }}>
                           <button style={{ border: "none", padding: "5px 10px", background: "transparent" }}>-</button>
                           <button style={{ border: "none", padding: "5px 10px", background: "transparent" }}>+</button>
                        </div>
                     </div>
                  </div>
               </div>

               <div className="row align-items-center mt-3">
                  <div className="col-md-9">
                     <div style={{ display: 'flex', alignItems: 'center' }}>
                        <input type="checkbox" id="treasurernotebook" style={{ verticalAlign: 'middle' }} /> Treasurer Notebook
                     </div>
                  </div>
                  <div className="col-md-3">
                     <div style={{ display: "flex" }}>
                        <input type="text" className="form-control" id="treasurernotebook" placeholder="1" />
                        <div style={{ display: "flex" }}>
                           <button style={{ border: "none", padding: "5px 10px", background: "transparent" }}>-</button>
                           <button style={{ border: "none", padding: "5px 10px", background: "transparent" }}>+</button>
                        </div>
                     </div>
                  </div>
               </div>

               <div className="row align-items-center mt-3">
                  <div className="col-md-9">
                     <div style={{ display: 'flex', alignItems: 'center' }}>
                        <input type="checkbox" id="blankbook" style={{ verticalAlign: 'middle' }} /> Blank Book & Check Book
                     </div>
                  </div>
                  <div className="col-md-3">
                     <div style={{ display: "flex" }}>
                        <input type="text" className="form-control" id="blankbook" placeholder="7" />
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
         
         <div className="d-flex justify-content-end mt-3">
            <Link to="/turnoverTF2">
               <button type="submit" form="submit" className="primary-btn" value="SUBMIT">
                  NEXT
               </button>
            </Link>
         </div>
      </div>
   );
}

export default TurnoverHR1;
