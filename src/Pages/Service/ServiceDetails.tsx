import { useParams, useNavigate } from "react-router-dom";
import { Queries } from "../../Api";
import { BreadCrumb, PreLoader } from "../../Components/Common";
import { ROUTES } from "../../Constant";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import type { OurServiceBase } from "../../Types";

const ServiceDetails = () => {
  const navigate = useNavigate();
  const { data: userRes } = Queries.useGetUser();
  const userData = userRes?.data;

  const { id } = useParams();
  const { data: serviceDetailData, isLoading: detailLoading } = Queries.useGetServiceDetails(id);
  const { data: allServicesData, isLoading: servicesLoading } = Queries.useGetOurService();

  const service = serviceDetailData?.data;
  const allServices = allServicesData?.data?.ourService_data.filter((item: OurServiceBase) => item._id !== id).slice(0, 7) || [];
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
                    <div className="dynamic-blog-content" dangerouslySetInnerHTML={{ __html: service?.description || "" }} />
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
                            <img src={userData?.profileImage || "/assets/img/service/4.png"} alt="img" className="logo-img" />
                            <h5>{userData?.firstName + " " + userData?.lastName}</h5>
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
