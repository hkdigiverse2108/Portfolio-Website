import { KEYS } from "../Constant";
import { URL_KEYS } from "../Constant/Url";
import type { AppQueryOptions, HeroSectionApiResponse, UserApiResponse, WorkCountApiResponse } from "../Types";
import { Get } from "./Methods";
import { useQueries } from "./ReactQuery";

export const Queries = {
  // ************ User ***********
  useGetUser: (options?: AppQueryOptions<UserApiResponse>) => useQueries<UserApiResponse>([KEYS.USER.GET], () => Get(URL_KEYS.USER.GET), options),

  // ************ Hero Section ***********
  useGetHeroSection: (options?: AppQueryOptions<HeroSectionApiResponse>) => useQueries<HeroSectionApiResponse>([KEYS.HERO_SECTION.GET], () => Get(URL_KEYS.HERO_SECTION.GET), options),

  // ************ About Section ***********
  useGetWorkCount: (options?: AppQueryOptions<WorkCountApiResponse>) => useQueries<WorkCountApiResponse>([KEYS.WORK_COUNT.GET], () => Get(URL_KEYS.WORK_COUNT.GET), options),
};
