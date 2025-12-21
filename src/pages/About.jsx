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
                  <h3>12+ Years</h3>
                  <span>Industry Experience</span>
                </div>
                <div>
                  <h3>99.9%</h3>
                  <span>Network Uptime</span>
                </div>
                <div>
                  <h3>24/7</h3>
                  <span>Customer Support</span>
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
                Since our establishment in 2011–2012, our vision has been to
                provide reliable, high-quality internet services that empower
                individuals, businesses, and communities. We believe
                connectivity is the foundation of growth in today’s digital
                world.
              </p>
              <p>
                Our commitment to innovation, network stability, and customer
                satisfaction drives everything we do. With a dedicated team and
                continuously evolving infrastructure, we strive to deliver
                seamless connectivity while maintaining the highest standards of
                service and support.
              </p>

              <div class="ceo-signature">
                <h4>Mr. Musharaf Iqbal</h4>
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
                At our core, we are committed to building a network that people
                can trust. Since 2011–2012, we have focused on delivering
                dependable internet services by investing in modern technology,
                skilled professionals, and customer-centric processes.
              </p>
              <p>
                Our goal is not only to provide internet access, but to create
                value through consistent performance, transparent service, and
                long-term partnerships. As digital needs evolve, we continue to
                strengthen our infrastructure to meet future demands with
                confidence.
              </p>

              <div class="md-signature">
                <h4>Mr. Mirza Raheel</h4>
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
