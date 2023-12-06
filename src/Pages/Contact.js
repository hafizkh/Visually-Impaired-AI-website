import React from 'react';
import AccessibleForm from '../components/AccessibleForm';
import { Homestyles } from '../utils/constants';


const Contact = () => {
    return (
        <section id="contact">
            <h2 style={Homestyles.heading}>Contact Us</h2>
            <p>Get in touch with us for any inquiries or feedback.</p>
            <AccessibleForm />
        </section>
    );
};

export default Contact;
