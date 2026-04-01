import { useParams, useNavigate } from "react-router-dom";
import { Queries } from "../../Api";
import { BreadCrumb, PreLoader } from "../../Components/Common";
import { ROUTES } from "../../Constant";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import type { OurServiceBase } from "../../Types";

const ServiceDetails = () => {
  const navigate = useNavigate();

  const { id } = useParams();
  const { data: serviceDetailData, isLoading: detailLoading } = Queries.useGetServiceDetails(id);
  const { data: allServicesData, isLoading: servicesLoading } = Queries.useGetOurService();

  const service = serviceDetailData?.data;
  const allServices = allServicesData?.data?.ourService_data || [];
  const isLoading = detailLoading || servicesLoading;

  return (
    <>
      <PreLoader isLoading={isLoading} />
      <BreadCrumb title={"Service Details"} pageName="Service Details" />
      <section className="service-details-section section-padding section-bg">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-8">
              <div className="service-details-post">
                <div className="single-service-post">
                  {service?.thumbnailImage && (
                    <div className="service-thumb">
                      <img src={service.thumbnailImage} alt="img" />
                    </div>
                  )}
                  <div className="post-content">
                    <h2 className="mb-3">{service?.title}</h2>
                    <div className="blog-details-content" dangerouslySetInnerHTML={{ __html: service?.description || "" }} />

                    {/* <h2 className="mb-3">Web Design</h2>
                    <p>In today’s digital landscape, your website is often the first impression of your brand. That’s why we focus on creating custom, responsive, and user-friendly websites that not only look great but also provide an outstanding user experience.</p>
                    <p className="mt-4">Whether you're a startup or an established business, our team designs websites that meet your specific needs, attract visitors, and convert them into loyal customers.</p>

                    <div className="post-list">
                      <h3 className="mb-3">Our Web Design Process:</h3>
                      <p>We begin with discovery and research, create wireframes and prototypes, design custom solutions, ensure responsiveness, optimize for SEO, and provide testing, launch, and ongoing support.</p>

                      <div className="post-item">
                        <div className="icon">
                          <img src="/assets/img/icon/arrow-circle-right.svg" alt="icon" />
                        </div>
                        <div className="content">
                          <h6>Discovery & Research:</h6>
                          <p>We begin by understanding your business, target audience, and goals. This helps us design a website that reflects your brand and meets user expectations.</p>
                        </div>
                      </div>
                      <div className="post-item">
                        <div className="icon">
                          <img src="/assets/img/icon/arrow-circle-right.svg" alt="icon" />
                        </div>
                        <div className="content">
                          <h6>Wireframing & Prototyping:</h6>
                          <p>We develop wireframes and prototypes to visualize the website's layout and structure, ensuring a smooth user journey.</p>
                        </div>
                      </div>
                      <div className="post-item">
                        <div className="icon">
                          <img src="/assets/img/icon/arrow-circle-right.svg" alt="icon" />
                        </div>
                        <div className="content">
                          <h6>Custom Design:</h6>
                          <p>Your website will be fully responsive, ensuring it looks and works seamlessly across all devices, including desktops, tablets, and smartphones.</p>
                        </div>
                      </div>
                      <div className="post-item">
                        <div className="icon">
                          <img src="/assets/img/icon/arrow-circle-right.svg" alt="icon" />
                        </div>
                        <div className="content">
                          <h6>SEO Optimization:</h6>
                          <p>We ensure your website is built with SEO best practices, increasing visibility and helping you rank higher on search engines.</p>
                        </div>
                      </div>
                      <div className="post-item">
                        <div className="icon">
                          <img src="/assets/img/icon/arrow-circle-right.svg" alt="icon" />
                        </div>
                        <div className="content">
                          <h6>Testing & Launch:</h6>
                          <p>Before going live, we rigorously test the website across browsers and devices to ensure it performs perfectly.</p>
                        </div>
                      </div>
                      <div className="post-item mb-3">
                        <div className="icon">
                          <img src="/assets/img/icon/arrow-circle-right.svg" alt="icon" />
                        </div>
                        <div className="content">
                          <h6>Ongoing Support & Maintenance:</h6>
                          <p>After launch, we provide ongoing support to ensure your website remains up-to-date, secure, and optimized for performance.</p>
                        </div>
                      </div>
                    </div> */}
                    <div className="row g-4 mt-4 mb-4">
                      {service?.images &&
                        service.images.length > 0 &&
                        service.images.length <= 2 &&
                        service.images.map((image: string, index: number) => (
                          <div className="col-md-6" key={index}>
                            <div className="post-thumb">
                              <img src={image} alt="img" />
                            </div>
                          </div>
                        ))}
                      {service?.images && service.images.length > 2 && (
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
                            {service.images.map((image: string, index: number) => (
                              <SwiperSlide key={index}>
                                <div className="post-thumb">
                                  <img src={image} alt="img" />
                                </div>
                              </SwiperSlide>
                            ))}
                          </Swiper>
                        </div>
                      )}
                    </div>

                    {service?.tagLine && (
                      <div className="highlight-text">
                        <div className="qoute-shape">
                          <img src="/assets/img/service/5.png" alt="shape" />
                        </div>
                        <div className="content">
                          <h6>{service.tagLine}</h6>
                          <div className="info">
                            <img src="/assets/img/service/4.png" alt="img" />
                            <h5>Het Mangukiya</h5>
                          </div>
                        </div>
                      </div>
                    )}

                    {service?.whyChoose && (
                      <>
                        <h3 className="mb-3">{service.whyChoose.title}</h3>
                        <p>{service.whyChoose.description}</p>
                      </>
                    )}

                    <div className="post-list mt-3">
                      {service?.serviceIds?.map((item: { name: string }, idx: number) => (
                        <div key={idx} className="post-item">
                          <div className="icon">
                            <img src="/assets/img/icon/arrow-circle-right.svg" alt="icon" />
                          </div>
                          <div className="content">
                            <h6>{item.name}</h6>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="main-sidebar">
                {allServices?.length > 0 && (
                  <div className="single-sidebar-widget">
                    <div className="wid-title">
                      <h3>Service List</h3>
                    </div>
                    <div className="service-list">
                      <ul>
                        {allServices?.map((item: OurServiceBase, idx: number) => (
                          <li key={item._id || idx} onClick={() => navigate(ROUTES.SERVICE_DETAIL.replace(":id", item._id))}>
                            <a href={ROUTES.SERVICE_DETAIL.replace(":id", item._id)}>{item.title}</a>
                            <img src="/assets/img/icon/43.svg" alt="icon" />
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceDetails;
