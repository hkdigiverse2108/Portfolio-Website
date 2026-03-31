import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { AboutSection, HeroSection, MarqueeSection, ProjectSection, ServiceSection, ExperienceSection, AwardsSection, TestimonialsSection, BlogSection } from "../../Components/Home";
import { Queries } from "../../Api";
import { PreLoader } from "../../Components/Common";

const Home = () => {
  const { data: heroSectionData, isLoading: heroSectionLoading } = Queries.useGetHeroSection();
  const { data: userData, isLoading: userLoading } = Queries.useGetUser();
  const { data: workCountData, isLoading: workCountLoading } = Queries.useGetWorkCount();
  const { data: ourServiceData, isLoading: ourServiceLoading } = Queries.useGetOurService();
  const { data: portfolioData, isLoading: portfolioLoading } = Queries.useGetPortfolio();
  const { data: workExperienceData, isLoading: workExperienceLoading } = Queries.useGetWorkExperience();
  const { data: skillData, isLoading: skillLoading } = Queries.useGetSkill();
  const { data: awardsData, isLoading: awardsLoading } = Queries.useGetAwards();
  const { data: testimonialDescData, isLoading: testimonialDescLoading } = Queries.useGetTestimonialDescription();
  const { data: testimonialData, isLoading: testimonialLoading } = Queries.useGetTestimonial();
  const { data: blogData, isLoading: blogLoading } = Queries.useGetBlog();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  const isLoading = heroSectionLoading || userLoading || workCountLoading || ourServiceLoading || portfolioLoading || workExperienceLoading || skillLoading || awardsLoading || testimonialDescLoading || testimonialLoading || blogLoading;

  return (
    <>
      <PreLoader isLoading={isLoading} />
      <HeroSection data={heroSectionData?.data} socialMediaLinks={userData?.data?.socialMediaLinks} />
      <MarqueeSection data={userData?.data?.offers} />
      <AboutSection description={heroSectionData?.data?.description} workCountData={workCountData?.data?.workCount_data} />
      <ServiceSection ourServiceData={ourServiceData?.data?.ourService_data} />
      <ProjectSection portfolioData={portfolioData?.data?.portfolio_data} />
      <ExperienceSection workExperienceData={workExperienceData?.data?.workExperience_data} skillData={skillData?.data?.skill_data} />
      <AwardsSection awardsData={awardsData?.data?.awards_data} />
      <TestimonialsSection testimonialDescriptionData={testimonialDescData?.data} testimonialData={testimonialData?.data?.testimonial_data} />
      <BlogSection data={blogData?.data?.blog_data?.slice(0, 3)} />
    </>
  );
};

export default Home;
