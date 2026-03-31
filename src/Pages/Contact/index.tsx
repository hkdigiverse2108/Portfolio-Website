import { BreadCrumb, ContactForm, PreLoader } from "../../Components/Common";
import { Queries } from "../../Api";

const Contact = () => {
  const { data: userData, isLoading: userLoading } = Queries.useGetUser();

  const { data: settingData, isLoading: settingLoading } = Queries.useGetSetting();

  const setting = settingData?.data;
  const socialMediaLinks = userData?.data?.socialMediaLinks;

  const isLoading = userLoading || settingLoading;

  return (
    <>
      <PreLoader isLoading={isLoading} />
      <BreadCrumb title="Contact Me" pageName="Contact Me" />
      <section className="contact-section contact-1 section-padding section-bg fix">
        <div className="star-left-shape"></div>
        <div className="star-right-shape"></div>
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-6">
              <div className="contact-wrapper-2">
                <div className="section-title">
                  <span className="style-2 border-0 p-0 wow fadeInUp">
                    <img src="/assets/img/shape/star-2.png" alt="img" />
                    Contact Me
                  </span>
                  <h2 className="wow fadeInUp" data-wow-delay=".2s">
                    Have a Project in Mind? Let’s Talk!
                  </h2>
                  <p className="mt-3 mt-mb-0">
                    Are you looking to create a seamless and engaging user <br />
                    experience? here to help!
                  </p>
                </div>
                <div className="contact-item-wrapper">
                  <div className="contact-item wow fadeInUp" data-wow-delay=".2s">
                    <div className="icon">
                      <i className="fa-solid fa-phone"></i>
                    </div>
                    <div className="content">
                      <span>Call Now</span>
                      <h6>{setting?.bookMeeting?.phoneNo ? `+${setting.bookMeeting.phoneNo.countryCode} ${setting.bookMeeting.phoneNo.number}` : "+888 (555) 546-33"}</h6>
                    </div>
                  </div>
                  <div className="contact-item wow fadeInUp" data-wow-delay=".4s">
                    <div className="icon">
                      <i className="fa-solid fa-envelope"></i>
                    </div>
                    <div className="content">
                      <span>Email</span>
                      <h6>{setting?.bookMeeting?.email || "xiomi@gmail.com"}</h6>
                    </div>
                  </div>
                  <div className="contact-item wow fadeInUp" data-wow-delay=".6s">
                    <div className="icon">
                      <i className="fa-solid fa-location-dot"></i>
                    </div>
                    <div className="content">
                      <span>Address</span>
                      <h6>{setting?.bookMeeting?.address || "66 Broklyant,Road 1240 Canada"}</h6>
                    </div>
                  </div>
                </div>
                <div className="social">
                  <h6>Social: </h6>
                  <ul className="social-list">
                    {socialMediaLinks?.map((item, index) => {
                      if (!item.isActive) return null;

                      return (
                        <li key={index} className="wow fadeInUp" data-wow-delay={`.${(index + 1) * 2}s`}>
                          <a href={item.link} target="_blank" rel="noreferrer">
                            <i className={item.icon}></i>
                          </a>
                        </li>
                      );
                    })}
                    {/* <li className="wow fadeInUp" data-wow-delay=".2s">
                      <a href="#">
                        <i className="fa-brands fa-facebook-f"></i>
                      </a>
                    </li>
                    <li className="wow fadeInUp" data-wow-delay=".4s">
                      <a href="#">
                        <i className="fa-brands fa-twitter"></i>
                      </a>
                    </li>
                    <li className="wow fadeInUp" data-wow-delay=".6s">
                      <a href="#">
                        <i className="fa-brands fa-instagram"></i>
                      </a>
                    </li>
                    <li className="wow fadeInUp" data-wow-delay=".8s">
                      <a href="#">
                        <i className="fa-brands fa-linkedin-in"></i>
                      </a>
                    </li> */}
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="google-map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d390.90875077552283!2d72.86954828707813!3d21.23296911805487!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04f7adffdd9f9%3A0x8e5947b84d098fd9!2sSilver%20Trade%20Center!5e0!3m2!1sen!2sin!4v1774948684165!5m2!1sen!2sin" width="600" height="450" style={{ border: 0 }} allowFullScreen loading="lazy"></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-from-section section-bg pt-0 section-padding fix">
        <div className="container">
          <ContactForm />
        </div>
      </section>
    </>
  );
};

export default Contact;
