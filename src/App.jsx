import FeatureSection from "./components/FeatureSection";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import WorkFlow from "./components/WorkFlow";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignUpForm from "./pages/SignUpForm";
import SignInForm from "./pages/SignInForm";

function App() {
  return (
    <Router>
      <Navbar /> {/* Keep the Navbar outside Routes */}

      <Routes>
        <Route path="/" element={
          <div className="max-w-7xl mx-auto pt-20 px-6">
            <HeroSection />
            <FeatureSection />
            <WorkFlow />
            <Pricing />
            <Testimonials />
            <Footer />
          </div>
        } />
        <Route path="/signup" element={<SignUpForm />} />
        <Route path="/signin" element={<SignInForm />} />
        <Route path="/features" element={<FeatureSection />} />
        <Route path="/testimonial" element={<Testimonials />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/workflow" element={<WorkFlow />} />
      </Routes>
    </Router>
  );
}


export default App;
