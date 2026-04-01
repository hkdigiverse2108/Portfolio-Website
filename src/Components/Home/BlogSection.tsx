import { ROUTES } from "../../Constant";
import { BlogCard } from "../Blog";
import type { BlogBase } from "../../Types";

interface BlogSectionProps {
  data?: BlogBase[];
}

const BlogSection: React.FC<BlogSectionProps> = ({ data }) => {
  return (
    <section className="news-section news-1 section-padding section-bg fix">
      <div className="container">
        <div className="section-title text-center">
          <span data-aos="fade-up">
            <img src="/assets/img/shape/star-2.png" alt="img" />
            My Blog
            <img src="/assets/img/shape/star-2.png" alt="img" />
          </span>
          <h2 data-aos="fade-up" data-aos-delay="200">
            Latest <span>Blog</span>
          </h2>
        </div>
        <div className="row">
          {data?.map((post, index) => (
            <BlogCard 
              key={post._id || index} 
              post={post}
              delay={(index + 1) * 200}
            />
          ))}
        </div>
        <div className="news-button text-center">
          <a href={ROUTES.BLOG} className="theme-btn">
            View All Blog <i className="fa-solid fa-arrow-right"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;