const serviceData = [
    {
        id: "01",
        title: "Moblie App Design",
        description: <>We’re a team of strategic working globally with largest brands, <br/> progress only you to play things safe.</>,
        link: "service-details.html",
        delay: ".2s"
    },
    {
        id: "02",
        title: "Web Design",
        description: <>We’re a team of strategic working globally with largest brands, <br/> progress only you to play things safe.</>,
        link: "service-details.html",
        delay: ".4s"
    },
    {
        id: "03",
        title: "UI/UX Design",
        description: <>We’re a team of strategic working globally with largest brands, <br/> progress only you to play things safe.</>,
        link: "service-details.html",
        delay: ".6s"
    },
    {
        id: "04",
        title: "Visual Design",
        description: <>We’re a team of strategic working globally with largest brands, <br/> progress only you to play things safe.</>,
        link: "service-details.html",
        delay: ".8s"
    }
];

const ServiceSection = () => {
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
                    {serviceData.map((service, index) => (
                        <div key={index} className={`services-item ${index === serviceData.length - 1 ? 'mb-0' : ''} wow fadeInUp`} data-wow-delay={service.delay}>
                            <div className="head">
                                <span>{service.id}</span>
                                <h4><a href={service.link}>{service.title}</a></h4>
                            </div>
                            <div className="text">
                                <p>{service.description}</p>
                            </div>
                            <div className="link-btn">
                                <i className="fa-solid fa-arrow-right"></i>
                                <a href={service.link}>Read More</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ServiceSection;