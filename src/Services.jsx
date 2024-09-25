import React from 'react'
import service1 from './assets/images/svg/service1.svg'
import service2 from './assets/images/svg/service2.svg'
import service3 from './assets/images/svg/service3.svg'
import service4 from './assets/images/svg/service4.svg'
import service5 from './assets/images/svg/service5.svg'
import service6 from './assets/images/svg/service6.svg'
import service7 from './assets/images/svg/service7.svg'
import service8 from './assets/images/svg/service8.svg'

export default function Services() {
  return (
    <section className="as_service_wrapper as_padderTop80 as_padderBottom80 ">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
          <h1 className="as_heading as_heading_center">our services</h1>
          <p className="as_font14 as_padderBottom5">
            Consectetur adipiscing elit, sed do eiusmod tempor
            incididuesdeentiut labore <br />
            etesde dolore magna aliquapspendisse and the gravida.
          </p>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
          <div className="as_service_box text-center">
            <span className="as_icon">
              <img src={service1} alt="" />
            </span>
            <h4 className="as_subheading" style={{color:"white"}}>Vastu Shastra</h4>
            <p style={{color:"white"}}>
              Consectetur adipiscing elit sed do <br />
              eiusmod tempor incididunt.
            </p>
            <a href="service_detail.html" className="as_link">
              read more
            </a>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
          <div className="as_service_box text-center">
            <span className="as_icon">
              <img src={service2} alt="" />
            </span>
            <h4 className="as_subheading" style={{color:"white"}}>Birth Journal</h4>
            <p style={{color:"white"}}>
              Consectetur adipiscing elit sed do <br />
              eiusmod tempor incididunt.
            </p>
            <a href="service_detail.html" className="as_link">
              read more
            </a>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
          <div className="as_service_box text-center">
            <span className="as_icon">
              <img src={service3} alt="" />
            </span>
            <h4 className="as_subheading" style={{color:"white"}}>Manglik Dosha</h4>
            <p style={{color:"white"}}>
              Consectetur adipiscing elit sed do <br />
              eiusmod tempor incididunt.
            </p>
            <a href="service_detail.html" className="as_link">
              read more
            </a>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
          <div className="as_service_box text-center">
            <span className="as_icon">
              <img src={service4} alt="" />
            </span>
            <h4 className="as_subheading" style={{color:"white"}}>Lal Kitab</h4>
            <p style={{color:"white"}}>
              Consectetur adipiscing elit sed do <br />
              eiusmod tempor incididunt.
            </p>
            <a href="service_detail.html" className="as_link">
              read more
            </a>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
          <div className="as_service_box text-center">
            <span className="as_icon">
              <img src={service5} alt="" />
            </span>
            <h4 className="as_subheading" style={{color:"white"}}>Crystal Ball</h4>
            <p style={{color:"white"}}>
              Consectetur adipiscing elit sed do <br />
              eiusmod tempor incididunt.
            </p>
            <a href="service_detail.html" className="as_link">
              read more
            </a>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
          <div className="as_service_box text-center">
            <span className="as_icon">
              <img src={service7} alt="" />
            </span>
            <h4 className="as_subheading" style={{color:"white"}}>Kundli Dosh</h4>
            <p style={{color:"white"}}>
              Consectetur adipiscing elit sed do <br />
              eiusmod tempor incididunt.
            </p>
            <a href="service_detail.html" className="as_link">
              read more
            </a>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
          <div className="as_service_box text-center">
            <span className="as_icon">
              <img src={service8} alt="" />
            </span>
            <h4 className="as_subheading" style={{color:"white"}}>Tarot Reading</h4>
            <p style={{color:"white"}}>
              Consectetur adipiscing elit sed do <br />
              eiusmod tempor incididunt.
            </p>
            <a href="service_detail.html" className="as_link">
              read more
            </a>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
          <div className="as_service_box text-center">
            <span className="as_icon">
              <img src={service8} alt="" />
            </span>
            <h4 className="as_subheading" style={{color:"white"}}>Palm Reading</h4>
            <p style={{color:"white"}}>
              Consectetur adipiscing elit sed do <br />
              eiusmod tempor incididunt.
            </p>
            <a href="service_detail.html" className="as_link">
              read more
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}
