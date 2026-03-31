import { useState } from "react";
import { BreadCrumb, PreLoader } from "../../Components/Common";
import { BlogCard } from "../../Components/Blog";
import { Queries } from "../../Api";

const Blog = () => {
  const [page, setPage] = useState(1);
  const { data: blogData, isLoading } = Queries.useGetBlog({ page, limit: 9, activeFilter: true });

  const totalPages = blogData?.data?.state?.totalPages || 1;

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setPage(newPage);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <>
      <PreLoader isLoading={isLoading} />
      <BreadCrumb title="Blog" pageName="Blog" />
      <section className="news-section news-1 section-padding section-bg">
        <div className="container">
          <div className="row">
            {blogData?.data?.blog_data?.map((post, index) => {
              let className = "";
              if (index === 0) {
                className = "mt-0";
              } else if (index === 1 || index === 2) {
                className = "mt-md-0";
              }
              return <BlogCard key={post._id} post={post} className={className} />;
            })}
          </div>
          {totalPages > 1 && (
            <div className="page-nav-wrap text-center">
              <ul>
                <li>
                  <a className="page-numbers" href="#!" onClick={(e) => { e.preventDefault(); handlePageChange(page - 1); }}>
                    <i className="fal fa-long-arrow-left"></i>
                  </a>
                </li>
                {[...Array(totalPages)].map((_, i) => (
                  <li key={i} className={page === i + 1 ? "active" : ""}>
                    <a className="page-numbers" href="#!" onClick={(e) => { e.preventDefault(); handlePageChange(i + 1); }}>
                      {(i + 1).toString().padStart(2, '0')}
                    </a>
                  </li>
                ))}
                <li>
                  <a className="page-numbers" href="#!" onClick={(e) => { e.preventDefault(); handlePageChange(page + 1); }}>
                    <i className="fal fa-long-arrow-right"></i>
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Blog;
