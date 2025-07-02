'use client';

import React from 'react';
import Image from 'next/image';

const AboutSection = () => {
  return (
    <main className="bg-[#14376d]  text-white py-16 px-6 font-roboto">
      <div className="max-w-7xl mx-auto">
        <section className="text-center space-y-8">
          <h1 className="text-4xl font-bold text-[white] ">À propos de Digibiz Agency</h1>
          <p className="text-lg text-white  max-w-3xl mx-auto">
            Nous sommes une agence innovante spécialisée dans le digital, l’intelligence artificielle et les services technologiques sur mesure. Notre objectif est d’accompagner les entrepreneurs et entreprises africaines dans leur transformation numérique.
          </p>
          <div className="mt-12 grid md:grid-cols-2 gap-10 items-center">
            <Image src="/logo.jpg" alt="Notre équipe" width={600} height={350} className="rounded-lg object-cover w-full" />
            <ul className="space-y-4 text-left text-white">
              <li>🌍 Expertise dans le digital et l’international</li>
              <li>🤖 Solutions IA innovantes et accessibles</li>
              <li>🎓 Accompagnement & formation personnalisée</li>
              <li>📈 Engagement envers les résultats clients</li>
            </ul>
          </div>
        </section>
      </div>
    </main>
  );
};

export default AboutSection;
