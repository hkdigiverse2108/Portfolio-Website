
const ExperienceSection = () => {
  return (
    <section className="experience-section section-padding section-bg fix">
        <div className="container">
            <div className="section-title  text-center">
                <span className="wow fadeInUp"><img src="assets/img/shape/star-2.png" alt="img"/>My Experience<img src="assets/img/shape/star-2.png" alt="img"/></span>
                <h2 className="wow fadeInUp" data-wow-delay=".2s">My Work Experience</h2>
            </div>
            <div className="experience-wrapper">
                <div className="experience-items wow fadeInUp" data-wow-delay=".2s">
                    <span>2024</span>
                    <h4>Senior Designer</h4>
                    <h6>Behance</h6>
                </div>
                <div className="experience-items wow fadeInUp" data-wow-delay=".4s">
                    <span>2024</span>
                    <h4>UX Design case study</h4>
                    <h6>Behance</h6>
                </div>
                <div className="experience-items wow fadeInUp" data-wow-delay=".6s">
                    <span>2024</span>
                    <h4>Product Designer v/s Product Manage</h4>
                    <h6>Product Hunt</h6>
                </div>
                <div className="experience-items wow fadeInUp" data-wow-delay=".8s">
                    <span>2024</span>
                    <h4>Xiomi in Product Design (UI/UX)</h4>
                    <h6>Pinterest</h6>
                </div>
            </div>
            <div className="client-wrapper">
                <div className="client-items">
                    <div className="client-item">
                        <div className="icon">
                            <img src="assets/img/client/1.svg" alt="img"/>
                        </div>
                        <h4 className="number"><span className="count">98</span>% <span className="text">Figma</span></h4>
                    </div>
                    <div className="client-item">
                        <div className="icon">
                            <img src="assets/img/client/2.svg" alt="img"/>
                        </div>
                        <h4 className="number"><span className="count">90</span>% <span className="text">Photoshop</span></h4>
                    </div>
                    <div className="client-item">
                        <div className="icon">
                            <img src="assets/img/client/3.svg" alt="img"/>
                        </div>
                        <h4 className="number"><span className="count">79</span>% <span className="text">Illustrator</span></h4>
                    </div>
                    <div className="client-item">
                        <div className="icon">
                            <img src="assets/img/client/4.svg" alt="img"/>
                        </div>
                        <h4 className="number"><span className="count">88</span>% <span className="text">Sketch</span></h4>
                    </div>
                    <div className="client-item">
                        <div className="icon">
                            <img src="assets/img/client/5.svg" alt="img"/>
                        </div>
                        <h4 className="number"><span className="count">93</span>% <span className="text">Adobe_Xd</span></h4>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ExperienceSection