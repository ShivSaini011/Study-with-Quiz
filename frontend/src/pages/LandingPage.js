import React from "react";
import "./landingpage.css";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <section>
        <main className="main-wrapper">
          <header className="section_header position-relative">
            <div className="header_viewport-80">
              <div className="padding-global">
                <div className="container-medium">
                  <div className="padding-section-medium">
                    <div className="text-align-center">
                      <h1 className="text-color-white">
                        <span className="text-color-hero-gradient">
                          Achieve mastery
                        </span>
                        <br />
                        through challenge
                      </h1>
                      <div className="spacing-block padding-small-plus"></div>
                      <p className="text-size-large">
                      Elevate your development skills by engaging in challenges with peers on coding exercises that continuously push your programming practice.
                      </p>
                      <div className="spacing-block padding-medium"></div>
                      <div className="header-content">
                        <div className="search-bar">
                          <input
                            type="text"
                            placeholder="Search our tutorials, e.g., HTML"
                          />
                          <button className="button is-large w-button">
                            Search
                          </button>
                        </div>
                        <a href="/">Not Sure Where To Begin?</a>
                      </div>
                      <div className="button-group is-center">
                        <a
                          href="/signup"
                          className="button is-large w-button"
                        >
                          Get Started
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="header_background-image-wrapper">
                    <img
                      src="/images/png2.png"
                      loading="lazy"
                      alt=""
                      className="header_background-image"
                    />
                    <div className="header_floating-langs-grid">
                      <div
                        id="w-node-_14e52e11-43e0-3210-1bc7-d3cf2ef95503-612cf017"
                        className="header_floating-langs-item-z is-depth-minus-2"
                      >
                        <div className="header_floating-langs-item-x-y is-blank-outline"></div>
                      </div>
                      <div
                        id="w-node-_17e64582-7d69-b248-8d0f-53d0682e6e94-612cf017"
                        className="header_floating-langs-item-z is-depth-minus-2"
                      >
                        <div className="header_floating-langs-item-x-y is-blank-bright"></div>
                      </div>
                      <div
                        id="w-node-_5f6e5bd7-284f-f405-af30-bcf3832825d4-612cf017"
                        className="header_floating-langs-item-z is-depth-plus-1"
                      >
                        <div className="header_floating-langs-item-x-y">
                          <div className="header_floating-langs-icon w-embed">
                            <svg
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <g clipPath="url(#clip0_23_1357)">
                                <path
                                  d="M0 0V24H24V0H0ZM13.0607 18.7179C13.0607 21.0536 11.6893 22.1196 9.69107 22.1196C7.88571 22.1196 6.84107 21.1875 6.30536 20.0571L8.14286 18.9482C8.49643 19.575 8.81786 20.1054 9.59464 20.1054C10.3339 20.1054 10.8054 19.8161 10.8054 18.6857V11.0196H13.0607V18.7179ZM18.3964 22.1196C16.3018 22.1196 14.9464 21.1232 14.2875 19.8161L16.125 18.7554C16.6071 19.5429 17.2393 20.1268 18.3482 20.1268C19.2804 20.1268 19.8804 19.6607 19.8804 19.0125C19.8804 18.2411 19.2696 17.9679 18.2357 17.5125L17.6732 17.2714C16.0446 16.5804 14.9679 15.7071 14.9679 13.8696C14.9679 12.1768 16.2589 10.8911 18.2679 10.8911C19.7036 10.8911 20.7321 11.3893 21.4714 12.6964L19.7143 13.8214C19.3286 13.1304 18.9107 12.8571 18.2625 12.8571C17.6036 12.8571 17.1857 13.275 17.1857 13.8214C17.1857 14.4964 17.6036 14.7696 18.5732 15.1929L19.1357 15.4339C21.0536 16.2536 22.1304 17.0946 22.1304 18.9804C22.1304 21.0054 20.5339 22.1196 18.3964 22.1196Z"
                                  fill="currentcolor"
                                ></path>
                              </g>
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div
                        id="w-node-_39ecaeba-6f6d-99bc-cfdf-37f1c58b4fb7-612cf017"
                        className="header_floating-langs-item-z"
                      >
                        <div className="header_floating-langs-item-x-y is-blank-dull"></div>
                      </div>
                      <div
                        id="w-node-_643b8cde-a3a8-acb2-791b-1686966ea547-612cf017"
                        className="header_floating-langs-item-z is-depth-minus-1"
                      >
                        <div className="header_floating-langs-item-x-y">
                          <div className="header_floating-langs-icon w-embed">
                            <svg viewBox="0 0 128 128">
                              <path
                                fill="currentcolor"
                                d="M2 63.91v62.5h125v-125H2zm100.73-5a15.56 15.56 0 017.82 4.5 20.58 20.58 0 013 4c0 .16-5.4 3.81-8.69 5.85-.12.08-.6-.44-1.13-1.23a7.09 7.09 0 00-5.87-3.53c-3.79-.26-6.23 1.73-6.21 5a4.58 4.58 0 00.54 2.34c.83 1.73 2.38 2.76 7.24 4.86 8.95 3.85 12.78 6.39 15.16 10 2.66 4 3.25 10.46 1.45 15.24-2 5.2-6.9 8.73-13.83 9.9a38.32 38.32 0 01-9.52-.1A23 23 0 0180 109.19c-1.15-1.27-3.39-4.58-3.25-4.82a9.34 9.34 0 011.15-.73l4.6-2.64 3.59-2.08.75 1.11a16.78 16.78 0 004.74 4.54c4 2.1 9.46 1.81 12.16-.62a5.43 5.43 0 00.69-6.92c-1-1.39-3-2.56-8.59-5-6.45-2.78-9.23-4.5-11.77-7.24a16.48 16.48 0 01-3.43-6.25 25 25 0 01-.22-8c1.33-6.23 6-10.58 12.82-11.87a31.66 31.66 0 019.49.26zm-29.34 5.24v5.12H57.16v46.23H45.65V69.26H29.38v-5a49.19 49.19 0 01.14-5.16c.06-.08 10-.12 22-.1h21.81z"
                              ></path>
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div
                        id="w-node-f0615924-d1eb-c90c-241f-0f8224bb2502-612cf017"
                        className="header_floating-langs-item-z"
                      >
                        <div className="header_floating-langs-item-x-y">
                          <div className="header_floating-langs-icon w-embed">
                            <svg viewBox="0 0 128 128">
                              <path
                                d="M117.5 33.5l.3-.2c-.6-1.1-1.5-2.1-2.4-2.6L67.1 2.9c-.8-.5-1.9-.7-3.1-.7-1.2 0-2.3.3-3.1.7l-48 27.9c-1.7 1-2.9 3.5-2.9 5.4v55.7c0 1.1.2 2.3.9 3.4l-.2.1c.5.8 1.2 1.5 1.9 1.9l48.2 27.9c.8.5 1.9.7 3.1.7 1.2 0 2.3-.3 3.1-.7l48-27.9c1.7-1 2.9-3.5 2.9-5.4V36.1c.1-.8 0-1.7-.4-2.6zm-53.5 70c-21.8 0-39.5-17.7-39.5-39.5S42.2 24.5 64 24.5c14.7 0 27.5 8.1 34.3 20l-13 7.5C81.1 44.5 73.1 39.5 64 39.5c-13.5 0-24.5 11-24.5 24.5s11 24.5 24.5 24.5c9.1 0 17.1-5 21.3-12.4l12.9 7.6c-6.8 11.8-19.6 19.8-34.2 19.8zM115 62h-3.2l-.9 4h4.1v5h-5l-1.2 6h-4.9l1.2-6h-3.8l-1.2 6h-4.8l1.2-6H94v-5h3.5l.9-4H94v-5h5.3l1.2-6h4.9l-1.2 6h3.8l1.2-6h4.8l-1.2 6h2.2v5zm-12.7 4h3.8l.9-4h-3.8z"
                                fill="currentcolor"
                              ></path>
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div
                        id="w-node-dbc4353f-77da-722c-6cab-d4c70ccf7a2d-612cf017"
                        className="header_floating-langs-item-z is-depth-minus-2"
                      >
                        <div className="header_floating-langs-item-x-y is-blank-dull"></div>
                      </div>
                      <div
                        id="w-node-_5123c58c-5be1-cd39-8122-7372ca6a4920-612cf017"
                        className="header_floating-langs-item-z is-depth-minus-2"
                      >
                        <div className="header_floating-langs-item-x-y">
                          <div className="header_floating-langs-icon w-embed">
                            <svg viewBox="0 0 128 128">
                              <path
                                d="M125.54 26.23a28.78 28.78 0 00-2.65-7.58 28.84 28.84 0 00-4.76-6.32 23.42 23.42 0 00-6.62-4.55 27.27 27.27 0 00-7.68-2.53c-2.65-.51-5.56-.51-8.21-.76H30.25a45.46 45.46 0 00-6.09.51 21.81 21.81 0 00-5.82 1.52c-.53.25-1.32.51-1.85.76a33.82 33.82 0 00-5 3.28c-.53.51-1.06.76-1.59 1.26a22.41 22.41 0 00-4.76 6.32 23.61 23.61 0 00-2.65 7.58 78.47 78.47 0 00-.79 7.83v60.39a39.32 39.32 0 00.79 7.83 28.78 28.78 0 002.65 7.58 28.84 28.84 0 004.76 6.32 23.42 23.42 0 006.62 4.55 27.27 27.27 0 007.68 2.53c2.65.51 5.56.51 8.21.76h63.22a45.08 45.08 0 008.21-.76 27.27 27.27 0 007.68-2.53 30.13 30.13 0 006.62-4.55 22.41 22.41 0 004.76-6.32 23.61 23.61 0 002.65-7.58 78.47 78.47 0 00.79-7.83V34.06a39.32 39.32 0 00-.8-7.83zm-18.79 75.54C101 91 90.37 94.33 85 96.5c-11.11 6.13-26.38 6.76-41.75.47A64.53 64.53 0 0113.84 73a50 50 0 0010.85 6.32c15.87 7.1 31.73 6.61 42.9 0-15.9-11.66-29.4-26.82-39.46-39.2a43.47 43.47 0 01-5.29-6.82c12.16 10.61 31.5 24 38.38 27.79a271.77 271.77 0 01-27-32.34 266.8 266.8 0 0044.47 34.87c.71.38 1.26.7 1.7 1a32.71 32.71 0 001.21-3.51c3.71-12.89-.53-27.54-9.79-39.67C93.25 33.81 106 57.05 100.66 76.51c-.14.53-.29 1-.45 1.55l.19.22c10.6 12.63 7.67 26.02 6.35 23.49z"
                                fill="currentcolor"
                              ></path>
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div
                        id="w-node-_6c9a1a23-9933-4ad4-c3f8-58320d525258-612cf017"
                        className="header_floating-langs-item-z"
                      >
                        <div className="header_floating-langs-item-x-y is-blank-dull"></div>
                      </div>
                      <div
                        id="w-node-_73dbb1ad-85da-45ba-eb23-f9408cc7bf0c-612cf017"
                        className="header_floating-langs-item-z is-depth-minus-1 is-faded-mobile"
                      >
                        <div className="header_floating-langs-item-x-y">
                          <div className="header_floating-langs-icon w-embed">
                            <svg
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M2.09177 10.2804C2.0462 10.2804 2.03495 10.2575 2.05764 10.2236L2.29633 9.91666C2.31883 9.88254 2.37583 9.85985 2.4212 9.85985H6.47814C6.5237 9.85985 6.53495 9.89398 6.51227 9.9281L6.31914 10.2236C6.29645 10.2575 6.23964 10.2917 6.20552 10.2917L2.09177 10.2804ZM0.375767 11.3257C0.330392 11.3257 0.318954 11.3032 0.341642 11.2689L0.580329 10.9622C0.603017 10.928 0.659829 10.9054 0.705392 10.9054H5.88714C5.93252 10.9054 5.95539 10.9395 5.94395 10.9736L5.85302 11.2462C5.84177 11.2918 5.7962 11.3145 5.75083 11.3145L0.375767 11.3257ZM3.12564 12.3712C3.08027 12.3712 3.06902 12.3371 3.0917 12.303L3.2507 12.0189C3.27358 11.9848 3.31895 11.9509 3.36452 11.9509H5.63702C5.68258 11.9509 5.70527 11.9848 5.70527 12.0304L5.68277 12.303C5.68277 12.3485 5.6372 12.3827 5.60308 12.3827L3.12564 12.3712ZM14.9213 10.0759C14.2052 10.2577 13.7166 10.394 13.0121 10.5757C12.8415 10.6213 12.8303 10.6325 12.6825 10.4621C12.5121 10.269 12.387 10.1439 12.1485 10.0303C11.4325 9.67816 10.7393 9.78035 10.0916 10.2009C9.31895 10.7008 8.92127 11.4394 8.93252 12.3598C8.94377 13.269 9.56889 14.019 10.4666 14.144C11.2393 14.2462 11.8871 13.9734 12.3985 13.394C12.5006 13.269 12.5916 13.1327 12.7052 12.9735H10.512C10.2735 12.9735 10.2167 12.8257 10.2962 12.6326C10.444 12.2803 10.7166 11.6895 10.8756 11.394C10.9099 11.3257 10.9894 11.2121 11.1598 11.2121H15.2961C15.2736 11.519 15.2736 11.8258 15.228 12.1327C15.103 12.9508 14.7962 13.7008 14.2961 14.3599C13.4779 15.4395 12.4099 16.1098 11.0575 16.2917C9.94389 16.4394 8.90983 16.2234 8.00083 15.5417C7.15989 14.9053 6.6827 14.0644 6.55764 13.019C6.40989 11.7804 6.77345 10.6667 7.52345 9.68941C8.33027 8.63266 9.39845 7.96216 10.7053 7.72348C11.7735 7.53035 12.7961 7.65541 13.7166 8.28035C14.3188 8.67804 14.7506 9.22348 15.0347 9.88254C15.103 9.98491 15.0576 10.0417 14.9211 10.0757L14.9213 10.0759Z"
                                fill="currentcolor"
                              ></path>
                              <path
                                d="M18.6826 16.3599C17.6485 16.3371 16.7052 16.0417 15.9098 15.3598C15.2393 14.7804 14.8189 14.0417 14.6826 13.1666C14.4781 11.8826 14.8302 10.7462 15.6031 9.73499C16.4326 8.64393 17.4325 8.0758 18.7849 7.83711C19.9439 7.63274 21.0349 7.74636 22.0234 8.41668C22.9212 9.03036 23.4779 9.85986 23.6256 10.9507C23.8187 12.4849 23.3757 13.7349 22.3187 14.8031C21.5687 15.5644 20.6483 16.0417 19.5916 16.2576C19.2848 16.3144 18.9779 16.3258 18.6826 16.3599ZM21.3871 11.769C21.3758 11.6212 21.3758 11.5076 21.3529 11.394C21.1486 10.269 20.1143 9.63261 19.0349 9.88274C17.9779 10.1212 17.2962 10.7917 17.0462 11.8599C16.8417 12.7462 17.2735 13.644 18.0916 14.0076C18.7167 14.2804 19.3416 14.2462 19.9439 13.9395C20.8416 13.4736 21.3302 12.7462 21.3871 11.769Z"
                                fill="currentcolor"
                              ></path>
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div
                        id="w-node-_64042d80-7c6e-0c4b-e6ae-83c5fd73cbaf-612cf017"
                        className="header_floating-langs-item-z is-depth-plus-1"
                      >
                        <div className="header_floating-langs-item-x-y is-blank-dull"></div>
                      </div>
                      <div className="header_floating-langs-item-z is-depth-plus-2 is-faded-mobile">
                        <div className="header_floating-langs-item-x-y">
                          <div className="header_floating-langs-icon w-embed">
                            <svg viewBox="0 0 128 128">
                              <path
                                fill="currentcolor"
                                d="M49.33 62h29.159C86.606 62 93 55.132 93 46.981V19.183c0-7.912-6.632-13.856-14.555-15.176-5.014-.835-10.195-1.215-15.187-1.191-4.99.023-9.612.448-13.805 1.191C37.098 6.188 35 10.758 35 19.183V30h29v4H23.776c-8.484 0-15.914 5.108-18.237 14.811-2.681 11.12-2.8 17.919 0 29.53C7.614 86.983 12.569 93 21.054 93H31V79.952C31 70.315 39.428 62 49.33 62zm-1.838-39.11c-3.026 0-5.478-2.479-5.478-5.545 0-3.079 2.451-5.581 5.478-5.581 3.015 0 5.479 2.502 5.479 5.581-.001 3.066-2.465 5.545-5.479 5.545zm74.789 25.921C120.183 40.363 116.178 34 107.682 34H97v12.981C97 57.031 88.206 65 78.489 65H49.33C41.342 65 35 72.326 35 80.326v27.8c0 7.91 6.745 12.564 14.462 14.834 9.242 2.717 17.994 3.208 29.051 0C85.862 120.831 93 116.549 93 108.126V97H64v-4h43.682c8.484 0 11.647-5.776 14.599-14.66 3.047-9.145 2.916-17.799 0-29.529zm-41.955 55.606c3.027 0 5.479 2.479 5.479 5.547 0 3.076-2.451 5.579-5.479 5.579-3.015 0-5.478-2.502-5.478-5.579 0-3.068 2.463-5.547 5.478-5.547z"
                              ></path>
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div
                        id="w-node-_94b46030-ccb9-5648-610b-0a3b5e7cf0a4-612cf017"
                        className="header_floating-langs-item-z is-depth-minus-2"
                      >
                        <div className="header_floating-langs-item-x-y is-blank-dull"></div>
                      </div>
                      <div
                        id="w-node-c95e904c-f06e-ca33-b39f-404566865028-612cf017"
                        className="header_floating-langs-item-z"
                      >
                        <div className="header_floating-langs-item-x-y is-blank-outline"></div>
                      </div>
                      <div
                        id="w-node-b77296a5-5fe0-98cc-d4ff-c5acf2226894-612cf017"
                        className="header_floating-langs-item-z is-depth-plus-1 is-faded-mobile"
                      >
                        <div className="header_floating-langs-item-x-y">
                          <div className="header_floating-langs-icon w-embed">
                            <svg viewBox="0 0 128 128">
                              <path
                                fill="currentcolor"
                                d="M47.617 98.12c-19.192 5.362 11.677 16.439 36.115 5.969-4.003-1.556-6.874-3.351-6.874-3.351-10.897 2.06-15.952 2.222-25.844 1.092-8.164-.935-3.397-3.71-3.397-3.71zm33.189-10.46c-14.444 2.779-22.787 2.69-33.354 1.6-8.171-.845-2.822-4.805-2.822-4.805-21.137 7.016 11.767 14.977 41.309 6.336-3.14-1.106-5.133-3.131-5.133-3.131zm11.319-60.575c.001 0-42.731 10.669-22.323 34.187 6.024 6.935-1.58 13.17-1.58 13.17s15.289-7.891 8.269-17.777c-6.559-9.215-11.587-13.793 15.634-29.58zm9.998 81.144s3.529 2.91-3.888 5.159c-14.102 4.272-58.706 5.56-71.095.171-4.45-1.938 3.899-4.625 6.526-5.192 2.739-.593 4.303-.485 4.303-.485-4.952-3.487-32.013 6.85-13.742 9.815 49.821 8.076 90.817-3.637 77.896-9.468zM85 77.896c2.395-1.634 5.703-3.053 5.703-3.053s-9.424 1.685-18.813 2.474c-11.494.964-23.823 1.154-30.012.326-14.652-1.959 8.033-7.348 8.033-7.348s-8.812-.596-19.644 4.644C17.455 81.134 61.958 83.958 85 77.896zm5.609 15.145c-.108.29-.468.616-.468.616 31.273-8.221 19.775-28.979 4.822-23.725-1.312.464-2 1.543-2 1.543s.829-.334 2.678-.72c7.559-1.575 18.389 10.119-5.032 22.286zM64.181 70.069c-4.614-10.429-20.26-19.553.007-35.559C89.459 14.563 76.492 1.587 76.492 1.587c5.23 20.608-18.451 26.833-26.999 39.667-5.821 8.745 2.857 18.142 14.688 28.815zm27.274 51.748c-19.187 3.612-42.854 3.191-56.887.874 0 0 2.874 2.38 17.646 3.331 22.476 1.437 57-.8 57.816-11.436.001 0-1.57 4.032-18.575 7.231z"
                              ></path>
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div
                        id="w-node-_640343c9-46e8-bce4-4cde-8e26379cd658-612cf017"
                        className="header_floating-langs-item-z is-depth-plus-1"
                      >
                        <div className="header_floating-langs-item-x-y is-blank-outline"></div>
                      </div>
                      <div
                        id="w-node-fcf1a2e8-2204-1109-a056-01c64d090726-612cf017"
                        className="header_floating-langs-item-z is-depth-plus-1"
                      >
                        <div className="header_floating-langs-item-x-y is-blank-dull"></div>
                      </div>
                      <div
                        id="w-node-bbde3340-ea00-52da-2b01-59071381daca-612cf017"
                        className="header_floating-langs-item-z is-depth-plus-1 is-faded-mobile"
                      >
                        <div className="header_floating-langs-item-x-y">
                          <div className="header_floating-langs-icon w-embed">
                            <svg
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M21.6375 5.75623L12.5813 0.543726C12.4313 0.449976 12.225 0.412476 12 0.412476C11.775 0.412476 11.5688 0.468726 11.4188 0.543726L2.41875 5.77498C2.1 5.96248 1.875 6.43123 1.875 6.78748V17.2312C1.875 17.4254 1.90822 17.6527 2.03719 17.8507L2.00624 17.8687C2.09999 18.0187 2.23124 18.15 2.36249 18.225L11.4 23.4562C11.55 23.55 11.7562 23.5875 11.9812 23.5875C12.2062 23.5875 12.4125 23.5312 12.5625 23.4562L21.5625 18.225C21.8812 18.0375 22.1062 17.5687 22.1062 17.2125V6.76872C22.1062 6.61865 22.0914 6.45375 22.0222 6.30039L22.0875 6.26248C21.975 6.03748 21.8063 5.86873 21.6375 5.75623ZM15.9938 14.2687C15.2063 15.6562 13.7063 16.5937 12 16.5937C9.46875 16.5937 7.40625 14.5312 7.40625 12C7.40625 9.46872 9.46875 7.40622 12 7.40622C13.7063 7.40622 15.2063 8.34372 15.9938 9.74997L18.4313 8.34372C17.1562 6.11247 14.7563 4.59372 12 4.59372C7.9125 4.59372 4.59375 7.91247 4.59375 12C4.59375 16.0875 7.9125 19.4062 12 19.4062C14.7375 19.4062 17.1375 17.9062 18.4125 15.6937L15.9938 14.2687ZM15.3937 11.5875H16.3687V10.5937H17.1937V11.5875H18.1875V12.4125H17.1937V13.3875H16.3687V12.4125H15.3937V11.5875ZM18.8625 11.5875H19.8375V10.5937H20.6625V11.5875H21.6562V12.4125H20.6625V13.3875H19.8375V12.4125H18.8625V11.5875Z"
                                fill="currentcolor"
                              ></path>
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div
                        id="w-node-_54a4b8ed-5d3e-d0c7-cb45-51d7d311910a-612cf017"
                        className="header_floating-langs-item-z"
                      >
                        <div className="header_floating-langs-item-x-y is-blank-outline"></div>
                      </div>
                      <div
                        id="w-node-cbe9ce05-6ef6-3783-09aa-cd48c08594a2-612cf017"
                        className="header_floating-langs-item-z"
                      >
                        <div className="header_floating-langs-item-x-y is-blank-bright"></div>
                      </div>
                      <div
                        id="w-node-_13377759-6a5b-620d-2506-f77f905a0583-612cf017"
                        className="header_floating-langs-item-z"
                      >
                        <div className="header_floating-langs-item-x-y is-blank"></div>
                      </div>
                      <div
                        id="w-node-d3b6ec1e-5d66-5851-b311-561e26970a4e-612cf017"
                        className="header_floating-langs-item-z"
                      >
                        <div className="header_floating-langs-item-x-y is-blank-bright"></div>
                      </div>
                      <div
                        id="w-node-d875c90e-e4a0-c072-c091-b683f1efb43f-612cf017"
                        className="header_floating-langs-item-z"
                      >
                        <div className="header_floating-langs-item-x-y is-blank"></div>
                      </div>
                      <div
                        id="w-node-_3843e0f6-14be-ca40-0614-638a26c6af25-612cf017"
                        className="header_floating-langs-item-z is-faded-mobile"
                      >
                        <div className="header_floating-langs-item-x-y">
                          <div className="header_floating-langs-icon w-embed">
                            <svg
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M0 20.6625L5.64375 12.1875L0 3.73126H4.2375L9.88125 12.1875L4.2375 20.6438H0V20.6625Z"
                                fill="currentcolor"
                              ></path>
                              <path
                                d="M5.6438 20.6625L11.2875 12.1875L5.6438 3.73126H9.8813L21.1688 20.6625H16.95L13.4063 15.3563L9.8813 20.6438H5.6438V20.6625Z"
                                fill="currentcolor"
                              ></path>
                              <path
                                d="M19.2938 15.7125L17.4188 12.8812H24V15.7125H19.2938ZM16.4625 11.4937L14.5875 8.66248H24V11.4937H16.4625Z"
                                fill="currentcolor"
                              ></path>
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div
                        id="w-node-c5a305cb-bb4d-467f-444b-6bd4d231019b-612cf017"
                        className="header_floating-langs-item-z"
                      >
                        <div className="header_floating-langs-item-x-y is-blank"></div>
                      </div>
                      <div
                        id="w-node-_7b463528-cdfc-2325-3024-4fbad2a73c25-612cf017"
                        className="header_floating-langs-item-z is-depth-minus-2"
                      >
                        <div className="header_floating-langs-item-x-y is-blank-bright"></div>
                      </div>
                      <div
                        id="w-node-_86fda317-8121-812c-a599-fcabccb9d4ef-612cf017"
                        className="header_floating-langs-item-z is-depth-plus-2"
                      >
                        <div className="header_floating-langs-item-x-y is-blank-bright"></div>
                      </div>
                      <div
                        id="w-node-_2d8d1803-b5b9-bb60-9cb8-8405334dbc60-612cf017"
                        className="header_floating-langs-item-z is-depth-minus-2"
                      >
                        <div className="header_floating-langs-item-x-y is-blank-outline"></div>
                      </div>
                      <div
                        id="w-node-de1c0f03-c2e8-65e1-7419-c5e4391a24a9-612cf017"
                        className="header_floating-langs-item-z is-faded-mobile is-behind-text"
                      >
                        <div className="header_floating-langs-item-x-y">
                          <div className="header_floating-langs-icon w-embed">
                            <svg viewBox="0 0 128 128">
                              <path
                                fill="currentcolor"
                                d="M116.948 97.807c-6.863-.187-12.104.452-16.585 2.341-1.273.537-3.305.552-3.513 2.147.7.733.809 1.829 1.365 2.731 1.07 1.73 2.876 4.052 4.488 5.268 1.762 1.33 3.577 2.751 5.465 3.902 3.358 2.047 7.107 3.217 10.34 5.268 1.906 1.21 3.799 2.733 5.658 4.097.92.675 1.537 1.724 2.732 2.147v-.194c-.628-.8-.79-1.898-1.366-2.733l-2.537-2.537c-2.48-3.292-5.629-6.184-8.976-8.585-2.669-1.916-8.642-4.504-9.755-7.609l-.195-.195c1.892-.214 4.107-.898 5.854-1.367 2.934-.786 5.556-.583 8.585-1.365l4.097-1.171v-.78c-1.531-1.571-2.623-3.651-4.292-5.073-4.37-3.72-9.138-7.437-14.048-10.537-2.724-1.718-6.089-2.835-8.976-4.292-.971-.491-2.677-.746-3.318-1.562-1.517-1.932-2.342-4.382-3.511-6.633-2.449-4.717-4.854-9.868-7.024-14.831-1.48-3.384-2.447-6.72-4.293-9.756-8.86-14.567-18.396-23.358-33.169-32-3.144-1.838-6.929-2.563-10.929-3.513-2.145-.129-4.292-.26-6.438-.391-1.311-.546-2.673-2.149-3.902-2.927C17.811 4.565 5.257-2.16 1.633 6.682c-2.289 5.581 3.421 11.025 5.462 13.854 1.434 1.982 3.269 4.207 4.293 6.438.674 1.467.79 2.938 1.367 4.489 1.417 3.822 2.652 7.98 4.487 11.511.927 1.788 1.949 3.67 3.122 5.268.718.981 1.951 1.413 2.145 2.927-1.204 1.686-1.273 4.304-1.95 6.44-3.05 9.615-1.899 21.567 2.537 28.683 1.36 2.186 4.567 6.871 8.975 5.073 3.856-1.57 2.995-6.438 4.098-10.732.249-.973.096-1.689.585-2.341v.195l3.513 7.024c2.6 4.187 7.212 8.562 11.122 11.514 2.027 1.531 3.623 4.177 6.244 5.073v-.196h-.195c-.508-.791-1.303-1.119-1.951-1.755-1.527-1.497-3.225-3.358-4.487-5.073-3.556-4.827-6.698-10.11-9.561-15.609-1.368-2.627-2.557-5.523-3.709-8.196-.444-1.03-.438-2.589-1.364-3.122-1.263 1.958-3.122 3.542-4.098 5.854-1.561 3.696-1.762 8.204-2.341 12.878-.342.122-.19.038-.391.194-2.718-.655-3.672-3.452-4.683-5.853-2.554-6.07-3.029-15.842-.781-22.829.582-1.809 3.21-7.501 2.146-9.172-.508-1.666-2.184-2.63-3.121-3.903-1.161-1.574-2.319-3.646-3.124-5.464-2.09-4.731-3.066-10.044-5.267-14.828-1.053-2.287-2.832-4.602-4.293-6.634-1.617-2.253-3.429-3.912-4.683-6.635-.446-.968-1.051-2.518-.391-3.513.21-.671.508-.951 1.171-1.17 1.132-.873 4.284.29 5.462.779 3.129 1.3 5.741 2.538 8.392 4.294 1.271.844 2.559 2.475 4.097 2.927h1.756c2.747.631 5.824.195 8.391.975 4.536 1.378 8.601 3.523 12.292 5.854 11.246 7.102 20.442 17.21 26.732 29.269 1.012 1.942 1.45 3.794 2.341 5.854 1.798 4.153 4.063 8.426 5.852 12.488 1.786 4.052 3.526 8.141 6.05 11.513 1.327 1.772 6.451 2.723 8.781 3.708 1.632.689 4.307 1.409 5.854 2.34 2.953 1.782 5.815 3.903 8.586 5.855 1.383.975 5.64 3.116 5.852 4.879zM29.729 23.466c-1.431-.027-2.443.156-3.513.389v.195h.195c.683 1.402 1.888 2.306 2.731 3.513.65 1.367 1.301 2.732 1.952 4.097l.194-.193c1.209-.853 1.762-2.214 1.755-4.294-.484-.509-.555-1.147-.975-1.755-.556-.811-1.635-1.272-2.339-1.952z"
                              ></path>
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div
                        id="w-node-d3f5e761-87eb-54b7-7ad8-a5aae2e3f03c-612cf017"
                        className="header_floating-langs-item-z is-depth-plus-1"
                      >
                        <div className="header_floating-langs-item-x-y is-blank-outline"></div>
                      </div>
                      <div
                        id="w-node-_3b835b1a-1824-9106-d5c8-2727cec787dc-612cf017"
                        className="header_floating-langs-item-z is-depth-minus-1 is-faded-mobile"
                      >
                        <div className="header_floating-langs-item-x-y">
                          <div className="header_floating-langs-icon w-embed">
                            <svg viewBox="0 0 128 128">
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                fill="currentcolor"
                                d="M35.971 111.33l81.958 11.188c-9.374-15.606-18.507-30.813-27.713-46.144L35.971 111.33zm89.71-86.383c-2.421 3.636-4.847 7.269-7.265 10.907a67619.72 67619.72 0 00-24.903 37.485c-.462.696-1.061 1.248-.41 2.321 8.016 13.237 15.969 26.513 23.942 39.777 1.258 2.095 2.53 4.182 4.157 6.192l4.834-96.58-.355-.102zM16.252 66.22c.375.355 1.311.562 1.747.347 7.689-3.779 15.427-7.474 22.948-11.564 2.453-1.333 4.339-3.723 6.452-5.661 6.997-6.417 13.983-12.847 20.966-19.278.427-.395.933-.777 1.188-1.275 2.508-4.902 4.973-9.829 7.525-14.898-3.043-1.144-5.928-2.263-8.849-3.281-.396-.138-1.02.136-1.449.375-6.761 3.777-13.649 7.353-20.195 11.472-3.275 2.061-5.943 5.098-8.843 7.743-4.674 4.266-9.342 8.542-13.948 12.882a24.011 24.011 0 00-3.288 3.854c-3.15 4.587-6.206 9.24-9.402 14.025 1.786 1.847 3.41 3.613 5.148 5.259zm28.102-6.271l-11.556 48.823 54.3-34.987-42.744-13.836zm76.631-34.846l-46.15 7.71 15.662 38.096c10.221-15.359 20.24-30.41 30.488-45.806zM44.996 56.644l41.892 13.6c-5.25-12.79-10.32-25.133-15.495-37.737L44.996 56.644zM16.831 75.643L2.169 110.691l27.925-.825-13.263-34.223zm13.593 26.096l.346-.076c3.353-13.941 6.754-27.786 10.177-42.272L18.544 71.035c3.819 9.926 7.891 20.397 11.88 30.704zm84.927-78.897c-4.459-1.181-8.918-2.366-13.379-3.539-6.412-1.686-12.829-3.351-19.237-5.052-.801-.213-1.38-.352-1.851.613-2.265 4.64-4.6 9.245-6.901 13.868-.071.143-.056.328-.111.687l41.47-6.285.009-.292zM89.482 12.288l36.343 10.054-6.005-17.11-30.285 6.715-.053.341zM33.505 114.007c-4.501-.519-9.122-.042-13.687.037-3.75.063-7.5.206-11.25.323-.386.012-.771.09-1.156.506 31.003 2.866 62.005 5.732 93.007 8.6l.063-.414-29.815-4.07c-12.384-1.691-24.747-3.551-37.162-4.982zM2.782 99.994c3.995-9.27 7.973-18.546 11.984-27.809.401-.929.37-1.56-.415-2.308-1.678-1.597-3.237-3.318-5.071-5.226-2.479 12.24-4.897 24.177-7.317 36.113l.271.127c.185-.297.411-.578.548-.897zm78.74-90.153c6.737-1.738 13.572-3.097 20.367-4.613.44-.099.87-.244 1.303-.368l-.067-.332-29.194 3.928c2.741 1.197 4.853 2.091 7.591 1.385z"
                              ></path>
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div
                        id="w-node-_2cee7884-8f2d-92e1-7c5a-ecde9b3cd807-612cf017"
                        className="header_floating-langs-item-z"
                      >
                        <div className="header_floating-langs-item-x-y is-blank-outline"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </header>
          <section className="section_overview">
            <div className="padding-global">
              <div className="container-large">
                <div className="padding-section-medium is-padding-bottom-only">
                  <div className="panels_5-column">
                    <div
                      id="w-node-_19064858-2443-60fc-8df0-d2f95ef53656-612cf017"
                      className="panels_item is-horizontal background-gradient-red-20"
                    >
                      <div className="panels_item-content">
                        <div className="icon-tile is-red">
                          <div className="icon-1x1-small-plus-plus w-embed">
                             <svg
                            width="30px"
                            height="26px"
                            viewBox="0 0 480 374"
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            // xmlns:xlink="http://www.w3.org/1999/xlink"
                          >
                            <g
                              id="Page-1"
                              stroke="none"
                              stroke-width="1"
                              fill="none"
                              fill-rule="evenodd"
                            >
                              <g
                                id="noun-code-2821480"
                                transform="translate(0.805394, 0.426000)"
                                fill="#FFFFFF"
                                fill-rule="nonzero"
                              >
                                <path
                                  d="M147.244606,2.84217094e-14 C181.623606,2.84217094e-14 181.623606,52.273 147.244606,52.273 C133.717606,52.273 120.224606,57.1402 120.224606,72.679 L120.224606,146.652 C120.224606,157.082 114.107406,166.09 105.271606,170.285 L77.4866063,186.57 L107.263606,204.023 C115.509706,208.8628 120.122606,217.562 120.126606,226.492 L120.224262,300.465 C120.224262,316.008 133.716262,320.863 147.244262,320.863 C181.623262,320.863 181.623262,373.14 147.244262,373.14 C104.451262,373.14 67.9472623,345.355 67.9472623,300.464 L67.9472623,241.351 L13.1702623,209.226 C-4.04073767,199.4955 -4.62273767,174.351 12.8382323,164.105 L67.9472323,131.796 L67.9472323,72.679 C67.9472323,27.781 104.451232,2.84217094e-14 147.244232,2.84217094e-14 L147.244606,2.84217094e-14 Z M331.134606,2.84217094e-14 C296.755606,2.84217094e-14 296.755606,52.273 331.134606,52.273 C344.661606,52.273 358.161606,57.1402 358.161606,72.679 L358.161606,146.652 C358.161606,157.082 364.278806,166.09 373.114606,170.285 L400.895606,186.57 L371.125606,204.023 C362.871706,208.8628 358.266606,217.562 358.262606,226.492 L358.164949,300.465 C358.164949,316.008 344.664949,320.863 331.137949,320.863 C296.758949,320.863 296.758949,373.14 331.137949,373.14 C373.938949,373.14 410.434949,345.355 410.434949,300.464 L410.434949,241.351 L465.219949,209.226 C482.422949,199.4955 483.020949,174.351 465.551979,164.105 L410.434979,131.796 L410.434979,72.679 C410.434979,27.781 373.938979,2.84217094e-14 331.137979,2.84217094e-14 L331.134606,2.84217094e-14 Z"
                                  id="Shape"
                                ></path>
                              </g>
                            </g>
                          </svg> 
                          </div>
                        </div>
                        <div className="spacing-block padding-small-plus"></div>
                        <h2 className="heading-style-h4">
                          Sharpen your coding skills
                        </h2>
                        <div className="spacing-block padding-small"></div>
                        <p className="text-size-medium-old-old">
                        Challenge yourself with small coding exercises called "Quizes" Each quiz is crafted by the BrainBoost
                         community to help you strengthen various coding questions. Master your current language of 
                         choice, or quickly pick up any of the 55+ programming languages supported.
                        </p>
                        <div className="spacing-block padding-small-plus"></div>
                        <a
                          href="/signup"
                          className="button is-small is-tertiary w-button"
                        >
                          Join the BrainBoost
                        </a>
                      </div>
                      <div
                        id="w-node-_0eef6d8b-e4cd-57b1-575d-71b33b5e0f52-612cf017"
                        className="panels_item-image-wrapper is-bleed-right"
                      >
                        <div className="noisy-image-wrapper">
                          <img
                            src="/images/sec5.png"
                            loading="lazy"
                            sizes="(max-width: 479px) 100vw, (max-width: 767px) 92vw, (max-width: 991px) 85vw, 100vw"
                            srcset="
                            /images/sec1.png 500w,
                            /images/sec2.png 800w,
                            /images/sec3.png 1080w,
                            /images/sec4.png 1126w
                          "
                            alt=""
                            className="noisy-image-image"
                          />
                          <div className="noisy-image-noise"></div>
                        </div>
                      </div>
                    </div>
                    <div
                      id="w-node-_854d73c4-0163-38fe-7a9e-dd240bbd4e0d-612cf017"
                      className="panels_item is-vertical"
                    >
                      <div className="panels_item-content">
                        <div className="icon-tile">
                          <div className="icon-1x1-small-plus-plus w-embed">
                            <svg
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M9.86924 2.08198C10.1617 1.42403 10.8141 1 11.5342 1C13.4483 1 15 2.55171 15 4.46584V8H18.5032C20.9547 8 22.8294 10.1852 22.4567 12.6082L21.3797 19.6082C21.0795 21.5596 19.4005 23 17.4262 23H4C2.34315 23 1 21.6569 1 20V13C1 11.3431 2.34315 10 4 10H6.35013L9.86924 2.08198ZM8 21H17.4262C18.4134 21 19.2529 20.2798 19.403 19.3041L20.4799 12.3041C20.6663 11.0926 19.7289 10 18.5032 10H15C13.8954 10 13 9.10457 13 8V4.46584C13 3.69457 12.4043 3.06242 11.6479 3.00435L8.17775 10.8123C8.1277 10.9249 8.06805 11.0313 8 11.1306V21ZM6 12V21H4C3.44772 21 3 20.5523 3 20V13C3 12.4477 3.44772 12 4 12H6Z"
                                fill="currentcolor"
                              ></path>
                            </svg>
                          </div>
                        </div>
                        <div className="spacing-block padding-small-plus"></div>
                        <h2 className="heading-style-h4">Get instant feedback</h2>
                        <div className="spacing-block padding-small"></div>
                        <p className="text-size-medium-old-old">
                        Solve coding exercises with your unique style
                         right in the browser and use test cases (TDD) to check your progress. Retrain with new, creative, and optimized approaches. 
                        Identify all the bugs in your programming practice.
                        </p>
                      </div>
                      <div
                        id="w-node-_854d73c4-0163-38fe-7a9e-dd240bbd4e1a-612cf017"
                        className="panels_item-image-wrapper is-bleed-top"
                      >
                        <div className="noisy-image-wrapper is-rounded">
                          <img
                            src="6674f0cdb5b7b401612cf0ed_Training_on_Unique_In_Order___Codewars.jpg"
                            loading="lazy"
                            sizes="(max-width: 479px) 100vw, (max-width: 767px) 90vw, (max-width: 991px) 79vw, 108.8671875px"
                            width="655"
                            alt=""
                            srcset="
                            https://cdn.prod.website-files.com/6674f0cdb5b7b401612cf015/6674f0cdb5b7b401612cf0ed_Training_on_Unique_In_Order___Codewars-p-500.jpg   500w,
                            https://cdn.prod.website-files.com/6674f0cdb5b7b401612cf015/6674f0cdb5b7b401612cf0ed_Training_on_Unique_In_Order___Codewars-p-800.jpg   800w,
                            https://cdn.prod.website-files.com/6674f0cdb5b7b401612cf015/6674f0cdb5b7b401612cf0ed_Training_on_Unique_In_Order___Codewars-p-1080.jpg 1080w,
                            https://cdn.prod.website-files.com/6674f0cdb5b7b401612cf015/6674f0cdb5b7b401612cf0ed_Training_on_Unique_In_Order___Codewars.jpg        1310w
                          "
                            className="noisy-image-image brightened"
                          />
                          <div className="noisy-image-noise"></div>
                        </div>
                      </div>
                    </div>
                    <div
                      id="w-node-_93214c83-d9bd-610d-7467-eeca3ce55a9d-612cf017"
                      className="panels_item is-vertical"
                    >
                      <div className="panels_item-content">
                        <div className="icon-tile">
                          <div className="icon-1x1-small-plus-plus w-embed">
                            <svg
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M7.16147 1H16.8386C17.3657 0.999983 17.8205 0.999967 18.195 1.03057C18.5904 1.06287 18.9836 1.13419 19.362 1.32698C19.9265 1.6146 20.3854 2.07354 20.673 2.63803C20.8658 3.01641 20.9371 3.40963 20.9694 3.80497C21 4.17954 21 4.6343 21 5.16144V5.8775C21 5.90121 21 5.92472 21.0001 5.94804C21.0003 6.29465 21.0006 6.6004 20.9388 6.90157C20.8844 7.16636 20.7945 7.42259 20.6716 7.6633C20.5317 7.93709 20.3405 8.17569 20.1237 8.44619C20.1092 8.46438 20.0945 8.48272 20.0797 8.50122L16.4767 13.0049C18.583 15.3608 18.505 18.9803 16.2427 21.2426C13.8995 23.5858 10.1005 23.5858 7.75737 21.2426C5.49504 18.9803 5.41702 15.3608 7.52329 13.0049L3.92036 8.50122C3.90556 8.48271 3.89086 8.46437 3.87627 8.44617C3.65953 8.17568 3.46834 7.93708 3.32847 7.6633C3.20549 7.42258 3.11561 7.16636 3.06127 6.90157C2.99946 6.6004 2.9997 6.29465 2.99998 5.94804C2.99999 5.92471 3.00001 5.90121 3.00001 5.8775L3.00001 5.16146C2.99999 4.63431 2.99998 4.17955 3.03058 3.80497C3.06288 3.40963 3.1342 3.01641 3.32699 2.63803C3.61461 2.07354 4.07355 1.6146 4.63804 1.32698C5.01642 1.13419 5.40964 1.06287 5.80498 1.03057C6.17956 0.999967 6.63432 0.999983 7.16147 1ZM9.08416 11.7544C9.43451 11.5594 9.80026 11.4022 10.1754 11.2828L5.00149 4.63064C5.00012 4.79568 5.00001 4.98343 5.00001 5.2V5.8775C5.00001 6.3336 5.00473 6.42298 5.02043 6.49948C5.03854 6.58775 5.0685 6.67315 5.1095 6.75339C5.14503 6.82294 5.19718 6.89568 5.4821 7.25183L9.08416 11.7544ZM6.273 3.00781L12.0001 10.3712L17.727 3.00781C17.488 3.00036 17.191 3 16.8 3H7.20001C6.80907 3 6.51206 3.00036 6.273 3.00781ZM18.9985 4.63067L13.8247 11.2829C14.1998 11.4023 14.5655 11.5594 14.9159 11.7544L18.5179 7.25183C18.8028 6.89568 18.855 6.82294 18.8905 6.75339C18.9315 6.67315 18.9615 6.58775 18.9796 6.49948C18.9953 6.42298 19 6.3336 19 5.8775V5.2C19 4.98344 18.9999 4.7957 18.9985 4.63067ZM14.8284 19.8284C16.3905 18.2663 16.3905 15.7337 14.8284 14.1716C13.2663 12.6095 10.7337 12.6095 9.17158 14.1716C7.60949 15.7337 7.60949 18.2663 9.17158 19.8284C10.7337 21.3905 13.2664 21.3905 14.8284 19.8284Z"
                                fill="currentcolor"
                              ></path>
                            </svg>
                          </div>
                        </div>
                        <div className="spacing-block padding-small-plus"></div>
                        <h2 className="heading-style-h4">Earn ranks and honor</h2>
                        <div className="spacing-block padding-small"></div>
                        <p className="text-size-medium-old-old">
                          KCoding challenges are ranked from beginner to expert level.
                           As you complete higher-ranked challenges, you level up your profile and push
                            your software development skills to their highest potential.
                        </p>
                      </div>
                      <div className="panels_item-image-wrapper is-bleed-full">
                        <div className="noisy-image-wrapper">
                          <img
                            src="./Codewars - Achieve mastery through coding practice and developer mentorship_files/6674f0cdb5b7b401612cf06b_ranks.png"
                            loading="lazy"
                            sizes="(max-width: 479px) 100vw, (max-width: 767px) 95vw, (max-width: 991px) 92vw, 23vw"
                            srcset="
                            https://cdn.prod.website-files.com/6674f0cdb5b7b401612cf015/6674f0cdb5b7b401612cf06b_ranks-p-500.png   500w,
                            https://cdn.prod.website-files.com/6674f0cdb5b7b401612cf015/6674f0cdb5b7b401612cf06b_ranks-p-800.png   800w,
                            https://cdn.prod.website-files.com/6674f0cdb5b7b401612cf015/6674f0cdb5b7b401612cf06b_ranks-p-1080.png 1080w,
                            https://cdn.prod.website-files.com/6674f0cdb5b7b401612cf015/6674f0cdb5b7b401612cf06b_ranks.png        1512w
                          "
                            alt=""
                            className="noisy-image-image"
                          />
                          <div className="noisy-image-noise"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="section_community">
            <div className="padding-global">
              <div className="container-small-plus">
                <div className="padding-section-small is-padding-bottom-only">
                  <div className="text-align-center">
                    <h2>An engaged software development community</h2>
                    <div className="spacing-block padding-small-plus"></div>
                    <p className="text-size-large">
                    BrainBoost is a collective effort by its users. They are creators—designing coding 
                    challenges to teach various techniques, solving challenges with solutions that 
                    enlighten others, and providing constructive feedback through comments.
                    </p>
                  </div>
                </div>
              </div>
              <div className="container-large">
                <div className="padding-section-medium is-padding-bottom-only">
                  <div className="panels_5-column">
                    {/* <div
                      id="w-node-_6dca05a4-c2a9-f67c-e911-a478ae3bb86c-612cf017"
                      className="panels_item is-3-column background-gradient-red-70"
                    >
                      <div className="panels_item-column">
                        <p className="heading-style-h1">75K+</p>
                        <div className="spacing-block padding-small"></div>
                        <p>Community members added every month</p>
                      </div>
                      <div className="panels_item-column">
                        <p className="heading-style-h1">1M+</p>
                        <div className="spacing-block padding-small"></div>
                        <p>Kata completed every month</p>
                      </div>
                      <div className="panels_item-column">
                        <p className="heading-style-h1">12K+</p>
                        <div className="spacing-block padding-small"></div>
                        <p>Kata created by our community</p>
                      </div>
                    </div> */}
                    <div
                      id="w-node-_6dca05a4-c2a9-f67c-e911-a478ae3bb889-612cf017"
                      className="panels_item is-vertical"
                    >
                      <div className="panels_item-content">
                        <div className="icon-tile">
                          <div className="icon-1x1-small-plus-plus w-embed">
                            <svg
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M7.69007 4.09715C4.89549 5.62444 3 8.59086 3 12C3 12.7443 3.09034 13.4674 3.26066 14.1591L4.09499 13.6775C4.40506 13.4985 4.76894 13.4363 5.12086 13.5022L8.2807 14.0935L8.26877 11.4089C8.26758 11.1408 8.33829 10.8772 8.47352 10.6457L9.33701 11.15L9.36074 11.1639M9.33701 11.15L8.47352 10.6457L10.2064 7.67891L7.69007 4.09715M3.96621 16.0612C5.45042 18.9914 8.49065 21 12 21C12.1512 21 12.3015 20.9963 12.4508 20.9889C13.0024 20.9618 13.4716 21.3869 13.4988 21.9385C13.526 22.4902 13.1008 22.9593 12.5492 22.9865C12.3672 22.9955 12.1841 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1C14.9935 1 17.7077 2.19573 19.691 4.13561C19.6974 4.14172 19.7037 4.14792 19.71 4.15421C21.7406 6.14993 23 8.92789 23 12C23 12.1844 22.9954 12.3675 22.9864 12.5492C22.9598 13.0908 22.5062 13.5125 21.9641 13.4997L21.9876 12.5C21.9641 13.4997 21.9643 13.4997 21.9641 13.4997L21.9595 13.4996L21.9511 13.4994L21.9232 13.4985C21.8997 13.4977 21.8667 13.4964 21.825 13.4944C21.7416 13.4905 21.6231 13.4839 21.4761 13.4729C21.1827 13.4511 20.7726 13.4116 20.2999 13.3409C19.3714 13.202 18.1294 12.9326 17.0531 12.3945C16.6256 12.1808 16.1402 11.7478 15.7446 11.2299C15.3366 10.6959 14.9484 9.97402 14.8234 9.12873C14.6947 8.25829 14.854 7.30431 15.4756 6.38179C15.8823 5.77807 16.4693 5.2134 17.256 4.69337C15.7772 3.62776 13.9619 3 12 3C11.1661 3 10.3587 3.11342 9.5923 3.32567L12.0274 6.79174C12.3645 7.27168 12.3911 7.90411 12.0952 8.41058L10.2694 11.5365L10.2834 14.6896C10.2876 15.6314 9.43309 16.3439 8.50744 16.1707L4.93473 15.5021L3.96621 16.0612ZM18.7926 6.09549C17.9219 6.5933 17.4169 7.0798 17.1342 7.49933C16.8026 7.99147 16.7431 8.43892 16.8019 8.83611C16.8644 9.25844 17.07 9.67037 17.3338 10.0157C17.6101 10.3773 17.8747 10.5693 17.9474 10.6056C18.7481 11.0059 19.7498 11.2364 20.5957 11.3629C20.7306 11.3831 20.8597 11.4003 20.9813 11.4151C20.8511 9.38523 20.0479 7.53844 18.7926 6.09549ZM12.8839 12.8839C13.1622 12.6056 13.5777 12.5164 13.9457 12.656L22.2944 15.8228C22.6799 15.969 22.9361 16.3367 22.9398 16.7489C22.9434 17.1611 22.6937 17.5333 22.311 17.6863L19.007 19.007L17.6863 22.311C17.5333 22.6937 17.1611 22.9434 16.7489 22.9398C16.3367 22.9361 15.969 22.6799 15.8228 22.2944L12.656 13.9457C12.5164 13.5777 12.6056 13.1622 12.8839 12.8839ZM15.3141 15.3141L16.7822 19.1845L17.3091 17.8665C17.4107 17.6122 17.6122 17.4107 17.8665 17.3091L19.1845 16.7822L15.3141 15.3141Z"
                                fill="currentcolor"
                              ></path>
                            </svg>
                          </div>
                        </div>
                        <div className="spacing-block padding-small-plus"></div>
                        <h2 className="heading-style-h4">
                          Tap into the collective wisdom
                        </h2>
                        <div className="spacing-block padding-small"></div>
                        <p className="text-size-medium-old-old">
                          Compare your solution with others after each challenge for greater 
                          understanding. Discuss coding challenges, best practices, and innovative 
                          techniques with the community. Be amazed by how different other solutions 
                          can be from your own.
                        </p>
                      </div>
                      <div className="panels_item-image-wrapper is-bleed-bottom">
                        <div className="noisy-image-wrapper">
                          <img
                            src="./Codewars - Achieve mastery through coding practice and developer mentorship_files/6674f0cdb5b7b401612cf094_hex-globe.png"
                            loading="lazy"
                            sizes="(max-width: 479px) 100vw, (max-width: 767px) 90vw, (max-width: 991px) 79vw, 118.3125px"
                            srcset="
                            https://cdn.prod.website-files.com/6674f0cdb5b7b401612cf015/6674f0cdb5b7b401612cf094_hex-globe-p-500.png   500w,
                            https://cdn.prod.website-files.com/6674f0cdb5b7b401612cf015/6674f0cdb5b7b401612cf094_hex-globe-p-800.png   800w,
                            https://cdn.prod.website-files.com/6674f0cdb5b7b401612cf015/6674f0cdb5b7b401612cf094_hex-globe-p-1080.png 1080w,
                            https://cdn.prod.website-files.com/6674f0cdb5b7b401612cf015/6674f0cdb5b7b401612cf094_hex-globe.png        1256w
                          "
                            alt=""
                            className="noisy-image-image"
                          />
                          <div className="noisy-image-noise"></div>
                        </div>
                      </div>
                    </div>
                    <div
                      id="w-node-_6dca05a4-c2a9-f67c-e911-a478ae3bb87b-612cf017"
                      className="panels_item is-vertical"
                    >
                      <div className="panels_item-content">
                        <div className="icon-tile">
                          <div className="icon-1x1-small-plus-plus w-embed">
                            <svg
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M13 3.01991C12.8143 3.00299 12.5391 3.00006 12.0118 3.00006H8.8C7.94342 3.00006 7.36113 3.00084 6.91104 3.03761C6.47262 3.07343 6.24842 3.13836 6.09202 3.21805C5.7157 3.4098 5.40973 3.71576 5.21799 4.09208C5.1383 4.24848 5.07337 4.47269 5.03755 4.9111C5.00078 5.36119 5 5.94348 5 6.80006V17.2001C5 18.0566 5.00078 18.6389 5.03755 19.089C5.07337 19.5274 5.1383 19.7516 5.21799 19.908C5.40973 20.2844 5.7157 20.5903 6.09202 20.7821C6.24842 20.8618 6.47262 20.9267 6.91104 20.9625C7.36113 20.9993 7.94342 21.0001 8.8 21.0001H15.2C16.0566 21.0001 16.6389 20.9993 17.089 20.9625C17.5274 20.9267 17.7516 20.8618 17.908 20.7821C18.2843 20.5903 18.5903 20.2844 18.782 19.908C18.8617 19.7516 18.9266 19.5274 18.9624 19.089C18.9992 18.6389 19 18.0566 19 17.2001V9.98829C19 9.46099 18.9971 9.18583 18.9802 9.00013L15.5681 9.00014C15.3157 9.00017 15.0699 9.0002 14.8618 8.98319C14.6332 8.96451 14.3634 8.92044 14.092 8.78215C13.7157 8.5904 13.4097 8.28444 13.218 7.90812C13.0797 7.63669 13.0356 7.36696 13.0169 7.13836C12.9999 6.9302 13 6.6844 13 6.43202L13 3.01991ZM14.3936 1.35003C14.1677 1.24877 13.9326 1.16854 13.6911 1.11058C13.2284 0.9995 12.7487 0.999729 12.1137 1.00003C12.0801 1.00005 12.0462 1.00006 12.0118 1.00006L8.7587 1.00006C7.95373 1.00005 7.28937 1.00004 6.74817 1.04426C6.18608 1.09018 5.66937 1.18875 5.18404 1.43604C4.43139 1.81953 3.81947 2.43145 3.43597 3.1841C3.18868 3.66944 3.09012 4.18614 3.04419 4.74824C2.99998 5.28943 2.99999 5.95379 3 6.75876V17.2414C2.99999 18.0463 2.99998 18.7107 3.04419 19.2519C3.09012 19.814 3.18868 20.3307 3.43597 20.816C3.81947 21.5687 4.43139 22.1806 5.18404 22.5641C5.66937 22.8114 6.18608 22.9099 6.74817 22.9559C7.28936 23.0001 7.95372 23.0001 8.75868 23.0001H15.2413C16.0463 23.0001 16.7106 23.0001 17.2518 22.9559C17.8139 22.9099 18.3306 22.8114 18.816 22.5641C19.5686 22.1806 20.1805 21.5687 20.564 20.816C20.8113 20.3307 20.9099 19.814 20.9558 19.2519C21 18.7107 21 18.0463 21 17.2414V9.98829C21 9.95389 21 9.91994 21 9.88642C21.0003 9.25142 21.0006 8.77162 20.8895 8.30892C20.8317 8.06819 20.7518 7.83372 20.6509 7.60843C20.6447 7.59375 20.6381 7.57925 20.6311 7.56494C20.5658 7.42355 20.4922 7.28589 20.4106 7.15271C20.1619 6.74698 19.8225 6.40788 19.3733 5.95907C19.3496 5.93539 19.3255 5.91139 19.3012 5.88707L16.113 2.69884C16.0887 2.67452 16.0647 2.6505 16.041 2.62678C15.5922 2.17756 15.2531 1.83813 14.8474 1.5895C14.7136 1.50756 14.5754 1.43367 14.4334 1.36814C14.4203 1.36182 14.407 1.35578 14.3936 1.35003ZM15 4.41428V6.40014C15 6.69666 15.0008 6.85892 15.0103 6.9755C15.0107 6.98014 15.0111 6.98454 15.0114 6.98869C15.0156 6.98907 15.02 6.98945 15.0246 6.98983C15.1412 6.99936 15.3035 7.00013 15.6 7.00013H17.5859L15 4.41428ZM10.7071 11.793C11.0976 12.1835 11.0976 12.8166 10.7071 13.2072L8.91421 15.0001L10.7071 16.793C11.0976 17.1835 11.0976 17.8166 10.7071 18.2072C10.3166 18.5977 9.68342 18.5977 9.29289 18.2072L6.79289 15.7072C6.40237 15.3166 6.40237 14.6835 6.79289 14.293L9.29289 11.793C9.68342 11.4024 10.3166 11.4024 10.7071 11.793ZM13.2929 13.2072C12.9024 12.8166 12.9024 12.1835 13.2929 11.793C13.6834 11.4024 14.3166 11.4024 14.7071 11.793L17.2071 14.293C17.5976 14.6835 17.5976 15.3166 17.2071 15.7072L14.7071 18.2072C14.3166 18.5977 13.6834 18.5977 13.2929 18.2072C12.9024 17.8166 12.9024 17.1835 13.2929 16.793L15.0858 15.0001L13.2929 13.2072Z"
                                fill="currentcolor"
                              ></path>
                            </svg>
                          </div>
                        </div>
                        <div className="spacing-block padding-small-plus"></div>
                        <h2 className="heading-style-h4">Create your own kata</h2>
                        <div className="spacing-block padding-small"></div>
                        <p className="text-size-medium-old-old">
                        Design coding challenges that focus on your interests and train specific skill
                         sets. Challenge the community with your insights and coding knowledge. Create
                          everything from common developer interview questions to challenges that push the limits 
                        of your creativity. Gain honor within the BrainBoost.
                        </p>
                      </div>
                      <div
                        id="w-node-_6dca05a4-c2a9-f67c-e911-a478ae3bb885-612cf017"
                        className="panels_item-image-wrapper is-bleed-top"
                      >
                        <div className="noisy-image-wrapper is-rounded">
                          <img
                            src="./Codewars - Achieve mastery through coding practice and developer mentorship_files/6674f0cdb5b7b401612cf095_create-kata.png"
                            loading="lazy"
                            sizes="(max-width: 479px) 100vw, (max-width: 767px) 90vw, (max-width: 991px) 79vw, 118.3125px"
                            srcset="
                            https://cdn.prod.website-files.com/6674f0cdb5b7b401612cf015/6674f0cdb5b7b401612cf095_create-kata-p-500.png 500w,
                            https://cdn.prod.website-files.com/6674f0cdb5b7b401612cf015/6674f0cdb5b7b401612cf095_create-kata.png       744w
                          "
                            alt=""
                            className="noisy-image-image"
                          />
                          <div className="noisy-image-noise"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div> 
            </div>
          </section>
          <section className="section_faq">
            <div className="padding-global">
              <div className="container-small">
                <div className="padding-section-small is-padding-bottom-only">
                  <div className="text-align-center">
                    <h2>What can I use BrainBoost for?</h2>
                    <div className="spacing-block padding-small-plus"></div>
                    <p className="text-size-large">
                      From beginner to expert and beyond...
                    </p>
                  </div>
                </div>
              </div>
              <div className="container-large">
                <div className="padding-section-medium is-padding-bottom-only">
                  <div className="panels_6-column">
                    <div
                      id="w-node-_6a8db5dd-c05b-a0ca-034a-87c76f50c58f-612cf017"
                      className="panels_item is-vertical"
                    >
                      <div className="panels_item-content">
                        <div className="icon-tile is-small is-red">
                          <div className="icon-1x1-small-plus w-embed">
                            <svg
                              width="20"
                              height="20"
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M5.29889 6.86925C4.04365 7.91689 3.16523 9.14798 2.72134 9.85083C2.69189 9.89746 2.67129 9.93013 2.65407 9.95848C2.64271 9.97718 2.63522 9.99013 2.6302 9.99915C2.6302 9.99949 2.6302 9.99982 2.6302 10.0002C2.6302 10.0005 2.6302 10.0008 2.6302 10.0012C2.63522 10.0102 2.64272 10.0231 2.65407 10.0418C2.67129 10.0702 2.69189 10.1029 2.72134 10.1495C3.16523 10.8524 4.04365 12.0834 5.29889 13.1311C6.55217 14.1771 8.13088 15.0002 10.0003 15.0002C11.8698 15.0002 13.4485 14.1771 14.7018 13.1311C15.957 12.0834 16.8354 10.8523 17.2793 10.1495C17.3088 10.1029 17.3294 10.0702 17.3466 10.0418C17.3579 10.0231 17.3654 10.0102 17.3705 10.0012C17.3705 10.0008 17.3705 10.0005 17.3705 10.0002C17.3705 9.99983 17.3705 9.99949 17.3705 9.99915C17.3654 9.99013 17.3579 9.97719 17.3466 9.95848C17.3294 9.93013 17.3088 9.89746 17.2793 9.85083C16.8354 9.14798 15.957 7.91689 14.7018 6.86925C13.4485 5.82325 11.8698 5.00016 10.0003 5.00016C8.13088 5.00016 6.55217 5.82325 5.29889 6.86925ZM4.23095 5.58969C5.67145 4.38743 7.6156 3.3335 10.0003 3.3335C12.3851 3.3335 14.3292 4.38743 15.7697 5.58969C17.2082 6.79031 18.1945 8.17873 18.6885 8.96087C18.695 8.97121 18.7017 8.98175 18.7086 8.99253C18.8066 9.14681 18.9338 9.34713 18.9982 9.6278C19.0501 9.85443 19.0501 10.1459 18.9982 10.3725C18.9338 10.6532 18.8066 10.8535 18.7086 11.0078C18.7017 11.0186 18.695 11.0291 18.6885 11.0395C18.1945 11.8216 17.2082 13.21 15.7697 14.4106C14.3292 15.6129 12.3851 16.6668 10.0003 16.6668C7.6156 16.6668 5.67145 15.6129 4.23095 14.4106C2.79241 13.21 1.80613 11.8216 1.31217 11.0395C1.30565 11.0291 1.29895 11.0186 1.2921 11.0078C1.19409 10.8535 1.06682 10.6532 1.00249 10.3725C0.950545 10.1459 0.950545 9.85443 1.00249 9.6278C1.06682 9.34712 1.19409 9.14681 1.2921 8.99252C1.29895 8.98175 1.30565 8.9712 1.31217 8.96087C1.80613 8.17873 2.79241 6.79031 4.23095 5.58969ZM10.0003 8.3335C9.07985 8.3335 8.33366 9.07969 8.33366 10.0002C8.33366 10.9206 9.07985 11.6668 10.0003 11.6668C10.9208 11.6668 11.667 10.9206 11.667 10.0002C11.667 9.07969 10.9208 8.3335 10.0003 8.3335ZM6.66699 10.0002C6.66699 8.15921 8.15938 6.66683 10.0003 6.66683C11.8413 6.66683 13.3337 8.15921 13.3337 10.0002C13.3337 11.8411 11.8413 13.3335 10.0003 13.3335C8.15938 13.3335 6.66699 11.8411 6.66699 10.0002Z"
                                fill="currentcolor"
                              ></path>
                            </svg>
                          </div>
                        </div>
                        <div className="spacing-block padding-small-plus"></div>
                        <h3 className="heading-style-h5">Get new perspectives</h3>
                        <div className="spacing-block padding-small"></div>
                        <p className="text-size-medium-old-old">
                        Solve challenges, then view how others solved the same problem. Pick
                        up new techniques from some of the most skilled developers in the world.
                        </p>
                      </div>
                    </div>
                    <div
                      id="w-node-_6ec6a705-a191-fbdc-fae4-5836b0204060-612cf017"
                      className="panels_item is-vertical"
                    >
                      <div className="panels_item-content">
                        <div className="icon-tile is-small is-red">
                          <div className="icon-1x1-small-plus w-embed">
                            <svg
                              width="21"
                              height="20"
                              viewBox="0 0 21 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M3.99996 0.833496C4.4602 0.833496 4.83329 1.20659 4.83329 1.66683V1.9975C5.43963 1.81074 6.25683 1.66683 7.33329 1.66683C8.7445 1.66683 9.91388 2.13473 10.9297 2.54119C10.9452 2.5474 10.9607 2.55359 10.9761 2.55977C12.0329 2.98246 12.9327 3.3335 14 3.3335C15.156 3.3335 15.8829 3.14114 16.2946 2.97643C16.5013 2.89378 16.6324 2.81659 16.7018 2.77033C16.7363 2.74729 16.7561 2.73157 16.7627 2.72616C17.0008 2.50237 17.3488 2.43793 17.6522 2.5636C17.9636 2.69258 18.1666 2.99644 18.1666 3.3335V12.5002C18.1666 12.7212 18.0788 12.9331 17.9225 13.0894L17.3333 12.5002C17.9225 13.0894 17.9221 13.0899 17.9217 13.0903L17.9208 13.0912L17.9189 13.093L17.915 13.0969L17.906 13.1056C17.8996 13.1117 17.8922 13.1186 17.8839 13.1261C17.8672 13.1413 17.8468 13.1591 17.8224 13.1792C17.7734 13.2195 17.7086 13.2689 17.6263 13.3237C17.4613 13.4337 17.2278 13.5649 16.9136 13.6906C16.2837 13.9425 15.3439 14.1668 14 14.1668C12.5888 14.1668 11.4194 13.6989 10.4036 13.2925L10.3571 13.2739C9.30039 12.8512 8.40054 12.5002 7.33329 12.5002C6.17722 12.5002 5.45039 12.6925 5.03862 12.8572C4.95931 12.8889 4.89113 12.9199 4.83329 12.9485L4.83329 18.3335C4.83329 18.7937 4.4602 19.1668 3.99996 19.1668C3.53972 19.1668 3.16663 18.7937 3.16663 18.3335L3.16663 12.501C3.16663 12.5004 3.16663 12.4999 3.16663 12.4993L3.16663 3.33385C3.16663 3.33361 3.16663 3.33338 3.16663 3.33314L3.16663 1.66683C3.16663 1.20659 3.53972 0.833496 3.99996 0.833496ZM4.83329 3.78187L4.83329 11.1642C5.43963 10.9774 6.25683 10.8335 7.33329 10.8335C8.7445 10.8335 9.91388 11.3014 10.9297 11.7079L10.9761 11.7264C12.0329 12.1491 12.9327 12.5002 14 12.5002C15.156 12.5002 15.8829 12.3078 16.2946 12.1431C16.3739 12.1114 16.4421 12.0805 16.5 12.0518V4.66949C15.8936 4.85625 15.0764 5.00016 14 5.00016C12.5888 5.00016 11.4194 4.53226 10.4036 4.1258C10.388 4.11959 10.3726 4.1134 10.3571 4.10723C9.30039 3.68453 8.40054 3.3335 7.33329 3.3335C6.17722 3.3335 5.45039 3.52585 5.03862 3.69056C4.95931 3.72228 4.89113 3.7532 4.83329 3.78187Z"
                                fill="currentcolor"
                              ></path>
                            </svg>
                          </div>
                        </div>
                        <div className="spacing-block padding-small-plus"></div>
                        <h3 className="heading-style-h5">Learn new languages</h3>
                        <div className="spacing-block padding-small"></div>
                        <p className="text-size-medium-old-old">
                        Solve challenges in a language you're comfortable with, then do it in a language you want to 
                        improve. Level up across different languages.
                        </p>
                      </div>
                    </div>
                    <div
                      id="w-node-_41736ae3-6d5b-6f88-fdbf-3f55c2200061-612cf017"
                      className="panels_item is-vertical"
                    >
                      <div className="panels_item-content">
                        <div className="icon-tile is-small is-red">
                          <div className="icon-1x1-small-plus w-embed">
                            <svg
                              width="21"
                              height="20"
                              viewBox="0 0 21 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M9.00573 3.3335H11.6608C12.7249 3.33349 13.5726 3.33348 14.2598 3.38791C14.9646 3.44374 15.5677 3.56051 16.1278 3.83093C17.0348 4.26889 17.7884 4.97058 18.2898 5.84409C18.5995 6.38343 18.7589 6.9767 18.8648 7.67577C18.9681 8.3573 19.0285 9.20287 19.1043 10.2642L19.3118 13.1695C19.4468 15.0594 17.95 16.6668 16.0554 16.6668C15.0865 16.6668 14.1677 16.2365 13.5474 15.4921L13.2348 15.117C12.9303 14.7516 12.8387 14.6462 12.7429 14.5646C12.5154 14.3708 12.2399 14.2418 11.9454 14.191C11.8214 14.1697 11.6818 14.1668 11.2062 14.1668H9.46042C8.98477 14.1668 8.84522 14.1697 8.72118 14.191C8.42665 14.2418 8.1512 14.3708 7.92366 14.5646C7.82783 14.6462 7.73631 14.7516 7.4318 15.117L7.11917 15.4921C6.4989 16.2365 5.58006 16.6668 4.61117 16.6668C2.71653 16.6668 1.21979 15.0594 1.35478 13.1695L1.5623 10.2642C1.6381 9.20289 1.6985 8.3573 1.80175 7.67577C1.90765 6.9767 2.06709 6.38343 2.37672 5.84409C2.8782 4.97058 3.6318 4.26889 4.53881 3.83093C5.09884 3.56051 5.70196 3.44374 6.4068 3.38791C7.09396 3.33348 7.94171 3.33349 9.00573 3.3335ZM6.53841 5.04938C5.93493 5.09718 5.56197 5.18768 5.26352 5.33178C4.65885 5.62376 4.15645 6.09155 3.82213 6.67389C3.65713 6.96131 3.54029 7.32688 3.44961 7.92541C3.35741 8.53403 3.3011 9.31376 3.22224 10.4179L3.01721 13.2883C2.95113 14.2133 3.68377 15.0002 4.61117 15.0002C5.08543 15.0002 5.53519 14.7895 5.8388 14.4252L6.15143 14.05C6.16492 14.0338 6.17823 14.0178 6.19136 14.0021C6.43857 13.7052 6.6249 13.4815 6.84309 13.2957C7.29817 12.9081 7.84908 12.6501 8.43812 12.5486C8.72055 12.4999 9.01173 12.5 9.39806 12.5001C9.41857 12.5002 9.43936 12.5002 9.46042 12.5002H11.2062C11.2272 12.5002 11.248 12.5002 11.2685 12.5001C11.6548 12.5 11.946 12.4999 12.2284 12.5486C12.8175 12.6501 13.3684 12.9081 13.8235 13.2957C14.0417 13.4815 14.228 13.7052 14.4752 14.0021C14.4884 14.0179 14.5017 14.0338 14.5151 14.05L14.8278 14.4252C15.1314 14.7895 15.5811 15.0002 16.0554 15.0002C16.9828 15.0002 17.7154 14.2133 17.6494 13.2883L17.4443 10.4179C17.3655 9.31376 17.3092 8.53403 17.217 7.92542C17.1263 7.32688 17.0094 6.96131 16.8444 6.67389C16.5101 6.09155 16.0077 5.62376 15.403 5.33178C15.1046 5.18768 14.7316 5.09718 14.1282 5.04938C13.5145 5.00077 12.7328 5.00016 11.6258 5.00016H9.04075C7.93381 5.00016 7.15205 5.00077 6.53841 5.04938ZM6.99995 6.66683C7.46019 6.66683 7.83329 7.03993 7.83329 7.50016V8.3335H8.66662C9.12686 8.3335 9.49995 8.70659 9.49995 9.16683C9.49995 9.62707 9.12686 10.0002 8.66662 10.0002H7.83329V10.8335C7.83329 11.2937 7.46019 11.6668 6.99995 11.6668C6.53972 11.6668 6.16662 11.2937 6.16662 10.8335V10.0002H5.33329C4.87305 10.0002 4.49995 9.62707 4.49995 9.16683C4.49995 8.70659 4.87305 8.3335 5.33329 8.3335H6.16662V7.50016C6.16662 7.03993 6.53972 6.66683 6.99995 6.66683ZM14.5 8.3335C14.5 7.87326 14.873 7.50016 15.3333 7.50016H15.3416C15.8019 7.50016 16.175 7.87326 16.175 8.3335C16.175 8.79373 15.8019 9.16683 15.3416 9.16683H15.3333C14.873 9.16683 14.5 8.79373 14.5 8.3335ZM12 10.0002C12 9.53993 12.373 9.16683 12.8333 9.16683H12.8416C13.3019 9.16683 13.675 9.53993 13.675 10.0002C13.675 10.4604 13.3019 10.8335 12.8416 10.8335H12.8333C12.373 10.8335 12 10.4604 12 10.0002Z"
                                fill="currentcolor"
                              ></path>
                            </svg>
                          </div>
                        </div>
                        <div className="spacing-block padding-small-plus"></div>
                        <h3 className="heading-style-h5">Compete with peers</h3>
                        <div className="spacing-block padding-small"></div>
                        <p className="text-size-medium-old-old">
                          Compete against your friends, colleagues, and the
                          community at large. Allow competition to motivate you
                          &nbsp;towards mastering your craft.
                        </p>
                      </div>
                    </div>
                    {/* <div
                      id="w-node-d97491b3-b448-e883-20ec-1472063e9930-612cf017"
                      className="panels_item is-vertical"
                    >
                      <div
                        data-delay="5000"
                        data-animation="cross"
                        className="slider w-slider"
                        data-autoplay="true"
                        data-easing="ease-in-out"
                        data-hide-arrows="false"
                        data-disable-swipe="false"
                        data-autoplay-limit="0"
                        data-nav-spacing="3"
                        data-duration="1000"
                        data-infinite="true"
                        id="w-node-_44952b46-38f4-1eb9-219b-2f62812d1ba0-612cf017"
                        role="region"
                        aria-label="carousel"
                      >
                        <div className="w-slider-mask" id="w-slider-mask-0">
                          <div
                            className="w-slide"
                            aria-label="1 of 2"
                            role="group"
                            aria-hidden="true"
                          >
                            <div
                              className="panels_item-content is-slider"
                              aria-hidden="true"
                            >
                              <div
                                className="text-align-center max-width-large align-center"
                                aria-hidden="true"
                              >
                                <p className="heading-style-h3" aria-hidden="true">
                                  Extremely well done and an excellent example
                                  of mastery learning.
                                </p>
                                <div
                                  className="spacing-block padding-medium"
                                  aria-hidden="true"
                                ></div>
                                <div
                                  className="noisy-image-wrapper profile-pic align-center"
                                  aria-hidden="true"
                                >
                                  <img
                                    src="./Codewars - Achieve mastery through coding practice and developer mentorship_files/6674f0cdb5b7b401612cf098_XcDq5TCM_400x400.jpeg"
                                    loading="lazy"
                                    alt=""
                                    className="noisy-image-image profile-pic"
                                    aria-hidden="true"
                                  />
                                  <div
                                    className="noisy-image-noise"
                                    aria-hidden="true"
                                  ></div>
                                </div>
                                <div
                                  className="spacing-block padding-small"
                                  aria-hidden="true"
                                ></div>
                                <p
                                  className="text-size-medium-old-old text-weight-bold"
                                  aria-hidden="true"
                                >
                                  Ahmed Omran
                                </p>
                                <p aria-hidden="true">
                                  <a
                                    href="https://twitter.com/mmelines"
                                    tabindex="-1"
                                    aria-hidden="true"
                                  >
                                    @this_ahmed
                                  </a>
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="w-slide" aria-label="2 of 2" role="group">
                            <div className="panels_item-content is-slider">
                              <div className="text-align-center max-width-large align-center">
                                <p className="heading-style-h3">
                                  Accidentally got addicted to codewars, oops.
                                </p>
                                <div className="spacing-block padding-medium"></div>
                                <div className="display-inlineflex">
                                  <div className="noisy-image-wrapper">
                                    <img
                                      src="./Codewars - Achieve mastery through coding practice and developer mentorship_files/6674f0cdb5b7b401612cf097_molly.jpeg"
                                      loading="lazy"
                                      alt=""
                                      className="noisy-image-image profile-pic"
                                    />
                                    <div className="noisy-image-noise"></div>
                                  </div>
                                </div>
                                <div className="spacing-block padding-small"></div>
                                <p className="text-size-medium-old-old text-weight-bold">
                                  Kelly Williams
                                </p>
                                <p>Coder</p>
                              </div>
                            </div>
                          </div>
                          <div
                            aria-live="off"
                            aria-atomic="true"
                            className="w-slider-aria-label"
                            data-wf-ignore=""
                          >
                            Slide 2 of 2.
                          </div>
                        </div>
                        <div
                          className="slider-arrow w-slider-arrow-left"
                          role="button"
                          tabindex="0"
                          aria-controls="w-slider-mask-0"
                          aria-label="previous slide"
                        >
                          <div className="w-icon-slider-left"></div>
                        </div>
                        <div
                          className="slider-arrow w-slider-arrow-right"
                          role="button"
                          tabindex="0"
                          aria-controls="w-slider-mask-0"
                          aria-label="next slide"
                        >
                          <div className="w-icon-slider-right"></div>
                        </div>
                        <div className="slider-nav w-slider-nav w-round">
                          <div
                            className="w-slider-dot"
                            data-wf-ignore=""
                            aria-label="Show slide 1 of 2"
                            aria-pressed="false"
                            role="button"
                            tabindex="-1"
                          ></div>
                          <div
                            className="w-slider-dot w-active"
                            data-wf-ignore=""
                            aria-label="Show slide 2 of 2"
                            aria-pressed="true"
                            role="button"
                            tabindex="0"
                          ></div>
                        </div>
                      </div>
                    </div> */}
                    <div
                      id="w-node-_9f23248e-74b7-e718-6231-15743f7ea4ba-612cf017"
                      className="panels_item is-vertical"
                    >
                      <div className="panels_item-content">
                        <div className="icon-tile is-small is-red">
                          <div className="icon-1x1-small-plus w-embed">
                            <svg
                              width="20"
                              height="20"
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <g clipPath="url(#clip0_443_1488)">
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M10 2.50016C5.85787 2.50016 2.50001 5.85803 2.50001 10.0002C2.50001 14.1423 5.85787 17.5002 10 17.5002C14.1421 17.5002 17.5 14.1423 17.5 10.0002C17.5 5.85803 14.1421 2.50016 10 2.50016ZM0.833344 10.0002C0.833344 4.93755 4.9374 0.833496 10 0.833496C15.0626 0.833496 19.1667 4.93755 19.1667 10.0002C19.1667 15.0628 15.0626 19.1668 10 19.1668C4.9374 19.1668 0.833344 15.0628 0.833344 10.0002ZM6.25001 7.50016C6.25001 6.80981 6.80965 6.25016 7.50001 6.25016C8.19037 6.25016 8.75001 6.80981 8.75001 7.50016C8.75001 8.19052 8.19037 8.75016 7.50001 8.75016C6.80965 8.75016 6.25001 8.19052 6.25001 7.50016ZM11.25 7.50016C11.25 6.80981 11.8097 6.25016 12.5 6.25016C13.1904 6.25016 13.75 6.80981 13.75 7.50016C13.75 8.19052 13.1904 8.75016 12.5 8.75016C11.8097 8.75016 11.25 8.19052 11.25 7.50016Z"
                                  fill="white"
                                ></path>
                                <path
                                  d="M7.33073 11.1634C7.05391 10.7982 6.53371 10.7249 6.16668 11.0002C5.79849 11.2763 5.72387 11.7986 6.00001 12.1668L6.00181 12.1692L6.0041 12.1722L6.0101 12.1801L6.02785 12.2028C6.04222 12.2209 6.06168 12.245 6.08614 12.2742C6.13501 12.3324 6.20418 12.4113 6.29288 12.5038C6.46961 12.6882 6.72787 12.9311 7.06195 13.1741C7.7269 13.6577 8.72873 14.1668 10 14.1668C11.2713 14.1668 12.2731 13.6577 12.9381 13.1741C13.2721 12.9311 13.5304 12.6882 13.7071 12.5038C13.7958 12.4113 13.865 12.3324 13.9139 12.2742C13.9383 12.245 13.9578 12.2209 13.9722 12.2028L13.9899 12.1801L13.9959 12.1722L13.9982 12.1692L13.9992 12.1679L14 12.1668C14.2762 11.7986 14.2015 11.2763 13.8333 11.0002C13.4663 10.7249 12.9461 10.7982 12.6693 11.1634L12.6654 11.1683C12.6605 11.1746 12.651 11.1863 12.6373 11.2027C12.6096 11.2356 12.5649 11.287 12.5038 11.3507C12.3811 11.4787 12.1966 11.6525 11.9578 11.8262C11.4769 12.1759 10.8121 12.5002 10 12.5002C9.18795 12.5002 8.52312 12.1759 8.04224 11.8262C7.8034 11.6525 7.61895 11.4787 7.4962 11.3507C7.43517 11.287 7.3904 11.2356 7.36277 11.2027C7.34898 11.1863 7.33955 11.1746 7.33459 11.1683L7.33073 11.1634Z"
                                  fill="white"
                                ></path>
                              </g>
                              <defs>
                                <clippath id="clip0_443_1488">
                                  <rect
                                    width="20"
                                    height="20"
                                    fill="currentcolor"
                                  ></rect>
                                </clippath>
                              </defs>
                            </svg>
                          </div>
                        </div>
                        <div className="spacing-block padding-small-plus"></div>
                        <h3 className="heading-style-h5">Build self-confidence</h3>
                        <div className="spacing-block padding-small"></div>
                        <p className="text-size-medium-old-old">
                          Not sure if you are progressing well as a programmer?
                          Push yourself to your limits and show yourself what
                          you are really made of.
                        </p>
                      </div>
                    </div>
                    <div
                      id="w-node-_709d73ed-45f6-b4a2-f304-0b75f732a915-612cf017"
                      className="panels_item is-vertical"
                    >
                      <div className="panels_item-content">
                        <div className="icon-tile is-small is-red">
                          <div className="icon-1x1-small-plus w-embed">
                            <svg
                              width="20"
                              height="20"
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <g clipPath="url(#clip0_443_1492)">
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M10 2.50016C5.8579 2.50016 2.50004 5.85803 2.50004 10.0002C2.50004 14.1423 5.8579 17.5002 10 17.5002C14.1422 17.5002 17.5 14.1423 17.5 10.0002C17.5 5.85803 14.1422 2.50016 10 2.50016ZM0.833374 10.0002C0.833374 4.93755 4.93743 0.833496 10 0.833496C15.0626 0.833496 19.1667 4.93755 19.1667 10.0002C19.1667 15.0628 15.0626 19.1668 10 19.1668C4.93743 19.1668 0.833374 15.0628 0.833374 10.0002ZM9.99673 6.43639C8.89961 5.65938 7.38948 5.5541 6.18983 6.5791C4.81128 7.75697 4.60629 9.75156 5.70212 11.1617C6.28193 11.9078 7.69038 13.2145 8.56941 14.01L8.58775 14.0266C8.72115 14.1474 8.85549 14.269 8.98013 14.3645C9.12118 14.4726 9.29349 14.5826 9.51387 14.6493C9.82522 14.7437 10.1691 14.7437 10.4805 14.6493C10.7009 14.5826 10.8732 14.4726 11.0142 14.3645C11.1389 14.269 11.2732 14.1474 11.4066 14.0266L11.425 14.01C12.304 13.2145 13.7124 11.9078 14.2923 11.1617C15.3807 9.76103 15.2122 7.74894 13.7959 6.57179C12.5878 5.56775 11.092 5.65965 9.99673 6.43639ZM9.36392 8.09843C8.77609 7.41121 7.90672 7.30434 7.27249 7.84623C6.56351 8.45201 6.4746 9.43958 7.01812 10.139C7.48833 10.744 8.76901 11.9429 9.68773 12.7742C9.84704 12.9184 9.9301 12.9927 9.99382 13.0415C9.99497 13.0424 9.99609 13.0433 9.99719 13.0441C9.99828 13.0433 9.9994 13.0424 10.0005 13.0415C10.0643 12.9927 10.1473 12.9184 10.3066 12.7742C11.2254 11.9429 12.506 10.744 12.9762 10.139C13.5271 9.43011 13.4377 8.44128 12.7305 7.85354C12.0698 7.30437 11.212 7.41856 10.6305 8.09843C10.4721 8.28352 10.2408 8.39008 9.99719 8.39008C9.75362 8.39008 9.52224 8.28352 9.36392 8.09843Z"
                                  fill="white"
                                ></path>
                              </g>
                              <defs>
                                <clippath id="clip0_443_1492">
                                  <rect
                                    width="20"
                                    height="20"
                                    fill="currentcolor"
                                  ></rect>
                                </clippath>
                              </defs>
                            </svg>
                          </div>
                        </div>
                        <div className="spacing-block padding-small-plus"></div>
                        <h3 className="heading-style-h5">Become a mentor</h3>
                        <div className="spacing-block padding-small"></div>
                        <p className="text-size-medium-old-old">
                          Lend your expertise to others, either indirectly by
                          contributing great solutions or directly by creating
                          your own kata and reviewing code.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="section_latest">
            <div className="padding-global">
              <div className="container-small">
                <div className="padding-section-small is-padding-bottom-only">
                  <div className="text-align-center">
                    <h2>The latest</h2>
                    <div className="spacing-block padding-small-plus"></div>
                    <p className="text-size-large">
                      Insights from Codewars staff and community.
                    </p>
                  </div>
                </div>
              </div>
              <div className="container-large">
                <div className="padding-section-medium is-padding-bottom-only">
                  <div className="blog7_featured-list-wrapper w-dyn-list">
                    <div role="list" className="blog7_featured-list w-dyn-items">
                      <div
                        role="listitem"
                        className="blog7_featured-item w-dyn-item"
                      >
                        <div className="blog7_item-link">
                          <div className="blog7_featured-item-wrapper">
                            <a
                              href="https://www.codewars.com/post/authors-corner-meet-geoffp"
                              className="blog7_image-wrapper is-featured-article w-inline-block"
                            >
                              <img
                                src="./Codewars - Achieve mastery through coding practice and developer mentorship_files/6674f0cdb5b7b401612cf2aa_CW Blog post headings  (3).png"
                                loading="lazy"
                                alt="Author&#39;s Corner, meet geoffp"
                                sizes="(max-width: 479px) 100vw, (max-width: 767px) 95vw, (max-width: 991px) 92vw, 38vw"
                                srcset="
                                https://cdn.prod.website-files.com/6674f0cdb5b7b401612cf020/6674f0cdb5b7b401612cf2aa_CW%2520Blog%2520post%2520headings%2520%2520(3)-p-500.png   500w,
                                https://cdn.prod.website-files.com/6674f0cdb5b7b401612cf020/6674f0cdb5b7b401612cf2aa_CW%2520Blog%2520post%2520headings%2520%2520(3)-p-800.png   800w,
                                https://cdn.prod.website-files.com/6674f0cdb5b7b401612cf020/6674f0cdb5b7b401612cf2aa_CW%2520Blog%2520post%2520headings%2520%2520(3)-p-1080.png 1080w,
                                https://cdn.prod.website-files.com/6674f0cdb5b7b401612cf020/6674f0cdb5b7b401612cf2aa_CW%20Blog%20post%20headings%20%20(3).png                  1200w
                              "
                                className="blog7_image"
                              />
                              <div className="noisy-image-noise"></div>
                            </a>
                            <div className="blog7_featured-item-content">
                              <div className="blog7_item-content-top">
                                <div className="simple-row">
                                  <a
                                    href="https://www.codewars.com/blog-categories/authors-corner"
                                    className="pill"
                                  >
                                    Author's Corner
                                  </a>
                                </div>
                                <div className="spacing-block padding-small-plus"></div>
                                <a
                                  href="https://www.codewars.com/post/authors-corner-meet-geoffp"
                                  className="w-inline-block"
                                >
                                  <h3>Author's Corner, meet geoffp</h3>
                                  <div className="spacing-block-old padding-small"></div>
                                  <div className="text-size-medium">
                                    Author’s Corner is a new series that
                                    spotlights Codewars community members who
                                    contribute new and exciting Kata to
                                    Codewars.
                                  </div>
                                </a>
                                <div className="spacing-block padding-small-plus"></div>
                              </div>
                              <div className="blog7_author-wrapper">
                                <div className="noisy-image-wrapper profile-pic">
                                  <img
                                    loading="lazy"
                                    alt=""
                                    src="./Codewars - Achieve mastery through coding practice and developer mentorship_files/6674f0cdb5b7b401612cf2a2_pop art profile.png"
                                    sizes="(max-width: 479px) 100vw, 64px"
                                    srcset="
                                    https://cdn.prod.website-files.com/6674f0cdb5b7b401612cf020/6674f0cdb5b7b401612cf2a2_pop%2520art%2520profile-p-500.png   500w,
                                    https://cdn.prod.website-files.com/6674f0cdb5b7b401612cf020/6674f0cdb5b7b401612cf2a2_pop%2520art%2520profile-p-800.png   800w,
                                    https://cdn.prod.website-files.com/6674f0cdb5b7b401612cf020/6674f0cdb5b7b401612cf2a2_pop%2520art%2520profile-p-1080.png 1080w,
                                    https://cdn.prod.website-files.com/6674f0cdb5b7b401612cf020/6674f0cdb5b7b401612cf2a2_pop%20art%20profile.png            1200w
                                  "
                                    className="noisy-image-image"
                                  />
                                  <div className="noisy-image-noise"></div>
                                </div>
                                <div className="blog7_author-text">
                                  <div className="text-weight-bold">
                                    Vanessa Greene
                                  </div>
                                  <div className="blog7_date-wrapper">
                                    <div className="text-size-small">
                                      May 29, 2024
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="spacing-block padding-small-plus"></div>
                  <div className="blog7_list-wrapper w-dyn-list">
                    <div role="list" className="blog7_list w-dyn-items">
                      <div role="listitem" className="blog7_item w-dyn-item">
                        <div className="blog7_item-link">
                          <a
                            href="https://www.codewars.com/post/whats-new-in-codewars-april-highlights"
                            className="blog7_image-wrapper w-inline-block"
                          >
                            <img
                              src="./Codewars - Achieve mastery through coding practice and developer mentorship_files/6674f0cdb5b7b401612cf2a8_CW Blog post headings THUMBNAIL  (800 x 800 px).png"
                              loading="lazy"
                              alt=""
                              sizes="(max-width: 479px) 100vw, (max-width: 767px) 95vw, (max-width: 991px) 92vw, 46vw"
                              srcset="
                              https://cdn.prod.website-files.com/6674f0cdb5b7b401612cf020/6674f0cdb5b7b401612cf2a8_CW%2520Blog%2520post%2520headings%2520THUMBNAIL%2520%2520(800%2520x%2520800%2520px)-p-500.png 500w,
                              https://cdn.prod.website-files.com/6674f0cdb5b7b401612cf020/6674f0cdb5b7b401612cf2a8_CW%20Blog%20post%20headings%20THUMBNAIL%20%20(800%20x%20800%20px).png                         800w
                            "
                              className="blog7_image"
                            />
                            <div className="noisy-image-noise"></div>
                          </a>
                          <div className="blog7_item-content">
                            <div className="blog7_item-content-top">
                              <div className="simple-row">
                                <a
                                  href="https://www.codewars.com/blog-categories/codewars"
                                  className="pill"
                                >
                                  Product News
                                </a>
                              </div>
                              <div className="spacing-block padding-small-plus"></div>
                              <a
                                href="https://www.codewars.com/post/whats-new-in-codewars-april-highlights"
                                className="w-inline-block"
                              >
                                <h3 className="heading-style-h4">
                                  What's new in Codewars: April highlights
                                </h3>
                                <div className="spacing-block padding-small"></div>
                                <div className="text-size-medium">
                                  Welcome back to this month’s highlights from
                                  the Codewars engineering team!
                                </div>
                              </a>
                              <div className="spacing-block padding-small-plus"></div>
                            </div>
                            <div className="blog7_author-wrapper">
                              <div className="noisy-image-wrapper profile-pic">
                                <img
                                  loading="lazy"
                                  alt=""
                                  src="./Codewars - Achieve mastery through coding practice and developer mentorship_files/6674f0cdb5b7b401612cf2a2_pop art profile.png"
                                  sizes="(max-width: 479px) 100vw, 64px"
                                  srcset="
                                  https://cdn.prod.website-files.com/6674f0cdb5b7b401612cf020/6674f0cdb5b7b401612cf2a2_pop%2520art%2520profile-p-500.png   500w,
                                  https://cdn.prod.website-files.com/6674f0cdb5b7b401612cf020/6674f0cdb5b7b401612cf2a2_pop%2520art%2520profile-p-800.png   800w,
                                  https://cdn.prod.website-files.com/6674f0cdb5b7b401612cf020/6674f0cdb5b7b401612cf2a2_pop%2520art%2520profile-p-1080.png 1080w,
                                  https://cdn.prod.website-files.com/6674f0cdb5b7b401612cf020/6674f0cdb5b7b401612cf2a2_pop%20art%20profile.png            1200w
                                "
                                  className="noisy-image-image"
                                />
                                <div className="noisy-image-noise"></div>
                              </div>
                              <div className="blog7_author-text">
                                <div className="text-weight-bold">
                                  Vanessa Greene
                                </div>
                                <div className="blog7_date-wrapper">
                                  <div className="text-size-small">
                                    May 24, 2024
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div role="listitem" className="blog7_item w-dyn-item">
                        <div className="blog7_item-link">
                          <a
                            href="https://www.codewars.com/post/introducing-the-epic-challenge-2024"
                            className="blog7_image-wrapper w-inline-block"
                          >
                            <img
                              src="./Codewars - Achieve mastery through coding practice and developer mentorship_files/6674f0cdb5b7b401612cf2a4_CW Blog post headings .png"
                              loading="lazy"
                              alt=""
                              sizes="(max-width: 479px) 100vw, (max-width: 767px) 95vw, (max-width: 991px) 92vw, 46vw"
                              srcset="
                              https://cdn.prod.website-files.com/6674f0cdb5b7b401612cf020/6674f0cdb5b7b401612cf2a4_CW%2520Blog%2520post%2520headings%2520-p-500.png   500w,
                              https://cdn.prod.website-files.com/6674f0cdb5b7b401612cf020/6674f0cdb5b7b401612cf2a4_CW%2520Blog%2520post%2520headings%2520-p-800.png   800w,
                              https://cdn.prod.website-files.com/6674f0cdb5b7b401612cf020/6674f0cdb5b7b401612cf2a4_CW%2520Blog%2520post%2520headings%2520-p-1080.png 1080w,
                              https://cdn.prod.website-files.com/6674f0cdb5b7b401612cf020/6674f0cdb5b7b401612cf2a4_CW%20Blog%20post%20headings%20.png                1200w
                            "
                              className="blog7_image"
                            />
                            <div className="noisy-image-noise"></div>
                          </a>
                          <div className="blog7_item-content">
                            <div className="blog7_item-content-top">
                              <div className="simple-row">
                                <a
                                  href="https://www.codewars.com/blog-categories/competitions"
                                  className="pill"
                                >
                                  Competitions
                                </a>
                              </div>
                              <div className="spacing-block padding-small-plus"></div>
                              <a
                                href="https://www.codewars.com/post/introducing-the-epic-challenge-2024"
                                className="w-inline-block"
                              >
                                <h3 className="heading-style-h4">
                                  Introducing the EPIC Challenge 2024
                                </h3>
                                <div className="spacing-block padding-small"></div>
                                <div className="text-size-medium">
                                  🏆 Introducing The EPIC Challenge a two-part
                                  coding challenge in honor of Andela's 10-year
                                  anniversary.
                                </div>
                              </a>
                              <div className="spacing-block padding-small-plus"></div>
                            </div>
                            <div className="blog7_author-wrapper">
                              <div className="noisy-image-wrapper profile-pic">
                                <img
                                  loading="lazy"
                                  alt=""
                                  src="./Codewars - Achieve mastery through coding practice and developer mentorship_files/6674f0cdb5b7b401612cf2a2_pop art profile.png"
                                  sizes="(max-width: 479px) 100vw, 64px"
                                  srcset="
                                  https://cdn.prod.website-files.com/6674f0cdb5b7b401612cf020/6674f0cdb5b7b401612cf2a2_pop%2520art%2520profile-p-500.png   500w,
                                  https://cdn.prod.website-files.com/6674f0cdb5b7b401612cf020/6674f0cdb5b7b401612cf2a2_pop%2520art%2520profile-p-800.png   800w,
                                  https://cdn.prod.website-files.com/6674f0cdb5b7b401612cf020/6674f0cdb5b7b401612cf2a2_pop%2520art%2520profile-p-1080.png 1080w,
                                  https://cdn.prod.website-files.com/6674f0cdb5b7b401612cf020/6674f0cdb5b7b401612cf2a2_pop%20art%20profile.png            1200w
                                "
                                  className="noisy-image-image"
                                />
                                <div className="noisy-image-noise"></div>
                              </div>
                              <div className="blog7_author-text">
                                <div className="text-weight-bold">
                                  Vanessa Greene
                                </div>
                                <div className="blog7_date-wrapper">
                                  <div className="text-size-small">
                                    April 29, 2024
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="section_qualified">
            <div className="padding-global">
              <div className="container-large">
                <div className="padding-section-medium is-padding-bottom-only">
                  <div className="panels_item background-gradient-green-20">
                    <div className="panels_item-content">
                      <div className="text-align-center max-width-large align-center">
                        <h6>BrainBoost IS&nbsp;BUILT ON</h6>
                        <div className="spacing-block padding-medium"></div>
                        <img
                          src="./Codewars - Achieve mastery through coding practice and developer mentorship_files/6674f0cdb5b7b401612cf0f1_qualified-full-color-white.svg"
                          loading="lazy"
                          width="208"
                          height="120"
                          alt=""
                        />
                        <div className="spacing-block padding-medium"></div>
                        <p className="text-size-medium-old-old">
                        The world's most advanced coding assessment platform for organizations 
                        looking to scale their hiring, upskilling, and certification programs.
                        </p>
                        <div className="spacing-block padding-medium"></div>
                        <a
                          href="/about"
                          target="_blank"
                          className="button is-qualified w-button"
                        >
                          Learn more
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </section>
    </div>
  );
};

export default LandingPage;
