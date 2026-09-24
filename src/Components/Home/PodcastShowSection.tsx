import React from "react";
import { Queries } from "../../Api";

// Helper to ensure marquee has enough images for seamless looping
const ensureLoopable = (items: string[]) => {
  if (!items || items.length === 0) return [];
  const validItems = items.filter(Boolean);
  if (validItems.length === 0) return [];

  let result = [...validItems];
  while (result.length < 10) {
    result = [...result, ...validItems];
  }
  // Double for smooth 0% -> -50% CSS keyframe loop
  return [...result, ...result];
};

export const PodcastShowSection: React.FC = () => {
  // Fetch dynamic podcast data from backend API (managed via Admin Panel)
  const { data: podcastApiResponse } = Queries.useGetPodcastShow();
  const podcastData = podcastApiResponse?.data;

  const tagline = podcastData?.tagline || "GUJARAT'S #1 PODCAST";
  const title = podcastData?.title || "THE JAY THADESHWAR SHOW";
  const subtitle = podcastData?.subtitle;
  const description =
    podcastData?.description ||
    "Jay runs Gujarat’s most successful podcast, which he grew from 0 to 300 Million+ views in less than a year. He engages in deep conversations about life, business, growth, spirituality, art, and much more.";

  const rawRow1 = Array.isArray(podcastData?.row1Images) ? podcastData.row1Images.filter(Boolean) : [];
  const rawRow2 = Array.isArray(podcastData?.row2Images) ? podcastData.row2Images.filter(Boolean) : [];

  const row1Loop = ensureLoopable(rawRow1);
  const row2Loop = ensureLoopable(rawRow2);

  const hasAnyImages = row1Loop.length > 0 || row2Loop.length > 0;

  return (
    <section className="podcast-show-section fix" id="podcast-show-section">
      <div className="container">
        <div className="podcast-show-header" data-aos="fade-up">
          <h2 className="podcast-tagline">{tagline}</h2>
          <h3 className="podcast-subtitle">{title}</h3>
          {subtitle && (
            <h4
              style={{
                color: "var(--theme, #bff747)",
                fontSize: "1.2rem",
                fontWeight: 600,
                marginBottom: "12px",
                letterSpacing: "0.5px",
              }}
            >
              {subtitle}
            </h4>
          )}
          {description && <p className="podcast-desc">{description}</p>}
        </div>
      </div>

      {hasAnyImages ? (
        <div className="marquee-container" data-aos="fade-up" data-aos-delay="200">
          {/* Row 1 - Marquee Forward (only shown if images exist) */}
          {row1Loop.length > 0 && (
            <div className="marquee-row" title="Hover to pause">
              <div className="marquee-track">
                {row1Loop.map((imgUrl, idx) => (
                  <div key={`row1-${idx}-${imgUrl}`} className="guest-card">
                    <img src={imgUrl} alt={`Podcast guest ${idx + 1}`} loading="lazy" />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Row 2 - Marquee Reverse (only shown if images exist) */}
          {row2Loop.length > 0 && (
            <div className="marquee-row" title="Hover to pause">
              <div className="marquee-track reverse">
                {row2Loop.map((imgUrl, idx) => (
                  <div key={`row2-${idx}-${imgUrl}`} className="guest-card">
                    <img src={imgUrl} alt={`Podcast highlight ${idx + 1}`} loading="lazy" />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="container text-center py-4">
          <p style={{ color: "#64748b", fontSize: "0.95rem" }}>
            Upload guest and highlight images in the Admin Panel to display the scrolling showcase.
          </p>
        </div>
      )}
    </section>
  );
};

export default PodcastShowSection;
