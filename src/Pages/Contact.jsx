import React from "react";

function Contact() {
  return (
    <div>

      {/* ================= INLINE CSS ================= */}
      <style>
        {`
        /* HERO */
        .contact-hero {
          background: linear-gradient(135deg, #1d2671, #c33764);
          color: white;
          padding: 110px 15px;
          text-align: center;
        }

        .contact-hero h1 {
          font-size: 50px;
          font-weight: 700;
        }

        .contact-hero p {
          max-width: 750px;
          margin: 15px auto 0;
          font-size: 18px;
          opacity: 0.95;
        }

        /* SECTION */
        .section {
          padding: 90px 15px;
        }

        /* CONTACT WRAPPER */
        .contact-wrapper {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
          align-items: stretch;
        }

        /* INFO BOX */
        .contact-info {
          background: linear-gradient(160deg, #0f2027, #203a43);
          color: white;
          padding: 45px;
          border-radius: 24px;
          box-shadow: 0 20px 45px rgba(0,0,0,0.2);
        }

        .contact-info h3 {
          font-weight: 600;
          margin-bottom: 20px;
        }

        .info-item {
          margin-bottom: 22px;
        }

        .info-item h6 {
          margin-bottom: 5px;
          font-weight: 600;
        }

        .info-item p {
          margin: 0;
          opacity: 0.9;
        }

        /* FORM BOX */
        .contact-form {
          background: white;
          padding: 45px;
          border-radius: 24px;
          box-shadow: 0 20px 45px rgba(0,0,0,0.15);
        }

        .contact-form h3 {
          margin-bottom: 20px;
          font-weight: 600;
        }

        .form-group {
          margin-bottom: 18px;
        }

        .form-group input,
        .form-group textarea {
          width: 100%;
          padding: 14px 16px;
          border-radius: 12px;
          border: 1px solid #ddd;
          font-size: 15px;
          outline: none;
          transition: border 0.3s ease;
        }

        .form-group input:focus,
        .form-group textarea:focus {
          border-color: #0d6efd;
        }

        .form-group textarea {
          resize: none;
        }

        .submit-btn {
          width: 100%;
          padding: 14px;
          border-radius: 12px;
          border: none;
          background: linear-gradient(135deg, #0d6efd, #6610f2);
          color: white;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          transition: transform 0.3s ease;
        }

        .submit-btn:hover {
          transform: translateY(-2px);
        }

        /* MAP */
        .map-box {
          margin-top: 70px;
          border-radius: 24px;
          overflow: hidden;
          box-shadow: 0 20px 45px rgba(0,0,0,0.15);
        }

        iframe {
          width: 100%;
          height: 420px;
          border: none;
        }

        @media (max-width: 900px) {
          .contact-wrapper {
            grid-template-columns: 1fr;
          }

          .contact-hero h1 {
            font-size: 36px;
          }
        }
        `}
      </style>

      {/* ================= HERO ================= */}
      <section className="contact-hero">
        <h1>Contact Us</h1>
        <p>
          Get in touch with Patel Glass Work for premium glass solutions.
          We’re here to help you with design, installation, and expert guidance.
        </p>
      </section>

      {/* ================= CONTACT SECTION ================= */}
      <section className="section">
        <div className="container">

          <div className="contact-wrapper">

            {/* CONTACT INFO */}
            <div className="contact-info">
              <h3>Contact Information</h3>

              <div className="info-item">
                <h6>📍 Address</h6>
                <p>Ahmedabad, Gujarat, India</p>
              </div>

              <div className="info-item">
                <h6>📞 Phone</h6>
                <p>+91 98765 43210</p>
              </div>

              <div className="info-item">
                <h6>📧 Email</h6>
                <p>info@patelglasswork.com</p>
              </div>

              <div className="info-item">
                <h6>🕒 Working Hours</h6>
                <p>Mon – Sat : 9:00 AM – 9:00 PM</p>
              </div>

              <div className="info-item">
                <h6>Why Contact Us?</h6>
                <p>
                  We provide expert advice, transparent pricing, and reliable
                  glass solutions tailored to your needs.
                </p>
              </div>
            </div>

            {/* CONTACT FORM */}
            <div className="contact-form">
              <h3>Send Us a Message</h3>

              <div className="form-group">
                <input type="text" placeholder="Your Name" />
              </div>

              <div className="form-group">
                <input type="email" placeholder="Your Email" />
              </div>

              <div className="form-group">
                <input type="text" placeholder="Phone Number" />
              </div>

              <div className="form-group">
                <textarea rows="4" placeholder="Your Message"></textarea>
              </div>

              <button className="submit-btn">
                Send Message
              </button>
            </div>

          </div>

          {/* MAP */}
          <div className="map-box">
            <iframe
              title="map"
              src="https://www.google.com/maps?q=Ahmedabad,Gujarat&output=embed"
              loading="lazy"
            ></iframe>
          </div>

        </div>
      </section>

    </div>
  );
}

export default Contact;
