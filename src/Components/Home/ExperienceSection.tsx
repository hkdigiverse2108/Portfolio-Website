import { CountItem } from "../Common";

const clientItems = [
    { id: 1, icon: "assets/img/client/1.svg", count: 98, text: "Figma" },
    { id: 2, icon: "assets/img/client/2.svg", count: 90, text: "Photoshop" },
    { id: 3, icon: "assets/img/client/3.svg", count: 79, text: "Illustrator" },
    { id: 4, icon: "assets/img/client/4.svg", count: 88, text: "Sketch" },
    { id: 5, icon: "assets/img/client/5.svg", count: 93, text: "Adobe_Xd" },
];

const experienceItems = [
    { id: 1, year: "2024", title: "Senior Designer", company: "Behance", delay: ".2s" },
    { id: 2, year: "2024", title: "UX Design case study", company: "Behance", delay: ".4s" },
    { id: 3, year: "2024", title: "Product Designer v/s Product Manage", company: "Product Hunt", delay: ".6s" },
    { id: 4, year: "2024", title: "Xiomi in Product Design (UI/UX)", company: "Pinterest", delay: ".8s" },
];
const ExperienceSection = () => {
  return (
    <section className="experience-section section-padding section-bg fix">
        <div className="container">
            <div className="section-title  text-center">
                <span className="wow fadeInUp"><img src="assets/img/shape/star-2.png" alt="img"/>My Experience<img src="assets/img/shape/star-2.png" alt="img"/></span>
                <h2 className="wow fadeInUp" data-wow-delay=".2s">My Work Experience</h2>
            </div>
            <div className="experience-wrapper">
                {experienceItems.map((item) => (
                    <div className="experience-items wow fadeInUp" data-wow-delay={item.delay} key={item.id}>
                        <span>{item.year}</span>
                        <h4>{item.title}</h4>
                        <h6>{item.company}</h6>
                    </div>
                ))}
            </div>
            <div className="client-wrapper">
                <div className="client-items">
                    {clientItems.map((item) => (
                        <div className="client-item" key={item.id}>
                            <div className="icon">
                                <img src={item.icon} alt={item.text} />
                            </div>
                            <h4 className="number">
                                <span className="count">
                                    <CountItem end={item.count} />
                                </span>% <span className="text">{item.text}</span>
                            </h4>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
  )
}

export default ExperienceSection