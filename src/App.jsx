import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import "./App.css";
import "./index.css"

// Lazy load pages for code splitting
const Home = lazy(() => import("./pages/Home"));
const AboutUs = lazy(() => import("./pages/AboutUs"));

// Loading fallback
const PageLoader = () => (
  <div className="page-loader" role="status" aria-label="Loading page">
    <div className="loader-spinner"></div>
    <span className="sr-only">Loading...</span>
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
