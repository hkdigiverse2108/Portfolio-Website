import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Mutations } from "../../Api";

interface ContactFormProps {
  className?: string; // e.g. "style-2"
}

const COUNTRY_CODES = [
  { code: "+91", label: "+91 (IN)" },
  { code: "+1", label: "+1 (US/CA)" },
  { code: "+44", label: "+44 (UK)" },
  { code: "+971", label: "+971 (UAE)" },
  { code: "+61", label: "+61 (AU)" },
  { code: "+65", label: "+65 (SG)" },
  { code: "+49", label: "+49 (DE)" },
  { code: "+33", label: "+33 (FR)" },
  { code: "+966", label: "+966 (SA)" },
  { code: "+974", label: "+974 (QA)" },
  { code: "+965", label: "+965 (KW)" },
  { code: "+968", label: "+968 (OM)" },
  { code: "+973", label: "+973 (BH)" },
  { code: "+27", label: "+27 (ZA)" },
  { code: "+64", label: "+64 (NZ)" },
];

const ContactForm = ({ className = "" }: ContactFormProps) => {
  const [statusMessage, setStatusMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

  const { mutate: addContact, isPending } = Mutations.useAddContact({
    onSuccess: () => {
      setStatusMessage({ type: "success", text: "Thank You for Connect With Us! Our Team Will Contact Soon." });
      formik.resetForm();
      setTimeout(() => setStatusMessage(null), 5000);
    },
    onError: (err) => {
      setStatusMessage({ type: "error", text: "Failed to send message: " + ((err as any)?.message || "Please try again later.") });
    },
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      countryCode: "+91",
      phoneNo: "",
      email: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      countryCode: Yup.string().required(),
      phoneNo: Yup.string()
        .required("Phone number is required")
        .matches(/^[0-9]+$/, "Phone number must be digits")
        .min(7, "Phone number must be at least 7 digits"),
      email: Yup.string().email("Invalid email format").required("Email is required"),
      message: Yup.string().required("Message is required"),
    }),
    onSubmit: (values) => {
      // Pass full contact data with countryCode
      const payload: any = {
        name: values.name,
        phoneNo: `${values.countryCode}${values.phoneNo}`,
        email: values.email,
        message: values.message,
      };
      addContact(payload);
    },
  });

  return (
    <div className={`contact-form-box ${className}`} id="contact-form-container">
      <h3 data-aos="fade-up">Get In Touch</h3>
      <form onSubmit={formik.handleSubmit}>
        <div className="contact-box">
          <div className="row">
            <div className="col-md-6" data-aos="fade-up" data-aos-delay="200">
              <input type="text" name="name" placeholder="Enter Your Name" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.name} />
              {formik.touched.name && formik.errors.name && <div className="text-danger mt-1 fs-6">{formik.errors.name}</div>}
            </div>
            <div className="col-md-6" data-aos="fade-up" data-aos-delay="400">
              <div className="contact-phone-input-group">
                <select
                  name="countryCode"
                  aria-label="Select Country Code"
                  className="country-code-select"
                  value={formik.values.countryCode}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                >
                  {COUNTRY_CODES.map((item) => (
                    <option key={item.code} value={item.code}>
                      {item.label}
                    </option>
                  ))}
                </select>
                <input
                  type="tel"
                  name="phoneNo"
                  placeholder="Enter Your Number"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.phoneNo}
                />
              </div>
              {formik.touched.phoneNo && formik.errors.phoneNo && <div className="text-danger mt-1 fs-6">{formik.errors.phoneNo}</div>}
            </div>
            <div className="col-12" data-aos="fade-up" data-aos-delay="600">
              <input type="email" name="email" placeholder="Enter Your Email" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email} />
              {formik.touched.email && formik.errors.email && <div className="text-danger mt-1 fs-6">{formik.errors.email}</div>}
            </div>
            <div className="col-12" data-aos="fade-up" data-aos-delay="800">
              <textarea name="message" placeholder="Enter Your Message" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.message} style={{ color: "var(--white, #fff)" }}></textarea>
              {formik.touched.message && formik.errors.message && <div className="text-danger mt-1 fs-6">{formik.errors.message}</div>}
              {statusMessage && <div className={`mt-3 fs-6 ${statusMessage.type === "success" ? "text-success" : "text-danger"}`}>{statusMessage.text}</div>}
            </div>
            <div className="col-12" data-aos="fade-up" data-aos-delay="1000">
              <button type="submit" className="theme-btn" disabled={isPending}>
                {isPending ? "Sending..." : "Send Message"}
                <i className="fa-solid fa-arrow-right"></i>
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
