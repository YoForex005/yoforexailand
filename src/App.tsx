import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Features from "./components/Features";
import Home from "./components/pages/Home";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";
import ResourcesPage from "./components/pages/ResourcesPage";
import APIDocumentationPage from "./components/pages/APIDocumentationPage";
import IntegrationsPage from "./components/pages/IntegrationsPage";
import StatusPage from "./components/pages/StatusPage";
import UserManualPage from "./components/pages/UserManualPage";
import BlogPage from "./components/pages/BlogPage";
import CaseStudiesPage from "./components/pages/CaseStudiesPage";
import WhitepapersPage from "./components/pages/WhitepapersPage";
import WebinarsPage from "./components/pages/WebinarsPage";
import HelpCenterPage from "./components/pages/HelpCenterPage";
import CommunityForumPage from "./components/pages/CommunityForumPage";
import ContactSupportPage from "./components/pages/ContactSupportPage";
import CommunityPage from "./components/pages/CommunityPage";
import PrivacyPolicyPage from "./components/pages/PrivacyPolicyPage";
import TermsConditionsPage from "./components/pages/TermsConditionsPage";
import ReturnPolicyPage from "./components/pages/ReturnPolicyPage";
import ScrollUp from "./components/ScrollUp";
import GoToTop from "./components/GoToTop";

function App() {

  return (
    <div className="min-h-screen bg-neutral-950 text-white font-inter">
      {/* <Header />
      <main>
        <Hero />
        <HowItWorks />
        <Features />
        <WhyChooseUs />
        <StartTrading />
        <Pricing />
      </main>
      <Footer /> */}
      <BrowserRouter>
        <GoToTop />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/features" element={<Features />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/API-documentation" element={<APIDocumentationPage />} />
          <Route path="/integrations" element={<IntegrationsPage />} />
          <Route path="/status" element={<StatusPage />} />
          <Route path="/user-manual" element={<UserManualPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/case-studies" element={<CaseStudiesPage />} />
          <Route path="/whitepapers" element={<WhitepapersPage />} />
          <Route path="/webinars" element={<WebinarsPage />} />
          <Route path="/help-center" element={<HelpCenterPage />} />
          <Route path="/community-forum" element={<CommunityForumPage />} />
          <Route path="/contact-support" element={<ContactSupportPage />} />
          <Route path="/community" element={<CommunityPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/terms-conditions" element={<TermsConditionsPage />} />
          <Route path="/return-policy" element={<ReturnPolicyPage />} />
        </Routes>
        <ScrollUp />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;