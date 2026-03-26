import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { AboutSection, HeroSection, MarqueeSection, ProjectSection, ServiceSection ,ExperienceSection ,AwardsSection,TestimonialsSection,BlogSection } from "../../Components/Home"

const Home = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
            easing: "ease-in-out",
        });
    }, []);

    return (
        <>  
            <HeroSection />
            <MarqueeSection />
            <AboutSection />
            <ServiceSection />
            <ProjectSection />
            <ExperienceSection/>
            <AwardsSection/>
            <TestimonialsSection/>
            <BlogSection/>
        </>
    )
}

export default Home;