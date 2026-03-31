import { Queries } from "../../Api";
import { BreadCrumb, PreLoader } from "../../Components/Common";
import { AwardsSection, ServiceSection } from "../../Components/Home";

const Service = () => {
  const { data: ourServiceData, isLoading: ourServiceLoading } = Queries.useGetOurService();

  const isLoading = ourServiceLoading;

  return (
    <>
      <PreLoader isLoading={isLoading} />

      <BreadCrumb title="Service" pageName="Service" />
      <ServiceSection ourServiceData={ourServiceData?.data?.ourService_data} />
      <AwardsSection />
    </>
  );
};

export default Service;
