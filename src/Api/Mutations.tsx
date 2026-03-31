import type { UseMutationOptions } from "@tanstack/react-query";
import { KEYS } from "../Constant";
import { URL_KEYS } from "../Constant/Url";
import { Post } from "./Methods";
import { useMutations } from "./ReactQuery/useMutations";
import type { ContactPayload, ContactApiResponse, CombinedErrorResponse } from "../Types";

export const Mutations = {
  // ************ Contact ***********
  useAddContact: (options?: UseMutationOptions<ContactApiResponse, CombinedErrorResponse, ContactPayload>) => useMutations<ContactPayload, ContactApiResponse>([KEYS.CONTACT.POST], (data) => Post(URL_KEYS.CONTACT.POST, data), options),
};
