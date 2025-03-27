import FeatureSection from "./components/FeatureSection";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import WorkFlow from "./components/WorkFlow";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignUpForm from "./pages/SignUpForm";

function App() {
  return (
    <Router>
      <Navbar /> {/* Keep the Navbar outside Routes */}
      <div className="max-w-7xl mx-auto pt-20 px-6">
        {/* Other Sections */}
        <HeroSection />
        <FeatureSection />
        <WorkFlow />
        <Pricing />
        <Testimonials />
        <Footer />
      </div>

      {/* Define your routes after the static content */}
      <Routes>
        <Route path="/signup" element={<SignUpForm />} />
        <Route path="/features" element={<FeatureSection />} />
        <Route path="/testimonial" element={<Testimonials />} />
        <Route path="/pricing" element={<Pricing />} />
      </Routes>
    </Router>
  );
}

export default App;
