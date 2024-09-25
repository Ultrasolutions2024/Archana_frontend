import React from 'react'
import date from './assets/images/svg/date.svg'
import time from './assets/images/svg/time.svg'
import map from './assets/images/svg/map1.svg'
function KnowyourSign() {
  return (
    <section className="as_know_sign_wrapper as_padderBottom80 as_padderTop80">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h1 className="as_heading as_heading_center">
                Know Your Zodiac Sign
              </h1>
              <p className="as_font14 as_margin0 as_padderBottom50">
                Consectetur adipiscing elit, sed do eiusmod tempor
                incididuesdeentiut labore <br />
                etesde dolore magna aliquapspendisse and the gravida.
              </p>
              <div className="as_sign_form text-left">
                <ul>
                  <li className="as_form_box">
                    <h3 className="as_subheading">Date Of Birth</h3>
                    <div className="as_input_feild">
                      <input
                        type="text"
                        name=""
                        className="form-control as_datepicker"
                        placeholder="DD/MM/YYYY"
                        id=""
                      />
                      <span>
                        <img src={date} alt="" />
                      </span>
                    </div>
                  </li>
                  <li className="as_form_box">
                    <h3 className="as_subheading">Time Of Birth</h3>
                    <div className="as_input_feild">
                      <input
                        type="text"
                        name=""
                        className="form-control as_timepicker"
                        placeholder="08:00"
                        id=""
                      />
                      <span>
                        <img src={time} alt="" />
                      </span>
                    </div>
                  </li>
                  <li className="as_form_box">
                    <h3 className="as_subheading">Place Of Birth</h3>
                    <div className="as_input_feild">
                      <input
                        type="text"
                        name=""
                        className="form-control"
                        placeholder="Enter City Name...."
                        id=""
                      />
                      <span>
                        <img src={map} alt="" />
                      </span>
                    </div>
                  </li>
                  <li className="as_form_box">
                    <a href="javascript:;" className="as_btn">
                      find zodiac
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default KnowyourSign