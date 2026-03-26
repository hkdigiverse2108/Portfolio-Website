import { BreadCrumb } from "../../Components/Common"

const BlogClassic = () => {
    return (
        <>
            <BreadCrumb title="Blog Classic" pageName="Blog Classic" />
            <section className="news-classic-section section-padding fix section-bg">
                <div className="container">
                    <div className="row g-5">
                        <div className="col-lg-4">
                            <div className="main-sidebar">
                                <div className="single-sidebar-widget">
                                    <div className="wid-title">
                                        <h3>Search Here</h3>
                                    </div>
                                    <div className="search-widget">
                                        <form action="#">
                                            <input type="text" placeholder="Search here" />
                                            <button type="submit"><i className="fa-regular fa-magnifying-glass"></i></button>
                                        </form>
                                    </div>
                                </div>
                                <div className="single-sidebar-widget">
                                    <div className="wid-title">
                                        <h3>Categories</h3>
                                    </div>
                                    <ul className="categories-items">
                                        <li>
                                            <a href="news-details.html">Moblie App Design</a>
                                            <span>(03)</span>
                                        </li>
                                        <li>
                                            <a href="news-details.html">Web Design</a>
                                            <span>(05)</span>
                                        </li>
                                        <li>
                                            <a href="news-details.html">UI/UX Design</a>
                                            <span>(02)</span>
                                        </li>
                                        <li>
                                            <a href="news-details.html">Visual Design</a>
                                            <span>(06)</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="single-sidebar-widget">
                                    <div className="wid-title">
                                        <h3>Recent Post</h3>
                                    </div>
                                    <div className="recent-post-area">
                                        <div className="recent-item">
                                            <div className="thumb">
                                                <img src="assets/img/news/13.jpg" alt="img" />
                                            </div>
                                            <div className="content">
                                                <h6><a href="news-details.html">UI/UX Design Trends to Watch in 2025</a></h6>
                                                <span>March 26, 2024</span>
                                            </div>
                                        </div>
                                        <div className="recent-item">
                                            <div className="thumb">
                                                <img src="assets/img/news/14.jpg" alt="img" />
                                            </div>
                                            <div className="content">
                                                <h6><a href="news-details.html">The Role of in Enhancing User Experience</a>
                                                </h6>
                                                <span>March 26, 2024</span>
                                            </div>
                                        </div>
                                        <div className="recent-item">
                                            <div className="thumb">
                                                <img src="assets/img/news/15.jpg" alt="img" />
                                            </div>
                                            <div className="content">
                                                <h6><a href="news-details.html">The Wireframing in the UI/UX Design Process</a>
                                                </h6>
                                                <span>March 26, 2024</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="single-sidebar-widget">
                                    <div className="wid-title">
                                        <h3>Tags</h3>
                                    </div>
                                    <div className="news-widget-categories">
                                        <div className="tagcloud">
                                            <a href="news-details.html">Barnd</a>
                                            <a href="news-details.html">Creative</a>
                                            <a href="news-details.html">Parsonal</a>
                                            <a href="news-details.html">Awards</a>
                                            <a href="news-details.html">Business</a>
                                            <a href="news-details.html">Modern</a>
                                            <a href="news-details.html">One Page</a>
                                            <a href="news-details.html">Design</a>
                                            <a href="news-details.html">Photography</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="news-standard-wrapper">
                                <div className="news-standard-items">
                                    <div className="news-thumb">
                                        <img src="assets/img/news/16.jpg" alt="img" />
                                    </div>
                                    <div className="news-content">
                                        <ul className="news-meta">
                                            <li className="green">Branding</li>
                                            <li className="date"><span></span>26 June 2024</li>
                                        </ul>
                                        <div className="content">
                                            <h3><a href="news-details.html">The Importance of User-Centered Design</a>
                                            </h3>
                                            <p>User-Centered Design focuses on creating experiences tailored to users' needs and
                                                behaviors. It improves usability, satisfaction.</p>
                                        </div>
                                        <div className="news-btn">
                                            <a href="news-details.html" className="icon">
                                                <i className="fa-solid fa-arrow-right"></i>
                                            </a>
                                            <a href="news-details.html" className="link-btn">Read More</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="news-standard-items">
                                    <div className="news-thumb">
                                        <img src="assets/img/news/17.jpg" alt="img" />
                                    </div>
                                    <div className="news-content">
                                        <ul className="news-meta">
                                            <li className="green">Branding</li>
                                            <li className="date"><span></span>26 June 2024</li>
                                        </ul>
                                        <div className="content">
                                            <h3><a href="news-details.html">Best Practices for Usability Testingn</a>
                                            </h3>
                                            <p>To ensure effective usability testing, involve real users, set clear goals, test
                                                early and often, observe user interactions, gather feedback.
                                            </p>
                                        </div>
                                        <div className="news-btn">
                                            <a href="news-details.html" className="icon">
                                                <i className="fa-solid fa-arrow-right"></i>
                                            </a>
                                            <a href="news-details.html" className="link-btn">Read More</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="news-standard-items">
                                    <div className="news-thumb">
                                        <img src="assets/img/news/18.jpg" alt="img" />
                                    </div>
                                    <div className="news-content">
                                        <ul className="news-meta">
                                            <li className="green">Branding</li>
                                            <li className="date"><span></span>26 June 2024</li>
                                        </ul>
                                        <div className="content">
                                            <h3><a href="news-details.html">A Beginner’s Guide to UX Research </a>
                                            </h3>
                                            <p>UX research helps understand user needs and behaviors. Use methods like surveys,
                                                interviews, and usability testing to gather insights.
                                            </p>
                                        </div>
                                        <div className="news-btn">
                                            <a href="news-details.html" className="icon">
                                                <i className="fa-solid fa-arrow-right"></i>
                                            </a>
                                            <a href="news-details.html" className="link-btn">Read More</a>
                                        </div>
                                    </div>
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
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default BlogClassic