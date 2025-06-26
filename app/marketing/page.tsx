'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const MarketingDigitalPage = () => {
  return (
    <main className="bg-white text-[#001f3f] py-16 px-6 font-roboto">
      <div className="max-w-7xl mx-auto space-y-16">

        {/* Titre principal */}
        <section className="text-center">
          <h1 className="text-4xl font-bold mb-4 text-orange-500">Marketing Digital</h1>
          <p className="text-lg text-[#14376d]">
            Boostez votre visibilité, attirez vos clients idéaux et augmentez vos ventes grâce à nos stratégies digitales personnalisées.
          </p>
        </section>

        {/* 1. Nos Solutions */}
        <section>
          <h2 className="text-2xl font-semibold mb-6 text-orange-500">Nos Solutions Digitales</h2>
          <div className="grid md:grid-cols-2 gap-10">
            <div className="space-y-2">
              <Image src="/assets/marketing/pub2.jpg" alt="Publicité réseaux" width={600} height={300} className="rounded-lg w-full object-cover" />
              <h3 className="text-xl font-bold text-[#001f3f]">Publicité ciblée sur les réseaux</h3>
              <p className="text-[#14376d]">Campagnes Facebook, Instagram, TikTok avec ciblage avancé.</p>
            </div>
            <div className="space-y-2">
              <Image src="/assets/marketing/landing2.jpg" alt="Sites Web" width={600} height={300} className="rounded-lg w-full object-cover" />
              <h3 className="text-xl font-bold text-[#001f3f]">Pages de vente / landing pages</h3>
              <p className="text-[#14376d]">Pages optimisées pour la conversion avec design professionnel.</p>
            </div>
            <div className="space-y-2">
              <Image src="/assets/marketing/email2.jpg" alt="Emailing et SMS" width={600} height={300} className="rounded-lg w-full object-cover" />
              <h3 className="text-xl font-bold text-[#001f3f]">Email marketing & SMS automation</h3>
              <p className="text-[#14376d]">Fidélisation, relance, newsletters : tout est automatisé.</p>
            </div>
            <div className="space-y-2">
              <Image src="/assets/marketing/community.jpg" alt="Community management" width={600} height={300} className="rounded-lg w-full object-cover" />
              <h3 className="text-xl font-bold text-[#001f3f]">Community management</h3>
              <p className="text-[#14376d]">Gestion quotidienne de vos pages avec contenu et modération.</p>
            </div>
          </div>
        </section>

        {/* 2. Résultats Clients */}
        <section>
          <h2 className="text-2xl font-semibold mb-6 text-orange-500">Ils nous ont fait confiance</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {['Sarah', 'Kevin', 'Amina'].map((name, i) => (
              <div key={i} className="bg-[#f5f7fa] p-6 rounded shadow text-sm text-[#14376d]">
                <p className="mb-2">“Grâce à leur stratégie digitale, mes ventes ont doublé en 1 mois.”</p>
                <span className="font-semibold">— {name}</span>
              </div>
            ))}
          </div>
        </section>

        {/* 3. Appel à l'action */}
        <section className="text-center">
          <Link
            href="https://wa.me/237621721682"
            target="_blank"
            className="inline-block bg-orange-500 text-white px-8 py-4 rounded-full hover:bg-orange-600 transition text-lg"
          >
            📞 Discutons de votre stratégie sur WhatsApp
          </Link>
        </section>

      </div>
    </main>
  );
};

export default MarketingDigitalPage;
