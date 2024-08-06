import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthService from "../../../Api/Api_Services/AuthService";
import moment from "moment";

const BlogList = () => {
  const [activeTag, setactiveTag] = useState('All');

  let blogContent = [
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
  const [blogs, setblogs] = useState(blogContent);

  let tags = ['Ecosystem', 'Community', 'Launchpad', 'Markets', 'Tech', 'Nft', 'Defi', 'Blockchain', 'P2P'];

  const [notificationList, setnotificationList] = useState([]);

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
          setnotificationList(filteredData);
        }


      }
    });
  };
  const navigate = useNavigate();

  // ***** Redirect To Blog Details Page *****//
  const nextPage = (data) => {
    const stringWithoutSpaces = data?.replace(/[\s']/g, '_');
    navigate(`/blogdetails?${stringWithoutSpaces}`);
  };


  // ***** Filter Blog By Tag *****//
  const filterTag = (data)=>{
    setactiveTag(data)
    let filtereddata=blogContent?.filter((item)=>{
      return item?.tag === data
    })
    setblogs(filtereddata)
  };

  // ***** Announcement Page Data and Redirection *****//
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
  const announcementPage = (data) => {
    const stringWithoutSpaces = data?.replace(/[\s'"]/g, '_');
    navigate(`/announcementlistdetails?${stringWithoutSpaces}`);
  };
  const AnnouncmentPage = (data) => {
    navigate(`/announcementlist`, { state: data });
  }

  return (
    <>
      <section className="inner-page-banner bg-2 bg-image">
        <div className="container">
          <div className="inner text-center">
            <h1 className="title">GapxBit Blog</h1>
            <nav className="mt-4">
              <ol className="breadcrumb justify-content-center">
                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                <li className="breadcrumb-item active" aria-current="page">Blog</li>
              </ol>
            </nav>
          </div>
        </div>
      </section>

      <section className="pt-120 pb-90 blog_list">
        <div className="container">
          <div className="row" >

            <div className="col-xl-8 col-lg-8 " >
              <div className="row">
                {blogs?.length>0 ? blogs?.map((item,index) => {
                  return (
                      <div key={index} className="col-xl-6 col-lg-12 mb-5" onClick={() => { nextPage(item?.title) }}>
                        <div className="single-blog h-100">
                          <a href="#/" className="thumb">
                            <img src="/images/blog/1.jpg" alt="nft blog" />
                          </a>
                          <div className="content">
                            <ul className="meta">
                              <li>23 August</li>
                              <li><a href="#/">{item?.tag}</a></li>
                              <li className="date"><i className="ri-time-line"></i>4 Hour Ago</li>
                            </ul>
                            <h4 className="title"><a href="#/">{item?.title}</a>
                              <small>
                                {item?.description}
                              </small>
                            </h4>
                          </div>
                        </div>
                      </div> 
                  )
                }): <p className="text-center no-data h-100 mb-0" >
                <img src="/images/no-data.png" className='img-fluid mb-2' alt="no data" width="52" />
                No blog found
              </p>  }
              </div>
            </div>

            <div className="col-xl-4 col-lg-4 " >
              <aside className="sidebar">
                <div className="  widget-tag ">
                  <h3 className="title">Discover more of what matters to you</h3>
                  <div className="inner mt-4">
                    <div className="filter-group">
                      {tags?.map((item,index) => {
                        return (
                          <a key={index} href="#" className="filter_tag" onClick={() => filterTag(item)}><span className={activeTag === item ? "active_tag":''}>{item}</span></a>
                        )
                      })}
                    </div>
                  </div>
                </div>

                <div className="single-widget recent-post mt-5 ">
                  <h3 className="title">Announcements</h3>
                  <div className="inner">
                    <ul>
                    {notificationList?.map((item, index) => {
                          return (
                            <li key={index}><a className="d-block" href="#/" onClick={() => AnnouncmentPage(item)}>{item?.title}</a><span
                              className="cate small">{moment(item?.date).format("YYYY-MM-DD  HH:MM")}</span>
                            </li>
                          )
                        })}
                      {Announcement?.map((item,index)=>{
                        return(
                          <li key={index}><a className="d-block" href="#/" onClick={()=>announcementPage(item?.title)}>{item?.title}</a><span
                          className="cate small">2023-06-27 14:30</span>
                        </li>
                        )
                      })}
                    
                    </ul>
                  </div>
                </div>

                <div className="single-widget recent-post mt-5 ">
                  <h3 className="title">Trending on GapxBit</h3>
                  <div className="inner">
                    <ul className="list_with_img"  >
                      {blogs?.map((item,index) => {
                        return (
                          <li key={index} className="d-flex mt-3 justify-content-between align-items-start" onClick={() => { nextPage(item?.title) }} >
                            <div>
                              <a className="d-block mt-0" href="#">{item?.title} </a>
                              <span className="cate small">Development</span>
                            </div>
                            <img src="/images/authors/1.jpg" className="img-fluid" width="70" />
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
    </>
  );
};

export default BlogList;
