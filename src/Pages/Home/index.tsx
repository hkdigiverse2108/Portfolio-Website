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

  console.log("workCountData =>", workCountData?.data?.workCount_data);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  const isLoading = heroSectionLoading || userLoading || workCountLoading;

  return (
    <>
      <PreLoader isLoading={isLoading} />
      <HeroSection data={heroSectionData?.data} socialMediaLinks={userData?.data?.socialMediaLinks} />
      <MarqueeSection data={userData?.data?.offers} />
      <AboutSection description={heroSectionData?.data?.description} workCountData={workCountData?.data?.workCount_data} />
      <ServiceSection />
      <ProjectSection />
      <ExperienceSection />
      <AwardsSection />
      <TestimonialsSection />
      <BlogSection />
    </>
  );
};

export default Home;
