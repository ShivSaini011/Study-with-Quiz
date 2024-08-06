import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Announcements = () => {
  const navigate = useNavigate()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const nextPage = (data) => {
    const stringWithoutSpaces = data?.replace(/[\s']/g, '_');
    navigate(`/announcementlist?${stringWithoutSpaces}`);
  };
  return (
    <>
      <section className="inner-page-banner pb-0"></section>
      <div className="hero-banner-style top-section-gap ">
        <section className=" faq_sec ">
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-lg-8 col-md-12">
                <div className="section-title ">
                  <h2 className=" text-center">
                  Announcements
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <section className="faq_cards">
        <div className="container">
          <div className="grid">
            <a className="card" href="#/" onClick={()=>nextPage('New Cryptocurrency Listing')}  >
              <div className="doc_icon"><img src="/images/Announcements1.png" className="img-fluid" alt="" /></div>
              <div>
                <h5>New Cryptocurrency Listing</h5>
                <p>Check out the new Coin listing</p>
              </div>
            </a>
            <a className="card"  href="#/"  onClick={()=>nextPage('Latest GapxBit News')}  >
              <div className="doc_icon"><img src="/images/Announcements2.png" className="img-fluid" alt="" /></div>
              <div>
                <h5>Latest GapxBit News</h5>
                <p> Latest update on what’s new in GapxBit </p>
              </div>
            </a>
            <a className="card" href="#/" onClick={()=>nextPage('Promotional Activities')}  >
              <div className="doc_icon"><img src="/images/Announcements3.png" className="img-fluid" alt="" /></div>
              <div>
                <h5> Promotional Activities </h5>
                <p> Find promotions that interest you </p>
              </div>
            </a>
            <a className="card" href="#/" onClick={()=>nextPage('Refer and Earn')}  >
              <div className="doc_icon"><img src="/images/Announcements4.png" className="img-fluid" alt="" /></div>
              <div>
                <h5>Refer and Earn</h5>
                <p> GapxBit Refer and Earn program  </p>
              </div>
            </a>
            <a className="card" href="#/" onClick={()=>nextPage('Crypto Airdrop')}>
              <div className="doc_icon"><img src="/images/Announcements5.png" className="img-fluid" alt="" /></div>
              <div>
                <h5>Crypto Airdrop </h5>
                <p> Check the latest Airdrops that GapxBit supports </p>
              </div>
            </a>
            <a className="card" href="#/" onClick={()=>nextPage('Wallet Maintenance updates')}  >
              <div className="doc_icon"><img src="/images/Announcements6.png" className="img-fluid" alt="" /></div>
              <div>
                <h5>Wallet Maintenance updates</h5>
                <p> Stay updated on wallet maintenance of various networks </p>
              </div>
            </a>
            <a className="card" href="#/" onClick={()=>nextPage('API Updates')} >
              <div className="doc_icon"><img src="/images/Announcements7.png" className="img-fluid" alt="" /></div>
              <div>
                <h5> API Updates </h5>
                <p> Latest news on API updates  </p>
              </div>
            </a>
            <a className="card" href="#/" onClick={()=>nextPage('Delisting')} >
              <div className="doc_icon"><img src="/images/Announcements8.png" className="img-fluid" alt="" /></div>
              <div>
                <h5> Delisting  </h5>
                <p> Get update on coins, tokens or trading pairs to be removed  </p>
              </div>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Announcements;
