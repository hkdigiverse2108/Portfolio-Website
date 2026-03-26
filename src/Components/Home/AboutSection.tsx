import { useRef } from "react";
import { useCountUp } from "react-countup";

const CountItem = ({ end, duration = 4 }: { end: number, duration?: number }) => {
    const countRef = useRef<HTMLSpanElement>(null!);
    useCountUp({
        ref: countRef,
        end: end,
        duration: duration,
        enableScrollSpy: true,
        scrollSpyOnce: true,
    });
    return <span ref={countRef} />;
};

const AboutSection = () => {
    return (
        <section className="about-section fix section-padding">
            <div className="container">
                <div className="section-title-area">
                    <div className="section-title">
                        <span className="wow fadeInUp"><img src="assets/img/shape/star-2.png" alt="img" />We Are We</span>
                        <h2 className="wow fadeInUp" data-wow-delay=".2s">
                            Solving Problems With <br /> lntuitive
                            <span>Design</span>
                        </h2>
                    </div>
                    <div className="content">
                        <p>
                            We’re a team of strategic working globally with largest brands, We believe that progress only you to play things safe.
                        </p>
                        <a href="about.html" className="theme-btn">More About ME
                            <i className="fa-solid fa-arrow-right"></i>
                        </a>
                    </div>
                </div>
                <div className="about-wrapper-1">
                    <div className="row">
                        <div className="col-xl-4 col-lg-6 col-md-6">
                            <div className="about-box-item">
                                <h2>
                                    <span className="count">
                                        <CountItem end={10} />
                                    </span>+
                                </h2>
                                <h3>
                                    Years of My <br />
                                    <span>Experience...</span>
                                </h3>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-md-6">
                            <div className="about-box-item style-2">
                                <h2>
                                    <span className="count">
                                        <CountItem end={1400} />
                                    </span>k
                                </h2>
                                <h3>
                                    Clients Satisfied <br />
                                    <span>Worldwide...</span>
                                </h3>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-md-6">
                            <div className="about-box-item">
                                <h2>
                                    <span className="count">
                                        <CountItem end={500} />
                                    </span>k
                                </h2>
                                <h3>
                                    Successfully <br />
                                    <span> Project Done...</span>
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection;