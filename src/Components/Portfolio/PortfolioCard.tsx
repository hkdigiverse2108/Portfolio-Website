import type { PortfolioBase } from "../../Types";
import { ROUTES } from "../../Constant";

interface PortfolioCardProps {
  portfolio: PortfolioBase;
  className?: string;
  wrapperClass?: string;
  delay?: string;
  imageClass?: string;
  animationClass?: string;
}

const PortfolioCard = ({ portfolio, className = "project-items", wrapperClass = "col-xl-6 col-lg-6 col-md-6", delay, imageClass = "image", animationClass = "wow fadeInUp" }: PortfolioCardProps) => {
  const { title, projectName, thumbnailImage, _id } = portfolio;

  const link = ROUTES.PORTFOLIO_DETAIL.replace(":id", _id);
  const animationDelay = delay || ".2s";

  return (
    <div className={wrapperClass}>
      <div className={`${className} ${animationClass}`} data-wow-delay={animationDelay}>
        <div className={imageClass}>
          <img src={thumbnailImage || ""} alt={title || "img"} />
        </div>
        <div className="content">
          <div className="text">
            <span>{projectName}</span>
            <h4>
              <a href={link}>{title}</a>
            </h4>
          </div>
          <div className="icon">
            <a href={link}>
              {" "}
              <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;
