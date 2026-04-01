import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectCards } from "swiper/modules";
import { CountItem } from "../Common";

import type { TestimonialDescriptionData, TestimonialBase } from "../../Types";
import { splitLastWord } from "../../Utils";

interface TestimonialsSectionProps {
  testimonialDescriptionData?: TestimonialDescriptionData;
  testimonialData?: TestimonialBase[];
}

const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ testimonialDescriptionData, testimonialData }) => {
  const { firstPart: titleFirst, lastWord: titleLast } = splitLastWord(testimonialDescriptionData?.title);
  return (
    <section className="testimonials-section testimonials-1 section-padding section-bg-2 fix">
      <div className="random-shape float-bob-x">
        <img src="/assets/img/shape/random-shape.png" alt="img" />
      </div>
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-6">
            <div className="section-title">
              <span data-aos="fade-up">
                <img src="/assets/img/shape/star-2.png" alt="img" />
                Testimonials
              </span>
              {/* <h2 className="wow fadeInUp" data-wow-delay=".2s">Our clients awesome <span>Testimonials</span></h2> */}
              <h2 data-aos="fade-up" data-aos-delay="200">
                {titleFirst} <span>{titleLast}</span>
              </h2>
            </div>
            <div className="reviews" data-aos="fade-up" data-aos-delay="400">
              <h2 className="count">{testimonialDescriptionData?.rating !== undefined ? <CountItem end={testimonialDescriptionData.rating} decimals={1} /> : "0"}</h2>
              <div className="item">
                <span>{testimonialDescriptionData?.subTitle}</span>
                <div className="star">
                  {[...Array(5)].map((_, i) => {
                    const rating = testimonialDescriptionData?.rating || 0;
                    if (i < Math.floor(rating)) {
                      return <i key={i} className="fa-solid fa-star"></i>;
                    } else if (i === Math.floor(rating) && rating % 1 >= 0.5) {
                      return <i key={i} className="fa-solid fa-star-half-stroke"></i>;
                    } else {
                      return <i key={i} className="fa-solid fa-star text-muted"></i>;
                    }
                  })}
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
                {testimonialData?.map((item, index) => (
                  <SwiperSlide key={index}>
                    <div className="testimonial-box-items">
                      <div className="client-info">
                        <img src={item.image} alt="img" />
                        <div className="client-content">
                          <h5>{item.name}</h5>
                          <p>{item.designation}</p>
                        </div>
                      </div>
                      <div className="testi-content">
                        <div className="icon">
                          <img src="/assets/img/icon/42.svg" alt="img" />
                        </div>
                        <p>{item.description}</p>
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
