import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Logo from "../assets/Logo5.jpg";

function Footer() {
  return (
    <Box
      sx={{
        backgroundColor: "#000",
        color: "white",
        padding: "35px 0 20px 0",
        width: "100%",
      }}
    >
      {/* Inline CSS for hover and minimal styling */}
      <style>{`
        .footer-link {
          color: #e6e6e6;
          text-decoration: none;
          font-size: 15px;
          transition: 0.3s ease;
        }
        .footer-link:hover {
          color: #FFD700;
          text-decoration: underline;
        }
        .footer-logo {
          width: 140px;
          height: auto;
          border-radius: 6px;
          transition: 0.3s ease;
        }
        .footer-logo:hover {
          transform: scale(1.05);
          box-shadow: 0 0 12px rgba(255, 215, 0, 0.4);
        }
      `}</style>

      <Container>
        <Row>

          {/* LOGO + ABOUT */}
          <Col md={4} sm={12} className="mb-3">
            <img src={Logo} alt="Logo" className="footer-logo" />

            <Typography sx={{ mt: 2, fontSize: "14px", color: "#ccc" }}>
              Providing premium glass solutions for homes & offices.
            </Typography>
          </Col>

          {/* QUICK LINKS */}
          <Col md={4} sm={12} className="mb-3">
            <Typography sx={{ fontSize: "20px", fontWeight: 700, mb: 1 }}>
              Quick Links
            </Typography>

            <p sx={{ fontSize: "18px", fontWeight: "bold" }}><Link to="/" className="footer-link">Home</Link></p>
            <p sx={{ fontSize: "18px", fontWeight: "bold" }}><Link to="/about" className="footer-link">About</Link></p>
            <p sx={{ fontSize: "18px", fontWeight: "bold" }}><Link to="/service" className="footer-link">Services</Link></p>
            <p sx={{ fontSize: "18px", fontWeight: "bold" }}><Link to="/blog" className="footer-link">Blog</Link></p>
            <p sx={{ fontSize: "18px", fontWeight: "bold" }}><Link to="/contact" className="footer-link">Contact</Link></p>
          </Col>

          {/* CONTACT INFO */}
          <Col md={4} sm={12} className="mb-3">
            <Typography sx={{ fontSize: "20px", fontWeight: 700, mb: 1 }}>
              Contact Info
            </Typography>

            <Typography sx={{ fontSize: "15px", color: "#ccc" }}>📞 +91 98765 43210</Typography>
            <Typography sx={{ fontSize: "15px", color: "#ccc" }}>📧 info@patelglassworkcompany.com</Typography>
            <Typography sx={{ fontSize: "15px", color: "#ccc" }}>📍 Ahmedabad, Gujarat</Typography>
          </Col>

        </Row>

        {/* COPYRIGHT */}
        <Typography
          sx={{
            textAlign: "center",
            marginTop: "20px",
            paddingTop: "12px",
            borderTop: "1px solid #ffffff33",
            fontSize: "14px",
            color: "#bcbcbc",
          }}
        >
          © {new Date().getFullYear()} Patel GlassWork Company — All Rights Reserved.
        </Typography>
      </Container>
    </Box>
  );
}

export default Footer;
