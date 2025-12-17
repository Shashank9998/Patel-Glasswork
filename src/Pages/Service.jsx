import React from "react";
import Pic from '../assets/Pexels2.jpg';
import Pic1 from '../assets/Pexels3.jpg';


function Service() {
  return (
    <div>

      {/* ================= INLINE CSS ================= */}
      <style>
        {`
        /* HERO */
        .service-hero {
          background: linear-gradient(120deg, #0f2027, #203a43, #2c5364);
          color: white;
          padding: 120px 15px;
          text-align: center;
        }

        .service-hero h1 {
          font-size: 52px;
          font-weight: 700;
        }

        .service-hero p {
          max-width: 800px;
          margin: 20px auto 0;
          font-size: 18px;
          opacity: 0.9;
        }

        /* SECTION */
        .section {
          padding: 90px 15px;
        }

        /* INTRO */
        .service-intro {
          max-width: 900px;
          margin: auto;
          font-size: 17px;
          line-height: 1.7;
          color: #6c757d;
          text-align: center;
        }

        /* SERVICE BRIEF */
        .service-brief {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 30px;
          margin-top: 50px;
        }

        .brief-item {
          background: white;
          padding: 32px;
          border-radius: 20px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.08);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .brief-item:hover {
          transform: translateY(-8px);
          box-shadow: 0 18px 45px rgba(0,0,0,0.15);
        }

        .brief-item h5 {
          font-weight: 600;
          margin-bottom: 10px;
        }

        .brief-item p {
          color: #6c757d;
          font-size: 15px;
          line-height: 1.6;
        }

        /* SERVICE IMAGE CARDS */
        .service-gallery {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 30px;
          margin-top: 50px;
        }

        .service-img-card {
          position: relative;
          border-radius: 22px;
          overflow: hidden;
          height: 320px;
          box-shadow: 0 12px 35px rgba(0,0,0,0.15);
        }

        .service-img-card img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s ease;
        }

        .service-img-card:hover img {
          transform: scale(1.1);
        }

        .service-img-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.75), rgba(0,0,0,0.2));
          display: flex;
          align-items: flex-end;
          padding: 20px;
        }

        .service-img-overlay h5 {
          color: white;
          margin: 0;
          font-weight: 600;
        }

        /* STATS */
        .stats {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 30px;
          margin-top: 60px;
        }

        .stat-box {
          text-align: center;
          padding: 35px;
          background: white;
          border-radius: 20px;
          box-shadow: 0 12px 35px rgba(0,0,0,0.08);
        }

        .stat-box h2 {
          font-size: 42px;
          color: #0d6efd;
          margin-bottom: 5px;
        }

        @media (max-width: 768px) {
          .service-hero h1 {
            font-size: 36px;
          }
        }
        `}
      </style>

      {/* ================= HERO ================= */}
      <section className="service-hero">
        <h1>Our Glass Services</h1>
        <p>
          Premium glass solutions crafted with safety, durability,
          and modern design.
        </p>
      </section>

      {/* ================= INTRO ================= */}
      <section className="section">
        <div className="container">
          <p className="service-intro">
            Patel Glass Work delivers high-quality glass services for residential,
            commercial, and office spaces. We focus on elegant design, strong
            materials, and long-lasting installations that elevate modern
            interiors.
          </p>
        </div>
      </section>

      {/* ================= SERVICE BRIEF ================= */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h2>Our Core Services</h2>
            <p className="text-muted">
              Designed for beauty, strength, and everyday use
            </p>
          </div>

          <div className="service-brief">
            <div className="brief-item">
              <h5>Glass Partitions</h5>
              <p>Modern partitions that maintain privacy with openness.</p>
            </div>
            <div className="brief-item">
              <h5>Glass Railings</h5>
              <p>Safe and stylish railings for balconies and staircases.</p>
            </div>
            <div className="brief-item">
              <h5>Shower Glass</h5>
              <p>Elegant shower enclosures for clean modern bathrooms.</p>
            </div>
            <div className="brief-item">
              <h5>Kitchen Glass</h5>
              <p>Heat-resistant and easy-to-clean kitchen glass solutions.</p>
            </div>
            <div className="brief-item">
              <h5>Sliding Glass Doors</h5>
              <p>Smooth, space-saving sliding glass doors.</p>
            </div>
            <div className="brief-item">
              <h5>Custom Glass Work</h5>
              <p>Tailor-made glass designs for unique spaces.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= OUR WORK GALLERY ================= */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-5">
            <h2>Our Work Gallery</h2>
            <p className="text-muted">
              A glimpse of our premium glass installations
            </p>
          </div>

          <div className="service-gallery">

            <div className="service-img-card">
              <img src={Pic} alt="Glass Partition" />
              <div className="service-img-overlay"><h5>Glass Partitions</h5></div>
            </div>

            <div className="service-img-card">
              <img src="https://images.unsplash.com/photo-1501183638710-841dd1904471" alt="Glass Railing" />
              <div className="service-img-overlay"><h5>Glass Railings</h5></div>
            </div>

            <div className="service-img-card">
              <img src="https://images.unsplash.com/photo-1519710164239-da123dc03ef4" alt="Shower Glass" />
              <div className="service-img-overlay"><h5>Shower Enclosures</h5></div>
            </div>

            <div className="service-img-card">
              <img src="https://images.unsplash.com/photo-1524758631624-e2822e304c36" alt="Kitchen Glass" />
              <div className="service-img-overlay"><h5>Kitchen Profile Glass</h5></div>
            </div>

            <div className="service-img-card">
              <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c" alt="Sliding Glass Door" />
              <div className="service-img-overlay"><h5>Sliding Glass Doors</h5></div>
            </div>

            <div className="service-img-card">
              <img src="https://images.unsplash.com/photo-1600121848594-d8644e57abab" alt="Office Glass" />
              <div className="service-img-overlay"><h5>Office Glass Partitions</h5></div>
            </div>

            <div className="service-img-card">
              <img src={Pic1} alt="Balcony Glass" />
              <div className="service-img-overlay"><h5>Balcony Glass Railings</h5></div>
            </div>

            <div className="service-img-card">
              <img src="https://images.unsplash.com/photo-1497366216548-37526070297c" alt="Modern Glass Interior" />
              <div className="service-img-overlay"><h5>Modern Glass Interiors</h5></div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= STATS ================= */}
      <section className="section bg-light">
        <div className="container">
          <div className="stats">
            <div className="stat-box"><h2>10+</h2><p>Years Experience</p></div>
            <div className="stat-box"><h2>500+</h2><p>Projects Completed</p></div>
            <div className="stat-box"><h2>300+</h2><p>Happy Clients</p></div>
            <div className="stat-box"><h2>100%</h2><p>Quality Focus</p></div>
          </div>
        </div>
      </section>

    </div>
  );
}

export default Service;

