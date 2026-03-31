import { ROUTES } from '../../Constant';

interface BreadCrumbProps {
  title: string;
  pageName: string;
}

const BreadCrumb = ({ title, pageName }: BreadCrumbProps) => {
  return (
    <section 
      className="breadcrumb-wrapper fix bg-cover" 
      style={{ backgroundImage: "url(/assets/img/breadcrumb/bg.jpg)" }}
    >
      <div className="star-shape float-bob-x">
        <img src="/assets/img/shape/star.png" alt="img" />
      </div>
      <div className="arrow-shape">
        <img src="/assets/img/breadcrumb/arrow.png" alt="img" />
      </div>
      <div className="container">
        <div className="row">
          <div className="page-heading">
            <h2>{title}</h2>
            <ul className="breadcrumb-list">
              <li>
                <a href={ROUTES.HOME}>Home</a>
              </li>
              <li>
                <i className="fa-solid fa-angle-right"></i>
              </li>
              <li className="active">{pageName}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BreadCrumb;