import React, { useEffect } from 'react'

const HowToBuy = () => {
   // ********* Scroll Upside ********** //
   useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <>

      <section className="inner-page-banner pb-2 mt-5">
        <div className="container">
          <div className="justify-content-center row" >
            <div className='col-lg-10' >
              <div className="inner text-start p-0 mb-1">
                <h2 className="">How to Buy crypto on GapxBit?  </h2>
                <small>To buy crypto instantly, log into the GapxBit and follow the steps below:</small>
              </div>
              <br />
              <hr className='my-3' />
              <br />
            </div>
          </div>
        </div>
      </section>


      <section className="buy_page" >
        <div className="container" >

          <div className="justify-content-center row" >
            <div className='col-lg-10' >


              <div className='buy_how' >
                <h4> 1. &nbsp;   To explore and buy tokens, head to the Markets section and select the token of your choice, like Bitcoin. </h4>

                <div className='buy_banner' >
                  <img src="/images/how_to_buy/market.png" className='img-fluid' alt="" />
                </div>

              </div>


              <div className='buy_how' >
                <h4>  2. &nbsp; Here, you can observe Bitcoin's performance over the last few days, weeks, or months. </h4>
                <div className='buy_banner' >
                  <img src="/images/how_to_buy/trade.png" className='img-fluid' alt="" />
                </div>

              </div>

              <div className='buy_how' >
                <h4>  3. &nbsp; Tap on the Buy option located at the bottom of the screen. Based on the current market price, choose
                  the amount of USDT you wish to spend on purchasing the equivalent amount of Bitcoin</h4>
                <div className='buy_banner' >
                  <img src="/images/how_to_buy/buyCoin.png" className='img-fluid' alt="" />
                </div>

              </div>

              <div className='buy_how' >
                <h4>  4. &nbsp; Click on Buy Now to place the order.</h4>
                <div className='buy_banner' >
                  <img src="/images/how_to_buy/buyCoin.png" className='img-fluid' alt="" />
                </div>

              </div>

              <div className='buy_how' >
                <h4>  5. &nbsp; Your Buy order is now successfully completed..</h4>
                <div className='buy_banner' >
                  <img src="/images/how_to_buy/orderPlaced.png" className='img-fluid' alt="" />
                </div>

              </div>

              <div className='buy_how' >
                <h4>  6. &nbsp;  Click on the Orders History tab.</h4>
                <div className='buy_banner' >
                  <img src="/images/how_to_buy/orderHistory.png" className='img-fluid' alt="" />
                </div>

              </div>

              <div className='buy_how' >
                <h4>  7. &nbsp; You can now see your Bitcoins in your Investments section and review all your latest orders in Order Details. </h4>
                <div className='buy_banner' >
                  <img src="/images/how_to_buy/openOrders.png" className='img-fluid' alt="" />
                </div>

              </div>




            </div>
          </div>












        </div>
      </section>


    </>
  )
}

export default HowToBuy
