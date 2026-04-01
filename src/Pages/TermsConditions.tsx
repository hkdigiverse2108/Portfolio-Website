import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Queries } from "../Api";
import { BreadCrumb, PreLoader } from "../Components/Common";

const TermsConditions = () => {
  const { data: termsRes, isLoading, error } = Queries.useGetTermsConditions();

  const termsData = termsRes?.data;

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
        <p>Failed to load terms and conditions.</p>
      </div>
    );
  }

  return (
    <>
      <PreLoader isLoading={isLoading} />
      <BreadCrumb title="Terms & Conditions" pageName="Terms & Conditions" />
      
      <section className="terms-conditions-section pt-120 pb-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="terms-content" data-aos="fade-up">
                {termsData?.description ? (
                  <div 
                    className="description-text"
                    dangerouslySetInnerHTML={{ __html: termsData.description }}
                  />
                ) : (
                  !isLoading && <p className="text-center">No terms and conditions found.</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TermsConditions;
