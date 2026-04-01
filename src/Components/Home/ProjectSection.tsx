import { ROUTES } from "../../Constant";
import type { PortfolioBase } from "../../Types";
import { PortfolioCard } from "../Portfolio";

interface ProjectSectionProps {
  portfolioData?: PortfolioBase[];
}

const ProjectSection = ({ portfolioData }: ProjectSectionProps) => {
  const featured = portfolioData?.filter((item) => item.isFeatured).slice(0, 4);
  return (
    <section className="project-section section-padding fix">
      <div className="container">
        <div className="section-title-area">
          <div className="section-title">
            <span data-aos="fade-up">
              <img src="/assets/img/shape/star-2.png" alt="img" />
              Project
            </span>
            <h2 data-aos="fade-up" data-aos-delay="200">
              My Featured <span>Protfoilo</span>
            </h2>
          </div>
          <a href={ROUTES.PORTFOLIO} className="theme-btn" data-aos="fade-up" data-aos-delay="400">
            View All Project
            <i className="fa-solid fa-arrow-right"></i>
          </a>
        </div>
        <div className="project-wrapper">
          <div className="row g-4">
            {featured?.map((item, index) => {
              const colSizes = ["col-xl-6", "col-xl-6", "col-xl-7", "col-xl-5"];
              const colClass = colSizes[index % 4];
              const delayNum = (index % 4) * 300;

              return <PortfolioCard key={item._id || index} portfolio={item} wrapperClass={`${colClass} col-lg-6 col-md-6`} className="project-items" delay={delayNum} imageClass="image" animationClass="" aosAnimation="img-custom-anim-top" />;
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
