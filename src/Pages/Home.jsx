// import React from "react";
// import Carousel from "react-bootstrap/Carousel";
// import image from "../assets/Pexels1.jpg";
// import image1 from "../assets/Pexels2.jpg";
// import image3 from "../assets/Pexels16.jpg";
// import kitchenImage from "../assets/Kitchen1.png";
// import railingImage from "../assets/Railings3.png";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { Link } from "react-router-dom";


// const slideImageStyle = {
//   height: "650px",
//   width: "100%",
//   objectFit: "cover",
// };

// const captionContainer = {
//   position: "absolute",
//   top: "50%",
//   left: "50%",
//   transform: "translate(-50%, -50%)",
//   textAlign: "center",
//   color: "#fff",
//   width: "100%",
//   padding: "0 20px",
// };

// const captionTitle = {
//   fontSize: "40px",
//   fontWeight: "700",
//   textShadow: "0px 3px 10px rgba(0,0,0,0.8)",
// };

// const captionText = {
//   fontSize: "20px",
//   textShadow: "0px 3px 8px rgba(0,0,0,0.7)",
// };
// function Home() {
//   return (
//     <div>
//       {/* Scoped CSS */}
//       <style>{`
//         .parallax-hero {
//           min-height: 420px;
//           background-attachment: fixed;
//           background-position: center;
//           background-repeat: no-repeat;
//           background-size: cover;
//           display:flex;
//           align-items:center;
//           justify-content:center;
//           color: #fff;
//           text-align:center;
//           position:relative;
//         }

//         .parallax-overlay {
//           position:absolute;
//           inset:0;
//           background: linear-gradient(180deg, rgba(0,0,0,0.25), rgba(0,0,0,0.35));
//           z-index:0;
//         }

//         .parallax-content { z-index:1; padding:40px 20px; }

//         .section-padding { padding: 60px 15px; }
//         .service-card { border:0; box-shadow: 0 6px 18px rgba(0,0,0,0.08); border-radius:10px; }
//         .blog-card { height:100%; border-radius:10px; overflow:hidden; }
//         .contact-input { margin-bottom:12px; }
//         .contact-card { transition: transform 220ms ease, box-shadow 220ms ease; border-radius: 12px; }
//         .contact-card:hover { transform: translateY(-8px); box-shadow: 0 18px 45px rgba(0,0,0,0.18); }

//         @media (max-width:768px){
//           .parallax-hero { background-attachment: scroll; }
//           .captionTitle-mobile { font-size: 26px !important; }
//         }
//       `}</style>

//       {/* Slider (top) */}
//       <div className="container-fluid p-0">
//         <Carousel interval={3000} fade>
//           <Carousel.Item>
//             <img
//               className="d-block w-100"
//               src={image}
//               alt="Glass Partition Work"
//               style={slideImageStyle}
//             />
//             <div style={captionContainer}>
//               <h3 style={captionTitle}>Premium Glass Partition Solutions</h3>
//               <p style={captionText}>
//                 Elegant and durable glass partitions perfect for office & home interior design.
//               </p>
//             </div>
//           </Carousel.Item>

//           <Carousel.Item>
//             <img
//               className="d-block w-100"
//               src={image1}
//               alt="Glass Door Work"
//               style={slideImageStyle}
//             />
//             <div style={captionContainer}>
//               <h3 style={captionTitle}>Stylish Glass Doors & Sliding Systems</h3>
//               <p style={captionText}>
//                 High-quality glass doors installed with smooth finishing and long-lasting performance.
//               </p>
//             </div>
//           </Carousel.Item>

//           <Carousel.Item>
//             <img
//               className="d-block w-100"
//               src={image3}
//               alt="Shower Glass Work"
//               style={slideImageStyle}
//             />
//             <div style={captionContainer}>
//               <h3 style={captionTitle}>Bathroom & Shower Glass Enclosures</h3>
//               <p style={captionText}>
//                 Toughened glass shower cabins designed for style, safety and durability.
//               </p>
//             </div>
//           </Carousel.Item>

//           <Carousel.Item>
//             <img
//               className="d-block w-100"
//               src={kitchenImage}
//               alt="Kitchen Profile Work"
//               style={slideImageStyle}
//             />
//             <div style={captionContainer}>
//               <h3 style={captionTitle}>Kitchen Profile Glass Work</h3>
//               <p style={captionText}>
//                 Modern glass profile shutters and kitchen partitions for beauty and functionality.
//               </p>
//             </div>
//           </Carousel.Item>

//           <Carousel.Item>
//             <img
//               className="d-block w-100"
//               src={railingImage}
//               alt="Glass Railing Work"
//               style={slideImageStyle}
//             />
//             <div style={captionContainer}>
//               <h3 style={captionTitle}>Glass Railing & Balcony Systems</h3>
//               <p style={captionText}>
//                 Safe, stylish, and modern glass railing solutions for stairs, balconies, and terraces.
//               </p>
//             </div>
//           </Carousel.Item>
//         </Carousel>
//       </div>

//       {/* About Section */}
//       <section className="bg-light section-padding">
//         <div className="container">
//           <div className="row align-items-center">
//             <div className="col-md-6 mb-4">
//               <img src={kitchenImage} alt="about" className="img-fluid rounded" />
//             </div>
//             <div className="col-md-6">
//               <h2>About Us</h2>
//               <p>
//                 We are a family-run glass solutions company with over a decade of experience delivering
//                 high-quality glass partitions, doors and railings. Our team focuses on safety, aesthetics and
//                 long-lasting finishes.
//               </p>
//               <ul>
//                 <li>Customized designs to match your space</li>
//                 <li>Professional installation and aftercare</li>
//                 <li>Premium toughened glass and hardware</li>
//               </ul>
//               <Link to="/about" className="btn btn-primary mt-2">Learn more</Link>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Services Section */}
//       <section className="section-padding">
//         <div className="container">
//           <div className="d-flex justify-content-between align-items-center mb-4">
//             <h2>Our Services</h2>
//             <Link to="/Service">View all</Link>
//           </div>

//           <div className="row g-4">
//             <div className="col-md-4">
//               <div className="card service-card p-3 h-90">
//                 <img src={railingImage} className="card-img-top rounded" alt="Glass Railing" height={"260vh"}/>
//                 <div className="card-body">
//                   <h5 className="card-title">Glass Railings</h5>
//                   <p className="card-text">Staircase and balcony glass railing systems with sturdy hardware and clean sightlines.</p>
//                   <Link to="/Service" className="stretched-link">Read more</Link>
//                 </div>
//               </div>
//             </div>

//             <div className="col-md-4">
//               <div className="card service-card p-3 h-90">
//                 <img src={image1} className="card-img-top rounded" alt="Glass Doors" height={"260vh"}/>
//                 <div className="card-body">
//                   <h5 className="card-title">Sliding Doors</h5>
//                   <p className="card-text">Smooth-operating sliding glass doors for homes and offices.</p>
//                   <Link to="/Service" className="stretched-link">Read more</Link>
//                 </div>
//               </div>
//             </div>

//             <div className="col-md-4">
//               <div className="card service-card p-3 h-90">
//                 <img src={image3} className="card-img-top rounded" alt="Shower" height={"260vh"} />
//                 <div className="card-body">
//                   <h5 className="card-title">Shower Enclosures</h5>
//                   <p className="card-text">Stylish frameless and semi-framed shower enclosures using toughened glass.</p>
//                   <Link to="/Service" className="stretched-link">Read more</Link>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Blog Section */}
//       <section className="bg-light section-padding">
//         <div className="container">
//           <div className="d-flex justify-content-between align-items-center mb-4">
//             <h2>Latest from our Blog</h2>
//             <Link to="/blog">See all posts</Link>
//           </div>

//           <div className="row g-4">
//             <div className="col-md-4">
//               <div className="card blog-card h-100">
//                 <img src={image} className="card-img-top" alt="blog1" height={"260vh"} />
//                 <div className="card-body">
//                   <h5 className="card-title">How to choose the right glass for your bathroom</h5>
//                   <p className="card-text">Short summary of the post and why it's helpful for homeowners.</p>
//                   <Link to="/blog/post-1">Read more</Link>
//                 </div>
//               </div>
//             </div>

//             <div className="col-md-4">
//               <div className="card blog-card h-100">
//                 <img src={image1} className="card-img-top" alt="blog2" height={"260vh"}/>
//                 <div className="card-body">
//                   <h5 className="card-title">Benefits of frameless shower enclosures</h5>
//                   <p className="card-text">Why a frameless shower can make a bathroom look larger and more modern.</p>
//                   <Link to="/blog/post-2">Read more</Link>
//                 </div>
//               </div>
//             </div>

//             <div className="col-md-4">
//               <div className="card blog-card h-100">
//                 <img src={image3} className="card-img-top" alt="blog3" height={"260vh"} />
//                 <div className="card-body">
//                   <h5 className="card-title">Maintenance tips for glass railings</h5>
//                   <p className="card-text">Quick tips to keep your glass looking pristine for years.</p>
//                   <Link to="/blog/post-3">Read more</Link>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Parallax Contact (mid-page) */}
//       <div
//         className="parallax-hero my-5"
//         style={{ backgroundImage: `url(${image1})` }}
//         role="img"
//         aria-label="Parallax contact background"
//       >
//         <div className="parallax-overlay" />
//         <div
//           className="parallax-content container d-flex justify-content-center align-items-center"
//           style={{ minHeight: 720 }}
//         >
//           <div
//             className="card contact-card p-4"
//             style={{ maxWidth: 980, width: "100%", background: "rgba(255,255,255,0.97)" }}
//           >
//             <div className="row g-3 align-items-center">
//               <div className="col-md-5">
//                 <h4 className="mb-3">Contact details</h4>
//                 <p className="mb-1"><strong>Address:</strong> 123 Glass Street, Your City</p>
//                 <p className="mb-1"><strong>Phone:</strong> +91-98765-43210</p>
//                 <p className="mb-1"><strong>Email:</strong> info@yourglasscompany.com</p>
//                 <p className="mt-3"><strong>Opening hours</strong><br/>Mon - Sat: 9:00 AM - 9:00 PM<br/>Sun: Closed</p>
//               </div>

//               <div className="col-md-7">
//                 <h5 className="mb-3">Send us your project details</h5>
//                 <form onSubmit={(e) => { e.preventDefault(); /* handle submit here */ }}>
//                   <div className="row g-2">
//                     <div className="col-sm-6">
//                       <input className="form-control contact-input" type="text" placeholder="Full name" required />
//                     </div>
//                     <div className="col-sm-6">
//                       <input className="form-control contact-input" type="email" placeholder="Email" required />
//                     </div>
//                   </div>

//                   <input className="form-control contact-input mt-2" type="tel" placeholder="Phone" />
//                   <textarea className="form-control contact-input mt-2" rows={4} placeholder="Project details"></textarea>
//                   <div className="d-flex justify-content-end mt-3">
//                     <button type="submit" className="btn btn-primary">Send message</button>
//                   </div>
//                 </form>
//               </div>

//             </div>
//           </div>
//         </div>
//       </div>

//     </div>
//   );
// }
// export default Home;


// import React from "react";
// import Carousel from "react-bootstrap/Carousel";
// import { Link } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";

// // Import images
// import image from "../assets/Pexels1.jpg";
// import image1 from "../assets/Pexels2.jpg";
// import image3 from "../assets/Pexels16.jpg";
// import kitchenImage from "../assets/Kitchen1.png";
// import railingImage from "../assets/Railings3.png";

// function Home() {
//   // Common styles
//   const styles = {
//     // Carousel
//     slideImage: {
//       height: "650px",
//       width: "100%",
//       objectFit: "cover"
//     },
//     captionContainer: {
//       position: "absolute",
//       top: "50%",
//       left: "50%",
//       transform: "translate(-50%, -50%)",
//       textAlign: "center",
//       color: "#fff",
//       width: "100%",
//       padding: "0 20px"
//     },
//     captionTitle: {
//       fontSize: "40px",
//       fontWeight: "700",
//       textShadow: "0px 3px 10px rgba(0,0,0,0.8)"
//     },
//     captionText: {
//       fontSize: "20px",
//       textShadow: "0px 3px 8px rgba(0,0,0,0.7)"
//     },
//     // Parallax
//     parallaxHero: {
//       minHeight: "420px",
//       backgroundAttachment: "fixed",
//       backgroundPosition: "center",
//       backgroundRepeat: "no-repeat",
//       backgroundSize: "cover",
//       display: "flex",
//       alignItems: "center",
//       justifyContent: "center",
//       color: "#fff",
//       textAlign: "center",
//       position: "relative",
//       margin: "2rem 0"
//     },
//     parallaxOverlay: {
//       position: "absolute",
//       inset: "0",
//       background: "linear-gradient(180deg, rgba(0,0,0,0.25), rgba(0,0,0,0.35))",
//       zIndex: "0"
//     },
//     // Cards
//     serviceCard: {
//       border: "0",
//       boxShadow: "0 6px 18px rgba(0,0,0,0.08)",
//       borderRadius: "10px",
//       height: "100%",
//       padding: "1rem",
//       transition: "transform 0.3s ease"
//     },
//     blogCard: {
//       height: "100%",
//       borderRadius: "10px",
//       overflow: "hidden",
//       transition: "transform 0.3s ease"
//     },
//     // Form
//     contactInput: {
//       marginBottom: "12px",
//       border: "1px solid #dee2e6",
//       borderRadius: "4px",
//       padding: "8px 12px",
//       width: "100%"
//     }
//   };

//   return (
//     <div>
//       {/* Slider (top) */}
//       <div style={{ padding: 0, margin: 0, width: "100%" }}>
//         <Carousel interval={3000} fade>
//           <Carousel.Item>
//             <img
//               className="d-block w-100"
//               src={image}
//               alt="Glass Partition Work"
//               style={styles.slideImage}
//             />
//             <div style={styles.captionContainer}>
//               <h3 style={styles.captionTitle}>Premium Glass Partition Solutions</h3>
//               <p style={styles.captionText}>
//                 Elegant and durable glass partitions perfect for office & home interior design.
//               </p>
//             </div>
//           </Carousel.Item>

//           {/* Other carousel items with similar structure */}

//         </Carousel>
//       </div>

//       {/* About Section */}
//       <section style={{ backgroundColor: "#f8f9fa", padding: "60px 15px" }}>
//         <div className="container">
//           <div className="row align-items-center">
//             <div className="col-md-6 mb-4">
//               <img 
//                 src={kitchenImage} 
//                 alt="about" 
//                 style={{ 
//                   width: "100%", 
//                   height: "auto", 
//                   borderRadius: "8px" 
//                 }} 
//               />
//             </div>
//             <div className="col-md-6">
//               <h2 style={{ marginBottom: "1.5rem" }}>About Us</h2>
//               <p style={{ marginBottom: "1.5rem", fontSize: "1.1rem" }}>
//                 We are a family-run glass solutions company with over a decade of experience delivering
//                 high-quality glass partitions, doors and railings.
//               </p>
//               <ul style={{ marginBottom: "1.5rem", paddingLeft: "1.5rem" }}>
//                 <li style={{ marginBottom: "0.5rem" }}>Customized designs to match your space</li>
//                 <li style={{ marginBottom: "0.5rem" }}>Professional installation and aftercare</li>
//                 <li>Premium toughened glass and hardware</li>
//               </ul>
//               <Link 
//                 to="/about" 
//                 style={{
//                   display: "inline-block",
//                   padding: "0.5rem 1.5rem",
//                   backgroundColor: "#0d6efd",
//                   color: "white",
//                   textDecoration: "none",
//                   borderRadius: "0.25rem",
//                   marginTop: "1rem"
//                 }}
//               >
//                 Learn more
//               </Link>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Services Section */}
//       <section style={{ padding: "60px 15px" }}>
//         <div className="container">
//           <div style={{ 
//             display: "flex", 
//             justifyContent: "space-between", 
//             alignItems: "center", 
//             marginBottom: "1.5rem" 
//           }}>
//             <h2 style={{ margin: 0 }}>Our Services</h2>
//             <Link to="/Service" style={{ color: "#0d6efd", textDecoration: "none" }}>
//               View all
//             </Link>
//           </div>

//           <div className="row g-4">
//             <div className="col-md-4">
//               <div style={styles.serviceCard}>
//                 <img 
//                   src={railingImage} 
//                   className="card-img-top rounded" 
//                   alt="Glass Railing" 
//                   style={{ 
//                     width: "100%", 
//                     height: "260px", 
//                     objectFit: "cover", 
//                     borderRadius: "8px" 
//                   }}
//                 />
//                 <div style={{ padding: "1.25rem" }}>
//                   <h5 style={{ 
//                     fontSize: "1.25rem", 
//                     marginBottom: "0.75rem" 
//                   }}>
//                     Glass Railings
//                   </h5>
//                   <p style={{ 
//                     color: "#6c757d", 
//                     marginBottom: "1rem" 
//                   }}>
//                     Staircase and balcony glass railing systems with sturdy hardware and clean sightlines.
//                   </p>
//                   <Link 
//                     to="/Service" 
//                     style={{ 
//                       color: "#0d6efd", 
//                       textDecoration: "none",
//                       position: "relative",
//                       zIndex: "1"
//                     }}
//                   >
//                     Read more
//                   </Link>
//                 </div>
//               </div>
//             </div>

//             {/* Other service cards with similar structure */}

//           </div>
//         </div>
//       </section>

//       {/* Add other sections with similar inline styling */}

//     </div>
//   );
// }

// export default Home;


// import React from "react";
// import Carousel from "react-bootstrap/Carousel";
// import { Link } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
// import Box from "@mui/material/Box";
// import Card from "@mui/material/Card";
// import CardContent from "@mui/material/CardContent";
// import Typography from "@mui/material/Typography";
// import TextField from "@mui/material/TextField";
// import Button from "@mui/material/Button";
// import image from "../assets/Pexels1.jpg";
// import image1 from "../assets/Pexels2.jpg";
// import image3 from "../assets/Pexels16.jpg";
// import kitchenImage from "../assets/Kitchen1.png";
// import railingImage from "../assets/Railings3.png";

// function Home() {
//   // Common inline styles
//   const styles = {
//     // Carousel
//     slideImage: {
//       height: "650px",
//       width: "100%",
//       objectFit: "cover",
//     },
//     captionContainer: {
//       position: "absolute",
//       top: "50%",
//       left: "50%",
//       transform: "translate(-50%, -50%)",
//       textAlign: "center",
//       color: "#fff",
//       width: "100%",
//       padding: "0 20px",
//       pointerEvents: "none",
//     },
//     captionTitle: {
//       fontSize: "40px",
//       fontWeight: "700",
//       textShadow: "0px 3px 10px rgba(0,0,0,0.8)",
//       margin: 0,
//     },
//     captionText: {
//       fontSize: "20px",
//       textShadow: "0px 3px 8px rgba(0,0,0,0.7)",
//       marginTop: "10px",
//     },
//     // Parallax band
//     parallaxHero: {
//       minHeight: "420px",
//       backgroundImage: `url(${image1})`,
//       backgroundAttachment: "fixed",
//       backgroundPosition: "center",
//       backgroundRepeat: "no-repeat",
//       backgroundSize: "cover",
//       display: "flex",
//       alignItems: "center",
//       justifyContent: "center",
//       color: "#fff",
//       textAlign: "center",
//       position: "relative",
//       margin: "2rem 0",
//     },
//     parallaxOverlay: {
//       position: "absolute",
//       inset: "0",
//       background: "rgba(0,0,0,0.45)",
//       zIndex: 0,
//     },
//     // Service card
//     serviceCard: {
//       border: "0",
//       boxShadow: "0 6px 18px rgba(0,0,0,0.08)",
//       borderRadius: "10px",
//       height: "100%",
//       padding: "0",
//       transition: "transform 0.3s ease",
//       background: "#fff",
//     },
//     serviceImg: {
//       width: "100%",
//       height: "260px",
//       objectFit: "cover",
//       borderTopLeftRadius: "10px",
//       borderTopRightRadius: "10px",
//     },
//     serviceBody: {
//       padding: "1rem 1.25rem 1.5rem 1.25rem",
//     },
//     // Blog card
//     blogCard: {
//       borderRadius: "10px",
//       overflow: "hidden",
//       boxShadow: "0 6px 18px rgba(0,0,0,0.05)",
//       height: "100%",
//       background: "#fff",
//     },
//     blogImg: {
//       width: "100%",
//       height: "300px",
//       objectFit: "cover",
//     },
//     // Contact card (MUI)
//     contactCardWrapper: {
//       maxWidth: "900px",
//       margin: "20px",
//       position: "relative",
//       zIndex: 2,
//     },
//     contactCard: {
//       padding: "20px",
//       borderRadius: "12px",
//       boxShadow: "0 20px 40px rgba(0,0,0,0.18)",
//       background: "rgba(255,255,255,0.97)",
//       display: "flex",
//       gap: "1rem",
//       flexDirection: "row",
//       alignItems: "stretch",
//     },
//     contactDetails: {
//       flex: "0 0 40%",
//       paddingRight: "12px",
//       textAlign: "left",
//     },
//     contactForm: {
//       flex: "1 1 60%",
//     },
//     inputStyle: {
//       marginBottom: "12px",
//     },
//   };


//   return (
//     <div>
//       <style>
//         {`
//           .parallax-hero {
//             background-position: center;
//             background-repeat: no-repeat;
//             background-size: cover;
//             background-attachment: fixed;
//             min-height: 480px;
//             width: 100%;
//             position: relative;
//             padding: 60px 0;
//             display: flex;
//             align-items: center;
//             justify-content: center;
//           }

//           .parallax-hero::before {
//             content: "";
//             position: absolute;
//             inset: 0;
//             background: rgba(0, 0, 0, 0.40);
//             z-index: 1;
//           }

//           .parallax-content {
//             position: relative;
//             z-index: 2;
//             width: 100%;
//           }

//           @media (max-width: 768px) {
//             .parallax-hero {
//               background-attachment: scroll;
//               min-height: 350px;
//               padding: 40px 0;
//             }
//           }
//         `}
//       </style>
//       {/* ---------- Slider ---------- */}
//       <div style={{ padding: 0, margin: 0, width: "100%" }}>
//         <Carousel interval={3000} fade>
//           <Carousel.Item>
//             <img
//               className="d-block w-100"
//               src={image}
//               alt="Glass Partition Work"
//               style={styles.slideImage}
//             />
//             <div style={styles.captionContainer}>
//               <h3 style={styles.captionTitle}>Premium Glass Partition Solutions</h3>
//               <p style={styles.captionText}>
//                 Elegant and durable glass partitions perfect for office & home interior design.
//               </p>
//             </div>
//           </Carousel.Item>

//           <Carousel.Item>
//             <img
//               className="d-block w-100"
//               src={image1}
//               alt="Glass Door Work"
//               style={styles.slideImage}
//             />
//             <div style={styles.captionContainer}>
//               <h3 style={styles.captionTitle}>Stylish Glass Doors & Sliding Systems</h3>
//               <p style={styles.captionText}>
//                 High-quality glass doors installed with smooth finishing and long-lasting performance.
//               </p>
//             </div>
//           </Carousel.Item>

//           <Carousel.Item>
//             <img
//               className="d-block w-100"
//               src={image3}
//               alt="Shower Glass Work"
//               style={styles.slideImage}
//             />
//             <div style={styles.captionContainer}>
//               <h3 style={styles.captionTitle}>Bathroom & Shower Glass Enclosures</h3>
//               <p style={styles.captionText}>
//                 Toughened glass shower cabins designed for style, safety and durability.
//               </p>
//             </div>
//           </Carousel.Item>
//         </Carousel>
//       </div>

//       {/* ---------- About ---------- */}
//       <section style={{ backgroundColor: "#f8f9fa", padding: "60px 15px" }}>
//         <div className="container">
//           <div className="row align-items-center">
//             <div className="col-md-6 mb-4">
//               <img
//                 src={kitchenImage}
//                 alt="about"
//                 style={{ width: "100%", height: "auto", borderRadius: "8px", boxShadow: "0 8px 28px rgba(0,0,0,0.08)" }}
//               />
//             </div>
//             <div className="col-md-6">
//               <h2 style={{ marginBottom: "1.5rem" }}>About Us</h2>
//               <p style={{ marginBottom: "1.5rem", fontSize: "1.05rem", lineHeight: 1.6 }}>
//                 We are a family-run glass solutions company with over a decade of experience delivering
//                 high-quality glass partitions, doors and railings. Our team focuses on safety, aesthetics and
//                 long-lasting finishes.
//               </p>
//               <ul style={{ marginBottom: "1.5rem", paddingLeft: "1.5rem" }}>
//                 <li style={{ marginBottom: "0.5rem" }}>Customized designs to match your space</li>
//                 <li style={{ marginBottom: "0.5rem" }}>Professional installation and aftercare</li>
//                 <li>Premium toughened glass and hardware</li>
//               </ul>
//               <Link
//                 to="/about"
//                 style={{
//                   display: "inline-block",
//                   padding: "0.5rem 1.5rem",
//                   backgroundColor: "#0d6efd",
//                   color: "white",
//                   textDecoration: "none",
//                   borderRadius: "0.25rem",
//                   marginTop: "1rem",
//                 }}
//               >
//                 Learn more
//               </Link>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ---------- Services ---------- */}
//       <section style={{ padding: "60px 15px" }}>
//         <div className="container">
//           <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem" }}>
//             <h2 style={{ margin: 0 }}>Our Services</h2>
//             <Link to="/Service" style={{ color: "#0d6efd", textDecoration: "none" }}>View all</Link>
//           </div>

//           <div className="row g-4">
//             {/* Service 1 */}
//             <div className="col-md-4">
//               <div style={styles.serviceCard}>
//                 <img src={railingImage} alt="Glass Railing" style={styles.serviceImg} />
//                 <div style={styles.serviceBody}>
//                   <h5 style={{ fontSize: "1.25rem", marginBottom: "0.75rem" }}>Glass Railings</h5>
//                   <p style={{ color: "#6c757d", marginBottom: "1rem" }}>
//                     Staircase and balcony glass railing systems with sturdy hardware and clean sightlines.
//                   </p>
//                   <Link to="/Service" style={{ color: "#0d6efd", textDecoration: "none" }}>Read more</Link>
//                 </div>
//               </div>
//             </div>

//             {/* Service 2 */}
//             <div className="col-md-4">
//               <div style={styles.serviceCard}>
//                 <img src={image1} alt="Sliding Doors" style={styles.serviceImg} />
//                 <div style={styles.serviceBody}>
//                   <h5 style={{ fontSize: "1.25rem", marginBottom: "0.75rem" }}>Sliding Doors</h5>
//                   <p style={{ color: "#6c757d", marginBottom: "1rem" }}>
//                     Smooth-operating sliding glass doors for homes and offices.
//                   </p>
//                   <Link to="/Service" style={{ color: "#0d6efd", textDecoration: "none" }}>Read more</Link>
//                 </div>
//               </div>
//             </div>

//             {/* Service 3 (added) */}
//             <div className="col-md-4">
//               <div style={styles.serviceCard}>
//                 <img src={image3} alt="Shower Enclosures" style={styles.serviceImg} />
//                 <div style={styles.serviceBody}>
//                   <h5 style={{ fontSize: "1.25rem", marginBottom: "0.75rem" }}>Shower Enclosures</h5>
//                   <p style={{ color: "#6c757d", marginBottom: "1rem" }}>
//                     Frameless and semi-frameless shower enclosures crafted from toughened glass for safety and elegance.
//                   </p>
//                   <Link to="/Service" style={{ color: "#0d6efd", textDecoration: "none" }}>Read more</Link>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ---------- Blog (3 details) ---------- */}
//       <section style={{ backgroundColor: "#f8f9fa", padding: "60px 15px" }}>
//         <div className="container">
//           <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem" }}>
//             <h2 style={{ margin: 0 }}>Latest from our Blog</h2>
//             <Link to="/blog" style={{ color: "#0d6efd", textDecoration: "none" }}>See all posts</Link>
//           </div>

//           <div className="row g-4">
//             {/* Blog 1 */}
//             <div className="col-md-4">
//               <div style={styles.blogCard}>
//                 <img src={image} alt="blog1" style={styles.blogImg} />
//                 <div style={{ padding: "1rem" }}>
//                   <h5 style={{ marginBottom: "0.5rem" }}>How to choose the right glass for your bathroom</h5>
//                   <p style={{ color: "#6c757d" }}>
//                     A practical guide to selecting the right glass type, thickness and finish for safe and stylish bathrooms.
//                   </p>
//                   <Link to="/blog/post-1" style={{ color: "#0d6efd", textDecoration: "none" }}>Read more</Link>
//                 </div>
//               </div>
//             </div>

//             {/* Blog 2 */}
//             <div className="col-md-4">
//               <div style={styles.blogCard}>
//                 <img src={image1} alt="blog2" style={styles.blogImg} />
//                 <div style={{ padding: "1rem" }}>
//                   <h5 style={{ marginBottom: "0.5rem" }}>Benefits of frameless shower enclosures</h5>
//                   <p style={{ color: "#6c757d" }}>
//                     Frameless showers create a modern, open look and are easier to clean—here's why many homeowners prefer them.
//                   </p>
//                   <Link to="/blog/post-2" style={{ color: "#0d6efd", textDecoration: "none" }}>Read more</Link>
//                 </div>
//               </div>
//             </div>

//             {/* Blog 3 */}
//             <div className="col-md-4">
//               <div style={styles.blogCard}>
//                 <img src={railingImage} alt="blog3" style={styles.blogImg} />
//                 <div style={{ padding: "1rem" }}>
//                   <h5 style={{ marginBottom: "0.5rem" }}>Maintenance tips for glass railings</h5>
//                   <p style={{ color: "#6c757d" }}>
//                     Keep your glass railings crystal clear with these simple cleaning and maintenance tips.
//                   </p>
//                   <Link to="/blog/post-3" style={{ color: "#0d6efd", textDecoration: "none" }}>Read more</Link>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ---------- CONTACT SECTION (Parallax + MUI) ---------- */}
//       <section
//         className="parallax-hero"
//         style={{ backgroundImage: `url(${image1})` }}
//       >
//         <div className="parallax-content container">
//           <div className="row g-4 justify-content-center">

//             {/* Contact Details Card */}
//             <div className="col-md-4">
//               <Card
//                 elevation={6}
//                 style={{
//                   background: "rgba(255,255,255,0.95)",
//                   borderRadius: "12px",
//                   padding: "20px"
//                 }}
//               >
//                 <CardContent>
//                   <Typography variant="h5" fontWeight={700} gutterBottom>
//                     Contact Details
//                   </Typography>

//                   <Typography variant="body1" gutterBottom>
//                     <strong>📍 Address:</strong><br />
//                     123 Glass Street, Ahmedabad, Gujarat
//                   </Typography>

//                   <Typography variant="body1" gutterBottom>
//                     <strong>📞 Phone:</strong><br />
//                     +91 98765 43210
//                   </Typography>

//                   <Typography variant="body1" gutterBottom>
//                     <strong>📧 Email:</strong><br />
//                     info@patelglassworkcompany.com
//                   </Typography>

//                   <Typography variant="body1">
//                     <strong>🕒 Working Hours:</strong><br />
//                     Mon–Sat: 9:00 AM – 9:00 PM<br />
//                     Sunday: Closed
//                   </Typography>
//                 </CardContent>
//               </Card>
//             </div>

//             {/* Contact Form Card */}
//             <div className="col-md-6">
//               <Card
//                 elevation={6}
//                 style={{
//                   background: "rgba(255,255,255,0.95)",
//                   borderRadius: "12px",
//                   padding: "20px"
//                 }}
//               >
//                 <CardContent>
//                   <Typography variant="h5" fontWeight={700} gutterBottom>
//                     Send Us a Message
//                   </Typography>

//                   {/* Full Name */}
//                   <TextField
//                     fullWidth
//                     placeholder="Full Name"
//                     variant="outlined"
//                     size="small"
//                     style={{ marginBottom: "12px" }}
//                   />

//                   {/* Email */}
//                   <TextField
//                     fullWidth
//                     placeholder="Email"
//                     variant="outlined"
//                     size="small"
//                     style={{ marginBottom: "12px" }}
//                   />

//                   {/* Phone */}
//                   <TextField
//                     fullWidth
//                     placeholder="Phone"
//                     variant="outlined"
//                     size="small"
//                     style={{ marginBottom: "12px" }}
//                   />

//                   {/* Message */}
//                   <TextField
//                     fullWidth
//                     placeholder="Project Details"
//                     multiline
//                     rows={4}
//                     variant="outlined"
//                     style={{ marginBottom: "12px" }}
//                   />

//                   {/* Submit Button */}
//                   <div style={{ textAlign: "center" }}>
//                     <Button variant="contained" color="primary">
//                       Send Message
//                     </Button>
//                   </div>
//                 </CardContent>
//               </Card>
//             </div>

//           </div>
//         </div>
//       </section>


//     </div>
//   );
// }

// export default Home;


// src/pages/Home.js
import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import image from "../assets/Pexels1.jpg";
import image1 from "../assets/Pexels2.jpg";
import image3 from "../assets/Pexels16.jpg";
import kitchenImage from "../assets/Kitchen1.png";
import railingImage from "../assets/Railings3.png";

function Home() {
  // Common inline styles
  const styles = {
    // Carousel
    slideImage: {
      height: "650px",
      width: "100%",
      objectFit: "cover",
    },
    captionContainer: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      textAlign: "center",
      color: "#fff",
      width: "100%",
      padding: "0 20px",
      pointerEvents: "none",
    },
    captionTitle: {
      fontSize: "40px",
      fontWeight: "700",
      textShadow: "0px 3px 10px rgba(0,0,0,0.8)",
      margin: 0,
    },
    captionText: {
      fontSize: "20px",
      textShadow: "0px 3px 8px rgba(0,0,0,0.7)",
      marginTop: "10px",
    },
    // Parallax band
    parallaxHero: {
      minHeight: "420px",
      backgroundImage: `url(${image1})`,
      backgroundAttachment: "fixed",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "#fff",
      textAlign: "center",
      position: "relative",
      margin: "2rem 0",
    },
    parallaxOverlay: {
      position: "absolute",
      inset: "0",
      background: "rgba(0,0,0,0.45)",
      zIndex: 0,
    },
    // Service card
    serviceCard: {
      border: "0",
      boxShadow: "0 6px 18px rgba(0,0,0,0.08)",
      borderRadius: "10px",
      height: "100%",
      padding: "0",
      transition: "transform 0.3s ease",
      background: "#fff",
      overflow: "hidden",
    },
    serviceImg: {
      width: "100%",
      height: "260px",
      objectFit: "cover",
      borderTopLeftRadius: "10px",
      borderTopRightRadius: "10px",
    },
    serviceBody: {
      padding: "1rem 1.25rem 1.5rem 1.25rem",
    },
    // Blog card
    blogCard: {
      borderRadius: "10px",
      overflow: "hidden",
      boxShadow: "0 6px 18px rgba(0,0,0,0.05)",
      height: "100%",
      background: "#fff",
    },
    blogImg: {
      width: "100%",
      height: "300px",
      objectFit: "cover",
    },
    // Contact card (MUI)
    contactCardWrapper: {
      maxWidth: "900px",
      margin: "20px",
      position: "relative",
      zIndex: 2,
    },
    contactCard: {
      padding: "20px",
      borderRadius: "12px",
      boxShadow: "0 20px 40px rgba(0,0,0,0.18)",
      background: "rgba(255,255,255,0.97)",
      display: "flex",
      gap: "1rem",
      flexDirection: "row",
      alignItems: "stretch",
    },
    contactDetails: {
      flex: "0 0 40%",
      paddingRight: "12px",
      textAlign: "left",
    },
    contactForm: {
      flex: "1 1 60%",
    },
    inputStyle: {
      marginBottom: "12px",
    },
  };

  return (
    <div>
      {/* ---------------- CSS (hover + parallax) ---------------- */}
      <style>
        {`
          /* ABOUT IMAGE HOVER */
          .about-img {
            transition: transform 0.4s ease, box-shadow 0.4s ease;
            display: block;
            width: 100%;
            border-radius: 8px;
          }
          .about-img:hover {
            transform: scale(1.05);
            box-shadow: 0 12px 35px rgba(0, 0, 0, 0.25);
          }

          /* SERVICE CARD HOVER */
          .service-card {
            transition: transform 0.35s ease, box-shadow 0.35s ease;
            cursor: pointer;
            will-change: transform;
          }
          .service-card:hover {
            transform: translateY(-8px);
            box-shadow: 0 12px 32px rgba(0, 0, 0, 0.18);
          }

          /* BLOG CARD HOVER */
          .blog-card {
            transition: transform 0.35s ease, box-shadow 0.35s ease;
            cursor: pointer;
            will-change: transform;
          }
          .blog-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 14px 36px rgba(0, 0, 0, 0.20);
          }

          /* PARALLAX HERO */
          .parallax-hero {
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
            background-attachment: fixed;
            min-height: 480px;
            width: 100%;
            position: relative;
            padding: 60px 0;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .parallax-hero::before {
            content: "";
            position: absolute;
            inset: 0;
            background: rgba(0, 0, 0, 0.40);
            z-index: 1;
          }

          .parallax-content {
            position: relative;
            z-index: 2;
            width: 100%;
          }

          /* SMALL SCREENS */
          @media (max-width: 768px) {
            .parallax-hero {
              background-attachment: scroll;
              min-height: 350px;
              padding: 40px 0;
            }
            .caption-title {
              font-size: 28px !important;
            }
            .caption-text {
              font-size: 16px !important;
            }
          }
        `}
      </style>

      {/* ---------- Slider ---------- */}
      <div style={{ padding: 0, margin: 0, width: "100%" }}>
        <Carousel interval={3000} fade>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={image}
              alt="Glass Partition Work"
              style={styles.slideImage}
            />
            <div style={styles.captionContainer}>
              <h3 className="caption-title" style={styles.captionTitle}>
                Premium Glass Partition Solutions
              </h3>
              <p className="caption-text" style={styles.captionText}>
                Elegant and durable glass partitions perfect for office & home interior design.
              </p>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src={image1}
              alt="Glass Door Work"
              style={styles.slideImage}
            />
            <div style={styles.captionContainer}>
              <h3 className="caption-title" style={styles.captionTitle}>
                Stylish Glass Doors & Sliding Systems
              </h3>
              <p className="caption-text" style={styles.captionText}>
                High-quality glass doors installed with smooth finishing and long-lasting performance.
              </p>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src={image3}
              alt="Shower Glass Work"
              style={styles.slideImage}
            />
            <div style={styles.captionContainer}>
              <h3 className="caption-title" style={styles.captionTitle}>
                Bathroom & Shower Glass Enclosures
              </h3>
              <p className="caption-text" style={styles.captionText}>
                Toughened glass shower cabins designed for style, safety and durability.
              </p>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src={kitchenImage}
              alt="Kitchen Profile Work"
              style={styles.slideImage}
            />
            <div style={styles.captionContainer}>
              <h3 className="caption-title" style={styles.captionTitle}>Kitchen Profile Glass Work</h3>
              <p className="caption-text" style={styles.captionText}>
                Modern glass profile shutters and kitchen partitions for beauty and functionality.
              </p>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src={railingImage}
              alt="Glass Railing Work"
              style={styles.slideImage}
            />
            <div style={styles.captionContainer}>
              <h3 className="caption-title" style={styles.captionTitle}>Glass Railing & Balcony Systems</h3>
              <p className="caption-text" style={styles.captionText}>
                Safe, stylish, and modern glass railing solutions for stairs, balconies, and terraces.
              </p>
            </div>
          </Carousel.Item>



        </Carousel>
      </div>

      {/* ---------- About ---------- */}
      <section style={{ backgroundColor: "#f8f9fa", padding: "60px 15px" }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 mb-4">
              <img
                src={kitchenImage}
                alt="about"
                className="about-img"
                style={{ height: "auto" }}
              />
            </div>
            <div className="col-md-6">
              <h2 style={{ marginBottom: "1.5rem" }}>About Us</h2>
              <p style={{ marginBottom: "1.5rem", fontSize: "1.05rem", lineHeight: 1.6 }}>
                We are a family-run glass solutions company with over a decade of experience delivering
                high-quality glass partitions, doors and railings. Our team focuses on safety, aesthetics and
                long-lasting finishes.
              </p>
              <ul style={{ marginBottom: "1.5rem", paddingLeft: "1.5rem" }}>
                <li style={{ marginBottom: "0.5rem" }}>Customized designs to match your space</li>
                <li style={{ marginBottom: "0.5rem" }}>Professional installation and aftercare</li>
                <li>Premium toughened glass and hardware</li>
              </ul>
              <Link
                to="/about"
                style={{
                  display: "inline-block",
                  padding: "0.5rem 1.5rem",
                  backgroundColor: "#0d6efd",
                  color: "white",
                  textDecoration: "none",
                  borderRadius: "0.25rem",
                  marginTop: "1rem",
                }}
              >
                Learn more
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Services ---------- */}
      <section style={{ padding: "60px 15px" }}>
        <div className="container">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem" }}>
            <h2 style={{ margin: 0 }}>Our Services</h2>
            <Link to="/Service" style={{ color: "#0d6efd", textDecoration: "none" }}>View all</Link>
          </div>

          <div className="row g-4">
            {/* Service 1 */}
            <div className="col-md-4">
              <div className="service-card" style={styles.serviceCard}>
                <img src={railingImage} alt="Glass Railing" style={styles.serviceImg} />
                <div style={styles.serviceBody}>
                  <h5 style={{ fontSize: "1.25rem", marginBottom: "0.75rem" }}>Glass Railings</h5>
                  <p style={{ color: "#6c757d", marginBottom: "1rem" }}>
                    Staircase and balcony glass railing systems with sturdy hardware and clean sightlines.
                  </p>
                  <Link to="/Service" style={{ color: "#0d6efd", textDecoration: "none" }}>Read more</Link>
                </div>
              </div>
            </div>

            {/* Service 2 */}
            <div className="col-md-4">
              <div className="service-card" style={styles.serviceCard}>
                <img src={image1} alt="Sliding Doors" style={styles.serviceImg} />
                <div style={styles.serviceBody}>
                  <h5 style={{ fontSize: "1.25rem", marginBottom: "0.75rem" }}>Sliding Doors</h5>
                  <p style={{ color: "#6c757d", marginBottom: "1rem" }}>
                    Smooth-operating sliding glass doors for homes and offices.
                  </p>
                  <Link to="/Service" style={{ color: "#0d6efd", textDecoration: "none" }}>Read more</Link>
                </div>
              </div>
            </div>

            {/* Service 3 */}
            <div className="col-md-4">
              <div className="service-card" style={styles.serviceCard}>
                <img src={image3} alt="Shower Enclosures" style={styles.serviceImg} />
                <div style={styles.serviceBody}>
                  <h5 style={{ fontSize: "1.25rem", marginBottom: "0.75rem" }}>Shower Enclosures</h5>
                  <p style={{ color: "#6c757d", marginBottom: "1rem" }}>
                    Frameless and semi-frameless shower enclosures crafted from toughened glass for safety and elegance.
                  </p>
                  <Link to="/Service" style={{ color: "#0d6efd", textDecoration: "none" }}>Read more</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Blog (3 details) ---------- */}
      <section style={{ backgroundColor: "#f8f9fa", padding: "60px 15px" }}>
        <div className="container">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem" }}>
            <h2 style={{ margin: 0 }}>Latest from our Blog</h2>
            <Link to="/blog" style={{ color: "#0d6efd", textDecoration: "none" }}>See all posts</Link>
          </div>

          <div className="row g-4">
            {/* Blog 1 */}
            <div className="col-md-4">
              <div className="blog-card" style={styles.blogCard}>
                <img src={image} alt="blog1" style={styles.blogImg} />
                <div style={{ padding: "1rem" }}>
                  <h5 style={{ marginBottom: "0.5rem" }}>How to choose the right glass for your bathroom</h5>
                  <p style={{ color: "#6c757d" }}>
                    A practical guide to selecting the right glass type, thickness and finish for safe and stylish bathrooms.
                  </p>
                  <Link to="/blog" style={{ color: "#0d6efd", textDecoration: "none" }}>Read more</Link>
                </div>
              </div>
            </div>

            {/* Blog 2 */}
            <div className="col-md-4">
              <div className="blog-card" style={styles.blogCard}>
                <img src={image1} alt="blog2" style={styles.blogImg} />
                <div style={{ padding: "1rem" }}>
                  <h5 style={{ marginBottom: "0.5rem" }}>Benefits of frameless shower enclosures</h5>
                  <p style={{ color: "#6c757d" }}>
                    Frameless showers create a modern, open look and are easier to clean—here's why many homeowners prefer them.
                  </p>
                  <Link to="/blog" style={{ color: "#0d6efd", textDecoration: "none" }}>Read more</Link>
                </div>
              </div>
            </div>

            {/* Blog 3 */}
            <div className="col-md-4">
              <div className="blog-card" style={styles.blogCard}>
                <img src={railingImage} alt="blog3" style={styles.blogImg} />
                <div style={{ padding: "1rem" }}>
                  <h5 style={{ marginBottom: "0.5rem" }}>Maintenance tips for glass railings</h5>
                  <p style={{ color: "#6c757d" }}>
                    Keep your glass railings crystal clear with these simple cleaning and maintenance tips.
                  </p>
                  <Link to="/blog" style={{ color: "#0d6efd", textDecoration: "none" }}>Read more</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- CONTACT SECTION (Parallax + MUI) ---------- */}
      <section
        className="parallax-hero"
        style={{ backgroundImage: `url(${image1})` }}
      >
        <div className="parallax-content container">
          <div className="row g-4 justify-content-center">

            {/* Contact Details Card */}
            <div className="col-md-4">
              <Card
                elevation={6}
                style={{
                  background: "rgba(255,255,255,0.95)",
                  borderRadius: "12px",
                  padding: "20px"
                }}
              >
                <CardContent>
                  <Typography variant="h5" fontWeight={700} gutterBottom>
                    Contact Details
                  </Typography>

                  <Typography variant="body1" gutterBottom>
                    <strong>📍 Address:</strong><br />
                    123 Glass Street, Ahmedabad, Gujarat
                  </Typography>

                  <Typography variant="body1" gutterBottom>
                    <strong>📞 Phone:</strong><br />
                    +91 98765 43210
                  </Typography>

                  <Typography variant="body1" gutterBottom>
                    <strong>📧 Email:</strong><br />
                    info@patelglassworkcompany.com
                  </Typography>

                  <Typography variant="body1">
                    <strong>🕒 Working Hours:</strong><br />
                    Mon–Sat: 9:00 AM – 9:00 PM<br />
                    Sunday: Closed
                  </Typography>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form Card */}
            <div className="col-md-6">
              <Card
                elevation={6}
                style={{
                  background: "rgba(255,255,255,0.95)",
                  borderRadius: "12px",
                  padding: "20px"
                }}
              >
                <CardContent>
                  <Typography variant="h5" fontWeight={700} gutterBottom>
                    Send Us a Message
                  </Typography>

                  {/* Full Name */}
                  <TextField
                    fullWidth
                    placeholder="Full Name"
                    variant="outlined"
                    size="small"
                    style={{ marginBottom: "12px" }}
                  />

                  {/* Email */}
                  <TextField
                    fullWidth
                    placeholder="Email"
                    variant="outlined"
                    size="small"
                    style={{ marginBottom: "12px" }}
                  />

                  {/* Phone */}
                  <TextField
                    fullWidth
                    placeholder="Phone"
                    variant="outlined"
                    size="small"
                    style={{ marginBottom: "12px" }}
                  />

                  {/* Message */}
                  <TextField
                    fullWidth
                    placeholder="Project Details"
                    multiline
                    rows={4}
                    variant="outlined"
                    style={{ marginBottom: "12px" }}
                  />

                  {/* Submit Button */}
                  <div style={{ textAlign: "center" }}>
                    <Button variant="contained" color="primary">
                      Send Message
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
