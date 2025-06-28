'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
const message = encodeURIComponent("Bonjour, je souhaite discuter d'un devis.\n\nEnvoyé depuis le site DIGIBIZ");
const link = `https://wa.me/237650781725?text=${message}`;
const GraphismeDeveloppementPage = () => {
  return (
    <main className="bg-white text-[#001f3f] py-16 px-6 font-roboto">
      <div className="max-w-7xl mx-auto space-y-16">

        {/* Titre principal */}
        <section className="text-center">
          <h1 className="text-4xl font-bold mb-4 text-orange-500">Graphisme & Développement</h1>
          <p className="text-lg text-[#14376d]">
            De la création visuelle à la conception de sites web et d&rsquo;applications, nous donnons vie à vos idées avec style et performance.
          </p>
        </section>

        {/* 1. Nos Services */}
        <section>
          <h2 className="text-2xl font-semibold mb-6 text-orange-500">Nos Prestations</h2>
          <div className="grid md:grid-cols-2 gap-10">
             <div className="space-y-2">
              <Image src="/assets/services/design/siteweb.jpg" alt="Site web" width={600} height={300} className="rounded-lg w-full object-cover" />
              <h3 className="text-xl font-bold text-[#001f3f]">Sites web vitrines & e-commerce</h3>
              <p className="text-[#14376d]">Sites responsives, optimisés pour le SEO, avec système de paiement intégré.</p>
            </div>
            <div className="space-y-2">
              <Image src="/assets/services/design/flyer.jpg" alt="Flyers et affiches" width={600} height={300} className="rounded-lg w-full object-cover" />
              <h3 className="text-xl font-bold text-[#001f3f]">Flyers, affiches, bannières</h3>
              <p className="text-[#14376d]">Visuels impactants pour vos campagnes marketing en ligne ou imprimées.</p>
            </div>
            <div className="space-y-2">
              <Image src="/assets/services/design/logo.jpg" alt="Création de logo" width={600} height={300} className="rounded-lg w-full object-cover" />
              <h3 className="text-xl font-bold text-[#001f3f]">Création de logo & identité visuelle</h3>
              <p className="text-[#14376d]">Logo, charte graphique, carte de visite, identité de marque complète.</p>
            </div>
            <div className="space-y-2">
              <Image src="/assets/services/design/mobile.jpg" alt="Applications" width={600} height={300} className="rounded-lg w-full object-cover" />
              <h3 className="text-xl font-bold text-[#001f3f]">Applications web & mobile</h3>
              <p className="text-[#14376d]">Apps personnalisées, ergonomiques et performantes avec tableau de bord.</p>
            </div>
          </div>
        </section>

        {/* 2. Témoignages */}
        <section>
          <h2 className="text-2xl font-semibold mb-6 text-orange-500">Témoignages de clients</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {['Yannick', 'Estelle', 'Daniel'].map((name, i) => (
              <div key={i} className="bg-[#f5f7fa] p-6 rounded shadow text-sm text-[#14376d]">
                <p className="mb-2">“Leur travail graphique a donné une nouvelle image à mon entreprise.”</p>
                <span className="font-semibold">— {name}</span>
              </div>
            ))}
          </div>
        </section>

        {/* 3. Appel à l'action */}
        <section className="text-center">
          <Link
           href={link} 
            target="_blank"
            className="inline-block bg-orange-500 text-white px-8 py-4 rounded-full hover:bg-orange-600 transition text-lg"
          >
            📞 Demandez votre devis sur WhatsApp
          </Link>
        </section>

      </div>
    </main>
  );
};

export default GraphismeDeveloppementPage;
