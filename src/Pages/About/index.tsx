import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { AboutSection, ExperienceSection, MarqueeSection, TestimonialsSection } from "../../Components/Home"
import { BreadCrumb, PreLoader } from "../../Components/Common"
import { Queries } from "../../Api";

const About = () => {
  const { data: heroSectionData, isLoading: heroSectionLoading } = Queries.useGetHeroSection();
  const { data: userData, isLoading: userLoading } = Queries.useGetUser();
  const { data: workCountData, isLoading: workCountLoading } = Queries.useGetWorkCount();
  const { data: workExperienceData, isLoading: workExperienceLoading } = Queries.useGetWorkExperience();
  const { data: skillData, isLoading: skillLoading } = Queries.useGetSkill();
  const { data: testimonialDescData, isLoading: testimonialDescLoading } = Queries.useGetTestimonialDescription();
  const { data: testimonialData, isLoading: testimonialLoading } = Queries.useGetTestimonial();

  const isLoading = heroSectionLoading || userLoading || workCountLoading || workExperienceLoading || skillLoading || testimonialDescLoading || testimonialLoading;

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <>
      <PreLoader isLoading={isLoading} />
      <BreadCrumb title="About Us" pageName="About Us" />
      <MarqueeSection data={userData?.data?.offers} />
      <AboutSection description={heroSectionData?.data?.description} workCountData={workCountData?.data?.workCount_data} />
      <ExperienceSection workExperienceData={workExperienceData?.data?.workExperience_data} skillData={skillData?.data?.skill_data} />
      <TestimonialsSection testimonialDescriptionData={testimonialDescData?.data} testimonialData={testimonialData?.data?.testimonial_data} />
      <MarqueeSection data={userData?.data?.offers} />
    </>
  );
};

export default About