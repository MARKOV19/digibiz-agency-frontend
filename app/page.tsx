// app/page.tsx
'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/ HeroSection ';
import ServiceSection from '@/components/ServiceSection';
import ContactSection from '@/components/ContactSection ';

const Home = () => {
  return (
    <main className="font-roboto  bg-[#] text-white">
      <Navbar/>
      <HeroSection />
      <ServiceSection />
      <ContactSection />
    </main>
  );
};

export default Home;
