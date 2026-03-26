import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import Typed from "typed.js";
import { VideoModal } from "../Common";
import { openVideoModal } from "../../Store/Slice/videoSlice";

const HeroSection = () => {
    const el = useRef(null);
    const dispatch = useDispatch();

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: [
                '<span class="highlight">UI/UX</span> Designer',
                '<span class="highlight">Web</span> Designer',
                '<span class="highlight">App</span> Developer',
                '<span class="highlight">Web</span> Developer',
            ],
            typeSpeed: 120,
            backSpeed: 60,
            startDelay: 0,
            backDelay: 200,
            loop: true,
            showCursor: false,
            smartBackspace: true,
        });

        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <section className="hero-section hero-1 fix">
            <div className="arrow-right-shape">
                <img src="assets/img/hero/bg-1.png" alt="img" />
            </div>
            <div className="arrow-shape float-bob-y">
                <img src="assets/img/hero/angle-arrow.png" alt="img" />
            </div>
            <div className="arrow-up">
                <img src="assets/img/hero/arrow.png" alt="img" />
            </div>
            <div className="hero-info">
                <a href="#" className="active">Facebook</a>
                <a href="#">Twitter</a>
                <a href="#">Linked in</a>
                <a href="#">Dribbble</a>
            </div>
            <div className="container">
                <div className="row g-4 justify-content-center">
                    <div className="col-lg-10">
                        <div className="hero-content">
                            <span className="text-2"><img src="assets/img/shape/star-2.png" alt="img" />Hey There!</span>
                            <h1>I'm Rachel <span className="style-2">Davis</span> <br />
                                <strong className="type-text" ref={el}></strong></h1>
                            <div className="hero-bottom">
                                <p>
                                    We’re a team of strategic working globally with largest brands, We believe that progress only you to play things safe.
                                </p>
                                <div className="hero-btn-wrapper">
                                    <a href="contact.html" className="theme-btn">Download CV
                                        <i className="fa-solid fa-arrow-right"></i>
                                    </a>
                                    <a 
                                        className="video-btn video-popup border-0 bg-transparent"
                                        onClick={() => dispatch(openVideoModal("https://www.youtube.com/watch?v=-sAOWhvheK8"))}
                                    >
                                        <span className="icon"><i className="fa-solid fa-play"></i></span>
                                        <span className="text">Show Reel</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <VideoModal />
        </section>
    )
}

export default HeroSection