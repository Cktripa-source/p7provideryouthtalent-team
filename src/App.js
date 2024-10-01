// App.js
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; 
import Nav from "./components/nav"; 
import Home from "./pages/home"; 
import About from "./pages/about"; 
import Contact from "./pages/contact"; 
import Videos from "./pages/videos";
import Services from "./pages/services";
import Gralley from "./pages/gralley";
import VideoBackground from './components/VideoBackground'; 
import ScrollToTop from './components/ScrollToTop'; 
import Footer from "./components/footer";
import Loader from "./components/loader" // Import the loader component
import './App.css';

function App() {
  const [loading, setLoading] = useState(true); // Track loading state

  useEffect(() => {
    // Simulate a network request or loading process
    const timer = setTimeout(() => {
      setLoading(false); // Stop showing the loader after 3 seconds (or based on your logic)
    }, 3000); // Set this timer to your preferred duration

    return () => clearTimeout(timer); // Cleanup the timer on unmount
  }, []);

  return (
    <div className="App">
      {loading ? ( 
        <Loader /> // Show loader while loading is true
      ) : ( 
        <Router>
          <ScrollToTop />
          <Nav />
          <VideoBackground />
          <Routes>
            <Route path="/" element={<Home />} /> 
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/videos" element={<Videos />} />
            <Route path="/services" element={<Services />} />
            <Route path="/gralley" element={<Gralley />} />
          </Routes>
          <Footer />
        </Router>
      )}
    </div>
  );
}

export default App;
