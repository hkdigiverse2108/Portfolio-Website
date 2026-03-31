import { CountItem } from "../Common";
import type { WorkCountBase } from "../../Types";
import { ROUTES } from "../../Constant";

interface AboutSectionProps {
  description?: string;
  workCountData?: WorkCountBase[];
}

const parseNumber = (numStr: string) => {
  if (!numStr) return { num: 0, suffix: "" };
  const num = Number(numStr.replace(/[^0-9.]/g, ""));
  const suffix = numStr.replace(/[0-9.,]/g, "");
  return { num, suffix };
};

const AboutSection = ({ description, workCountData }: AboutSectionProps) => {
  return (
    <section className="about-section fix section-padding">
      <div className="container">
        <div className="section-title-area">
          <div className="section-title">
            <span className="wow fadeInUp">
              <img src="assets/img/shape/star-2.png" alt="img" />
              We Are We
            </span>
            <h2 className="wow fadeInUp" data-wow-delay=".2s">
              Solving Problems With <br /> lntuitive
              <span>Design</span>
            </h2>
          </div>
          <div className="content">
            {/* <p>We’re a team of strategic working globally with largest brands, We believe that progress only you to play things safe.</p> */}
            <p>{description}</p>
            <a href={ROUTES.ABOUT} className="theme-btn">
              More About ME
              <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>
        <div className="about-wrapper-1">
          <div className="row">
            {workCountData?.reverse()?.map((item, index) => {
              const parsed = parseNumber(item.number || "0");
              const parts = item.title?.split(" ") || [];
              const mid = Math.ceil(parts.length / 2);
              const firstParts = parts.slice(0, mid).join(" ");
              const lastParts = parts.slice(mid).join(" ");

              return (
                <div className="col-xl-4 col-lg-6 col-md-6" key={item._id || index}>
                  <div className={`about-box-item ${index % 3 === 1 ? "style-2" : ""}`}>
                    <h2>
                      <span className="count">
                        <CountItem end={parsed.num} />
                      </span>
                      {parsed.suffix}
                    </h2>
                    <h3>
                      {firstParts} <br />
                      <span>{lastParts}</span>
                    </h3>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
