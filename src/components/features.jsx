import React from "react";

export const Features = (props) => {
  return (
    <div id="abouts">
    <div id="about">
    <div className="container">
      <div className="row">
        <div id="mission" className="col-xs-12 col-md-6">
          {" "}
          <img src="img/mission.png" className="img-responsive" alt="" />{" "}
        </div>
        <div className="col-xs-12 col-md-6">
          <div className="about-text">
            <h2>Our Mission</h2>
            <p>{props.data ? props.data.paragraph1 : "loading..."}</p>
             <p>{props.data ? props.data.text2 : "loading..."}</p>
             <p>{props.data ? props.data.text3 : "loading..."}</p>
             <p>{props.data ? props.data.text4 : "loading..."}</p>
             <p>{props.data ? props.data.text5 : "loading..."}</p>

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
  </div>
    
  );
};
