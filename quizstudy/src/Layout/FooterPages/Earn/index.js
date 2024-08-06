import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { ProfileContext } from "../../../Context";
const Earn = () => {
    const { GapxBitPrice } = useContext(ProfileContext);
    const authToken = sessionStorage.getItem("CTEX_AUTH_TOKEN");

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    const toFixedTwo = (value) => {
        return parseFloat(value?.toFixed(2))
    }
    return (
        <>
            <div className="about_page clist refer_page_main" >
                <section className="about_top referal_bg" >
                    <div className="container" >
                        <div className="row g-md-5 align-items-center" >
                            <div className="col-lg-6" >
                                <h2 style={{color: "#3D9483"}} >
                                    Refer and Earn Crypto <br /> <span style={{color: "#3D9483"}} >  with GapxBit</span>
                                </h2>
                                {/* <h4>Get upto<b style={{color: "#3D9483"}} > {toFixedTwo(GapxBitPrice * 1.75)} GapxBit </b> on Sign-up, Refer your friends to earn <b className="text-warning" >  {toFixedTwo(GapxBitPrice * 2)} GapxBit </b>  on every signup</h4> */}
                                <h4>Get upto<b style={{color: "#04d483"}} > 5000 GAPx  </b> on Sign-up, Refer your friends to earn <b style={{color: "#04d483"}}>  GAPx </b>  on every signup</h4>
                                {/* {!authToken && <Link to='/signup' className="btn btn-gradient btn-xl mt-3" > <span>Sign Up Now</span> </Link>} */}
                            </div>
                            <div className="col-lg-6" >
                                <img alt="" src="/images/refer_img.svg" className="img-fluid" />
                            </div>
                        </div>
                    </div>
                </section>

                <div className="container  my-5 py-5" >
                    <div className=" wallet-block" >
                        <div className="card-body" >
                            <section className="hurry_banner">
                                <div className="container">
                                    <h3 className=" ">Hurry! This limited-time opportunity is available for the first <strong>50,000</strong> sign-ups.</h3>
                                </div>
                            </section>
                            <section className=" hiw_sec ">
                                <div className="container">
                                    <div className="section-title section-title-center text-center">
                                        <h2 className="text-gradient"> How Referral Works </h2>
                                        <p> Refer & Earn GapxBit in just 3 simple steps  </p>
                                    </div>
                                    <div className="row justify-content-center">
                                        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 mb-6">
                                            <div className="wallet-block text-center hiw_card hiw_card_bar">
                                                <div className="thumb m-auto">
                                                    <img src="/images/hiw_1.png" alt="nft wallet" />
                                                </div>
                                                <span>Step 1</span>
                                                <h4 className="title text-gradient">Sign-Up </h4>
                                                <div >
                                                    {/* <h5>Earn {toFixedTwo(GapxBitPrice * 1.75)} GapxBit Tokens with GapxBit!</h5> */}
                                                    <h5>Earn 8000 GAPx Tokens with GapxBit!</h5>
                                                    <p>Join GapxBit today and start earning rewards</p>
                                                    <ul className="rewardDisc">
                                                        <li><span>GAPx Tokens:</span> Get 5000 GAPx tokens just for signing up! Start your journey with a warm welcome from GapxBit.</li>
                                                        <li><span>GAPx Tokens:</span> Make your first deposit and earn 1000 GAPx tokens.</li>
                                                        <li><span>GAPx Tokens:</span> Withdraw for the first time and receive 1000 GAPx tokens.</li>
                                                        <li><span>GAPx Tokens:</span> Complete your KYC verification and earn 1000 GAPx tokens.</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 mb-6">
                                            <div className="wallet-block text-center hiw_card hiw_card_bar">
                                                <div className="thumb m-auto">
                                                    <img src="/images/step_2.png" alt="nft wallet" />
                                                </div>
                                                <span>Step 2</span>
                                                <h4 className="title text-gradient"> Get your Referral Link  </h4>
                                                <div >
                                                    <h5><a href="/ReferralPage" style={{color: "#04d483"}}>Click here</a> to get referral link. </h5>
                                                </div>
                                                <ul className="rewardDisc">
                                                    <li>   Once you sign up your referral link is
                                                        generated under <a href="/ReferralPage">Invite and earn</a> tab, you
                                                        can copy your referral link and share it
                                                        with your friends to earn more GAPx</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 mb-6">
                                            <div className="wallet-block text-center hiw_card">
                                                <div className="thumb m-auto">
                                                    <img src="/images/step_3.png" alt="nft wallet" />
                                                </div>
                                                <span>Step 3</span>
                                                <h4 className="title text-gradient">Earn GAPx Tokens for Referrals!</h4>
                                                <div >
                                                    <h5>Refer a friend to GapxBit and earn rewards</h5>
                                                </div>
                                                <ul className="rewardDisc">
                                                    <li><span>GAPx Tokens:</span> Receive GAPx tokens when your friend completes KYC verification, makes their first deposit, and completes their first withdrawal.</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="newsletter-content refering_sec">
                        <h2>Start Referring Start Earning!  </h2>
                        {!authToken && <Link to="/login" className="btn btn-xl btn-gradient "  >
                            <span>Log In</span>
                        </Link>}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Earn
