import { Image } from "./image";
import React from "react";

export const Gallery = (props) => {
  return (
    <div id="about">
      <div className="container">
        <div className="row">
        {/* <h2>Your contribution motivate us</h2> */}
          <div className="col-xs-12 col-md-6">
            {" "}
            <div className="col-md-24 col-md-offset-2 section-title">
          <h2>Charity does not decrease wealth</h2>
          </div>
            <img id="nxn" src="img/qr2.jpg" className="img-responsive" alt="" />{" "}
          </div>
          <div  className="col-xs-12 col-md-6">
          
            {" "}
            <img id={"pack"} src="img/phone.png" className="img-responsive" alt="" />{" "}
            
          </div>
          
          {/* <div  className="col-xs-12 col-md-6">
          <div class="wrapper">
        <h2>donate with soul</h2>
        <form method="POST">
            <h4>Account</h4>
            <div class="input-group">
                <div class="input-box">
                    <input type="text" placeholder="Full Name" required class="name"/>
                    <i class="fa fa-user icon"></i>
                </div>
                <div class="input-box">
                    <input type="text" placeholder="Nick Name" required class="name"/>
                    <i class="fa fa-user icon"></i>
                </div>
            </div>
            <div class="input-group">
                <div class="input-box">
                    <input type="email" placeholder="Email Adress" required class="name"/>
                    <i class="fa fa-envelope icon"></i>
                </div>
            </div>
            <div class="input-group">
                <div class="input-box">
                    <h4> Date of Birth</h4>
                    <input type="text" placeholder="DD" class="dob"/>
                    <input type="text" placeholder="MM" class="dob"/>
                    <input type="text" placeholder="YYYY" class="dob"/>
                </div>
                <div class="input-box">
                    <h4> Gender</h4>
                    <input type="radio" id="b1" name="gendar" checked class="radio"/>
                    <label for="b1">Male</label>
                    <input type="radio" id="b2" name="gendar" class="radio"/>
                    <label for="b2">Female</label>
                </div>
            </div>
            <div class="input-group">
                <div class="input-box">
                    <h4>Payment Details</h4>
                    <input type="radio" name="pay" id="bc1" checked class="radio"/>
                    <label for="bc1"><span><i class="fa fa-cc-visa"></i> Credit Card</span></label>
                    <input type="radio" name="pay" id="bc2" class="radio"/>
                    <label for="bc2"><span><i class="fa fa-cc-paypal"></i> Paypal</span></label>
                </div>
            </div>
            <div class="input-group">
                <div class="input-box">
                    <input type="tel" placeholder="Card Number" required class="name"/>
                    <i class="fa fa-credit-card icon"></i>
                </div>
            </div>
            <div class="input-group">
                <div class="input-box">
                    <input type="tel" placeholder="Card CVC" required class="name"/>
                    <i class="fa fa-user icon"></i>
                </div>
                <div class="input-box">
                    <select>
                        <option>01 jun</option>
                        <option>02 jun</option>
                        <option>03 jun</option>
                    </select>
                    <select>
                        <option>2020</option>
                        <option>2021</option>
                        <option>2022</option>
                    </select>
                </div>
            </div>
            <div class="input-group">
                <div class="input-box">
                    <button type="submit">PAY NOW</button>
                </div>
            </div>
        </form>
    </div>
    </div> */}




          
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              
              <p>{props.data ? props.data.paragraph : "loading..."}</p>
               {/* <p>{props.data ? props.data.title : "loading..."}</p> */}

               {/* <h3>Why Choose Us?</h3> */}
              <div className="list-style">
                {/* <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    {props.data
                      ? props.data.Why.map((d, i) => (
                          <li key={`${d}-${i}`}>{d}</li>
                        ))
                      : "loading"}
                  </ul>
                </div>  */}
                {/* <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    {props.data
                      ? props.data.Why2.map((d, i) => (
                          <li key={`${d}-${i}`}> {d}</li>
                        ))
                      : "loading"}
                  </ul>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
