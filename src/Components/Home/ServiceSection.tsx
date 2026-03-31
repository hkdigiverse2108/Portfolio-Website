import { ROUTES } from "../../Constant";
import type { OurServiceBase } from "../../Types";

interface ServiceSectionProps {
    ourServiceData?: OurServiceBase[];
}

const ServiceSection = ({ ourServiceData }: ServiceSectionProps) => {
    return (
        <section className="service-section service-1 section-padding section-bg fix">
            <div className="random-shape float-bob-y">
                <img src="assets/img/shape/random-shape.png" alt="img" />
            </div>
            <div className="container">
                <h2 className="sub-title">OUR SERVICE</h2>
                <div className="section-title text-center">
                    <span className="wow fadeInUp"><img src="assets/img/shape/star-2.png" alt="img" />Our Service<img src="assets/img/shape/star-2.png" alt="img" /></span>
                    <h2 className="wow fadeInUp" data-wow-delay=".2s">The Ease-<span>Service</span> Process</h2>
                </div>
                <div className="service-wrapper">
                    {ourServiceData?.map((service, index) => (
                        <div key={service._id || index} className={`services-item ${index === ourServiceData.length - 1 ? 'mb-0' : ''} wow fadeInUp`} data-wow-delay={`.${(index + 1) * 2}s`}>
                            <div className="head">
                                <span>{String(index + 1).padStart(2, '0')}</span>
                                <h4><a href={ROUTES.SERVICE}>{service.title}</a></h4>
                            </div>
                            <div className="text">
                                <p>{service.shortDescription}</p>
                            </div>
                            <div className="link-btn">
                                <i className="fa-solid fa-arrow-right"></i>
                                <a href={ROUTES.SERVICE}>Read More</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ServiceSection;