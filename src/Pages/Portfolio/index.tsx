import { BreadCrumb } from "../../Components/Common"

const Portfolio = () => {
    return (
        <>
            <BreadCrumb title="Portfolio" pageName="Portfolio" />
             <section className="project-standard-section section-padding fix section-bg">
        <div className="container">
            <div className="project-standard-wrapper">
                <div className="row">
                    <div className="col-xl-7 col-md-6">
                        <div className="project-items-2 mt-0 wow fadeInUp" data-wow-delay=".2s">
                            <div className="images">
                                <img src="assets/img/project/01.png" alt="img"/>
                            </div>
                            <div className="content">
                                <div className="text">
                                    <span>Foodie Delight</span>
                                    <h4><a href="portfolio-details.html">Food delivery & restaurant app UI/UX design</a>
                                    </h4>
                                </div>
                                <div className="icon">
                                    <a href="portfolio-details.html"> <i className="fa-solid fa-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-5 col-md-6">
                        <div className="project-items-2 mt-md-0 wow fadeInUp" data-wow-delay=".4s">
                            <div className="images">
                                <img src="assets/img/project/02.png" alt="img"/>
                            </div>
                            <div className="content">
                                <div className="text">
                                    <span>App / Development</span>
                                    <h4><a href="portfolio-details.html">App interface phone screen</a></h4>
                                </div>
                                <div className="icon">
                                    <a href="portfolio-details.html"> <i className="fa-solid fa-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-5 col-md-6">
                        <div className="project-items-2 wow fadeInUp" data-wow-delay=".6s">
                            <div className="images">
                                <img src="assets/img/project/03.png" alt="img"/>
                            </div>
                            <div className="content">
                                <div className="text">
                                    <span>App / Development</span>
                                    <h4><a href="#">Mobile App for Task Management</a></h4>
                                </div>
                                <div className="icon">
                                    <a href="portfolio-details.html"> <i className="fa-solid fa-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-7 col-md-6">
                        <div className="project-items-2 wow fadeInUp" data-wow-delay=".8s">
                            <div className="images">
                                <img src="assets/img/project/04.png" alt="img"/>
                            </div>
                            <div className="content">
                                <div className="text">
                                    <span>Web Banner Design</span>
                                    <h4><a href="portfolio-details.html">Gradient Business Strategy </a></h4>
                                </div>
                                <div className="icon">
                                    <a href="portfolio-details.html"> <i className="fa-solid fa-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="project-items-2 wow fadeInUp" data-wow-delay="1s">
                            <div className="images">
                                <img src="assets/img/project/05.png" alt="img"/>
                            </div>
                            <div className="content">
                                <div className="text">
                                    <span>App / Development</span>
                                    <h4><a href="portfolio-details.html">Template Banking Mobile App</a></h4>
                                </div>
                                <div className="icon">
                                    <a href="portfolio-details.html"> <i className="fa-solid fa-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="project-items-2 wow fadeInUp" data-wow-delay="1.2s">
                            <div className="images">
                                <img src="assets/img/project/06.png" alt="img"/>
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
                </div>
            </div>
        </div>
    </section>

        </>
    )
}

export default Portfolio