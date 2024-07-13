import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { format } from 'date-fns';
import BASE_URL from '../config';

const Section3Work = () => {
    const [workExperiences, setWorkExperiences] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchWorkExperiences = async () => {
            try {
                const response = await axios.get(`${BASE_URL}/api/misc/workexperiences`);
                setWorkExperiences(response.data);
            } catch (error) {
                setError('Error fetching work experiences');
                console.error('Error fetching work experiences:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchWorkExperiences();
    }, []);

    if (loading) {
        return <p>Fetching data from backend...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    if (workExperiences.length === 0) {
        return <p>No work experiences found.</p>;
    }

    return (
        <section className="section-3-work" id="section3">
            <h2>Work Experience</h2>
            <div className="work-info-container">
                {workExperiences.map(work => (
                    <div key={work._id} className="work-item">
                        <h3>{work.company}</h3>
                        <h4>{work.title}</h4>
                        <h4>{work.location}</h4>
                        <hr />
                        <p>{work.description}</p>
                        <ul className="work-points">
                            <li>{format(new Date(work.startDate), 'do MMM yyyy')} - {format(new Date(work.endDate), 'do MMM yyyy')}</li>
                            <li>{work.workMode.charAt(0).toUpperCase() + work.workMode.slice(1)} mode</li>
                        </ul>
                        <p>Key Skills: <span style={{ color: 'var(--font-color2)' }}>{work.keySkills.join(', ')}</span></p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Section3Work;
