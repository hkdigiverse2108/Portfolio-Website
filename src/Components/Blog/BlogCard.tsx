import { type BlogPost } from "../../Data/Blog";

interface BlogCardProps {
  post: BlogPost;
}

const BlogCard = ({ post }: BlogCardProps) => {
  return (
    <div className="col-lg-4 col-md-6">
      <div className="news-item wow fadeInUp" data-wow-delay={post.delay}>
        <div className="thumb">
          <img src={post.image} alt="blog post thumbnail" />
        </div>
        <div className="content">
          <ul className="news-meta">
            <li className="green">{post.category}</li>
            <li className="date"><span></span>{post.date}</li>
          </ul>
          <h4>
            <a href={post.link}>{post.title}</a>
          </h4>
          <div className="news-btns">
            <i className="fa-solid fa-arrow-right"></i>
            <a href={post.link}>Read More</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
