import React from "react";
import { Link } from "react-router-dom";
import Pic from '../assets/Pexels6.jpg';

function About() {
  return (
    <div>

      {/* ================= INLINE CSS ================= */}
      <style>
        {`
        /* ================= HERO ================= */
        .about-hero {
          background: linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)),
            url(${Pic});
          background-size: cover;
          background-position: center;
          min-height: 420px;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          color: white;
        }

        .about-hero h1 {
          font-size: 48px;
          font-weight: 700;
        }

        .section {
          padding: 70px 15px;
        }

        /* ================= IMAGE HOVER EFFECT 1 ================= */
        .img-hover-zoom {
          position: relative;
          overflow: hidden;
          border-radius: 14px;
        }

        .img-hover-zoom img {
          width: 100%;
          transition: transform 0.6s ease;
        }

        .img-hover-zoom:hover img {
          transform: scale(1.12);
        }

        .img-overlay {
          position: absolute;
          inset: 0;
          background: rgba(0,0,0,0.45);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.4s ease;
        }

        .img-hover-zoom:hover .img-overlay {
          opacity: 1;
        }

        .img-overlay h4 {
          color: #fff;
          font-weight: 600;
        }

        /* ================= IMAGE HOVER EFFECT 2 ================= */
        .img-hover-tilt {
          border-radius: 14px;
          overflow: hidden;
          border: 3px solid #fbfcfeff;
          transition: transform 0.4s ease, box-shadow 0.4s ease;
        }

        .img-hover-tilt img {
          width: 100%;
          display: block;
        }

        .img-hover-tilt:hover {
          transform: perspective(800px) rotateY(6deg) rotateX(4deg);
          box-shadow: 0 20px 45px rgba(13,110,253,0.35);
        }

        /* ================= CARDS ================= */
        .about-card {
          background: #fff;
          border-radius: 12px;
          padding: 25px;
          height: 100%;
          border: 3px solid transparent;
          transition: transform 0.35s ease, box-shadow 0.35s ease;
        }

        .about-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 15px 40px rgba(0,0,0,0.18);
        }

        .border-blue { border-color: #0d6efd; }
        .border-green { border-color: #198754; }
        .border-orange { border-color: #fd7e14; }
        .border-purple { border-color: #6f42c1; }

        .icon {
          font-size: 36px;
          margin-bottom: 10px;
        }

             /* PROCESS */
        .process-step {
          background: #fff;
          padding: 30px;
          border-radius: 12px;
          text-align: center;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
          height: 100%;
        }
        @media (max-width: 768px) {
          .about-hero h1 {
            font-size: 34px;
          }
        }
        `}
      </style>

      {/* ================= HERO ================= */}
      <section className="about-hero">
        <div>
          <h1>About Patel Glass Work</h1>
          <p className="mt-3">
            Premium glass solutions for modern interiors
          </p>
        </div>
      </section>

      {/* ================= ABOUT SECTION ================= */}
      <section className="section bg-light">
        <div className="container">
          <div className="row align-items-center g-4">

            {/* IMAGE EFFECT 1 */}
            <div className="col-md-6">
              <div className="img-hover-zoom">
                <img
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
                  alt="Glass Interior"
                />
                <div className="img-overlay">
                  <h4>Elegant Glass Interiors</h4>
                </div>
              </div>
            </div>

            {/* TEXT */}
            <div className="col-md-6">
              <h2>Who We Are</h2>
              <p>
                Patel Glass Work is a trusted name in glass solutions with more
                than <strong>10+ years of experience</strong>. We specialize in
                glass partitions, railings, sliding doors, shower enclosures,
                and kitchen profile glass work.
              </p>
              <p>
                Our focus is always on <strong>quality, safety, and elegant
                design</strong>. Every project is handled with precision and
                premium materials to ensure long-lasting results.
              </p>
              <Link to="/contact" className="btn btn-primary mt-3">
                Contact Us
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="section">
        <div className="container">

          <div className="text-center mb-5">
            <h2>Why Choose Us</h2>
            <p className="text-muted">
              Experience, quality, and trust in every project
            </p>
          </div>

          <div className="row g-4">
            <div className="col-md-3">
              <div className="about-card border-blue">
                <div className="icon">🛠️</div>
                <h5>Expert Installation</h5>
                <p>Perfect fitting and professional finishing.</p>
              </div>
            </div>

            <div className="col-md-3">
              <div className="about-card border-green">
                <div className="icon">🪟</div>
                <h5>Premium Glass</h5>
                <p>High-quality toughened glass for safety.</p>
              </div>
            </div>

            <div className="col-md-3">
              <div className="about-card border-orange">
                <div className="icon">🎨</div>
                <h5>Modern Design</h5>
                <p>Customized designs for every space.</p>
              </div>
            </div>

            <div className="col-md-3">
              <div className="about-card border-purple">
                <div className="icon">🤝</div>
                <h5>Trusted Service</h5>
                <p>On-time delivery & after-sales support.</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ================= MISSION ================= */}
      <section className="section bg-light">
        <div className="container">
          <div className="row align-items-center g-4">

            {/* TEXT */}
            <div className="col-md-6">
              <h2>Our Mission</h2>
              <p>
                Our mission is to deliver <strong>safe, stylish, and durable
                glass solutions</strong> that add value to homes, offices, and
                commercial spaces.
              </p>
              <p>
                We aim to build long-term relationships with our clients through
                honesty, craftsmanship, and customer satisfaction.
              </p>
            </div>

            {/* IMAGE EFFECT 2 */}
            <div className="col-md-6">
              <div className="img-hover-tilt">
                <img
                  src="https://images.unsplash.com/photo-1501183638710-841dd1904471"
                  alt="Glass Design"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

        <section className="section">
        <div className="container">
          <div className="text-center mb-5">
            <h2>Our Working Process</h2>
            <p className="text-muted">Simple, transparent & professional</p>
          </div>
          <div className="row g-4">
            <div className="col-md-3"><div className="process-step"><h5>Consultation</h5><p>Understanding your requirement.</p></div></div>
            <div className="col-md-3"><div className="process-step"><h5>Design</h5><p>Customized glass solutions.</p></div></div>
            <div className="col-md-3"><div className="process-step"><h5>Installation</h5><p>Expert fitting with precision.</p></div></div>
            <div className="col-md-3"><div className="process-step"><h5>After Support</h5><p>Long-term service & guidance.</p></div></div>
          </div>
        </div>
      </section>

    </div>
  );
}

export default About;

