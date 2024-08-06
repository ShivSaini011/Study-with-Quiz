import React, { useState, useEffect } from "react";
import moment from "moment";
import AuthService from "../../../Api/Api_Services/AuthService";
import { alertErrorMessage } from "../../../Utils/CustomAlertMessage";
import { usePagination, useSortBy, useTable } from "react-table";

const TransferHistory = () => {
  const [transactions, setTransactions] = useState([]);
  const [amount, setAmount] = useState("");
  const [createdAt, setCreatedAt] = useState("");
  const [fees, setFees] = useState("");
  const [transactionType, setTransactiontype] = useState("");
  const [transID, setTransID] = useState("");
  const [status, setStatus] = useState("");
  const [tdsAmount, setTdsAMount] = useState("");

  useEffect(() => {
    // transHistory();
  }, []);


  const transHistory = async () => {
    await AuthService.getTransHistory().then(async (result) => {
      if (result?.success) {
        setTransactions(result?.data);
      } else {
        alertErrorMessage(result?.message);
      }
    });
  };

  const getTransactionDetail = (transaction) => {
    setAmount(transaction?.amount);
    setCreatedAt(transaction?.createdAt);
    setFees(transaction?.fees);
    setTransactiontype(transaction?.transType);
    setTdsAMount(transaction?.tdsAmount);
    setTransID(transaction?._id);
    setStatus(transaction?.status);
  };
  
  const data = React.useMemo(() => transactions, []);
  const columns = React.useMemo(() => [
    { Header: "Sr No.", accessor: "No", },
    { Header: "Pair", accessor: "Pair", disableSortBy: true, },
    { Header: "Amount", accessor: "Amount", disableSortBy: true, },
    { Header: "Quantity", accessor: "Quantity", disableSortBy: true, },
    { Header: "Fees", accessor: "Fees", disableSortBy: true, },
    { Header: " Transaction Type", accessor: "Transaction", },
    {
      Header: " Status", accessor: "Status",     // Cell: ({ value }) => { return <button type="button">{value}</button> }
    }], []);

  const { getTableProps, getTableBodyProps, headerGroups, page, nextPage, previousPage, canNextPage, canPreviousPage, pageOptions, gotoPage, state, pageCount, setPageSize, disableSortBy, rows, prepareRow } = useTable({ columns, data }, useSortBy, usePagination);
  const { pageIndex, pageSize } = state;

  return (
    <>
      <div className="tab-pane" id="TransitionsPill" role="tabpanel" aria-labelledby="Transitions-pill">
        <div className="upload-formate mb-6 d-flex justify-content-center align-items-center">
          <div>
            <h3 className="mb-1 text-center ">Transfer History Details</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 m-auto mt-6">
            <div className="form-field-wrapper custom-tab-content table_scroll p-0 switch_btn  border-dashed border-gray-300 bg-lighten card-rounded ">
              {transactions.length === 85 ?
                <div className="favouriteData">
                  <img src="/images/no-data.svg" className="img-fluid" width="96" height="96" alt="" />
                  <br />
                  <p className="mt-3 mb-4"> No Data Found. </p>
                </div> :
                <div className="table-responsive">
                  <table {...getTableProps()} className="table a"   >
                    <thead  >
                      {headerGroups.map((headerGroup) => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                          {headerGroup.headers.map((column) => (
                            <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                              {column.render("Header")}
                              {column.Header !== 'First Name' && <i className="ri-arrow-up-down-fill ms-1" style={{ color: column.isSorted ? (column.isSortedDesc ? '#ff00009c' : 'green') : '' }}></i>}
                            </th>
                          ))}
                        </tr>
                      ))}
                    </thead>
                    <tbody {...getTableBodyProps()}>
                      {page.map((row) => {
                        prepareRow(row);
                        return (
                          <tr {...row.getRowProps()}>
                            {row.cells.map((cell) => (
                              <td {...cell.getCellProps()}> {cell.render("Cell")} </td>
                            ))}
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                 <div className="container pt-3 pb-4  table_control" >
                  <div className=" row align-items-center " >
                      <div className="col-md-4" >
                        <div className="btn-group btn-group-mini justify-content-start" role="group" aria-label="Basic radio toggle button group">
                        
                          <strong> Page{pageIndex + 1} of {pageOptions.length}</strong>
                          <select value={pageSize} onChange={(e) => setPageSize(+e.target.value)} >
                            {[10, 15, 20]?.map((num) => {
                              return (
                                <option key={num} value={num}>Show {num}</option>
                              )
                            })}

                          </select>
                          <button className="btn-check" > Button </button>
                          </div>


                      </div>
                      <div className="col-md-4" ></div>
                      <div className="col-md-4" >
                        <div className="btn-group btn-group-mini justify-content-end " role="group" aria-label="Basic radio toggle button group">
                          <input type="button" className="btn-check" name="btnradio" id="btnradio125" autocomplete="off" />
                          <label className="btn "htmlFor="btnradio125" disabled={!canPreviousPage} onClick={() => { gotoPage(0) }} >{'<<'}</label>

                          <input type="button" className="btn-check" name="btnradio" id="btnradio250" autocomplete="off" />
                          <label className="btn "htmlFor="btnradio250" disabled={!canPreviousPage} onClick={() => { previousPage() }}>Previous</label>

                          <input type="button" className="btn-check" name="btnradio" id="btnradio375" autocomplete="off" />
                          <label className="btn "htmlFor="btnradio375" disabled onClick={() => { nextPage() }}>Next</label>
                          <input type="button" className="btn-check" name="btnradio" id="btnradio3100" autocomplete="off" />
                          <label className="btn "htmlFor="btnradio3100" disabled={!canNextPage} onClick={() => { gotoPage(pageCount - 1) }}>{'>>'}</label>
                        </div>
                      </div>
                    </div>
                 </div>
                </div>}


            </div>
          </div>
        </div>
      </div>

      {/* TransHistory modal */}
      <div className="modal fade" id="transfer_history" tabindex="-1" aria-labelledby="transfer_history" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header flex-column px-8">
              <h3 className="modal-title" id="placeBitLaebl">
                Transfer History
              </h3>
              <button type="button" className="btn-custom-closer" data-bs-dismiss="modal" aria-label="Close">
                <i className="ri-close-fill"></i>
              </button>
            </div>
            <div className="modal-body px-8 py-5 body_history">
              <div className="tt_item ">
                <span className="tt_disable">Status</span>
                <span
                  className={`${status === "Completed" ? "badge badge-success" : status === "Cancel" ? "badge badge-danger" : status === "Pending" ? "badge badge-warning" : ""}`}>
                  <strong>{status}</strong>
                </span>
              </div>
              <div className="tt_data">
                <div className="tt_item">
                  <span className="tt_disable">Transaction Type</span>
                  <span className="tt_normal">
                    <b> {transactionType}</b>
                  </span>
                </div>
                <div className="tt_item ">
                  <span className="tt_disable">TDS Amount</span>
                  <span className="tt_normal">
                    <b>{tdsAmount}</b>
                  </span>
                </div>
                <div className="tt_item">
                  <span className="tt_disable">Amount</span>
                  <span className="tt_normal">
                    <b>{amount}</b>
                  </span>
                </div>
                <div className="tt_item ">
                  <span className="tt_disable">Transtion ID</span>
                  <span className="tt_normal">
                    <b>{transID}</b>
                  </span>
                </div>
                <div className="tt_item ">
                  <span className="tt_disable">Date &amp; Time</span>
                  <span className="tt_normal">
                    <b> {moment(createdAt).format("L")} </b>
                  </span>
                </div>
                <div className="tt_item ">
                  <span className="tt_disable">
                    Transaction Fees <br />
                    <small>Incl.of all applicable taxes</small>
                  </span>
                  <span className="tt_normal">
                    <b>{!fees ? "0" : fees}</b>
                  </span>
                </div>
                <div className="tt_item ">
                  <span className="tt_disable">Remarks</span>
                  <span className="tt_normal">
                    <b>GapxBit Exchnage</b>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TransferHistory;
