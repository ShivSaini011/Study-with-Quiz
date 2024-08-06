import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const CoinListings = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  const downloadHtmlFile = () => {
    const htmlContent = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>GapxBit Coin Listing Packages</title>
    <style>
      body {
        font-family: Arial, sans-serif;
        margin: 0;
        padding: 0;
        background-color: #f0f0f0;
        color: #333;
      }
      .container {
        margin: 0 auto;
        padding: 20px;
        background-color: #fff;
        border-radius: 5px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      }
      h1 {
        color: #333;
        margin-bottom: 20px;
        text-align: center;
      }
      table {
        width: 100%;
        border-collapse: collapse;
        border: 1px solid #ddd;
        margin-bottom: 20px;
      }
      th, td {
        padding: 12px;
        text-align: left;
        border-bottom: 1px solid #ddd;
      }
      th {
        background-color:#f0b90bd6;
        font-size: larger;
      }
   
  
      .footer {
        margin-top: 20px;
        text-align: center;
        color: #777;
      }
      .head{
        background-color:#f0b90b70;
        color: #333;
        margin-bottom: 20px;
        text-align: center;
        font-weight: bold;
      }
      .fee{
        background-color:#0086cf;
        color: #ffff;
        margin-bottom: 20px;
        text-align: center;
        font-weight: bolder;
      }
    </style>
    </head>
    <body>
      <div className="container">
        <h1>GapxBit Coin Listing Packages</h1>
        <table>
          <tr  >
            <th>Starter</th>
            <th>Pro</th>
            <th>Premium</th>
          </tr>
          <tr className="head">
            <td>Basic Coin Listing:</td>
            <td>Comprehensive Coin Listing:</td>
            <td>Premium Coin Listing:</td>
          </tr>
          <tr>
            <td>Inclusion of your coin on our exchange platform. Trading pairs with USDT.</td>
            <td>Coin listing on our platform with trading pairs including USDT, and one other popular cryptocurrency of your choice.</td>
            <td>Coin listing on our platform with trading pairs including USDT, and two other popular cryptocurrencies of your choice.</td>
          </tr>
          <tr className="head">
          <td>Community Exposure:</td>
          <td>Enhanced Marketing:</td>
          <td>Strategic Marketing:</td>
        </tr>
          <tr>
            <td>Mention of your project on our official social media accounts (one post).</td>
            <td>Two dedicated posts on our social media platforms.</td>
            <td>Four dedicated social media posts.</td>
          </tr>
          <tr>
            <td>Basic visibility in our weekly newsletter.</td>
            <td>Prominent placement in our "New Listings" section for two weeks.</td>
            <td>Top placement in the "New Listings" section for a month.</td>
          </tr>
          <tr>
            <td> </td>
            <td>Featured spot in one newsletter issue.</td>
            <td>Featured in two consecutive newsletter issues.</td>
          </tr>

          <tr className="head">
            <td>Standard Support: </td>
            <td>Priority Support:</td>
            <td>Dedicated Support:</td>
          </tr>
          <tr>
            <td>Access to our standard support channels for assistance. </td>
            <td>Priority access to our support team for quicker issue resolution.</td>
            <td>Direct access to a dedicated account manager for prompt assistance.</td>
          </tr>
          <tr>
          <tr className="head">
            <td>N/A</td>
            <td>Custom Banner Advertisement:</td>
            <td>Extended Advertisement:</td>
          </tr>
          <tr>
            <td> </td>
            <td>A customized banner on our platform for one month.</td>
            <td>A customized banner on our platform for two month.</td>
          </tr>
          <tr className="head">
            <td>N/A</td>
            <td>Market Insights:</td>
            <td>Market Insights & Analytics:</td>
          </tr>
          <tr>
            <td> </td>
            <td>Access to limited market insights and trends data.</td>
            <td>Comprehensive access to market trends and trading data.</td>
          </tr>
          <tr className="head">
          <td>N/A</td>
          <td>N/A</td>
          <td>Exclusive Event Participation:</td>
        </tr>
        <tr>
        <td> </td>
        <td> </td>
        <td>Invitation to participate in select exchange-hosted events. </td>
      </tr>
          <tr className="head">
          <td>Zero Fee Trading Accounts:</td>
          <td>Zero Fee Trading Accounts:</td>
          <td>Zero Fee Trading Accounts:</td>
        </tr>
        <tr>
        <td>Provide one zero fee trading accounts </td>
        <td>Provide one zero fee trading accounts </td>
        <td>Provide two zero fee trading accounts </td>
      </tr>
        <tr>
        <td>Encourage active trading and engagement with your coin. </td>
        <td>Encourage active trading and engagement with your coin. </td>
        <td>Encourage active trading and engagement with your coin. </td>
      </tr>
      <tr className="head">
      <td>Community Airdrop:</td>
      <td>Community Airdrop:</td>
      <td>Community Airdrop:</td>
    </tr>
      <tr>
      <td>Distribute a $5000 worth of your tokens to our active users.</td>
      <td>Distribute a $5000 worth of your tokens to our active users.</td>
      <td>Distribute a $5000 worth of your tokens to our active users.</td>
    </tr>
      <tr>
      <td>Generate initial interest and build a community around your project.</td>
      <td>Generate initial interest and build a community around your project.</td>
      <td>Generate initial interest and build a community around your project.</td>
    </tr>
    <tr className="head">
    <td>USDT Initial Liquidity:</td>
    <td>USDT Initial Liquidity:</td>
    <td>USDT Initial Liquidity:</td>
  </tr>
    <tr>
    <td>Deposit a reserve of 15,000 USDT for the first  3 month to kickstart trading.</td>
    <td>Deposit a reserve of 30,000 USDT for the first 3 month to kickstart trading.</td>
    <td>Deposit a reserve of 50,000 USDT for the first  3 month to kickstart trading. You can withdraw 50% of your fund after 1 month </td>
  </tr>
    <tr>
    <td>Ensure sufficient liquidity for smooth trading.</td>
    <td>Ensure sufficient liquidity for smooth trading.</td>
    <td>Ensure sufficient liquidity for smooth trading. </td>
  </tr>
  <tr className="fee">
  <td>Listing Fee: 15,000 USDT</td>
  <td>Listing Fee: 25,000 USDT</td>
  <td>Listing Fee: 40,000 USDT</td>
</tr>
        </table>
        <div className="footer">
          <p>Terms and Conditions:</p>
          <p>The listing fee is non-refundable, even if the project is not accepted for listing.</p>
          <p>Projects must adhere to our compliance standards and undergo necessary security checks.</p>
          <p>The project's team should be responsive to address any technical or operational concerns during the listing process.</p>
          <p>The exchange reserves the right to delist the coin in case of non-compliance or any security issues.</p>
          <p>Prices and details in this plan are subject to change.</p>
        </div>
      </div>
    </body>
    </html>
    
    
    `;

    const blob = new Blob([htmlContent], { type: 'application/octet-stream' });
    const url = window.URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = 'Coin_Listing_Fee.html';
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
  };
  return (
    <>

      <div className="about_page clist" >
        <section className="about_top" >
          <div className="container" >
            <div className="row g-md-5 align-items-center" >
              <div className="col-lg-8" >
                <h2>
                  Listing a Coin on <span className="text-gradient" >GapxBit</span>
                </h2>
                <p className="mb-2" >
                  Thank you for expressing interest in listing your project on the GapxBit. To proceed with the
                  application, kindly fill out the form with accurate and valid information. We will thoroughly review your
                  project based on the details provided. Please note that any invalid or false information may result in your
                  project not being considered for listing on GapxBit.
                </p>
                <p>
                  Upon submission, your project will be forwarded to our Research Department for an initial review. If
                  your project passes this stage, we will share the listing workflow and tips with you. Additionally, an
                  account manager will be assigned to guide you through the listing process.
                </p>
                <Link to="/coinapply" className="btn btn-gradient btn-small mt-3">
                  <span>Apply Now</span>
                </Link>
                <a href="#/" onClick={downloadHtmlFile} className="btn btn-gradient btn-small mt-3 ml-2">
                  <span>Listing Fees</span>
                </a>
              </div>
              <div className="col-lg-4" >
                <img alt="" src="/images/clist.png" className="img-fluid" />
              </div>
            </div>
          </div>
        </section>


        <section className="about_2" >
          <div className="container" >
            <div className="row" >
              <div className="col-lg-12" >
                <h3>
                  A Step-by-Step Guide:
                </h3>
                <div className="ps-3" >
                  <p>
                    As a hub for discovering hidden opportunities, GapxBit presents an official and standardized process for submitting coin listing applications to the public. Our adept research team, comprising over 10 + experts, takes charge of the comprehensive selection journey from potential candidates to the final listing of tokens.

                  </p><br />
                  <p>
                    This article serves as your comprehensive guide to understanding the procedure for submitting a coin listing application on GapxBit.
                  </p><br />
                  <p>
                    <strong className="mb-2" > Table of Contents: </strong>
                    {/* <strong> </strong> */}
                  </p>
                  <p>
                    <ul>
                      <li className="me-2 mb-2">
                        Getting Started: Initiating Your Project/Coin Listing Application.
                      </li>
                      <li className="me-2 mb-2">
                        Important Notices to Keep in Mind.
                      </li>
                      <li className="me-2 mb-2">
                        In-Depth Application Review Process.
                      </li>
                    </ul>

                  </p><br />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="about_2" >
          <div className="container" >
            <div className="row" >
              <div className="col-lg-12" >
                <h3>
                  Getting Started: Initiating Your Project/Coin Listing Application.
                </h3>
                <p>If you're interested in showcasing your project on GapxBit, simply access the provided link and proceed with the application process:   <a href="coinapply" className="text-warning btn-link mt-4" > <h4 className="text-warning" >Fill the Listing Application Form </h4> </a>   </p>

              </div>
              <div className="col-lg-12 mt-5" >
                <h3>
                  Important Notices to Keep in Mind:
                </h3>
                <p>Key Points to Note in the GapxBit Listing Application Form - 2023 Edition:
                </p>
                <ul>
                  <li className="me-2 mb-2 ">
                    <p> We extend our gratitude for your interest in the GapxBit. Please ensure accurate and valid information while completing the application form. The evaluation of your project hinges on the authenticity of the details provided. Inaccurate or false information will result in your project being ineligible for listing on GapxBit. </p>
                  </li>
                  <li className="me-2 mb-2">
                    <p>  Once you've submitted the application, our proficient Research Department will meticulously assess the details of your project. Successful passage through the initial review phase will lead to insights into the listing process and valuable tips. Furthermore, a dedicated account manager will be assigned to guide you through the listing journey. </p>
                  </li>

                </ul>

              </div>
              <div className="col-lg-12 mt-5" >
                <h3>
                  In-Depth Application Review Process:
                </h3>
                <p>The meticulous process of determining the eligibility of a project for listing on GapxBit is outlined below:
                </p>

              </div>
            </div>
          </div>
        </section>


        <section className="about_2" >
          <div className="container" >
            <div className="row justify-content-center">
              <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 mb-6">
                <div className="wallet-block h-100">
                  <h4 className="title text-gradient">Step 1 </h4>
                  <p>
                    Submit the application
                  </p>
                </div>
              </div>
              <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 mb-6">
                <div className="wallet-block h-100">
                  <h4 className="title text-gradient">Step 2</h4>
                  <p>
                    NDA & Requirements
                  </p>
                </div>
              </div>
              <div className="col-xxl-3 col-xl-3 col-lg-3col-md-6 mb-6">
                <div className="wallet-block h-100">
                  <h4 className="title text-gradient">Step 3</h4>
                  <p>
                    Providing
                  </p>
                </div>
              </div>
              {/* <!-- End .col --> */}
              <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 mb-6">
                <div className="wallet-block h-100">
                  <h4 className="title text-gradient">Step 4 </h4>
                  <p>
                    KYC
                  </p>
                </div>
              </div>
              <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 mb-6">
                <div className="wallet-block h-100">
                  <h4 className="title text-gradient">Step 5 </h4>
                  <p>
                    Listing date confirmation
                  </p>
                </div>
              </div>
              <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 mb-6">
                <div className="wallet-block h-100">
                  <h4 className="title text-gradient">Step 6 </h4>
                  <p>
                    Contract Signing

                  </p>
                </div>
              </div>
              <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 mb-6">
                <div className="wallet-block h-100">
                  <h4 className="title text-gradient">Step 7 </h4>
                  <p>
                    Testing

                  </p>
                </div>
              </div>
              <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 mb-6">
                <div className="wallet-block h-100">
                  <h4 className="title text-gradient">Step 8 </h4>
                  <p>
                    Listing is live

                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        <section className="about_2" >
          <div className="container" >
            <div className="row" >
              <div className="col-lg-12" >
                <h3>
                  <b className="me-2 mb-2" >1.</b> Submit the Application:
                </h3>
                <p>The first step involves submitting an application to the exchange expressing your interest in listing your coin. This application usually includes basic information about your project, its technical specifications, and your intent to have it listed on the exchange's platform. </p>

              </div>
              <div className="col-lg-12 mt-5" >
                <h3>
                  <b className="me-2 mb-2" >2.</b>  NDA & Requirements:
                </h3>
                <p> If your application meets the initial criteria, the exchange might require you to sign a Non-Disclosure Agreement (NDA) to ensure the confidentiality of sensitive information shared during the listing process. Additionally, the exchange will provide you with a set of requirements that your coin or project needs to meet in order to be considered for listing.
                </p>

              </div>
              <div className="col-lg-12 mt-5" >
                <h3>
                  <b className="me-2 mb-2" >3.</b>Providing Information:
                </h3>
                <p>At this stage, you'll need to provide detailed information about your project. This could include technical details about the coin's blockchain, its purpose, use cases, team members, and any other relevant information. This helps the exchange understand the nature of your project and its compatibility with their platform.
                </p>

              </div>
              <div className="col-lg-12 mt-5" >
                <h3>
                  <b className="me-2 mb-2" >4.</b>  KYC (Know Your Customer):
                </h3>
                <p>Most reputable exchanges require projects to go through a Know Your Customer (KYC) process. This involves verifying the identities of the project team members and ensuring compliance with legal and regulatory standards. KYC helps prevent fraudulent or malicious projects from being listed.
                </p>

              </div>
              <div className="col-lg-12 mt-5" >
                <h3>
                  <b className="me-2 mb-2" >5.</b> Listing Date Confirmation:
                </h3>
                <p>Once your project has passed the initial checks, the exchange will provide you with a tentative listing date. This date is subject to change based on any unexpected developments or requirements that arise during the process.
                </p>

              </div>
              <div className="col-lg-12 mt-5" >
                <h3>
                  <b className="me-2 mb-2" >6.</b> Contract Signing:
                </h3>
                <p>After confirming the listing date and meeting all requirements, both parties (your project team and the exchange) will sign a listing agreement. This agreement outlines the terms and conditions of the listing, including fees, responsibilities, and any ongoing obligations.
                </p>

              </div>
              <div className="col-lg-12 mt-5" >
                <h3>
                  <b className="me-2 mb-2" >7.</b>  Testing:
                </h3>
                <p>Before the official listing date, the exchange may conduct thorough technical testing of your coin's integration with their platform. This testing ensures that trading, deposits, withdrawals, and other functionalities related to your coin are working seamlessly on their exchange.
                </p>

              </div>
              <div className="col-lg-12 mt-5" >
                <h3>
                  <b className="me-2 mb-2" >8.</b>  Listing is Live:
                </h3>
                <p>Once all the steps have been successfully completed, and the exchange is satisfied with the technical integration and compliance aspects, your coin will be officially listed on the exchange. Traders and users can then start trading your coin on the platform.
                </p>

              </div>
            </div>
            <p>  <strong className="d-block mt-6" >Each of these steps is crucial in ensuring a smooth and secure process for listing a coin on an exchange. It's important to work closely with the exchange's team, adhere to their requirements, and maintain open communication throughout the process to ensure a successful listing. </strong>     </p>

            <h4>
              <strong className="d-block mt-6" >Notes:</strong>
            </h4>

            <p>  <strong className="d-block " >This process is subject to timely updates in response to shifts in policies and regulations. We are committed to notifying all project developers about the necessity of revising relevant information at different stages of the process. </strong>     </p>
            <p>  <strong className="d-block " >We trust that this guide has provided valuable insights. For any further inquiries, please don't hesitate to contact our 24/7 customer support through online chat or by submitting a support ticket.</strong>     </p>

            <h4>
              <strong className="d-block mt-6" >Wishing you prosperous trading experiences on the GapxBit platform!
              </strong>
            </h4>
          </div>

        </section>

      </div>


    </>
  );
};

export default CoinListings;
