import React, { useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import LoaderHelper from '../../../Utils/Loading/LoaderHelper';
import AuthService from '../../../Api/Api_Services/AuthService';
import { ApiConfig } from '../../../Api/Api_Config/ApiEndpoints';
import moment from 'moment';

const CryptoDetails = () => {
  const [coinDetail, setcoinDetail] = useState([]);
  const [coinPairs, setCoinPairs] = useState([]);
  const [allPairs, setAllPairs] = useState([]);

  const functCheckRef = useRef(true);
  useEffect(() => {
    if (functCheckRef.current) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      GetPairs();
      let URL = window.location.href?.split('?')?.[1];
      coinDetails(URL)
      functCheckRef.current = false;
    }
  }, []);

  const coinDetails = async (currId) => {
    LoaderHelper.loaderStatus(true);
    await AuthService.coinDetails(currId).then((result) => {
      if (result?.success) {
        setcoinDetail(result?.data);
      }
    })
  };

  const GetPairs = async () => {
    await AuthService.getPairs().then(async result => {
      if (result?.success) {
        setCoinPairs(result?.data)
        setAllPairs(result?.data)
      }
    });
  };

  const navigate = useNavigate()
  const UpdateCryptoDetails = (data) => {
    coinDetails(data?.base_currency_id)
    navigate(`/CryptoDetails?${data?.base_currency_id}`);
  };

  // ******* Searching pair Functianlity ******//
  const HandleSearch = (e) => {
    let FilteredData = allPairs?.filter((item) => {
      return item?.base_currency?.toLowerCase()?.includes(e.target.value) || item?.quote_currency?.toLowerCase()?.includes(e.target.value)
    })
    setCoinPairs(FilteredData)
  }
  return (
    <>
      <section className="inner-page-banner pb-0"></section>
      <div className="hero-banner-style top-section-gap ">
        <section className=" faq_sec ">
          <div className="container">
            <div className="row  ">
              <div className="col-12" >
                <div className="section-title ">
                  <h2 className=" text-center">
                    Token Information
                  </h2>
                </div>
                <nav aria-label="breadcrumb" className="mb-0 mt-4  ">
                  <ol className="breadcrumb  faq_breadcrumb mt-0 pb-3">
                    <li className="breadcrumb-item">
                      <Link to="/">Home</Link>
                    </li>
                    <li className="breadcrumb-item">
                      <Link to="/CryptoInformation"  > Token Info </Link>
                    </li>
                    <li className="breadcrumb-item active text-warning  cursor-pointer" aria-current="page">
                      {coinDetail?.name} {coinDetail?.short_name}
                    </li>

                  </ol>
                </nav>

              </div>
              <div className="col-lg-8 col-md-12">
                <div className="section-title mb-0">


                </div>
                <div className="tk_data single-widget recent-post " >
                  <div className="tk_coin mb-4 mb-md-5 " >
                    <div className='d-flex align-items-center' >
                      <img alt=" " src={ApiConfig?.appUrl + coinDetail?.icon_path} className="img-fluid " />
                      <div className='tk_title' >
                        <h4>{coinDetail?.short_name} </h4>
                        <p>{coinDetail?.name}</p>
                      </div>
                    </div>
                    <div className='d-flex align-items-center' >
                      <a href="#" className='btn btn-outline  '> <span>whitepaper</span> </a>
                      <a href="#" className='btn btn-gradient  ms-2'> <span>Official Website</span> </a>
                    </div>
                  </div>


                  <div className='tk_info' >
                    <h4>{coinDetail?.short_name} | {coinDetail?.name}  | GapxBit</h4>

                    <div className='tk_pro' >
                      <h5>{coinDetail?.name} Quick Project Information</h5>
                      <p>
                        {(coinDetail?.description && coinDetail?.description !== 'undefined') ? coinDetail?.description : '---'}
                      </p>
                    </div>
                    {/* <div className='tk_pro' >
                      <h5>BTC on GapxBit</h5>
                      <p>
                        If you're considering purchasing, trading, or holding Bitcoin (BTC), GapxBitglobal should be your primary
                        destination! Our platform offers a convenient, swift, and secure process. With just a simple click on the
                        buttons below, you'll access detailed instructions on acquiring Bitcoin or entering GapxBit' BTC and other
                        cryptocurrency markets and trading interfaces.
                      </p>
                      <p>
                        Moreover, once you've registered on GapxBit, you'll have the opportunity to engage in crypto derivative trading based on Bitcoin, potentially yielding higher returns.
                      </p>
                    </div> */}

                    <div className="tokens_coinInfo">
                      <div className="tokens_infoCoinName"><span>English name of the token</span><span>{coinDetail?.name}</span></div>
                      <div className="tokens_infoCoinName"><span>Withdrawal Status</span><span>{coinDetail?.withdrawal_status} </span></div>
                      <div className="tokens_infoCoinName"><span>Chinese name of the token</span><span>{coinDetail?.name}</span></div>
                      <div className="tokens_infoCoinName"><span>Deposit Status</span><span>{coinDetail?.deposit_status} </span></div>
                      <div className="tokens_infoCoinName"><span>Issue Time</span><span>{coinDetail?.issue_date ? moment(coinDetail?.issue_date).format("DD-MM-YYYY") : 'N/A'}</span></div>
                      <div className="tokens_infoCoinName"><span>Trading status</span><span>N/A</span></div>
                      <div className="tokens_infoCoinName"><span>Issue Price</span><span>{coinDetail?.issue_price} USDT</span></div>
                      <div className="tokens_infoCoinName tokens_infoDivider"><span></span><span></span></div>
                      <div className="tokens_infoCoinName"><span>Max Supply</span><span>{coinDetail?.total_supply?.toLocaleString()}</span></div>
                    </div>


                  </div>
                </div>
              </div>

              <div className="col-xl-4 col-lg-4 " >
                <aside className="sidebar">

                  <div className="single-widget recent-post mt-5 mt-md-0 ">
                    <h3 className="title"> Introduction to Digital assets</h3>

                    <div className="searchBar custom-tabs mb-3"><i className="ri-search-2-line"></i>
                      <input type="text" className="custom_search" placeholder="Search Crypto" onChange={HandleSearch} />
                    </div>

                    <div className="inner">

                      <div className='ss_list scroll_y cursor_pointer' >
                        {coinPairs?.length > 0 ? coinPairs?.map((item) => {
                          return (
                            <div key={item?._id} className='d-flex align-items-center justify-content-between' onClick={() => UpdateCryptoDetails(item)}>
                              <div className="td_div">
                                <img alt=" " src={ApiConfig?.appUrl + item?.icon_path} className="img-fluid icon_img coinimg me-2 " />
                                {`${item?.base_currency}/${item?.quote_currency}`}
                              </div>
                              <i className="ri-arrow-right-line"></i>
                            </div>
                          )
                        }) : <span className='text-center d-block'> No Pair Availabe</span>}



                      </div>


                    </div>

                  </div>
                  <Link to='#' className='btn btn-gradient w-100 btn-block mt-3 py-2' > <span>Register Now</span> </Link>



                </aside>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default CryptoDetails
