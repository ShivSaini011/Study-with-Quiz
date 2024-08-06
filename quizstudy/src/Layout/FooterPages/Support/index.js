import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { alertSuccessMessage, alertWarningMessage } from "../../../Utils/CustomAlertMessage";
import AuthService from "../../../Api/Api_Services/AuthService";
import LoaderHelper from "../../../Utils/Loading/LoaderHelper";

const Support = () => {
  const [inputData, setinputData] = useState({ name: '', email: '', subject: '', detail: '' });
  const [attachments, setAttachments] = useState();
  const location = useLocation();
  const isMobSupport = location?.pathname?.includes('/mobSupport');


  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setinputData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const CheckValidImage = (event) => {
    if (!event.target.files[0]) return false;
    if (event.target.files[0].size <= 5000000 && (event.target.files[0].type === "image/png" || event.target.files[0].type === "image/jpeg" || event.target.files[0].type === "image/jpg")) {
      return true
    } else {
      alertWarningMessage('Only JPEG, PNG & JPG formats and file size upto 5MB are supported')
      return false;
    }
  };

  const handleAttachement = (event) => {
    event.preventDefault();
    let ImageValidation = CheckValidImage(event);
    if (ImageValidation) setAttachments(event.target.files[0])
    else {
      setAttachments();
      document.getElementById("Attachments").value = "";
    }
  };

  const submitRequest = async (e) => {
    e.preventDefault();
    LoaderHelper.loaderStatus(true)
    try {
      var formData = new FormData();
      formData.append("name", inputData?.name);
      formData.append("email", inputData?.email);
      formData.append("subject", inputData?.subject);
      formData.append("details", inputData?.detail);
      formData.append("profilepicture", attachments);
      const result = await AuthService.addSupportDetails(formData);
      if (result?.success) {
        alertSuccessMessage(result?.message);
        setinputData({ name: '', email: '', subject: '', detail: '' });
        setAttachments();
        document.getElementById("Attachments").value = "";
      }
    } catch (error) { }
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);


  return (
    <>
      <section className="inner-page-banner">
        <div className="container">
          <div className="inner text-center">
            <h1 className="title"> Help & Support </h1>
            {!isMobSupport &&
              <nav className="mt-4">
                <ol className="breadcrumb justify-content-center">
                  <li className="breadcrumb-item">
                    <Link to="/">Home</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Support
                  </li>
                </ol>
              </nav>}
          </div>
        </div>
      </section>
      <section className="pb-90">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 m-auto">
              <div className="create-item-wrapper plicy_sec">

                <form onSubmit={submitRequest}>
                  <div className="row" >

                    <div className="col-lg-6" >
                      <div className="form-group field-box mb-3 mb-md-4" >
                        <label className="form-label">Enter Name <small className="text-danger">*</small></label>
                        <input type="text" name="name" required value={inputData?.name} onChange={(e) => handleInputChange(e)} />
                      </div>
                    </div>

                    <div className="col-lg-6" >
                      <div className="form-group field-box mb-3 mb-md-4" >
                        <label className="form-label">Email Address  <small className="text-danger">*</small></label>
                        <input type="email" name="email" required value={inputData?.email} onChange={(e) => handleInputChange(e)} />
                      </div>
                    </div>
                    <div className="col-lg-12" >
                      <div className="form-group field-box mb-3 mb-md-4" >
                        <label className="form-label">Enter Subject  <small className="text-danger">*</small> </label>
                        <input type="text" name="subject" required value={inputData?.subject} onChange={(e) => handleInputChange(e)} />
                      </div>
                    </div>
                    <div className="col-lg-12" >
                      <div className="form-group field-box mb-3 mb-md-4" >
                        <label className="form-label">Enter Details  <small className="text-danger">*</small></label>
                        <textarea rows="5" name="detail" required value={inputData?.detail} onChange={(e) => handleInputChange(e)}></textarea>
                      </div>
                    </div>
                    <div className="col-lg-12" >
                      <div className="form-group field-box mb-3 mb-md-4" >
                        <label className="form-label">Attachments  <small className="text-danger">*</small></label>
                        <input type="file" id="Attachments" required onChange={handleAttachement} />
                      </div>
                    </div>
                    <div className="col-lg-12  mb-4 mb-md-5" >
                      <p className="mb-0" > <small>Please provide your registered email address and a brief message. A customer support representative will assist you shortly!</small></p>
                    </div>

                    <div className="col-lg-12" >
                      <button className="btn btn-gradient w-100  text-center btn-xl d-block" type="submit"> <span>Submit</span> </button>
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

export default Support;
