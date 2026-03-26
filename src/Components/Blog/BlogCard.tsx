import { type BlogPost } from "../../Data/Blog";

interface BlogCardProps {
  post: BlogPost;
  className?: string;
}

const BlogCard = ({ post, className = "" }: BlogCardProps) => {
  return (
    <div className="col-lg-4 col-md-6">
      <div className={`news-item wow fadeInUp ${className}`} data-wow-delay={post.delay}>
        <div className="thumb">
          <img src={post.image} alt="img" />
        </div>
        <div className="content">
          <ul className="news-meta">
            <li className="green">{post.category}</li>
            <li className="date"><span></span>{post.date}</li>
          </ul>
          <h4>
            <a href={post.link}>{post.title}</a>
          </h4>
          <div className="news-btn">
            <a href={post.link} className="icon">
              <i className="fa-solid fa-arrow-right"></i>
            </a>
            <a href={post.link} className="link-btn">Read More</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
