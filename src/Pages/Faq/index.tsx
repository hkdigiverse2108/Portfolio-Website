import { BreadCrumb } from "../../Components/Common";
import { MarqueeSection } from "../../Components/Home";
import { faqData } from "../../Data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

const testimonials = [
  {
    name: "Jakie Chen",
    position: "Senior Developer",
    image: "assets/img/testimonials/2.jpg",
    content: "Our app exceeded expectations! The design, performance, and user experience were flawless. Highly recommend their services!",
    style2: true,
  },
  {
    name: "Michael Sarah",
    position: "Product Manager",
    image: "assets/img/testimonials/3.jpg",
    content: "Our app exceeded expectations! The design, performance, and user experience were flawless. Highly recommend their services!",
    style2: false,
  },
  {
    name: "Jaden Smith",
    position: "UI Designer",
    image: "assets/img/testimonials/4.jpg",
    content: "Our app exceeded expectations! The design, performance, and user experience were flawless. Highly recommend their services!",
    style2: true,
  },
  {
    name: "Michael Sarah",
    position: "Product Manager",
    image: "assets/img/testimonials/3.jpg",
    content: "Our app exceeded expectations! The design, performance, and user experience were flawless. Highly recommend their services!",
    style2: false,
  },
];

const Faq = () => {
    return (
        <>
            <BreadCrumb title="Faq" pageName="Faq" />
            <section className="faq-section faq-1 section-padding fix section-bg">
                <div className="arrow-shape float-bob-y">
                    <img src="/assets/img/shape/angle-arrow-2.png" alt="img" />
                </div>
                <div className="star-shape float-bob-x">
                    <img src="/assets/img/shape/star-6.png" alt="img" />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-5 col-lg-6">
                            <div className="section-title">
                                <span className="style-2 wow fadeInUp">
                                    <img src="/assets/img/shape/star-2.png" alt="img" />
                                    Find Your Answer
                                </span>
                                <h2 className="wow fadeInUp" data-wow-delay=".2s">Read Most Frequent Questions</h2>
                                <p className="wow fadeInUp" data-wow-delay=".3s">
                                    The value of development projects depends on <br />
                                    complexity, technology, and features. Prices
                                    range from <br />
                                    $1,000 for simple websites.
                                </p>
                            </div>
                            <h6 className="wow fadeInUp" data-wow-delay=".4s">Haven’t found an answer to your query?</h6>
                            <a href="contact.html" className="theme-btn wow fadeInUp" data-wow-delay=".5s">Contact Us</a>
                        </div>
                        <div className="col-xl-7 col-lg-6">
                            <div className="faq-items style-2">
                                <div className="faq-accordion">
                                    <div className="accordion" id="accordion1">
                                        {faqData.map((item) => (
                                            <div key={item.id} className="accordion-item mb-3 wow fadeInUp" data-wow-delay={item.delay}>
                                                <h5 className="accordion-header">
                                                    <button 
                                                        className={`accordion-button ${item.id === 2 ? "" : "collapsed"}`} 
                                                        type="button"
                                                        data-bs-toggle="collapse"
                                                        data-bs-target={`#faq${item.id}`}
                                                        aria-expanded={item.id === 2 ? "true" : "false"}
                                                        aria-controls={`faq${item.id}`}
                                                    >
                                                        {item.question}
                                                    </button>
                                                </h5>
                                                <div 
                                                    id={`faq${item.id}`} 
                                                    className={`accordion-collapse collapse ${item.id === 2 ? "show" : ""}`}
                                                    data-bs-parent="#accordion1"
                                                >
                                                    <div className="accordion-body">
                                                        {item.answer}
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <MarqueeSection />

            <section className="testimonials-section testimonials-2 section-padding fix">
                <div className="container">
                    <div className="section-title-area">
                        <div className="section-title">
                            <span className="style-2 wow fadeInUp">
                                <img src="/assets/img/shape/star-2.png" alt="img" />
                                Testimonial
                            </span>
                            <h2 className="wow fadeInUp" data-wow-delay=".2s">Peoples Say’s About Me</h2>
                        </div>
                        <div className="slide-btn">
                            <button className="array-prev"><i className="fa-solid fa-arrow-left"></i></button>
                            <button className="array-next"><i className="fa-solid fa-arrow-right"></i></button>
                        </div>
                    </div>
                    
                    <Swiper
                        modules={[Navigation, Autoplay]}
                        className="testi-content-slider mxg"
                        spaceBetween={30}
                        speed={2000}
                        loop={true}
                        centeredSlides={true}
                        autoplay={{
                            delay: 1000,
                            disableOnInteraction: false,
                        }}
                        navigation={{
                            nextEl: ".array-prev",
                            prevEl: ".array-next",
                        }}
                        breakpoints={{
                            1199: { slidesPerView: 3 },
                            991: { slidesPerView: 2 },
                            767: { slidesPerView: 2 },
                            575: { slidesPerView: 1 },
                            0: { slidesPerView: 1 },
                        }}
                    >
                        {testimonials.map((item, index) => (
                            <SwiperSlide key={index}>
                                <div className={`testimonials-item ${item.style2 ? "style-2" : ""}`}>
                                    <div className="head">
                                        <div className="info">
                                            <div className="thumb">
                                                <img src={item.image} alt="img" />
                                            </div>
                                            <div className="text">
                                                <h4>{item.name}</h4>
                                                <span>{item.position}</span>
                                            </div>
                                        </div>
                                        <div className="qoute">
                                            <img src="/assets/img/icon/24.svg" alt="img" />
                                        </div>
                                    </div>
                                    <p>{item.content}</p>
                                    <div className="star">
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </section>
        </>
    );
};

export default Faq;
Faq;