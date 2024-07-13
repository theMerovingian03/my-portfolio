import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faStar, faDollarSign, faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-scroll';

const Section1Main = () => {

    const handleDownload = () => {
        // URL to the PDF file in the public directory
        const pdfUrl = `${process.env.PUBLIC_URL}/Rushikesh_Borade_Resume.pdf`;

        // Create an anchor element
        const link = document.createElement('a');
        link.href = pdfUrl;
        link.setAttribute('download', 'Rushikesh_Borade_Resume.pdf'); // Set the download attribute with a filename

        // Append the anchor to the body
        document.body.appendChild(link);

        // Trigger the download
        link.click();

        // Remove the anchor from the body
        document.body.removeChild(link);
    };

    return (
        <section className="section1">
            <div className="two-div-wrapper1">
                <div className="main-info1">
                    <h2>Hello, I am</h2>
                    <h1>Rushikesh Borade</h1>
                    <div className="icon-container">
                        <Link to="section6" smooth={true} duration={500} className='react-scroll-link'>
                            <FontAwesomeIcon icon={faEnvelope} className='fa-icon' />
                        </Link>
                        <Link to="section5" smooth={true} duration={500} className='react-scroll-link'>
                            <span className='fontawesome-icon'><FontAwesomeIcon icon={faStar} className='fa-icon' /></span>
                        </Link>
                        <Link to="section3" smooth={true} duration={500} className='react-scroll-link'>
                            <span className='fontawesome-icon'><FontAwesomeIcon icon={faDollarSign} className='fa-icon' /></span>
                        </Link>
                    </div>
                </div>
                <div className="main-info2">
                    <h2>Passionate <span style={{ color: 'var(--font-color2)' }}>Web Developer</span> and <span
                        style={{ color: 'var(--font-color2)' }}>Software Engineer</span></h2>
                    <br />
                    <p>Full stack development with knowledge regarding the most <span
                        style={{ color: 'var(--font-color2)' }}>in-demand technologies.</span></p>

                    <button className="download-button" onClick={handleDownload}>
                        <FontAwesomeIcon icon={faArrowDown} className='fa-arrow-down' />
                        <span className="download-text"> Download Resume</span>
                    </button>
                </div>
            </div>
        </section>
    );
}

export default Section1Main;
