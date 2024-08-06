import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthService from "../../../Api/Api_Services/AuthService";
import moment from "moment";

const BlogDetails = () => {
  let URL = window.location.href?.split('?')?.[1];
  const [routedBlog, setRoutedBlog] = useState(URL);

  let blogContent = [
    {
      title: 'GapxBit - Your Gateway to the Future of Crypto Trading',
      description: <><strong className="white">In a world marked by rapid technological evolution, the financial landscape is undergoing a profound transformation. At the forefront of this change stands GapxBit, a premier crypto trading platform that embraces the revolutionary potential of cryptocurrencies. With an unwavering belief in the transformative power of digital assets, GapxBit welcomes traders of all levels, offering an inclusive and accessible space for navigating the dynamic world of crypto trading.</strong><br />
        <ul><br /><li> <strong className="mb-3 white">Empowering Financial Evolution:</strong><br />
          <small> GapxBit isn't just a trading platform; it's a catalyst for change. Cryptocurrencies have emerged as a force to reckon with, challenging traditional financial norms and reshaping the way we think about money, transactions, and investments. GapxBit recognizes the incredible potential of this paradigm shift and seeks to empower individuals by providing them with the tools and resources needed to navigate the complex landscape of digital assets.</small></li><br />
          <li> <strong className="white">Unveiling GapxBit: A Gateway to the Future:</strong><br />
            <small> As the digital era unfolds, the role of cryptocurrencies has expanded beyond a niche concept, transforming into a robust ecosystem that holds the potential to revolutionize global finance. GapxBit is here to welcome you into this exciting realm, serving as a premier crypto trading platform designed to simplify and enhance your trading journey.</small></li><br />
          <li> <strong className="white">Our Vision: Inclusivity, Accessibility, and Empowerment:</strong><br />
            <small>  At GapxBit, we're guided by a vision that centers on inclusivity, accessibility, and empowerment. We understand that the world of cryptocurrencies can be daunting for newcomers, and that's precisely why we've curated a platform that caters to both seasoned traders and those taking their first steps in this exciting terrain.</small></li><br />

          <li><strong className="white">Inclusivity in Action</strong>:<br />
            <small>  At the core of GapxBit' philosophy lies inclusivity. We understand that the world of cryptocurrencies can be daunting, especially for those new to the scene. Our platform is designed to be a welcoming space for everyone, from seasoned traders looking to diversify their portfolios to newcomers eager to explore the exciting world of crypto. With a user-centric approach, GapxBit ensures that both experienced traders and beginners can thrive.</small></li><br /></ul>
        <strong className="white">Benefits of Trading on GapxBit</strong>:<br />
        <ul><li>
          <strong className="white">Robust Security Measures: </strong><small>Your security is our utmost priority. GapxBit employs state-of-the-art security measures, including encryption and two-factor authentication, to ensure that your assets and personal information are protected at all times.</small><br /></li>
          <li><strong className="white">Intuitive User Experience: </strong> <small>Navigating the world of crypto trading shouldn't be complicated. GapxBit boasts an intuitive user interface that simplifies the trading process, making it accessible to traders of all levels.</small><br /></li>
          <li><strong className="white">Diverse Cryptocurrency Portfolio: </strong><small> From Bitcoin and Ethereum to a wide array of altcoins, GapxBit provides access to a diverse range of cryptocurrencies. This diversity empowers you to explore and invest in a variety of digital assets.</small><br /></li>
          <li> <strong className="white">Real-Time Insights: </strong> <small> Stay ahead of market trends with real-time data and insights. GapxBit equips you with the information you need to make informed trading decisions in a rapidly changing market.</small><br /></li>
          <li> <strong className="white">Effortless Transactions: </strong><small>GapxBit streamlines transactions, ensuring swift deposits, trades, and withdrawals. With seamless integration of various payment methods, you can execute trades efficiently, even during peak trading periods.</small> <br /></li>
          <li><strong className="white">Tax Management Made Simple: </strong><small> Cryptocurrency taxation can be intricate, but GapxBit aims to simplify this aspect. Our platform helps you track and calculate your tax obligations, minimizing the complexities associated with crypto taxes.</small><br /></li></ul>
        <strong className="white">Join the GapxBit Community:</strong>:<br />
        <ul><li><small>GapxBit isn't just a platform; it's a community of like-minded individuals who believe in the future of cryptocurrencies. By joining GapxBit, you become part of a dynamic ecosystem where inclusivity, accessibility, and empowerment converge. Whether you're an experienced trader or a newcomer taking your first steps, GapxBit is your premier gateway to the world of crypto trading.<br />
          Welcome to GapxBit, where the power of cryptocurrencies meets the ease of trading. Join us in embracing the future of finance and exploring the possibilities that digital assets hold.
        </small></li></ul>
      </>,
      tag: 'Ecosystem'
    },


    {
      title: 'GapxBit - Redefining the Crypto Exchange Experience',
      description: <><ul><li>
        <strong className="white">Introduction: </strong><br /><small>Welcome to GapxBit, a cutting-edge cryptocurrency exchange that is set to revolutionize the way traders engage with digital assets. With a focus on innovation, security, and comprehensive support, GapxBit offers a seamless and rewarding trading experience. In this article, we will explore the key features and advantages that make GapxBit the go-to platform for crypto enthusiasts and traders.</small></li><br />
        <li><strong className="white">Innovative Trading Features: </strong> <br /><small>GapxBit is built with advanced technology and offers a range of innovative trading features to enhance your trading experience. From real-time market data and customizable trading charts to advanced order types and trading indicators, our platform provides the tools you need to make informed decisions and execute trades with precision.</small>
        </li><br />
        <li><strong className="white">Secure and Reliable:</strong><br /><small>We prioritize the security and integrity of your funds. GapxBit follows industry-leading security practices, including robust encryption, two-factor authentication, and cold storage solutions to safeguard your assets. Our platform undergoes regular security audits and penetration testing to ensure that your funds are protected from any potential threats.</small>
        </li><br />
        <li> <strong className="white">Extensive Crypto Asset Selection: </strong> <br /> <small>GapxBit offers a diverse selection of cryptocurrencies, including popular digital assets and emerging tokens. Whether you're interested in Bitcoin, Ethereum, or other altcoins, you'll find a wide range of options to diversify your portfolio and explore new investment opportunities.</small></li><br />
        <li> <strong className="white">Easy Fiat-to-Crypto Transactions:</strong><br /> <small>We understand the importance of seamless fiat-to-crypto transactions. GapxBit facilitates easy and secure conversions between fiat currencies and cryptocurrencies. With our intuitive interface, you can deposit or withdraw funds in your preferred currency with just a few clicks, making it convenient for both novice and experienced traders.</small> </li><br />
        <li><strong className="white">Educational Resources and Crypto Insights:</strong><br /><small>GapxBit believes in empowering traders with knowledge. Our platform provides educational resources, including tutorials, articles, and market insights, to help you stay informed about the latest trends and developments in the crypto industry. Expand your understanding of blockchain technology, investment strategies, and market analysis to make well-informed trading decisions.</small></li><br />
        <li><strong className="white">Dedicated Customer Support:</strong> <br /><small>At GapxBit, we prioritize exceptional customer support. Our dedicated team is available to assist you with any inquiries or issues you may encounter while using our platform. Whether you have questions about trading features, account security, or general inquiries, our support team is ready to provide prompt and personalized assistance.</small></li><br />
        <li><strong className="white">Rewards and Referral Program: </strong><br /><small>We believe in rewarding our loyal users. GapxBit offers a referral program where you can earn rewards by inviting friends and acquaintances to join our platform. Enjoy benefits such as reduced trading fees, exclusive promotions, or bonus tokens as a token of our appreciation for your support. Join us in building a vibrant community and sharing in the success of GapxBit.</small>
        </li><br />
        <li><strong className="white">Innovation Launchpads: </strong><br /> <small>GapxBit is dedicated to fostering innovation and supporting groundbreaking blockchain projects. Our innovation launchpads provide a platform for startups and visionary projects to gain exposure, access funding opportunities, and connect with potential investors. Through strategic partnerships and mentorship programs, we actively contribute to the growth and advancement of the crypto ecosystem.</small></li><br />
        <li><strong className="white">Staking Programs: </strong><br /><small>Maximize the potential of your digital assets with GapxBit' staking programs. By participating in staking, you can earn passive income by holding and validating transactions on supported blockchain networks. Our staking programs offer attractive rewards, allowing you to contribute to network security while earning additional tokens as a reward for your participation.
        </small> </li><br />
        <li><strong className="white">Trading Benefits: </strong><br /><small> Experience seamless and efficient trading on GapxBit with our advanced trading features and tools. Enjoy real-time market data, customizable trading charts, multiple order types, and liquidity options that cater to traders of all levels. Benefit from competitive trading fees, fast execution, and access to a wide range of cryptocurrencies, empowering you to take advantage of market opportunities.</small></li><br />
        <li><strong className="white">Advisory and Technology Support: </strong><br /><small> GapxBit goes beyond being an exchange by offering advisory and technology support to projects in the crypto space. We provide consultation services, blockchain integration guidance, and smart contract auditing to help projects succeed. Our experienced team is dedicated to assisting you with project development, technical challenges, and strategic decision-making, enabling your project to thrive in the competitive crypto industry.</small></li><br />
        <li><strong className="white">Conclusion:</strong><br />
          <small> GapxBit is not just another crypto exchange; it is a comprehensive platform designed to elevate your trading experience. With innovative features, robust security measures, extensive asset selection, educational resources, dedicated customer support, and rewarding programs, GapxBit is your gateway to the exciting world of cryptocurrencies. Join us today and discover a new standard in crypto trading.</small>
        </li><br />

      </ul>
      </>,
    },


    {
      title: 'Latest Crypto News: An Overview of Recent Developments in the Cryptocurrency Space',
      description: <><ul><li>
        <strong className="white">Introduction: </strong><br /><small>The world of cryptocurrencies is constantly evolving, and staying up to date with the latest news and developments is essential for crypto enthusiasts and investors alike. In this article, we will explore some of the most significant recent events and trends in the crypto space, shedding light on the growing adoption, regulatory updates, market movements, and technological advancements that are shaping the industry.
        </small></li><br />
        <li><strong className="white">Increasing Institutional Adoption: </strong> <br /><small>One of the prominent trends in the crypto space is the growing institutional adoption of cryptocurrencies. Major financial institutions, including banks, asset management firms, and hedge funds, are recognizing the potential of digital assets and incorporating them into their investment strategies. This institutional involvement brings legitimacy and liquidity to the crypto market, further fueling its growth.</small>
        </li><br />
        <li><strong className="white">Regulatory Developments:</strong><br /><small>Regulatory frameworks surrounding cryptocurrencies continue to evolve globally. Governments and regulatory bodies are working towards establishing clear guidelines to protect investors and combat illicit activities. Recent developments include increased regulatory oversight, proposed legislation, and enhanced Know Your Customer (KYC) and Anti-Money Laundering (AML) measures. These efforts aim to create a safer and more transparent environment for crypto investors and businesses.</small>
        </li><br />
        <li> <strong className="white">Market Volatility and Trends:</strong> <br /> <small>Cryptocurrency markets have always been known for their volatility, and recent months have been no exception. The crypto market experienced significant price fluctuations, with major cryptocurrencies such as Bitcoin and Ethereum reaching new all-time highs and subsequently experiencing corrective phases. Traders and investors closely monitor market trends, technical indicators, and fundamental factors to make informed decisions.
        </small></li><br />
        <li> <strong className="white">Technological Advancements:</strong><br /> <small>The crypto space continues to witness remarkable technological advancements. Blockchain technology, the foundation of cryptocurrencies, is being embraced by various industries beyond finance. The rise of decentralized finance (DeFi) platforms, non-fungible tokens (NFTs), and blockchain-based gaming highlights the potential for blockchain to revolutionize sectors such as lending, art, and entertainment. Scalability solutions, interoperability protocols, and enhanced privacy measures are also at the forefront of technological innovation in the crypto space.</small> </li><br />
        <li><strong className="white">Sustainability and Environmental Concerns:
        </strong><br /><small>As the popularity of cryptocurrencies grows, so does the scrutiny surrounding their environmental impact. The energy consumption associated with cryptocurrency mining, particularly for proof-of-work (PoW) consensus mechanisms, has raised concerns about carbon footprints. This has led to increased interest in alternative consensus mechanisms, such as proof-of-stake (PoS), which is more energy-efficient and environmentally friendly.</small></li><br />
        <li><strong className="white">Conclusion:</strong> <br /><small>The cryptocurrency industry continues to evolve rapidly, with new developments shaping the landscape on a daily basis. From institutional adoption and regulatory updates to market volatility, technological advancements, and sustainability concerns, staying informed about the latest crypto news is crucial for anyone involved in the space. As the industry matures, it is essential for investors, traders, and enthusiasts to remain vigilant, adapt to changes, and make informed decisions based on a thorough understanding of the evolving crypto landscape.
        </small></li><br />

      </ul>
      </>
    },

    {
      title: "Embark on Your Crypto Journey with GapxBit Here's How to Get Started!",
      description: <><ol className="blog_orderd_list">
        <p> Are you ready to step into the fascinating world of cryptocurrency trading? GapxBit is your gateway to this exciting universe, offering you not just a platform, but an entire community of like-minded individuals who share your passion. If you're wondering how to dive in and get started, you're in the right place. Here's a step-by-step guide on how to kick off your crypto journey with GapxBit</p>
        <br />
        <li><strong className="white"> Visit  <Link to="#">GapxBit.IO</Link> and Sign Up for an Account:</strong> <br /><small>The journey begins with a simple visit to our official website: <Link to="#">GapxBit.IO</Link>. There, you'll find a straightforward sign-up process that takes just a few moments to complete. Provide the necessary details, and voilà – you're on your way to becoming a part of the GapxBit community!</small>
        </li><br />
        <li><strong className="white">Receive Your Welcome Bonus of 20 GapxBit:</strong><br /><small>We believe in making you feel right at home from the moment you join us. As a warm welcome, we're excited to offer you a welcome bonus of 20 GapxBit (GapxBit tokens) upon signing up. These tokens are your entry pass to exploring the world of crypto with us.</small>
        </li><br />
        <li> <strong className="white"> Explore the Platform Unveil a World of Possibilities:</strong> <br /> <small>Once you're in, it's time to explore the platform and all the features it has to offer. Navigate through the intuitive interface, discover the tools designed to simplify crypto trading and taxation, and immerse yourself in a world of opportunities waiting to be explored.
        </small></li><br />
        <li> <strong className="white">Invite Your Friends: Multiply Your Earnings:</strong><br /> <small>Sharing the excitement of GapxBit with your friends is not just rewarding; it's a chance to amplify your crypto earnings. Using your unique referral link, invite your friends to join the GapxBit community. When they sign up, you'll receive a fantastic 10 GapxBit, and your friend will be welcomed with a generous 20 GapxBit. It's a win-win scenario that brings you both closer to enhanced crypto prosperity.</small> </li><br />
        <li><strong className="white">Hurry! A Limited-Time Opportunity for the First 50,000:</strong><br /><small>We understand the thrill of seizing opportunities, which is why we're thrilled to bring you a limited-time offer. Our Referral Rewards Program, with its enticing bonuses and rewards, is open for the first 50,000 sign-ups. Act swiftly to secure your spot and make the most of this exclusive opportunity.</small></li><br />
      </ol>
        <li><strong className="white">Your Crypto Journey with GapxBit Begins Now</strong> <br /><small>Getting started with GapxBit is not just about signing up; it's about embarking on a journey of discovery, empowerment, and rewards. Sign up, receive your welcome bonus, explore the platform, invite your friends, and dive into the world of crypto like never before. Remember, this limited-time opportunity is waiting for you to seize it – but only for the first 50,000 sign-ups. Join us on this exhilarating path to enhanced crypto earnings and a vibrant community that shares your enthusiasm. The road to crypto prosperity starts now with GapxBit!
        </small></li><br />
        <li><strong className="white">Closing Thoughts </strong> <br /><small>GapxBit is not only a platform that simplifies the complexities of cryptocurrency and taxation; it's a community that invites you to embark on a journey of crypto exploration, learning, and earning. With the "Refer and Earn" program, you can share the excitement with your friends and be rewarded in GapxBit – tokens that hold the promise of a more prosperous crypto future. Join hands with your friends, dive into the GapxBit community, and let the crypto earnings begin!
        </small></li><br />
        <li><strong className="white">Disclaimer </strong> <br /><small>Please take note that the content provided to you is presented "as is" and is intended solely for general information and educational purposes. No representation or warranty of any kind is associated with this content. It's important to clarify that this content should not be interpreted as financial or investment advice, nor is it designed to endorse the acquisition of specific products or services.<br />
          For more comprehensive insights, we strongly encourage you to review our Terms of Use and Risk Warning documents. These materials offer a deeper understanding of the terms and conditions associated with using GapxBit products and services, as well as the potential risks connected to trading and investing in digital assets.<br />
          To conclude, your interaction with digital assets involves inherent risks. Proceeding with diligence, staying informed, and making informed decisions are critical. While GapxBit provides resources and assistance, remember that the choices and actions you take are pivotal to your investment journey.

        </small></li><br />

      </>
    },


    {
      title: 'Unveiling Web 3.0: Exploring its Transformative Use Cases',
      description: <><strong className="white">The digital landscape is in a constant state of evolution, and the emergence of Web 3.0 marks a monumental shift in the way we interact with the online world. Web 3.0, often referred to as the "decentralized web," is set to redefine how information is accessed, shared, and utilized. In this blog, we'll delve into the concept of Web 3.0 and explore its transformative use cases that are reshaping industries and empowering users like never before.</strong><br />
        <ul><br /><li style={{ listStyle: 'none' }}><strong className="white">Understanding Web 3.0</strong><br />
          <small>Web 3.0 is not a mere iteration of the internet; it's a paradigm shift that aims to restore the power of the web to its users. Unlike its predecessors, which focused primarily on centralization and siloed data ownership, Web 3.0 embraces decentralization, interoperability, and user sovereignty. At its core, Web 3.0 envisions an internet where data is owned by individuals, interactions are peer-to-peer, and trust is established through consensus mechanisms like blockchain technology.
          </small>
        </li></ul>
        <strong className="white">Transformative Use Cases of Web 3.0</strong>:<br />
        <ul><li>
          <strong className="white">Decentralized Finance (DeFi):  </strong><small>Web 3.0 has given rise to DeFi, a decentralized financial ecosystem that eliminates intermediaries like banks and enables users to access financial services directly. Through smart contracts on blockchain platforms like Ethereum, users can lend, borrow, trade, and earn interest with unprecedented transparency and control.</small><br /></li>
          <li><strong className="white">Digital Identity and Privacy:  </strong> <small> Web 3.0 enables users to have full control over their digital identities. Instead of relying on centralized entities to manage personal data, users can use self-sovereign identity solutions built on blockchain to share specific information securely and selectively, enhancing privacy while minimizing the risk of data breaches.</small><br /></li>
          <li><strong className="white">Content Creation and Ownership:  </strong><small>  With Web 3.0, content creators can establish ownership and control over their creations through blockchain-based solutions. Smart contracts facilitate direct transactions between creators and consumers, ensuring fair compensation and transparency in content distribution.</small><br /></li>
          <li> <strong className="white">Supply Chain Transparency:  </strong> <small> Industries can leverage Web 3.0 to enhance supply chain transparency by recording every step of a product's journey on an immutable blockchain. This technology ensures that consumers have access to accurate and verifiable information about the origin, production, and distribution of goods.</small><br /></li>
          <li> <strong className="white">Decentralized Social Networks: </strong><small>Traditional social media platforms often accumulate vast amounts of user data. Web 3.0 offers the potential for decentralized social networks, where users own and control their data, eliminating the dominance of centralized entities and giving users more control over their online interactions.</small> <br /></li>
          <li><strong className="white">Gaming and Virtual Worlds: </strong><small> Web 3.0's decentralized nature has fueled the development of virtual worlds and gaming ecosystems that enable true ownership of in-game assets. Players can buy, sell, and trade digital items on blockchain platforms, ensuring that their efforts are rewarded and recognized beyond a single game.</small><br /></li></ul>
        <strong className="white">Embracing the Future with Web 3.0:</strong>:<br />
        <ul><li><small>
          Web 3.0 isn't just a technological advancement; it's a movement that empowers individuals, fosters transparency, and reshapes industries. As Web 3.0 continues to evolve, its transformative use cases have the potential to disrupt traditional models and create more equitable and user-centric digital experiences. Embracing this decentralized future allows us to unlock the true potential of the internet and build a more open, secure, and collaborative online environment for generations to come.
        </small></li></ul>
      </>,
      tag: 'Ecosystem'
    },

  ];

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
  const announcementPage = (data) => {
    const stringWithoutSpaces = data?.replace(/[\s'"]/g, '_');
    navigate(`/announcementlistdetails?${stringWithoutSpaces}`);
  };

  const UpdateBlogDetails = (item) => {
    setRoutedBlog(item?.replace(/[\s']/g, '_'))
    navigate(`/blogdetails?${item?.replace(/[\s']/g, '_')}`);
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
                <li className="breadcrumb-item"><Link to="/bloglist">Blog List</Link></li>
                <li className="breadcrumb-item active" aria-current="page">Blog Details</li>
              </ol>
            </nav>
          </div>
        </div>
      </section>

      <section className="pt-120 pb-90 blog_list">
        <div className="container">
          <div className="row" >
            <div className="col-xl-8 col-lg-8   blog-details-wrapper" >
              {blogContent?.map((item, index) => {
                return (
                  routedBlog?.includes(item?.title?.replace(/[\s']/g, '_')) &&
                  <div key={index} className="blog-content"> <img className="img-fluid" src="/images/blog-details/1.jpg" alt="blog-details" />
                    <h2 className="mb-2">{item?.title}</h2>
                    <ul className="meta">
                      <li>23 August</li>
                      <li><a href="#/">Development</a></li>
                      <li className="date"><i className="ri-time-line"></i>4 Hour Ago</li>
                    </ul>
                    <p>{item?.description} </p>
                  </div>
                )
              })}
            </div>

            <div className="col-xl-4 col-lg-4 " >
              <aside className="sidebar">
                <div className="single-widget recent-post mt-md-0 mt-5">
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
                      {Announcement?.map((item, index) => {
                        return (
                          <li key={index}><a className="d-block" href="#/" onClick={() => announcementPage(item?.title)}>{item?.title}</a><span
                            className="cate small">2023-06-27 14:30</span>
                          </li>
                        )
                      })}
                    </ul>
                  </div>
                </div>

                <div className="single-widget recent-post mt-5 ">
                  <h3 className="title"> Related Posts </h3>
                  <div className="inner">
                    <ul className="list_with_img"  >
                      {blogContent?.map((item, index) => {
                        return (
                          <li key={index} className="d-flex mt-3 justify-content-between align-items-start" onClick={() => { UpdateBlogDetails(item?.title) }} >
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
    </>
  );
};

export default BlogDetails;
