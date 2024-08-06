import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ProfileContext } from "../../Context";
import { ApiConfig } from "../../Api/Api_Config/ApiEndpoints";
import AuthService from "../../Api/Api_Services/AuthService";

const AuthHeader = () => {
  const navigate = useNavigate();
  const [coinList, setCoinList] = useState([]);
  const [coinList2, setCoinList2] = useState([]);
  const [searchPair, setSearchPair] = useState('');
  const [loader, setloader] = useState(false);
  const [notificationList, setnotificationList] = useState("");

  // ********* Context ********** //
  const { userImage, tradeTheme, setTradeTheme } = useContext(ProfileContext)

  // ********* User Logout ********** //
  const logout = () => {
    sessionStorage.clear();
    navigate("/");
    window.location.reload();
  }

  // ********* Update Theme********** //
  const handleTheme = () => {
    const body = document.getElementById("body");
    let Theme = localStorage.getItem('theme-color');
    setTradeTheme(!tradeTheme)
    if (Theme === 'theme-light') {
      localStorage.setItem('theme-color', "theme-dark")
      body.classList.add('theme-dark');
      body.classList.remove("theme-light");
    } else {
      localStorage.setItem('theme-color', "theme-light")
      body.classList.add('theme-light');
      body.classList.remove("theme-dark");
    }
  };

  const ShowMobileSidebar = () => {
    let button = document.getElementById('qwert');
    button.classList.add("active");
  }
  const HideMobileSidebar = () => {
    let button = document.getElementById('qwert');
    button.classList.remove("active");
  }



  // ******* Seqarching pair Functianlity ******//
  const GetPairs = async () => {
    setloader(true);
    await AuthService.getPairs().then(async result => {
      if (result?.success) {
        setCoinList(result?.data)
        setCoinList2(result?.data)
      }
      setloader(false);
    });
  };

  const nextPage = (data) => {
    navigate(`/trade/${data?.base_currency}_${data?.quote_currency}`);
    window.location.reload();
  }

  const HandlePairSearch = (e) => {
    setSearchPair(e.target.value)
    let input = e.target.value?.toLowerCase();
    let filteredData = coinList2?.filter((item) => {
      return item?.base_currency?.toLowerCase()?.includes(input) || item?.quote_currency?.toLowerCase()?.includes(input)
    });
    setCoinList(filteredData)
  }


  // ******* Show/Hide Search Bar for Coins*******//
  const handleClick = (event) => {
    const button = document.getElementById('serachBar2')
    if (typeof (event.target.className) === 'string' && event.target.className.includes('serachBar')) {
      button.classList.add('show')
    } else {
      if (button) {
        button.classList.remove('show');
      }
    }
  };

  const NotificationList = async () => {
    const result = await AuthService.notificationList()
    if (result?.success && result?.data?.length > 0) {
      setnotificationList(result?.data?.reverse()[0]?.title);
    }
  };
  useEffect(() => {
    NotificationList()
  }, []);


  useEffect(() => {
    window.addEventListener('click', handleClick);
    return () => {
      window.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <>
      <header className="bg-black position-fixed  header-fixed">
        <div style={{margin:"5px 0px 0px 0px"}}  className="container-fluid">
          <div className="header-inner d-flex align-items-center justify-content-between">
            <div className="header-left d-flex align-items-center">
              <div className="logo-wrapper">
                <Link to="/" className="logo logo-light">

                <div style={{height:'50px',width:"100px", margin:'-6px 0 0 0'}}>

                <img  src="/images/new_gapx_logo.png" alt="brand" />
                </div>
              
                </Link>
                <Link to="/" className="logo logo-dark">
                <div style={{height:'50px',overflow:"hidden",background:'red'}}>
                {/* <img  src="/images/gapx_logo.svg" alt="brand" /> */}
                </div>
                </Link>
              </div>
              <div className="mainmenu-wrapper ms-md-5">
                <nav id="sideNav" className="mainmenu-nav d-none d-xl-block">
                  <ul className="mainmenu">
                    {/* <li>
                      <Link to="/" >
                        Home
                      </Link>
                    </li> */}
                    <li className="custom_dropdown" >

                      {/* <Link to="/MarketPage"> */}
                      <Link to="/comingsoon">Buy Crypto <i className="ri-arrow-down-s-line ms-1"></i> </Link>

                      <ul className="submenu">
                        <li>
                          <Link to="/BuySell">
                          {/* <Link to="/comingsoon"> */}
                            <div className="d-flex  align-items-center" >
                              <i className="ri-arrow-up-down-line me-4"></i>
                              <div>
                                <span>Quick Buy/Sell</span>
                                <small>Fast and secure digital asset transactions</small>
                              </div>
                            </div>
                          </Link>
                        </li>
                        <li>
                          <Link to="/comingsoon">
                            <div className="d-flex  align-items-center" >
                              <i className="ri-group-fill me-4"></i>
                              <div>
                                <span>P2P Trading</span>
                                <small>Bank transfer and more options</small>
                              </div>
                            </div>
                          </Link>
                        </li>
                      </ul>

                    </li>
                    <li >
                      <Link to="/MarketPage" >
                        Market
                      </Link>
                    </li>
                    {/* <li><a href="/trade/Header">Trade </a></li> */}

                    <li className="custom_dropdown" >

                      <Link to="/trade/Header">Trade   <i className="ri-arrow-down-s-line ms-1"></i> </Link>

                      <ul className="submenu">
                        <li>
                          <Link to="/trade/Header" >
                            <div className="d-flex align-items-center" >
                              <i className="ri-line-chart-line me-4"></i>
                              <div>
                                <span> Trade </span>
                                <small>  Trade on GapxBit platform </small>
                              </div>
                            </div>
                          </Link>
                        </li>
                        <li>
                          <Link to="/Launchpad" >
                            <div className="d-flex align-items-center" >
                              <i className="ri-rocket-fill me-4"></i>
                              <div>
                                <span>Launchpad </span>
                                <small> Hold GapxBit and Earn New Token </small>
                              </div>
                            </div>
                          </Link>
                        </li>
                      </ul>

                    </li>

                    <li>
                      <Link to="/Staking" >
                        Staking
                      </Link>
                    </li>
                    <li >
                      <Link to="/FundPage" >
                        Wallet
                      </Link>
                    </li>
                     <li >
                      <Link to="/listingcoin" >
                        Listing
                      </Link>
                    </li>
                    <li >
                      <Link to="https://gapxcoin.com/" >
                      GapxCoin
                      </Link>
                    </li>
                    {/* <li >
                      <a href='https://api.ctexexchange.com/downloads'>
                        Download App
                      </a>
                    </li> */}
                  </ul>
                </nav>
              </div>
            </div>
            <div className="header-right d-flex align-items-center">
              <ul className="header-right-inner">
                <li className="setting-option mobile-menu-bar d-block d-xl-none">
                  <button className="hamberger-button" type="button" onClick={ShowMobileSidebar}>
                    <i className="ri-menu-2-fill"></i>
                  </button>
                </li>
                <li className="header_search  d-none d-md-block" >
                  <div className="searchBar custom-tabs mt-0" onClick={() => { GetPairs() }}>
                    <i className="ri-search-2-line serachBar "></i><input type="search" className="custom_search serachBar" placeholder="Search" onChange={HandlePairSearch} value={searchPair} />
                  </div>
                  <div className={`search_result dropdown-menu scroll_y serachBar `} id="serachBar2"  >
                    <div className="search_tabs serachBar" >
                      <div className=" trade_tabs buy_sell_cards py-0  serachBar">
                        <ul className="nav custom-tabs nav_order scroll_x justify-content-between serachBar">
                          <li className="all-tab serachBar">
                            <a className="active serachBar" data-bs-toggle="tab" href="#topSearches">Top Searches </a>
                          </li>
                          <li className="all-tab serachBar" onClick={() => { setSearchPair(''); }}>
                            <a className="serachBar" data-bs-toggle="tabs" href="#hotEvents" ><i className="ri-close-line " ></i> </a>
                          </li>
                        </ul>
                      </div>
                      <div className="tab-content serachBar" >
                        <div className="tab-pane px-0 active serachBar" id="topSearches">
                          {(coinList?.length > 0 > 0 && !loader) ? coinList?.map((item, index) => {
                            return (
                              <div key={item?._id} className='markets_row__xELC_ markets_rowItem__RPIFi markets_rowActive__NlFL8 serachBar' onClick={() => nextPage(item)} >
                                <span className="ln active serachBar" >{index + 1}</span>
                                <div className="markets_col1__kEdFH ps-1 serachBar">
                                  <div className="markets_symbol__gj7q4 serachBar">
                                    <div><span className="markets_strong__s_Hxk serachBar"></span><span>{item?.base_currency}/{item?.quote_currency}</span></div>
                                  </div>
                                  <div className="markets_secondLine__vuaeq serachBar"><span>{item?.name}</span></div>
                                </div>
                                <div className="markets_col2__RMpcV serachBar">
                                  <div className="markets_strong__s_Hxk serachBar">{item?.buy_price}</div>
                                  <div className="markets_secondLine__vuaeq serachBar"><span className=""><span dir="ltr"><span>$</span><span dir="ltr">{item?.buy_price}</span></span>
                                  </span>
                                  </div>
                                </div>
                                <div className="markets_col3__LCAVs serachBar">
                                  <div className={`markets_change__K2rx5  serachBar ${item?.change_percentage >= 0 ? 'text-success' : 'text-danger'}`}>{item?.change_percentage}%</div>
                                  <div className="markets_secondLine__vuaeq serachBar">{item?.volume}</div>
                                </div>
                              </div>
                            )
                          }) : loader ? <div className="text-center no-data h-100 mb-0" >
                            <div className="loading-wave">
                              <div className="loading-bar"></div>
                              <div className="loading-bar"></div>
                              <div className="loading-bar"></div>
                              <div className="loading-bar"></div>
                            </div>
                          </div> : <div className="text-center no-data h-100 mb-0 serachBar" >
                            <div className="loading-wave serachBar"> <p className="text-center serachBar" style={{ textAlign: "center" }}>
                              No data Available
                            </p></div>
                          </div>}
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="avatar-info">
                  <span className="cursor_pointer">
                    <img style={{borderRadius:'50%'}} src={userImage ? ApiConfig.baseUrl + userImage : "/images/profilelogo.png"} alt="user avatar" />
                  </span>
                  <ul className="submenu">
                    <li>
                      <Link to="/Profile/Settings">
                        <i className="ri-user-line"></i> My Account
                      </Link>
                    </li>
                    <li>
                      <Link to="/ReferralPage">
                        <i className="ri-share-line"></i>Invite & Earn
                      </Link>
                    </li>
                    <li>
                      <a href="#/"
                        style={{ cursor: "pointer" }}
                        onClick={logout}
                      >
                        <i className="ri-logout-box-r-line"></i>Log out
                      </a>
                    </li>
                  </ul>
                </li>
                {/* <li>
                  <label className="theme-switcher-label d-flex active" htmlFor="theme-switcher" >
                    <input type="checkbox" className="theme-switcher" id="theme-switcher" onClick={handleTheme} />
                    <div className="switch-handle">
                      <i className="ri-moon-line dark-text"></i>
                      <i className="ri-sun-line light-text"></i>
                    </div>
                  </label>
                </li> */}

                <li className="avatar-info notifications">
                  <span className="cursor_pointer   btn-icon">
                    <i className="ri-notification-3-line me-0"></i>
                  </span>
                  <ul className="submenu pb-0">
                    <h6 className="dropdown-header d-flex align-items-center pb-3 ">
                      <i className="ri-notification-3-line me-3"></i>New Notification
                    </h6>
                    <hr/>
                    {notificationList ? <div className="pt-2 pb-3 text-center cursor-pointer " ><Link to="/Profile/Notifications"> {notificationList?.length > 20 ? `${notificationList?.substring(0, 20)}...` : notificationList}</Link></div> : <div className="pt-2 pb-3" style={{ textAlign: "center" }}>No new notificaton</div>}
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
      
      <div className="popup-mobile-menu" id="qwert" >
        <div className="inner">
          <div className="header-top">
            <div className="logo logo-custom-css">
              <a className="logo-light" href="/">
                <img src="/images/new_gapx_logo.png" alt="nft-logo" />
              </a>
              <Link className="logo-dark" to="/">
                <img src="/images/new_gapx_logo.png" alt="nft-logo" />
              </Link>
            </div>
            <div className="close-menu">
              <button className="close-button" type="button" onClick={HideMobileSidebar}>
                <i className="ri-close-fill"></i>
              </button>
            </div>
          </div>
          <nav>
            <ul className="mainmenu  accordion" id="accordionExample" >
              <li><Link to="/" onClick={() => { HideMobileSidebar() }}> Home </Link> </li>

              <li className="mobile_dropwdown accordion-item">
                <h2 className="accordion-header" id="headingOne">
                  <button className="accordion-button p-0 collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                    Buy Crypto
                  </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse  " aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                  <ul className="submenu">

                    <li>
                      <Link to="/BuySell" onClick={() => { HideMobileSidebar() }}>
                        <span>Quick Buy/Sell</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/comingsoon" onClick={() => { HideMobileSidebar() }}>
                        <span>P2P Trading</span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li >
                <Link to="/MarketPage" onClick={() => { HideMobileSidebar() }}>
                  Market
                </Link>
              </li>
              {/* <li><a href="/trade/Header">Trade </a></li> */}


              <li className="mobile_dropwdown accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                  <button className="accordion-button p-0 collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Trade
                  </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse  " aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                  <ul className="submenu">

                    <li>
                      <Link to="/trade/header" onClick={() => { HideMobileSidebar() }}>
                        <span> Trade  </span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/launchpad" onClick={() => { HideMobileSidebar() }}>
                        <span>Launchpad</span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>

              <li>
                <Link to="/Staking" onClick={() => { HideMobileSidebar() }}>
                  Staking
                </Link>
              </li>
              <li >
                <Link to="/FundPage" onClick={() => { HideMobileSidebar() }}>
                  Wallet
                </Link>
              </li>
              <li>
                <Link
                  to="https://gapxcoin.com/"
                  onClick={() => {
                    HideMobileSidebar();
                  }}
                >
                  GapxCoin
                </Link>
              </li>
{/*              
              <li >
                <a href='https://api.ctexexchange.com/downloads'>
                  Download App
                </a> 
             </li> */}
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default AuthHeader;