import React from 'react';
import './profile.css';

const Profile = () => {
    return (
        <div className="profile-container">
            {/* Header */}
            <header className="header">
                <div className="logo">GfG</div>
                <nav>
                    <ul>
                        <li>Courses</li>
                        <li>Tutorials</li>
                        <li>Jobs</li>
                        <li>Practice</li>
                        <li>Contests</li>
                    </ul>
                </nav>
            </header>

            {/* Main Content */}
            <div className="main-content">
                {/* Side Menu */}
                <aside className="side-menu">
                    <ul>
                        <li>Profile</li>
                        <li>Saved Items</li>
                        <li>Contributions</li>
                        <li>Colleges</li>
                        <li>Companies</li>
                        <li>Campus Ambassador</li>
                    </ul>
                </aside>

                {/* Profile Information */}
                <section className="profile-info">
                    <div className="profile-header">
                        <div className="profile-pic">S</div>
                        <div className="profile-details">
                            <h2>savansaini2021</h2>
                            <p>Institution: Chaudhary Charan Singh University (CCS) Meerut</p>
                            <p>Language Used: C++</p>
                        </div>
                    </div>

                    <div className="profile-stats">
                        <div className="stat-item">
                            <h3>Current POTD Streak</h3>
                            <p>00/1104 days</p>
                        </div>
                        <div className="stat-item">
                            <h3>Overall Coding Score</h3>
                            <p>--</p>
                        </div>
                        <div className="stat-item">
                            <h3>Total Problems Solved</h3>
                            <p>2</p>
                        </div>
                        <div className="stat-item">
                            <h3>Monthly Coding Score</h3>
                            <p>--</p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Profile;
