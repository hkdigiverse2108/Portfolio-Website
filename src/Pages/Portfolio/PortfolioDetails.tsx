import { BreadCrumb } from "../../Components/Common";
import { useParams } from "react-router-dom";
import { Queries } from "../../Api";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

const PortfolioDetails = () => {
  const { id } = useParams();
  const { data: portfolioRes } = Queries.useGetPortfolioById(id || "");
  const portfolioData = portfolioRes?.data;

  if (!portfolioData) return null; // Or a loader

  return (
    <>
      <BreadCrumb title="Portfolio Details" pageName="Portfolio Details" />
      <section className="project-details-section section-padding fix section-bg">
        <div className="container">
          <div className="project-details-wrapper">
            <div className="row">
              <div className="col-12">
                <div className="project-details-images">
                  {portfolioData.link ? (
                    <a href={portfolioData.link} target="_blank" rel="noopener noreferrer" className="portfolio-link-wrapper">
                      <img src={portfolioData?.thumbnailImage} alt="img" />
                      <div className="portfolio-overlay">
                        <div className="icon">
                          <i className="fa-solid fa-link"></i>
                        </div>
                        <span>Visit Live Site</span>
                      </div>
                    </a>
                  ) : (
                    <img src={portfolioData?.thumbnailImage} alt="img" />
                  )}
                </div>
              </div>
            </div>
            <div className="row g-5">
              <div className="col-lg-8">
                <div className="project-details-content">
                  <span>{portfolioData.subTitle}</span>
                  <h2>{portfolioData.title}</h2>
                  <p className="mb-3">{portfolioData.description}</p>

                  {/* Research & User Insights - Keep as placeholder or map if available */}
                  <h3 className="mt-2">Research & User Insights</h3>
                  <ul className="list-item">
                    <li>
                      <img src="/assets/img/icon/arrow-circle-right.svg" alt="icon" />
                      <h6>User Research:</h6> Surveys, competitor analysis, and pain points
                    </li>
                    <li>
                      <img src="/assets/img/icon/arrow-circle-right.svg" alt="icon" />
                      <h6>Target Audience:</h6> Restaurant owners, foodies, busy professionals
                    </li>
                    <li>
                      <img src="/assets/img/icon/arrow-circle-right.svg" alt="icon" />
                      <h6>User Personas:</h6> Example personas with goals & frustrations
                    </li>
                  </ul>
                  <p>At [Your Restaurant Name], we believe food is more than just a meal—it’s an experience. Whether you’re craving comfort food or gourmet dishes, we serve up quality and flavor. With a commitment to fresh ingredients and exceptional service, we aim to provide you with an unforgettable dining experience, both at our restaurant and from the comfort of your home.</p>
                  <h3 className="mt-4">Problem Statement</h3>
                  <ul className="list-item">
                    <li>
                      <img src="/assets/img/icon/arrow-circle-right.svg" alt="icon" /> Challenges in existing food delivery/restaurant websites
                    </li>
                    <li>
                      <img src="/assets/img/icon/arrow-circle-right.svg" alt="icon" /> Need for better user experience, faster ordering, and modern UI
                    </li>
                  </ul>
                  <h3>Final Outcome & Impac:</h3>
                  <ul className="list-item">
                    <li>
                      <img src="/assets/img/icon/arrow-circle-right.svg" alt="icon" />
                      <h6>Before vs. After UI Comparison:</h6> Showcasing improvements
                    </li>
                    <li>
                      <img src="/assets/img/icon/arrow-circle-right.svg" alt="icon" /> Need for better user experience, faster ordering, and modern UI
                    </li>
                  </ul>

                  <div className="row g-4">
                    {portfolioData.images &&
                      portfolioData.images.length > 0 &&
                      portfolioData.images.length <= 2 &&
                      portfolioData.images.map((img: string, index: number) => (
                        <div className="col-md-6" key={index}>
                          <div className="project-thumb">
                            <img src={img} alt={`img-${index}`} />
                          </div>
                        </div>
                      ))}
                    {portfolioData.images && portfolioData.images.length > 2 && (
                      <div className="col-md-12">
                        <Swiper
                          modules={[Autoplay]}
                          spaceBetween={20}
                          slidesPerView={2}
                          breakpoints={{
                            0: { slidesPerView: 1 },
                            768: { slidesPerView: 2 },
                          }}
                          autoplay={{ delay: 3000, disableOnInteraction: false }}
                          loop={true}
                        >
                          {portfolioData.images.map((img: string, index: number) => (
                            <SwiperSlide key={index}>
                              <div className="project-thumb">
                                <img src={img} alt={`img-${index}`} />
                              </div>
                            </SwiperSlide>
                          ))}
                        </Swiper>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="main-sidebar">
                  <div className="single-sidebar-widget">
                    <div className="wid-title">
                      <h3>Project Information</h3>
                    </div>
                    <div className="project-info">
                      <div className="item">
                        <h6>Project Name</h6>
                        <span>{portfolioData.projectName}</span>
                      </div>
                      <div className="item">
                        <h6>Client</h6>
                        <span>{portfolioData.client}</span>
                      </div>
                      <div className="item">
                        <h6>Technology</h6>
                        <span>{portfolioData.technology}</span>
                      </div>
                      <div className="item">
                        <h6>Date</h6>
                        <span>{portfolioData.date ? new Date(portfolioData.date).toLocaleDateString("en-US", { day: "numeric", month: "long", year: "numeric" }) : ""}</span>
                      </div>
                    </div>
                    <div className="social">
                      <h6>Social: </h6>
                      <ul className="social-list">
                        {portfolioData.socialLinks
                          ?.filter((link) => link.isActive)
                          .map((link, index) => (
                            <li key={index}>
                              <a href={link.link} target="_blank" rel="noreferrer">
                                <i className={link.icon}></i>
                              </a>
                            </li>
                          ))}
                      </ul>
                    </div>
                  </div>
                  {/* <div className="info-sidebar-widget" style={{ backgroundImage: "url(/assets/img/shape/bg.png)" }}>
                    <div className="info-widget">
                      <div className="logo">
                        <a href="/">
                          <img src="/assets/img/logo/Logo-black.svg" alt="logo" />
                        </a>
                      </div>
                      <div className="content">
                        <h3>Don't Hesitate to Contact Me</h3>
                        <h5>+77 022 444 05 05</h5>
                      </div>
                      <a href="/contact" className="theme-btn">
                        Get in Touch <i className="fa-solid fa-arrow-right"></i>
                      </a>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PortfolioDetails;
