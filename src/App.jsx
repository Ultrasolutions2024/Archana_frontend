import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './style.css'
import './bootstrap.min.css'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel';
// import './fonts.css'
import logo from './assets/images/logo.svg'
import headphone from './assets/images/svg/headphone.svg'
import mail from './assets/images/svg/mail1.svg'
import login from './assets/images/svg/login.svg'
import cart from './assets/images/svg/cart.svg'
import prod1 from './assets/images/prod1_d.jpg'
import menu from './assets/images/svg/menu.svg'
import search from './assets/images/search.png'
// import prod2 from "./assets/images/prod2_D.html"
import herochakra from './assets/images/banner_image.png'
import $ from 'jquery';
import About from './About'
import Services from './Services'
import WhyChoseus from './WhyChoseus'
import KnowyourSign from './KnowyourSign'
import CustomerSay from './CustomerSay'
import WhyChoseUs2 from './WhyChoseUs2'
import Blog from './Blog'
import Products from './Products'
import Overview from './Overview'
import Foter from './Foter'
function App() {
  useEffect(() => {
    $(document).ready(function(){
      $('.as_banner_slider').slick({
        dots: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<button type="button" className="slick-prev as_btn"><span><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid" width="12" height="16" viewBox="0 0 12 16"> <path d="M12.003,15.996 L-0.000,7.997 L12.002,-0.001 L10.062,7.997 L12.003,15.996 ZM10.102,2.762 L2.246,7.997 L10.102,13.233 L8.832,7.997 L10.102,2.762 ZM3.824,7.997 L8.256,5.043 L7.539,7.997 L8.256,10.951 L3.824,7.997 Z" class="cls-1"/> </svg>PREV</span> </button>',
        nextArrow: '<button type="button" className="slick-next as_btn">next <span><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid" width="8" height="12" viewBox="0 0 8 12"><path d="M8.000,5.998 L-0.002,11.997 L1.292,5.998 L-0.002,-0.001 L8.000,5.998 ZM1.265,9.924 L6.502,5.998 L1.265,2.071 L2.112,5.998 L1.265,9.924 ZM5.451,5.998 L2.496,8.213 L2.974,5.998 L2.496,3.783 L5.451,5.998 Z" class="cls-1"/> </svg></span></button>'
      
      });
       // customer slider
    $('.as_customer_slider').slick({
      infinite: false,
      dots: true,
      speed: 800,
      slidesToShow: 2,
      slidesToScroll: 2,
      prevArrow:'<button type="button" class="slick-prev as_btn"><span><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid" width="12" height="16" viewBox="0 0 12 16"> <path d="M12.003,15.996 L-0.000,7.997 L12.002,-0.001 L10.062,7.997 L12.003,15.996 ZM10.102,2.762 L2.246,7.997 L10.102,13.233 L8.832,7.997 L10.102,2.762 ZM3.824,7.997 L8.256,5.043 L7.539,7.997 L8.256,10.951 L3.824,7.997 Z" class="cls-1"/> </svg></span> Prev</button>',
      nextArrow:'<button type="button" class="slick-next as_btn">next <span><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid" width="8" height="12" viewBox="0 0 8 12"><path d="M8.000,5.998 L-0.002,11.997 L1.292,5.998 L-0.002,-0.001 L8.000,5.998 ZM1.265,9.924 L6.502,5.998 L1.265,2.071 L2.112,5.998 L1.265,9.924 ZM5.451,5.998 L2.496,8.213 L2.974,5.998 L2.496,3.783 L5.451,5.998 Z" class="cls-1"/> </svg></span></button>',
      responsive: [
          {
            breakpoint: 991,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: true,
              arrows:false
            }
          },
        ]
  });

  // product slider
  $('.as_product_slider').slick({
      arrows: false,
      infinite:true,
      speed:800,
      dots:true,
      slidesToShow: 4,
      slidesToScroll: 4,
      autoplay: true,
      autoplaySpeed: 4000,
      responsive: [
          {
            breakpoint: 1199,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              dots: true,
              arrows:false
            }
          },
          {
            breakpoint: 991,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              dots: true,
              arrows:false
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              dots: true,
              arrows:false
            }
          },
          {
            breakpoint: 568,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: true,
              arrows:false
            }
          },
        ]
     
  });
  // overview slider
  $('.as_about_slider').slick({
      infinite:true,
      speed:800,
      dots:true,
      arrows:false,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: 4000
  });
  // overview slider
  $('.as_overview_slider').slick({
      infinite:true,
      speed:800,
      dots:true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 4000,
      prevArrow:'<button type="button" class="slick-prev as_btn"><span><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid" width="12" height="16" viewBox="0 0 12 16"> <path d="M12.003,15.996 L-0.000,7.997 L12.002,-0.001 L10.062,7.997 L12.003,15.996 ZM10.102,2.762 L2.246,7.997 L10.102,13.233 L8.832,7.997 L10.102,2.762 ZM3.824,7.997 L8.256,5.043 L7.539,7.997 L8.256,10.951 L3.824,7.997 Z" class="cls-1"/> </svg></span> Prev</button>',
      nextArrow:'<button type="button" class="slick-next as_btn">next <span><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid" width="8" height="12" viewBox="0 0 8 12"><path d="M8.000,5.998 L-0.002,11.997 L1.292,5.998 L-0.002,-0.001 L8.000,5.998 ZM1.265,9.924 L6.502,5.998 L1.265,2.071 L2.112,5.998 L1.265,9.924 ZM5.451,5.998 L2.496,8.213 L2.974,5.998 L2.496,3.783 L5.451,5.998 Z" class="cls-1"/> </svg></span></button>' ,
      responsive: [
          {
            breakpoint: 991,
            settings: {
              arrows:false
            }
          },
        ]
  });
  //  shop single slider
  $('.as_shopsingle_for').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite:true,
      speed:800,
      arrows: false,
      fade: true,
      asNavFor: '.as_shopsingle_nav'
  });
  $('.as_shopsingle_nav').slick({
    slidesToShow: 4,
    arrows: false,
    slidesToScroll: 1,
    asNavFor: '.as_shopsingle_for',
    dots: false,
    centerMode: true,
    focusOnSelect: true
  });
  // card slider
  $('.as_card_slider').slick({
      infinite:true,
      speed:800,
      dots:false,
      arrows:false,
      slidesToShow: 4,
      slidesToScroll: 4,
      autoplay: true,
      autoplaySpeed: 4000,
      responsive: [
        {
          breakpoint: 1199,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          }
        },
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        }
      ]
  });
  
  // datepicker
  $('.as_datepicker').datepicker({
      language: 'en'
  });

  // timepicker
  $('.as_timepicker').datepicker({
      dateFormat: ' ',
      timepicker: true,
      classes: 'only-timepicker',
      language: 'en' 
  });

  // countTo
  $('.as_number>span>span').countTo();
  
  // search popup
  $('.as_search').on('click', function(){
      $(this).parent().find('.as_search_boxpopup').addClass('popup_open');
  })
  $('.as_cancel').on('click', function(){
      $(this).parent().removeClass('popup_open');
  })

  // menu toggle
  $('.as_toggle').on('click',function(){
      $(this).parent().toggleClass('menu_open');
      $(this).parent().find('.as_menu ul  li .as_submenu').parent().addClass('as_submenu_li')
  })
  $('.as_body_overlay').on('click',function(){
      $('.as_menu_wrapper').removeClass('menu_open');
  })
  // responsive menu
  $(document).on('click','.as_menu > ul > li >a',function(){
    // console.log($(this).closest('li').find('ul.submenu'))
    $('.as_menu >ul > li>.as_submenu').removeClass('active');
    $(this).closest('li').find('>ul.as_submenu').addClass('active')
  })
  $(document).on('click','.as_menu > ul > li > ul > li >a',function(){
    // console.log($(this).closest('li').find('ul.submenu'))
    $(this).closest('li').find('>ul.as_submenu').toggleClass('active')
  })

  // cart box
  $('.as_cart_wrapper').on('click',function(){
      $(this).parent().toggleClass('cart_open');
  })

  // login popup
  $('.as_signup').on('click',function(){
    $(this).closest('.modal-body').find('.as_login_box').removeClass('active');
    $(this).closest('.modal-body').find('.as_signup_box').addClass('active');
    $(this).closest('.modal-content').find('.modal-title').text('Sign Up');
  })
  $('.as_login').on('click',function(){
    $(this).closest('.modal-body').find('.as_login_box').addClass('active');
    $(this).closest('.modal-body').find('.as_signup_box').removeClass('active');
    $(this).closest('.modal-content').find('.modal-title').text('Login');
  })

  if($('.as_select_box').length){
    $(".as_select_box select").select2({
        placeholder: 'data-placeholder',
        allowClear: true
    });
}
    });
    // circle
    if($('.as_progressbar').length){
      $(".as_progressbar.p1").circularProgress({
          color:'#ff7010',
          starting_position: 0, // 12.00 o' clock position, 25 stands for 3.00 o'clock (clock-wise)
          percent: 0, // percent starts from
          percentage: true,
      }).circularProgress('animate', 45, 5000);
      $(".as_progressbar.p2").circularProgress({
          color:'#ff7010',
          starting_position: 0, // 12.00 o' clock position, 25 stands for 3.00 o'clock (clock-wise)
          percent: 0, // percent starts from
          percentage: true,
      }).circularProgress('animate', 94, 5000);
      $(".as_progressbar.p3").circularProgress({
          color:'#ff7010',
          starting_position: 0, // 12.00 o' clock position, 25 stands for 3.00 o'clock (clock-wise)
          percent: 0, // percent starts from
          percentage: true,
      }).circularProgress('animate', 84, 5000);
      $(".as_progressbar.p4").circularProgress({
          color:'#ff7010',
          starting_position: 0, // 12.00 o' clock position, 25 stands for 3.00 o'clock (clock-wise)
          percent: 0, // percent starts from
          percentage: true,
      }).circularProgress('animate', 64, 5000);
      $(".as_progressbar.p5").circularProgress({
          color:'#ff7010',
          starting_position: 0, // 12.00 o' clock position, 25 stands for 3.00 o'clock (clock-wise)
          percent: 0, // percent starts from
          percentage: true,
      }).circularProgress('animate', 76, 5000);
   }
    // step
  $(document).on('click','.checkout_wrapper_box .next',function(){
    var targetNum = $(this).attr('data-step');
    $(this).closest('.checkout_wrapper_box').find('.step').css('display','none');
    $(this).closest('.checkout_wrapper_box').find('[data-target="'+targetNum+'"]').css('display','block');
    $(this).closest('.checkout_wrapper_box').find('[data-active="'+targetNum+'"]').addClass('active');
    // $(this).cloasest('.checkout_wrapper_box').find('data-target="'+targetNum+'"').css('display','block');
  })

  // number increase
  $('.quantity .plus').on('click', function(){
    var num = parseInt($('.quantity').find('input').val())+1; 
    $(this).closest('.quantity').find('input').val(num);
  }) 
  $('.quantity .minus').on('click', function(){
    var num = parseInt($('.quantity').find('input').val())-1; 
    $(this).closest('.quantity').find('input').val(num);
  }) 
  
  }, []);
  return (
    <>
    <div className="as_main_wrapper">
      <section className="as_header_wrapper">
        <div className="as_logo">
          <a href="javascript:;">
            <img src={logo} alt="" />
          </a>
        </div>
        <div className="as_header_detail">
          <div className="as_info_detail">
            <ul>
              <li>
                <a href="javascript:;">
                  <div className="as_infobox">
                    <span className="as_infoicon">
                      <img src={headphone} alt="" />
                    </span>
                    <span className="as_orange">Talk to our Astrogers -</span>
                    +1800 326 3264
                  </div>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <div className="as_infobox">
                    <span className="as_infoicon">
                      <img src={mail} alt="" />
                    </span>
                    <span className="as_orange">Talk to our Astrogers -</span>
                    support@website.com
                  </div>
                </a>
              </li>
            </ul>
            <div className="as_right_info">
              <a href="javascript:;">
                <div
                  className="as_infobox"
                  data-bs-toggle="modal"
                  data-bs-target="#as_login"
                >
                  <span className="as_infoicon">
                    <img src={login} alt="" />
                  </span>
                  <span className="as_logintext">Log in / Register</span>
                </div>
              </a>
              <div className="as_cart">
                <div className="as_cart_wrapper">
                  <span>
                    <img src={cart} alt="" />
                    <span className="as_cartnumber">02</span>
                  </span>
                  $512
                </div>
                <div className="as_cart_box">
                  <div className="as_cart_list">
                    <ul>
                      <li>
                        <div className="as_cart_img">
                          <img
                            src={prod1}
                            className="img-responsive"
                          />
                        </div>
                        <div className="as_cart_info">
                          <a href="#">Yellow Sapphire</a>
                          <p>1 X $20.00</p>
                          <a href="javascript:;" className="as_cart_remove">
                            <i className="fa fa-trash" />
                          </a>
                        </div>
                      </li>
                      <li>
                        <div className="as_cart_img">
                          <img
                            src={prod1}
                            className="img-responsive"
                          />
                        </div>
                        <div className="as_cart_info">
                          <a href="#">yantra</a>
                          <p>1 X $10.00</p>
                          <a href="javascript:;" className="as_cart_remove">
                            <i className="fa fa-trash" />
                          </a>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="as_cart_total">
                    <p>
                      total<span>$30.00</span>
                    </p>
                  </div>
                  <div className="as_cart_btn">
                    <button type="button" className="as_btn">
                      view cart
                    </button>
                    <button type="button" className="as_btn">
                      checkout
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="as_menu_wrapper">
            <span className="as_toggle bg_overlay">
              <img src={menu} alt="" />
            </span>
            <div className="as_menu">
              <ul>
                <li>
                  <a href="index.html" className="active">
                    home
                  </a>
                </li>
                <li>
                  <a href="about.html">about</a>
                </li>
                <li>
                  <a href="service.html">services</a>
                </li>
                <li>
                  <a href="javascript:;">blog</a>
                  <ul className="as_submenu">
                    <li>
                      <a href="blog.html">blog</a>
                    </li>
                    <li>
                      <a href="javascript:;">blog single</a>
                      <ul className="as_submenu">
                        <li>
                          <a href="blog_left_detail.html">left sidebar</a>
                        </li>
                        <li>
                          <a href="blog_detail.html">right sidebar</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="appointment.html">appointment</a>
                </li>
                <li>
                  <a href="javascript:;">shop</a>
                  <ul className="as_submenu">
                    <li>
                      <a href="shop.html">Shop</a>
                    </li>
                    <li>
                      <a href="shop_single.html">Shop Single</a>
                    </li>
                    <li>
                      <a href="cart.html">Cart</a>
                    </li>
                    <li>
                      <a href="checkout.html">Checkout</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="javascript:;">pages</a>
                  <ul className="as_submenu">
                    <li>
                      <a href="astrologer.html">Astrologer</a>
                    </li>
                    <li>
                      <a href="privacy_policy.html">Privacy Policy</a>
                    </li>
                    <li>
                      <a href="error.html">404</a>
                    </li>
                    <li>
                      <a href="faq.html">faq</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="contact.html">contact</a>
                </li>
              </ul>
            </div>
            <div className="as_search_wrapper">
              <img src={search} alt="" className="as_search" />
              <div className="as_search_boxpopup">
                <a href="javascript:;" className="as_cancel">
                  <svg
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    width="25px"
                    height="25px"
                    x="0px"
                    y="0px"
                    viewBox="0 0 511.76 511.76"
                    style={{ enableBackground: "new 0 0 511.76 511.76" }}
                    xmlSpace="preserve"
                  >
                    {" "}
                    <g>
                      {" "}
                      <g>
                        {" "}
                        <path d="M436.896,74.869c-99.84-99.819-262.208-99.819-362.048,0c-99.797,99.819-99.797,262.229,0,362.048 c49.92,49.899,115.477,74.837,181.035,74.837s131.093-24.939,181.013-74.837C536.715,337.099,536.715,174.688,436.896,74.869z M361.461,331.317c8.341,8.341,8.341,21.824,0,30.165c-4.16,4.16-9.621,6.251-15.083,6.251c-5.461,0-10.923-2.091-15.083-6.251 l-75.413-75.435l-75.392,75.413c-4.181,4.16-9.643,6.251-15.083,6.251c-5.461,0-10.923-2.091-15.083-6.251 c-8.341-8.341-8.341-21.845,0-30.165l75.392-75.413l-75.413-75.413c-8.341-8.341-8.341-21.845,0-30.165 c8.32-8.341,21.824-8.341,30.165,0l75.413,75.413l75.413-75.413c8.341-8.341,21.824-8.341,30.165,0 c8.341,8.32,8.341,21.824,0,30.165l-75.413,75.413L361.461,331.317z" />{" "}
                      </g>{" "}
                    </g>{" "}
                    <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g>{" "}
                    <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g>{" "}
                    <g> </g>{" "}
                  </svg>
                </a>
                <div className="as_search_inner">
                  <div className="as_search_widget">
                    <input
                      type="text"
                      name=""
                      className="form-control"
                      id=""
                      placeholder="Search..."
                    />
                    <a href="#">
                      <img src="assets/images/svg/search.svg" alt="" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <span className="as_body_overlay" />
        </div>
      </section>
      <section class="as_banner_wrapper">
            <div class="container-fluid">
                <div class="row as_verticle_center">
                    <div class="col-lg-6 order-lg-1 col-md-6 order-md-1 col-sm-12 order-sm-1 col-12 order-2">
                        <div class="as_banner_slider">
                            <div class="as_banner_detail">
                                <h5 class="as_orange">What’s Your Sign ?</h5>
                                <h1 style={{color:"white"}}>Read Your Daily <br/> Horoscope Today</h1>
                                <p style={{color:"white"}}>Consectetur adipiscing elit, sed do eiusmod tempor incididuesdeentiut labore etesde
                                    dolore magna aliquapspendisse and the gravida.</p>
                                <a href="javascript:;" class="as_btn">read more</a>
                            </div>
                            <div class="as_banner_detail">
                                <h5 class="as_orange">What’s Your Sign ?</h5>
                                <h1 style={{color:"white"}}>Read Your Daily <br/> Horoscope Today</h1>
                                <p style={{color:"white"}}>Consectetur adipiscing elit, sed do eiusmod tempor incididuesdeentiut labore etesde
                                    dolore magna aliquapspendisse and the gravida.</p>
                                <a href="javascript:;" class="as_btn">read more</a>
                            </div>
                            <div class="as_banner_detail">
                                <h5 class="as_orange">What’s Your Sign ?</h5>
                                <h1 style={{color:"white"}}>Read Your Daily <br/> Horoscope Today</h1>
                                <p style={{color:"white"}}>Consectetur adipiscing elit, sed do eiusmod tempor incididuesdeentiut labore etesde
                                    dolore magna aliquapspendisse and the gravida.</p>
                                <a href="javascript:;" class="as_btn">read more</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 order-lg-2 col-md-6 order-md-2 col-sm-12 order-sm-2 col-12 order-1">
                        <div class="as_banner_img text-center">
                            <img src={herochakra} alt="" class="img-responsive"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    <About/>
    <Services/>
   <WhyChoseus/>
     <KnowyourSign/>
 {/* <CustomerSay/> */}
    </div>
   <WhyChoseUs2/>
   <Blog/>
   <Products/>
  
  <Overview/>
 <Foter/>
  </>
  
  )
}

export default App
