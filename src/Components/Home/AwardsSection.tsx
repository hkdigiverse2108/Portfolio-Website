import type { AwardsBase } from "../../Types";

interface AwardsSectionProps {
  awardsData?: AwardsBase[];
}

const AwardsSection: React.FC<AwardsSectionProps> = ({ awardsData }) => {
  return (
      <section className="awards-section section-padding fix">
        <div className="top-shape">
            <img src="/assets/img/shape/new-shape.png" alt="img"/>
        </div>
        <div className="star-shape float-bob-x">
            <img src="/assets/img/shape/star.png" alt="img"/>
        </div>
        <div className="container">
            <div className="awards-wrapper">
                <div className="row g-4">
                    <div className="col-md-6">
                        <div className="section-title mb-0">
                            <span data-aos="fade-up">
                                <img src="/assets/img/shape/star-2.png" alt="img" />
                                Awards
                            </span>
                            <h2 data-aos="fade-up" data-aos-delay="200">
                                <span>Awards</span> & Recognition
                            </h2>
                        </div>
                    </div>
                    {awardsData?.map((item, index) => (
                        <div className="col-md-6" key={item._id}>
                            <div className="awards-item" data-aos="fade-up" data-aos-delay={(index + 1) * 200}>
                                <div className="content">
                                    <div className="icon">
                                        <img src={item.iconImage} alt="icon" />
                                    </div>
                                    <div className="text">
                                        <h4>{item.title}</h4>
                                        <span>{item.date ? new Date(item.date).toLocaleDateString() : ""}</span>
                                    </div>
                                </div>
                                <div className="icon">
                                    <img src={item.image} alt="image" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
  )
}

export default AwardsSection
