import { useEffect, useRef, useMemo } from "react";
import { useDispatch } from "react-redux";
import Typed from "typed.js";
import { openVideoModal } from "../../Store/Slice/videoSlice";
import type { HeroSectionBase, SocialMediaLink } from "../../Types";
import { splitLastWord } from "../../Utils";

const HeroSection = ({ data, socialMediaLinks }: { data?: HeroSectionBase; socialMediaLinks?: SocialMediaLink[] }) => {
  const el = useRef(null);
  const dispatch = useDispatch();

  const activeLinks = socialMediaLinks?.filter((item) => item.isActive == true);

  const { firstPart: firstName, lastWord: lastName } = splitLastWord(data?.title);
  // console.log("title", data?.title);
  // console.log("firstName", firstName, "lastName", lastName);

  const strings = useMemo(() => {
    return (
      data?.subTitles?.map((item) => {
        const word = item.split(" ");
        const firstWord = word.shift() || "";
        const restOfWords = word.join(" ") || "";
        return `<span class="highlight">${firstWord}</span> ${restOfWords}`;
      }) || []
    );
  }, [data?.subTitles]);

  useEffect(() => {
    if (!el.current || strings.length === 0) return;

    const typed = new Typed(el.current, {
      strings: strings,
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
  }, [strings]);

  return (
    <section className="hero-section hero-1 fix">
      <div className="arrow-right-shape">
        <img src="/assets/img/hero/bg-1.png" alt="img" />
      </div>
      <div className="arrow-shape float-bob-y">
        <img src="/assets/img/hero/angle-arrow.png" alt="img" />
      </div>
      <div className="arrow-up">
        <img src="/assets/img/hero/arrow.png" alt="img" />
      </div>
      <div className="hero-info">
        {activeLinks?.map((item, index) => (
          <a href={item.link} target="_blank" className={index === 0 ? "active" : ""}>
            {item.title}
          </a>
        ))}
        {/* <a href="#" className="active">
          Facebook
        </a>
        <a href="#">Twitter</a>
        <a href="#">Linked in</a>
        <a href="#">Dribbble</a> */}
      </div>
      <div className="container">
        <div className="row g-4 justify-content-center">
          <div className="col-lg-10">
            <div className="hero-content">
              <span className="text-2" data-aos="fade-up">
                <img src="/assets/img/shape/star-2.png" alt="img" />
                Hey There!
              </span>
              <h1 data-aos="fade-up" data-aos-delay="200">
                {/* I'm Rachel <span className="style-2">Davis</span> <br /> */}
                {firstName} <span className="style-2">{lastName}</span> <br />
                <strong className="type-text" ref={el}></strong>
              </h1>
              <div className="hero-bottom" data-aos="fade-up" data-aos-delay="400">
                {/* <p>We’re a team of strategic working globally with largest brands, We believe that progress only you to play things safe.</p> */}
                <p>{data?.description}</p>
                <div className="hero-btn-wrapper">
                  {/* <a href="contact.html" className="theme-btn">
                    Download CV
                    <i className="fa-solid fa-arrow-right"></i>
                  </a> */}
                  <a className="video-btn video-popup border-0 bg-transparent" onClick={() => dispatch(openVideoModal(data?.link || ""))}>
                    <span className="icon">
                      <i className="fa-solid fa-play"></i>
                    </span>
                    {/* <span className="text">Show Reel</span> */}
                    <span className="text">{data?.linkTitle || ""}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
