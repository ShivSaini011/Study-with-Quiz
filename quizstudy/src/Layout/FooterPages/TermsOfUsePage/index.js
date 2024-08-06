import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const TermsOfUsePage = () => {
  const location = useLocation();
  const isMobPrivacyPolicyPage = location?.pathname?.includes('/mobTermsOfUsePage');
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <>
      <section className="inner-page-banner">
        <div className="container">
          <div className="inner text-center">
            <h1 className="title"> TERMS & CONDITIONS </h1>
            {!isMobPrivacyPolicyPage && 
            <nav className="mt-4">
              <ol className="breadcrumb justify-content-center">
                <li className="breadcrumb-item">
                  <a href="/">Home</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  TERMS & CONDITIONS
                </li>
              </ol>
            </nav>}
          </div>
        </div>
      </section>

      <section className="pb-90">
        <div className="container">
          <div className="row">
            <div className="col-md-10 m-auto">
              <div className="create-item-wrapper plicy_sec">
                <p>
                  The provided text appears to be a portion of the "Terms of Use" agreement for a service called "GapxBit." It
                  outlines the conditions and requirements for using the GapxBit Services, which seem to be related to digital
                  currencies and their derivatives. Here's a summary of the key points:
                  <br />
                  <br />

                  <ul>
                    <li> <strong>1. PARTIES:</strong><br />
                      <span className="d-block ms-3" >The agreement is between the user ("you" or "your") and the operator of GapxBit.</span></li>
                    <li> <strong>2. ACCEPTANCE:</strong><br />
                      <span className="d-block ms-3" >By accessing, downloading, using, or clicking "I agree," you are agreeing to be bound by these
                        Terms of Use and the Privacy Policy provided at support@GapxBit.com.</span></li>
                    <li> <strong>3. ADDITIONAL TERMS:</strong><br />
                      <span className="d-block ms-3" >Some features of the Services may have specific additional terms and conditions applicable to
                        them.</span></li>
                    <li> <strong>4. ARBITRATION PROVISION:</strong><br />
                      <span className="d-block ms-3" >The agreement contains an arbitration provision that mandates all claims to be resolved through
                        legally binding arbitration. Details of the arbitration provision can be found in Article 10, titled
                        "Resolving Disputes: Forum, Arbitration, Class Action Waiver."</span></li>
                    <li> <strong>5. RISKS OF DIGITAL CURRENCIES:</strong><br />
                      <span className="d-block ms-3" >Users are informed that digital currencies and their derivatives can fluctuate significantly in value,
                        and there is a risk of economic losses when buying, selling, holding, or investing in them. Users
                        acknowledge and agree to assume all risks related to using GapxBit Services for transactions
                        involving digital currencies and their derivatives. GapxBit will not be liable for any such risks or
                        adverse outcomes.</span></li>
                    <li> <strong>6. ACKNOWLEDGMENT OF ACCEPTANCE:</strong><br />
                      <span className="d-block ms-3" >By accessing, using, or attempting to use GapxBit Services, you acknowledge that you have read,
                        understood, and accepted these Terms of Use. If you disagree, you should not use GapxBit or its
                        services.</span></li>
                  </ul>


                  By accessing, using or attempting to use GapxBit Services in any capacity, you acknowledge that you accept and agree to be bound by these Terms. If you do not agree, do not access GapxBit or utilize GapxBit services.

                  <br />
                  <br />
                  <hr />
                  <br />
                  <br />



                  <strong> I. DEFINATIONS </strong>
                  <br /><br />
                  The provided section contains definitions of various terms used in the "Terms of Use" agreement for GapxBit. These definitions are crucial for understanding the context and scope of the agreement. Here are the defined terms:

                  <br /><br />
                  <p>
                    <ul>
                      <li>
                        <p>
                          <strong>1. GapxBit - </strong><br />It refers to the entire ecosystem comprising GapxBit websites, mobile applications, clients, applets, and other applications developed to offer GapxBit Services. This may also include independentlyoperated platforms within the ecosystem
                        </p>
                      </li>
                      <li>
                        <p>
                          <strong>2. GapxBit Accounts - </strong> <br />These are virtual accounts opened by GapxBit for users to record their usage of GapxBit Services, transactions, asset changes, and basic information. These accounts serve as the foundation for users to enjoy and exercise their rights on GapxBit
                        </p>
                      </li>
                      <li>
                        <p>
                          <strong>3. GapxBit Fiat Account - </strong><br />It refers to the record of fiat currencies' balance (if any) enabled through an electronic money wallet or a similar account service provided by a Fiat Partner.
                        </p>
                      </li>
                      <li>
                        <p>
                          <strong>4. GapxBit Services - </strong><br />These are various services provided to users by GapxBit based on Internet and/or blockchain technologies. The services are offered through GapxBit websites, mobile applications, clients, and other forms. Examples of GapxBit Services include digital assets trading, GapxBit academy, GapxBit launchpad, and GapxBit blockchain.

                        </p>
                      </li>
                      <li>
                        <p>
                          <strong>5. GapxBit Operators - </strong><br />These refer to all parties responsible for running GapxBit and providing GapxBit Services. This
                          includes legal persons, unincorporated organizations, and teams associated with GapxBit.
                        </p>
                      </li>
                      <li>
                        <p>
                          <strong>6. GapxBit Platform Rules - </strong><br />It includes all rules, interpretations, announcements, statements, letters of consent, and other contents released by GapxBit. It also encompasses regulations, implementation rules, product
                          process descriptions, and announcements published in the Help Center or within products orservice processes.
                        </p>
                      </li>
                      <li>
                        <p>
                          <strong>7. Digital Currency - </strong><br />It refers to a form of currency that exists entirely in digital or virtual form, not backed by a government or physical asset. Digital currencies are based on cryptography and blockchain technology.
                        </p>
                      </li>
                      <li>
                        <p>
                          <strong>8. Digital Assets - </strong><br />These are digital or virtual assets that are stored and exchanged electronically. They can include digital currencies or digital representations of real-world assets, such as property titles, music, or artwork.
                        </p>
                      </li>
                      <li>
                        <p>
                          <strong>9 Fiat Partner - </strong><br />A fiat partner is a company or financial institution that provides a bridge between traditional fiat currencies (e.g., USD or EUR) and cryptocurrencies, enabling users to buy and sell digital currencies using fiat money
                        </p>
                      </li>
                      <li>
                        <p>
                          <strong>10. Fiat Services means - </strong><br />These are financial services that involve traditional government-issued currencies (fiat currencies) such as USD, EUR, etc., as opposed to cryptocurrencies. Examples include banking, credit cards, loans, and money transfers.
                        </p>
                      </li>
                      <li>
                        <p>
                          <strong>11. KYC - </strong><br />KYC stands for "Know Your Customer," a regulatory requirement that financial institutions and  businesses must follow to verify the identity of their customers. It helps prevent fraud, money laundering, and terrorist financing
                        </p>
                      </li>
                      <li>
                        <p>
                          <strong>12. Spot Trading - </strong><br />Spot trading refers to the immediate buying and selling of financial assets for delivery or settlement
                          within a short period, usually a few days.
                        </p>
                      </li>
                      <li>
                        <p>
                          <strong>13. Users </strong><br />This term refers to all individuals, institutions, or organizations that access, download, or use
                          GapxBit or its services and meet the criteria and conditions set by GapxBitglobal
                        </p>
                      </li>
                    </ul>
                  </p>
                  {/* ////////// */}
                  <hr /><br />


                  <strong>II. GENERAL PROVISIONS </strong>
                  <br />
                  <br />
                  <p>
                    <strong> 1. About these terms </strong>
                    <ul>
                      <li>
                        <p>
                          <strong>a. CONTRACTUAL RELATIONSHIP:- </strong>The terms and conditions presented here establish a legally binding agreement between you (referred to as "you" or "your") and GapxBit operators. This agreement defines the mutual obligations and responsibilities of both parties.
                        </p>
                      </li>
                      <li>
                        <p>
                          <strong>b. SUPPLEMENTARY TERMS: - </strong>Due to the
                          rapid development of Digital Currencies and GapxBit
                          these Terms between you and GapxBit Operators do not
                          enumerate or cover all rights and obligations of each
                          party, and do not guarantee full alignment with needs
                          arising from future development. Therefore, the
                          Privacy Policy OF GapxBit PLATFORM RULES, and all
                          other agreements entered into separately between you
                          and GapxBit are deemed supplementary terms that are an
                          integral part of these Terms and shall have the same
                          legal effect. Your use of GapxBit Services is deemed
                          your acceptance of the above supplementary terms.
                        </p>
                      </li>
                      <li>
                        <p>
                          <strong>c. CHANGES TO THESE TERMS: - </strong>GapxBit
                          reserves the right to change or modify these Terms in
                          its discretion at any time. We will notify such
                          changes by updating the terms on its website and will
                          modify the [Last revised] date displayed on this page.
                          Any and all modifications or changes to these terms
                          Will become effective upon publication on the website
                          Or release to users. Therefore, your continued use of
                          GapxBit services is deemed your acceptance of the
                          Modified agreement and rules. If you do not agree to
                          Any changes to these terms, you must stop using
                          GapxBit services immediately. You are recommended to
                          Frequently review these terms to ensure your
                          Understanding of the terms and conditions that apply
                          To your access to and use of GapxBit services.
                        </p>
                      </li>
                      <li>
                        <p>
                          <strong>d. Prohibition of Use - </strong>By accessing
                          And using GapxBit services, you represent and warrant
                          That you have not been included in any trade
                          Interdiction or economic sanctions list (such as the
                          United nations security council sanctions list), the
                          List of specially designated nationals maintained by
                          Ofac (the office of foreign assets control of the u.S.
                          Department of the treasury), or the denied persons or
                          Entity list of the u.S. Department of commerce.
                          GapxBit reserves the right to choose markets and
                          Jurisdictions to conduct business, and may restrict or
                          Refuse, in its discretion, the provision of GapxBit
                          Services in certain countries or regions.
                        </p>
                      </li>
                    </ul>

                    <strong className="mb-2 d-block" >2. About GapxBit </strong>
                    <p>
                      GapxBit is a leading digital asset exchange offering secure and seamless access to a diverse selection of
                      cryptocurrencies. Founded by a team of seasoned professionals who deeply believe in the transformative
                      potential of blockchain technology, our exchange is dedicated to providing users with a smooth and secure
                      trading experience.
                      <br /><br />

                      We are committed to creating a user-friendly platform that is accessible to everyone, regardless of their
                      level of experience with cryptocurrencies. Our goal is to empower users with the latest market data, realtime pricing, and advanced trading tools. Ensuring the safety of our users' funds is of paramount
                      importance to us, and we have implemented robust security measures and best practices to safeguard their
                      assets.
                      <br /><br />
                      Compliance with relevant regulations and laws is a top priority for us, and we maintain the highest
                      standards of transparency and integrity in all our operations. Our mission is to enable our users to take
                      control of their financial futures by offering a secure, reliable, and user-friendly platform to buy, sell, and
                      trade cryptocurrencies.
                      <br /><br />

                      While we strive to maintain the accuracy of the information provided through our services, we cannot
                      guarantee its absolute accuracy, applicability, reliability, integrity, or performance. GapxBit shall not be
                      held liable for any direct or indirect loss or damage caused by the use of this content. It is essential for
                      users to understand the risks involved in digital assets trading and to trade responsibly based on their
                      capabilities.
                      <br /><br />

                      Please note that GapxBit does not provide investment or consulting advice of any kind. The information
                      we provide is intended to assist users in making independent decisions. Users are encouraged to stay
                      informed about the risks associated with digital assets trading and act responsibly in their trading activities.
                    </p>
                    <strong className="mb-2 d-block" >
                      3. GapxBit Account Registration and Requirements
                    </strong>
                    <p>
                      <strong className="mb-1 d-block" >A. REGISTRATION - </strong>To use GapxBit Services, all users must apply for a GapxBit Account at 
                      <a href=" https://www.GapxBitexchange.in/signup" >https://www.GapxBitexchange.io/signup</a>. During registration, you must provide the requested
                      information and agree to these Terms, the Privacy Policy, and other GapxBit Platform Rules.
                      GapxBit reserves the right to refuse to open an account for any user. You are responsible for
                      providing accurate and complete information during registration and updating it promptly to
                      maintain its integrity and accuracy. Each user (individual, business, or legal entity) is allowed to
                      have only one main account at a time. However, users may open one or more subaccounts under
                      the main account with GapxBit' consent, subject to certain conditions.

                    </p>
                    <p>
                      <strong className="mb-1 d-block" >B. ELIGIBILITY - </strong>
                      By registering for a GapxBit Account, you confirm and verify the following:
                      <ul>
                        <li>
                          • You are at least 18 years old or have the legal age to form a binding contract according to applicable laws
                        </li>
                        <li>
                          • As an individual, legal person, or organization, you have the full legal capacity and necessary authorizations to enter into these Terms.
                        </li>
                        <li>
                          • You have not been suspended or removed from using the GapxBit Platform or GapxBit Services previously
                        </li>
                        <li>• You do not already have an existing GapxBit Accoun</li>
                        <li>
                          • You are not accessing the GapxBit Platform or Services from a Restricted Location, nor acting on behalf of someone or a legal entity located in a Restricted Location.

                        </li>
                        <li>
                          • If you represent a legal entity, you have the necessary rights and authorizations to bind that entity and access and use the GapxBit Platform and Services on its behalf.
                        </li>
                        <li>
                          • Your use of the GapxBit Platform and Services complies with all applicable laws and regulations, including anti-money laundering, anti-corruption, and counter-terrorist financing regulations.

                        </li>
                        <li>
                          • Please note that certain products and services within the GapxBit Platform may not be available or may be restricted in certain jurisdictions or regions due to legal requirements. Users are responsible for being informed about and complying with any restrictions and/or requirements regarding their access to and use of the GapxBit Platform.
                        </li>
                      </ul>
                    </p>
                    <p>
                      <strong className="mb-1 d-block" > C. USER IDENTITY VERIFICATION:- </strong>
                      Registering a GapxBit Account implies your agreement to provide the necessary personal
                      information for identity verification. This information will be used to verify your identity, detect
                      money laundering, terrorist financing, fraud, and other financial crimes, or for other lawful
                      purposes stated by GapxBit. We will collect, use, and share this information in accordance with
                      our Privacy Policy. You authorize us to retain this information for the duration of your active
                      account and up to five (5) years after your account is closed, in line with global industry data
                      storage standards. Additionally, you permit us to conduct necessary investigations, directly or
                      through a third party, to verify your identity or protect you and/or us from financial crimes, such
                      as fraud. The required information may include your name, email address, contact information,
                      phone number, username, government-issued ID, date of birth, and other relevant details provided
                      during account registration.

                    </p>
                    <p>
                      <strong className="mb-1 d-block" >D. ACCOUNT USAGE REQUIREMENTS:  </strong>
                      A GapxBit Account can only be used by the account registrant. GapxBit reserves the right to
                      suspend, freeze, or cancel the use of GapxBit Accounts by anyone other than the account registrant.
                      If you suspect or become aware of any unauthorized use of your account credentials (username
                      and password), you must notify GapxBit immediately. GapxBit is not liable for any loss or damage
                      arising from the use of your GapxBit Account by you or any third party, whether authorized or
                      unauthorized
                    </p>
                    <p>
                      <strong className="mb-1 d-block" >E. ACCOUNT SECURITY: - </strong>
                      GapxBit prioritizes the security of user funds and has implemented industry-standard protection
                      for GapxBit Services. However, individual user actions can pose risks. You agree to treat your
                      access credentials (e.g., username and password) as confidential information and refrain from
                      disclosing them to any third party. You are solely responsible for ensuring the security of your
                      GapxBit Account and personal information
                      <br />
                      <br />
                      You are fully responsible for keeping your GapxBit Account and password safe, and all
                      transactions conducted under your GapxBit Account. GapxBit bears no liability for any loss or
                      consequences resulting from authorized or unauthorized use of your account credentials, including
                      but not limited to information disclosure, agreement consent, rule acceptance, or online agreement
                      renewal.
                      <br />
                      <br />
                      <b> By creating a GapxBit Account, you hereby agree that:</b>
                      <ul>
                        <li>
                          • You will notify GapxBit immediately if you are aware of any unauthorized use of your Account and password or any other violation of security rules;
                        </li>
                        <li>
                          • You will strictly abide by all mechanisms or procedures of GapxBit regarding security, authentication, trading, charging, and withdrawal; and

                        </li>
                        <li>
                          • You will take appropriate steps to logout from GapxBit at the end of each visit.
                        </li>
                      </ul>
                    </p>


                    <br />
                    <br />
                    <hr />
                    <br />
                    <br />

                    <strong>III. GapxBit SERVICES </strong>

                    <br /><br />

                    After completing the registration process of GapxBit Account and verification of personal information, you may
                    use GapxBit Services which includes but not limited to Spot trading, Fiat services, Margin trading, Saving,
                    Staking, etc. in accordance with the provisions of these Terms (including GapxBit Platform Rules and other
                    individual agreements). GapxBit has the right to:

                    <ul>
                      <li>
                        • Provide, modify or terminate, in its discretion, any
                        GapxBit Services; and
                      </li>
                      <li>
                        • Allow or prohibit some Users’ use of any GapxBit
                        Services in accordance with relevant GapxBit Platform
                        Rules.
                      </li>
                    </ul>
                    GapxBit has exclusive authority to:
                    <ul>
                      <li>
                        • determine which digital asset will be listed on the
                        platform
                      </li>
                      <li>
                        • adding or removing any digital asset from the platform
                      </li>
                      <li>
                        • changing order size available of any digital asset
                      </li>
                    </ul>
                    In respect of such additions, removals, or amendments,
                    GapxBit may, but is not obliged to, notify Users in advance
                    and GapxBit shall have no liability to Users in connection
                    with such additions, removals or amendments.
                    <p>
                      <br />

                      <strong className="d-block mb-1" >1. SERVICE USAGE GUIDELINES </strong>
                      <p>
                        <strong className="d-block mb-1" > a) License </strong>
                        License Provided that you constantly comply with the express
                        terms and conditions stated in these Terms, GapxBit
                        grants you a revocable, limited, royalty-free,
                        non-exclusive, non-transferable, and non-sublicensable
                        license to access and use GapxBit Services through your
                        computer or Internet compatible devices for your
                        personal/internal purposes.
                        <br />
                        <br />
                        You are prohibited to use GapxBit Services for resale or commercial purposes, including
                        transactions on behalf of other persons or entities. All the above actions are expressly prohibited
                        and constitute a material violation of these Terms. The content layout, format, function and
                        access rights regarding GapxBit Services should be stipulated in the discretion of GapxBit.
                        GapxBit platform reserves all rights not expressly granted in these Terms. Therefore, you are
                        hereby prohibited from using GapxBit Services in any way not expressly authorized by these
                        Terms
                        <br />
                        <br />
                        These Terms only grant a limited license to access and use of GapxBit Services. Therefore, you
                        hereby agree that when you use GapxBit Services, GapxBit does not transfer GapxBit Services or
                        the ownership or intellectual property rights of any GapxBit intellectual property to you or
                        anyone else. All the text, graphics, user interfaces, visual interface, photos, sounds, process flow
                        diagrams, computer code , programs, software, products, information and documents, as well as
                        the design, structure, selection, coordination, expression,and layout of any content included in
                        the services or provided through GapxBit Services, are exclusively owned, controlled and/or
                        licensed by GapxBit Operators or its members, parent companies, licensors or affiliates.

                        <br />
                        <br />
                        You hereby transfer all rights, ownership and interests of the Feedback ( any feedback,
                        suggestions, ideas, or other information) or materials and all related intellectual property rights to
                        GapxBit. You have no right and hereby waive any request for acknowledgment or compensation
                        based on any Feedback, or any modifications based on any Feedback
                      </p>

                      <p>
                        <strong className="d-block mb-1" >b) Restriction</strong>

                        When you use GapxBit services, you agree and undertake
                        to comply with the following provisions:
                        <ul>
                          <li>
                            a. During the use of GapxBit Services, all
                            activities you carry out should comply with the
                            requirements of applicable laws and regulations,
                            these Terms, and various guidelines of GapxBit;
                          </li>
                          <li>
                            b. You agree not to use the services for market
                            manipulation (such as pump and dump schemes, wash
                            trading, self-trading, front running, spoofing or
                            layering, pump and dumb schemes,front running, quote
                            stuffing regardless of whether prohibited by law or
                            not);
                          </li>
                          <li>
                            c. Your use of GapxBit Services should not violate
                            public interests, public morals, or the legitimate
                            interests of others, including any actions that
                            would interfere with, disrupt, negatively affect, or
                            prohibit other Users from using any GapxBit
                            Services;
                          </li>
                        </ul>
                        The following commercial uses of GapxBit data are
                        prohibited without written consent of GapxBit:
                        <ul>
                          <li>
                            a. Trading services that make use of GapxBit quotes
                            or market bulletin board information.
                          </li>
                          <li>
                            b. Data feeding or streaming services that make use
                            of any market data of GapxBit.
                          </li>
                          <li>
                            c. Any other websites/apps/services that charge for
                            or earns profit from market data obtained from
                            GapxBit(including through advertising or referral
                            fees).
                          </li>
                        </ul>
                        Without prior written consent from GapxBit, you may not
                        modify, replicate, duplicate, copy, download, store,
                        further transmit, disseminate, transfer, disassemble,
                        broadcast, publish, remove or alter any copyright
                        statement or label, or license, sub-license, sell,
                        mirror, design, rent, lease, private label, grant
                        security interests in the properties or any part of the
                        properties, or create their derivative works or
                        otherwise take advantage of any part of the properties.
                        <br />
                        <br />
                        <b> You may not:</b>
                        <ul>
                          <li>a. Use GapxBit services in any illegal way.</li>
                          <li>
                            b. use any devices, software or routine programs to
                            interfere with the normal operation of GapxBit
                            Services or any transactions on GapxBit Services, or
                            any other person’s use of GapxBit Services
                          </li>
                          <li>
                            c. Reverse look-up, track or seek to track any
                            information of any other Users or visitors of
                            GapxBit Services
                          </li>
                          <li>
                            d. attempt to access any part or function of the
                            properties without authorization, or connect to
                            GapxBit Services or any GapxBit servers or any other
                            systems or networks of GapxBit Services provided
                            through the services by hacking, password mining or
                            any other unlawful or prohibited means
                          </li>
                          <li>
                            e. forge headers, impersonate, or otherwise
                            manipulate identification, to disguise your identity
                            or the origin of any messages or transmissions you
                            send to GapxBit
                          </li>
                          <li>
                            f. take any actions that imposes an unreasonable or
                            disproportionately large load on the infrastructure
                            of systems or networks of GapxBit Services or the
                            infrastructure of any systems or networks connected
                            to GapxBit services
                          </li>
                          <li>
                            g. probe, scan or test the vulnerabilities of
                            GapxBit Services or any network connected to the
                            properties, or violate any security or
                            authentication measures on GapxBit Services or any
                            network connected to GapxBit Services
                          </li>
                          <li>
                            h. use any deep linking, web crawlers, bots, spiders
                            or other automatic devices, programs, scripts,
                            algorithms or methods, or any similar or equivalent
                            manual processes to access, obtain, copy or monitor
                            any part of the properties, or replicate or bypass
                            the navigational structure or presentation of
                            GapxBit Services in any way, in order to obtain or
                            attempt to obtain any materials, documents or
                            information in any manner not purposely provided
                            through GapxBit Services
                          </li>
                        </ul>
                        By accessing GapxBit Services, you agree that GapxBit
                        has the right to investigate any violation of these
                        Terms, unilaterally determine whether you have violated
                        these Terms, and take actions under relevant regulations
                        without your consent or prior notice. Examples of such
                        actions include, but are not limited to:
                        <ul>
                          <li>a. Blocking and closing order requests;</li>
                          <li>b. Freezing your account;</li>
                          <li>c. Reporting the incident to the authorities;</li>
                          <li>
                            d. Publishing the alleged violations and actions
                            that have been taken;
                          </li>
                          <li>
                            e. Deleting any information you published that are
                            found to be violations.
                          </li>
                        </ul>
                      </p>
                    </p>



                    <br />
                    <p>


                      <strong className="d-block mb-1" > 2. Spot Trading </strong>
                      By making use of Spot Trading, you acknowledge and agree that you have read, understood and
                      accepted the Spot Trading Terms of Use, which shall apply to all Spot Trading (as such term is defined
                      in the Spot Trading Terms of Use).

                    </p>
                    <br />
                    <p>


                      <strong className="d-block mb-1" > 3. Fiat Services</strong>
                      By accepting these Terms, you acknowledge and agree that:
                      <ul>
                        <li>
                          a)  You have read, accepted and will comply with these
                          Terms, the Legal Statement, the Privacy Policy, and
                          any other GapxBit Platform Rules related to Fiat
                          Services;
                        </li>
                        <li>
                          b) GapxBit may partner with any Fiat Partners and that,
                          if applicable, you will open an account with such Fiat
                          Partners by completing the relevant registration and
                          identity verification for such account, and by
                          accepting any user agreements, terms and conditions,
                          policies and procedures or similar documents of any
                          Fiat Partners;
                        </li>
                        <li>
                          c) Any payments expressed in any fiat currencies and
                          which have been made in connection with any Fiat
                          Services may not be canceled, recalled or refunded,
                          and that any chargeback requests in connection with
                          any Fiat Services that involve a Fiat Partner, are
                          subject to that Fiat Partner's policies and
                          procedures.
                        </li>
                      </ul>
                    </p>
                    <br />
                    <p>


                      <strong className="d-block mb-1" > 4. Margin Trading </strong>
                      By making use of the Margin Services, you acknowledge and
                      agree that you have read, understood and accepted the
                      “Margin Service Terms of Use”, which shall apply to all
                      Margin Services (as such term is defined in the Margin
                      Service Terms of Use).
                    </p>
                    <br />
                    <p>


                      <strong className="d-block mb-1" > 5. Staking </strong>
                      GapxBit will from time to time launch Staking Programs for
                      specific types of Digital Currencies to reward, as per
                      certain rules, users who hold such Digital Currencies in
                      their GapxBit Accounts. When participating in Staking
                      Programs, you should note that:
                      <ul>
                        <li>
                          a. Unless otherwise stipulated by GapxBit, Staking
                          Programs are free of charge and Users may trade during
                          the staking period;
                        </li>
                        <li>
                          b. GapxBit does not guarantee Users’ proceeds under
                          any Staking Program;
                        </li>
                        <li>
                          c. GapxBit has the right to initiate or terminate
                          Staking Program for any Digital Currencies or modify
                          rules on such programs in its sole discretion;
                        </li>
                        <li>
                          d. Users shall ensure that sources of the Digital
                          Currencies they hold in GapxBit Accounts are legal and
                          compliant and undertake to observe related laws and
                          regulations. Otherwise, GapxBit has the right to take
                          necessary steps in accordance with these Terms or
                          GapxBit Platform Rules, including, without limitation,
                          freezing GapxBit Accounts or deducting the Digital
                          Currencies awarded to Users who violate the rules of
                          respective Staking Programs.
                        </li>
                      </ul>
                    </p>
                    <br />
                    <p>


                      <strong className="d-block mb-1" > 6. GapxBit Savings Service </strong>
                      GapxBit offers GapxBit Savings, a service to provide Users
                      with value-added services for their idle Digital Assets.
                      To use GapxBit Savings service, you must conclude with
                      GapxBit a separate GapxBit Savings Service User Agreement
                      (saving service agreement link) and open a special GapxBit
                      Savings service account, following the completion of
                      registration and identity verification for your GapxBit
                      Account. When using GapxBit Savings service, you should
                      note that:
                      <ul>
                        <li>
                          a. GapxBit Savings assets will be used in
                          cryptocurrency leveraged borrowing and other
                          businesses.
                        </li>
                        <li>
                          b. When you use GapxBit Savings service, you will
                          unconditionally authorize GapxBit to distribute and
                          grant the leveraged interest according to GapxBit
                          Platform Rules.
                        </li>
                        <li>
                          c. You shall abide by relevant laws and regulations to
                          ensure that the sources of Digital Assets are
                          legitimate and compliant when using GapxBit Savings
                          service.
                        </li>
                        <li>
                          d. When you use GapxBit Savings service, you should
                          fully recognize the risks of investing in Digital
                          Assets and operate cautiously.
                        </li>
                        <li>
                          e. You agree that all investment operations conducted
                          on GapxBit represent your true investment intentions
                          and that unconditionally accept the potential risks
                          and benefits of your investment decisions.
                        </li>
                        <li>
                          f. GapxBit reserves the right to suspend or terminate
                          GapxBit Savings service. If necessary, GapxBit can
                          suspend and terminate GapxBit Savings service at any
                          time.
                        </li>
                        <li>
                          g. Due to network delay, computer system failures and
                          other force majeure, which may lead to delay,
                          suspension, termination or deviation of execution of
                          GapxBit Savings service, GapxBit will use reasonable
                          effort to ensure but not promise that GapxBit Savings
                          service execution system runs stably and effectively.
                          GapxBit does not take any responsibility if the final
                          execution fails to match your expectations due to the
                          above factors.
                        </li>
                      </ul>
                    </p>



                    <br />
                    <br />
                    <hr />
                    <br />
                    <br />


                    <p>



                      <strong>IV. LIABILITIES</strong>
                      <br />
                      <br />
                      <p>
                        <strong className="d-block mb-1" >
                          1. Disclaimer of Damages and Limitation of Liabilities
                        </strong>
                        Disclaimer of Damages and Limitation of Liabilities To the maximum extent permitted by applicable law,
                        in no Event will GapxBit, its affiliates and their respective Shareholders, members, directors, officers,
                        employees, Attorneys, agents, representatives, suppliers or Contractors be liable for any incidental,
                        indirect, Special, punitive, consequential or similar damages or Liabilities whatsoever (including, without
                        limitation, Damages for loss of data, information, revenue, profits Or other businesses or financial
                        benefits) arising out Of GapxBit services, any performance or non-performance Of GapxBit services, or any
                        other product, service or Other item provided by or on behalf of GapxBit and its Affiliates, whether under
                        contract, statute, strict Liability or other theory even if GapxBit has been Advised of the possibility of such
                        damages except to the Extent of a final judicial determination that such Damages were a result of GapxBit’s
                        gross negligence, Fraud, willful misconduct or intentional violation of Law. Some jurisdictions do not
                        allow the exclusion or Limitation of incidental or consequential damages, so The above limitation may
                        not apply to you.
                        <br />
                        <br />
                        Notwithstanding the foregoing, in no event will the Liability of GapxBit, its affiliates and their Respective
                        shareholders, members, directors, officers, Employees, attorneys, agents, representatives, suppliers Or
                        contractors arising out of services offered by or on Behalf of GapxBit and its affiliates, any performance or
                        Non-performance of GapxBit services, or any other Product, service or other item, whether under contract,
                        Statute, strict liability or other theory, exceed the Amount of the fees paid by you to GapxBit under these
                        Terms in the twelve-month period immediately preceding the event Giving rise to the claim for liability.

                      </p>
                      <p>
                        <strong className="d-block mb-1" > 2. Disclaimer of Warranties</strong>
                        Disclaimer of WarrantiesTo the maximum extent permitted under applicable law, GapxBit services, GapxBit
                        materials and any product, Service or other item provided by or on behalf of GapxBit are offered on an “as
                        is” and “as available” Basis, and GapxBit expressly disclaims, and you waive, Any and all other warranties
                        of any kind, whether Express or implied, including, without limitation, Warranties of merchantability,
                        fitness for a particular Purpose, title or non-infringement or warranties arising From course of
                        performance, course of dealing or usage In trade. Without limiting the foregoing, GapxBit does Not
                        represent or warrant that the site, GapxBit services Or GapxBit materials are accurate, complete, reliable,
                        Current, error-free, or free of viruses or other harmful Components. GapxBit does not guarantee that any
                        order Will be executed, accepted, recorded or remain open. Except for the express statements, agreements
                        and rules Set forth in these terms, you hereby acknowledge and Agree that you have not relied upon any
                        other statement Or agreement, whether written or oral, with respect to Your use and access of GapxBit
                        services. Without Limiting the foregoing, you hereby understand and agree That GapxBit will not be liable
                        for any losses or Damages arising out of or relating to:
                        <ul>
                          <li>
                            A. Any Inaccuracy, Defect or Omission of Digital
                            Assets Price Data
                          </li>
                          <li>
                            B. Any Error or Delay in the Transmission of Such
                            Data
                          </li>
                          <li>C. Interruption in Any Such Data</li>
                          <li>
                            D. Regular or Unscheduled Maintenance Carried Out by
                            GapxBit and Service Interruption and Change
                            Resulting From Such Maintenance
                          </li>
                          <li>
                            E. Any Damages Incurred by Other Users’ Actions,
                            Omissions or Violation of These Terms
                          </li>
                          <li>
                            F. Any Damage Caused by Illegal Actions of Other
                            Third Parties or Actions Without Authorized by
                            GapxBit
                          </li>
                          <li>
                            G. Other Exemptions Mentioned in Disclaimers and
                            Platform Rules Issued by GapxBit
                          </li>
                        </ul>
                        The disclaimer of implied warranties contained herein
                        May not apply if and to the extent it is prohibited by
                        Applicable law of the jurisdiction in which you reside.
                      </p>

                      <p>
                        <strong className="d-block mb-1" > 3. Indemnification</strong>
                        You agree to indemnify and hold harmless GapxBit' Operators, their affiliates, contractors, licensors,
                        and their respective directors, officers, employees and agents from and against any claims, actions,
                        proceedings, investigations, demands, suits, costs, expenses and damages (including attorneys’ fees,
                        fines or penalties imposed by any regulatory authority) arising out of or related to:

                        <ul>
                          <li>
                            a. Your use of, or conduct in connection with,
                            GapxBit Services,
                          </li>
                          <li>
                            b. Your breach or our enforcement of these Terms, or
                          </li>
                          <li>
                            c. Your violation of any applicable law, regulation,
                            or rights of any third party during your use of
                            GapxBit Services.
                          </li>
                        </ul>
                        You are obligated to indemnify GapxBit Operators, their
                        affiliates, contractors, licensors, and their respective
                        directors, officers, employees or agents pursuant to
                        these Terms, GapxBit will have the right, in its sole
                        discretion, to control any action or proceeding and to
                        determine whether GapxBit wishes to settle, and if so,
                        on what terms.
                      </p>
                    </p>




                    <br />
                    <br />
                    <hr />
                    <br />
                    <br />

                    <p>
                      <strong>V. Announcements </strong>
                      <br />
                      <br />
                      Please be aware that all official announcements, news,
                      promotions, competitions and airdrops will be listed on (
                      <Link to="/announcements">Announcements</Link>). Users
                      Undertake to refer to these materials regularly and
                      Promptly. GapxBit will not be held liable or responsible
                      In any manner of compensation should users incur personal
                      Losses arising from ignorance or negligence of the
                      Announcements.
                    </p>

                    <br />
                    <br />
                    <hr />
                    <br />
                    <br />

                    <p>
                      <strong>VI. Termination of Agreement</strong>
                      <p>
                        <strong className="d-block mb-1" >1. Suspension of GapxBit Accounts </strong>
                        You acknowledge that GapxBit has the right to immediately suspend your GapxBit Account, freeze or lock
                        the Digital Assets or funds in all related accounts (including those owned by affiliated entities), and
                        suspend your access to GapxBit for any reason, including suspected violations of these Terms, our Privacy
                        Policy, or applicable laws and regulations. GapxBit shall not be liable for any permanent or temporary
                        modifications to your GapxBit Account or suspension/termination of your access to GapxBit Services.
                        GapxBit may retain and use transaction data or other information related to such accounts. Account
                        controls may also be applied in cases where the GapxBit Account is subject to a governmental proceeding,
                        criminal investigation, or other pending litigation, unusual activities, unauthorized access, or court
                        orders/regulatory commands.


                      </p>

                      <p>
                        <strong className="d-block mb-1" >2. Cancellation of GapxBit Accounts </strong>
                        GapxBit reserves the right to terminate these Terms by canceling your GapxBit Account and permanently
                        freezing (canceling) its authorizations on GapxBit. Such termination may occur if you re-register under
                        another person's name, provide untruthful, inaccurate, outdated, or incomplete information, reject the
                        amended Terms, request termination of GapxBit Services, or for other reasons deemed suitable by GapxBit.
                        Upon termination, account and transactional information that meets data retention standards will be
                        securely stored for five years. Additionally, any unfinished transactions during the account termination
                        process may be notified to your counterparty. If informed of stolen or unlawfully possessed Digital Assets
                        or funds, GapxBit may place an administrative hold on the affected funds and Account until the dispute is
                        resolved.

                      </p>

                      <p>
                        <strong className="d-block mb-1" >
                          3. Remaining Funds after GapxBit Account Termination
                        </strong>
                        After closing or withdrawing a GapxBit Account, any remaining account balance (including charges and
                        liabilities owed to GapxBit) becomes payable immediately to GapxBit. Users have five business days to
                        withdraw all Digital Assets or funds from the account after clearing outstanding charges
                      </p>
                      <p>
                        <strong className="d-block mb-1" >
                          4. Remaining Funds after GapxBit Account Termination
                          Due to Fraud, Violation of Law, or Violation of These
                          Terms
                        </strong>
                        In cases of Account suspension/closure due to fraud investigations, violation of law, or these Terms,
                        GapxBit retains full custody of Digital Assets, funds, and User data/information, which may be turned
                        over to governmental authorities.
                      </p>

                      <p>
                        <strong className="d-block mb-1" >5. Dormant Accounts </strong>

                        If you fail to close open positions and withdraw Digital Assets from your GapxBit Account within 30 days
                        of receiving a written notice, GapxBit may deem your Account as dormant. In its absolute discretion and
                        without prior notice, GapxBit may take actions such as closing positions, converting Digital Assets,
                        transferring the dormant Account to an affiliate or third-party custodian, charging a dormant Account fee,
                        or closing the dormant Account. GapxBit shall not be liable for any loss or expense incurred as a result,
                        except in cases of fraud or willful default by GapxBit. Dormant Accounts cannot be reactivated; users must
                        register a new GapxBit Account if they wish to continue using GapxBit Services
                        <ul>
                          <li>
                            a. Deem your GapxBit account as a dormant account;
                          </li>
                          <li>
                            b. Close any open positions in any GapxBit products;
                          </li>
                          <li>
                            c. Convert the Digital Assets to a different type of
                            Digital Asset (e.g., from BTC to BUSD). For the
                            avoidance of doubt, none of the GapxBit Operators
                            shall be liable for any loss of profit, tax
                            obligations or any other loss, damage or expense
                            incurred by you resulting from such conversion;
                          </li>
                          <li>
                            d. Transfer such dormant account (including any
                            Digital Assets contained therein) to an affiliate of
                            the GapxBit Operators, any third-party custodian or
                            an isolated wallet where it is deemed reasonably
                            necessary by GapxBit to do so. In the event that
                            such transfer has taken place, you have the right to
                            retrieve your digital assets from subject to
                            satisfying GapxBit’ verification requirements,
                            including completing KYC;
                          </li>
                          <li>
                            e. Charge a dormant account fee to cover the cost of
                            maintaining the assets by the GapxBit Operators, its
                            affiliates or any third-party and such fee shall be
                            withdrawn directly from the dormant account on a
                            monthly basis; and
                          </li>
                          <li>
                            f. Close a dormant account at any time, and GapxBit
                            will not be liable for any loss, damage or expense
                            incurred by you as a result of the closure of a
                            dormant account unless there was fraud or willful
                            default by GapxBit. After a dormant account is
                            closed, it cannot be reactivated by you (i.e. you
                            will need to register a new GapxBit account if you
                            wish to continue to use GapxBit Services).
                          </li>
                        </ul>
                      </p>
                    </p>
                    {/*  */}

                    <br />
                    <br />
                    <hr />
                    <br />
                    <br />

                    <p>
                      <strong>VII. No Financial Advice </strong>
                      <br />
                      <br />
                      GapxBit is not your broker, intermediary, agent, or advisor and has no fiduciary relationship or obligation to you
                      in connection with any trades or other decisions or activities effected by you using GapxBit Services. No
                      communication or information provided to you by GapxBit is intended as, or shall be considered or construed as,
                      investment advice, financial advice, trading advice, or any other sort of advice. Unless otherwise specified in
                      these Terms, all trades are executed automatically, based on the parameters of your order instructions and in
                      accordance with posted trade execution procedures, and you are solely responsible for determining whether any
                      investment, investment strategy or related transaction is appropriate for you according to your personal investment
                      objectives, financial circumstances and risk tolerance, and you shall be solely responsible for any loss or liability
                      therefrom. You should consult legal or tax professionals regarding your specific situation. GapxBit does not
                      recommend that any Digital Asset should be bought, earned, sold, or held by you. Before making the decision to
                      buy, sell or hold any Digital Asset, you should conduct your own due diligence and consult your financial advisors
                      prior to making any investment decision. GapxBit will not be held responsible for the decisions you make to buy,
                      sell, or hold Digital Asset based on the information provided by GapxBit.
                    </p>
                    {/*  */}

                    <br />
                    <br />
                    <hr />
                    <br />
                    <br />

                    <p>
                      <strong>VIII. Compliance with Local Laws </strong>
                      <br />
                      <br />
                      It is Users’ responsibility to abide by local laws in relation to the legal usage of GapxBit Services in their local jurisdiction as well as other laws and regulations applicable to Users. Users must also factor, to the extent of their local laws all aspects of taxation, the withholding, collection, reporting and remittance to their appropriate tax authorities.all users of GapxBit services acknowledge and declare that their funds come from legitimate sources and do not originate from illegal activities; users agree that GapxBit will require them to provide or otherwise collect the necessary information and materials as per relevant laws or government orders to verify the legality of the sources and use of their funds.
                      GapxBit maintains a stance of cooperation with law enforcement authorities globally and will not hesitate to seize,
                      freeze, terminate Users’ accounts and funds which are flagged out or investigated by legal mandat
                    </p>
                    {/*  */}

                    <br />
                    <br />
                    <hr />
                    <br />
                    <br />

                    <p>
                      <strong>IX. Privacy Policy </strong>
                      <br />
                      <br />
                      Access to GapxBit Services will require the submission of
                      certain personally identifiable information. Please review
                      GapxBit' Privacy Policy at
                      <Link to="/PrivacyPolicyPage"> ( PrivacyPolicy ) </Link> for a
                      summary of GapxBit' guidelines regarding the collection
                      and use of personally identifiable information.
                    </p>
                  </p>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TermsOfUsePage;
