import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BASE_URL from '../config'; // Replace with your actual backend URL

const Section4Projects = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await axios.get(`${BASE_URL}/api/misc/projects`);
                setProjects(response.data);
            } catch (error) {
                setError('Error fetching projects');
                console.error('Error fetching projects:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchProjects();
    }, []);

    if (loading) {
        return <p>Fetching data from backend...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    if (projects.length === 0) {
        return <p>No projects found.</p>;
    }

    return (
        <section className="section-4-projects" id="section4">
            <h2>Projects</h2>
            <h4>Click on a project to view it's repository</h4>
            <div className="projects-container">
                {projects.map(project => (
                    <a
                        key={project._id}
                        className="project-item"
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <h3>{project.name}</h3>
                        <p>{project.description}</p>
                        <p className="project-skills">Key technologies: {project.technologies.join(', ')}</p>
                    </a>
                ))}
            </div>
        </section>
    );
}

export default Section4Projects;
