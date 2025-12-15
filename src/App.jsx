import './App.css';
import Header from './Component/Header';
import Footer from './Component/Footer';
import Home from './Pages/Home';
import About from './Pages/About';
import Blog from './Pages/Blog';
import Service from './Pages/Service';
import Contact from './Pages/Contact';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (

    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column"
      }}
    >
      <Header />
      <div style={{ flex: 1 }}>
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/Service" element={<Service />} />
          <Route path="/Contact" element={<Contact />} />

        </Routes>
      </div>
      <Footer />
    </div>

  );
}

export default App;

