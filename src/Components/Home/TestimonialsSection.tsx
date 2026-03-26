import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectCards } from 'swiper/modules';
import { useCountUp } from 'react-countup';

const testimonials = [
    {
        name: "Daniel Smith",
        position: "Senior engineer",
        image: "assets/img/testimonials/1.png",
        content: "This digital agency completely transformed our online presence. Their expertise, creativity, and attention to detail exceeded all our expectations. We highly recommend their outstanding services!",
        icon: "assets/img/icon/42.svg"
    },
    {
        name: "Daniel Smith",
        position: "Senior engineer",
        image: "assets/img/testimonials/1.png",
        content: "This digital agency completely transformed our online presence. Their expertise, creativity, and attention to detail exceeded all our expectations. We highly recommend their outstanding services!",
        icon: "assets/img/icon/42.svg"
    },
    {
        name: "Daniel Smith",
        position: "Senior engineer",
        image: "assets/img/testimonials/1.png",
        content: "This digital agency completely transformed our online presence. Their expertise, creativity, and attention to detail exceeded all our expectations. We highly recommend their outstanding services!",
        icon: "assets/img/icon/42.svg"
    },
    {
        name: "Daniel Smith",
        position: "Senior engineer",
        image: "assets/img/testimonials/1.png",
        content: "This digital agency completely transformed our online presence. Their expertise, creativity, and attention to detail exceeded all our expectations. We highly recommend their outstanding services!",
        icon: "assets/img/icon/42.svg"
    },
    {
        name: "Daniel Smith",
        position: "Senior engineer",
        image: "assets/img/testimonials/1.png",
        content: "This digital agency completely transformed our online presence. Their expertise, creativity, and attention to detail exceeded all our expectations. We highly recommend their outstanding services!",
        icon: "assets/img/icon/42.svg"
    }
];

const CountItem = ({ end, decimals = 1, duration = 4 }: { end: number, decimals?: number, duration?: number }) => {
    const countRef = useRef<HTMLSpanElement>(null!);
    useCountUp({
        ref: countRef,
        end: end,
        decimals: decimals,
        duration: duration,
        enableScrollSpy: true,
        scrollSpyOnce: true,
    });
    return <span ref={countRef} />;
};

const TestimonialsSection = () => {
    return (
        <section className="testimonials-section testimonials-1 section-padding section-bg-2 fix">
            <div className="random-shape float-bob-x">
                <img src="assets/img/shape/random-shape.png" alt="img" />
            </div>
            <div className="container">
                <div className="row g-4">
                    <div className="col-lg-6">
                        <div className="section-title">
                            <span className="wow fadeInUp"><img src="assets/img/shape/star-2.png" alt="img" />Testimonials</span>
                            <h2 className="wow fadeInUp" data-wow-delay=".2s">Our clients awesome <span>Testimonials</span></h2>
                        </div>
                        <div className="reviews wow fadeInUp" data-wow-delay=".4s">
                            <h2 className="count">
                                <CountItem end={4.8} />
                            </h2>
                            <div className="item">
                                <span>1200+ Clients Rating.</span>
                                <div className="star">
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="testimonials-wrapper">
                            <Swiper
                                modules={[Autoplay, Pagination, EffectCards]}
                                spaceBetween={30}
                                speed={2000}
                                loop={true}
                                effect="cards"
                                cardsEffect={{
                                    perSlideOffset: 8,
                                    perSlideRotate: 2,
                                    slideShadows: false,
                                }}
                                grabCursor={true}
                                autoplay={{
                                    delay: 1000,
                                    disableOnInteraction: false,
                                }}
                                pagination={{
                                    el: ".dot",
                                    clickable: true,
                                }}
                                className="testimonial-slider"
                            >
                                {testimonials.map((item, index) => (
                                    <SwiperSlide key={index}>
                                        <div className="testimonial-box-items">
                                            <div className="client-info">
                                                <img src={item.image} alt="img" />
                                                <div className="client-content">
                                                    <h5>{item.name}</h5>
                                                    <p>{item.position}</p>
                                                </div>
                                            </div>
                                            <div className="testi-content">
                                                <div className="icon">
                                                    <img src={item.icon} alt="img" />
                                                </div>
                                                <p>{item.content}</p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                            <div className="swiper-dot text-center">
                                <div className="dot"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;
