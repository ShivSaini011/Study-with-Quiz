import React, { useEffect } from 'react'

const DownloadGapxBit = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  return (
     <>
     <section className="dnwl_sec">
      <div className="container">
        <div className="not-found-inner">
          <div className="row px-3 px-md-5 align-items-center">
            <div className="col-md-5  "> <img src="/images/app_img.png" alt="not found page" className="img-fluid" /> </div>
            {/* <!-- End .col --> */}
            <div className="col-md-7">
              <div className=" ms-md-5 not-dowload-content">
                <h2 className=" ">GapxBit
                  Trade and Store
                  Your Digital Assets in
                  One Place
                </h2>


                <div className="down_tab">
                  <div>
                    <a href="#"> <div className='mb-1' ><small>Download for Android</small></div> <img src="/images/play_store.png" className="img-fluid" /></a>
                    <a href="#"><div className='mb-1' ><small>Download for IOS</small></div>  <img src="/images/app_store.png" className="img-fluid" /></a>
                    </div>
                    <div className=" ms-3">
                      <img src="/images/qr_code.png" />
                      <div className='dd_txt' >
                      <small className='d-block' >Scan to Download</small>
                      IOS & Android
                      </div>
                    </div>
              </div>




               </div>
            </div>
            {/* <!-- End .col --> */}
          </div>
        </div>
        {/* <!-- End .not-found-inner --> */}
      </div>
    </section>
     </>
  )
}

export default DownloadGapxBit
