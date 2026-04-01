import { ROUTES } from "../Constant";
import { Queries } from "../Api";

const Footer = () => {
  const { data: userRes } = Queries.useGetUser();
  const userData = userRes?.data;
  const socialLinks = userData?.socialMediaLinks?.filter((link) => link.isActive) || [];

  return (
    <footer className="footer-section fix fix">
      <div className="bg-shape">
        <img src="/assets/img/footer/bg-shape.png" alt="img" />
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
                <a href={ROUTES.HOME} className="footer-logo wow fadeInUp" data-wow-delay=".3s">
                  <img src="/assets/img/logo/Logo-black.svg" alt="img" />
                </a>
                <ul className="footer-list-items wow fadeInUp" data-wow-delay=".5s">
                  <li>
                    <a href={ROUTES.ABOUT}>ABOUT ME</a>
                  </li>
                  <li>
                    <a href={ROUTES.SERVICE}>SERVICES</a>
                  </li>
                  <li>
                    <a href={ROUTES.PORTFOLIO}>PORTFOLIO</a>
                  </li>
                  <li>
                    <a href={ROUTES.BLOG}>BLOG</a>
                  </li>
                  <li>
                    <a href={ROUTES.CONTACT}>CONTACT US</a>
                  </li>
                </ul>
                <ul className="social-icon wow fadeInUp" data-wow-delay=".3s">
                  {socialLinks.map((social, index) => (
                    <li key={index}>
                      <a href={social.link} target="_blank" rel="noreferrer">
                        <i className={social.icon}></i>
                        {social.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-bottom-wrapper">
            <p className="wow fadeInUp" data-wow-delay=".3s">
              Copyright © {new Date().getFullYear()} <span>HK DigiVerse LLP</span>
            </p>
            <ul className="footer-list wow fadeInUp" data-wow-delay=".5s">
              <li>
                <a href={ROUTES.TERMS_CONDITION}>Terms & Conditions</a>
              </li>
              <li>
                <a href={ROUTES.PRIVACY_POLICY}>Privacy Policy</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
