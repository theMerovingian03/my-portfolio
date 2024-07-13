import React, { useState } from 'react';
import axios from 'axios';
import BASE_URL from '../config';

const Section6Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [id]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${BASE_URL}/api/mail/get-mail`, {
                username: formData.name,
                email: formData.email,
                message: formData.message
            });
            if (response.status === 200) {
                alert('Your mail was successfully sent');
                console.log('Form data: ', formData);
                setFormData({ name: '', email: '', message: '' }); // Reset the form
            }
        } catch (error) {
            console.error('Error sending mail:', error);
        }
    };

    return (
        <section className="section-6-contact" id="section6">
            <div className="two-div-wrapper2">
                <div className="side1">
                    <h1>Get in touch</h1>
                    <h3>Send an email for enquiries</h3>
                    <p>Or, directly reach out at:</p>
                    <p style={{ color: 'var(--font-color2)' }}>rishipb19@gmail.com</p>
                </div>
                <div className="side2">
                    <form onSubmit={handleSubmit} className="contactForm">
                        <div className="formGroup">
                            <label htmlFor="name" className="contactFormLabel">Name</label>
                            <input
                                type="text"
                                id="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="formGroup">
                            <label htmlFor="email" className="contactFormLabel">Email</label>
                            <input
                                type="email"
                                id="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="formGroup">
                            <label htmlFor="message" className="contactFormLabel">Message</label>
                            <textarea
                                id="message"
                                rows="4"
                                value={formData.message}
                                onChange={handleChange}
                                required
                            ></textarea>
                        </div>
                        <div className="formGroup">
                            <button type="submit" className="submitButton">Send</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Section6Contact;
