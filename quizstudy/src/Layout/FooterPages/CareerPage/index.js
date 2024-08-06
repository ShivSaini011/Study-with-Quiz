import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import { Link } from "react-router-dom";
const Career = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  return (
    <>
      {/* <section className="inner-page-banner ">
        <div className="container">
          <div className="inner text-center">
            <h1 className="title"> Career  </h1>
            <nav className="mt-4">
              <ol className="breadcrumb justify-content-center">
                <li className="breadcrumb-item">
                  <a href="/">Home</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                Career
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </section> */}


      <section className="create-item-wrapper plicy_sec career_sec">
        <div className="container">
          <div className=" " >
            <div className="row align-items-center">
              <div className="col-lg-6 ">
                <div>
                  <h2 className="title text-white mb-3"> Careers at <span className="text-gradient"> GapxBit </span> </h2>
                  <h4 className="mb-4 mb-md-5 " >Join us on our quest to increase the Freedom of Money!</h4>
                  <a href="#openings" className="btn btn-gradient" > Apply Now    </a>
                </div>
              </div>
              <div className="col-lg-6" >
                <img src="/images/career_img.svg" className="img-fluid career_img show_web_dark" />
                <img src="/images/career_img_light.svg" className="img-fluid career_img show_web_light" />
              </div>

            </div>
          </div>

        </div>
      </section>



      <section className="cc_1">
        <div className="container">
          <div className="section-title section-title-center text-center mb-md-3">
            <h2 className="text-gradient">Our Values</h2>
          </div>
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-8 mb-4 mb-md-0 ">
              <div className="   ">
                <div className=" card-body ">
                  <div className="row align-items-center">

                    <div className="col-lg-7">
                      <p className="mb-0" > <b>At GapxBit</b>, we believe that everyone should have the freedom to access and control their own money without limitations. We are passionate about promoting financial empowerment, transparency, and security in the world of finance </p>
                    </div>

                    <div className="col-lg-5 order-sm-top">
                      <img src="/images/ov_1.png" className="img-fluid  p-3" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-8 mb-4  mb-md-0">
              <div className="   ">
                <div className=" card-body ">
                  <div className="row align-items-center">

                    <div className="col-lg-5">
                      <img src="/images/ov_2.png" className="img-fluid p-3" />
                    </div>
                    <div className="col-lg-7">
                      <p className="mb-0" > <b>Our mission</b> is to provide a platform that enables
                        individuals and businesses to transact, save, and invest
                        in a decentralized and borderless manner. We believe
                        that digital assets and blockchain technology hold the
                        key to unlocking financial freedom for all.
                      </p>
                    </div>

                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-8 mb-4   mb-md-0">
              <div className="   ">
                <div className=" card-body ">
                  <div className="row align-items-center">

                    <div className="col-lg-7">
                      <p className="mb-0" >
                        <b>Join our community</b> of like-minded
                        individuals who are committed to
                        embracing the future of finance. Together,
                        we can shape a world where financial
                        opportunities are accessible to everyone,
                        regardless of their location or background.
                      </p>
                    </div>

                    <div className="col-lg-5  order-sm-top">
                      <img src="/images/ov_3.png" className="img-fluid  p-3" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-8 mb-4 mb-md-0">
              <div className="   ">
                <div className=" card-body ">
                  <div className="row align-items-center">

                    <div className="col-lg-5">
                      <img src="/images/ov_4.png" className="img-fluid p-3" />
                    </div>
                    <div className="col-lg-7">
                      <p className="mb-0" > <b>Experience the power </b> of decentralized finance
                        and be a part of the movement towards a more
                        inclusive and liberated financial ecosystem.
                        Together, we can make a difference and increase
                        the Freedom of Money for all.
                      </p>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section id="openings" className="cc_1">
        <div className="container">


          <div className="section-title section-title-center text-start mb-8">
            <h2 className="text-gradient"> Choose Your Team </h2>
            <p>Select a team most relevant to your interests and experience to view job openings</p>
          </div>


          <div className="cyt_sec gap-2" >
            <Link to="/careerlist" className="cyt_card" >
              {/* <img src="" className="img-fluid" width="50" />  */}
              <span>Business Development</span>
            </Link>
            <Link to="/careerlist" className="cyt_card" >
              {/* <img src="" className="img-fluid" width="50" />  */}
              <span>Communications</span>
            </Link>
            <Link to="/careerlist" className="cyt_card" >
              {/* <img src="" className="img-fluid" width="50" />  */}
              <span>Customer Support</span>
            </Link>
            <Link to="/careerlist" className="cyt_card" >
              {/* <img src="" className="img-fluid" width="50" />  */}
              <span>Data & Research</span>
            </Link>
            <Link to="/careerlist" className="cyt_card" >
              {/* <img src="" className="img-fluid" width="50" />  */}
              <span>Editorial & Video </span>
            </Link>
            <Link to="/careerlist" className="cyt_card" >
              {/* <img src="" className="img-fluid" width="50" />  */}
              <span>Editorial & Video  </span>
            </Link>
            <Link to="/careerlist" className="cyt_card" >
              {/* <img src="" className="img-fluid" width="50" />  */}
              <span>Finance & Administration </span>
            </Link>
            <Link to="/careerlist" className="cyt_card" >
              {/* <img src="" className="img-fluid" width="50" />  */}
              <span>Legal & Compliance</span>
            </Link>
            <Link to="/careerlist" className="cyt_card" >
              {/* <img src="" className="img-fluid" width="50" />  */}
              <span>Marketing</span>
            </Link>
            <Link to="/careerlist" className="cyt_card" >
              {/* <img src="" className="img-fluid" width="50" />  */}
              <span>Operations, Strategy & Project Management</span>
            </Link>
            <Link to="/careerlist" className="cyt_card" >
              {/* <img src="" className="img-fluid" width="50" />  */}
              <span>Product & Design </span>
            </Link>
            <Link to="/careerlist" className="cyt_card" >
              {/* <img src="" className="img-fluid" width="50" />  */}
              <span>Quantitative Strategy</span>
            </Link>
            <Link to="/careerlist" className="cyt_card" >
              {/* <img src="" className="img-fluid" width="50" />  */}
              <span>Security & IT Helpdesk</span>
            </Link>
            <Link to="/careerlist" className="cyt_card" >
              {/* <img src="" className="img-fluid" width="50" />  */}
              <span>HR</span>
            </Link>
            <Link to="/careerlist" className="cyt_card" >
              {/* <img src="" className="img-fluid" width="50" />  */}
              <span>Early Careers</span>
            </Link>
          </div>


        </div>
      </section>



      <section className="cc_1">
        <div className="container">


          <div className="section-title section-title-center text-start mb-8">
            <h2 className="text-gradient"> Work With Us</h2>
          </div>

          <Swiper
            className="  pb-11"
            spaceBetween={10}
            loop={true}
            slidetoshow={1}
            autoplay={{
              delay: 2000,
            }}
            pagination={{
              dynamicBullets: true,
            }}
            modules={[Autoplay, Pagination, Navigation]}

          >
            <SwiperSlide>
              <div className="css_wwu">
                <img src="/images/wwu_1.png" className="css_wwu_img img-fluid" />
                <div className="css_wwu_text">
                  <div className="wwu_title">Bridging the Gap with GapxBit</div>
                  <div className="wwu_text">
                    At GapxBit, we believe in transforming our products and services with expertise and striving for recognition and success. We foster a connected and expanding environment that values and rewards personal growth.
                  </div>
                </div>
              </div>

            </SwiperSlide>
            <SwiperSlide>
              <div className="css_wwu">
                <img src="/images/wwu_2.png" className="css_wwu_img img-fluid" />
                <div className="css_wwu_text">
                  <div className="wwu_title"> Inspire through Innovation</div>
                  <div className="wwu_text">
                    Embrace the future with enthusiasm and
                    embrace the challenges ahead. As a leading
                    company in the crypto space, we are committed
                    to accelerating the adoption of cryptocurrency,
                    blockchain, and distributed ledger technology.
                  </div>
                </div>
              </div>

            </SwiperSlide>
            <SwiperSlide>
              <div className="css_wwu">
                <img src="/images/wwu_3.png" className="css_wwu_img img-fluid" />
                <div className="css_wwu_text">
                  <div className="wwu_title"> Thrive with GapxBit </div>
                  <div className="wwu_text">
                    What's our secret to success? Our people. We
                    are united by a common DNA of talented,
                    hardworking, and passionate individuals in a
                    world-renowned team
                  </div>
                </div>
              </div>

            </SwiperSlide>
          </Swiper>




        </div>
      </section>



      <section className="timeline_sec" >

        <div className="container" >
          <div className="section-title section-title-center text-start mb-8">
            <h2 className="text-gradient">How We Hire</h2>
            <p>
              On average 2~4 week interview process with 4 interviews.
            </p>
          </div>

          <div className="css-timeline">
            <div className="css-time_row">
              <div data-bn-type="text" className="css-time_title">Application Review</div>
              <div data-bn-type="text" className="css-time_count">01
                {/* <!-- -->1 */}
              </div>
              <div data-bn-type="text" className="css-dot"></div>
            </div>
            <div className="css-time_row">
              <div data-bn-type="text" className="css-time_title">Interviews</div>
              <div data-bn-type="text" className="css-time_count">02
                {/* <!-- -->2 */}
              </div>
              <div data-bn-type="text" className="css-dot"></div>
            </div>
            <div className="css-time_row">
              <div data-bn-type="text" className="css-time_title">Offer</div>
              <div data-bn-type="text" className="css-time_count">03
                {/* <!-- -->3 */}
              </div>
              <div data-bn-type="text" className="css-dot"></div>
            </div>
            <div className="css-time_row">
              <div data-bn-type="text" className="css-time_title">Onboarding</div>
              <div data-bn-type="text" className="css-time_count">04
                {/* <!-- -->4 */}
              </div>
              <div data-bn-type="text" className="css-dot"></div>
            </div>
          </div>

          <br /><br />
          <p className="text-center" >
            Join us as we bridge the gap, transform industries, and inspire through innovation at GapxBit. <br />Together, we can
            shape the future of finance and make a meaningful impact in the world.</p>


        </div>
        <br /><br />
        <div className="container">
          <div className="newsletter-content text-center ">
            <h2> Embark on a Journey to Transform the World With Us </h2>
            <Link className="btn btn-gradient btn-lg" to="/careerlist" > Apply Now <span>  </span> </Link>
          </div>
        </div>



      </section>

















    </>
  );
};

export default Career;
