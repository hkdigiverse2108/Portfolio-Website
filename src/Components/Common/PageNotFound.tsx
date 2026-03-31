import { ROUTES } from "../../Constant"
import BreadCrumb from "./BreadCrumb"

const PageNotFound = () => {
  return (
    <>
    <BreadCrumb title="Error 404" pageName="Error 404" />
      <section className="error-section section-padding section-bg">
        <div className="container">
            <div className="error-wrapper">
                <div className="error">
                    <h2>404</h2>
                </div>
                <div className="error-content">
                    <h2><span>Oops!</span> Page Not Found</h2>
                    <p>Sorry, the page you’re looking for doesn’t exist or has been moved. <br/> Let’s get you back
                        explore
                        our Latest Posts</p>
                </div>
                <div className="error-btn">
                    <a href={ROUTES.HOME} className="theme-btn">Back To Home <i className="fa-solid fa-arrow-right"></i></a>
                    <a href={ROUTES.CONTACT} className="theme-btn style-2">Contact Me <i
                            className="fa-solid fa-arrow-right"></i></a>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default PageNotFound