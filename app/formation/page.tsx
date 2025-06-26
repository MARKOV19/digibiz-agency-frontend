'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const FormationEnLignePage = () => {
  return (
    <main className="bg-white text-[#001f3f] py-16 px-6 font-roboto">
      <div className="max-w-7xl mx-auto space-y-16">

        {/* Titre principal */}
        <section className="text-center">
          <h1 className="text-4xl font-bold mb-4 text-orange-500">Formations en Ligne</h1>
          <p className="text-lg text-[#14376d]">
            Développez vos compétences avec nos formations pratiques en ligne, encadrées par des experts du terrain.
          </p>
        </section>

        {/* 1. Liste de formations */}
        <section>
          <h2 className="text-2xl font-semibold mb-6 text-orange-500">Nos Formations</h2>
          <div className="grid md:grid-cols-2 gap-10">
            <div className="space-y-2">
              <Image src="/assets/formation/web.jpg" alt="Formation Web" width={600} height={300} className="rounded-lg w-full object-cover" />
              <h3 className="text-xl font-bold text-[#001f3f]">Création de site web & applications</h3>
              <p className="text-[#14376d]">Apprenez à créer des sites web modernes avec HTML, CSS, JavaScript, React & plus.</p>
            </div>
            <div className="space-y-2">
              <Image src="/assets/formation/marketing.jpg" alt="Marketing Digital" width={600} height={300} className="rounded-lg w-full object-cover" />
              <h3 className="text-xl font-bold text-[#001f3f]">Marketing digital</h3>
              <p className="text-[#14376d]">Stratégies de publicité, réseaux sociaux, tunnel de vente et copywriting.</p>
            </div>
            <div className="space-y-2">
              <Image src="/assets/formation/ecommerce.jpg" alt="E-commerce" width={600} height={300} className="rounded-lg w-full object-cover" />
              <h3 className="text-xl font-bold text-[#001f3f]">E-commerce & dropshipping</h3>
              <p className="text-[#14376d]">Lancez votre boutique en ligne et maîtrisez les outils de vente digitale.</p>
            </div>
            <div className="space-y-2">
              <Image src="/assets/formation/ia.jpg" alt="Intelligence Artificielle" width={600} height={300} className="rounded-lg w-full object-cover" />
              <h3 className="text-xl font-bold text-[#001f3f]">Intelligence Artificielle</h3>
              <p className="text-[#14376d]">Découvrez les bases de l’IA, des chatbots et de l’automatisation avec des outils no-code et low-code.</p>
            </div>
          </div>
        </section>

        {/* 2. Témoignages */}
        <section>
          <h2 className="text-2xl font-semibold mb-6 text-orange-500">Témoignages</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {['Justine', 'Franck', 'Ismael'].map((name, i) => (
              <div key={i} className="bg-[#f5f7fa] p-6 rounded shadow text-sm text-[#14376d]">
                <p className="mb-2">“Une formation pratique, accessible et directement applicable à mon activité.”</p>
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
            🎓 Rejoignez une formation maintenant
          </Link>
        </section>

      </div>
    </main>
  );
};

export default FormationEnLignePage;
