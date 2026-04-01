import type { BlogBase } from "../../Types";
import { ROUTES } from "../../Constant";

interface BlogCardProps {
  post: BlogBase;
  className?: string;
  delay?: string;
}

const BlogCard = ({ post, className = "", delay }: BlogCardProps) => {
  const title = post.title || "";
  const image = post.thumbnailImage || "";
  const category = post.serviceId?.name || "Blog";

  let dateStr = "";
  if (post.date) {
    if (post.date.includes("T")) {
      dateStr = new Date(post.date).toLocaleDateString();
    } else {
      dateStr = post.date;
    }
  }

  const link = post._id ? ROUTES.BLOG_DETAIL.replace(":id", post._id) : ROUTES.BLOG;
  const animationDelay = delay || "";

  return (
    <div className="col-lg-4 col-md-6">
      <div className={`news-item wow fadeInUp ${className}`} data-wow-delay={animationDelay}>
        <div className="thumb">
          <img src={image} alt="img" />
        </div>
        <div className="content">
          <ul className="news-meta">
            <li className="green">{category}</li>
            <li className="date">
              <span></span>
              {dateStr}
            </li>
          </ul>
          <h4>
            <a href={link}>{title}</a>
          </h4>
          <div className="news-btn">
            <a href={link} className="icon">
              <i className="fa-solid fa-arrow-right"></i>
            </a>
            <a href={link} className="link-btn">
              Read More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
