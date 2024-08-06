import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Careerlist = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  return (
    <>
      <section className="inner-page-banner pb-0"></section>
      <div className="hero-banner-style top-section-gap ">
        <section className=" faq_sec ">
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-lg-8 col-md-12">
                <div className="section-title ">
                  <h2 className="text-gradient text-center"> Job Openings </h2>
                  <div className="job_filter" >

                    <div className="row align-items-center" >

                      <div className="col-6 col-lg-4">
                        <div className="form-group field-box  mb-3 mb-md-4" >
                          <select>
                            <option> Select  Category </option>
                            <option> Select List 1</option>
                            <option> Select List 1</option>
                            <option> Select List 1</option>
                            <option> Select List 1</option>
                            <option> Select List 1</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-6 col-lg-4">
                        <div className="form-group field-box  mb-3 mb-md-4" >
                          <select>
                            <option> Select Location </option>
                            <option> Select List 1</option>
                            <option> Select List 1</option>
                            <option> Select List 1</option>
                            <option> Select List 1</option>
                            <option> Select List 1</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-9 col-lg-3">
                        <div className="form-group field-box  mb-3 mb-md-4" >
                          <input className="" type="text" placeholder="Search Jobs" />
                        </div>
                      </div>
                      <div className="col-3 col-lg-1">
                        <div className="form-group field-box  mb-3 mb-md-4" > <a href="#" className=" " > Clear </a></div>
                      </div>

                    </div>


                    <div className="css-results">
                      <div className="css-results_bar"></div>
                      <div data-bn-type="text" className="css-results_text">92 results found</div>
                      <div className="css-results_bar_end"></div>
                    </div>

                  </div>
                </div>



                {/* list */}

                <div className="sr_results" >

                  {/* Category */}
                  <div className="sr_results_cat" >
                    <h5>
                      Business Development
                    </h5>
                    {/* list */}
                    <div className="sr_results_row" >
                      <div className="sr_content" >
                        <h6>GapxBit Accelerator Program - Macro Research Analyst</h6>
                        <p>Asia / Early Careers</p>
                      </div>
                      <Link className="btn btn-gradient" to="/job_discription">  <span>Apply</span> </Link>
                    </div>
                    <div className="sr_results_row" >
                      <div className="sr_content" >
                        <h6>GapxBit Accelerator Program - Macro Research Analyst</h6>
                        <p>Asia / Early Careers</p>
                      </div>
                      <Link className="btn btn-gradient" to="/job_discription">  <span>Apply</span> </Link>
                    </div>
                    <div className="sr_results_row" >
                      <div className="sr_content" >
                        <h6>GapxBit Accelerator Program - Macro Research Analyst</h6>
                        <p>Asia / Early Careers</p>
                      </div>
                      <Link className="btn btn-gradient" to="/job_discription">  <span>Apply</span> </Link>
                    </div>
                  </div>

                  {/* Category */}
                  <div className="sr_results_cat" >
                    <h5>
                      Engineering
                    </h5>
                    {/* list */}
                    <div className="sr_results_row" >
                      <div className="sr_content" >
                        <h6>GapxBit Accelerator Program - Macro Research Analyst</h6>
                        <p>Asia / Early Careers</p>
                      </div>
                      <Link className="btn btn-gradient" to="/job_discription">  <span>Apply</span> </Link>
                    </div>
                    <div className="sr_results_row" >
                      <div className="sr_content" >
                        <h6>GapxBit Accelerator Program - Macro Research Analyst</h6>
                        <p>Asia / Early Careers</p>
                      </div>
                      <Link className="btn btn-gradient" to="/job_discription">  <span>Apply</span> </Link>
                    </div>
                    <div className="sr_results_row" >
                      <div className="sr_content" >
                        <h6>GapxBit Accelerator Program - Macro Research Analyst</h6>
                        <p>Asia / Early Careers</p>
                      </div>
                      <Link className="btn btn-gradient" to="/job_discription">  <span>Apply</span> </Link>
                    </div>
                  </div>




                </div>



              </div>
            </div>
          </div>
        </section>






      </div>





    </>
  );
};

export default Careerlist;
