const Section6Contact = () => {
    return (
        <section className="section-6-contact" id="section6">
            <div className="two-div-wrapper2">
                <div className="side1">
                    <h1>Get in touch</h1>
                    <h3>Send an email for enquiries</h3>
                    <p>Or, directly react out at:</p>
                    <p style={{ color: 'var(--font-color2)' }}>rishipb19@gmail.com</p>
                </div>
                <div className="side2">
                    <form action="" className="contactForm">
                        <div className="formGroup">
                            <label htmlFor="name" className="contactFormLabel">Name</label>
                            <input type="text" id="name" />
                        </div>
                        <div className="formGroup">
                            <label htmlFor="email" className="contactFormLabel">Email</label>
                            <input type="email" id="email" />
                        </div>
                        <div className="formGroup">
                            <label htmlFor="message" className="contactFormLabel">Message</label>
                            <textarea id="message" rows="4"></textarea>
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
