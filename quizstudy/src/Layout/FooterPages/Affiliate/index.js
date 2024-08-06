import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';

const VIPServices = () => {

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <>
      <div className='refer_page_main affiliate_main'>
        <section className="about_top affiliate_sec  ">
          <div className="container">
            <div className="row g-md-5 align-items-center">
              <div className="col-lg-7">
                <h2 className='text-warning'>
                GapxBit Affiliate Program
                </h2>
                <h4> Recommend   <b className="text-warning"> GapxBit</b> and Earn commission in crypto.</h4>
                <Link className='btn btn-gradient btn-lg mt-3 py-2' to='#'> <span>Register Now  </span> </Link>
              </div>
              <div className="col-lg-5"> <img alt="" src="/images/affiliates_img.png" className=" w-100 img-fluid d-none d-md-block  " /> </div>
            </div>
          </div>
        </section>
        <section className='affiliate_program'>
          <div className='container'>
            <div className="row align-items-center">
              <div className="col-lg-5 "><img alt='' src="/images/refer_img.svg" className="img-fluid  p-3" /></div>
              <div className="col-lg-7">
                <h2 className="text-gradient">GapxBit Affiliate Program: Maximize Your Earnings </h2>
                <h5 className="mb-0"> Join the GapxBit Affiliate Program and unlock a
                  world of potential earnings. As an affiliate partner,
                  you can earn 50% trading fees commissions by
                  promoting GapxBit to your audience. </h5> </div>
            </div>
            <div className='af_card'>
              <h5>
                Whether you're a trader, content creator, influencer, or have a
                platform, our program offers you the chance to monetize your
                reach. Share GapxBit with your audience and earn commissions
                on every successful referral.
              </h5>
            </div>
          </div>
        </section>
        <section className='affiliate_program affiliate_program2 pb-3'>
          <div className='container'>
            <div className="row align-items-center">
              <div className="col-lg-7">
                <h5 className="mb-0"> Join now and start capitalizing on the growing demand
                  for tax solutions in the cryptocurrency space. With
                  GapxBit, you can provide value to your audience while
                  earning rewards for your efforts.</h5>
                <h5>
                  Don't miss out on this opportunity – become a GapxBit
                  affiliate and take your earnings to the next level.
                </h5> </div>
              <div className="col-lg-5 "><img alt='' src="/images/crypto_gift.png" className="img-fluid  p-3" /></div>
            </div>
          </div>
        </section>
        <section className=" hiw_sec ">
          <div className="container">
            <div className="section-title section-title-center text-center">
              <h2 className="text-gradient">How Does the GapxBit Affiliate Program Work?</h2> </div>
            <div className="row justify-content-center">
              <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-12 mb-6">
                <div className="wallet-block text-center hiw_card hiw_card_bar">
                  <div className="thumb m-auto"> <img src="/images/hiw_1.png" alt="nft wallet" /> </div>
                  <h4 className="title text-gradient">Sign-Up</h4>
                  <p>Visit GapxBit.IO and sign up for an account</p>
                </div>
              </div>
              <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-12 mb-6">
                <div className="wallet-block text-center hiw_card hiw_card_bar">
                  <div className="thumb m-auto"> <img src="/images/faq5.png" alt="nft wallet" /> </div>
                  <h4 className="title text-gradient">Get your Referral Link</h4>
                  <p> Invite your friends to join the GapxBit community using your unique referral link. </p>
                </div>
              </div>
              <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-12 mb-6">
                <div className="wallet-block text-center hiw_card">
                  <div className="thumb m-auto"> <img src="/images/ac_6.png" alt="nft wallet" /> </div>
                  <h4 className="title text-gradient"> Earn 50% Trading Commission </h4>
                  <p> When users create an account with your referral/affiliate link, you’ll receive commission on every trade they make. </p>
                </div>
              </div>
            </div>


            <div className='af_card af_card2'>

              <div className='row align-items-center' >
                <div className='col-lg-8 col-md-7' >
                  <ul>
                    <li> <span> Spot commission :  </span> <b>  Up to 50% </b> </li>
                    <li> <span> Futures commission :   </span> <b> ----  </b> </li>
                    <li> <span> GapxBit pool commission :  </span> <b>  ----   </b> </li>
                  </ul>
                </div>
                <div className='col-lg-4  col-md-5' >
                  <img src="/images/af_card2_img.png" className='img-fluid' alt='' />
                </div>
              </div>

            </div>





          </div>
        </section>

        <section className='af_cardss' >
          <div className='container' >
            <div className='row  ' >
              <div className='col-xxl-4 col-xl-4 col-lg-4 col-md-6 mb-6'>
                <div className="wallet-block h-100">
                  <h4 className="title text-gradient">Sign-up Referral Bonus</h4>
                  <p>Share your referral link to new user's and
                    earn referral bonus till the first 50,000
                    signups on GapxBit for more details of refer
                    and earn program < Link to="/Earn" className='text-underline text-primary' >  click here  </Link>
                  </p>
                  <p>After the successful 50000 signups the
                    referral bonus will end and the affiliate
                    referral program for trading commission
                    benefits will continue</p>
                </div>
              </div>
              <div className='col-xxl-4 col-xl-4 col-lg-4 col-md-6 mb-6'>
                <div className="wallet-block h-100">
                  <h4 className="title text-gradient"> Minimum requirements </h4>
                  <p> It’s the Early Bird Affiliate program of GapxBit
                    and the minimum requirement is to have a
                    KYC approved account on GapxBit.
                  </p>
                </div>
              </div>
              <div className='col-xxl-4 col-xl-4 col-lg-4 col-md-6 mb-6'>
                <div className="wallet-block h-100">
                  <h4 className="title text-gradient"> Eligibility </h4>
                  <p>Only KYC approved users can participate in
                  GapxBit Affiliate program.</p>
                </div>
              </div>
            </div>
          </div>
          <section className=" afpcb_sec ">
            <div className="container">
              <div className="section-title mb-0 section-title-center text-center">
                <h2 className="text-gradient">GapxBit Affiliate Program Commission Benefits </h2>
                <Link to="#" className='btn btn-gradient btn-lg mt-5 py-2' ><span>Register Now</span> </Link>
              </div>

            </div>
          </section>

        </section>



      </div>


    </>
  )
}

export default VIPServices
