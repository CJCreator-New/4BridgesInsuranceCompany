import Header from '@/components/Header';
import Hero from '@/components/Hero';
import { StatsSection } from '@/components/StatsSection';
import { TrustBadges } from '@/components/TrustBadges';
import { TestimonialCarousel } from '@/components/TestimonialCarousel';
import { LiveChatButton } from '@/components/LiveChatButton';
import { BackToTop } from '@/components/BackToTop';
import { ExitIntentPopup } from '@/components/ExitIntentPopup';
import About from '@/components/About';
import Products from '@/components/Products';
import Partners from '@/components/Partners';
import Careers from '@/components/Careers';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import QuoteForm from '@/components/QuoteForm';

export default function Index() {
  return (
    <div className="w-full">
      <Header />
      <Hero />
      <StatsSection />
      <TrustBadges />
      <About />
      <Products />
      <QuoteForm />
      <TestimonialCarousel />
      <Partners />
      <Careers />
      <Contact />
      <Footer />
      <LiveChatButton />
      <BackToTop />
      <ExitIntentPopup />
    </div>
  );
}
