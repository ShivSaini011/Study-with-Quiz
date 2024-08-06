import React, { useEffect } from "react";

const GapxBitVentures = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <>
      <div className="about_page ready_page ">
        <div className="container-sm">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <section className="about_top">
                <div className="row g-md-5 align-items-center">
                  <div className="col-lg-7">
                    <h1>
                      <strong>
                        {" "}
                        Ready, Get Set, <br /> Launch{" "}
                      </strong>

                      <small className="d-block mt-3">
                        {" "}
                        Enabling Endless Decentralized Innovation Beyond Limits{" "}
                      </small>
                    </h1>
                  </div>
                  <div className="col-lg-5 mt-5">
                    <img
                      alt=""
                      src="/images/rocket.png"
                      className="img-fluid"
                    />
                  </div>
                </div>
              </section>

              <section className="ready_bout">
                <h2 className="mb-4 mb-md-3">About us</h2>

                <div className="">
                  <div className="wallet-block p-md-5 ">
                    <h3 className="mb-3 d-block">GapxBit Ventures </h3>
                    <p>
                    GapxBit Ventures is a comprehensive fund under GapxBit Group,
                      committed to empowering innovations of the cryptocurrency
                      field, via strategic investment, M&A, FOF, and project
                      incubation. GapxBit Ventures upholds the concept of
                      "discovering opportunities and growing together" by fully
                      sharing fund resources and providing solid support for
                      projects. The team spans across US, Singapore, HK, and
                      other regions of the world, with $100m+ AUM and 300+
                      portfolio investments.
                    </p>
                    <hr className=" my-4" />
                    <h3 className="mb-3">GapxBit Labs </h3>
                    <p>
                    GapxBit Labs is an accelerator under GapxBit Group with the
                      purpose to "create a larger and more virtuous circle for
                      global innovators". In working with top tier partners in
                      the industry, GapxBit Labs cooperates not only provides
                      startup funds for outstanding entrepreneurs, and also
                      offers one-stop professional services from project
                      positioning to business cooperation, from economic
                      modeling to financing counseling, from product marketing
                      to project launch
                    </p>
                  </div>
                </div>
              </section>

              <section className="ven_portfolio">
                <h2 className="mb-4 mb-md-3">Portfolio</h2>

                <div className=" mb-3 row align-items-end justify-content-between">
                  <div className="col-md-4  col-lg-4">
                    <div className="scroll-subtabs">
                      <a href="#/" className="subtabs_link active">
                        All
                      </a>
                      <a href="#/" className="subtabs_link false">
                        Innovation
                      </a>
                      <a href="#/" className="subtabs_link false">
                        Main
                      </a>
                      <a href="#/" className="subtabs_link false">
                        Metaverse
                      </a>
                    </div>
                  </div>
                  <div className="col-md-4 col-lg-3">
                    <div className="searchBar custom-tabs">
                      <i className="ri-search-2-line"></i>
                      <input
                        type="search"
                        className="custom_search"
                        placeholder="Search Crypto"
                      />
                    </div>
                  </div>
                </div>

                <div className="">
                  <div className="wallet-block p-md-5 ">
                    <h3 className="d-block text-center my-5 py-5">
                      Exciting Ventures from GapxBit Coming Soon!
                    </h3>
                  </div>
                </div>
              </section>

              <section className="ven_contact">
                <div className="row g-md-5 align-items-center">
                  <div className="col-lg-7">
                    <h2> Contact</h2>
                    <h5 className="d-block mt-2">
                      Contact us, let's get in touch
                    </h5>

                    <a
                      className="d-block my-5 py-3 h3 text-warning "
                      href="mailto:investment@GapxBitglobal.com"
                    >
                      {" "}
                      <b> investment@GapxBitglobal.com</b>{" "}
                    </a>
                    {/* <button className='btn btn-gradient' > Copy </button> */}
                  </div>
                  <div className="col-lg-5 mt-5 d-none d-md-block">
                    <img
                      alt=""
                      src="/images/ventures_contact.svg"
                      className="img-fluid"
                    />
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GapxBitVentures;
