import React from 'react'
import calender from "./assets/images/svg/calender.svg"
function Overview() {
  return (
   <>
   
   <section className="as_overview_wrapper as_padderBottom80 as_padderTop80">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h1 className="as_heading as_heading_center">
              Daily Planetary Overview
            </h1>
            <p className="as_font14 as_margin0 as_padderBottom50">
              Consectetur adipiscing elit, sed do eiusmod tempor
              incididuesdeentiut labore <br />
              etesde dolore magna aliquapspendisse and the gravida.
            </p>
            <div className="as_overview_slider">
              <div className="as_overview_inner">
                <h4 className="as_orange">
                  Mercury in Aries square Mars in Capricorn{" "}
                </h4>
                <p className="as_font14">
                  Simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry's standard dummy text ever
                  since the 1500s, when an unknown printer took a galley of type
                  and scrambled it to make a type specimen book. It has survived
                  not only five centuries, but also the leap into electronic
                  typesetting, remaining essentially unchanged. It was popularised
                  in the 1960s with the release of Letraset sheets containing
                  Lorem Ipsum It has survived not only five rinter took a galley
                  of type and scrambled it centuries, but also the passages,
                </p>
                <span className="as_btn">
                  <img src={calender} alt="" /> July 29,
                  2020
                </span>
              </div>
              <div className="as_overview_inner">
                <h4 className="as_orange">
                  Mercury in Aries square Mars in Capricorn{" "}
                </h4>
                <p className="as_font14">
                  Simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry's standard dummy text ever
                  since the 1500s, when an unknown printer took a galley of type
                  and scrambled it to make a type specimen book. It has survived
                  not only five centuries, but also the leap into electronic
                  typesetting, remaining essentially unchanged. It was popularised
                  in the 1960s with the release of Letraset sheets containing
                  Lorem Ipsum It has survived not only five rinter took a galley
                  of type and scrambled it centuries, but also the passages,
                </p>
                <span className="as_btn">
                  <img src={calender} alt="" /> July 29,
                  2020
                </span>
              </div>
              <div className="as_overview_inner">
                <h4 className="as_orange">
                  Mercury in Aries square Mars in Capricorn{" "}
                </h4>
                <p className="as_font14">
                  Simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry's standard dummy text ever
                  since the 1500s, when an unknown printer took a galley of type
                  and scrambled it to make a type specimen book. It has survived
                  not only five centuries, but also the leap into electronic
                  typesetting, remaining essentially unchanged. It was popularised
                  in the 1960s with the release of Letraset sheets containing
                  Lorem Ipsum It has survived not only five rinter took a galley
                  of type and scrambled it centuries, but also the passages,
                </p>
                <span className="as_btn">
                  <img src={calender} alt="" /> July 29,
                  2020
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section></>
  )
}

export default Overview