import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Mutations } from "../../Api";

interface ContactFormProps {
  className?: string; // e.g. "style-2"
}

const ContactForm = ({ className = "" }: ContactFormProps) => {
  const [statusMessage, setStatusMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

  const { mutate: addContact, isPending } = Mutations.useAddContact({
    onSuccess: () => {
      setStatusMessage({ type: "success", text: "Message sent successfully!" });
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
      phoneNo: "",
      email: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      phoneNo: Yup.string()
        .required("Phone number is required")
        .matches(/^[0-9]+$/, "Phone number must be digits")
        .min(10, "Phone number must be at least 10 digits"),
      email: Yup.string().email("Invalid email format").required("Email is required"),
      message: Yup.string().required("Message is required"),
    }),
    onSubmit: (values) => {
      addContact(values);
    },
  });

  return (
    <div className={`contact-form-box ${className}`}>
      <h3 className="wow fadeInUp">Get In Touch</h3>
      <form onSubmit={formik.handleSubmit}>
        <div className="contact-box">
          <div className="row">
            <div className="col-md-6 wow fadeInUp" data-wow-delay=".2s">
              <input
                type="text"
                name="name"
                placeholder="Enter Your Name"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
              />
              {formik.touched.name && formik.errors.name && <div className="text-danger mt-1 fs-6">{formik.errors.name}</div>}
            </div>
            <div className="col-md-6 wow fadeInUp" data-wow-delay=".5s">
              <input
                type="tel"
                name="phoneNo"
                placeholder="Enter Your Number"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.phoneNo}
              />
              {formik.touched.phoneNo && formik.errors.phoneNo && <div className="text-danger mt-1 fs-6">{formik.errors.phoneNo}</div>}
            </div>
            <div className="col-12 wow fadeInUp" data-wow-delay=".8s">
              <input
                type="email"
                name="email"
                placeholder="Enter Your Email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
              {formik.touched.email && formik.errors.email && <div className="text-danger mt-1 fs-6">{formik.errors.email}</div>}
            </div>
            <div className="col-12 wow fadeInUp" data-wow-delay="1.1s">
              <textarea
                name="message"
                placeholder="Enter Your Message"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.message}
                style={{ color: "var(--white, #fff)" }}
              ></textarea>
              {formik.touched.message && formik.errors.message && <div className="text-danger mt-1 fs-6">{formik.errors.message}</div>}
              {statusMessage && <div className={`mt-3 fs-6 ${statusMessage.type === "success" ? "text-success" : "text-danger"}`}>{statusMessage.text}</div>}
            </div>
            <div className="col-12 wow fadeInUp" data-wow-delay="1.4s">
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
