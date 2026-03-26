import { AboutSection, ExperienceSection, MarqueeSection, TestimonialsSection } from "../../Components/Home"
import { BreadCrumb } from "../../Components/Common"

const About = () => {
    return (
        <>
            <BreadCrumb title="About Us" pageName="About Us" />
            <MarqueeSection />
            <AboutSection />
            <ExperienceSection />
            <TestimonialsSection />
            <MarqueeSection />

        </>
    )
}

export default About