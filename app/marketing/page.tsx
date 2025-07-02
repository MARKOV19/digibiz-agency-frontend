'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import MarketingDigitalSection from '@/components/marketing';

const MarketingDigitalPage = () => {
  return (
    <main className="">
      <Navbar />

      {/* Section des services */}
      <MarketingDigitalSection />

     
    </main>
  );
};

export default MarketingDigitalPage;
