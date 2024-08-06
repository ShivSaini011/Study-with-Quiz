import React, { useState } from 'react'

const FAQSecurity = () => {
  const [changeScreen, setChangeScreen] = useState("main");
  return (
    <div className="col-lg-8">
      <nav aria-label="breadcrumb" className="mb-3">
        <ol className="breadcrumb  faq_breadcrumb mt-0 pb-3">
          <li className="breadcrumb-item">
            <a href="#/">Faq</a>
          </li>
          <li
            className="breadcrumb-item cursor-pointer"
            aria-current="page"
            onClick={() => {
              setChangeScreen("main");
            }}
          >
            Security
          </li>
          {changeScreen !== "main" && (
            <li className="breadcrumb-item active text-warning  cursor-pointer" aria-current="page">
              {changeScreen}
            </li>
          )}
        </ol>
        <hr />
      </nav>

      {/* Account Mangement */}
      {changeScreen === "main" && (
        <div className="faq_list">
          <a
            href="#"
            className="faq_item card text-start"
            onClick={() => {
              setChangeScreen("Account Security");
            }}
          >
            <h5 className="mb-0"> Account Security</h5>
            <i className="ri-arrow-right-line"></i>
          </a>
        </div>
      )}

      {changeScreen === "main" && (
        <div className="faq_list">
          <a
            href="#"
            className="faq_item card text-start"
            onClick={() => {
              setChangeScreen("PIN Related Security");
            }}
          >
            <h5 className="mb-0"> PIN Related Security</h5>
            <i className="ri-arrow-right-line"></i>
          </a>
        </div>
      )}

      {changeScreen === "main" && (
        <div className="faq_list">
          <a
            href="#"
            className="faq_item card text-start"
            onClick={() => {
              setChangeScreen("Other Security Tips");
            }}
          >
            <h5 className="mb-0">Other Security Tips</h5>
            <i className="ri-arrow-right-line"></i>
          </a>
        </div>
      )}


      {/* Account Security */}
      {changeScreen === "Account Security" && (
        <div className="faq " id="accordionExample">

          <div className="card p-0  ">
            <h2 className="card-header" id="headingcollapse_1">
              <button className="accordion-button p-0  collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse_1" aria-expanded="false" aria-controls="collapse_1">
                How to secure the GapxBit account?
              </button>
            </h2>
            <div id="collapse_1" className="accordion-collapse collapse" aria-labelledby="headingcollapse_1" data-bs-parent="#accordionExample">
              <div className="card-body card-body-padding-top text-align-start border-bottom ">
                <div className="faq_text" >
                  <p>Please follow the guidelines to secure your GapxBit account:</p>
                  <h6>1. Set up 2-Factor Authentication:</h6>
                  <p> Setting up Two-Factor Authentication will ensure that no-one can access your GapxBit account without obtaining both
                    your password and the second factor to your security - whether it’s your OTP or Google Authenticator.</p>
                  <h6>2. Always check your browser:</h6>
                  <p>Always make sure the browser you’re visiting is: https://coindcx.com/. If the website you’re on looks exactly like ours but
                    is even slightly different - you could be a victim of phishing and could lose control of your account. Remain vigilant!</p>
                  <h6>3. Do not share sensitive information:</h6>
                  <p>While our community managers on Telegram and our support teams regularly converse with users over chat or call, no
                    single GapxBit employee will ask for sensitive information. The most any employee will ask is your email, phone number,
                    and Support Ticket ID.</p>
                  <h6>4. Use a strong password:</h6>
                  <p>We recommend that you use a strong password for your GapxBit account. While we have the highest levels of security for
                    our platform, using an easy-to-guess password leaves you liable to “guess-hackers”.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="card  p-0 ">
            <h2 className="card-header" id="headingcollapse_2">
              <button className="accordion-button p-0 collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse_2" aria-expanded="false" aria-controls="collapse_2">
                How to beware of phishing scams?
              </button>
            </h2>
            <div id="collapse_2" className="accordion-collapse collapse" aria-labelledby="headingcollapse_2" data-bs-parent="#accordionExample">
              <div className="card-body card-body-padding-top  border-bottom">
                <div className="faq_text" >
                  <p>YProtecting Yourself from Phishing Scams: Stay Vigilant and Secure,
                    In a phishing scam, attackers attempt to deceive you by posing as trustworthy entities, aiming to obtain
                    sensitive information that can be exploited to access your devices and accounts, ultimately leading to
                    financial theft.
                    At our company, we prioritize your safety and security. It is essential for our clients to be cautious and
                    adopt good practices to avoid falling victim to these scams. Here are crucial tips to adhere to, helping
                    protect you from phishing scams:
                    We will:</p>
                  <p><strong>Never ask for your passwords: </strong>Under no circumstances should you share your passwords with anyone,
                    including us. Legitimate companies will never request this information from you.</p>
                  <p ><strong>Never request security settings changes: </strong>We will not ask you to alter or remove your security settings. Any
                    such request should be treated with suspicion..</p>
                  <p><strong> Never seek remote desktop access:</strong> We will never ask for access to your devices through remote desktop
                    access software. Refrain from granting such access unless you initiated it with trusted support personnel.
                    By being vigilant and adhering to these guidelines, you can significantly reduce the risk of falling victim to
                    phishing scams. Remember that your security is paramount, and we are committed to keeping your
                    information safe. If you ever encounter suspicious activity or have concerns, please contact our support
                    team immediately. Together, we can create a safer digital environment for everyone.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="card  p-0  ">
            <h2 className="card-header" id="headingcollapse_3">
              <button className="accordion-button p-0 collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse_3" aria-expanded="false" aria-controls="collapse_3">
                How can I add an address as a ‘Trusted Address’?
              </button>
            </h2>
            <div id="collapse_3" className="accordion-collapse collapse" aria-labelledby="headingcollapse_3" data-bs-parent="#accordionExample">
              <div className="card-body card-body-padding-top border-bottom  ">
                <div className="faq_text" >
                  <p>Follow these steps to add new addresses to your GapxBit account securely:</p>
                  <p><strong>Step 1:</strong>Log in to your GapxBit account at <a href='https://GapxBitglobal.io/'>https://GapxBitglobal.io/</a> </p>
                  <p><strong>Step 2:</strong> Click on "Security" from the drop-down menu accessed through your Profile button. </p>
                  <p><strong>Step 3:</strong>The Security page will open, and you'll find the "Address Management" section. Click on the "Manage" button for
                    Address Management. On this screen, you'll see two essential elements:
                    <strong>Security Score:</strong>
                    <p>Your current security score will be displayed. Ensure it is up-to-date to maintain account security.</p>
                    <strong>Adding Addresses for Crypto: </strong>
                    <p>You can add addresses for different cryptocurrencies, which can later be whitelisted for
                      Trusted Withdrawals from your account.</p>
                  </p>
                  <p><strong>Step 4:</strong> Click on the "Add Address" button, as indicated in the screenshot above. A pop-up will appear on your screen. Choose
                    the specific cryptocurrency for which you want to add the address since each coin has its unique blockchain address type and
                    specification.
                    Label the address: You can assign a label to the address for easy recognition. For example, "Abhishek" or any identifier that
                    helps you remember.
                    Paste the wallet address: Carefully enter the wallet address. If it belongs to a trusted person, like a friend or family member,
                    you can click on the checkbox to indicate it as trustworthy. Click on "Add Address" to proceed.
                    Please note that the address will only be added after entering your Two-Factor Authentication (2FA) code for added security.
                    You can then mark the address as a trusted one by selecting the checkbox under 'Actions.' However, the wallet will not be
                    confirmed as a Trusted Wallet until you verify it on your GapxBit registered email address.</p>
                  <p><strong>Step 5:</strong> An email will be sent to your registered email address, asking you to confirm the addition of the new address as a
                    'Trusted Address.' Access your email and follow the confirmation instructions provided.</p>
                  <p><strong>Step 6: </strong>Once confirmed, your new address will be successfully added to your GapxBit account. Your account is now updated
                    with the additional address, enhancing the security and flexibility of your crypto transactions.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="card p-0  ">
            <h2 className="card-header" id="headingcollapse_4">
              <button className="accordion-button p-0  collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse_4" aria-expanded="false" aria-controls="collapse_4">
                How can I check which devices I am currently logged in with my GapxBit Account?
              </button>
            </h2>
            <div id="collapse_4" className="accordion-collapse collapse" aria-labelledby="headingcollapse_4" data-bs-parent="#accordionExample">
              <div className="card-body card-body-padding-top  border-bottom ">
                <div className="faq_text" >
                  <p className=" ">
                    Follow these steps to check which devices are logged in to your GapxBit Account:
                  </p>
                  <ol>
                    <li>1. Login to your GapxBit Account App.</li>
                    <li>2. Click the top right profile icon on the screen and select ‘Security’.</li>
                    <li>3. Click on ‘Verified Devices’ to see which all devices are logged in with GapxBitX Account..</li>
                  </ol>
                  <p>Note - If you find any suspicious device in the list, we recommend you to block the device immediately. For
                    extreme action, disable the account and contact customer support immediately.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="card p-0  ">
            <h2 className="card-header" id="headingcollapse_5">
              <button className="accordion-button p-0  collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse_5" aria-expanded="false" aria-controls="collapse_5">
                How to keep your funds secure on GapxBit?
              </button>
            </h2>
            <div id="collapse_5" className="accordion-collapse collapse" aria-labelledby="headingcollapse_5" data-bs-parent="#accordionExample">
              <div className="card-body card-body-padding-top  border-bottom ">
                <div className="faq_text" >
                  <p className="mb-0">
                    For existing users of GapxBit who have already secured their accounts with a security rating of 4/4, their funds are fully
                    protected.
                    For existing users who haven't secured their GapxBit accounts or new users joining GapxBit, there are multiple ways to
                    enhance security for your GapxBit accounts.
                  </p>
                  <strong>Strong Password: </strong>
                  <p>Ensure your account is secured with a strong and unique password. Avoid using easily guessable passwords
                    like "0123456789," birthdays, or school names. Keep your password confidential and change it immediately if you suspect
                    any unauthorized access.</p>

                  <strong>Enable 2FA (Two-Factor Authentication): </strong>
                  <p>Strengthen your account's security by enabling 2FA. Access "Account  Security  2
                    Step Verification" and follow the steps to complete the 2FA setup. If you have any questions or concerns, feel free to reach
                    out to Customer Support via "Account Help & Support  Security."</p>

                  <strong>Use a Separate Withdrawal Password:</strong>
                  <p>For additional protection, set a strong withdrawal password different from your login
                    password. This precaution ensures that your funds remain secure even if unauthorized access is gained to your account. A
                    unique withdrawal password prevents unauthorized transfers to other addresses in the event of a hack.</p>

                  <strong>Manage Trusted Addresses:</strong>
                  <p>On GapxBit, you have the option to manage a list of addresses that you trust for sending your
                    cryptocurrencies to have better control over your crypto transactions.</p>
                  <br />
                  <p>By implementing these security measures, you can significantly enhance the safety of your GapxBit accounts, safeguarding
                    your funds and assets. Stay vigilant and proactive in protecting your digital assets from potential threats.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="card p-0  ">
            <h2 className="card-header" id="headingcollapse_6">
              <button className="accordion-button p-0  collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse_6" aria-expanded="false" aria-controls="collapse_6">
                How to know if an email or website is from GapxBit?
              </button>
            </h2>
            <div id="collapse_6" className="accordion-collapse collapse" aria-labelledby="headingcollapse_6" data-bs-parent="#accordionExample">
              <div className="card-body card-body-padding-top  border-bottom ">
                <div className="faq_text" >
                  <p className="mb-0">
                    Official GapxBit emails and websites will only appear on or come from our verified domain such as coindcx.com. You can view
                    the email’s full headers to find out if it came from a forged address:
                  </p>
                  <h6>Gmail</h6>
                  <p>While viewing the email, click “…” (More) in the upper right corner."
                    Click 'show original'.
                    Check the email address and domain name.</p>
                  <h6>Microsoft Outlook</h6>
                  <p>Windows or web
                    Double-click the email to open it in a new window.
                    Select the 'File tab' and click 'Properties'.
                    Web only: click Message Details (an envelope with a small document over it)
                    Check the email address under From.</p>
                  <h6>Apple Mail</h6>
                  <p>Right-click the email and select 'View Source' from the pop-up menu.
                    Check the email address under From.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="card p-0  ">
            <h2 className="card-header" id="headingcollapse_7">
              <button className="accordion-button p-0  collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse_7" aria-expanded="false" aria-controls="collapse_7">
                What should I do if amount is withdrawn without my consent?
              </button>
            </h2>
            <div id="collapse_7" className="accordion-collapse collapse" aria-labelledby="headingcollapse_7" data-bs-parent="#accordionExample">
              <div className="card-body card-body-padding-top  border-bottom ">
                <div className="faq_text" >
                  <p className="">
                    If money is taken out without your permission, please get in touch with our support team and they will
                    assist you further.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="card p-0  ">
            <h2 className="card-header" id="headingcollapse_8">
              <button className="accordion-button p-0  collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse_8" aria-expanded="false" aria-controls="collapse_8">
                Are my funds safe on GapxBit?
              </button>
            </h2>
            <div id="collapse_8" className="accordion-collapse collapse" aria-labelledby="headingcollapse_8" data-bs-parent="#accordionExample">
              <div className="card-body card-body-padding-top  border-bottom ">
                <div className="faq_text" >
                  <p className="">
                    Rest assured, your funds are exceptionally secure with us at GapxBit. We have implemented industry-
                    leading security measures to safeguard your assets. Our dedicated team continuously audits and enhances
                    existing protocols, ensuring our security remains up-to-date and impenetrable.
                  </p>
                  <p>GapxBit employs a robust security infrastructure, including geographically distributed cold wallets, DDoS
                    protection, regular stress testing, and multi-signature authentications. These world-className security practices
                    are in place to provide you with the utmost protection.</p>
                  <p>For detailed insights into our security measures, you can visit <a href='https://tacbits.io/security' target='_blank' >https://tacbits.io/security</a>. At GapxBit, we are
                    committed to creating a safe and trustworthy environment for all our users.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="card p-0  ">
            <h2 className="card-header" id="headingcollapse_9">
              <button className="accordion-button p-0  collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse_9" aria-expanded="false" aria-controls="collapse_8">
                How to spot a phishing scam?
              </button>
            </h2>
            <div id="collapse_9" className="accordion-collapse collapse" aria-labelledby="headingcollapse_9" data-bs-parent="#accordionExample">
              <div className="card-body card-body-padding-top  border-bottom ">
                <div className='row' >
                  <div className='col-lg-8' >
                    <div className="faq_text" >
                      <p className="">
                        Protecting Yourself from Phishing Scams: Stay Informed and Stay Safe
                        In a phishing scam, malicious attackers impersonate trustworthy entities to deceive you into revealing sensitive information,
                        aiming to gain access to your devices and accounts to steal your money. At our company, we prioritize your security, and it is
                        crucial for our clients to exercise caution and adopt best practices to avoid falling victim to these scams.
                        Here are important tips to follow for protection against phishing scams:
                      </p>
                      <strong>Never Share Passwords:</strong>
                      <p>We will never ask you for your passwords. Please refrain from sharing your passwords with anyone,
                        including us. Legitimate companies will never request your passwords.</p>

                      <strong>Security Settings:</strong>
                      <p>We will never ask you to remove or modify your security settings. If you receive any such requests, treat
                        them with suspicion and disregard them.</p>
                      <strong>Remote Desktop Access:</strong>
                      <p>We will never request access to your devices through remote desktop access software. Do not grant
                        access unless you initiated it with trusted support personnel.</p>
                      <br />
                      <p>By adhering to these guidelines, you can significantly reduce the risk of falling prey to phishing scams. Your vigilance and
                        awareness play a vital role in ensuring the safety of your personal and financial information. If you ever encounter suspicious
                        activity or have concerns, please reach out to our customer support team for assistance. Together, we can create a secure
                        digital environment for all our clients.</p>
                    </div>
                  </div>
                  <div className='col-lg-4' >
                    <table className='table  table ' >
                      <thead>
                        <tr>
                          <th>
                            Cryptocurrency
                          </th>
                          <th>Feature Name</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>XRP</td>
                          <td>Tag</td>
                        </tr>
                        <tr>
                          <td>XEM</td>
                          <td>Message</td>
                        </tr>
                        <tr>
                          <td>EOS</td>
                          <td>Memo</td>
                        </tr>
                        <tr>
                          <td>BNB</td>
                          <td>Memo</td>
                        </tr>
                        <tr>
                          <td>ATOM</td>
                          <td>Memo</td>
                        </tr>
                        <tr>
                          <td>IOST</td>
                          <td>Memo</td>
                        </tr>
                        <tr>
                          <td>XLM</td>
                          <td>Memo</td>
                        </tr>
                        <tr>
                          <td>ABBC</td>
                          <td>Memo</td>
                        </tr>
                        <tr>
                          <td>ANKR</td>
                          <td>Memo</td>
                        </tr>
                        <tr>
                          <td>CHZ</td>
                          <td>Memo</td>
                        </tr>
                        <tr>
                          <td>RUNE</td>
                          <td>Memo</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="card p-0  ">
            <h2 className="card-header" id="headingcollapse_10">
              <button className="accordion-button p-0  collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse_10" aria-expanded="false" aria-controls="collapse_8">
                How to beware of email and telephone scams?
              </button>
            </h2>
            <div id="collapse_10" className="accordion-collapse collapse" aria-labelledby="headingcollapse_10" data-bs-parent="#accordionExample">
              <div className="card-body card-body-padding-top  border-bottom ">
                <div className="faq_text" >
                  <p className="">
                    At GapxBit, we want to ensure the safety and security of our users. Please be aware that we will never
                    initiate personal phone calls to our customers. If you come across any phone number claiming to be
                    GapxBit support, please note that it is a scam. We urge you not to call such numbers
                  </p>
                  <p>If you encounter any suspicious activity or believe you have encountered a scam, please do not hesitate to
                    inform us. Kindly submit a support ticket with all relevant details regarding the scam. This will help us take
                    appropriate measures to address the issue and protect our community from potential fraud.</p>
                  <p>Your cooperation in reporting such incidents is vital in maintaining a secure and trustworthy platform for all
                    our users. Should you have any concerns or questions, please reach out to our official support channels for
                    assistance. We are here to assist you and ensure a safe trading experience.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="card p-0  ">
            <h2 className="card-header" id="headingcollapse_11">
              <button className="accordion-button p-0  collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse_11" aria-expanded="false" aria-controls="collapse_8">
                I have received a notification indicating that my funds were transferred from one wallet to another. Should I be concerned?
              </button>
            </h2>
            <div id="collapse_11" className="accordion-collapse collapse" aria-labelledby="headingcollapse_11" data-bs-parent="#accordionExample">
              <div className="card-body card-body-padding-top  border-bottom ">
                <div className="faq_text" >
                  <p className="">
                    Have you received a blockchain notification about your funds being transferred from one wallet to another,
                    but you don't see any change in your holdings?
                  </p>
                  <p>If so, there's no need to worry, as this is a standard procedure.</p>
                  <p>As part of routine maintenance and security checks, we regularly conduct sweeping exercises. In this
                    particular case, the funds have been transferred from one GapxBit wallet to another. As a user, you won't
                    notice any significant difference in your wallet as a result of this transfer. Rest assured that your funds are
                    safe and secure throughout this process.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="card p-0  ">
            <h2 className="card-header" id="headingcollapse_12">
              <button className="accordion-button p-0  collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse_12" aria-expanded="false" aria-controls="collapse_8">
                How does two-factor authentication (2FA) for Login work?
              </button>
            </h2>
            <div id="collapse_12" className="accordion-collapse collapse" aria-labelledby="headingcollapse_12" data-bs-parent="#accordionExample">
              <div className="card-body card-body-padding-top  border-bottom ">
                <div className="faq_text" >
                  <p className="">
                    1. Login using the button on the top right-hand side of the home screen or directly at <a href='https://GapxBitglobal.io/login.' target='_blank'>https://GapxBitglobal.io/login.</a>
                  </p>
                  <p>2.On the Login page, please fill the login credentials and click on 'Sign In'.</p>
                  <p>3.Enter the 6-digit password displayed on your Google Authenticator App on your mobile device.</p>
                  <p>4.You are logged in.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="card p-0  ">
            <h2 className="card-header" id="headingcollapse_13">
              <button className="accordion-button p-0  collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse_13" aria-expanded="false" aria-controls="collapse_8">
                Why should I use 2FA security?
              </button>
            </h2>
            <div id="collapse_13" className="accordion-collapse collapse" aria-labelledby="headingcollapse_13" data-bs-parent="#accordionExample">
              <div className="card-body card-body-padding-top  border-bottom ">
                <div className="faq_text" >
                  <p className="">
                    Two-factor Authentication (2FA) provides an additional layer of security for your GapxBit account, offering
                    the following benefits:
                  </p>
                  <ol>
                    <li>1.Ensures that only you can access your account.</li>
                    <li>2.Ensures that only you can perform essential account actions like depositing, withdrawing, or trading.</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>

        </div>
      )}


      {/* PIN Related Security Tab */}
      {changeScreen === "PIN Related Security" && (
        <div className="faq " id="accordionExample">

          <div className="card p-0  ">
            <h2 className="card-header" id="headingcollapse_1">
              <button className="accordion-button p-0  collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse_1" aria-expanded="false" aria-controls="collapse_1">
                I have forgotten my PIN. What to do?
              </button>
            </h2>
            <div id="collapse_1" className="accordion-collapse collapse" aria-labelledby="headingcollapse_1" data-bs-parent="#accordionExample">
              <div className="card-body card-body-padding-top text-align-start border-bottom ">
                <div className="faq_text" >
                  <p>Well, it happens to all of us once in a while. To reset your PIN, follow these simple steps:</p>
                  <p> Go to [Account] and click [Security].</p>
                  <p> Select [Create Login PIN] and [Continue].</p>
                  <p>That’s it. It’s done!</p>

                </div>
              </div>
            </div>
          </div>

          <div className="card  p-0 ">
            <h2 className="card-header" id="headingcollapse_2">
              <button className="accordion-button p-0 collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse_2" aria-expanded="false" aria-controls="collapse_2">
                Is it mandatory to create a PIN for my account?
              </button>
            </h2>
            <div id="collapse_2" className="accordion-collapse collapse" aria-labelledby="headingcollapse_2" data-bs-parent="#accordionExample">
              <div className="card-body card-body-padding-top  border-bottom">
                <div className="faq_text" >
                  <p>No, currently it is not mandatory to create a PIN for an account. However, we strongly encourage you to do
                    so for added security.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      )}

      {/* Other Security Tips Tab */}
      {changeScreen === "Other Security Tips" && (
        <div className="faq " id="accordionExample">

          <div className="card p-0  ">
            <h2 className="card-header" id="headingcollapse_1">
              <button className="accordion-button p-0  collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse_1" aria-expanded="false" aria-controls="collapse_1">
                What are the general security practices that I should follow?
              </button>
            </h2>
            <div id="collapse_1" className="accordion-collapse collapse" aria-labelledby="headingcollapse_1" data-bs-parent="#accordionExample">
              <div className="card-body card-body-padding-top text-align-start border-bottom ">
                <div className="faq_text" >
                  <ol>To ensure the utmost security for your GapxBit account, please follow these guidelines:
                    <li>1. Register on GapxBit and complete the KYC requirements.</li>
                    <li>2. Enable 2FA on your GapxBit Android or IOS apps, preferably using app-based 2FA like Google Authenticator.</li>
                    <li>3. Avoid leaving your mobile device unattended.</li>
                    <li>4. Always log out of your GapxBit account when using the same device shared by multiple people.</li>
                    <li>5. Never share your password with anyone. GapxBit will never call or email you to request your password.</li>
                    <li>6. Consider using a password manager to generate and securely store unique passwords for all your online accounts.</li>
                    <li>7. Set up additional authentication methods such as screen lock, fingerprint, or face recognition on your mobile for added security.</li>
                    <li>8. Keep your device's Operating System (OS) updated regularly to receive the latest security fixes.</li>
                    <li>9. Avoid automatically connecting to unfamiliar networks, and turn off WiFi when not in use.</li>
                    <li>10. Download apps only from your device's official store, avoiding untrusted sources.</li>
                    <li>11. Be cautious of phishing scams where attackers impersonate trustworthy entities to obtain sensitive information. Secure your
                      email, as it is essential for account verification and communication.</li>
                    <li>12. Be wary of SMS messages attempting to extract personal information (smishing) or similar tactics on platforms like WhatsApp,
                      Facebook, Instagram, and Twitter.</li>
                    <li>13. If you receive suspicious emails or SMS appearing to be from GapxBit, forward them to email ID to verify authenticity.</li>
                    <li>14. Keep your cryptocurrency holdings private; avoid disclosing them on public forums or channels.</li>
                    <li>15. Never share account details like registered email ID, mobile number, or bank information, unless asked by GapxBit support
                      through official channels.</li>
                    <li>16. Download apps only from official stores like Google Play; pirated apps may contain harmful cryptojacking scripts.</li>
                    <li>17. Install and regularly update mobile antivirus software for added protection.</li>
                    <li>18. Remember, prioritize security, stay informed, and regularly assess potential weak points to ensure the safety of your digital
                      assets.</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>

          <div className="card  p-0 ">
            <h2 className="card-header" id="headingcollapse_2">
              <button className="accordion-button p-0 collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse_2" aria-expanded="false" aria-controls="collapse_2">
                Tips for staying safe from scams
              </button>
            </h2>
            <div id="collapse_2" className="accordion-collapse collapse" aria-labelledby="headingcollapse_2" data-bs-parent="#accordionExample">
              <div className="card-body card-body-padding-top  border-bottom">
                <div className="faq_text" >
                  <p>We are continuously working to alert our users about potential frauds and scams through our official
                    support channels. To further protect yourself, please follow these simple steps:</p>
                  <ul>• GapxBit personnel will NEVER reach out to you personally or request any payment for assistance. If you
                    receive such messages in the future, DO NOT respond and consider blocking these scammers.</ul>
                  <ul>• Always ensure that you are interacting with our official team by verifying the blue tick mark on our
                    Twitter, Instagram, or Telegram channel. Alternatively, you can communicate with us through support
                    tickets raised on our official website or GapxBit applications (Android/iOS).</ul>
                  <ul>• Please note that GapxBit does not provide official support on Instagram, Facebook, or Telegram. Always
                    submit a support ticket for any issues and interact only with our team on official social media pages.</ul>
                  <ul>• You can also contact us through our official support channels on Telegram and Twitter for additional
                    assistance and information.</ul>
                  <p>By following these guidelines, you can further safeguard yourself from potential scams and ensure a secure
                    experience on our platform. Your safety is our utmost priority, and we remain committed to providing a
                    trusted environment for all our users.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="card  p-0  ">
            <h2 className="card-header" id="headingcollapse_3">
              <button className="accordion-button p-0 collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse_3" aria-expanded="false" aria-controls="collapse_3">
                What can I do to avoid a scam?
              </button>
            </h2>
            <div id="collapse_3" className="accordion-collapse collapse" aria-labelledby="headingcollapse_3" data-bs-parent="#accordionExample">
              <div className="card-body card-body-padding-top border-bottom  ">
                <div className="faq_text" >
                  <p>As the interest in cryptocurrencies and digital assets grows, so does the number of scams. We urge our users to remain
                    vigilant and avoid sharing any personal details.</p>
                  <p>Here are some important guidelines to stay safe:</p>
                  <ol>
                    <li>• GapxBit does not provide official support on Instagram or Facebook. Always ensure you are interacting with our official
                      team by verifying the blue tick mark on our Twitter, Instagram, or Telegram channel, or by using support tickets raised on our
                      official website or GapxBit applications (Android/iOS).</li>
                    <li>• Never share personal or financial information in response to unexpected requests. GapxBit personnel will never call, email,
                      or text you to ask for personal information, bank account details, or credit card numbers.</li>
                    <li>• Be cautious of suspicious texts, pop-up windows, or links and attachments in emails. Delete them immediately. When in
                      doubt, verify the identity of the contact by confirming the email is sent from our official domain @GapxBit.io or from our
                      official blue tick marked channels on Twitter, Instagram, and Telegram.</li>
                    <li>• GapxBit will never rush you into making a decision. We encourage you to take your time and not feel pressured by anyone
                      claiming to be from GapxBit customer service, asking for immediate information or payment. They may be potential
                      scammers.</li>
                  </ol>
                  <p>Before taking any action, take the time to respond and conduct checks and verifications. Consult someone you trust if
                    needed. You can always reach out to us through support tickets raised on our official website or GapxBit applications
                    (Android/iOS) or interact with the GapxBit team on our official social media pages.
                    By following these precautions and exercising caution, you can help protect yourself from scams and ensure a secure
                    experience in the world of cryptocurrencies and digital assets. Your safety is our utmost concern, and we remain committed
                    to providing a trusted platform for all our users.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="card p-0  ">
            <h2 className="card-header" id="headingcollapse_4">
              <button className="accordion-button p-0  collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse_4" aria-expanded="false" aria-controls="collapse_4">
                How to report a scam to GapxBit?
              </button>
            </h2>
            <div id="collapse_4" className="accordion-collapse collapse" aria-labelledby="headingcollapse_4" data-bs-parent="#accordionExample">
              <div className="card-body card-body-padding-top  border-bottom ">
                <div className="faq_text" >
                  <p className=" ">
                    If you think you noticed GapxBit brand name used incorrectly anywhere, please inform us immediately by
                    raising a support ticket on our official website or GapxBit applications (Android/iOS)
                  </p>
                  <p>You can also reach us through our official support channels for Telegram and Twitter, or write to us at
                    <a href='mailto:support@GapxBitglobal.io' target='_blank'>support@GapxBitglobal.io</a> </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      )}

    </div>
  );
}

export default FAQSecurity
