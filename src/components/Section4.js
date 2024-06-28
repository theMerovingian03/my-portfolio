const Section4Projects = () => {
    return (
        <section className="section-4-projects" id="section4">
            <h2>Projects</h2>
            <h4>Click to view Repositories</h4>
            <div className="projects-container">
                <div className="project-item">
                    <h3>Expense Tracker</h3>
                    <p>Web application enabling users to securely and efficiently track and manage expenses. Featuring JWT
                        based user authentication.</p>
                    <p className="project-skills">Key technologies: Django, Django REST Framework, React.js, Axios</p>
                </div>
                <div className="project-item">
                    <h3>Vendor Management System</h3>
                    <p>A collection of REST APIs built using the Django Rest Framework to aid in management of Vendor
                        profiles, purchase orders and calculate various performance metrics for each vendor.</p>
                    <p className="project-skills">Key technologies: Python, Django, Django REST Framework</p>
                </div>
                <div className="project-item">
                    <h3>E-Learning Platform</h3>
                    <p>REST API ecosystem built using Node.js and Express.js, for managing and accessing an e-learning
                        platform. Utilizes high-tech serverless database.</p>
                    <p className="project-skills">Key technologies: Node.js, Express.js, Neon Database</p>
                </div>
                <div className="project-item">
                    <h3>Stay Upto Date</h3>
                    <p>Web application that provides information regarding rules and regulation of various industries. Site
                        admins can upload documents from official sources, which are available to users with summarised
                        versions of these documents.</p>
                    <p className="project-skills">Key technologies: Python, Django, NLP</p>
                </div>
                <div className="project-item">
                    <h3>Recruitment Homepage</h3>
                    <p>Homepage for a recruitment startup, providing the essential features such as Job search, resume
                        upload and e-mail communication</p>
                    <p className="project-skills">Key technologies: Python, Django, HTML, CSS</p>
                </div>
                <div className="project-item">
                    <h3>Micro-Blogging Website</h3>
                    <p>Platform where users can register, post their thoughts and view what other users have posted. Users
                        can also perform CRUD operations with their posts.</p>
                    <p className="project-skills">Key technologies: Python, Django, HTML, CSS</p>
                </div>
            </div>
        </section>
    );
}

export default Section4Projects;