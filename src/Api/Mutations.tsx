import type { UseMutationOptions } from "@tanstack/react-query";
import { KEYS } from "../Constant";
import { URL_KEYS } from "../Constant/Url";
import { Post } from "./Methods";
import { useMutations } from "./ReactQuery/useMutations";
import type { ContactPayload, ContactApiResponse, CombinedErrorResponse, WebinarRegistrationPayload, WebinarRegistrationApiResponse, CreateRazorpayOrderPayload, CreateRazorpayOrderResponse, VerifyRazorpayPaymentPayload, VerifyRazorpayPaymentResponse, PaymentFailedPayload } from "../Types";

export const Mutations = {
  // ************ Contact ***********
  useAddContact: (options?: UseMutationOptions<ContactApiResponse, CombinedErrorResponse, ContactPayload>) => useMutations<ContactPayload, ContactApiResponse>([KEYS.CONTACT.POST], (data) => Post(URL_KEYS.CONTACT.POST, data), options),

  // ************ Webinar Registration ***********
  useRegisterWebinar: (options?: UseMutationOptions<WebinarRegistrationApiResponse, CombinedErrorResponse, WebinarRegistrationPayload>) =>
    useMutations<WebinarRegistrationPayload, WebinarRegistrationApiResponse>([KEYS.WEBINAR.REGISTER], (data) => Post(URL_KEYS.WEBINAR.REGISTER, data), options),

  // ************ Razorpay Webinar Payments ***********
  useCreateRazorpayOrder: (options?: UseMutationOptions<CreateRazorpayOrderResponse, CombinedErrorResponse, CreateRazorpayOrderPayload>) =>
    useMutations<CreateRazorpayOrderPayload, CreateRazorpayOrderResponse>([KEYS.WEBINAR.CREATE_ORDER], (data) => Post(URL_KEYS.WEBINAR.CREATE_ORDER, data), options),

  useVerifyRazorpayPayment: (options?: UseMutationOptions<VerifyRazorpayPaymentResponse, CombinedErrorResponse, VerifyRazorpayPaymentPayload>) =>
    useMutations<VerifyRazorpayPaymentPayload, VerifyRazorpayPaymentResponse>([KEYS.WEBINAR.VERIFY_PAYMENT], (data) => Post(URL_KEYS.WEBINAR.VERIFY_PAYMENT, data), options),

  usePaymentFailed: (options?: UseMutationOptions<any, CombinedErrorResponse, PaymentFailedPayload>) =>
    useMutations<PaymentFailedPayload, any>([KEYS.WEBINAR.PAYMENT_FAILED], (data) => Post(URL_KEYS.WEBINAR.PAYMENT_FAILED, data), options),
};

