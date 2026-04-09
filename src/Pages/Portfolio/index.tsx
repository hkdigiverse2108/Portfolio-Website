import { useState } from "react";
import { Queries } from "../../Api";
import { BreadCrumb, CustomDropdown, PreLoader } from "../../Components/Common";
import { PortfolioCard } from "../../Components/Portfolio";

const Portfolio = () => {
  const [page, setPage] = useState(1);
  const [category, setCategory] = useState<any>(null);
  const [service, setService] = useState<any>(null);
  console.log(category);
  console.log(service);

  const { data: businessCategoryRes } = Queries.useGetBusinessCategory();
  const { data: serviceRes } = Queries.useGetService();

  const { data: portfolioRes, isLoading, isFetching } = Queries.useGetPortfolio({ page, limit: 6, serviceFilter: service?._id, businessCategoryFilter: category?._id });
  const portfolioData = portfolioRes?.data?.portfolio_data || [];
  const totalPages = portfolioRes?.data?.state?.totalPages || 1;

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setPage(newPage);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <>
      <PreLoader isLoading={isLoading || isFetching} />
      <BreadCrumb title="Portfolio" pageName="Portfolio" />
      <section className="project-standard-section section-padding fix section-bg">
        <div className="container">
          <div className="filter-wrapper">
            <div className="search-widget">
              <form>
                <div className="row">
                  <div className="col-md-6">
                    <CustomDropdown label="Select Category" options={businessCategoryRes?.data?.businessCategory_data || []} value={category} onChange={setCategory} />
                  </div>
                  <div className="col-md-6">
                    <CustomDropdown label="Select Service" options={serviceRes?.data?.service_data || []} value={service} onChange={setService} />
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="project-standard-wrapper">
            <div className="row">
              {portfolioData.length > 0
                ? portfolioData.map((item, index) => {
                    // Repeating column pattern for 6 items per page
                    const colSchema = ["col-xl-7", "col-xl-5", "col-xl-5", "col-xl-7", "col-md-6", "col-md-6"];
                    const colClass = colSchema[index % 6] || "col-md-6";
                    const delayValue = ((index % 6) + 1) * 200;

                    return <PortfolioCard key={item._id || index} portfolio={item} wrapperClass={`${colClass} col-md-6`} className="project-items-2" delay={delayValue} imageClass="images" aosAnimation="img-custom-anim-top" />;
                  })
                : !isLoading && <p>No projects found.</p>}
            </div>
          </div>
          {totalPages > 1 && (
            <div className="page-nav-wrap text-center mt-5">
              <ul>
                <li>
                  <a
                    className="page-numbers"
                    href="#!"
                    onClick={(e) => {
                      e.preventDefault();
                      handlePageChange(page - 1);
                    }}
                  >
                    <i className="fa-solid fa-arrow-left"></i>
                  </a>
                </li>
                {[...Array(totalPages)].map((_, i) => (
                  <li key={i} className={page === i + 1 ? "active" : ""}>
                    <a
                      className="page-numbers"
                      href="#!"
                      onClick={(e) => {
                        e.preventDefault();
                        handlePageChange(i + 1);
                      }}
                    >
                      {(i + 1).toString().padStart(2, "0")}
                    </a>
                  </li>
                ))}
                <li>
                  <a
                    className="page-numbers"
                    href="#!"
                    onClick={(e) => {
                      e.preventDefault();
                      handlePageChange(page + 1);
                    }}
                  >
                    <i className="fa-solid fa-arrow-right"></i>
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Portfolio;
