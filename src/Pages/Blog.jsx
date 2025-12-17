import React from "react";
import { Link } from "react-router-dom";
import Pic from '../assets/Pexels1.jpg';

function Blog() {
  return (
    <div>

      {/* ================= INLINE CSS ================= */}
      <style>
        {`
        /* HERO */
        .blog-hero {
          background: linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.65)),
            url("https://images.unsplash.com/photo-1497366216548-37526070297c");
          background-size: cover;
          background-position: center;
          min-height: 400px;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          color: white;
        }

        .blog-hero h1 {
          font-size: 48px;
          font-weight: 700;
        }

        .section {
          padding: 80px 15px;
        }

        /* INTRO */
        .blog-intro {
          max-width: 900px;
          margin: auto;
          font-size: 17px;
          line-height: 1.7;
          color: #6c757d;
        }

        /* BLOG CARD */
        .blog-card {
          background: #fff;
          border-radius: 16px;
          overflow: hidden;
          height: 100%;
          box-shadow: 0 10px 30px rgba(0,0,0,0.08);
          transition: transform 0.35s ease, box-shadow 0.35s ease;
        }

        .blog-card:hover {
          transform: translateY(-12px);
          box-shadow: 0 18px 45px rgba(0,0,0,0.18);
        }

        .blog-img-wrapper {
          overflow: hidden;
        }

        .blog-img {
          width: 100%;
          height: 260px;
          object-fit: cover;
          transition: transform 0.6s ease;
        }

        .blog-card:hover .blog-img {
          transform: scale(1.1);
        }

        .blog-content {
          padding: 24px;
        }

        .blog-meta {
          font-size: 13px;
          color: #6c757d;
          margin-bottom: 8px;
        }

        .blog-content h5 {
          font-weight: 600;
          margin-bottom: 10px;
        }

        .blog-content p {
          color: #6c757d;
          font-size: 15px;
          line-height: 1.6;
        }

        .read-more {
          font-weight: 500;
          text-decoration: none;
        }

        /* INFO BOX */
        .info-box {
          background: #f8f9fa;
          padding: 40px;
          border-radius: 16px;
          height: 100%;
        }

        @media (max-width: 768px) {
          .blog-hero h1 {
            font-size: 34px;
          }
        }
        `}
      </style>

      {/* ================= HERO ================= */}
      <section className="blog-hero">
        <div>
          <h1>Our Blog</h1>
          <p className="mt-3">
            Expert knowledge & modern ideas for glass solutions
          </p>
        </div>
      </section>

      {/* ================= INTRO ================= */}
      <section className="section">
        <div className="container text-center">
          <p className="blog-intro">
            At Patel Glass Work, we believe informed decisions lead to better
            results. Our blog shares real-world experience, design inspiration,
            and professional guidance related to glass partitions, railings,
            kitchens, bathrooms, and commercial glass installations.
          </p>
        </div>
      </section>

      {/* ================= BLOG LIST ================= */}
      <section className="section pt-0">
        <div className="container">
          <div className="row g-4">

            {/* BLOG 1 – FRAMED GLASS DOORS */}
            <div className="col-md-4">
              <div className="blog-card">
                <div className="blog-img-wrapper">
                  <img
                    src={Pic}
                    alt="Frameless Glass Doors"
                    className="blog-img"
                  />
                </div>
                <div className="blog-content">
                  <div className="blog-meta">Jan 12, 2025</div>
                  <h5>Benefits of Frameless Glass Doors</h5>
                  <p>
                    Frameless glass doors create openness, improve natural
                    lighting, and add a clean modern look to homes and offices.
                  </p>
                  <Link to="/blog-details" className="read-more">
                    Read more →
                  </Link>
                </div>
              </div>
            </div>

            {/* BLOG 2 – GLASS RAILINGS */}
            <div className="col-md-4">
              <div className="blog-card">
                <div className="blog-img-wrapper">
                  <img
                    src="https://images.unsplash.com/photo-1501183638710-841dd1904471"
                    alt="Glass Railings"
                    className="blog-img"
                  />
                </div>
                <div className="blog-content">
                  <div className="blog-meta">Jan 18, 2025</div>
                  <h5>Glass Railings: Safety Meets Style</h5>
                  <p>
                    Glass railings provide strong safety while maintaining clear
                    views, making them perfect for balconies and staircases.
                  </p>
                  <Link to="/blog-details" className="read-more">
                    Read more →
                  </Link>
                </div>
              </div>
            </div>

            {/* BLOG 3 – KITCHEN GLASS */}
            <div className="col-md-4">
              <div className="blog-card">
                <div className="blog-img-wrapper">
                  <img
                    src="https://images.unsplash.com/photo-1524758631624-e2822e304c36"
                    alt="Kitchen Profile Glass"
                    className="blog-img"
                  />
                </div>
                <div className="blog-content">
                  <div className="blog-meta">Jan 25, 2025</div>
                  <h5>Kitchen Profile Glass Explained</h5>
                  <p>
                    Profile glass is ideal for kitchens due to its durability,
                    smooth finish, easy cleaning, and modern appearance.
                  </p>
                  <Link to="/blog-details" className="read-more">
                    Read more →
                  </Link>
                </div>
              </div>
            </div>

            {/* BLOG 4 – SHOWER GLASS */}
            <div className="col-md-4">
              <div className="blog-card">
                <div className="blog-img-wrapper">
                  <img
                    src="https://images.unsplash.com/photo-1519710164239-da123dc03ef4"
                    alt="Glass Shower Enclosures"
                    className="blog-img"
                  />
                </div>
                <div className="blog-content">
                  <div className="blog-meta">Feb 02, 2025</div>
                  <h5>Glass Shower Enclosures Guide</h5>
                  <p>
                    Shower glass enclosures improve hygiene, water control, and
                    give bathrooms a clean and elegant finish.
                  </p>
                  <Link to="/blog-details" className="read-more">
                    Read more →
                  </Link>
                </div>
              </div>
            </div>

            {/* BLOG 5 – OFFICE PARTITIONS */}
            <div className="col-md-4">
              <div className="blog-card">
                <div className="blog-img-wrapper">
                  <img
                    src="https://images.unsplash.com/photo-1600585154526-990dced4db0d"
                    alt="Office Glass Partition"
                    className="blog-img"
                  />
                </div>
                <div className="blog-content">
                  <div className="blog-meta">Feb 10, 2025</div>
                  <h5>Office Glass Partition Benefits</h5>
                  <p>
                    Glass partitions improve productivity by allowing light
                    while maintaining privacy in workspaces.
                  </p>
                  <Link to="/blog-details" className="read-more">
                    Read more →
                  </Link>
                </div>
              </div>
            </div>

            {/* BLOG 6 – GLASS MAINTENANCE */}
            <div className="col-md-4">
              <div className="blog-card">
                <div className="blog-img-wrapper">
                  <img
                    src="https://images.unsplash.com/photo-1497366216548-37526070297c"
                    alt="Glass Maintenance"
                    className="blog-img"
                  />
                </div>
                <div className="blog-content">
                  <div className="blog-meta">Feb 18, 2025</div>
                  <h5>Glass Maintenance Tips for Long Life</h5>
                  <p>
                    Proper cleaning methods and regular maintenance help glass
                    installations stay clear and durable for years.
                  </p>
                  <Link to="/blog-details" className="read-more">
                    Read more →
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}

export default Blog;

