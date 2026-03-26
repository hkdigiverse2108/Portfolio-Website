
const ProjectSection = () => {
  return (
     <section className="project-section section-padding fix">
        <div className="container">
            <div className="section-title-area">
                <div className="section-title">
                    <span className="wow fadeInUp"><img src="assets/img/shape/star-2.png" alt="img"/>Project</span>
                    <h2 className="wow fadeInUp" data-wow-delay=".2s">My Featured <span>Protfoilo</span></h2>
                </div>
                <a href="portfolio-details.html" className="theme-btn wow fadeInUp" data-wow-delay=".4s">
                    View All Project
                    <i className="fa-solid fa-arrow-right"></i>
                </a>
            </div>
            <div className="project-wrapper">
                <div className="row g-4">
                    <div className="col-xl-6 col-lg-6 col-md-6">
                        <div className="project-items wow img-custom-anim-top" data-wow-delay=".3s">
                            <div className="image">
                                <img src="assets/img/project/1.jpg" alt="img"/>
                            </div>
                            <div className="content">
                                <div className="text">
                                    <span>App / Development</span>
                                    <h4><a href="portfolio-details.html">Mobile App for Task Management</a></h4>
                                </div>
                                <div className="icon">
                                    <a href="portfolio-details.html"> <i className="fa-solid fa-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6">
                        <div className="project-items wow img-custom-anim-top" data-wow-delay=".6s">
                            <div className="image">
                                <img src="assets/img/project/2.jpg" alt="img"/>
                            </div>
                            <div className="content">
                                <div className="text">
                                    <span>App / Development</span>
                                    <h4><a href="portfolio-details.html">Online Learning Platform</a></h4>
                                </div>
                                <div className="icon">
                                    <a href="portfolio-details.html"> <i className="fa-solid fa-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-7 col-lg-6 col-md-6">
                        <div className="project-items wow img-custom-anim-top" data-wow-delay=".9s">
                            <div className="image">
                                <img src="assets/img/project/3.jpg" alt="img"/>
                            </div>
                            <div className="content">
                                <div className="text">
                                    <span>Dashboard / Development</span>
                                    <h4><a href="portfolio-details.html">B2B Dashboard for Data Analytics</a></h4>
                                </div>
                                <div className="icon">
                                    <a href="portfolio-details.html"> <i className="fa-solid fa-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-5 col-lg-6 col-md-6">
                        <div className="project-items wow img-custom-anim-top" data-wow-delay="1.2s">
                            <div className="image">
                                <img src="assets/img/project/4.jpg" alt="img"/>
                            </div>
                            <div className="content">
                                <div className="text">
                                    <span>Website / Development </span>
                                    <h4><a href="portfolio-details.html">E-commerce Website Redesign</a></h4>
                                </div>
                                <div className="icon">
                                    <a href="portfolio-details.html"> <i className="fa-solid fa-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ProjectSection