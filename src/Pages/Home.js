import React from 'react';
import { Homestyles } from '../utils/constants';
import { Aboutstyles } from '../utils/constants';
import homeImage1 from '../assets/home-image-1.jpg';
import homeImage2 from '../assets/home-image-2.jpg';

const Home = () => {
    return (
        <div style={Homestyles.container}>
            <h2 style={Homestyles.heading}>Our Services</h2>
            <section style={Homestyles.section}>
                <div style={Homestyles.imageContainer}>
                    <div style={Homestyles.imageDescription}>
                        <img src={homeImage1} alt="Home Building" style={Homestyles.image} />

                        <p style={Aboutstyles.text}>
                            Accelerate your business with cutting-edge technologies and
                            strategic solutions. Our team of experts is dedicated to
                            delivering innovative and tailored solutions that drive growth
                            and success.
                        </p>
                    </div>
                </div>

            </section>
            <section style={Homestyles.section}>
                <div style={Homestyles.imageDescription}>
                    <img src={homeImage2} alt="People are walking in the street" style={Homestyles.image} />
                    <div style={Aboutstyles.text}>
                        <p>
                            Explore innovative possibilities for growth and efficiency with
                            our digital expertise. From concept to execution, we empower
                            businesses with the latest digital tools and strategies to stay
                            ahead in the competitive landscape.
                        </p>
                    </div>
                </div>
            </section >
        </div>
    );
};



export default Home;
