'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface ServiceItem {
  title: string;
  description: string;
  href: string;
  image: string;
}

const services: ServiceItem[] = [
  {
    title: 'Import-Export',
    description: 'Sourcing, logistique et approvisionnement mondial',
    href: '/import-export',
    image: '/assets/services/import-export.jpg',
  },
  {
    title: 'Marketing Digital',
    description: 'Publicité en ligne, stratégie de vente',
    href: '/marketing',
    image: '/assets/services/marketing.jpg',
  },
  {
    title: 'Graphisme & Développement',
    description: 'Flyers, logos, vidéos, sites web & apps',
    href: '/graphique-video',
    image: '/assets/services/design-dev.jpg',
  },
  {
    title: 'E-Commerce',
    description: 'Boutiques en ligne, formation, dropshipping',
    href: '/e-commerce',
    image: '/assets/services/e-commerce.jpg',
  },
  {
    title: 'Intelligence Artificielle',
    description: 'Solutions IA sur mesure pour entreprises',
    href: '/intelligence-artificielle',
    image: '/assets/services/IA.jpg',
  },
  {
    title: 'Formation en Ligne',
    description: 'Cours pratiques et formations professionnelles',
    href: '/formation',
    image: '/assets/services/formation.jpg',
  },
];

const ServiceSection: React.FC = () => {
  return (
    <section className="py-16 bg-[#14376d] text-center px-4">
      <h2 className="text-3xl font-bold text-white mb-10">Nos Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {services.map((service, idx) => (
          <Link
            key={idx}
            href={service.href}
            className="bg-[#001f3f]  rounded-xl shadow-lg overflow-hidden hover:scale-[1.02] transition-all duration-300 text-left"
          >
            <div className="flex flex-col">
              <Image
                src={service.image}
                alt={service.title}
                width={600}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-5 text-white">
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-sm text-gray-300">{service.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ServiceSection;
