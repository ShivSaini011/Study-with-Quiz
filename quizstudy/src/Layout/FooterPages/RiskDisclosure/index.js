import React, { useEffect } from "react"

const RiskDisclosure = () => {

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <>
      <section className="inner-page-banner">
        <div className="container">
          <div className="inner text-center">
            <h1 className="title"> GapxBit Risk Disclosure Statement </h1>
            <nav className="mt-4">
              <ol className="breadcrumb justify-content-center">
                <li className="breadcrumb-item">
                  <a href="/">Home</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Risk Disclosure
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
                <div>
                  Dear Valued GapxBit Users,
                  <br />
                  <br />

                  <p>We want to emphasize the importance of understanding the substantial risks associated with cryptocurrency trading. The cryptocurrency market is inherently volatile and unpredictable. Before engaging in any cryptocurrency transactions, it is crucial that you carefully assess your risk tolerance and make informed decisions. </p>


                  <p>
                    Key Points to Consider when Trading Cryptocurrencies on the GapxBit Platform:
                  </p>

                  <p>
                    <strong>
                      1. KYC Requirements: &nbsp;
                    </strong> Services such as Spot, Savings, and vote-to-list on the GapxBit platform are exclusively accessible to verified GapxBit users who have completed Know Your Customer (KYC) verification.                  </p>

                  <p>
                    <strong>
                      2. Complete KYC:  &nbsp;
                    </strong>
                    It is imperative for users to complete their KYC verification and provide accurate personal information.
                  </p>

                  <p className="mb-0" >
                    <strong>
                      3. Account Security:  &nbsp;
                    </strong>
                    Safeguard your account and password diligently. Never share your account information or password with anyone else. Any losses incurred due to negligence in this regard will be the user's sole responsibility.

                  </p>

                  <br />
                  <p className="mb-0" >
                  <strong className="d-block" >
                    4. Risk Categories:
                  </strong>
                  </p>
                  <br />

                  <p> <strong>- Policy Risk:</strong><br />
                    <span className="d-block ms-3" >Changes in national laws, regulations, or macro-policies can impact cryptocurrency transactions and potentially lead to losses.</span>
                  </p>
                  <p> <strong>- Compliance Risk: </strong><br />
                    <span className="d-block ms-3" >
                      Violation of national laws or regulations during cryptocurrency transactions can result in losses
                    </span>
                  </p>
                  <p> <strong>-  Compliance Risk:</strong><br />
                    <span className="d-block ms-3" >
                      Cryptocurrency markets operate around the clock, and prices can fluctuate significantly. Users should be prepared for both positive and negative returns
                    </span>
                  </p>
                  <p> <strong>-  Trading Risk:</strong><br />
                    <span className="d-block ms-3" >
                      Successful transactions require mutual agreement between parties; GapxBit does not guarantee transaction success.
                    </span>
                  </p>
                  <p> <strong>-  Force Majeure Risk:</strong><br />
                    <span className="d-block ms-3" >
                      Unforeseeable events like natural disasters, cyber attacks, or other unavoidable circumstances can disrupt GapxBit operations and lead to user losses. GapxBit bears no civil liability for losses incurred under such conditions.
                    </span>
                  </p>
                  <p> <strong>-  Delisting Risk:</strong><br />
                    <span className="d-block ms-3" >
                      Delisting may occur due to various reasons, potentially causing user losses.
                    </span>
                  </p>
                  <p> <strong>-  Technical Risk: </strong><br />
                    <span className="d-block ms-3" >
                      Though rare, technical faults during cryptocurrency transactions can impact user interests.
                    </span>
                  </p>
                  <p> <strong>-  Operation Risk:</strong><br />
                    <span className="d-block ms-3" >
                      Operational errors, such as transferring funds to the wrong account, can result in losses.
                    </span>
                  </p>
                  <p> <strong>-  Account Frozen Risk:</strong><br />
                    <span className="d-block ms-3" >
                      Accounts may be frozen or confiscated by judicial institutions in case of debt defaults or alleged crimes.
                    </span>
                  </p>

                  <br />
                  <hr />
                  <br />



                  <strong> Prohibited Actions on GapxBit: </strong>

                  <br /><br />

                  <p>
                    1. Money laundering, fraudulent transactions, illegal fundraising, and fraud are strictly prohibited. Registering under false identities or providing fraudulent
                    KYC information will lead to account suspension, asset freezing, or termination.
                  </p>
                  <p>
                    2. This risk disclosure does not cover all potential risks in the cryptocurrency market. It is your responsibility to thoroughly understand transaction rules,
                    promotions, agreements, and this risk disclosure before engaging in cryptocurrency transactions.
                  </p>
                  <p>
                    3. Users are solely responsible for bearing trading risks on GapxBit. GapxBit does not make any promises or guarantees regarding user losses or gains.
                  </p>

                  {/* ////////// */}
                  <hr /><br />


                  <strong>User Commitment:</strong>
                  <br />
                  <br />
                  <p>
                  By using GapxBit, you agree to the terms outlined in this Risk Disclosure Agreement. Your commitment to adhering to the national and regional laws and regulations of Kyrgyzstan, and your registered residence. Any violations or conduct triggering GapxBit' risk-control measures may result in account suspension, investigation, and legal consequences, with all associated losses and liabilities borne by the user.
                  </p>


                  <p>
                    Reminder : Please be aware that by clicking to agree to this risk disclosure, you acknowledge your understanding and acceptance of cryptocurrency transaction risks and potential losses. GapxBit is not obligated to refund cryptocurrency principal or interests or assume any other responsibilities.
                  </p>

                  <p>
                    Thank you for choosing GapxBit, and please trade responsibly.
                  </p>





                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}

export default RiskDisclosure
