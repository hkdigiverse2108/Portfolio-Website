import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Queries } from "../Api";
import { ROUTES } from "../Constant";
import { navItems } from "../Data";

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState<number | null>(null);

  const { data: userRes } = Queries.useGetUser();
  const userData = userRes?.data;
  const socialLinks = userData?.socialMediaLinks?.filter((link) => link.isActive) || [];

  const { data: settingRes } = Queries.useGetSetting();
  const settingData = settingRes?.data;
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 250) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
    setActiveSubMenu(null);
  };

  const toggleSubMenu = (index: number) => {
    setActiveSubMenu(activeSubMenu === index ? null : index);
  };

  // const logoTitle = userData?.logoTitle;
  // const strings = !logoTitle
  //   ? ""
  //   : logoTitle
  //       .split(" ")
  //       .map((word, index) => (index % 2 === 0 ? `<span class="logo-title">${word}</span>` : word))
  //       .join(" ");

  return (
    <>
      <header className={`header-1 ${isSticky ? "sticky" : ""}`} id="header-sticky">
        <div className="container-fluid">
          <div className="mega-menu-wrapper">
            <div className="header-main">
              <div className="logo">
                <a href={ROUTES.HOME} className="header-logo d-flex align-items-center gap-3">
                  <img src={userData?.profileImage} alt="logo-img" className="logo-img" />
                  <h3 className=" logo-title">{userData?.logoTitle}</h3>
                </a>
                <div className="logo-2">
                  <a href={ROUTES.HOME} className="header-logo d-flex align-items-center gap-3">
                    <img src={userData?.profileImage} alt="logo-img" className="logo-img" />
                    <h3 className=" logo-title">{userData?.logoTitle}</h3>
                  </a>
                </div>
              </div>
              <div className="mean__menu-wrapper d-none d-xl-block">
                <div className="main-menu">
                  <nav id="mobile-menu">
                    <ul>
                      {navItems.map((item, index) => (
                        <li key={index} className={`${item.submenu ? "has-dropdown" : ""} ${item.active ? "active" : ""}`}>
                          <NavLink to={item?.link} className={item.borderNone ? "border-none" : ""}>
                            {item.label}
                            {item.submenu && <i className="fa-solid fa-chevron-down"></i>}
                          </NavLink>
                          {item.submenu && (
                            <ul className="submenu">
                              {item.submenu.map((sub, sIndex) => (
                                <li key={sIndex}>
                                  <NavLink to={sub?.link}>{sub.label}</NavLink>
                                  {sub.submenu && (
                                    <ul className="submenu">
                                      {sub.submenu.map((deepSub, dIndex) => (
                                        <li key={dIndex}>
                                          <NavLink to={deepSub?.link}>{deepSub.label}</NavLink>
                                        </li>
                                      ))}
                                    </ul>
                                  )}
                                </li>
                              ))}
                            </ul>
                          )}
                        </li>
                      ))}
                    </ul>
                  </nav>
                </div>
              </div>
              <div className="header-right d-flex justify-content-end align-items-center">
                <a href={settingData?.bookMeeting?.link || ""} target="_blank" rel="noreferrer" className="theme-btn">
                  Book A Meeting
                  <i className="fa-sharp fa-regular fa-arrow-right"></i>
                </a>
                <div className="header__hamburger d-xl-none my-auto" onClick={toggleSidebar}>
                  <div className="sidebar__toggle">
                    <i className="fas fa-bars"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* <!-- Mobile Menu Area Start --> */}
      <div className={`fix-area`}>
        <div className={`offcanvas__info ${isSidebarOpen ? "info-open" : ""}`}>
          <div className="offcanvas__wrapper">
            <div className="offcanvas__content">
              <div className="offcanvas__top mb-5 d-flex justify-content-between align-items-center">
                <div className="offcanvas__logo">
                  {/* <a href={ROUTES.HOME}>
                    <img src="/assets/img/logo/Logo-black.svg" alt="logo-img" />
                  </a> */}
                  <a href={ROUTES.HOME} className="header-logo d-flex align-items-center gap-2 gap-md-3">
                    <img src={userData?.profileImage} alt="logo-img" className="logo-img" />
                    <h3 className="logo-title">{userData?.logoTitle}</h3>
                  </a>
                </div>
                <div className="offcanvas__close" onClick={closeSidebar}>
                  <button>
                    <i className="fas fa-times"></i>
                  </button>
                </div>
              </div>
              <p className="text d-none d-xl-block">Nullam dignissim, ante scelerisque the is euismod fermentum odio sem semper the is erat, a feugiat leo urna eget eros. Duis Aenean a imperdiet risus.</p>

              <div className="mobile-menu fix mb-3">
                <div className="mean-container">
                  <div className="mean-bar">
                    <nav className="mean-nav">
                      <ul>
                        {navItems.map((item, index) => (
                          <li key={index} className={`${item.submenu ? "has-dropdown" : ""} ${activeSubMenu === index ? "active" : ""}`}>
                            <a
                              href={item?.link}
                              onClick={
                                item.submenu
                                  ? (e) => {
                                      e.preventDefault();
                                      toggleSubMenu(index);
                                    }
                                  : closeSidebar
                              }
                            >
                              {item.label}
                            </a>
                            {item.submenu && (
                              <a
                                className={`mean-expand ${activeSubMenu === index ? "mean-clicked" : ""}`}
                                href="#"
                                onClick={(e) => {
                                  e.preventDefault();
                                  toggleSubMenu(index);
                                }}
                              >
                                <i className="fa-solid fa-plus"></i>
                              </a>
                            )}
                            {item.submenu && (
                              <ul
                                className="submenu"
                                style={{
                                  maxHeight: activeSubMenu === index ? "500px" : "0",
                                  overflow: "hidden",
                                  transition: "max-height 0.4s ease-in-out",
                                  display: "block",
                                }}
                              >
                                {item.submenu.map((sub, sIndex) => (
                                  <li key={sIndex}>
                                    <a href={sub?.link} onClick={closeSidebar}>
                                      {sub.label}
                                    </a>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </li>
                        ))}
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>

              <div className="offcanvas__contact">
                <h4>Contact Info</h4>
                <ul>
                  <li className="d-flex align-items-center">
                    <div className="offcanvas__contact-icon">
                      <i className="fal fa-map-marker-alt"></i>
                    </div>
                    <div className="offcanvas__contact-text">
                      <a target="_blank" href="#" rel="noreferrer">
                        {settingData?.bookMeeting?.address || "Main Street, Melbourne, Australia"}
                      </a>
                    </div>
                  </li>
                  <li className="d-flex align-items-center">
                    <div className="offcanvas__contact-icon mr-15">
                      <i className="fal fa-envelope"></i>
                    </div>
                    <div className="offcanvas__contact-text">
                      <a href={`mailto:${settingData?.bookMeeting?.email || "info@example.com"}`}>
                        <span className="mailto:info@example.com">{settingData?.bookMeeting?.email || "info@example.com"}</span>
                      </a>
                    </div>
                  </li>
                  <li className="d-flex align-items-center">
                    <div className="offcanvas__contact-icon mr-15">
                      <i className="fal fa-clock"></i>
                    </div>
                    <div className="offcanvas__contact-text">
                      <a target="_blank" href="#" rel="noreferrer">
                        Mod-friday, 09am -05pm
                      </a>
                    </div>
                  </li>
                  <li className="d-flex align-items-center">
                    <div className="offcanvas__contact-icon mr-15">
                      <i className="far fa-phone"></i>
                    </div>
                    <div className="offcanvas__contact-text">
                      <a href={`tel:${settingData?.bookMeeting?.phoneNo?.countryCode}${settingData?.bookMeeting?.phoneNo?.number}`}>{settingData ? `${settingData.bookMeeting.phoneNo.countryCode} ${settingData.bookMeeting.phoneNo.number}` : "+11002345909"}</a>
                    </div>
                  </li>
                </ul>
                <div className="header-button mt-4 text-center">
                  <a href={settingData?.bookMeeting?.link || ROUTES.CONTACT} target="_blank" rel="noreferrer" className="theme-btn">
                    Consultation <i className="fa-solid fa-arrow-right"></i>
                  </a>
                </div>
                <div className="social-icon d-flex align-items-center">
                  {socialLinks.map((social, index) => (
                    <a key={index} href={social.link} target="_blank" rel="noreferrer">
                      <i className={social.icon}></i>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`offcanvas__overlay ${isSidebarOpen ? "overlay-open" : ""}`} onClick={closeSidebar}></div>
    </>
  );
};

export default Header;
