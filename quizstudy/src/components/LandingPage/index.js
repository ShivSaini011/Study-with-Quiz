import React, { useState, useEffect, useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import { ApiConfig } from "../../Api/Api_Config/ApiEndpoints";
import "swiper/css";
import "./styles.css";
// import "./style.css";
import "swiper/css/pagination";
import { SocketContext } from "../../Utils/SocketContext";
import { $ } from "react-jquery-plugin";
import LoaderHelper from "../../Utils/Loading/LoaderHelper";
import AuthService from "../../Api/Api_Services/AuthService";
import Index from "../Slider/Index";
import NewSlider from "../Newslider/NewSlider";
// const index = () => {
//   index=0
//   return <Index />
// }

const LandingPage = () => {
  const [upperPairData, setUpperPairData] = useState([]);
  const [bannerImages, setBannerImages] = useState([]);
  let bannerShow = sessionStorage.getItem("bannerShow");
  const { socket } = useContext(SocketContext);

  const [heading_col, setheading_col] = useState("banner-content col-6");
  useEffect(() => {
    let interval;
    if (socket) {
      let payload = {
        message: "market",
      };
      socket.emit("message", payload);
      interval = setInterval(() => {
        let payload = {
          message: "market",
        };
        socket.emit("message", payload);
      }, 5000);

      socket.on("message", (data) => {
        setUpperPairData(data?.pairs?.slice(0, 10));
      });
    }
    return () => {
      clearInterval(interval);
    };
  }, [socket]);

  const getBannerImages = async () => {
    try {
      LoaderHelper.loaderStatus(true);
      const result = await AuthService.bannerList();
      if (result?.success) {
        if (result?.data?.length <= 3)
          setBannerImages([...result?.data, ...result?.data]);
        else setBannerImages(result?.data);
      }
    } catch (error) {}
  };

  const hidePopup = () => {
    $("#google_modal").modal("hide");
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    getBannerImages();
    bannerShow !== "false" && $("#google_modal").modal("show");
  }, []);

  return (
    <div>
      <section
        className="hero-section hero-banner-style top-section-gap "
        id="section_1"
      >
        <div className="container-fluid">
          <div className="row mx-xxl-5">
            <div className="row col-12 mb-5  pl-5 text-start">
              <div
                className="banner-content col-xl-6 col-md-12"
                style={{ marginTop: "5vh" }}
              >
                <h1
                  className="title ms-auto me-auto fs-xl-5 text-start"
                  style={{ marginBottom: 0 }}
                >
                  <div className="pre-title">Fastest and Easiest way to</div>
                  {/* <small style={{color:"white"}} className="d-block"></small>
                   */}
                  <em
                    style={{ color: "#0EE9A0" }}
                    className="text-gradient zoomIn"
                  >
                    {" "}
                    Buy, Sell & Trade
                  </em>
                </h1>

                <p className="text-start">
                  Your Gateway to the world of Crypto Trading
                </p>
                <div className="hero-section__announcement1">
                  <div className="text-align">
                    <div className="gradient-btn-green-main mt-6 padding-15 ">
                      <a href="/trade/Landing_page">
                        <span style={{ color: "black" }}>Get Start</span>
                      </a>
                    </div>
                    <div className="gradient-btn-green-main mt-6 padding-15">
                      <a href="/Earn">
                        <span style={{ color: "black" }}>
                          Join Referral Program
                        </span>
                      </a>
                    </div>
                    </div>
                    <div className="slideranoucment">
                      <NewSlider/>
                    </div>
                </div>
              </div>

              <div className="col-xl-6 banner-image p-5 d-xl-block d-none">
                <img
                  alt=""
                  src="https://api.GapxBit.com/uploads/banner_image-1721218521951-313750123.jpeg"
                />
              </div>
            </div>
          </div>
          <div className="custom-banner">
            <img
              alt=""
              src="https://api.GapxBit.com/uploads/banner_image-1721218521951-313750123.jpeg"
            />
          </div>
          <div>
            <Index
              ApiConfig={ApiConfig}
              item={upperPairData}
              upperPairData={upperPairData}
              SwiperSlide={SwiperSlide}
              // index={index}
            />
            {/* <div className="poster_slider">
              <Swiper
                className="market_slider pb-11"
                spaceBetween={10}
                loop={true}
                autoplay={{
                  delay: 0, // No delay between transitions
                  disableOnInteraction: false,
                }}
                speed={5000} // Adjust this value for the speed of the sliding effect
                pagination={{
                  dynamicBullets: true,
                }}
                modules={[Autoplay, Pagination, Navigation]}
                breakpoints={{
                  320: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                  },
                  640: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                  },
                  768: {
                    slidesPerView: 3,
                    spaceBetween: 10,
                  },
                  1024: {
                    slidesPerView: 4,
                    spaceBetween: 10,
                  },
                }}
              >
                {upperPairData.map((item, index) => (
                  <SwiperSlide
                    style={{
                      backgroundColor: '#1d4e41',
                      margin: '-10px',
                      width: '24%',
                      padding: '10px 0px',
                    }}
                    key={item?.icon_path}
                  >
                    <div>
                      <tr style={{ display: 'flex', alignItems: 'center' }} key={index}>
                        <td style={{ margin: '0px 10px' }}>
                          <div className="td_div">
                            <img
                              alt=""
                              src={ApiConfig.appUrl + item?.icon_path}
                              className="img-fluid icon_img coinimg me-2"
                            />
                            {item?.base_currency}/{item?.quote_currency}
                          </div>
                        </td>
                        <td style={{ margin: '0px 10px' }}>
                          <b>{item?.buy_price}</b>
                        </td>
                        <td
                          style={{ margin: '0px 10px' }}
                          className={
                            item?.change >= 0
                              ? 'color-green text-success'
                              : 'color-red text-danger'
                          }
                        >
                          <b>{parseFloat(item?.change?.toFixed(5))}%</b>
                        </td>
                      </tr>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div> */}
            <div className="poster_slider">
              <Swiper
                className="market_slider pb-11 px-5"
                spaceBetween={10}
                loop={true}
                autoplay={{
                  delay: 2000,
                }}
                pagination={{
                  dynamicBullets: true,
                }}
                modules={[Autoplay, Pagination, Navigation]}
                breakpoints={{
                  576: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                  },
                  768: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                  },
                  992: {
                    slidesPerView: 3,
                    spaceBetween: 10,
                  },
                  1200: {
                    slidesPerView: 4,
                    spaceBetween: 10,
                  },
                }}
              >
                {bannerImages?.map(
                  (banner) =>
                    banner?.status === "Active" && (
                      <SwiperSlide key={banner?.banner_path}>
                        <a href="#/" className="main_poster">
                          <img
                            alt=""
                            src={`${ApiConfig.appUrl}${banner?.banner_path}`}
                          />
                        </a>
                      </SwiperSlide>
                    )
                )}
              </Swiper>
            </div>
          </div>
        </div>
      </section>
      <section className="market_update market_update_table pb-40">
        <div className="container">
          <div className="section-title section-title-center text-center">
            <h2 style={{ color: "white" }} className="text-gradient">
              Market Update
            </h2>
            <p style={{ color: "rgb(14, 233, 160)" }}>
              Never miss a beat in the crypto world with our real-time market
              updates
            </p>
          </div>
        </div>
        {/* <div lassName="poster_slider">
          <Swiper
            className="market_slider  pb-11"
            spaceBetween={10}
            loop={true}
            autoplay={{
              delay: 2000,
            }}
            pagination={{
              dynamicBullets: true,
            }}
            modules={[Autoplay, Pagination, Navigation]}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              640: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
            }}>
            {upperPairData.map((item, index) => (
              <SwiperSlide style={{backgroundColor:'rgb(61,148,131,.5)',margin:'-10px',width:'300px',padding:'10px 0px'}} key={item?.icon_path}>
                <div > <tr style={{display:'flex',alignItems:'center'}} key={index}>
                  <td  style={{margin:'0px 15px'}}>
                    {" "}
                    <div className="td_div">
                      <img alt=""
                        src={ApiConfig.appUrl + item?.icon_path}
                        className="img-fluid icon_img coinimg me-2 "
                      />
                      {item?.base_currency}/{item?.quote_currency}
                    </div>
                  </td>
                  <td style={{margin:'0px 15px'}}>
                    <b>{item?.buy_price}</b>
                  </td>
                  <td style={{margin:'0px 15px'}}
                    className={item?.change >= 0 ? "color-green text-success" : "color-red text-danger"}>
                    <b>{parseFloat(item?.change?.toFixed(5))} </b>
                  </td>

                </tr>
                </div>
              </SwiperSlide>
            ))
            }

          </Swiper>
        </div> */}
        <div className="container">
          <div className="table-responsive">
            {upperPairData ? (
              <table className="table table_home ">
                <thead style={{ color: "white", background: "rgb(0,0,0,0.6)" }}>
                  <tr>
                    <th
                      className="position-sticky"
                      style={{ background: "rgb(0,0,0,1)" }}
                    >
                      {" "}
                      Pair
                    </th>
                    <th> Price</th>
                    <th> 24H Point</th>
                    <th> 24H High</th>
                    <th> 24H Low</th>
                    <th> 24H Vol</th>
                    <th> 24H Turnover</th>
                    <th> Operation</th>
                  </tr>
                </thead>
                <tbody>
                  {upperPairData.map((item, index) => (
                    <tr key={index}>
                      <td
                        className="position-sticky"
                        style={{ background: "#0F101E" }}
                      >
                        {" "}
                        <div className="td_div td_div2">
                          <img
                            alt=""
                            src={ApiConfig.appUrl + item?.icon_path}
                            className="img-fluid icon_img coinimg me-2 "
                          />
                          {item?.base_currency}/{item?.quote_currency}
                        </div>
                      </td>
                      <td className="pricechange">
                        <b>{item?.buy_price}</b>
                      </td>
                      <td
                        className={
                          item?.change >= 0
                            ? "color-green text-success"
                            : "color-red text-danger"
                        }
                      >
                        <b>{parseFloat(item?.change?.toFixed(5))}% </b>
                      </td>
                      <td>
                        <b>{item?.high}</b>
                      </td>
                      <td>
                        <b>{item?.low}</b>
                      </td>
                      <td>
                        <b>{parseFloat(item?.volume?.toFixed(5))}</b>
                      </td>
                      <td>
                        <b>
                          {parseFloat(
                            (item?.buy_price * item?.volume)?.toFixed(5)
                          )}
                        </b>
                      </td>
                      <td>
                        <a
                          href={`/trade/${item?.base_currency}_${item?.quote_currency}`}
                          className="gradient-btn-green btn-sm my-0"
                        >
                          Trade
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : null}
          </div>
        </div>
      </section>
      {/* That Revolutionary ICO Platform with Exclusive Rewards Program adding by Savan*/}
      <section className="Rewards Program">
        <div className="container1">
          <div className="section-title section-title-center text-center">
            <h2 className="title1">
              Revolutionary ICO Platform with Exclusive Rewards
              <span
                style={{
                  color: "rgb(14, 233, 160)",
                  textShadow: "1px 1px 1px black",
                }}
                className="text-gradient"
              >
                {" "}
                Program
              </span>
            </h2>{" "}
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="features-item">
                <div className="features-content">
                  <h2 className="title1">
                    <a href="#">Mobile Payment Make Easy</a>
                  </h2>
                  <p>Add new, trending and rare artwork to your collection.</p>
                </div>
                <div className="features-img">
                  <img
                    src="/images/reword1.png"
                    alt="nft wallet"
                    className="leftToRight "
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="features-item">
                <div className="features-content">
                  <h2 className="title1">
                    <a href="#">Card Based Lifetime Free Transaction</a>
                  </h2>
                  <p>Add new, trending and rare artwork to your collection.</p>
                </div>
                <div className="features-img">
                  <img
                    src="/images/reword2.png"
                    alt="nft wallet"
                    className="leftToRight "
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="features-item">
                <div className="features-content">
                  <h2 className="title1">
                    <a href="#">Protect the Identity</a>
                  </h2>
                  <p>Add new, trending and rare artwork to your collection.</p>
                </div>
                <div className="features-img">
                  <img
                    src="/images/reword3.png"
                    alt="nft wallet"
                    className="rightToLeft"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="features-item">
                <div className="features-content">
                  <h2 className="title1">
                    <a href="#">Security &amp; Control Over Money</a>
                  </h2>
                  <p>
                    Add new, trending and rare artwork to your collection.
                    <br />
                  </p>
                </div>
                <div className="features-img">
                  <img
                    src="/images/reword4.png"
                    alt="nft wallet"
                    className="rightToLeft"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="features-area-two features-bg"
        style={{ backgroundImage: "/images/imageab8.png" }}
      >
        <div className="container">
          <div className="features-inner-wrap">
            <div className="features-item-wrap">
              <div className="row justify-content-center">
                <div className="col-lg-4 col-md-6">
                  <div className="features-item-two">
                    <div className="features-img-two">
                      <img src="/images/imageab1.png" alt=""></img>
                    </div>
                    <div className="features-content-two">
                      <h2 className="title h2">
                        Card Based Lifetime Free Transaction
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="features-item-two">
                    <div className="features-img-two">
                      <img src="/images/imageab2.png" alt=""></img>
                    </div>
                    <div className="features-content-two">
                      <h2 className="title h2">
                        Security &amp; Control over money
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="features-item-two">
                    <div className="features-img-two">
                      <img src="/images/imageab3.png" alt=""></img>
                    </div>
                    <div className="features-content-two">
                      <h2 className="title h2">Mobile Payment Make Easy</h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title section-title-two text-center">
                  <h2 className="title h2">
                    GapxBit is a cutting-edge Cryptocurrency Exchange platform
                    that redefines the way Initial Coin Offerings (ICOs) are
                    conducted. Designed with innovation and user-centricity at
                    its core, GapxBit offers unparalleled opportunities for
                    investors and project creators alike
                  </h2>
                </div>
              </div>
            </div>
            <div className="features-line-shape"></div>
          </div>
        </div>
        <div className="features-shape-wrap">
          <img src="/images/imageab6.png" alt="" className="rightToLeft"></img>
          <img src="/images/imageab7.png" alt="" className="leftToRight"></img>
        </div>
      </section>

      <section className=" wactp_sec ">
        <div className="container">
          <div className="section-title section-title-center text-center">
            <h2>
              World Class Trading
              <span
                style={{
                  color: "rgb(14, 233, 160)",
                  textShadow: "1px 1px 1px black",
                }}
                className="text-gradient"
              >
                {" "}
                Platform{" "}
              </span>
            </h2>
          </div>
          <div className="row justify-content-center">
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 mb-6">
              <div className="wallet-block h-100">
                <div className="thumb">
                  <img
                    src="/images/feature/1.png"
                    alt="nft wallet"
                    className=""
                  />
                </div>
                <h4
                  style={{ color: "rgb(14, 233, 160)" }}
                  className="title text-gradient"
                >
                  Exchange
                </h4>
                <p>
                  Ready to trade? Login to your account and start buying and
                  selling crypto currency today.
                </p>
              </div>
            </div>
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 mb-6">
              <div className="wallet-block h-100">
                <div className="thumb">
                  <img src="/images/feature/2.png" alt="nft wallet" />
                </div>
                <h4
                  style={{ color: "rgb(14, 233, 160)" }}
                  className="title text-gradient"
                >
                  High performance
                </h4>
                <p>
                  Securely access your account with rapid login times and high
                  performance servers.
                </p>
              </div>
            </div>
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 mb-6">
              <div className="wallet-block h-100">
                <div className="thumb">
                  <img src="/images/feature/3.png" alt="nft wallet" />
                </div>
                <h4
                  style={{ color: "rgb(14, 233, 160)" }}
                  className="title text-gradient"
                >
                  Super Fast KYC
                </h4>
                <p>
                  Get verified in just a few clicks and start trading without
                  any delay.
                </p>
              </div>
            </div>
            {/* <!-- End .col --> */}
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 mb-6">
              <div className="wallet-block h-100">
                <div className="thumb">
                  <img src="/images/feature/4.png" alt="nft wallet" />
                </div>
                <h4
                  style={{ color: "rgb(14, 233, 160)" }}
                  className="title text-gradient"
                >
                  Order Types
                </h4>
                <p>
                  Take advantage of market opportunities with our comprehensive
                  range of order type.
                </p>
              </div>
            </div>
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 mb-6">
              <div className="wallet-block h-100">
                <div className="thumb">
                  <img src="/images/feature/5.png" alt="nft wallet" />
                </div>
                <h4
                  style={{ color: "rgb(14, 233, 160)" }}
                  className="title text-gradient"
                >
                  Customizable Interface
                </h4>
                <p>
                  Create a trading interface that works for you, with our
                  customizable dashboards and tools.
                </p>
              </div>
            </div>
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 mb-6">
              <div className="wallet-block h-100">
                <div className="thumb">
                  <img src="/images/feature/6.png" alt="nft wallet" />
                </div>
                <h4
                  style={{ color: "rgb(14, 233, 160)" }}
                  className="title text-gradient"
                >
                  Safe and Secure
                </h4>
                <p>
                  With our commitment to safety and security, you can trust that
                  your assets are protected on our secure crypto exchange.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <section className=" hiw_sec ">
        <div className="container">
          <div className="section-title section-title-center text-center">
            <h2  style={{color:"white"}} className="text-gradient">How it work</h2>
            <p>Follow these simple steps , and start your trading journey</p>
          </div>
          <div className="row justify-content-center">
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-12 mb-6">
              <div className="wallet-block text-center hiw_card hiw_card_bar">
                <div className="thumb m-auto">
                  <img src="/images/hiw_1.png" alt="nft wallet" />
                </div>
                <span>Step 1</span>
                <h4 style={{color:"rgb(14, 233, 160)"}} className="title text-gradient">Login & Register</h4>
                <p>Enter your email address and create a strong password.</p>
              </div>
            </div>
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-12 mb-6">
              <div className="wallet-block text-center hiw_card hiw_card_bar">
                <div className="thumb m-auto">
                  <img src="/images/hiw_2.png" alt="nft wallet" />
                </div>
                <span>Step 2</span>
                <h4 style={{color:"rgb(14, 233, 160)"}} className="title text-gradient">Complete KYC</h4>
                <p>
                  Complete the two-factor authentication process (2FA). Wait for
                  your account to be verified and approved .
                </p>
              </div>
            </div>
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-12 mb-6">
              <div className="wallet-block text-center hiw_card">
                <div className="thumb m-auto">
                  <img src="/images/hiw_3.png" alt="nft wallet" />
                </div>
                <span>Step 3</span>
                <h4 style={{color:"rgb(14, 233, 160)"}} className="title text-gradient"> Start Trading </h4>
                <p>Once approved, login to your account and start trading.</p>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* new add section here */}
      <section className="crypto-portfolio-section">
        <div className="crypto-portfolio css-t1l750 ">
          <div className="MuiBox-root css-2kv7k5">
            <div className="crypto-portfolio__section">
              <div className="crypto-portfolio__row MuiBox-root css-tbzthe">
                <div className="md-6 crypto-portfolio__item MuiBox-root css-ujzq51">
                  <div className="section-title ">
                    <h2 className=" title1 MuiTypography-root MuiTypography-h3  ">
                      Build your <br />
                      crypto
                      <span
                        style={{
                          color: "rgb(14, 233, 160)",
                          textShadow: "1px 1px 1px black",
                        }}
                        className="text-gradient"
                      >
                        {" "}
                        portfolio
                      </span>
                    </h2>
                  </div>
                  <span className="MuiTypography-root MuiTypography-body200 body200 css-1uedhof">
                    Start your first trade with these easy steps
                  </span>
                  <div className="crypto-portfolio__list">
                    <div className="crypto-portfolio__list__item">
                      <div className="css-1ywff37">
                        <div className="steps__card ">
                          <div className="steps__card__number">01</div>
                          <div className="steps__card__details">
                            <span
                              style={{
                                color: "rgb(14, 233, 160)",
                                textShadow: "1px 1px 1px black",
                              }}
                              className="MuiTypography-root MuiTypography-body200 body200 css-1uedhof"
                            >
                              Join now
                            </span>
                            <span className="MuiTypography-root MuiTypography-body400 body400 css-g24lph">
                              Create your personal GapxBit User ID to get
                              started. It's very easy and totally free of
                              charge.
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="crypto-portfolio__list__icon">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon-arrow-right "
                        >
                          <path
                            d="M11.9968 8H14.4321L17.0002 12L14.4321 16H11.9968L13.9229 13H7V11H13.9229L11.9968 8Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </div>
                    </div>
                    <div className="crypto-portfolio__list__item">
                      <div className="css-1ywff37">
                        <div className="steps__card ">
                          <div className="steps__card__number">02</div>
                          <div className="steps__card__details">
                            <span
                              className="MuiTypography-root MuiTypography-body200 body200 css-1uedhof"
                              style={{
                                color: "rgb(14, 233, 160)",
                                textShadow: "1px 1px 1px black",
                              }}
                            >
                              Fund your account
                            </span>
                            <span className="MuiTypography-root MuiTypography-body400 body400 css-g24lph">
                              Add funds to your crypto account to start trading
                              crypto. You can add funds with a variety of
                              payment methods.
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="crypto-portfolio__list__icon">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon-arrow-right "
                        >
                          <path
                            d="M11.9968 8H14.4321L17.0002 12L14.4321 16H11.9968L13.9229 13H7V11H13.9229L11.9968 8Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </div>
                    </div>
                    <div className="crypto-portfolio__list__item">
                      <div className="css-1ywff37">
                        <div className="steps__card ">
                          <div className="steps__card__number">03</div>
                          <div className="steps__card__details">
                            <span
                              className="MuiTypography-root MuiTypography-body200 body200 css-1uedhof"
                              style={{
                                color: "rgb(14, 233, 160)",
                                textShadow: "1px 1px 1px black",
                              }}
                            >
                              Start trading
                            </span>
                            <span className="MuiTypography-root MuiTypography-body400 body400 css-g24lph">
                              You are ready! Buy/sell crypto, trade, invest, and
                              discover what GapxBit has to offer.
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="crypto-portfolio__list__icon">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon-arrow-right "
                        >
                          <path
                            d="M11.9968 8H14.4321L17.0002 12L14.4321 16H11.9968L13.9229 13H7V11H13.9229L11.9968 8Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <button
                    className="  css-1qivp9o"
                    data-variant="primary"
                    type="button"
                  >
                    <a href="/login">
                      <span>Get Started</span>
                    </a>
                  </button>
                </div>
                <div className="md-6 crypto-portfolio__item hidden-moblie MuiBox-root css-ujzq51">
                  <figure className="crypto-portfolio__figure">
                    <img
                      width="100%"
                      src="/images/mobileview1.png"
                      alt="crypto-portfolio"
                      className="css-rlscrg"
                    ></img>
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="joc_sec btn-gradient ">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="section-title mb-0 ">
                <h2 className="text-dark">Join Our Community</h2>
                <p className="text-dark mb-0">
                  GapxBit is global exchange. Join the conversation in any of
                  our worldwide communities.
                </p>
                <div className="d-flex  joc_social_row ">
                  <a
                    rel="noreferrer"
                    className="joc_social"
                    target="_blank"
                    href="https://x.com/GapxBit"
                  >
                    <i className="ri-twitter-x-fill ri-xl mb-2"></i>
                    <span>Twitter</span>
                  </a>
                  <a
                    className="joc_social"
                    target="_blank"
                    href="https://t.me/+14UWFzzimsczOTE1"
                    rel="noreferrer"
                  >
                    <i className="ri-telegram-line  ri-xl mb-2"></i>
                    <span>Telegram</span>
                  </a>
                  <a
                    className="joc_social"
                    target="_blank"
                    href="https://www.linkedin.com/in/gap-x-bit-115017318/"
                    rel="noreferrer"
                  >
                    <i className="ri-linkedin-box-fill ri-xl mb-2"></i>
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <img src="/images/joc_img.svg" alt="" />
            </div>
          </div>
        </div>
      </section>

      {/* <div className="modal image_modal" id="google_modal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div className="modal-dialog  alert_modal modal-lg" role="document">
          <div className="modal-content-landing">
            <button type="button" className="btn-custom-closer" data-bs-dismiss="modal" aria-label="Close"><i
              className="ri-close-fill"></i></button>
            <div className="ratio ratio-16x9">
              <a href='https://api.ctexexchange.com/downloads' onClick={() => sessionStorage.setItem("bannerShow", false)} > <img alt='' className="w-100 cc_modal_img" width="500px" src="/images/download_app.svg" onClick={hidePopup} /></a>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default LandingPage;
