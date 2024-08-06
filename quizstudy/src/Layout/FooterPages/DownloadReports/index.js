import React, { useState } from "react";
import AuthService from "../../../Api/Api_Services/AuthService";
import { alertErrorMessage, alertSuccessMessage } from "../../../Utils/CustomAlertMessage";
import LoaderHelper from "../../../Utils/Loading/LoaderHelper";

const DownloadReports = () => {
    const [tradingReport, setTradingReport] = useState("Current Month");

    const handleInputChange = (event) => {
        switch (event.target.name) {
            case "tradingReport":
                setTradingReport(event.target.value);
                break;
            default:
                break;
        }
    }

    const handleTredingReport = async (tradingReport) => {
        await AuthService.getTredingReport(tradingReport).then(async result => {
            if (result.msg === 'Send Successfully') {
                alertSuccessMessage(result.msg)
                LoaderHelper.loaderStatus(false);
            } else {
                LoaderHelper.loaderStatus(false);
                alertErrorMessage(result?.message);
            }
        });
    }

    return (
        <>
            <div className="tab-pane  active show" id="CurrencyPill" role="tabpanel" aria-labelledby="Currency-pill">
                <div className="upload-formate mb-6 d-flex justify-content-center align-items-center ">
                <div>
                    <h3 className="mb-1 text-center">
                        Download Reports
                    </h3>
                    <p className="formate">
                        Get your trading report on your email.
                    </p>
                </div>
                </div>
                <div className=" row py-4">
                    <div className="col-md-12 col-lg-8 m-auto">
                        <div className="form-field-wrapper">
                            <div className="field-box " >
                                <select id="inputGroupSelect01" onChange={handleInputChange} name="tradingReport" value={tradingReport}>
                                    <option value="Current Month">Current Month</option>
                                    <option value="Last 30 Days">Last 30 Days</option>
                                    <option value="Last 60 Days">Last 60 Days</option>
                                    <option value="Last 90 Days">Last 90 Days</option>
                                    <option value="Financial Year 2020-21">Financial Year 2020-21</option>
                                    <option value="Financial Year 2021-22">Financial Year 2021-22</option>
                                </select>
                            </div>

                            <span className="sc-gsTEea ffCUrw  mb-3 mt-2">From 01 May, 2022 to 25 May, 2022</span>
                            <span color="rgb(72, 81, 86)" className="sc-gsTEea kvuTVX">The report will include:</span>
                            <ul className="settings-section-body-list">
                                <li>Exchange Trades</li>
                                <li>Current Coin Balance</li>
                                <li>Deposit and Withdrawals</li>
                                <li>Ledger History</li>
                                <li>Airdrops and other distributions</li>
                            </ul>
                            <button type="button" className="btn btn-gradient text-center  mt-3 w-100">
                                <span className="m-auto"
                                //  onClick={() => handleTredingReport(tradingReport)}
                                 >
                                    Request Trading Report
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default DownloadReports;