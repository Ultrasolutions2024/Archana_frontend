import React from 'react'
import blog1 from "./assets/images/blog1.jpg"
import blog2 from "./assets/images/blog2.jpg"
import blog3 from "./assets/images/blog3.jpg"
import user from "./assets/images/svg/user.svg"
import comment from "./assets/images/svg/comment.svg"
function Blog() {
  return (
   <>
    <section className="as_blog_wrapper as_padderTop80 as_padderBottom80">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h1 className="as_heading as_heading_center">Our Latest Blog</h1>
            <p className="as_font14 as_margin0 as_padderBottom20">
              Consectetur adipiscing elit, sed do eiusmod tempor
              incididuesdeentiut labore <br />
              etesde dolore magna aliquapspendisse and the gravida.
            </p>
            <div className="text-left">
              <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                  <div className="as_blog_box">
                    <div className="as_blog_img">
                      <a href="blog_detail.html">
                        <img
                          src={blog1}
                          alt=""
                          className="img-responsive"
                        />
                      </a>
                      <span className="as_btn">July 29, 2020</span>
                    </div>
                    <ul>
                      <li>
                        <a href="javascript:;" style={{color:'white'}}>
                          <img src={user} alt="" />
                          By - Admin
                        </a>
                      </li>
                      <li>
                        <a href="javascript:;" style={{color:'white'}}>
                          <img src={comment} alt="" />0
                          comments
                        </a>
                      </li>
                    </ul>
                    <h4 className="as_subheading">
                      <a href="blog_left_detail.html" style={{color:'white'}}>
                        {" "}
                        Consectetur adipiscing elit sedeius mod tempor incididunt
                        ut labore.
                      </a>
                    </h4>
                    <p className="as_font14 as_margin0" style={{color:'white'}}>
                      Consectetur adipiscing elit, sed desdo eiusmod tempor
                      incididuesdeentiut labore etesde doloesire esdesdeges magna
                      aliquapspendisse and the gravida.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                  <div className="as_blog_box">
                    <div className="as_blog_img">
                      <a href="blog_detail.html">
                        <img
                          src={blog2}
                          alt=""
                          className="img-responsive"
                        />
                      </a>
                      <span className="as_btn">July 29, 2020</span>
                    </div>
                    <ul>
                      <li>
                        <a href="javascript:;" style={{color:'white'}}>
                          <img src={user} alt="" />
                          By - Admin
                        </a>
                      </li>
                      <li>
                        <a href="javascript:;" style={{color:'white'}}>
                          <img src={comment} alt="" />0
                          comments
                        </a>
                      </li>
                    </ul>
                    <h4 className="as_subheading" >
                      <a href="blog_left_detail.html" style={{color:'white'}}>
                        {" "}
                        Consectetur adipiscing elit sedeius mod tempor incididunt
                        ut labore.
                      </a>
                    </h4>
                    <p className="as_font14 as_margin0" >
                      Consectetur adipiscing elit, sed desdo eiusmod tempor
                      incididuesdeentiut labore etesde doloesire esdesdeges magna
                      aliquapspendisse and the gravida.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                  <div className="as_blog_box">
                    <div className="as_blog_img">
                      <a href="blog_detail.html">
                        <img
                          src={blog3}
                          alt=""
                          className="img-responsive"
                        />
                      </a>
                      <span className="as_btn">July 29, 2020</span>
                    </div>
                    <ul>
                      <li>
                        <a href="javascript:;" style={{color:'white'}}>
                          <img src={user} alt="" />
                          By - Admin
                        </a>
                      </li>
                      <li>
                        <a href="javascript:;" style={{color:'white'}}>
                          <img src={comment} alt="" />0
                          comments
                        </a>
                      </li>
                    </ul>
                    <h4 className="as_subheading">
                      <a href="blog_left_detail.html" style={{color:'white'}}>
                        {" "}
                        Consectetur adipiscing elit sedeius mod tempor incididunt
                        ut labore.
                      </a>
                    </h4>
                    <p className="as_font14 as_margin0">
                      Consectetur adipiscing elit, sed desdo eiusmod tempor
                      incididuesdeentiut labore etesde doloesire esdesdeges magna
                      aliquapspendisse and the gravida.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
   </>
  )
}

export default Blog