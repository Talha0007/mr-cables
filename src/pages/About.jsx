import React, { useEffect } from "react";

const About = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <div style={{ paddingTop: "20px" }}>
      <section class="about-section">
        <div class="container">
          <div class="about-grid">
            <div class="about-content">
              <span class="about-tag">About Us</span>
              <h2>Reliable Internet Services Since 2011</h2>
              <p>
                We are a trusted Internet Service Provider (ISP) delivering
                fast, secure, and reliable connectivity solutions since
                2011–2012. Our mission is to empower homes and businesses with
                seamless internet access that supports modern digital
                lifestyles.
              </p>
              <p>
                With years of industry experience, a skilled technical team, and
                a customer-first approach, we continuously invest in advanced
                network infrastructure to ensure high performance, stability,
                and uninterrupted service.
              </p>

              <div class="about-stats">
                <div>
                  <h3>26+ Years</h3>
                  <span>Industry Experience</span>
                </div>
                <div>
                  <h3>99.9%</h3>
                  <span>Network Uptime</span>
                </div>
                <div>
                  <h3>24/7</h3>
                  <span>Technical Support</span>
                  <br />
                  <span>
                    (Office Times <br />
                    Mon-Thu: <br /> 09 AM – 05 PM <br />
                    Fri:
                    <br /> 9:00 AM – 12:00 PM)
                  </span>
                </div>
              </div>
            </div>

            <div class="about-image">
              <img src="img/intro-bg-1.jpeg" alt="Network Infrastructure" />
            </div>
          </div>
        </div>
      </section>

      <section class="ceo-section">
        <div class="container">
          <div class="ceo-grid">
            <div class="ceo-image">
              <img src="img/team/ceo.jpeg" alt="CEO Image" />
            </div>

            <div class="ceo-content">
              <span class="ceo-tag">Message from the CEO</span>
              <h2>Leading with Vision, Delivering with Trust</h2>
              <p>
                I started this business in 1999 as a small cable TV service,
                initially limited to just a few streets. From the very
                beginning, my vision was to provide reliable, stable, and
                high-quality services, because I strongly believe that in
                today’s digital world, strong connectivity is the foundation of
                growth and progress. Four years after the start of the business,
                I brought in my partner, Mr. Mirza Raheel Baig. After his
                inclusion, our network expanded significantly—growing from a
                limited area to nearly one-quarter of the city, and eventually
                extending across the entire city. Today, our services have
                further expanded beyond urban limits and are successfully
                operating in 60 to 70 surrounding villages.
              </p>
              <p>
                Through our shared efforts, strategic planning, and continuous
                innovation, we strengthened this small network and transformed
                it into a stable and reliable organization. What began as a
                cable TV service has now evolved into a full-fledged internet
                company, committed to meeting modern connectivity demands. Our
                commitment to innovation, network stability, and customer
                satisfaction guides every decision we make. With a dedicated
                team and continuously evolving infrastructure, we strive to
                deliver seamless connectivity while maintaining the highest
                standards of service quality and customer support.
              </p>

              <div class="ceo-signature">
                <h4>Mr. Malik Musharaf Iqbal</h4>
                <span>Chief Executive Officer (CEO)</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="md-section">
        <div class="container">
          <div class="md-header">
            <span class="md-tag">Message from the Managing Director</span>
            <h2>Driving Excellence Through Connectivity</h2>
          </div>

          <div class="md-grid">
            <div class="md-content">
              <p>
                At our organization, we have been continuously striving to build
                a strong and reliable network from 1999 to 2025, one that our
                customers can trust with confidence. Throughout this long
                journey, particularly after 2021, we have made significant
                investments in the effective use of modern technology, the
                inclusion of skilled and experienced professionals, and the
                development of customer-focused systems. During this period, we
                formally launched internet services alongside our traditional TV
                cable service, enabling us to provide fast, stable, and
                dependable digital solutions on a single platform.
              </p>
              <p>
                Our goal is not merely to provide access to the internet, but to
                create real value for our customers through consistent
                performance, transparent services, and long-term partnerships.
                In response to evolving digital needs, we continue to strengthen
                our infrastructure with confidence to effectively meet both
                present and future demands.
              </p>

              <div class="md-signature">
                <h4>Mr. Mirza Raheel Baig</h4>
                <span>Managing Director (MD)</span>
              </div>
            </div>

            <div class="md-image">
              <img src="img/team/md.jpeg" alt="Managing Director" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
