
const AwardsSection = () => {
  return (
      <section className="awards-section section-padding fix">
        <div className="top-shape">
            <img src="assets/img/shape/new-shape.png" alt="img"/>
        </div>
        <div className="star-shape float-bob-x">
            <img src="assets/img/shape/star.png" alt="img"/>
        </div>
        <div className="container">
            <div className="awards-wrapper">
                <div className="row g-4">
                    <div className="col-md-6">
                        <div className="section-title mb-0">
                            <span className="wow fadeInUp"><img src="assets/img/shape/star-2.png" alt="img"/>Awards</span>
                            <h2 className="wow fadeInUp" data-wow-delay=".2s"><span>Awards</span> & Recognition</h2>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="awards-item wow fadeInUp" data-wow-delay=".2s">
                            <div className="content">
                                <div className="icon">
                                    <img src="assets/img/icon/1.svg" alt="img"/>
                                </div>
                                <div className="text">
                                    <h4>Design Leadership Award</h4>
                                    <span>March 26, 2024</span>
                                </div>
                            </div>
                            <div className="icon">
                                <img src="assets/img/icon/5.svg" alt="img"/>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="awards-item wow fadeInUp" data-wow-delay=".5s">
                            <div className="content">
                                <div className="icon">
                                    <img src="assets/img/icon/2.svg" alt="img"/>
                                </div>
                                <div className="text">
                                    <h4>Best Mobile App Design</h4>
                                    <span>March 26, 2024</span>
                                </div>
                            </div>
                            <div className="icon">
                                <img src="assets/img/icon/6.svg" alt="img"/>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="awards-item wow fadeInUp" data-wow-delay=".8s">
                            <div className="content">
                                <div className="icon">
                                    <img src="assets/img/icon/3.svg" alt="img"/>
                                </div>
                                <div className="text">
                                    <h4>Best UI/UX Design Award</h4>
                                    <span>March 26, 2024</span>
                                </div>
                            </div>
                            <div className="icon">
                                <img src="assets/img/icon/7.svg" alt="img"/>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="awards-item wow fadeInUp" data-wow-delay="1.1s">
                            <div className="content">
                                <div className="icon">
                                    <img src="assets/img/icon/4.svg" alt="img"/>
                                </div>
                                <div className="text">
                                    <h4>Creative Awards</h4>
                                    <span>March 26, 2024</span>
                                </div>
                            </div>
                            <div className="icon">
                                <img src="assets/img/icon/8.svg" alt="img"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default AwardsSection