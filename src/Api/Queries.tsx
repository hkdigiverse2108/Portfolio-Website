import { KEYS } from "../Constant";
import { URL_KEYS } from "../Constant/Url";
import type { AppQueryOptions, HeroSectionApiResponse, UserApiResponse, WorkCountApiResponse, OurServiceApiResponse, PortfolioApiResponse, WorkExperienceApiResponse, SkillApiResponse, AwardsApiResponse, TestimonialDescriptionApiResponse, TestimonialApiResponse, BlogApiResponse } from "../Types";
import { Get } from "./Methods";
import { useQueries } from "./ReactQuery";

export const Queries = {
  // ************ User ***********
  useGetUser: (options?: AppQueryOptions<UserApiResponse>) => useQueries<UserApiResponse>([KEYS.USER.GET], () => Get(URL_KEYS.USER.GET), options),

  // ************ Hero Section ***********
  useGetHeroSection: (options?: AppQueryOptions<HeroSectionApiResponse>) => useQueries<HeroSectionApiResponse>([KEYS.HERO_SECTION.GET], () => Get(URL_KEYS.HERO_SECTION.GET), options),

  // ************ Work Count ***********
  useGetWorkCount: (options?: AppQueryOptions<WorkCountApiResponse>) => useQueries<WorkCountApiResponse>([KEYS.WORK_COUNT.GET], () => Get(URL_KEYS.WORK_COUNT.GET), options),

  // ************ Our Service ***********
  useGetOurService: (options?: AppQueryOptions<OurServiceApiResponse>) => useQueries<OurServiceApiResponse>([KEYS.OUR_SERVICE.GET], () => Get(URL_KEYS.OUR_SERVICE.GET), options),

  // ************ Portfolio ***********
  useGetPortfolio: (options?: AppQueryOptions<PortfolioApiResponse>) => useQueries<PortfolioApiResponse>([KEYS.PORTFOLIO.GET], () => Get(URL_KEYS.PORTFOLIO.GET), options),

  // ************ Work Experience ***********
  useGetWorkExperience: (options?: AppQueryOptions<WorkExperienceApiResponse>) => useQueries<WorkExperienceApiResponse>([KEYS.WORK_EXPERIENCE.GET], () => Get(URL_KEYS.WORK_EXPERIENCE.GET), options),

  // ************ Skill ***********
  useGetSkill: (options?: AppQueryOptions<SkillApiResponse>) => useQueries<SkillApiResponse>([KEYS.SKILL.GET], () => Get(URL_KEYS.SKILL.GET), options),

  // ************ Awards ***********
  useGetAwards: (options?: AppQueryOptions<AwardsApiResponse>) => useQueries<AwardsApiResponse>([KEYS.AWARDS.GET], () => Get(URL_KEYS.AWARDS.GET), options),

  // ************ Testimonial Description ***********
  useGetTestimonialDescription: (options?: AppQueryOptions<TestimonialDescriptionApiResponse>) => useQueries<TestimonialDescriptionApiResponse>([KEYS.TESTIMONIAL_DESCRIPTION.GET], () => Get(URL_KEYS.TESTIMONIAL_DESCRIPTION.GET), options),

  // ************ Testimonial ***********
  useGetTestimonial: (options?: AppQueryOptions<TestimonialApiResponse>) => useQueries<TestimonialApiResponse>([KEYS.TESTIMONIAL.GET], () => Get(URL_KEYS.TESTIMONIAL.GET), options),

  // ************ Blog ***********
  useGetBlog: (options?: AppQueryOptions<BlogApiResponse>) => useQueries<BlogApiResponse>([KEYS.BLOG.GET], () => Get(URL_KEYS.BLOG.GET), options),
};
