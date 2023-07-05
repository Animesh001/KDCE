import React from "react";

export const Testimonials = (props) => {
  return (
    <div id="testimonials">
      <div className="container">
        <div className="section-title text-center">
          <h2>Taiyaari Kal ki</h2>
        </div>
        <div id="badge" className="row">

            <div  className="col-sm-4 col-sm-3">
            <img id="cons" src="img/badge4.jpg" alt="" />
            </div>
            <div className="col-sm-4 col-sm-3">
            <img id="cons" src="img/badge2.jpg" alt="" />
            </div>
            <div className="col-sm-4 col-sm-3">
            <img id="cons" src="img/badge3.jpg" alt="" />
            </div>
            <div className="col-sm-4 col-sm-3">
            <img id="cons" src="img/badge1.jpg" alt="" />
            </div>

          {/* {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-4">
                  <div className="testimonial">
                    <div className="testimonial-image">
                      {" "}
                      <img src={d.img} alt="" />{" "}
                    </div>
                    <div className="testimonial-content">
                      <p>"{d.text}"</p>
                      <div className="testimonial-meta"> - {d.name} </div>
                    </div>
                  </div>
                </div>
              ))
            : "loading"} */}
        </div>
      </div>
    </div>
  );
};
