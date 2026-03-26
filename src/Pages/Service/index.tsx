import { BreadCrumb } from '../../Components/Common'
import { AwardsSection, ServiceSection } from '../../Components/Home'

const Service = () => {
    return (
        <>
            <BreadCrumb title="Service" pageName="Service" />
            <ServiceSection />
            <AwardsSection/>
        </>
    )
}

export default Service