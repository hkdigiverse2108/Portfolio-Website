import type { PortfolioBase } from "../../Types";
import { ROUTES } from "../../Constant";

interface PortfolioCardProps {
  portfolio: PortfolioBase;
  className?: string;
  wrapperClass?: string;
  delay?: string | number;
  imageClass?: string;
  animationClass?: string;
  aosAnimation?: string;
}

const PortfolioCard = ({ portfolio, className = "project-items", wrapperClass = "col-xl-6 col-lg-6 col-md-6", delay, imageClass = "image", animationClass = "", aosAnimation = "fade-up" }: PortfolioCardProps) => {
  const { title, projectName, thumbnailImage, _id } = portfolio;

  const link = ROUTES.PORTFOLIO_DETAIL.replace(":id", _id);

  return (
    <div className={wrapperClass}>
      <div className={`${className} ${animationClass}`} data-aos={aosAnimation} data-aos-delay={delay}>
        <div className={imageClass}>
          <img src={thumbnailImage || ""} alt={title || "img"} style={{ width: "100%", height: "100%", objectFit: "cover"  }} />
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
