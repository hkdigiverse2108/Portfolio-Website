import { KEYS } from "../Constant";
import { URL_KEYS } from "../Constant/Url";
import type { AppQueryOptions, HeroSectionApiResponse, UserApiResponse, WorkCountApiResponse, OurServiceApiResponse, OurServiceDetailApiResponse, PortfolioApiResponse, PortfolioDetailApiResponse, WorkExperienceApiResponse, SkillApiResponse, AwardsApiResponse, TestimonialDescriptionApiResponse, TestimonialApiResponse, BlogApiResponse, BlogDetailApiResponse, SettingApiResponse, TermsConditionsApiResponse, PrivacyPolicyApiResponse, ServiceApiResponse, BusinessCategoryApiResponse } from "../Types";
import { Get } from "./Methods";
import { useQueries } from "./ReactQuery";
import { buildQueryParams } from "../Utils/common";

export const Queries = {
  // ************ User ***********
  useGetUser: (options?: AppQueryOptions<UserApiResponse>) => useQueries<UserApiResponse>([KEYS.USER.GET], () => Get(URL_KEYS.USER.GET), options),

  // ************ Hero Section ***********
  useGetHeroSection: (options?: AppQueryOptions<HeroSectionApiResponse>) => useQueries<HeroSectionApiResponse>([KEYS.HERO_SECTION.GET], () => Get(URL_KEYS.HERO_SECTION.GET), options),

  // ************ Work Count ***********
  useGetWorkCount: (options?: AppQueryOptions<WorkCountApiResponse>) => useQueries<WorkCountApiResponse>([KEYS.WORK_COUNT.GET], () => Get(URL_KEYS.WORK_COUNT.GET), options),

  // ************ Our Service ***********
  useGetOurService: (params?: { page?: number; limit?: number; activeFilter?: boolean }, options?: AppQueryOptions<OurServiceApiResponse>) => {
    const url = `${URL_KEYS.OUR_SERVICE.GET}${buildQueryParams(params)}`;
    return useQueries<OurServiceApiResponse>([KEYS.OUR_SERVICE.GET, params], () => Get(url), options);
  },
  useGetServiceDetails: (id?: string, options?: AppQueryOptions<OurServiceDetailApiResponse>) =>
    useQueries<OurServiceDetailApiResponse>([KEYS.OUR_SERVICE.GET_DETAILS, id], () => Get(`${URL_KEYS.OUR_SERVICE.GET_DETAILS}/${id}`), { enabled: !!id, ...options }),

  // ************ Portfolio ***********
  useGetPortfolio: (params?: { page?: number; limit?: number; activeFilter?: boolean; serviceFilter?: string, businessCategoryFilter?: string }, options?: AppQueryOptions<PortfolioApiResponse>) => {
    const url = `${URL_KEYS.PORTFOLIO.GET}${buildQueryParams(params)}`;
    return useQueries<PortfolioApiResponse>([KEYS.PORTFOLIO.GET, params], () => Get(url), options);
  },
  useGetPortfolioById: (id?: string, options?: AppQueryOptions<PortfolioDetailApiResponse>) =>
    useQueries<PortfolioDetailApiResponse>([KEYS.PORTFOLIO.GET_DETAILS, id], () => Get(`${URL_KEYS.PORTFOLIO.GET_DETAILS}/${id}`), { enabled: !!id, ...options }),

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
  useGetBlog: (params?: { page?: number; limit?: number; activeFilter?: boolean }, options?: AppQueryOptions<BlogApiResponse>) => {
    const url = `${URL_KEYS.BLOG.GET}${buildQueryParams(params)}`;
    return useQueries<BlogApiResponse>([KEYS.BLOG.GET, params], () => Get(url), options);
  },
  useGetBlogDetails: (id?: string, options?: AppQueryOptions<BlogDetailApiResponse>) =>
    useQueries<BlogDetailApiResponse>([KEYS.BLOG.GET_DETAILS, id], () => Get(`${URL_KEYS.BLOG.GET_DETAILS}/${id}`), { enabled: !!id, ...options }),

  // ************ Setting ***********
  useGetSetting: (options?: AppQueryOptions<SettingApiResponse>) => useQueries<SettingApiResponse>([KEYS.SETTING.GET], () => Get(URL_KEYS.SETTING.GET), options),

  // ************ Terms & Conditions ***********
  useGetTermsConditions: (options?: AppQueryOptions<TermsConditionsApiResponse>) => useQueries<TermsConditionsApiResponse>([KEYS.TERMS_CONDITIONS.GET], () => Get(URL_KEYS.TERMS_CONDITIONS.GET), options),

  // ************ Privacy Policy ***********
  useGetPrivacyPolicy: (options?: AppQueryOptions<PrivacyPolicyApiResponse>) => useQueries<PrivacyPolicyApiResponse>([KEYS.PRIVACY_POLICY.GET], () => Get(URL_KEYS.PRIVACY_POLICY.GET), options),

  // ************ Service ***********
  useGetService: (options?: AppQueryOptions<ServiceApiResponse>) => useQueries<ServiceApiResponse>([KEYS.SERVICE.GET], () => Get(URL_KEYS.SERVICE.GET), options),

  // ************ Business Category ***********
  useGetBusinessCategory: (options?: AppQueryOptions<BusinessCategoryApiResponse>) => useQueries<BusinessCategoryApiResponse>([KEYS.BUSINESS_CATEGORY.GET], () => Get(URL_KEYS.BUSINESS_CATEGORY.GET), options),
};

