'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import ContactSection from '@/components/ContactSection ';
import ServiceSection from '@/components/ServiceSection'; // si tu veux afficher tous les services ici

const ServicesPage = () => {
  return (
    <main className="bg-white text-[#001f3f] font-roboto">
      <Navbar />

      {/* Section des services */}
      <ServiceSection />

      {/* Section Contact */}
      <ContactSection />
    </main>
  );
};

export default ServicesPage;
