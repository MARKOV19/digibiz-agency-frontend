
import React from 'react';
import Navbar from '@/components/Navbar';
import ContactSection from '@/components/ContactSection ';
import AboutSection from '@/components/about';

const AboutPage = () => {
  return (
    <main className="">
      <Navbar />

      
      <AboutSection />

      <ContactSection />
    </main>
  );
};

export default AboutPage;