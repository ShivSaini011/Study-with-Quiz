import React, { useEffect } from 'react'

const LawEnforcement = () => {

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    return (
        <>
            <section className="inner-page-banner">
                <div className="container">
                    <div className="inner text-center">
                        <h1 className="title"> Law Enforcement Guidelines  </h1>
                        <nav className="mt-4">
                            <ol className="breadcrumb justify-content-center">
                                <li className="breadcrumb-item">
                                    <a href="/">Home</a>
                                </li>
                                <li className="breadcrumb-item active" aria-current="page">
                                    Law Enforcement Guidelines
                                </li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </section>

            <section className="pb-90">
                <div className="container">
                    <div className="row">
                        <div className="col-md-10 m-auto">
                            <div className="create-item-wrapper plicy_sec">

                                <strong> Dear GapxBit Users,</strong>
                                <br />
                                <br />
                                <p>These operational guidelines are designed to assist law enforcement officials in their efforts to secure 'GapxBit' cooperation regarding user information and assets. Please be aware that these guidelines are
                                    subject to change at any time and at the sole discretion of GapxBit. </p>
                                <p>
                                    Before seeking user information, you must obtain approval to access the GapxBit Law Enforcement
                                    Online Request System (LEORS). Access requests are typically reviewed within 15-20 business days,
                                    although certain cases with increased complexity or volume may require more time
                                </p>
                                <p>
                                    All requests and official documents must be submitted in English or accompanied by a certified English translation. GapxBit will not process requests in languages other than English.
                                </p>
                                <p>
                                    <strong>
                                        IMPORTANT: &nbsp;
                                    </strong> This system is exclusively available to governmental entities or juridical bodies authorized to obtain evidence in connection with official legal proceedings under applicable laws. By requesting access, you acknowledge and confirm that you are an official of a duly authorized governmental or judicial body. GapxBit retains the right to decline processing unauthorized requests, and such unauthorized requests may lead to prosecution and referral to appropriate enforcement agencies.</p>
                                <p>
                                    <strong>
                                        Request for User Information:  &nbsp;
                                    </strong><br />
                                    Authorized law enforcement officials may submit user information requests through LEORS once access has been granted.
                                    <br />
                                    Requests for user information must comply with applicable laws. The disclosure of user information requires a warrant, court order, or its local equivalent.
                                    <br />
                                    In some cases, we may require additional information to ensure that the release of information
                                    complies with our obligations related to information security and data protection.
                                </p>
                                <p className="mb-0" >
                                    <strong>
                                        IMPORTANT:  &nbsp;
                                    </strong>
                                    Unless explicitly specified in a formal legal request, such as a warrant or court order, we
                                    may notify the relevant user before disclosing any personal data.
                                </p>
                                <br />
                                <hr />
                                <br />
                                <p> <strong>Information Preservation:</strong><br />
                                    <span className="d-block ms-3" >In support of official judicial investigations, we will take steps to preserve user information for a period of 60 days from the date of our receipt of a formal legal request. If an extension of the preservation period is necessary, formal preservation extension requests may be submitted through the LEORS System.
                                    </span>
                                </p>
                                <p> <strong>Asset Preservation and Freezing Orders ('Orders'): </strong><br />
                                    <span className="d-block ms-3" >
                                        Asset Preservation and Freezing Orders ('Orders')
                                        Upon receipt of a valid Order(s) requested by an authorized law enforcement agency or judicial body, we may take necessary actions to suspend and freeze a user's account.
                                        <br />
                                        ALL Order(s) requests must explicitly state the duration for which restrictions on the user's account should remain in effect.
                                        <br />
                                        We may suspend and freeze user accounts for a maximum period of 30 days, unless otherwise specified in the Order(s). If no explicit instructions are provided regarding the suspension period, we will proceed to lift all restrictions on the account.
                                    </span>
                                </p>
                                <p> <strong>Asset Recovery:</strong><br />
                                    <span className="d-block ms-3" >
                                        We will exclusively comply with lawful decisions from a competent judicial body (e.g., Court Order) regarding the return of user assets subject to legal proceedings. We do not acknowledge requests for asset return or recovery made solely by law enforcement agencies.
                                        <br />
                                        To verify the identity of authorized officials handling asset returns, we will require official documents. Detailed instructions will be provided before the return of assets.
                                    </span>
                                </p>
                                <p> <strong>Notes:</strong><br />
                                    <span className="d-block ms-3" >
                                        Acceptance of law enforcement requests through LEORS is provided for convenience and does not waive any objections, including those related to jurisdiction or improper service.
                                        <br />
                                        We will not review or respond to requests sent by non-law enforcement officials through LEORS.
                                        <br />
                                        Compliance with law enforcement requests does not waive any rights or arguments that GapxBit may have, including disputing the jurisdiction of respective authorities.
                                        <br />
                                        GapxBit may independently review the validity of information and documents received from LEORS and,at its sole discretion, assess whether compliance contradicts GapxBit' obligations to its users under the User Agreement, Privacy Policy, relevant Legal Documents, and applicable laws.
                                        <br />
                                        Any references to processing time are provided for informational purposes only, and GapxBit does not guarantee a response within the specified period.
                                    </span>
                                </p>
                                <hr />
                                <br />
                                <p>
                                    Thank you for your understanding and cooperation
                                </p>
                                <p>
                                    Sincerely,
                                </p>
                                <p>
                                    <strong>GapxBit Legal Team </strong>
                                </p>
                            </div>

                        </div>

                    </div>
                </div>
            </section>

        </>
    )
}

export default LawEnforcement
