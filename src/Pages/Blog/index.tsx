import { BreadCrumb } from "../../Components/Common";
import { BlogCard } from "../../Components/Blog";
import { blogPosts } from "../../Data/Blog";

const Blog = () => {
    return (
        <>
            <BreadCrumb title="Blog" pageName="Blog" />
            <section className="news-section news-1 section-padding section-bg">
                <div className="container">
                    <div className="row">
                        {blogPosts.map((post, index) => {
                            let className = "";
                            if (index === 0) {
                                className = "mt-0";
                            } else if (index === 1 || index === 2) {
                                className = "mt-md-0";
                            }
                            return <BlogCard key={post.id} post={post} className={className} />;
                        })}
                    </div>
                    <div className="page-nav-wrap text-center">
                        <ul>
                            <li><a className="page-numbers" href="#"><i className="fal fa-long-arrow-left"></i></a></li>
                            <li className="active"><a className="page-numbers" href="#">01</a></li>
                            <li><a className="page-numbers" href="#">02</a></li>
                            <li><a className="page-numbers" href="#">03</a></li>
                            <li><a className="page-numbers" href="#"><i className="fal fa-long-arrow-right"></i></a></li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Blog;