import React from 'react'
import customer1 from "./assets/images/customer1.jpg"
import customer2 from "./assets/images/customer2.jpg"
import quote from './assets/images/svg/quote1.svg'

function CustomerSay() {
  return (
<>
<section className="as_customer_wrapper as_padderBottom80 as_padderTop80">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h1 className="as_heading as_heading_center">
                What Our Customers Say
              </h1>
              <p className="as_font14 as_margin0 as_padderBottom50">
                Consectetur adipiscing elit, sed do eiusmod tempor
                incididuesdeentiut labore <br />
                etesde dolore magna aliquapspendisse and the gravida.
              </p>
            </div>
            <div className="row as_customer_slider">
              <div className="col-lg-6 col-md-6">
                <div className="as_customer_box text-center">
                  <span className="as_customer_img">
                    <img src={customer1} alt="" />
                    <span>
                      <img src={quote} alt="" />
                    </span>
                  </span>
                  <p className="as_margin0">
                    Consectetur adipiscing elit, sed do eiusmod tempor incididunt
                    ut labore et dolore magna aliqua. Quis ipsum suspendisse
                    ultrices gravidaesdisus commodo viverra maecenas accumsan
                    lacus vel facilisis.{" "}
                  </p>
                  <h3>David Parker</h3>
                  <p className="as_margin0">Astrologer</p>
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="as_customer_box text-center">
                  <span className="as_customer_img">
                    <img src={customer2} alt="" />
                    <span>
                      <img src={quote} alt="" />
                    </span>
                  </span>
                  <p className="as_margin0">
                    Consectetur adipiscing elit, sed do eiusmod tempor incididunt
                    ut labore et dolore magna aliqua. Quis ipsum suspendisse
                    ultrices gravidaesdisus commodo viverra maecenas accumsan
                    lacus vel facilisis.{" "}
                  </p>
                  <h3>John Parker</h3>
                  <p className="as_margin0">Astrologer</p>
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="as_customer_box text-center">
                  <span className="as_customer_img">
                    <img src={customer2} alt="" />
                    <span>
                      <img src={quote} alt="" />
                    </span>
                  </span>
                  <p className="as_margin0">
                    Consectetur adipiscing elit, sed do eiusmod tempor incididunt
                    ut labore et dolore magna aliqua. Quis ipsum suspendisse
                    ultrices gravidaesdisus commodo viverra maecenas accumsan
                    lacus vel facilisis.{" "}
                  </p>
                  <h3>John Parker</h3>
                  <p className="as_margin0">Astrologer</p>
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="as_customer_box text-center">
                  <span className="as_customer_img">
                    <img src={customer1} alt="" />
                    <span>
                      <img src={quote} alt="" />
                    </span>
                  </span>
                  <p className="as_margin0">
                    Consectetur adipiscing elit, sed do eiusmod tempor incididunt
                    ut labore et dolore magna aliqua. Quis ipsum suspendisse
                    ultrices gravidaesdisus commodo viverra maecenas accumsan
                    lacus vel facilisis.{" "}
                  </p>
                  <h3>John Parker</h3>
                  <p className="as_margin0">Astrologer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
</>
  )
}

export default CustomerSay