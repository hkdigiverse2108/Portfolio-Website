import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Queries } from "../Api";
import { BreadCrumb, PreLoader } from "../Components/Common";

const PrivacyPolicy = () => {
  const { data: privacyRes, isLoading, error } = Queries.useGetPrivacyPolicy();

  const privacyData = privacyRes?.data;

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  if (error) {
    return (
      <div className="error-message p-5 text-center">
        <h2>Something went wrong!</h2>
        <p>Failed to load privacy policy.</p>
      </div>
    );
  }

  return (
    <>
      <PreLoader isLoading={isLoading} />
      <BreadCrumb title="Privacy Policy" pageName="Privacy Policy" />
      
      <section className="privacy-policy-section pt-120 pb-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="privacy-content" data-aos="fade-up">
                {privacyData?.description ? (
                  <div 
                    className="description-text"
                    dangerouslySetInnerHTML={{ __html: privacyData.description }}
                  />
                ) : (
                  !isLoading && <p className="text-center">No privacy policy found.</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PrivacyPolicy;
