
const About = () => {
    return (
        <div className="aboutSection">
            <div className="imageContainer">
                <img src="/rishi.png" alt="Profile" className="profileImage" />

            </div>
            <h4>About Me</h4>
            <p>
                I am Rushikesh Borade, currently studying BE in Computers (2025 batch) from Savitribai Phule Pune University.
                I am passionate about software development and always eager to learn new technologies.
            </p>
            <h4>Biography</h4>
            <p>
                I always had a keen interest in computers and tech and was fascinated by how things work.
                Over the years, I have honed my skills in various programming languages and frameworks.
                My academic background has provided me with a strong foundation in computer science principles.
            </p>
            <h4>Skills and Expertise</h4>
            <ul>
                <li>Programming Languages: JavaScript, Python, C++</li>
                <li>Frameworks: React, Node.js, Django</li>
                <li>Tools: Google Cloud Platform, Postman</li>
            </ul>
            <h4>Interests and Hobbies</h4>
            <p>
                In my free time, I enjoy experimenting with new programming languages, learning German
                and watching movies. I also love hiking and exploring new places.
            </p>
            <h4>Contact Information</h4>
            <p>
                Feel free to reach out to me on <a style={{ textDecoration: 'underline', color: 'var(--font-color2)' }} href="https://www.linkedin.com/in/rushikesh-borade/">LinkedIn</a>,
                check out my code on <a style={{ textDecoration: 'underline', color: 'var(--font-color2)' }} href="https://github.com/themerovingian03/">GitHub</a>,
                or solve coding challenges with me on <a style={{ textDecoration: 'underline', color: 'var(--font-color2)' }} href="https://leetcode.com/u/rishipb19/">Leetcode</a>.
            </p>
        </div>
    );
}

export default About;