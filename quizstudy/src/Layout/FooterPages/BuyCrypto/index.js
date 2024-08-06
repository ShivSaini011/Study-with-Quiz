import React, { useEffect } from 'react'

const BuyCrypto = () => {
  // ********* Scroll Upside ********** //
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  return (
    <>

      <section className="buy_banner" >
        <div className="container" >
          <div className="buy_title" >

            <h3> Buy  Crypto coming soon ! </h3>

          </div>
        </div>
      </section>


      <section className="buy_page" >
        <div className="container" >
          <div className="section-title section-title-center text-start">
            <h2 className="text-gradient"> Buy Crypto </h2>
          </div>

          <div className="" >
            <ul className="nav custom-tabs my-1">
              <li>
                <a className="active" data-bs-toggle="tab" href="#Express" > Express </a>
              </li>
              <li>
                <a data-bs-toggle="tab" href="#P2P" >  P2P   </a>
              </li>
              <li>
                <a data-bs-toggle="tab" href="#Third-party" >  Third-party  </a>
              </li>
            </ul>
          </div>

          <div className="tab-content">

            {/* ******* Express ********** */}

            <div className="tab-pane show active" id="Express">


              <div className='row gx-md-5 ' >
                <div className='col-lg-6' >
                  <div className='but_content' >
                    <div className='buy_banner' >
                      <img src="/images/new_poster_1.png" className='img-fluid' alt="" />
                    </div>

                    <div className='buy_how' >
                      <h4>Purchasing Cryptocurrencies Made Easy:</h4>

                      <div className="time_line">
                        <p>1. Navigate to the [Buy] section and pick your desired fiat
                          currency for payment and the cryptocurrency you wish
                          to acquire. Next, input the amount you'd like to pay or
                          the amount of cryptocurrency you want to receive.</p>
                        <p>
                          2. Simply click [Buy] and choose a convenient payment method
                        </p>
                        <p>
                          3. Once your payment is verified, the cryptocurrencies
                          you've purchased will be automatically credited to your
                          GapxBit account
                        </p>

                        <h5>
                          FAQ
                        </h5>
                        <p>
                          If you have any questions regarding the payment, please contact us <a href="mailto:support@GapxBitglobal.in" >support@GapxBit.com</a>
                        </p>
                      </div>



                    </div>


                  </div>
                </div>
                <div className='col-lg-6' >
                  <div className='buy_tabs' >
                    <form className="custom-form    ticket-form mb-5 mb-lg-0" action="#" method="post" role="form">
                      <div className="ticket-header login-header" >
                        <ul className="nav nav-pills login-pills" id="pills-tab" role="tablist">
                          <li className="nav-item" role="presentation">
                            <button className="nav-link active" id="pills-Buy-tab" data-bs-toggle="pill" data-bs-target="#pills-Buy" type="button" role="tab" aria-controls="pills-Buy" aria-selected="true">
                              <span>Buy</span>
                            </button>
                          </li>
                          <li className="nav-item" role="presentation">
                            <button className="nav-link" id="pills-Sell-tab" data-bs-toggle="pill" data-bs-target="#pills-Sell" type="button" role="tab" aria-controls="pills-Sell" aria-selected="false">
                              <span>Sell</span>
                            </button>
                          </li>
                        </ul>
                      </div>
                      <div className="tab-content" id="pills-tabContent">



                        <div className="tab-pane show active" id="pills-Buy" role="tabpanel" aria-labelledby="pills-Buy-tab">

                          <div className="buy_form">
                            <div className="buy_input_group" >
                              <label> I want to pay </label>
                              <div className="buy_input" >
                                <input type="text" className='no_input' placeholder="Please enter amount" />
                                <select className='no_select' >
                                  <option>Euro</option>
                                  <option>Euro</option>
                                  <option>Euro</option>
                                  <option>Euro</option>
                                  <option>Euro</option>
                                  <option>Euro</option>
                                  <option>Euro</option>
                                </select>
                              </div>
                            </div>

                            <div className="buy_input_group" >
                              <label> I will receive </label>
                              <div className="buy_input" >
                                <input type="text" className='no_input' placeholder="Please enter quantity" />
                                <span className="px-3 text-warning" >All</span>
                                <select className='no_select' >
                                  <option>Euro</option>
                                  <option>Euro</option>
                                  <option>Euro</option>
                                  <option>Euro</option>
                                  <option>Euro</option>
                                  <option>Euro</option>
                                  <option>Euro</option>
                                </select>
                              </div>
                            </div>



                            <div className="buy_input_group" >
                              <label> Payment Method </label>
                              <div className="buy_input" >
                                <input type="text" className='no_input' placeholder="Banxa/Mercuryo/Moonpay/Simplex" readOnly />
                                <span className=" " > <i className="ri-arrow-down-s-line"></i> </span>

                              </div>
                            </div>

                            <div className='ref_price' >
                              <p>Reference price: <b className='text-gradient' >0.56 EUR</b></p>
                            </div>

                            <div className='buy_action' >
                              <button className='btn btn-gradient btn-xl w-100 d-flex justify-content-center py-3' type='button'  > <span>Buy EOS</span> </button>
                            </div>
                            <p className='mt-3' >
                              <small>
                                You are visiting Fiat Services operated by GapxBit. By
                                clicking 'Buy Now', it represents that you have read and agreed
                                to the Terms of Conditions and Privacy Policy of GapxBit.
                              </small>
                            </p>




                          </div>


                        </div>

                        <div className="tab-pane" id="pills-Sell" role="tabpanel" aria-labelledby="pills-Sell-tab">


                          <div className="buy_form">
                            <div className="buy_input_group" >
                              <label> I want to sell </label>
                              <div className="buy_input" >
                                <input type="text" className='no_input' placeholder="Please enter amount" />
                                <select className='no_select' >
                                  <option>Euro</option>
                                  <option>Euro</option>
                                  <option>Euro</option>
                                  <option>Euro</option>
                                  <option>Euro</option>
                                  <option>Euro</option>
                                  <option>Euro</option>
                                </select>
                              </div>
                            </div>

                            <div className="buy_input_group" >
                              <label> I will receive </label>
                              <div className="buy_input" >
                                <input type="text" className='no_input' placeholder="Please enter quantity" />
                                <span className="px-3 text-warning" >All</span>
                                <select className='no_select' >
                                  <option>Euro</option>
                                  <option>Euro</option>
                                  <option>Euro</option>
                                  <option>Euro</option>
                                  <option>Euro</option>
                                  <option>Euro</option>
                                  <option>Euro</option>
                                </select>
                              </div>
                            </div>



                            <div className="buy_input_group" >
                              <label> Payment Method </label>
                              <div className="buy_input" >
                                <input type="text" className='no_input' placeholder="Banxa/Mercuryo/Moonpay/Simplex" readOnly />
                                <span className=" " > <i className="ri-arrow-down-s-line"></i> </span>

                              </div>
                            </div>

                            <div className='ref_price' >
                              <p>Reference price: <b className='text-gradient' >0.56 EUR</b></p>
                            </div>

                            <div className='buy_action' >
                              <button className='btn btn-gradient btn-xl w-100 d-flex justify-content-center py-3' type='button' > <span>Sell EOS</span> </button>
                            </div>

                            <p className='mt-3' >
                              <small>
                                You are visiting Fiat Services operated by GapxBit Kyrgyzstan. By
                                clicking 'Sell Now', it represents that you have read and agreed
                                to the Terms of Conditions and Privacy Policy of GapxBit
                                Kyrgyzstan.
                              </small>
                            </p>




                          </div>


                        </div>


                      </div>



                    </form>
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

export default BuyCrypto
