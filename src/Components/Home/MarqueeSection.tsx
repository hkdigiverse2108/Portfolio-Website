// const marqueeItems = [
//   { id: 1, img: "assets/img/star/star-2.png", text: "THE BEST SOLUTION" },
//   { id: 2, img: "assets/img/star/star-2.png", text: "THE BEST SOLUTION" },
//   { id: 3, img: "assets/img/star/star-2.png", text: "THE BEST SOLUTION" },
//   { id: 4, img: "assets/img/star/star-2.png", text: "THE BEST SOLUTION" },
//   { id: 5, img: "assets/img/star/star-2.png", text: "THE BEST SOLUTION" },
// ];

const MarqueeSection = ({ data }: { data?: string[] }) => {
  const marqueeImg = "assets/img/star/star-2.png";
  return (
    <section className="marquee-section section-bg fix">
      <div className="marquee-container">
        <div className="marquee-wrapper">
          <div className="marquee-content">
            {data?.map((item, index) => (
              <div className="marquee-text" key={index}>
                <img src={marqueeImg} alt={item} />
                <h3>{item}</h3>
              </div>
            ))}
          </div>

          <div className="marquee-content">
            {data?.map((item, index) => (
              <div className="marquee-text" key={`dup-${index}`}>
                <img src={marqueeImg} alt={item} />
                <h3>{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarqueeSection;
