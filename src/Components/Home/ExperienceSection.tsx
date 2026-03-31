import { CountItem } from "../Common";
import type { WorkExperienceBase, SkillBase } from "../../Types";

interface ExperienceSectionProps {
  workExperienceData?: WorkExperienceBase[];
  skillData?: SkillBase[];
}

const ExperienceSection = ({ workExperienceData, skillData }: ExperienceSectionProps) => {
  return (
    <section className="experience-section section-padding section-bg fix">
      <div className="container">
        <div className="section-title  text-center">
          <span className="wow fadeInUp">
            <img src="/assets/img/shape/star-2.png" alt="img" />
            My Experience
            <img src="/assets/img/shape/star-2.png" alt="img" />
          </span>
          <h2 className="wow fadeInUp" data-wow-delay=".2s">
            My Work Experience
          </h2>
        </div>
        <div className="experience-wrapper">
          {workExperienceData?.map((item, index) => (
            <div className="experience-items wow fadeInUp" data-wow-delay={`.${(index + 1) * 2}s`} key={item._id || index}>
              <span>{item.year}</span>
              <h4>{item.title}</h4>
              <h6>{item.subTitle}</h6>
            </div>
          ))}
        </div>
        <div className="client-wrapper">
          <div className="client-items">
            {skillData?.map((item, index) => (
              <div className="client-item" key={item._id || index}>
                <div className="icon">
                  <img src={item.image} alt={item.title || "img"} />
                </div>
                <h4 className="number">
                  <span className="count">
                    <CountItem end={item.percentage || 0} />
                  </span>
                  % <span className="text">{item.title}</span>
                </h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
