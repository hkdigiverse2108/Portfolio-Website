import { useState } from "react";
import { Queries } from "../../Api";

export const BrandsSection = () => {
  const [activeTab, setActiveTab] = useState<"B2C" | "B2B">("B2C");

  // Fetch brand logos dynamically from dedicated Brand API (added via Admin Panel Brands section)
  const { data: brandApiResponse, isLoading } = Queries.useGetBrand({ limit: 100, activeFilter: true });

  const rawData: any = brandApiResponse?.data;
  const backendBrands: any[] = Array.isArray(rawData)
    ? rawData
    : Array.isArray(rawData?.brand_data)
    ? rawData.brand_data
    : [];

  // Filter logos strictly by active category (B2C or B2B)
  const visibleBrands = backendBrands.filter((item) => {
    const cat = (item?.category || "B2C").toUpperCase();
    return cat === activeTab;
  });

  return (
    <section className="brands-section fix" id="brands-section">
      <div className="container">
        <h2 className="brands-title" data-aos="fade-up">
          Brands I Have Worked With
        </h2>

        {/* Tab switchers: B2C (default) and B2B */}
        <div className="brands-tabs-wrapper" data-aos="fade-up" data-aos-delay="100">
          <button
            type="button"
            className={`brands-tab-btn ${activeTab === "B2C" ? "active" : "inactive"}`}
            onClick={() => setActiveTab("B2C")}
          >
            B2C
          </button>
          <button
            type="button"
            className={`brands-tab-btn ${activeTab === "B2B" ? "active" : "inactive"}`}
            onClick={() => setActiveTab("B2B")}
          >
            B2B
          </button>
        </div>

        {/* Brand Logos Grid */}
        <div className="brands-grid" data-aos="fade-up" data-aos-delay="200">
          {isLoading ? (
            <div className="brands-status-message">Loading {activeTab} brands...</div>
          ) : visibleBrands.length > 0 ? (
            visibleBrands.map((brand) => (
              <div key={brand._id} className="brand-card">
                {brand.image ? (
                  <img
                    src={brand.image}
                    alt={brand.name || `${activeTab} Brand`}
                    loading="lazy"
                    onError={(e) => {
                      const target = e.currentTarget;
                      target.style.display = "none";
                      const parent = target.parentElement;
                      if (parent && !parent.querySelector(".brand-fallback-name")) {
                        const fallback = document.createElement("span");
                        fallback.className = "brand-fallback-name";
                        fallback.textContent = brand.name || "Brand";
                        parent.appendChild(fallback);
                      }
                    }}
                  />
                ) : (
                  <span className="brand-fallback-name">{brand.name || "Brand"}</span>
                )}
              </div>
            ))
          ) : (
            <div className="brands-status-message">
              No {activeTab} brand logos found. Upload logos in the Admin Panel Brands section to display them here.
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default BrandsSection;
