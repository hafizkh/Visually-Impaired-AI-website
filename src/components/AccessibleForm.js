import React, { useState } from 'react';
import { style } from '../utils/constants';

const AccessibleForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        gender: 'male',
        country: 'select',
        dob: '',
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
        console.log('Form submitted:', formData);
        setFormData({
            name: '',
            email: '',
            gender: 'male',
            country: 'select',
            dob: '',
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

            <label htmlFor="gender">Gender:</label>
            <div>
                <label>
                    <input
                        type="radio"
                        name="gender"
                        value="male"
                        checked={formData.gender === 'male'}
                        onChange={handleChange}
                    />{' '}
                    Male
                </label>
                <label>
                    <input
                        type="radio"
                        name="gender"
                        value="female"
                        checked={formData.gender === 'female'}
                        onChange={handleChange}
                    />{' '}
                    Female
                </label>
            </div>

            <label htmlFor="country">Country:</label>
            <select
                id="country"
                name="country"
                value={formData.country}
                onChange={handleChange}
                aria-label="Country"
                required
            >
                <option value="select" disabled>
                    Select Country
                </option>
                <option value="usa">USA</option>
                <option value="canada">Canada</option>
                {/* Add more countries as needed */}
            </select>

            <label htmlFor="dob">Date of Birth:</label>
            <input
                type="date"
                id="dob"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
                aria-label="Date of Birth"
                required
            />

            <label htmlFor="message">Message:</label>
            <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                style={style}
                aria-label="Message"
                required
            ></textarea>
            <button type="submit">Submit</button>
        </form>
    );
};

export default AccessibleForm;
