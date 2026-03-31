import { ROUTES } from "../../Constant"
import type { PortfolioBase } from "../../Types";

interface ProjectSectionProps {
  portfolioData?: PortfolioBase[];
}

const ProjectSection = ({ portfolioData }: ProjectSectionProps) => {
  return (
     <section className="project-section section-padding fix">
        <div className="container">
            <div className="section-title-area">
                <div className="section-title">
                    <span className="wow fadeInUp"><img src="assets/img/shape/star-2.png" alt="img"/>Project</span>
                    <h2 className="wow fadeInUp" data-wow-delay=".2s">My Featured <span>Protfoilo</span></h2>
                </div>
                <a href={ROUTES.PORTFOLIO} className="theme-btn wow fadeInUp" data-wow-delay=".4s">
                    View All Project
                    <i className="fa-solid fa-arrow-right"></i>
                </a>
            </div>
            <div className="project-wrapper">
                <div className="row g-4">
                    {portfolioData?.map((item, index) => {
                        const colSizes = ["col-xl-6", "col-xl-6", "col-xl-7", "col-xl-5"];
                        const colClass = colSizes[index % 4];
                        const delayNum = ((index % 4) + 1) * 0.3;
                        const delayStr = delayNum < 1 ? `.${delayNum * 10}s` : `${delayNum}s`; // Maps to .3s, .6s, .9s, 1.2s
                        
                        return (
                            <div className={`${colClass} col-lg-6 col-md-6`} key={item._id || index}>
                                <div className="project-items wow img-custom-anim-top" data-wow-delay={delayStr}>
                                    <div className="image">
                                        <img src={item.thumbnailImage} alt={item.projectName || "img"}/>
                                    </div>
                                    <div className="content">
                                        <div className="text">
                                            <span>{item.subTitle}</span>
                                            <h4><a href={ROUTES.PORTFOLIO_DETAIL}>{item.title}</a></h4>
                                        </div>
                                        <div className="icon">
                                            <a href={ROUTES.PORTFOLIO_DETAIL}> <i className="fa-solid fa-arrow-right"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    </section>
  )
}

export default ProjectSection