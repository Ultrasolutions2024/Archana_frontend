import React from 'react'
import prod1 from "./assets/images/prod1.jpg"
import prod2 from "./assets/images/prod2.jpg"
import prod3 from "./assets/images/prod3.jpg"
import prod4 from "./assets/images/prod4.jpg"
import prod5 from "./assets/images/prod5.jpg"
import wishlist from "./assets/images/svg/wishlist.svg"
import cart from "./assets/images/svg/cart.svg"
import compare from "./assets/images/svg/compare.svg"
import rating from "./assets/images/rating.png";
import './index.css'
function Products() {
  return (
  <>
    <section className="as_product_wrapper as_padderBottom80 as_padderTop80">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h1 className="as_heading as_heading_center">Our Latest Products</h1>
            <p className="as_font14 as_margin0 as_padderBottom20">
              Consectetur adipiscing elit, sed do eiusmod tempor
              incididuesdeentiut labore <br />
              etesde dolore magna aliquapspendisse and the gravida.
            </p>
            <div className="row as_product_slider">
              <div className=""   style={{width:"100px"}}>
                <div className="as_product_box">
                  <div className="as_product_img">
                    <img
                      src={prod1}
                      alt=""
                      className="img-responsive"
                    />
                    <ul>
                      <li>
                        <a href="cart.html">
                          <img src={wishlist} alt="" />
                        </a>
                      </li>
                      <li>
                        <a href="cart.html">
                          <img src={cart} alt="" />
                          <span>Add To Card</span>
                        </a>
                      </li>
                      <li>
                        <a href="shop.html">
                          <img src={compare} alt="" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <span>
                    <img src={rating} alt="" />
                  </span>
                  <h4 className="as_subheading">Gemstone</h4>
                  <span className="as_price">
                    $20 <del>$80</del>{" "}
                    <span className="as_orange">(60% off)</span>
                  </span>
                </div>
              </div>
              <div className=""   style={{width:"100px"}}>
                <div className="as_product_box">
                  <div className="as_product_img">
                    <img
                      src={prod2}
                      alt=""
                      className="img-responsive"
                    />
                    <ul>
                      <li>
                        <a href="cart.html">
                          <img src={wishlist} alt="" />
                        </a>
                      </li>
                      <li>
                        <a href="cart.html">
                          <img src={cart} alt="" />
                          <span>Add To Card</span>
                        </a>
                      </li>
                      <li>
                        <a href="shop.html">
                          <img src={compare} alt="" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <span>
                    <img src={rating} alt="" />
                  </span>
                  <h4 className="as_subheading">Gemstone</h4>
                  <span className="as_price">
                    $20 <del>$80</del>{" "}
                    <span className="as_orange">(60% off)</span>
                  </span>
                </div>
              </div>
              <div className=""   style={{width:"100px"}}>
                <div className="as_product_box">
                  <div className="as_product_img">
                    <img
                      src={prod3}
                      alt=""
                      className="img-responsive"
                    />
                    <ul>
                      <li>
                        <a href="cart.html">
                          <img src={wishlist} alt="" />
                        </a>
                      </li>
                      <li>
                        <a href="cart.html">
                          <img src={cart} alt="" />
                          <span>Add To Card</span>
                        </a>
                      </li>
                      <li>
                        <a href="shop.html">
                          <img src={compare} alt="" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <span>
                    <img src={rating} alt="" />
                  </span>
                  <h4 className="as_subheading">Gemstone</h4>
                  <span className="as_price">
                    $20 <del>$80</del>{" "}
                    <span className="as_orange">(60% off)</span>
                  </span>
                </div>
              </div>
              <div className=""   style={{width:"100px"}}>
                <div className="as_product_box">
                  <div className="as_product_img">
                    <img
                      src={prod4}
                      alt=""
                      className="img-responsive"
                    />
                    <ul>
                      <li>
                        <a href="cart.html">
                          <img src={wishlist} alt="" />
                        </a>
                      </li>
                      <li>
                        <a href="cart.html">
                          <img src={wishlist} alt="" />
                          <span>Add To Card</span>
                        </a>
                      </li>
                      <li>
                        <a href="shop.html">
                          <img src={compare} alt="" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <span>
                    <img src={rating} alt="" />
                  </span>
                  <h4 className="as_subheading">Gemstone</h4>
                  <span className="as_price">
                    $20 <del>$80</del>{" "}
                    <span className="as_orange">(60% off)</span>
                  </span>
                </div>
              </div>
              <div className=""   style={{width:"100px"}}>
                <div className="as_product_box">
                  <div className="as_product_img">
                    <img
                      src={prod1}
                      alt=""
                      className="img-responsive"
                    />
                    <ul>
                      <li>
                        <a href="cart.html">
                          <img src={wishlist} alt="" />
                        </a>
                      </li>
                      <li>
                        <a href="cart.html">
                          <img src={cart} alt="" />
                          <span>Add To Card</span>
                        </a>
                      </li>
                      <li>
                        <a href="shop.html">
                          <img src={compare} alt="" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <span>
                    <img src={rating} alt="" />
                  </span>
                  <h4 className="as_subheading">Gemstone</h4>
                  <span className="as_price">
                    $20 <del>$80</del>{" "}
                    <span className="as_orange">(60% off)</span>
                  </span>
                </div>
              </div>
              <div className=""   style={{width:"100px"}}>
                <div className="as_product_box">
                  <div className="as_product_img">
                    <img
                      src={prod2}
                      alt=""
                      className="img-responsive"
                    />
                    <ul>
                      <li>
                        <a href="cart.html">
                          <img src={wishlist} alt="" />
                        </a>
                      </li>
                      <li>
                        <a href="cart.html">
                          <img src={cart} alt="" />
                          <span>Add To Card</span>
                        </a>
                      </li>
                      <li>
                        <a href="shop.html">
                          <img src={compare} alt="" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <span>
                    <img src={rating} alt="" />
                  </span>
                  <h4 className="as_subheading">Gemstone</h4>
                  <span className="as_price">
                    $20 <del>$80</del>{" "}
                    <span className="as_orange">(60% off)</span>
                  </span>
                </div>
              </div>
              <div className=""   style={{width:"100px"}}>
                <div className="as_product_box">
                  <div className="as_product_img">
                    <img
                      src={prod3}
                      alt=""
                      className="img-responsive"
                    />
                    <ul>
                      <li>
                        <a href="cart.html">
                          <img src={wishlist} alt="" />
                        </a>
                      </li>
                      <li>
                        <a href="cart.html">
                          <img src={cart} alt="" />
                          <span>Add To Card</span>
                        </a>
                      </li>
                      <li>
                        <a href="shop.html">
                          <img src={compare} alt="" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <span>
                    <img src={rating} alt="" />
                  </span>
                  <h4 className="as_subheading">Gemstone</h4>
                  <span className="as_price">
                    $20 <del>$80</del>{" "}
                    <span className="as_orange">(60% off)</span>
                  </span>
                </div>
              </div>
              <div className=""   style={{width:"100px"}}>
                <div className="as_product_box">
                  <div className="as_product_img">
                    <img
                      src={prod4}
                      alt=""
                      className="img-responsive"
                    />
                    <ul>
                      <li>
                        <a href="cart.html">
                          <img src={wishlist} alt="" />
                        </a>
                      </li>
                      <li>
                        <a href="cart.html">
                          <img src={cart} alt="" />
                          <span>Add To Card</span>
                        </a>
                      </li>
                      <li>
                        <a href="shop.html">
                          <img src={compare} alt="" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <span>
                    <img src={rating} alt="" />
                  </span>
                  <h4 className="as_subheading">Gemstone</h4>
                  <span className="as_price">
                    $20 <del>$80</del>{" "}
                    <span className="as_orange">(60% off)</span>
                  </span>
                </div>
              </div>
              <div className=""   style={{width:"100px"}}>
                <div className="as_product_box">
                  <div className="as_product_img">
                    <img
                      src={prod1}
                      alt=""
                      className="img-responsive"
                    />
                    <ul>
                      <li>
                        <a href="cart.html">
                          <img src={wishlist} alt="" />
                        </a>
                      </li>
                      <li>
                        <a href="cart.html">
                          <img src={cart} alt="" />
                          <span>Add To Card</span>
                        </a>
                      </li>
                      <li>
                        <a href="shop.html">
                          <img src={compare} alt="" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <span>
                    <img src={rating} alt="" />
                  </span>
                  <h4 className="as_subheading">Gemstone</h4>
                  <span className="as_price">
                    $20 <del>$80</del>{" "}
                    <span className="as_orange">(60% off)</span>
                  </span>
                </div>
              </div>
              <div className=""   style={{width:"100px"}}>
                <div className="as_product_box">
                  <div className="as_product_img">
                    <img
                      src={prod2}
                      alt=""
                      className="img-responsive"
                    />
                    <ul>
                      <li>
                        <a href="cart.html">
                          <img src={wishlist} alt="" />
                        </a>
                      </li>
                      <li>
                        <a href="cart.html">
                          <img src={cart} alt="" />
                          <span>Add To Card</span>
                        </a>
                      </li>
                      <li>
                        <a href="shop.html">
                          <img src={compare} alt="" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <span>
                    <img src={rating} alt="" />
                  </span>
                  <h4 className="as_subheading">Gemstone</h4>
                  <span className="as_price">
                    $20 <del>$80</del>{" "}
                    <span className="as_orange">(60% off)</span>
                  </span>
                </div>
              </div>
              <div className=""   style={{width:"100px"}}>
                <div className="as_product_box">
                  <div className="as_product_img">
                    <img
                      src={prod3}
                      alt=""
                      className="img-responsive"
                    />
                    <ul>
                      <li>
                        <a href="cart.html">
                          <img src={wishlist} alt="" />
                        </a>
                      </li>
                      <li>
                        <a href="cart.html">
                          <img src={cart} alt="" />
                          <span>Add To Card</span>
                        </a>
                      </li>
                      <li>
                        <a href="shop.html">
                          <img src={compare} alt="" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <span>
                    <img src={rating} alt="" />
                  </span>
                  <h4 className="as_subheading">Gemstone</h4>
                  <span className="as_price">
                    $20 <del>$80</del>{" "}
                    <span className="as_orange">(60% off)</span>
                  </span>
                </div>
              </div>
              <div className=""   style={{width:"100px"}}>
                <div className="as_product_box">
                  <div className="as_product_img">
                    <img
                      src={prod4}
                      alt=""
                      className="img-responsive"
                    />
                    <ul>
                      <li>
                        <a href="cart.html">
                          <img src={wishlist} alt="" />
                        </a>
                      </li>
                      <li>
                        <a href="cart.html">
                          <img src={cart} alt="" />
                          <span>Add To Card</span>
                        </a>
                      </li>
                      <li>
                        <a href="shop.html">
                          <img src={compare} alt="" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <span>
                    <img src={rating} alt="" />
                  </span>
                  <h4 className="as_subheading">Gemstone</h4>
                  <span className="as_price">
                    $20 <del>$80</del>{" "}
                    <span className="as_orange">(60% off)</span>
                  </span>
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

export default Products