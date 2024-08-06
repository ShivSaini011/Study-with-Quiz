import React, { useEffect, useRef, useState } from 'react'
import { Link } from "react-router-dom";
import AuthService from '../../../Api/Api_Services/AuthService';
import { ApiConfig } from '../../../Api/Api_Config/ApiEndpoints';
import LoaderHelper from '../../../Utils/Loading/LoaderHelper';

const CryptoInformation = () => {
  const [coinPairs, setCoinPairs] = useState([]);
  const [allPairs, setAllPairs] = useState([]);

  const functCheckRef = useRef(true);
  useEffect(() => {
    if (functCheckRef.current) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      GetPairs()
      functCheckRef.current = false;
    }
  }, []);

  // ******* Seqarching pair Functianlity ******//
  const GetPairs = async () => {
    LoaderHelper.loaderStatus(true);
    await AuthService.getPairs().then(async result => {
      if (result?.success) {
        setCoinPairs(result?.data)
        setAllPairs(result?.data)
      }
    });
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

      <section className="inner-page-banner pb-2 mt-5">
        <div className="container">
          <nav className="mt-4">
            <ol className="breadcrumb justify-content-start mb-4">
              <li className="breadcrumb-item">
                <Link to="/">Home</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Crypto Information
              </li>
            </ol>
          </nav>
          <div className="inner text-start p-0 mb-1">
            <h2 className="mb-3">Crypto Assets Information & Introduction | GapxBit  </h2>

            <small className='mb-3 d-block' >
              Explore the fundamentals of cryptocurrencies with our Crypto Asset Insights & Introduction, offering a concise
              overview of the digital currencies available on GapxBit. Within these pages, you'll find essential details
              about each listed cryptocurrency, along with links to step-by-step buying instructions and access to crypto markets
              and trading interfaces.
            </small>
            <small className='   d-block' >
              Unlock exclusive features by registering and utilizing our platform. By creating a GapxBit account, you can
              seamlessly buy and sell cryptocurrencies, track your portfolio, and receive real-time notifications about price
              movements. Moreover, our secure platform ensures the safety of your transactions and the confidentiality of your
              personal data. Don't miss out on the exciting world of cryptocurrency trading – join GapxBit today and embark on
              your crypto journey.
            </small>
            <br />
            <hr className="mt-3 d-block" />
          </div>
        </div>
      </section>



      <section id="openings" className="cc_1 crypto_info">
        <div className="container">


          <div className=" mb-5 row align-items-end justify-content-between">
            <div className='col-md-4  col-lg-4' >
              <h4> All Cryptos </h4>
            </div>
            <div className='col-md-4 col-lg-3' >
              <div className="searchBar custom-tabs"><i className="ri-search-2-line"></i>
                <input type="text" className="custom_search" placeholder="Search Crypto" onChange={HandleSearch} />
              </div>
            </div>
          </div>


          <div className="cyt_sec" >
            {coinPairs?.length > 0 ? coinPairs?.map((item) => {
              return (
                <Link key={item?._id} to={`/CryptoDetails?${item?.base_currency_id}`} className="cyt_card" >
                  <div className="td_div">
                    <img alt=" " src={ApiConfig?.appUrl + item?.icon_path} className="img-fluid icon_img coinimg me-2 " />
                    {`${item?.base_currency}/${item?.quote_currency}`}
                  </div>
                  <i className="ri-arrow-right-line"></i>
                </Link>
              )
            }) : <p className="text-center no-data h-100 mb-0" >
              <img src="/images/no-data.png" className='img-fluid mb-2' alt="no data" width="52" />
              No Pair Available
            </p>}


          </div>




        </div>
      </section>






    </>
  )
}

export default CryptoInformation
