import { blogPosts } from "../../Data/Blog";
import { BlogCard } from "../Blog";

const BlogSection = () => {
  return (
    <section className="news-section news-1 section-padding section-bg fix">
      <div className="container">
        <div className="section-title text-center">
          <span className="wow fadeInUp">
            <img src="assets/img/shape/star-2.png" alt="img" />
            My Blog
            <img src="assets/img/shape/star-2.png" alt="img" />
          </span>
          <h2 className="wow fadeInUp" data-wow-delay=".2s">
            Latest <span>Blog</span>
          </h2>
        </div>
        <div className="row">
          {blogPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
        <div className="news-button text-center">
          <a href="news-details.html" className="theme-btn">
            View All Blog <i className="fa-solid fa-arrow-right"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;