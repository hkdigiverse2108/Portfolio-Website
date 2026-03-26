import { BreadCrumb } from "../../Components/Common"

const Contact = () => {
    return (
        <>
            <BreadCrumb title="Contact Me" pageName="Contact Me" />
            <section className="contact-section contact-1 section-padding section-bg fix">
                <div className="star-left-shape"></div>
                <div className="star-right-shape"></div>
                <div className="container">
                    <div className="row g-4">
                        <div className="col-lg-6">
                            <div className="contact-wrapper-2">
                                <div className="section-title">
                                    <span className="style-2 border-0 p-0 wow fadeInUp"><img src="assets/img/shape/star-2.png"
                                        alt="img" />Contact
                                        Me</span>
                                    <h2 className="wow fadeInUp" data-wow-delay=".2s">Have a Project in Mind? Let’s Talk!</h2>
                                    <p className="mt-3 mt-mb-0">Are you looking to create a seamless and engaging user <br />
                                        experience? here to help!</p>

                                </div>
                                <div className="contact-item-wrapper">
                                    <div className="contact-item wow fadeInUp" data-wow-delay=".2s">
                                        <div className="icon">
                                            <i className="fa-solid fa-phone"></i>
                                        </div>
                                        <div className="content">
                                            <span>Call Now</span>
                                            <h6>+888 (555) 546-33</h6>
                                        </div>
                                    </div>
                                    <div className="contact-item wow fadeInUp" data-wow-delay=".4s">
                                        <div className="icon">
                                            <i className="fa-solid fa-envelope"></i>
                                        </div>
                                        <div className="content">
                                            <span>Email</span>
                                            <h6>xiomi@gmail.com</h6>
                                        </div>
                                    </div>
                                    <div className="contact-item wow fadeInUp" data-wow-delay=".6s">
                                        <div className="icon">
                                            <i className="fa-solid fa-location-dot"></i>
                                        </div>
                                        <div className="content">
                                            <span>Address</span>
                                            <h6>66 Broklyant,Road 1240 Canada</h6>
                                        </div>
                                    </div>
                                </div>
                                <div className="social">
                                    <h6>Social: </h6>
                                    <ul className="social-list">
                                        <li className="wow fadeInUp" data-wow-delay=".2s"><a href="#"><i
                                            className="fa-brands fa-facebook-f"></i></a></li>
                                        <li className="wow fadeInUp" data-wow-delay=".4s"><a href="#"><i
                                            className="fa-brands fa-twitter"></i></a></li>
                                        <li className="wow fadeInUp" data-wow-delay=".6s"><a href="#"><i
                                            className="fa-brands fa-instagram"></i></a></li>
                                        <li className="wow fadeInUp" data-wow-delay=".8s"><a href="#"><i
                                            className="fa-brands fa-linkedin-in"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="google-map">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6678.7619084840835!2d144.9618311901502!3d-37.81450084255415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642b4758afc1d%3A0x3119cc820fdfc62e!2sEnvato!5e0!3m2!1sen!2sbd!4v1641984054261!5m2!1sen!2sbd"
                                    style={{ border: 0 }} allowFullScreen loading="lazy">
                                </iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="contact-from-section section-bg pt-0 section-padding fix">
                <div className="container">
                    <div className="contact-form-box">
                        <h3 className="wow fadeInUp">Get In Touch</h3>
                        <form method="POST">
                            <div className="contact-box">
                                <div className="row">
                                    <div className="col-md-6 wow fadeInUp" data-wow-delay=".2s">
                                        <input type="text" name="name" placeholder="Enter Your Name"/>
                                    </div>
                                    <div className="col-md-6 wow fadeInUp" data-wow-delay=".5s">
                                        <input type="tel" name="phone" placeholder="Enter Your Number"/>
                                    </div>
                                    <div className="col-12 wow fadeInUp" data-wow-delay=".8s">
                                        <input type="email" name="email" placeholder="Enter Your Email"/>
                                    </div>
                                    <div className="col-12 wow fadeInUp" data-wow-delay="1.1s">
                                        <textarea name="message" placeholder="Enter Your Messanger"></textarea>
                                    </div>
                                    <div className="col-12 wow fadeInUp" data-wow-delay="1.4s">
                                        <button type="submit" className="theme-btn">
                                            Send Message
                                            <i className="fa-solid fa-arrow-right"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Contact