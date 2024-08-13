import React from 'react';
import './landingpage.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <header className="header">
        <div className="header-content">
          <h1>Learn to Code</h1>
          <p>With the world’s largest web developer site.</p>
          <div className="search-bar">
            <input type="text" placeholder="Search our tutorials, e.g. HTML" />
            <button>Search</button>
          </div>
          <a href="/">Not Sure Where To Begin?</a>
        </div>
      </header>
      <section className="content">
        <div className="content-section">
          <h2>HTML</h2>
          <p>The language for building web pages</p>
          <button>Learn HTML</button>
        </div>
        <div className="content-section">
          <h2>CSS</h2>
          <p>The language for styling web pages</p>
          <button>Learn CSS</button>
        </div>
        <div className="content-section">
          <h2>JavaScript</h2>
          <p>The language for programming web pages</p>
          <button>Learn JavaScript</button>
        </div>
        {/* Add more sections as needed */}
      </section>
      <section className="sidebar">
        <div className="sidebar-section">
          <h3>Popular Tutorials</h3>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            {/* Add more tutorials as needed */}
          </ul>
        </div>
        <div className="sidebar-section">
          <h3>Popular Subjects</h3>
          <ul>
            <li>Web Development</li>
            <li>Computer Science</li>
            <li>Data Science</li>
            {/* Add more subjects as needed */}
          </ul>
        </div>
      </section>
      <section>
      <div class="section">
        <h1>Hands-on Learning</h1>
        <div class="features">
            <div class="feature-item">
                <strong>AI-assisted learning</strong>
                Make progress faster with our AI Learning Assistant, a tool that automatically understands your current course, instructions, and solution code — and gives you instant, personalized feedback.
            </div>
            <div class="feature-item">
                <strong>Real-world projects</strong>
            </div>
            <div class="feature-item">
                <strong>Job-readiness checker</strong>
            </div>
            <div class="feature-item">
                <strong>Interview simulator</strong>
            </div>
            <div class="feature-item">
                <strong>Assessments</strong>
            </div>
        </div>
        <div>
            <a href="#" class="get-started-button">Get started</a>
            <a href="#" class="explore-features-button">Explore features</a>
        </div>
        <div class="image-section">
            <img src="/image.png" alt="AI Learning Assistant Screenshot"></img>
        </div>
    </div>
      </section>
      <section>
      <div data-reach-tabs="" data-orientation="vertical">
    <div class="gamut-9tx4dj-FlexBox e1tc6bzh0">
        <div class="gamut-1x2f5bg-Box ebnwbv90">
            <div role="tablist" aria-orientation="vertical" class="gamut-1fttcpj e8rvzve4" data-reach-tab-list="">
                <div class="gamut-bklxox-Box e8rvzve2">
                    <button aria-controls="tabs--panel--0" aria-selected="true" role="tab" tabindex="0" aria-expanded="true" class="gamut-0 e8rvzve3" data-reach-tab="" data-orientation="vertical" id="tabs--tab--0" type="button" data-selected="">
                        <span aria-label="AI-assisted learning : " role="button" class="e8rvzve1 gamut-y35408-StyledText e8i0p5k0">AI-assisted learning</span>
                        <span aria-hidden="false" class="e8rvzve0 gamut-soay3i-StyledText e8i0p5k0">
                            Make progress faster with our AI Learning Assistant, a tool that automatically understands your current course, instructions, and solution code — and gives you instant, personalized feedback.
                        </span>
                    </button>
                </div>
                <div class="gamut-e0ps8k-Box e8rvzve2">
                    <button aria-controls="tabs--panel--1" aria-selected="false" role="tab" tabindex="-1" aria-expanded="false" class="gamut-0 e8rvzve3" data-reach-tab="" data-orientation="vertical" id="tabs--tab--1" type="button">
                        <span aria-label="Real-world projects  " role="button" class="e8rvzve1 gamut-1ixwogc-StyledText e8i0p5k0">Real-world projects</span>
                        <span aria-hidden="true" class="e8rvzve0 gamut-1hhe2p-StyledText e8i0p5k0">
                            Take what you're learning into the real world. Choose from guided projects that help you solidify new concepts — or test yourself with independent projects designed to build your portfolio.
                        </span>
                    </button>
                </div>
                <div class="gamut-e0ps8k-Box e8rvzve2">
                    <button aria-controls="tabs--panel--2" aria-selected="false" role="tab" tabindex="-1" aria-expanded="false" class="gamut-0 e8rvzve3" data-reach-tab="" data-orientation="vertical" id="tabs--tab--2" type="button">
                        <span aria-label="Job-readiness checker  " role="button" class="e8rvzve1 gamut-1ixwogc-StyledText e8i0p5k0">Job-readiness checker</span>
                        <span aria-hidden="true" class="e8rvzve0 gamut-1hhe2p-StyledText e8i0p5k0">
                            See how well your skills and experience meet the requirements for jobs you're interested in. AI generates a personalized report to show you how ready you are for your dream job and where to improve to qualify for a role.
                        </span>
                    </button>
                </div>
                <div class="gamut-e0ps8k-Box e8rvzve2">
                    <button aria-controls="tabs--panel--3" aria-selected="false" role="tab" tabindex="-1" aria-expanded="false" class="gamut-0 e8rvzve3" data-reach-tab="" data-orientation="vertical" id="tabs--tab--3" type="button">
                        <span aria-label="Interview simulator  " role="button" class="e8rvzve1 gamut-1ixwogc-StyledText e8i0p5k0">Interview simulator</span>
                        <span aria-hidden="true" class="e8rvzve0 gamut-1hhe2p-StyledText e8i0p5k0">
                            Use AI to identify strengths and get personalized, actionable feedback to improve your interviewing skills. Easily see what's needed to improve your skills — no matter what stage you're at in your career.
                        </span>
                    </button>
                </div>
                <div class="gamut-e0ps8k-Box e8rvzve2">
                    <button aria-controls="tabs--panel--4" aria-selected="false" role="tab" tabindex="-1" aria-expanded="false" class="gamut-0 e8rvzve3" data-reach-tab="" data-orientation="vertical" id="tabs--tab--4" type="button">
                        <span aria-label="Assessments  " role="button" class="e8rvzve1 gamut-1ixwogc-StyledText e8i0p5k0">Assessments</span>
                        <span aria-hidden="true" class="e8rvzve0 gamut-1hhe2p-StyledText e8i0p5k0">
                            Test new skills as you learn them so you can better understand and apply new concepts. You'll also see which topics need more review and get practice recommendations to continue to improve.
                        </span>
                    </button>
                </div>
            </div>
        </div>
        <div  data-reach-tab-panels="">
            <div aria-labelledby="tabs--tab--0" role="tabpanel" tabindex="0" data-reach-tab-panel="" id="tabs--panel--0">
                <div class="gamut-1pocs8b-Box ebnwbv90">
                    <img src="https://images.ctfassets.net/go6kr6r0ykrq/2J9Iiiot6gqvSzqc0QLd8l/581fa9bef7e50f2a3a939b1637cc3646/ala_demo.png" alt="Image of an AI provided error explanation within Codecademy's learning environment" class="gamut-3ls2pz eubpdj90"></img>
                </div>
            </div>
            <div aria-labelledby="tabs--tab--1" role="tabpanel" tabindex="-1" data-reach-tab-panel="" id="tabs--panel--1" hidden="">
                <div class="gamut-1pocs8b-Box ebnwbv90">
                    <img src="https://images.ctfassets.net/go6kr6r0ykrq/1xYsvp1VziTSys79NvJBN2/9ef1741f87d39560b2e2a2ae9590eea6/real-world-projects.webp" alt="An AI-generated hint within the instructions of a Codecademy project" class="gamut-3ls2pz eubpdj90"></img>
                </div>
            </div>
            <div aria-labelledby="tabs--tab--2" role="tabpanel" tabindex="-1" data-reach-tab-panel="" id="tabs--panel--2" hidden="">
                <div class="gamut-1pocs8b-Box ebnwbv90">
                    <div class="gamut-1v365f0 e1oynmvg1">
                        <img alt="Animated GIF of Codecademy's Job Readiness Checker tool generating a compatibility report for a senior software engineer role" src="https://images.ctfassets.net/go6kr6r0ykrq/1JKBMlnVDosLUthwRCmJKu/6b0875f4cfcfea297e3096848925fcbb/job-readiness-checker.gif" class="gamut-3ls2pz eubpdj90"></img>
                        <span aria-live="polite" class="gamut-xz9pfx-HiddenText e88fw8k0">
                            Animated GIF of Codecademy's Job Readiness Checker tool generating a compatibility report for a senior software engineer role, playing
                        </span>
                        <button aria-label="Pause animated image" class="e116l7sm0 gamut-1dhw9eh-ResetElement-createButtonComponent e1bhhzie1" type="button">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#fff" role="img" aria-hidden="true" class="gamut-1ct6g6n eol2zvm0">
                                <mask id="PauseIcon-mask-:r3o:">
                                    <rect x="5.25" y="3.75" width="4.5" height="16.5" rx="1.5" ry="1.5" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></rect>
                                    <rect x="14.25" y="3.75" width="4.5" height="16.5" rx="1.5" ry="1.5" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></rect>
                                </mask>
                                <g mask="url(#PauseIcon-mask-:r3o:)">
                                    <rect width="100%" height="100%" fill="currentColor"></rect>
                                </g>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            <div aria-labelledby="tabs--tab--3" role="tabpanel" tabindex="-1" data-reach-tab-panel="" id="tabs--panel--3" hidden="">
                <div class="gamut-1pocs8b-Box ebnwbv90">
                    <div class="gamut-1v365f0 e1oynmvg1">
                        <img alt="Animated GIF of building a phone screen interview using Codecademy's Interview Simulator" src="https://images.ctfassets.net/go6kr6r0ykrq/5fmdPtLARKlXry1M5OoJqG/8fe790abf3dd5692da94f1e1dd26cf2f/interview-simulator.gif" class="gamut-3ls2pz eubpdj90"></img>
                        <span aria-live="polite" class="gamut-xz9pfx-HiddenText e88fw8k0">
                            Animated GIF of building a phone screen interview using Codecademy's Interview Simulator, playing
                        </span>
                        <button aria-label="Pause animated image" class="e116l7sm0 gamut-1dhw9eh-ResetElement-createButtonComponent e1bhhzie1" type="button">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#fff" role="img" aria-hidden="true" class="gamut-1ct6g6n eol2zvm0">
                                <mask id="PauseIcon-mask-:r3p:">
                                    <rect x="5.25" y="3.75" width="4.5" height="16.5" rx="1.5" ry="1.5" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></rect>
                                    <rect x="14.25" y="3.75" width="4.5" height="16.5" rx="1.5" ry="1.5" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></rect>
                                </mask>
                                <g mask="url(#PauseIcon-mask-:r3p:)">
                                    <rect width="100%" height="100%" fill="currentColor"></rect>
                                </g>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            <div aria-labelledby="tabs--tab--4" role="tabpanel" tabindex="-1" data-reach-tab-panel="" id="tabs--panel--4" hidden="">
                <div class="gamut-1pocs8b-Box ebnwbv90">
                    <img src="https://images.ctfassets.net/go6kr6r0ykrq/4f1e037t59en4WWC2ACEZl/c698a97aca33a93baca5c2d116c4c614/assessments.webp" alt="A fill-in-the-blank JavaScript question in a Codecademy assessment" class="gamut-3ls2pz eubpdj90"></img>
                </div>
            </div>
        </div>
    </div>
</div>

       </section>
      <footer className="footer">
        <p>&copy; 2024 Study&Quiz. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
