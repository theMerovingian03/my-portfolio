import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BASE_URL from '../config';
import Message from './Message';

const Section5Certs = () => {
    const [certifications, setCertifications] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCertifications = async () => {
            try {
                const response = await axios.get(`${BASE_URL}/api/misc/certifications`);
                setCertifications(response.data);
            } catch (error) {
                setError('Error fetching certifications');
                console.error('Error fetching certifications:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchCertifications();
    }, []);

    if (loading) {
        return <Message type="loading" />;
    }

    if (error) {
        return <Message type="error" message={error} />;
    }

    if (certifications.length === 0) {
        return <Message type="no-data" />;
    }

    return (
        <section className="section-5-certs" id="section5">
            <h2>Certifications/Credentials</h2>
            <div className="accordion-container">
                {certifications.map(cert => (
                    <div className="accordion" key={cert._id}>
                        <div>
                            <input type="checkbox" name="example_accordion" id={cert._id} className="accordion-input" />
                            <label htmlFor={cert._id} className="accordion-label">{cert.name}</label>
                            <div className="accordion-content">
                                <p>{cert.provider}</p>
                                <p>{cert.date}</p>
                                {cert.link && (
                                    <a href={cert.link} className="verify-credential" target="_blank" rel="noopener noreferrer">
                                        Verify Credential
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Section5Certs;
