// /src/app/page.jsx
'use client';

import { useEffect } from 'react';
import Navbar from '../../components/Navbar';
import HeroSection from '../../components/HeroSection';
import ValuePropSection from '../../components/ValuePropSection';
import FeaturesSection from '../../components/FeaturesSection';
import TargetUsersSection from '../../components/TargetUsersSection';
// import PricingPage from '../components/PricingPage';
import Footer from '../../components/Footer';

export default function HomePage() {
  // Smooth scroll to #hash on first render (and when hash changes via in-page nav)
  useEffect(() => {
    const scrollToHash = () => {
      const hash = window.location.hash?.replace('#', '');
      if (!hash) return;
      // small delay to ensure DOM is painted
      setTimeout(() => {
        const el = document.getElementById(hash);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    };

    scrollToHash();

    // handle back/forward navigation that changes hash
    window.addEventListener('hashchange', scrollToHash);
    return () => window.removeEventListener('hashchange', scrollToHash);
  }, []);

  return (
    <>
      <Navbar />
      <HeroSection />
      <ValuePropSection />
      <FeaturesSection /> 
      <TargetUsersSection />
       {/* <PricingPage /> */}
      <Footer />
    </>
  );
}
