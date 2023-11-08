import React, { useState } from 'react';

const AccessibleForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Backend code for sending the data into DB

        // For now, let's log the data to the console
        console.log('Form submitted:', formData);

        // Clear the form fields after submission
        setFormData({
            name: '',
            email: '',
            message: '',
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                aria-label="Name"
                required
            />

            <label htmlFor="email">Email:</label>
            <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                aria-label="Email"
                required
            />

            <label htmlFor="message">Message:</label>
            <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                aria-label="Message"
                required
            ></textarea>

            <button type="submit">Submit</button>
        </form>
    );
};

export default AccessibleForm;
