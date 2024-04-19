import React from 'react';
import AboutSection from '../components/AboutSection';
import ContactSection from '../components/contactSection/ContactSection';
import Footer from '../components/Footer';
import HomeSection from '../components/HomeSection';
import Header from '../components/Header';
import ServicesSection from '../components/services/ServicesSection';
import ConquestSection from '../components/conquest/ConquestSection';

function LandingPage() {
  return (
    <>
      <Header />
      <HomeSection />
      <ServicesSection />
      <AboutSection />
      <ConquestSection />
      <ContactSection />
      <Footer />
    </>
  );
}

export default LandingPage;
