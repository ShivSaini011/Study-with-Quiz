import React, { useEffect } from 'react'

const LawEnforcementReq = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);
    return (
        <>
            <section className="inner-page-banner">
                <div className="container">
                    <div className="inner text-center">
                        <h1 className="title"> Law Enforcement Request  </h1>
                        <nav className="mt-4">
                            <ol className="breadcrumb justify-content-center">
                                <li className="breadcrumb-item">
                                    <a href="/">Home</a>
                                </li>
                                <li className="breadcrumb-item active" aria-current="page">
                                    Law Enforcement Request
                                </li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </section>

            <section className="pb-90">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 col-lg-7 m-auto">
                            <div className="create-item-wrapper plicy_sec law_sec">

                                <p>
                                    Welcome to GapxBit Law Enforcement Online Request System, known as 'LEORS.' Please adhere to the provided instructions under
                                    (law enforcement guidelines); <b>failure to do so may lead to your request being left unattended.</b>
                                </p>
                                <p>
                                    GapxBit exclusively accepts law enforcement requests from authorized officials of the judiciary or government agencies with the
                                    requisite jurisdiction and authority. <b>If you do not fall within the category of aforementioned officials, your request(s) will not be
                                        processed.</b>
                                </p>

                                <p className='mb-0 text-danger' >
                                    Important Note: All requests must be submitted in English or include a certified English translation. Please complete this ticket in the
                                    English language.

                                </p>
                            </div>


                            <div className="create-item-wrapper plicy_sec law_sec law_sec_form mt-3">

                                <div className='field-box mb-4' >
                                    <label>Country* </label>
                                    <small className='mb-2 d-block' >Please select the country where the judicial organization is located</small>
                                    <select>
                                        <option>
                                            Select Country
                                        </option>
                                        <option>
                                            Select Country
                                        </option>
                                        <option>
                                            Select Country
                                        </option>
                                        <option>
                                            Select Country
                                        </option>
                                        <option>
                                            Select Country
                                        </option>
                                        <option>
                                            Select Country
                                        </option>
                                    </select>
                                </div>

                                <div className='field-box mb-4' >
                                    <label>Name of Judicial Organization * </label>
                                    <small className='mb-2 d-block' >Please select the country where the judicial organization is located</small>
                                    <input type="text" className=' ' placeholder='Please Enter Name of Judicial Organization*' />
                                </div>

                                <div className='field-box mb-4' >
                                    <label>Judicial Identification* </label>
                                    <small className='mb-2 d-block' >Please provide the work credentials or relevant identification proof of the judicial organization / law enforcement personnel</small>
                                    <input type="file" />
                                </div>

                                <div className='field-box mb-4' >
                                    <label className='d-block mb-2' > Official Email Address* </label>
                                    <input type="text" aria-placeholder='Please Enter Official Email Address' />
                                </div>

                                <div className='field-box mb-4' >
                                    <label className='d-block mb-2' > Official Contact Numbe </label>
                                    <input type="text" aria-placeholder='Please Enter Contact Email Address' />
                                </div>

                                <div className='field-box mb-4' >
                                    <label className='d-block mb-2' > Title </label>
                                    <input type="text" aria-placeholder='Please Enter Contact Email Address' />
                                </div>

                                <div className='field-box mb-4' >
                                    <label className=' ' > Judicial Request* </label>
                                    <small>Please provide specific details regarding judicial /law enforcement request and the matter’s regarding GapxBit cooperation. </small>
                                    <textarea rows="5" ></textarea>
                                </div>


                                <div className='field-box mb-4' >
                                    <label className=' ' > Judicial Documents* </label>
                                    <small className='mb-2 d-block' > Please provide valid judicial/law enforcement investigation documents  </small>
                                    <input type='file' />
                                </div>
                                <div className='field-box mb-4' >
                                    <label className='d-block mb-2' > Judicial Investigation Information </label>
                                    <input type='file' />
                                </div>
                                <div className='field-box mb-4' >
                                    <label className=' ' > Attachments </label>
                                    <small className='mb-2 d-block' >Supports pdf, csv, docx, doc, xlsx, xls, pptx, zip, png, jpg, gif, mp4, txt, etc. The maximum size of a single file is 50M.Supports a maximum of 10 attachments.  </small>
                                    <input type='file' />
                                </div>

                                <div className="form-check mb-2"><input className="form-check-input" type="checkbox" id="flexCheckDefault" value="false" />I am an authorized law enforcement officer or government personnel conducting an investigation, and this is an official request</div>

                                <div className="form-check mb-4"><input className="form-check-input" type="checkbox" id="flexCheckDefault" value="false" /> I have read and understand [Law Enforcement Guidelines]. </div>


                                <button className="btn btn-gradient w-100 justify-content-center btn-medium" >
                                    <span> Submit </span>
                                </button>




                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default LawEnforcementReq
