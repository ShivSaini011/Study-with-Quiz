import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const JobApply = () => {
  const [inputData, setinputData] = useState({ name: '', email: '', request: '', country: '', countryOrigin: '', subject: '', detail: '' });
  const [attachments, setAttachments] = useState();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setinputData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };
  return (
    <>
      <section className="inner-page-banner">
        <div className="container">
          <div className="inner text-center">
            <h1 className="title"> Apply for Job </h1>
            <nav className="mt-4">
              <ol className="breadcrumb justify-content-center">
                <li className="breadcrumb-item">
                  <a href="/">Home</a>
                </li>
                <li className="breadcrumb-item">
                  <a href="/job_discription">Job Description</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Apply for Job
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </section>
      <section className="pb-90">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 m-auto">
              <div className="create-item-wrapper plicy_sec">

                <form className="" >
                  <div className="row" > 

                  
                    <div className="col-lg-12" >
                      <div className="form-group field-box mb-3 mb-md-4" >
                        <label className="form-label">Resume/CV </label>
                        <input type="file"  />
                      </div>
                    </div>

                    <div className="col-lg-12" >
                      <div className="form-group field-box mb-3 mb-md-4" >
                        <label className="form-label"> Full name <span className="text-danger" > *</span> </label>
                        <input type="text" name="name" onChange={(e) => handleInputChange(e)} />
                      </div>
                    </div>

                    <div className="col-lg-6" >
                      <div className="form-group field-box mb-3 mb-md-4" >
                        <label className="form-label">Email Address <span className="text-danger" > *</span></label>
                        <input type="text" name="email" onChange={(e) => handleInputChange(e)} />
                      </div>
                    </div>
                    <div className="col-lg-6" >
                      <div className="form-group field-box mb-3 mb-md-4" >
                        <label className="form-label">Phone  <span className="text-danger" > *</span></label>
                        <input type="text" name="Phone" onChange={(e) => handleInputChange(e)} />
                      </div>
                    </div>
                    <div className="col-lg-12" >
                      <div className="form-group field-box mb-3 mb-md-4" >
                        <label className="form-label">Current company   </label>
                        <input type="text" name="Currentcompany" onChange={(e) => handleInputChange(e)} /> 
                      </div>
                    </div>
                    <div className="col-lg-12" >
                      <div className="form-group field-box mb-3 mb-md-4" >
                        <label className="form-label">Links     </label>
                        <input type="text" name="Currentcompany" onChange={(e) => handleInputChange(e)} />
                        <small>Linked In account or any other links URL</small>
                      </div>
                    </div> 

                    

                    <div className="col-md-12" >
                    <br/>
                    <hr/>
                    <br/>
                      <p>WHAT LANGUAGE(S) CAN YOU SPEAK AT A NATIVE OR BUSINESS LEVEL?</p>
                    </div>
                    <div className="col-lg-12" >
                      <div className="form-group field-box  mb-3 mb-md-4" >
                        <label className="form-label">Language 1   <span className="text-danger" > *</span>  </label>
                        <select name="request" onChange={(e) => handleInputChange(e)}>
                          <option> Select Language  1</option>
                          <option> Select Language  1</option>
                          <option> Select Language  1</option>
                          <option> Select Language  1</option>
                          <option> Select Language  1</option>
                          <option> Select Language  1</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-lg-12" >
                      <div className="form-group field-box  mb-3 mb-md-4" >
                        <label className="form-label">Language 2  </label>
                        <select name="request" onChange={(e) => handleInputChange(e)}>
                          <option> Select Language  1</option>
                          <option> Select Language  1</option>
                          <option> Select Language  1</option>
                          <option> Select Language  1</option>
                          <option> Select Language  1</option>
                          <option> Select Language  1</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-lg-12" >
                      <div className="form-group field-box  mb-3 mb-md-4" >
                        <label className="form-label">Language 3  </label>
                        <select name="request" onChange={(e) => handleInputChange(e)}>
                          <option> Select Language  1</option>
                          <option> Select Language  1</option>
                          <option> Select Language  1</option>
                          <option> Select Language  1</option>
                          <option> Select Language  1</option>
                          <option> Select Language  1</option>
                        </select>
                      </div>
                    </div>

                    <div className="col-md-12" >
                    <br/>
                    <hr/>
                    <br/>
                      <p>WORK EXPERIENCE</p>
                    </div> 

                    <div className="col-lg-12" >
                      <div className="form-group field-box mb-3 mb-md-4" >
                        <label className="form-label"> Please describe what work experience do you have?    <span className="text-danger" > *</span>  </label>
                        <textarea rows="5" name="detail" onChange={(e) => handleInputChange(e)}></textarea>
                      </div>
                    </div>

                    <div className="col-lg-12" >
                      <div className="form-group field-box mb-3 mb-md-4" >
                        <label className="form-label"> Do you have experience managing a team? How big is the team?    <span className="text-danger" > *</span>  </label>
                        <textarea rows="5" name="detail" onChange={(e) => handleInputChange(e)}></textarea>
                      </div>
                    </div><div className="col-md-12" >
                    <br/>
                    <hr/>
                    <br/>
                      <p>ADDITIONAL INFORMATION</p>
                    </div> 

                    <div className="col-lg-12" >
                      <div className="form-group field-box mb-3 mb-md-4" >
                        <label className="form-label" data-bs-toggle="modal" data-bs-target="#thankyou_modal"> Add a cover letter or anything else you want to share.     <span className="text-danger" > *</span>  </label>
                        <textarea rows="5" name="detail" onChange={(e) => handleInputChange(e)}></textarea>
                      </div>
                    </div>

                    <div className="col-md-12">
                      <div className="form-check mb-3">
                        <input className="form-check-input" type="checkbox" id="flexCheckDefault"
                           />
                        Yes, GapxBit can contact me about future job opportunities for up to 2 years Privacy policy
                        
                      </div>
                    </div> 

                    <div className="col-lg-12 mt-3" >
                      <button className="btn btn-gradient w-100  text-center btn-xl d-block" type="button"> <span> Submit </span> </button>
                    </div>

                  </div>
                </form>

              </div>
            </div>
          </div>
        </div>
      </section>


      <div className="modal fade" id="thankyou_modal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog  modal-lg">
                    <form className="modal-content">
                        <div className="modal-header flex-column p-0 no-border"> 
                            <button type="button" className="btn-custom-closer" data-bs-dismiss="modal" aria-label="Close"><i
                                className="ri-close-fill"></i></button>
                        </div>
                        <div className="modal-body p-3 p-md-5">
                             

                            <p>
                            Thank you for submitting your job application to GapxBit. We appreciate your interest in joining
                            our team and becoming a part of our dynamic organization. Your application has been received
                            and is now in our review process.
                            </p>

                            <p>
                            Our team will carefully evaluate your qualifications and experience in line with the
                            requirements of the position. We understand the importance of your time and effort in
                            Submit Application
                            applying, and we assure you that we will thoroughly assess your application to determine the
                            best fit for our team.
                            </p>

                            <p>
                            Please note that due to the volume of applications we receive, the review process might take
                            some time. We kindly ask for your patience during this period. Rest assured, we will reach out
                            to you with updates on the status of your application as soon as possible.
                            </p>


                            <p className="hide-50" >
                            Thank you for considering a career with GapxBit. We look forward to potentially working together.
                            </p>


                            <br/> 
                            <p>
                            <small>Best regards,</small> <br/> <strong className="d-block mt-1 text-gradient" >Team GapxBit</strong>
                            </p>
                            
                        </div>
                    </form>
                </div>
            </div>
    </>
  );
};

export default JobApply;
