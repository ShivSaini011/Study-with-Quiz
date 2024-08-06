import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const JobDiscription = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  return (
    <>

      <div className="about_page" >
        <section className="about_top" >
          <div className="container" >
            <div className="row g-md-5 align-items-center" >
              <div className="col-lg-7" >
                <h2>
                  <span className="text-gradient" >KYC Analyst - </span> <br />  Job Description

                </h2>

                <Link className="btn btn-gradient btn-small mt-3" to="/job_apply"><span>Apply Now</span></Link>
              </div>
              <div className="col-lg-5" >
                <img alt="" src="/images/about_img.svg" className="img-fluid" />
              </div>
            </div>
          </div>
        </section>


        <section className="about_2" >
          <div className="container" >
            <div className="row" >
              <div className="col-lg-12 " >

                <p>
                  GapxBit stands as the foremost global blockchain ecosystem and provider of cryptocurrency
                  infrastructure solutions. Our array of financial products encompasses the world's largest digital-asset
                  exchange. Our primary objective revolves around expediting the adoption of cryptocurrencies and
                  amplifying financial autonomy.
                </p>
                <p>If you're in search of a dynamic, purpose-oriented organization where possibilities for learning and
                  advancement are boundless, then GapxBit is the ideal destination for you.</p>

                <p>
                  Within GapxBit, our Customer Support division is committed to delivering unparalleled service, going
                  above and beyond for our users. Armed with expertise spanning more than 20 languages, our team
                  offers exceptional round-the-clock assistance via diverse channels including chat, email, and social
                  media. Their commitment exemplifies our resolute dedication to top-tier support, as they tirelessly
                  strive to craft industry-leading experiences for our users. Their unwavering devotion ensures that each
                  user receives personalized attention and assistance, reinforcing our core principle of being a customercentric platform.
                </p>

                <p>
                  Presently, we are actively seeking a KYC/KYB Analyst to bolster our expansion into global frontiers and
                  provide valuable support for compliance operations.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="about_2 pt-4" >
          <div className="container" >
            <div className="row" >
              <div className="col-lg-12 plicy_sec  p-0" >
                <h3>
                  Roles and Responsibilities:
                </h3>
                <ul className="list-styled" >
                  <li>  Address and review client queries pertaining to client onboarding for both individual and
                    corporate entities. </li>
                  <li>  Effectively manage personal workloads, prioritize tasks, and promptly escalate critical
                    risks/issues to management. </li>
                  <li>  In a leadership capacity, collaborate closely with the Front Office and Relationship Partner
                    Teams, aiding clients as necessary to gather essential supporting evidence for fulfilling KYC due
                    diligence. </li>
                  <li>  Collaborate closely with checkers to ensure an efficient two-eye review process for customer
                    due diligence. </li>
                  <li>  Monitor, document, and escalate any anomalous activities or AML flags. </li>
                  <li>  Participate in internal and external training initiatives centered around AML/CFT and other
                    pertinent subjects aligned with daily work requisites. </li>
                  <li>  Foster knowledge sharing by liaising with team leads within the country and region. </li>

                  <li>  Undertake general administration and ancillary tasks as required, congruent with the Company's
                    business needs. </li>

                </ul>


              </div>
            </div>
          </div>
        </section>


        <section className="about_2 pt-4" >
          <div className="container" >
            <div className="row" >
              <div className="col-lg-12  plicy_sec  p-0" >
                <h3>
                  Roles and Responsibilities:
                </h3>
                <ul className="list-styled" >
                  <li> A minimum of 3-5 years of direct experience in a KYC onboarding/Compliance role, with
                    substantial knowledge of relevant rules, regulations, and day-to-day compliance affairs. </li>
                  <li>  Proficiency in local laws, directives, regulations, and standards applicable to subject entities,
                    along with a strong understanding of upcoming virtual currency policies, is advantageous.</li>
                  <li>  Adeptness in conducting risk assessments, trigger reviews, and enhanced due diligence.</li>
                  <li>  Proficiency in compliance applications such as Thomson Reuters World-Check, Liquid, Refinitiv,
                    etc.</li>
                  <li>  Demonstrated accountability and ownership of the end-to-end client onboarding process
                    (knowledge of various entity types is a plus).</li>
                  <li>  Self-motivated with the ability to multitask and perform under pressure.</li>
                  <li>  Detail-oriented with a strong focus on controls and effective time management.</li>
                  <li>  Strong communication skills in both Japanese and English.</li>


                </ul>


              </div>
            </div>
          </div>
        </section>


        <section className="about_2 pt-4" >
          <div className="container" >
            <div className="row" >
              <div className="col-lg-12  plicy_sec p-0" >
                <h3>
                  Joining GapxBit:
                </h3>
                <ul className="list-styled mb-5" >
                  <li> Contribute to the leading blockchain ecosystem worldwide, with ample prospects for career growth </li>
                  <li>  Collaborate with a diverse, world-className team in an environment conducive to continuous learning and advancement.</li>
                  <li>  Tackle challenging, fast-paced projects in a globally oriented organization with a flat structure. </li>
                  <li> Enjoy competitive compensation and benefits </li>
                  <li>  Achieve work-life balance through flexible hours and casual attire </li>


                </ul>


                <p>
                  Discover how GapxBit embodies our core values, fostering a cohesive culture that facilitates collaboration, excellence, and personal development.
                </p>


                <p>
                  Take the step towards being a part of the Web3 revolution by applying today!

                </p>

                <p>
                  GapxBit is devoted to maintaining equal opportunity in employment. We firmly believe that a diverse   workforce is pivotal to our success
                </p>

                <p>
                  By submitting a job application, you acknowledge reading and agreeing to our Candidate Privacy Notice.
                </p>



              </div>

              <div className="container my-5">
                <div className="newsletter-content text-center ">
                  <h2>  Apply for KYC Analyst </h2>
                  <Link className="btn btn-gradient btn-lg" to="/job_apply"> Apply Now <span>  </span> </Link>
                </div>
              </div>
            </div>
          </div>
        </section>





      </div>

    </>
  );
};

export default JobDiscription;
