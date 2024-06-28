

const Section5Certs = () => {
    return (
        <section className="section-5-certs" id="section5">
            <h2>Certifications/Credentials</h2>
            <div className="accordion-container">
                <div className="accordion">
                    <div>
                        <input type="checkbox" name="example_accordion" id="certa" className="accordion-input" />
                        <label htmlFor="certa" className="accordion-label">Python Essentials 1</label>
                        <div className="accordion-content">
                            <p>Cisco Skills for All</p>
                            <p>June 2023</p>
                            <p className="verify-credential">Verify Credential</p>
                            {/* https://www.credly.com/badges/b45666b3-d692-4a81-b19d-947f12525770 */}
                        </div>
                    </div>
                </div>

                <div className="accordion">
                    <div>
                        <input type="checkbox" name="example_accordion" id="cert1" className="accordion-input" />
                        <label htmlFor="cert1" className="accordion-label">Software Engineering Intern</label>
                        <div className="accordion-content">
                            <p>Hackerrank</p>
                            <p>June 2024</p>
                            <p className="verify-credential">Verify Credential</p>
                            {/* https://www.hackerrank.com/certificates/6d318ed2e8dd */}
                        </div>
                    </div>
                </div>

                <div className="accordion">
                    <div>
                        <input type="checkbox" name="example_accordion" id="cert2" className="accordion-input" />
                        <label htmlFor="cert2" className="accordion-label">Backend Development and APIs</label>
                        <div className="accordion-content">
                            <p>FreeCodeCamp</p>
                            <p>April 2024</p>
                            <p className="verify-credential">Verify Credential</p>
                            {/* https://www.freecodecamp.org/certification/fcc987b632b-d347-43fb-816f-8b639e3ce24b/back-end-development-and-apis */}
                        </div>
                    </div>
                </div>

                <div className="accordion">
                    <div>
                        <input type="checkbox" name="example_accordion" id="cert3" className="accordion-input" />
                        <label htmlFor="cert3" className="accordion-label">Django</label>
                        <div className="accordion-content">
                            <p>Great Learning</p>
                            <p>February 2024</p>
                            <p className="verify-credential">Verify Credential</p>
                            {/* https://verify.mygreatlearning.com/verify/PPXJBTHP */}
                        </div>
                    </div>
                </div>

                <div className="accordion">
                    <div>
                        <input type="checkbox" name="example_accordion" id="cert4" className="accordion-input" />
                        <label htmlFor="cert4" className="accordion-label">Javascript</label>
                        <div className="accordion-content">
                            <p>Great Learning</p>
                            <p>July 2023</p>
                            <p className="verify-credential">Verify Credential</p>
                            {/* https://verify.mygreatlearning.com/verify/GZSALITG */}
                        </div>
                    </div>
                </div>

                <div className="accordion">
                    <div>
                        <input type="checkbox" name="example_accordion" id="cert5" className="accordion-input" />
                        <label htmlFor="cert5" className="accordion-label">Architecting with Google Compute Engine</label>
                        <div className="accordion-content">
                            <p>Coursera</p>
                            <p>January 2023</p>
                            <p className="verify-credential">Verify Credential</p>
                            {/* https://www.coursera.org/account/accomplishments/specialization/P6VS3ZQXMXAC */}
                        </div>
                    </div>
                </div>

                <div className="accordion">
                    <div>
                        <input type="checkbox" name="example_accordion" id="cert6" className="accordion-input" />
                        <label htmlFor="cert6" className="accordion-label">Career Edge - Young Professional</label>
                        <div className="accordion-content">
                            <p>TCS iON</p>
                            <p>October 2021</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Section5Certs;
