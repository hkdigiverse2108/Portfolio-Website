
const MarqueeSection = () => {
  return (
     <section className="marquee-section section-bg fix">
        <div className="marquee-container">
            <div className="marquee-wrapper">
                <div className="marquee-content">
                    <div className="marquee-text">
                        <img src="assets/img/star/star-2.png" alt="img"/>
                        <h3>THE BEST SOLUTION</h3>
                    </div>
                    <div className="marquee-text">
                        <img src="assets/img/star/star-2.png" alt="img"/>
                        <h3>THE BEST SOLUTION</h3>
                    </div>
                    <div className="marquee-text">
                        <img src="assets/img/star/star-2.png" alt="img"/>
                        <h3>THE BEST SOLUTION</h3>
                    </div>
                    <div className="marquee-text">
                        <img src="assets/img/star/star-2.png" alt="img"/>
                        <h3>THE BEST SOLUTION</h3>
                    </div>
                    <div className="marquee-text">
                        <img src="assets/img/star/star-2.png" alt="img"/>
                        <h3>THE BEST SOLUTION</h3>
                    </div>
                </div>

                {/* <!-- duplicate content for seamless scroll --> */}
                <div className="marquee-content">
                    <div className="marquee-text">
                        <img src="assets/img/star/star-2.png" alt="img"/>
                        <h3>THE BEST SOLUTION</h3>
                    </div>
                    <div className="marquee-text">
                        <img src="assets/img/star/star-2.png" alt="img"/>
                        <h3>THE BEST SOLUTION</h3>
                    </div>
                    <div className="marquee-text">
                        <img src="assets/img/star/star-2.png" alt="img"/>
                        <h3>THE BEST SOLUTION</h3>
                    </div>
                    <div className="marquee-text">
                        <img src="assets/img/star/star-2.png" alt="img"/>
                        <h3>THE BEST SOLUTION</h3>
                    </div>
                    <div className="marquee-text">
                        <img src="assets/img/star/star-2.png" alt="img"/>
                        <h3>THE BEST SOLUTION</h3>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default MarqueeSection