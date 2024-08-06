import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import AuthService from "../../../../Api/Api_Services/AuthService";
import moment from "moment";

const AnnouncementList = () => {
  const navigate = useNavigate()
  const location = useLocation();
  const { state } = location
  let URL = window.location.href?.split('?')?.[1];
  const [states, setstates] = useState(URL);
  const [announcementType, setAnnouncementType] = useState();
  const [tradeAnnouncement, setTradeAnnouncement] = useState();
  const [notificationList, setnotificationList] = useState([]);

  useEffect(() => {
    if (state) {
      setAnnouncementType(state?.title);
      setTradeAnnouncement(state);
    }
  }, [state]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    NotificationList()
  }, []);

  const NotificationList = async () => {
    await AuthService.notificationList().then(async result => {
      if (result?.success) {
        if (result?.data?.length > 0) {
          let filteredData = result?.data?.map(item => {
            const { link, title, message, createdAt } = item;
            return { title: title, links: link, description: message, date: createdAt }
          })
          setnotificationList(filteredData?.reverse());
        }


      }
    });
  };

  // ******* List of Announcement **************//
  let Announcement = [
    {
      type: 'New Cryptocurrency Listing',
      title: '$RIK Token is now listed on GapxBit , Bringing Decentralized Financial Empowerment'
    },
    {
      type: 'Refer and Earn',
      title: `Introducing GapxBit' Exclusive "Refer and Earn" Program for Early Users: Earn Crypto While Spreading the Word!`
    },
    {
      type: 'Latest GapxBit News',
      title: "GapxBit Launches its Crypto Trading  Platform, Marking a Milestone in the Cryptocurrency Ecosystem"
    },
  ];
  const [announcementList, setannouncementList] = useState([]);


  // ******* Fetch Data from Trade page state **************//
  window.addEventListener('message', (event) => {
    if (event.origin !== window.location.origin) {
      return;
    }
    const receivedData = event.data;
    const { title, description, links } = receivedData;
    if (title || description || links) {
      setstates({ title, description, links })
    }
  });


  // ******* Filter Annocement of Trade or Usual **************//
  useEffect(() => {
    if (typeof (states) === 'string') {
      let filteredData = Announcement?.filter((item) => {
        if (states?.includes(item?.type?.replace(/[\s']/g, '_'))) {
          setAnnouncementType(item?.type)
        } else {
          setAnnouncementType(states?.replace(/[_#\/]/g, ' '))
        }
        return states?.includes(item?.type?.replace(/[\s']/g, '_'))
      });
      setannouncementList(filteredData)
    } else {
      if (!state) {
        setTradeAnnouncement(states)
        setAnnouncementType(states?.title)
      }

    }
  }, [states]);


  // ******* Redirect To Announcement Details Page **************//
  const nextPage = (data) => {
    const stringWithoutSpaces = data?.replace(/[\s'"]/g, '_');
    navigate(`/announcementlistdetails?${stringWithoutSpaces}`);
  };


  // ******* Content Of Blog **************//
  let blogs = [
    {
      title: 'GapxBit - Your Gateway to the Future of Crypto Trading',
      description: "In a world marked by rapid technological evolution, the financial landscape is undergoing a profound transformati...",
      tag: 'Ecosystem'
    },
    {
      title: 'GapxBit - Redefining the Crypto Exchange Experience',
      description: "Welcome to GapxBit, a cutting-edge cryptocurrency exchange that is set to revolutionize the way traders engage with digital assets.. With a focus on innovation, security, an...",
      tag: 'Blockchain'
    },
    {
      title: 'Latest Crypto News: An Overview of Recent Developments in the Cryptocurrency Space',
      description: "The world of cryptocurrencies is constantly evolving, and staying up to date with the latest news and developments is essential for crypto enthusiasts and investors alike. In thi...",
      tag: 'P2P'
    },
    {
      title: "Embark on Your Crypto Journey with GapxBit Here's How to Get Started!",
      description: "Are you ready to step into the fascinating world of cryptocurrency trading? GapxBit is your gateway to this exciting universe, offering you not jus...",
      tag: 'Launchpad'
    },
    {
      title: "Unveiling Web 3.0: Exploring its Transformative Use Cases",
      description: "The digital landscape is in a constant state of evolution, and the emergence of Web 3.0 marks a monumental shift in the way we interact with the online world. Web 3.0...",
      tag: 'Community'
    },

  ];

  const BlogPage = (data) => {
    const stringWithoutSpaces = data?.replace(/[\s']/g, '_');
    navigate(`/blogdetails?${stringWithoutSpaces}`);
  };
  return (
    <>
      <section className="inner-page-banner pb-0"></section>
      <div className="hero-banner-style top-section-gap ">
        <section className=" faq_sec ">
          <div className="container">
            <div className="row  justify-content-center">
              <div className="col-lg-8 col-md-12">
                <div className="section-title ">
                  <h2 className=" text-center">
                    Announcements
                  </h2>
                  <nav aria-label="breadcrumb" className="mb-3 mt-7 md-md-5 ">
                    <ol className="breadcrumb  faq_breadcrumb mt-0 pb-3">
                      <li className="breadcrumb-item">
                        <Link to="/announcements">Announcement</Link>
                      </li>
                      <li className="breadcrumb-item active text-warning  cursor-pointer" aria-current="page">
                        {announcementType}
                      </li>

                    </ol>
                    <hr />
                  </nav>
                </div>

                <div className="sr_results" >
                  <div className="sr_results_cat" >
                    <h5>
                      {announcementType}
                    </h5>
                    {console.log(announcementList)}
                    {console.log(tradeAnnouncement)}
                    {announcementList?.length > 0 ? announcementList?.map((item, index) => {
                      return (
                        <div key={index} className="sr_results_row" onClick={() => nextPage(item?.title)}>
                          <a href="#/" className="sr_content" >
                            <h6 className="mb-1" >{item?.title}  </h6>
                            <p> 2023-08-24 14:30 </p>
                          </a>
                        </div>
                      )
                    }) : tradeAnnouncement ? <>
                      {tradeAnnouncement?.description?.length > 0 &&
                        tradeAnnouncement?.description?.map((item) => {
                          return (
                            <>
                              <h6 >{item?.description}</h6>
                              <br />
                            </>
                          )
                        })

                      }

                      <div className="mt-3 d-flex" >
                        {tradeAnnouncement?.links?.length > 0 && tradeAnnouncement?.links?.map((item, index) => {
                          return (
                            <h4 key={index}> <a href={`http://${item?.Link}`} target="_blank" rel="noreferrer" className="sr_content mt-3" >
                              {item?.Title}
                            </a></h4>
                          )
                        })}
                      </div>
                    </>
                      : <p className="text-center no-data h-100 mb-0" >
                        <img src="/images/no-data.png" className='img-fluid mb-2' alt="no data" width="52" />
                        No announcement found
                      </p>}
                  </div>
                </div>

              </div>
              <div className="col-xl-4 col-lg-4 " >
                <aside className="sidebar">
                  <div className="  widget-tag ">
                  </div>

                  <div className="single-widget recent-post mt-17 ">
                    <h3 className="title">Latest news on GapxBit</h3>
                    <div className="inner">
                      <ul>
                        {notificationList?.map((item, index) => {
                          return (
                            <li key={index}><a className="d-block" href="#/" onClick={() => { setTradeAnnouncement(item); setAnnouncementType(item?.title); setannouncementList([]); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>{item?.title}</a><span
                              className="cate small">{moment(item?.date).format("YYYY-MM-DD  HH:MM")}</span>
                            </li>
                          )
                        })}
                        {Announcement?.map((item, index) => {
                          return (
                            <li key={index}><a className="d-block" href="#/" onClick={() => nextPage(item?.title)}>{item?.title}</a><span
                              className="cate small">2023-06-27 14:30</span>
                            </li>
                          )
                        })}

                      </ul>
                    </div>
                  </div>
                  <div className="single-widget recent-post mt-5 ">
                    <h3 className="title"> Blogs</h3>
                    <div className="inner">
                      <ul className="list_with_img"  >
                        {blogs?.map((item, index) => {
                          return (
                            <li key={index} className="d-flex mt-3 justify-content-between align-items-start" onClick={() => { BlogPage(item?.title) }} >
                              <div>
                                <a className="d-block mt-0" href="#/">{item?.title} </a>
                                <span className="cate small">Development</span>
                              </div>
                              <img src="/images/authors/1.jpg" alt="" className="img-fluid" width="70" />
                            </li>
                          )
                        })}

                      </ul>
                    </div>
                  </div>
                </aside>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AnnouncementList;
