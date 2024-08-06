import React, { useEffect, useState } from "react";
import { alertErrorMessage, alertSuccessMessage, alertWarningMessage } from "../../../../Utils/CustomAlertMessage";
import { Link } from "react-router-dom";
import AuthService from "../../../../Api/Api_Services/AuthService";
import LoaderHelper from "../../../../Utils/Loading/LoaderHelper";

const CoinApply = () => {
  const token = sessionStorage.getItem('CTEX_AUTH_TOKEN');
  const [formSteps, setFormSteps] = useState({ step1: true, step2: false, step3: false });
  const [input, setInput] = useState({ email: "", telegramId: "", proofOfConcept: "", vision: "", activeUsers: "", roadmap: "", benefit: "", problemStatement: "", projectName: "", CoinName: "", officialWebsite: "", projectNature: "", discussionWithOther: "", timeline: "", isReferred: "", thirdPartyWorking: "", liquidityServiceWorking: "", anythingElse: "" });
  const [attachments, setAttachments] = useState({ collectionForm: null, registrationDocument: null, legalOpinion: null, whitePaper: null, ndaForm: null, auditReport: null, kycInfo: null });

  const ChangeScreens = (screen) => {
    window.scrollTo({ top: 350, behavior: 'smooth' });
    if (screen === 'step1') setFormSteps({ step1: true, step2: false, step3: false });
    else if (screen === 'step2') setFormSteps({ step1: false, step2: true, step3: false });
    else if (screen === 'step3') setFormSteps({ step1: false, step2: false, step3: true });
  };

  const handleInputs = (e) => {
    const { name, value } = e.target;
    setInput((input) => ({ ...input, [name]: value }))
  };

  const CheckValidImage = (event) => {
    if (!event.target.files[0]) return false;
    else if (!(event.target.files[0].type === "image/png" || event.target.files[0].type === "image/jpeg" || event.target.files[0].type === "image/jpg" || event.target.files[0].type === "application/pdf")) {
      alertWarningMessage('Only JPEG, PNG, JPG, & PDF formats are supported')
      return false
    }
    else if (event.target.files[0].size > 5000000) {
      alertWarningMessage('File size upto 5MB are supported')
      return false
    }
    else return true;
  };

  const handleAttachments = (event) => {
    const name = event.target.name;
    const file = event?.target?.files[0];
    let ImageValidation = CheckValidImage(event);
    if (ImageValidation) setAttachments((input) => ({ ...input, [name]: file }))
    else {
      setAttachments((prevAttachments) => {
        const { [name]: removedFile, ...remainingAttachments } = prevAttachments;
        return remainingAttachments;
      });
      document.getElementById(name).value = "";
    }
  };

  const createFormData = async () => {
    const { email, telegramId, proofOfConcept, vision, activeUsers, roadmap, benefit, problemStatement, projectName, CoinName, officialWebsite, projectNature, discussionWithOther, timeline, isReferred, thirdPartyWorking, liquidityServiceWorking, anythingElse } = input
    const { collectionForm, registrationDocument, legalOpinion, whitePaper, ndaForm, auditReport, kycInfo } = attachments
    let formdata = new FormData()
    formdata.append("email", email)
    formdata.append("telegramId", telegramId)
    formdata.append("proofOfConcept", proofOfConcept)
    formdata.append("vision", vision)
    formdata.append("activeUsers", activeUsers)
    formdata.append("roadmap", roadmap)
    formdata.append("benefit", benefit)
    formdata.append("problemStatement", problemStatement)
    formdata.append("projectName", projectName)
    formdata.append("coinName", CoinName)
    formdata.append("officialWebsite", officialWebsite)
    formdata.append("projectNature", projectNature)
    formdata.append("discussionWithOther", discussionWithOther)
    formdata.append("timeline", timeline)
    formdata.append("isReferred", isReferred)
    formdata.append("thirdPartyWorking", thirdPartyWorking)
    formdata.append("liquidityServiceWorking", liquidityServiceWorking)
    formdata.append("anythingElse", anythingElse)
    formdata.append("collectionForm", collectionForm)
    formdata.append("registrationDocument", registrationDocument)
    formdata.append("legalOpinion", legalOpinion)
    formdata.append("whitePaper", whitePaper)
    formdata.append("ndaForm", ndaForm)
    formdata.append("auditReport", auditReport)
    formdata.append("kycInfo", kycInfo)
    return formdata

  };

  const resetInputs = () => {
    setInput({ email: "", telegramId: "", proofOfConcept: "", vision: "", activeUsers: "", roadmap: "", benefit: "", problemStatement: "", projectName: "", CoinName: "", officialWebsite: "", projectNature: "", discussionWithOther: "", timeline: "", isReferred: "", thirdPartyWorking: "", liquidityServiceWorking: "", anythingElse: "" })
    setAttachments({ collectionForm: null, registrationDocument: null, legalOpinion: null, whitePaper: null, ndaForm: null, auditReport: null, kycInfo: null })
    setFormSteps({ step1: true, step2: false, step3: false })
  };

  const submitCoinListApplication = async (e) => {
    e.preventDefault();
    try {
      LoaderHelper.loaderStatus(true)
      const formData = await createFormData()
      const result = await AuthService.coinListing(formData);
      if (result?.success) {
        alertSuccessMessage("Request submitted... Our team will get back to you soon");
        resetInputs()
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        alertErrorMessage(result?.message);
      }
    } catch (error) { }
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <>
      <div className="about_page clist coinappylform " >
        <section className="about_top" >
          <div className="container" >
            <div className="row g-md-5 align-items-center" >
              <div className="col-lg-12" >
                <h2 className="text-center" >
                  Listing a Coin on <span className="text-gradient" >GapxBit</span>
                </h2>

              </div>
            </div>
          </div>
        </section>
      </div>
      <section className="pb-90">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 m-auto">
              <div className="css_check_bar">
                <div className="sc-bdfBQB sc-kmATbt fOxqyX dzKkzw">
                  <div className={`check_bar ${formSteps.step1 || formSteps.step2 || formSteps.step3 ? 'acive' : ''}`} >
                    <i className="ri-check-fill "></i>
                    <h5> Step 1 </h5>
                  </div>
                  <div className={`check_bar ${formSteps.step2 || formSteps.step3 ? 'acive' : ''}`}>
                    <i className="ri-check-fill "></i>
                    <h5> Step 2</h5>
                  </div>
                  <div className={`check_bar ${formSteps.step3 ? 'acive' : ''}`}>
                    <i className="ri-check-fill "></i>
                    <h5> Step 3</h5>
                  </div>
                </div>
              </div>


              {/* step 1 */}
              <div className={`create-item-wrapper plicy_sec mb-3 ${formSteps.step1 ? '' : 'd-none'}`}>
                <form onSubmit={(e) => { e.preventDefault(); ChangeScreens('step2') }} >

                  <h6 className="text-danger mb-4 " >* Indicates required question</h6>
                  <div className="row" >

                    <div className="col-lg-12" >
                      <div className="form-group field-box mb-4 mb-md-4" >
                        <label className="form-label">Email* </label>
                        <input type="text" name="email" required onChange={handleInputs} value={input?.email} />
                      </div>
                    </div>
                    <div className="col-lg-12" >
                      <div className="form-group field-box  mb-4 mb-md-4" >
                        <label className="form-label">Your Telegram ID* </label>
                        <input type="text" name="telegramId" required onChange={handleInputs} value={input?.telegramId} />
                      </div>
                    </div>
                    <div className="col-lg-12" >
                      <div className="form-group field-box  mb-4 mb-md-4" >
                        <label className="form-label">Please entail the proof of concept behind the coin/token * </label>
                        <input type="text" name="proofOfConcept" required onChange={handleInputs} value={input?.proofOfConcept} />
                      </div>
                    </div>
                    <div className="col-lg-12" >
                      <div className="form-group field-box  mb-4 mb-md-4" >
                        <label className="form-label">Please address the problem statement being solved.* </label>
                        <input type="text" name="problemStatement" required onChange={handleInputs} value={input?.problemStatement} />
                      </div>
                    </div>
                    <div className="col-lg-12" >
                      <div className="form-group field-box  mb-4 mb-md-4" >
                        <label className="form-label">What is the vision for the project?*</label>
                        <input type="text" name="vision" required onChange={handleInputs} value={input?.vision} />
                      </div>
                    </div>
                    <div className="col-lg-12" >
                      <div className="form-group field-box   mb-4 mb-md-4" >
                        <label className="form-label">Are there active users of the project?*</label>
                        <select name="activeUsers" required onChange={handleInputs} value={input?.activeUsers}>
                          <option value="" hidden>  Select </option>
                          <option>  Yes </option>
                          <option>  No </option>
                        </select>
                      </div>
                    </div>
                    <div className="col-lg-12" >
                      <div className="form-group field-box  mb-4 mb-md-4" >
                        <label className="form-label"> Is the underlying technology decentralized or is there a roadmap for the same?* </label>
                        <select name="roadmap" required onChange={handleInputs} value={input?.roadmap}>
                          <option value="" hidden>  Select </option>
                          <option>  Yes </option>
                          <option>  No </option>
                        </select>
                      </div>
                    </div>
                    <div className="col-lg-12" >
                      <div className="form-group field-box  mb-4 mb-md-4" >
                        <label className="form-label"> Does the project benefit from using blockchain technology?* </label>
                        <select name="benefit" required onChange={handleInputs} value={input?.benefit}>
                          <option value="" hidden>  Select </option>
                          <option>  Yes </option>
                          <option>  No </option>
                        </select>
                      </div>
                    </div>

                    <div className="row justify-content-center mt-md-4 mt-4" >
                      <div className="col-6 " >
                        {token ?
                          <button className="btn btn-gradient w-100  text-center btn-xl d-block" type="submit"> <span>Next</span> </button> :
                          <Link to='/login' className="btn custom-btn btn-primary  w-100  text-center btn-xl d-block" >Log In </Link>}
                      </div>
                    </div>

                  </div>
                </form>
              </div>

              {/* step 2 */}
              <div className={`create-item-wrapper plicy_sec mb-3 ${formSteps.step2 ? '' : 'd-none'}`}>
                <form onSubmit={(e) => { e.preventDefault(); ChangeScreens('step3') }} >
                  <p>The name and photo associated with your Google account will be recorded when you upload files and submit this form. Only the email you enter is part of your response. </p>
                  <h6 className="text-danger mb-4 " >* Indicates required question</h6>
                  <div className="row" >
                    <strong className="d-block mb-3" >General Info</strong>
                    <div className="col-lg-12" >
                      <div className="form-group field-box mb-4 mb-md-4" >
                        <label className="form-label">1. Project Name*</label>
                        <input type="text" name="projectName" required onChange={handleInputs} value={input?.projectName} />
                      </div>
                    </div>
                    <div className="col-lg-12" >
                      <div className="form-group field-box  mb-4 mb-md-4" >
                        <label className="form-label">2. Token/Coin Ticker*</label>
                        <input type="text" name="CoinName" required onChange={handleInputs} value={input?.CoinName} />
                      </div>
                    </div>
                    <div className="col-lg-12" >
                      <div className="form-group field-box  mb-4 mb-md-4" >
                        <label className="form-label">3. Project Official Website* </label>
                        <input type="text" name="officialWebsite" required onChange={handleInputs} value={input?.officialWebsite} />
                      </div>
                    </div>
                    <div className="col-lg-12" >
                      <div className="form-group field-box   mb-4 mb-md-4" >
                        <label className="form-label">4. What is the nature of the Project?*</label>
                        <select name="projectNature" required onChange={handleInputs} value={input?.projectNature}>
                          <option hidden value=''> --Select--</option>
                          <option> DeFi</option>
                          <option> NFT</option>
                          <option> Stable Coin</option>
                          <option> L1/L2 Protocols</option>
                          <option> Dapp</option>
                          <option> Currency</option>
                          <option> PoW Coins</option>
                          <option> GameFi/Metaverse</option>
                          <option> Infrastructure (Bridge, Oracle, EVM, etc.)</option>
                          <option> Other </option>
                        </select>
                      </div>
                    </div>
                    <div className="col-lg-12" >
                      <div className="form-group field-box  mb-4 mb-md-4" >
                        <label className="form-label">5. Have you been in discussion with other CEXs regarding listings, please specify:* </label>
                        <input type="text" name="discussionWithOther" required onChange={handleInputs} value={input?.discussionWithOther} />
                      </div>
                    </div>
                    <div className="col-lg-12" >
                      <div className="form-group field-box  mb-4 mb-md-4" >
                        <label className="form-label">6. Target timeline for listing:* </label>
                        <input type="text" name="timeline" required onChange={handleInputs} value={input?.timeline} />
                      </div>
                    </div>
                    <div className="col-lg-12" >
                      <div className="form-group field-box  mb-4 mb-md-4" >
                        <label className="form-label">7. Referred by (GapxBit officials, if no please input "No"):* </label>
                        <select name="isReferred" required onChange={handleInputs} value={input?.isReferred}>
                          <option hidden value=''>  --Select--</option>
                          <option> Yes</option>
                          <option> No </option>
                        </select>
                      </div>
                    </div>
                    <div className="col-lg-12" >
                      <div className="form-group field-box  mb-4 mb-md-4" >
                        <label className="form-label">8. If you are working with any third-party listing agent, please specify:* </label>
                        <input type="text" name="thirdPartyWorking" required onChange={handleInputs} value={input?.thirdPartyWorking} />
                      </div>
                    </div>
                    <div className="col-lg-12" >
                      <div className="form-group field-box  mb-4 mb-md-4" >
                        <label className="form-label">9. If you are working with any liquidity service providers (market makers), please specify:* </label>
                        <input type="text" name="liquidityServiceWorking" required onChange={handleInputs} value={input?.liquidityServiceWorking} />
                      </div>
                    </div>

                    <div className="row justify-content-center mt-md-4 mt-4" >
                      <div className="col-6 " >
                        <button className="btn btn-light w-100  text-center btn-xl d-block" type="button" onClick={() => ChangeScreens('step1')} > <span>Back</span> </button>
                      </div> <div className="col-6 " >
                        <button className="btn btn-gradient w-100  text-center btn-xl d-block" type="submit" > <span>Next</span> </button>
                      </div>
                    </div>

                  </div>
                </form>
              </div>

              {/* step 3 */}
              <div className={`create-item-wrapper plicy_sec mb-3 ${formSteps.step3 ? '' : 'd-none'}`}>
                <form onSubmit={submitCoinListApplication} >
                  <p>The name and photo associated with your Google account will be recorded when you upload files and submit this form. Only the email you enter is part of your response. </p>
                  <h6 className="text-danger mb-4 " >* Indicates required question</h6>
                  <strong className="d-block mb-2" >Necessary Documents Upload</strong>
                  <p>Please be aware that all documents below are necessary for your listing, for saving time and keep the high efficiency, please try to prepare the documents in advance if you miss any one of them.</p>
                  <div className="row" >

                    <div className="col-lg-12" >
                      <strong className="d-block " > 1. Due Diligence Info Collection Form* </strong>
                      <div className="form-group field-box mb-4 mb-md-4" >
                        <label className="form-label">Please fill in as much information as you can using the original spreadsheet and upload your submission here </label>
                        <input type="file" required name="collectionForm" id="collectionForm" onChange={handleAttachments} />
                      </div>
                    </div> <br />

                    <div className="col-lg-12" >
                      <div className="form-group field-box  mb-4 mb-md-4" >
                        <label className="form-label">2. The incorporation registration documents of your project's major legal entity*</label>
                        <input type="file" required name="registrationDocument" id="registrationDocument" onChange={handleAttachments} />
                      </div>
                    </div><br />

                    <div className="col-lg-12" >
                      <div className="form-group field-box  mb-4 mb-md-4" >
                        <label className="form-label">3. Legal opinion recognizing your project tokens as utility tokens (Formal legal opinion
                          issued by established law firms in the following jurisdictions: US, UK, EU, HK and Singapore)* </label>
                        <p className="mb-2" >To launch a project on GapxBit, a legal opinion is required. If the legal opinion is not in English, you must
                          provide both the original document and a certified translation of the document into English. Please ensure
                          that the translation is ready before the signing date of the final listing agreement.
                        </p>
                        <p className="mb-2" >For detailed guidelines on the legal opinion required for projects to launch on GapxBit, please refer to the
                          document provided here: [Link to Guidelines on Legal Opinion]</p>
                        <input type="file" required name="legalOpinion" id="legalOpinion" onChange={handleAttachments} />
                      </div>
                    </div><br />

                    <div className="col-lg-12" >
                      <div className="form-group field-box  mb-4 mb-md-4" >
                        <label className="form-label">4. Project White Paper (PDF)*</label>
                        <input type="file" required name="whitePaper" id="whitePaper" onChange={handleAttachments} />
                      </div>
                    </div><br />

                    <div className="col-lg-12" >
                      <div className="form-group field-box  mb-4 mb-md-4" >
                        <label className="form-label">5. Please download the NDA from below, and upload with a signed version* </label>
                        <a rel="noreferrer" href="https://drive.google.com/file/d/1JB3AQySshCRnQ74WnrbRf-XyixqWoPRW/view?usp=share_link" target="_blank" className="text-warning d-block mb-3 " >https://drive.google.com/file</a>
                        <input type="file" required name="ndaForm" id="ndaForm" onChange={handleAttachments} />
                      </div>
                    </div><br />

                    <div className="col-lg-12" >
                      <div className="form-group field-box  mb-4 mb-md-4" >
                        <label className="form-label">6. The third-party code security review/auditing report issued by established security firms
                          for your token and product/protocol:*</label>
                        <input type="file" required name="auditReport" id="auditReport" onChange={handleAttachments} />
                      </div>
                    </div><br />

                    <div className="col-lg-12" >
                      <div className="form-group field-box  mb-4 mb-md-4" >
                        <label className="form-label">7. Please provide the KYC information for at least 3 key project members (national ID or passport copies)* </label>
                        <input type="file" required name="kycInfo" id="kycInfo" onChange={handleAttachments} />
                      </div>
                    </div><br />

                    <div className="col-lg-12" >
                      <div className="form-group field-box  mb-4 mb-md-4" >
                        <label className="form-label">Thank you for choosing GapxBit! If there is anything else you would like to add, please feel free to leave below.</label>
                        <input type="text" name="anythingElse" onChange={handleInputs} value={input?.anythingElse} placeholder="Anything else..." />
                      </div>
                    </div><br />

                    <div className="row justify-content-center mt-md-4 mt-4" >
                      <div className="col-6 " >
                        <button className="btn btn-light w-100  text-center btn-xl d-block" type="button" onClick={() => ChangeScreens('step2')} > <span>Back</span> </button>
                      </div> <div className="col-6 " >
                        <button className="btn btn-gradient w-100  text-center btn-xl d-block" type="submit" > <span>Submit</span> </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>


            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CoinApply;
