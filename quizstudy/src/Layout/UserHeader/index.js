// src/Layout/UserHeader/index.js
import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ProfileContext } from "../../Context";

const UserHeader = () => {
  const navigate = useNavigate();
  const [loader, setLoader] = useState(false);
  const [coinList, setCoinList] = useState([]);
  const [coinList2, setCoinList2] = useState([]);
  const [searchPair, setSearchPair] = useState("");

  const ShowMobileSidebar = () => {
    let button = document.getElementById("qwert");
    button.classList.add("active");
  };
  const HideMobileSidebar = () => {
    let button = document.getElementById("qwert");
    button.classList.remove("active");
  };

  const HandlePairSearch = (e) => {
    setSearchPair(e.target.value);
    let input = e.target.value?.toLowerCase();
    let filteredData = coinList2?.filter((item) => {
      return (
        item?.base_currency?.toLowerCase()?.includes(input) ||
        item?.quote_currency?.toLowerCase()?.includes(input)
      );
    });
    setCoinList(filteredData);
  };

  const handleClick = (event) => {
    const button = document.getElementById("serachBar2");
    if (
      typeof event.target.className === "string" &&
      event.target.className.includes("serachBar")
    ) {
      button.classList.add("show");
    } else {
      if (button) {
        button.classList.remove("show");
      }
    }
  };

  useEffect(() => {
    window.addEventListener("click", handleClick);
    return () => {
      window.removeEventListener("click", handleClick);
    };
  }, []);

  const nextPage = (item) => {
    // Define what nextPage should do, for example:
    console.log("Navigating to item:", item);
    // navigate to a specific route or perform another action
  };

  return (
    <>
      <header className="bg-black position-fixed header-fixed">
        <div style={{ marginTop: "5px" }} className="container-fluid">
          <div className="header-inner d-flex align-items-center justify-content-between">
            <div className="header-left d-flex align-items-center">
              <div className="logo-wrapper">
                <Link to="/" className="logo logo-light">
                  <div style={{ height: '50px', width: "100px", margin: '0 0 0' }}>
                    <img src="/images/new_gapx_logo.png" alt="brand" />
                  </div>
                </Link>
                <Link to="/" className="logo logo-dark">
                  <img src="/images/new_gapx_logo.png" alt="brand" style={{ width: "100px", height: "auto" }} />
                </Link>
              </div>
              <div className="mainmenu-wrapper ms-md-3">
                <nav id="sideNav" className="mainmenu-nav d-none d-xl-block">
                  <ul className="mainmenu">
                    <li className="custom_dropdown">
                      <Link to="/MarketPage">
                        Buy Crypto <i className="ri-arrow-down-s-line ms-1"></i>{" "}
                      </Link>
                      <ul className="submenu">
                        <li>
                          <Link to="/BuySell">
                            <div className="d-flex align-items-center">
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
                            <div className="d-flex align-items-center">
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
                    <li>
                      <Link to="/MarketPage">Market</Link>
                    </li>
                    <li className="custom_dropdown">
                      <Link to="/trade/Header">
                        Trade <i className="ri-arrow-down-s-line ms-1"></i>{" "}
                      </Link>
                      <ul className="submenu">
                        <li>
                          <Link to="/trade/Header">
                            <div className="d-flex align-items-center">
                              <i className="ri-line-chart-line me-4"></i>
                              <div>
                                <span>Trade</span>
                                <small>Trade on GapxBit platform</small>
                              </div>
                            </div>
                          </Link>
                        </li>
                        <li>
                          <Link to="/Launchpad">
                            <div className="d-flex align-items-center">
                              <i className="ri-rocket-fill me-4"></i>
                              <div>
                                <span>Launchpad</span>
                                <small>Hold GapxBit and Earn New Token</small>
                              </div>
                            </div>
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link to="/Staking">Staking</Link>
                    </li>
                    <li>
                      <Link to="/FundPage">Wallet</Link>
                    </li>
                    <li>
                      <Link to="/listingcoin">Listing</Link>
                    </li>
                    <li>
                      <Link to="https://gapxcoin.com/">GapxCoin</Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <div className="header-right d-flex align-items-center">
              <ul className="header-right-inner">
                <li className="header_search d-none d-md-block mx-0">
                  <div className="searchBar custom-tabs mt-0" onClick={() => {}}>
                    <i className="ri-search-2-line serachBar"></i>
                    <input
                      type="search"
                      className="custom_search serachBar"
                      placeholder="Search"
                      onChange={HandlePairSearch}
                      value={searchPair}
                    />
                  </div>
                  <div className="search_result dropdown-menu scroll_y serachBar" id="serachBar2">
                    <div className="search_tabs serachBar">
                      <div className="trade_tabs buy_sell_cards py-0 serachBar">
                        <ul className="nav custom-tabs nav_order scroll_x justify-content-between serachBar">
                          <li className="all-tab serachBar">
                            <a className="active serachBar" data-bs-toggle="tab" href="#topSearches">
                              Top Searches{" "}
                            </a>
                          </li>
                          <li
                            className="all-tab serachBar"
                            onClick={() => {
                              setSearchPair("");
                            }}
                          >
                            <a className="serachBar" data-bs-toggle="tabs" href="#hotEvents">
                              <i className="ri-close-line"></i>{" "}
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="tab-content serachBar">
                        <div className="tab-pane px-0 active serachBar" id="topSearches">
                          {coinList?.length > 0 && !loader ? (
                            coinList?.map((item, index) => (
                              <div
                                key={item?._id}
                                className="markets_row__xELC_ markets_rowItem__RPIFi markets_rowActive__NlFL8 serachBar"
                                onClick={() => nextPage(item)}
                              >
                                <span className="ln active serachBar">{index + 1}</span>
                                <div className="markets_col1__kEdFH ps-1 serachBar">
                                  <div className="markets_symbol__tcCTs serachBar">
                                    <img
                                      className="serachBar"
                                      src={item?.base_currency_icon}
                                      alt={item?.base_currency}
                                    />
                                    <p className="serachBar">
                                      {item?.base_currency} / {item?.quote_currency}
                                    </p>
                                  </div>
                                </div>
                                <div className="markets_col2__q5NPP serachBar">
                                  <div className="markets_lastPrice__uWP9T serachBar">
                                    {item?.last_price?.toFixed(2)}
                                  </div>
                                </div>
                                <div className="markets_col3__yYYZq serachBar">
                                  <div
                                    className={`markets_change__sJhmX ${item?.daily_change < 0 ? "red" : "green"} serachBar`}
                                  >
                                    {item?.daily_change?.toFixed(2)}%
                                  </div>
                                </div>
                                <div className="markets_col4__0OfHI serachBar">
                                  <div className="markets_volume__VSJmh serachBar">
                                    <span className="serachBar">
                                      <small className="serachBar">Vol:</small>
                                      {item?.quote_volume}
                                    </span>
                                  </div>
                                </div>
                              </div>
                            ))
                          ) : (
                            <div className="empty_pair serachBar">
                              <img className="serachBar" src="/images/nodatafound.svg" alt="nodatafound" />
                              <span className="serachBar">No Results Found</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="nav-item dropdown header_avater">
                  <div
                    className="nav-link"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <img src="/images/user.png" alt="user" />
                  </div>
                  <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                    <li>
                      <Link to="/Profile" className="dropdown-item">
                        <i className="ri-user-line me-2"></i> Profile
                      </Link>
                    </li>
                    <li>
                      <Link to="/Setting" className="dropdown-item">
                        <i className="ri-settings-3-line me-2"></i> Settings
                      </Link>
                    </li>
                    <li>
                      <Link to="/Login" className="dropdown-item">
                        <i className="ri-logout-box-line me-2"></i> Logout
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="d-none d-lg-block">
                  <Link to="/login" className="cmn-btn">
                    Login
                  </Link>
                </li>
              </ul>
              <div onClick={ShowMobileSidebar} className="mobile-menu-bar d-block d-xl-none">
                <div className="hamburger">
                  <span className="bar"></span>
                  <span className="bar"></span>
                  <span className="bar"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default UserHeader;
