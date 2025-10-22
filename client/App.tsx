import "./global.css";
import "./i18n";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import { HelmetProvider } from "react-helmet-async";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import { PageSkeleton } from "@/components/SkeletonLoader";
import Analytics from "@/components/Analytics";
import CookieBanner from "@/components/CookieBanner";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const LifeInsurance = lazy(() => import("./pages/LifeInsurance"));
const RetirementPlanning = lazy(() => import("./pages/RetirementPlanning"));
const HealthInsurance = lazy(() => import("./pages/HealthInsurance"));
const Medicare = lazy(() => import("./pages/Medicare"));
const FinalExpense = lazy(() => import("./pages/FinalExpense"));
const EstatePlanning = lazy(() => import("./pages/EstatePlanning"));
const AboutUs = lazy(() => import("./pages/AboutUs"));
const PartnersPage = lazy(() => import("./pages/PartnersPage"));
const CareersPage = lazy(() => import("./pages/CareersPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const PagesGallery = lazy(() => import("./pages/PagesGallery"));
const DownloadGallery = lazy(() => import("./pages/DownloadGallery"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const TermsOfService = lazy(() => import("./pages/TermsOfService"));
const FAQ = lazy(() => import("./pages/FAQ"));
const Team = lazy(() => import("./pages/Team"));
const Blog = lazy(() => import("./pages/Blog"));
const InsuranceGlossary = lazy(() => import("./pages/InsuranceGlossary"));

const queryClient = new QueryClient();

const LoadingFallback = () => <PageSkeleton />;

const App = () => (
  <ErrorBoundary>
    <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter basename="/4BridgesInsuranceCompany">
          <Analytics />
          <Suspense fallback={<LoadingFallback />}>
          <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/life-insurance" element={<LifeInsurance />} />
          <Route path="/retirement-planning" element={<RetirementPlanning />} />
          <Route path="/health-insurance" element={<HealthInsurance />} />
          <Route path="/medicare" element={<Medicare />} />
          <Route path="/final-expense" element={<FinalExpense />} />
          <Route path="/final-expense-insurance" element={<FinalExpense />} />
          <Route path="/estate-planning" element={<EstatePlanning />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/partners" element={<PartnersPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/team" element={<Team />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/insurance-glossary" element={<InsuranceGlossary />} />
          <Route path="/pages-gallery" element={<PagesGallery />} />
          <Route path="/download-gallery" element={<DownloadGallery />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
          </Routes>
          <CookieBanner />
        </Suspense>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
    </HelmetProvider>
  </ErrorBoundary>
);

createRoot(document.getElementById("root")!).render(<App />);
