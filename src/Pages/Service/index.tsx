import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Queries } from "../../Api";
import { BreadCrumb, PreLoader } from "../../Components/Common";
import { AwardsSection, ServiceSection } from "../../Components/Home";

const Service = () => {
  const [page, setPage] = useState(1);
  const { data: ourServiceRes, isLoading: ourServiceLoading } = Queries.useGetOurService({ page, limit: 10 });
  const { data: awardsData, isLoading: awardsLoading } = Queries.useGetAwards();

  const ourServiceData = ourServiceRes?.data?.ourService_data || [];
  const totalPages = ourServiceRes?.data?.state?.totalPages || 1;

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setPage(newPage);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const isLoading = ourServiceLoading || awardsLoading;

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  const pagination = totalPages > 1 && (
    <div className="page-nav-wrap text-center mt-5">
      <ul>
        <li>
          <a className="page-numbers" href="#!" onClick={(e) => { e.preventDefault(); handlePageChange(page - 1); }}>
            <i className="fa-solid fa-arrow-left"></i>
          </a>
        </li>
        {[...Array(totalPages)].map((_, i) => (
          <li key={i} className={page === i + 1 ? "active" : ""}>
            <a className="page-numbers" href="#!" onClick={(e) => { e.preventDefault(); handlePageChange(i + 1); }}>
              {(i + 1).toString().padStart(2, '0')}
            </a>
          </li>
        ))}
        <li>
          <a className="page-numbers" href="#!" onClick={(e) => { e.preventDefault(); handlePageChange(page + 1); }}>
            <i className="fa-solid fa-arrow-right"></i>
          </a>
        </li>
      </ul>
    </div>
  );

  return (
    <>
      <PreLoader isLoading={isLoading} />

      <BreadCrumb title="Service" pageName="Service" />
      <ServiceSection ourServiceData={ourServiceData} pagination={pagination} page={page} limit={10} />
      <AwardsSection awardsData={awardsData?.data?.awards_data} />
    </>
  );
};

export default Service;

