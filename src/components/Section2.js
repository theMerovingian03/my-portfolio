import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BASE_URL from '../config';
import Message from './Message';


const Section2Skills = () => {
    const [skills, setSkills] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchSkills = async () => {
            try {
                const response = await axios.get(`${BASE_URL}/api/misc/skills`);
                setSkills(response.data);
            } catch (error) {
                setError('Error fetching skills');
                console.error('Error fetching skills:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchSkills();
    }, []);

    if (loading) {
        return <Message type="loading" />;
    }

    if (error) {
        return <Message type="error" message={error} />;
    }

    if (skills.length === 0) {
        return <Message type="no-data" />;
    }

    return (
        <section className="section2" id="section2">
            <h2>Skillset</h2>
            <div className="section2-info">
                {skills.map(skill => (
                    <div key={skill._id} className="skill-item">
                        {skill.name}
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Section2Skills;
