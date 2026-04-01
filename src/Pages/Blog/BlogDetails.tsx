import { useParams } from "react-router-dom";
import { BreadCrumb, PreLoader, ContactForm } from "../../Components/Common";
import { Queries } from "../../Api";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import type { BlogBase } from "../../Types";
import { ROUTES } from "../../Constant";

const BlogDetails = () => {
  const { id } = useParams();
  const { data: blogData, isLoading: blogDataLoading } = Queries.useGetBlog({ page: 1, limit: 9, activeFilter: true });
  const { data: blogDetailData, isLoading: blogDetailDataLoading } = Queries.useGetBlogDetails(id);

  const blog = blogDetailData?.data;

  let dateStr = "";
  if (blog?.date) {
    dateStr = blog.date.includes("T") ? new Date(blog.date).toLocaleDateString() : blog.date;
  }
  const relatedBlogs = blogData?.data?.blog_data?.filter((blog) => blog._id !== id).slice(0, 3) || [];
  const tags = blog?.tags || [];
  const isLoading = blogDataLoading || blogDetailDataLoading;

  return (
    <>
      <PreLoader isLoading={isLoading} />
      <BreadCrumb title={"Blog Details"} pageName="Blog Details" />
      <section className="news-details-section section-padding section-bg fix">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-8">
              <div className="news-details-area">
                <div className="single-news-post">
                  <div className="news-thumb">
                    <img src={blog?.thumbnailImage || blog?.images?.[0] || "assets/img/news/19.jpg"} alt="img" />
                  </div>
                  <div className="news-content">
                    <ul className="news-meta">
                      <li className="green">{blog?.serviceId?.name || "Blog"}</li>
                      <li className="date">
                        <span></span>
                        {dateStr}
                      </li>
                    </ul>
                    <h3 className="ext">{blog?.title}</h3>
                    <div
                      className="dynamic-blog-content mt-3"
                      dangerouslySetInnerHTML={{ __html: blog?.description || "" }}
                    ></div>
                    {blog?.tagLine && (
                      <div className="highlight-text">
                        <div className="qoute-shape">
                          <img src="/assets/img/service/5.png" alt="shape" />
                        </div>
                        <div className="content">
                          <h6>{blog.tagLine}</h6>
                          <div className="info">
                            <img src="/assets/img/service/4.png" alt="img" />
                            <h5>Het Mangukiya</h5>
                          </div>
                        </div>
                      </div>
                    )}
                    <div className="row g-4">
                      {blog?.images &&
                        blog.images.length > 0 &&
                        blog.images.length <= 2 &&
                        blog.images.map((image: string, index: number) => (
                          <div className="col-md-6" key={index}>
                            <div className="post-thumb">
                              <img src={image} alt="img" />
                            </div>
                          </div>
                        ))}
                      {blog?.images && blog.images.length > 2 && (
                        <div className="col-md-12">
                          <Swiper
                            modules={[Autoplay]}
                            spaceBetween={20}
                            slidesPerView={2}
                            breakpoints={{
                              0: { slidesPerView: 1 },
                              768: { slidesPerView: 2 },
                            }}
                            autoplay={{ delay: 3000, disableOnInteraction: false }}
                            loop={true}
                          >
                            {blog.images.map((image: string, index: number) => (
                              <SwiperSlide key={index}>
                                <div className="post-thumb">
                                  <img src={image} alt="img" />
                                </div>
                              </SwiperSlide>
                            ))}
                          </Swiper>
                        </div>
                      )}
                    </div>
                  </div>

                  <ContactForm className="style-2" />
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="main-sidebar">
                {relatedBlogs?.length > 0 && (
                  <>
                    <div className="single-sidebar-widget">
                      <div className="wid-title">
                        <h3>Recent Post</h3>
                      </div>
                      <div className="recent-post-area">
                        {relatedBlogs?.map((blog: BlogBase, index: number) => (
                          <div className="recent-item" key={index}>
                            <div className="thumb">
                              <img src={blog?.thumbnailImage} alt="img" />
                            </div>
                            <div className="content">
                              <h6>
                                <a href={ROUTES.BLOG_DETAIL.replace(":id", blog?._id)}>{blog?.title}</a>
                              </h6>
                              <span>{blog?.createdAt}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </>
                )}
                {tags?.length > 0 && (
                  <div className="single-sidebar-widget">
                    <div className="wid-title">
                      <h3>Tags</h3>
                    </div>
                    <div className="news-widget-categories">
                      <div className="tagcloud">
                        {blog?.tags?.map((tag: string, index: number) => (
                          <a key={index}>{tag}</a>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogDetails;
