import React from 'react';
import { Aboutstyles } from '../utils/constants';
import teamWorking from '../assets/teamWorkingTogether.jpg'
import ourMission from '../assets/ourMission.jpg'
import meetOurTeam from '../assets/meetOurTeam.jpg'
import ourValues from '../assets/ourValues.jpg'
import ourJourney from '../assets/ourJourney.png'

const About = () => {
    return (
        <div style={Aboutstyles.container}>
            <h2 style={Aboutstyles.heading}>About Us</h2>
            <section style={Aboutstyles.section}>
                <img src={teamWorking}
                    alt="Team is working together"
                    style={Aboutstyles.image} />
                <div style={Aboutstyles.text}>
                    <h2>Who We Are</h2>
                    <p>
                        Digital Solutions Hub is a team of passionate individuals committed to driving digital transformation for
                        businesses worldwide. With a focus on innovation, collaboration, and excellence, we empower organizations to
                        thrive in the digital era.
                    </p>
                </div>
            </section>

            <section style={Aboutstyles.section}>
                <img
                    src={ourMission}
                    alt="Our Mission"
                    style={Aboutstyles.image}
                />
                <div style={Aboutstyles.text}>
                    <h2>Our Mission</h2>
                    <p>
                        Our mission is to deliver exceptional digital solutions that transform challenges into opportunities. We aim to
                        be a catalyst for positive change, helping businesses achieve their goals through cutting-edge technologies and
                        strategic insights.
                    </p>
                </div>
            </section>

            <section style={Aboutstyles.section}>
                <img
                    src={meetOurTeam}
                    alt="Meet Our Team"
                    style={Aboutstyles.image}
                />
                <div style={Aboutstyles.text}>
                    <h2>Meet Our Team</h2>
                    <p>
                        At Digital Solutions Hub, we believe in the power of collaboration. Meet our dedicated team of experts, each
                        bringing a unique set of skills and experiences to the table. Together, we work towards creating impactful
                        solutions for our clients.
                    </p>
                </div>
            </section>

            <section style={Aboutstyles.section}>
                <img
                    src={ourValues}
                    alt="Our Values"
                    style={Aboutstyles.image}
                />
                <div style={Aboutstyles.text}>
                    <h2>Our Values</h2>
                    <p>
                        Integrity, Innovation, and Impact are at the core of our values. We uphold the highest standards of integrity
                        in our work, foster a culture of continuous innovation, and strive to make a positive impact on the businesses
                        we serve.
                    </p>
                </div>
            </section>

            <section style={Aboutstyles.section}>
                <img
                    src={ourJourney}
                    alt="Our Journey"
                    style={Aboutstyles.image}
                />
                <div style={Aboutstyles.text}>
                    <h2>Our Journey</h2>
                    <p>
                        Since our inception, we have been on a journey of growth and discovery. Explore some key milestones that define
                        our path and reflect our commitment to excellence.
                    </p>
                </div>
            </section>
        </div>
    );
};

export default About;
