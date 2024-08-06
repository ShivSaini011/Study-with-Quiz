import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import moment from "moment";
import AuthService from "../../../../Api/Api_Services/AuthService";

const AnnouncementListDetails = () => {
  let URL = window.location.href?.split('?')?.[1];
  const navigate = useNavigate()
  const [announcmentType, setannouncmentType] = useState(URL);
  const [announcementDetails, setAnnouncementDetails] = useState();
  const [notificationList, setnotificationList] = useState([]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    // NotificationList()
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

  const nextPage = (data) => {
    const stringWithoutSpaces = data?.replace(/[\s']/g, '_');
    navigate(`/announcementlist?${stringWithoutSpaces}`);
  };

  let AnnouncementList = [
    {
      type: 'New Cryptocurrency Listing',
      title: '$RIK Token is now listed on GapxBit , Bringing Decentralized Financial Empowerment',
      description: <>
        <span>The eagerly awaited moment in the cryptocurrency space is upon us as GapxBit announces the imminent arrival of the $RIK token to its esteemed exchange. This significant development is set to open new avenues for investors, traders, and enthusiasts seeking to engage with the groundbreaking capabilities of RIKEZA's (RIK) decentralized blockchain protocol.<br />
          The RIKEZA (RIK) token introduces a transformative peer-to-peer (P2P) open-source blockchain protocol that revolutionizes transaction processing. With its innovative approach, RIKEZA enables instant and nearly zero-cost transaction processing across the globe, amplifying financial accessibility and empowering users with a seamless, efficient experience.<br />
          At the heart of this innovation is the Rikeza Chain, a robust solution that harnesses the power of programmability and interoperability. This advancement is poised to elevate the blockchain landscape, promoting enhanced functionalities while maintaining the core principles of decentralization and security.
          Rikeza Chain operates on a unique Proof of Authority (PoA) consensus mechanism, ensuring swift block times and reduced transaction fees. Validator candidates, distinguished by their bonding, are entrusted with the responsibility of producing blocks. The robust security features, including double-sign detection and slashing logic, guarantee the integrity, stability, and finality of the chain.<br />
          "The integration of $RIK on GapxBit marks another significant stride in our commitment to provide users with access to innovative and promising blockchain projects. We look forward to the potential $RIK holds in enhancing the cryptocurrency ecosystem."</span> <br />
        <strong className="mt-2 white"> To learn more about this transformative project, you can visit:</strong>
        <ul className="mt-2">
          <li><strong className="white">Website: </strong><a href=" https://www.rikeza.io" target="_blank"> www.rikeza.io</a></li>
          <li><strong className="white">Explorer: </strong><a href=" https://rikscan.com" target="_blank"> www.rikscan.com</a></li>
          <li><strong className="white">Twitter: </strong><a href=" https://www.twitter.com/rikezaofficial" target="_blank"> www.twitter.com/rikezaofficial</a></li>
          <li><strong className="white">Instagram: </strong><a href=" https://www.instagram.com/rikezablockchain" target="_blank"> www.instagram.com/rikezablockchain</a></li>
          <li><strong className="white">Facebook: </strong><a href=" https://www.facebook.com/rikezaBlockchain" target="_blank"> www.facebook.com/rikezaBlockchain </a></li>
        </ul>
        As GapxBit prepares to welcome the $RIK token onto its exchange, cryptocurrency enthusiasts and investors can anticipate a new era of financial empowerment and engagement. Stay tuned for the official launch date and further updates on this exciting collaboration.
        <br />
        <strong className="white">For more information write to us at support@GapxBitglobal.io </strong>

      </>
    },

    {
      type: 'Refer and Earn',
      title: `Introducing GapxBit' Exclusive "Refer and Earn" Program for Early Users: Earn Crypto While Spreading the Word!`,
      description: <>
        <span>GapxBitglobal.io is making waves in the world of cryptocurrency and taxation, and now they're offering an exciting opportunity for early adopters to earn rewards while introducing their friends to the platform. With a limited-time offer for the first 50,000 sign-ups, the Refer and Earn program promises to be a game-changer in the crypto space.</span> <br />
        <ul className="mt-2">
          <li><strong className="white">Welcome Bonus: </strong> Upon signing up at <Link to="#">GapxBit.IO</Link> , users receive a 20 GapxBit (GapxBit Tokens) welcome bonus to start their crypto journey.</li>
          <li><strong className="white">Invite Friends: </strong>  Users can invite friends to join the GapxBit community using their unique referral link.</li>
          <li><strong className="white">Earn Rewards: </strong> When a referred friend signs up, the participant receives 10 GapxBit, and the friend receives a generous 20 GapxBit welcome bonus.</li>
          <li><strong className="white">Limited Opportunity:  </strong> The Refer and Earn program is available for the first 50,000 sign-ups, urging participants to act quickly.</li>
          <li><strong className="white">Growing Community:  </strong> The Refer and Earn program fosters community growth by encouraging users to share their expertise and rewards.</li>
          <li><strong className="white">Accessible and Rewarding:  </strong> GapxBitglobal.io continues to simplify crypto trading and offers a mutually beneficial way to earn rewards through crypto referral and affiliate program.
          </li>
          <li><strong className="white">Visit GapxBitglobal.IO:  </strong> To take advantage of this opportunity, visit <Link to="#">GapxBitglobal.IO</Link>, sign up, and embark on a rewarding journey of crypto trading and earnings.
          </li>

        </ul>
        The Refer and Earn program isn't just about reaping rewards. It's a testament to the power of community and knowledge-sharing in the crypto world. By introducing friends to GapxBit, users contribute to the growth of a dynamic community that thrives on collaboration and mutual benefit.
        <br />
        <div className="group-btn mt-6">
          <Link to="/Earn" className="btn btn-gradient">
            <span>Join now</span>
          </Link>
        </div>

      </>
    },


    {
      type: 'Latest GapxBit News',
      title: `GapxBit Launches its Crypto Trading  Platform, Marking a Milestone in the Cryptocurrency Ecosystem`,
      description: <>
        <p>- In a groundbreaking move that's set to redefine the landscape of the cryptocurrency world, GapxBit has officially launched its live platform. With this launch, GapxBit cements its position as a pioneering global blockchain ecosystem and cryptocurrency infrastructure provider. <br />
          The live platform encompasses an array of financial products, including the world's largest digital-asset exchange, thereby offering an unmatched experience for users seeking to navigate the dynamic world of cryptocurrencies. This momentous launch reflects GapxBit' unwavering commitment to accelerating cryptocurrency adoption and empowering financial freedom. <br />
          "Today marks a significant milestone in our journey to shape the future of cryptocurrency."We're excited to provide a comprehensive suite of financial products that will cater to the diverse needs of our users across the globe." <br />
          The  platform launch comes as a result of extensive development efforts and a deep understanding of the evolving demands within the cryptocurrency ecosystem. Users can now access a range of cutting-edge features, seamless user interfaces, and innovative tools designed to enhance their cryptocurrency experience.</p> <br />
        <strong className="white">Key features of the live platform include:</strong>
        <ul className="mt-2">
          <li><strong className="white">The World's Largest Digital-Asset Exchange:  </strong> A robust and secure exchange platform enabling users to trade a wide range of digital assets with confidence.</li>
          <li><strong className="white">Comprehensive Financial Products:  </strong>  A suite of financial tools and services designed to facilitate secure and efficient management of digital assets.</li>
          <li><strong className="white">User-Centric Support:  </strong>An exceptional customer support team proficient in over 20 languages, ensuring users receive round-the-clock assistance across multiple channels.</li>

        </ul>
        <p className="mt-2"> As the world increasingly embraces blockchain technology and cryptocurrency, GapxBit stands at the forefront of driving this transformative revolution. The live platform launch represents a significant step towards realizing GapxBit' mission to amplify cryptocurrency adoption and usher in a new era of financial sovereignty.</p>
        <br />
        <p className="mt-2">To explore GapxBit' platform and experience the future of cryptocurrency firsthand, <Link to="#" >www.GapxBitglobal.io</Link> </p><br />
        <strong className="mt-2 white">About GapxBit:</strong>
        GapxBit is a leading global blockchain ecosystem and cryptocurrency infrastructure provider. With a comprehensive suite of financial products, including the world's largest digital-asset exchange, GapxBit is dedicated to accelerating cryptocurrency adoption and empowering users with financial freedom. Through innovation and a customer-centric approach, GapxBit is shaping the future of the cryptocurrency landscape.
        <br />
        <strong className="white">For more details write to us <a href=" mailto:support@GapxBitglobal.io" target="_blank">support@GapxBitglobal.io</a></strong>

      </>
    }
  ];

  const UpdateAnnouncementDetails = (item) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setannouncmentType(item?.title?.replace(/[\s'"]/g, '_'))
    navigate(`/announcementlistdetails?${item?.title?.replace(/[\s'"]/g, '_')}`);
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
    const stringWithoutSpaces = data.replace(/[\s']/g, '_');
    navigate(`/blogdetails?${stringWithoutSpaces}`);
  };

  useEffect(() => {
    let filteredData = AnnouncementList?.filter((item) => {
      return announcmentType?.includes(item?.title?.replace(/[\s'"]/g, '_'))
    })
    setAnnouncementDetails(filteredData[0])
  }, [announcmentType]);

  const AnnouncmentPage = (data) => {
    navigate(`/announcementlist`, { state: data });
  }

  return (
    <>

      <section className="inner-page-banner pb-0"></section>
      <div className="hero-banner-style top-section-gap ">
        <section className=" faq_sec ">
          <div className="container">
            <div className="row  ">
              <div className="col-12" >
                <div className="section-title ">
                  <h2 className=" text-center">
                    Announcements
                  </h2>
                </div>
              </div>
              <div className="col-lg-8 col-md-12">
                <div className="section-title ">

                  <nav aria-label="breadcrumb" className="mb-3 mt-4 md-md-5 ">
                    <ol className="breadcrumb  faq_breadcrumb mt-0 pb-3">
                      <li className="breadcrumb-item">
                        <Link to="/announcements">Announcement</Link>
                      </li>
                      <li className="breadcrumb-item">
                        <a href="#/" onClick={() => nextPage(announcementDetails?.type)}>{announcementDetails?.type}</a>
                      </li>
                      <li className="breadcrumb-item active text-warning  cursor-pointer" aria-current="page">
                        {announcementDetails?.title?.length > 45 ? `${announcementDetails?.title?.slice(0, 45)}...` : announcementDetails?.title}
                      </li>

                    </ol>
                    <hr />
                  </nav>
                </div>
                <div className="sr_results" >
                  <div className="sr_results_cat mb-7" >
                    <h5>
                      {announcementDetails?.title}
                      <small> 2023-06-27 14:30 </small>
                    </h5>
                    {announcementDetails?.description}
                  </div>
                </div>
              </div>

              <div className="col-xl-4 col-lg-4 " >
                <aside className="sidebar">
                  <div className="  widget-tag ">
                  </div>
                  <div className="single-widget recent-post mt-5 ">
                    <h3 className="title">Latest news on GapxBit</h3>
                    <div className="inner">
                      <ul>
                        {notificationList?.map((item, index) => {
                          return (
                            <li key={index}><a className="d-block" href="#/" onClick={() => AnnouncmentPage(item)}>{item?.title}</a><span
                              className="cate small">{moment(item?.date).format("YYYY-MM-DD  HH:MM")}</span>
                            </li>
                          )
                        })}
                        {AnnouncementList?.map((item, index) => {
                          return (
                            <li key={index}><a className="d-block" href="#/" onClick={() => UpdateAnnouncementDetails(item)}>{item?.title}</a><span
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

export default AnnouncementListDetails;
