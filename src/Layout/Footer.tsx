
const Footer = () => {
  return (
        <footer className="footer-section fix fix">
       <div className="bg-shape">
        <img src="assets/img/footer/bg-shape.png" alt="img"/>
       </div>
       <div className="mycustom-marque">
              <div className="scrolling-wrap style-2">
               <div className="comm">
                   <div></div>
                   <div className="cmn-textslide">Have a In Mind? Lets Work</div>
                   <div className="cmn-textslide">TOGETHER</div>
               </div>
               <div className="comm">
                   <div></div>
                   <div className="cmn-textslide">Have a In Mind? Lets Work</div>
                   <div className="cmn-textslide">TOGETHER</div>
               </div>
               <div className="comm">
                   <div></div>
                   <div className="cmn-textslide">Have a In Mind? Lets Work</div>
                   <div className="cmn-textslide">TOGETHER</div>
               </div>
           </div>
       </div>
        <div className="container">
            <div className="footer-widget-wrapper">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="footer-item">
                            <a href="index.html" className="footer-logo wow fadeInUp" data-wow-delay=".3s">
                                <img src="assets/img/logo/Logo-black.svg" alt="img"/>
                            </a>
                            <ul className="footer-list-items wow fadeInUp" data-wow-delay=".5s">
                                <li>
                                    <a href="about.html">ABOUT ME</a>
                                </li>
                                <li>
                                    <a href="service-details.html">SERVICES</a>
                                </li>
                                <li>
                                    <a href="portfolio-details.html">PORTFOLIO</a>
                                </li>
                                <li>
                                    <a href="news-details.html">BLOG</a>
                                </li>
                                <li>
                                    <a href="contact.html">CONTACT US</a>
                                </li>
                            </ul>
                            <ul className="social-icon wow fadeInUp" data-wow-delay=".3s">
                                <li>
                                    <i className="fab fa-facebook-f"></i>
                                    Facebook
                                </li>
                                <li>
                                   <i className="fa-brands fa-twitter"></i>
                                    Twitter
                                </li>
                                <li>
                                   <i className="fa-brands fa-linkedin-in"></i>
                                    Linkedin
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="footer-bottom-wrapper">
                    <p className="wow fadeInUp" data-wow-delay=".3s">
                        Copyright © <span>Grameentheme</span>
                    </p>
                    <ul className="footer-list wow fadeInUp" data-wow-delay=".5s">
                        <li>
                            <a href="contact.html">Terms & Conditions</a>
                        </li>
                        <li>
                            <a href="contact.html">Privacy Policy</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer