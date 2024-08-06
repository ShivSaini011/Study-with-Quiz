import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {

  return (
    <footer className="footer-wrapper">
      <div className="footer-inner">
        <div className="container">
          <div className="row">

            <div className="col-lg-3 col-md-6 mb-4">
              <div className="footer-widget">
                <h4>About Us</h4>
                <ul className="footer-list-widget">
                  <li>
                    <Link to="/AboutUs">About </Link>
                  </li>
                  <li>
                    <Link to="/TermsOfUsePage">Terms of Use</Link>
                  </li>
                  <li>
                    <Link to="/PrivacyPolicyPage">Privacy & KYC Policy</Link>
                  </li>
                  <li>
                    <Link to="/RiskDisclosure">Risk Disclosure</Link>
                  </li>

                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 mb-4">
              <div className="footer-widget">
                <h4>Services</h4>
                <ul className="footer-list-widget">
                  <li>
                    <Link to="/BuyCrypto">Buy Crypto</Link>
                  </li>
                  <li>
                    <Link to="/Fees">Fees</Link>
                  </li>
                  <li>
                    <Link to="/Earn">Referral Program</Link>
                  </li>
                  <li>
                    <Link to="/listingcoin">Listing Application</Link>
                  </li>

                </ul>
              </div>
            </div>

            {/* <div className="col-lg-3 col-md-6 mb-4">
              <div className="footer-widget">
                <h4>Support</h4>
                <ul className="footer-list-widget">
                  <li>
                    <Link to="/LawEnforcementReq">Law Enforcement Requests</Link>
                  </li>
                  <li>
                    <Link to="/CryptoInformation">Crypto Information</Link>
                  </li>
                  <li>
                    <Link to="/LawEnforcementGuide">Law Enforcement Guidelines</Link>
                  </li>
                </ul>
              </div>
            </div> */}

            <div className="col-lg-3 col-md-6 mb-4">
              <div className="footer-widget">
                <h4>Contact Us</h4>
                <ul className="footer-list-widget">
                  <li>
                    <Link to="/FAQ">Help Center/ FAQ</Link>
                  </li>
                  <li>
                    <Link to="/Career">Career</Link>
                  </li>
                  <li>
                    <Link to="/Support">Submit a Request</Link>
                  </li>


                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 mb-4">
              <div className="footer-widget">
                <h4>Community</h4>
                <ul className="footer-list-widget footer_social">

                  <li>
                    <a rel="noreferrer" target="_blank" href="https://t.me/+14UWFzzimsczOTE1">
                      <img alt="Telegram" src="/images/socialMediaIcons/telegram.png" />
                    </a>
                  </li>
                  <li>
                    <a rel="noreferrer" target="_blank" href="https://x.com/GapxBit">
                      <img alt="Twitter" src="/images/socialMediaIcons/twitter.png" />
                    </a>
                  </li>
                  <li>
                    <a rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/gap-x-bit-115017318/">
                      <img alt="linkedin" src="/images/socialMediaIcons/linkedin2.png" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </div>
      <div className="copyright text-center">
        <div className="container">
          <p>
            Copyright ©️ GapxBit 2024. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
