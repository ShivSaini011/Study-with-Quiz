import React, { useEffect, useRef, useState } from 'react'
import AuthService from '../../../Api/Api_Services/AuthService';
import { ApiConfig } from '../../../Api/Api_Config/ApiEndpoints';
import LoaderHelper from '../../../Utils/Loading/LoaderHelper';

const Fees = () => {
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

      <section className="inner-page-banner pb-2">
        <div className="container">
          <div className="inner text-start p-0 mb-1">
            <h2 className="">Fees  </h2>
            <small>Deposit/Withdrawal</small>
          </div>
          <br />
          <hr />
          <br />
        </div>
      </section>


      <section className=" live_prices mt-0 market_prices">

        <div className="container">
          <div className=" mb-5 row align-items-end justify-content-between">
            {/* <div className='col-md-4  col-lg-4' >
              <div className=" ant-card-bordered ant-card-small marketRankList_rankItem__L1CvR h-auto">
             
                <div className="ant-card-body">
                  <div className=" row gx-0 align-items-center py-0">
                    <div className=" col-6">
                      <strong>Withdrawal Fee Rate : </strong>
                    </div>
                    <div className="col-6 text-end"><span className=""> 0.000%  </span></div>
                  </div>
                  <div className=" row gx-0 align-items-center py-0">
                    <div className=" col-6">
                      <strong>Deposit Fee Rate : </strong>
                    </div>
                    <div className="col-6 text-end"><span className=""> 0.000%  </span></div>
                  </div>

                </div>
              </div>
            </div> */}
            <div className='col-md-4 col-lg-3' >
              <div className="searchBar custom-tabs"><i className="ri-search-2-line"></i>
                <input type="text" className="custom_search" placeholder="Search Crypto" onChange={HandleSearch} />
              </div>
            </div>
          </div>
          <div className="tab-content custom-tab-content p-0">
            <div className="table-responsive">
              <table className="table fee_table">
                <thead>
                  <tr>
                    <th className="ant-table-cell">Crypto</th>
                    <th className="ant-table-cell"  >Network</th>
                    <th className="ant-table-cell" >Minimum Deposit Amount</th>
                    <th className="ant-table-cell" >Minimum Withdrawal Amount</th>
                    <th className="ant-table-cell  ">Withdrawal Fee</th>
                  </tr>
                </thead>
                <tbody>

                  {coinPairs?.length > 0 ? coinPairs?.map((item) => {
                    return (
                      <tr data-row-key="USDT" className="ant-table-row" key={item?._id}>
                        <td className="ant-table-cell ant-table-cell-fix-left ant-table-cell-fix-left-last  ">
                          <div className="td_div"><img alt=" " src={ApiConfig?.appUrl + item?.icon_path} className="img-fluid icon_img coinimg me-2 " />{`${item?.base_currency}/${item?.quote_currency}`}</div>
                        </td>
                        <td className="ant-table-cell"  >
                          {item?.chain?.map((data) => {
                            return (
                              <div className=" "><span className="chargeContainer_desc__imRfA">{data}</span></div>
                            )
                          })}
                        </td>
                        <td className="ant-table-cell"  >
                          {item?.chain?.map((data) => {
                            return (
                              <div className=" "><span>{item?.min_deposit}</span></div>
                            )
                          })}
                        </td>
                        <td className="ant-table-cell"  >
                          {item?.chain?.map((data) => {
                            return (
                              <div className=" "><span>{item?.min_withdrawal}</span></div>
                            )
                          })}
                        </td>
                        <td className="ant-table-cell "  >
                          {item?.chain?.map((data) => {
                            return (
                              <div className=" "><span>{item?.withdrawal_fee}</span></div>
                            )
                          })}
                        </td>
                      </tr>
                    )
                  }) : <p className="text-center no-data h-100 mb-0" >
                    <img src="/images/no-data.png" className='img-fluid mb-2' alt="no data" />
                    No Pair Available
                  </p>}


                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>



    </>
  )
}

export default Fees
