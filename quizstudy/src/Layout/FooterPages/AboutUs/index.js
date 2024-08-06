import React, { useEffect } from "react";

const AboutUs = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  return (
    <>

      <div className="about_page" >
        <section className="about_top" >
          <div className="container" >
            <div className="row g-md-5 align-items-center" >
              <div className="col-lg-7" >
                <h2>
                  Welcome to <span className="text-gradient" >GapxBit</span>
    
                  <small> - Your Premier Crypto Trading Platform!</small>
                </h2>
                <p>
                  At GapxBit, we hold a firm belief in the transformative power of cryptocurrencies within the financial landscape. Our mission is to provide an inclusive and accessible platform, facilitating seamless entry into the dynamic world of digital assets for both seasoned traders and beginners alike.
                </p>
              </div>
              <div className="col-lg-5" >
                  <img alt="" src="/images/about_img.svg"  className="img-fluid" />
              </div>
            </div>
          </div>
        </section>


        <section  className="about_2" >
          <div className="container" >
            <div className="row" >
              <div className="col-lg-12" >
                  <h3>
                  Our Background
                  </h3>
                  <p>
                  GapxBit is an innovative crypto trading platform founded by a dedicated team of cryptocurrency enthusiasts, industry experts, blockchain developers, and financial professionals. Our collective vision is to establish a secure, transparent, and user-friendly environment, empowering crypto enthusiasts from all walks of life to explore and capitalize on the vast opportunities offered by the crypto markets.
                  </p>
              </div> 
            </div>
          </div>
        </section>

        <section  className="about_2" >
          <div className="container" >
            <div className="row" >
              <div className="col-lg-12" >
                  <h3>
                  Our Offerings
                  </h3>
                  <p>
                  At GapxBit, we offer an intuitive and feature-rich trading platform where users can effortlessly buy, sell, and trade a comprehensive range of cryptocurrencies. From established cryptocurrencies like Bitcoin, Ethereum, and Ripple to emerging altcoins, our platform supports a diverse array of digital assets. Furthermore, we equip users with real-time market data, sophisticated charting tools, and comprehensive analytics, enabling informed decision-making amidst the fast-paced crypto landscape.
                  </p>
              </div> 
            </div>
          </div>
        </section>



        <section className="about_3" >
          <div className="container" >
            <div className="row justify-content-center" >
                <div className="col-lg-12 " >
                    <h3 className="pp_title" >
                    Our Offerings
                    </h3>
                     
                </div> 
                <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 mb-6" >
                  <div className="wallet-block h-100" >
                    <div className="thumb"><img src="/images/ac_1.png" alt="nft wallet" className="" /></div>
                    <h4 className="title text-gradient">User-Centric Interface </h4>
                    <p> Our platform is thoughtfully designed with a focus on simplicity and efficiency. Users, regardless of their trading expertise, will find our interface easy to navigate, ensuring a seamless trading experience.</p>
                  </div>
                </div>

                <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 mb-6" >
                  <div className="wallet-block h-100" >
                    <div className="thumb"><img src="/images/ac_2.png" alt="nft wallet" className="" /></div>
                    <h4 className="title text-gradient">Robust Security Measures </h4>
                    <p>The security of our users' funds and personal information is of paramount importance. GapxBit employs cutting-edge security protocols, including multi-factor authentication, encryption mechanisms, and cold storage solutions, to safeguard assets from potential threats.</p>
                  </div>
                </div>

                <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 mb-6" >
                  <div className="wallet-block h-100" >
                    <div className="thumb"><img src="/images/ac_3.png" alt="nft wallet" className="" /></div>
                    <h4 className="title text-gradient">Extensive Asset Portfolio </h4>
                    <p>  With an extensive selection of cryptocurrencies available for trading, users can explore new investment opportunities and diversify their portfolios seamlessly. </p>
                  </div>
                </div>

                <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 mb-6" >
                  <div className="wallet-block h-100" >
                    <div className="thumb"><img src="/images/ac_4.png" alt="nft wallet" className="" /></div>
                    <h4 className="title text-gradient">Exceptional Customer Support </h4>
                    <p> We place a premium on delivering stellar customer support. Our dedicated team is readily available to address any queries or concerns, guaranteeing a superior user experience on our platform. </p>
                  </div>
                </div>

                <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 mb-6" >
                  <div className="wallet-block h-100" >
                    <div className="thumb"><img src="/images/ac_5.png" alt="nft wallet" className="" /></div>
                    <h4 className="title text-gradient">Educational Resources </h4>
                    <p> Recognizing the complexities of the crypto industry, especially for newcomers, we provide a wealth of educational resources such as tutorials, guides, and market insights to enhance users' trading knowledge and skills.</p>
                  </div>
                </div>

                <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 mb-6" >
                  <div className="wallet-block h-100" >
                    <div className="thumb"><img src="/images/ac_6.png" alt="nft wallet" className="" /></div>
                    <h4 className="title text-gradient">Adherence to Regulations </h4>
                    <p>GapxBit complies with all necessary regulations and industry standards, ensuring a safe and legal trading environment for our users.</p>
                  </div>
                </div>



            </div>
          </div>
        </section>


        <section className=" joc_sec btn-gradient ">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="section-title mb-0 ">
                <h2 className="text-dark">Join Our Community</h2>
                <p className="text-dark mb-0">
                Whether you are a seasoned trader or a novice venturing into the world of cryptocurrencies, GapxBit extends a warm invitation to you. Our platform is meticulously designed to cater to your unique requirements and empower you to harness the full potential of crypto trading. Come, be a part of our vibrant trading community, and together, let us embark on a journey of financial empowerment through cryptocurrencies.
                </p>
                <div className="d-flex  joc_social_row ">
                <a rel="noreferrer" className="joc_social" target="_blank" href="https://x.com/GapxBit">
                    <i className="ri-twitter-x-fill ri-xl mb-2"></i>
                    <span>Twitter</span>
                  </a>
                  <a className="joc_social" target="_blank" href="https://t.me/+14UWFzzimsczOTE1" rel="noreferrer">
                    <i className="ri-telegram-line  ri-xl mb-2"></i>
                    <span>Telegram</span>
                  </a>
                  <a className="joc_social" target="_blank" href="https://www.linkedin.com/in/gap-x-bit-115017318/" rel="noreferrer">
                    <i className="ri-linkedin-box-fill ri-xl mb-2"></i>
                    <span>LinkedIn</span>
                  </a>
                  {/* <a className="joc_social" target="_blank" href="" rel="noreferrer">
                    <i className="ri-telegram-line  ri-xl mb-2"></i>
                    <span>Telegram</span>
                  </a> */}
              
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <img src="/images/joc_img.svg" alt="" />
            </div>
          </div>
        </div>
      </section>

      <section  className="about_2" >
          <div className="container" >
            <div className="row" >
              <div className="col-lg-12" >
                  <h3 className="mb-2" >
                  Disclaimer
                  </h3>
                  <p>
                  Trading cryptocurrencies involves inherent risks, and past performance should not be considered indicative of future results. We strongly advise conducting thorough research and, if necessary, seeking professional advice before engaging in any trading activities.
                   </p>
              </div> 
            </div>
          </div>
        </section>

      </div>

      {/* <section className="inner-page-banner">
        <div className="container">
          <div className="inner text-center">
            <h1 className="title"> About Us </h1>
            <nav className="mt-4">
              <ol className="breadcrumb justify-content-center">
                <li className="breadcrumb-item">
                  <a href="/">Home</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  AboutUs
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </section>
      <section className="pb-90">
        <div className="container">
          <div className="row">
            <div className="col-md-10 m-auto">
              <div className="create-item-wrapper plicy_sec">
                <p>
                  First ever global trading platform that brings you knowledge
                  and will educate you about crypto . GapxBit is a
                  next-generation cryptocurrency trading platform, which will
                  foster all your needs in a simple, easy and intuitive way.
                  <br />
                  <br />
                  GapxBit aims to provide a world with world-className financial
                  system that will shape the economy. GapxBit is build on high
                  standards and is audited and penetration tested.
                  <br />
                  <br />
                  We have experience in building financial systems of the
                  highest security standards and strive to ensure security
                  first.
                  <br />
                  <br />
                  GapxBit is next generation crypto-assets trading to
                  revolutionize the current trading environment by providing a
                  trustworthy, transparent, safe and reliable place to exchange
                  the popular crypto-currencies, ERC20 token and other
                  crypto-currencies that are foreseen to evolve in the future.
                  <br />
                  <br />
                  We at GapxBit offer you the most powerful crypto-asset trading
                  platform, you can now tarde all the top listed
                  crypto-currencies, anywhere any time.
                  <br />
                  <br />
                  With our user-friendly interface,trading and investing in
                  virtual assets has become an easy process. With next to zero
                  fees, trade crypto like a PRO with GapxBit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
};

export default AboutUs;
