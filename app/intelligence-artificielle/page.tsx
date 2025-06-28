'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
const message = encodeURIComponent("Bonjour, je souhaite discuter d'un projet IA sur mesure.\n\nEnvoyé depuis le site DIGIBIZ");
const link = `https://wa.me/237650781725?text=${message}`;

const IntelligenceArtificiellePage = () => {
  return (
    <main className="bg-white text-[#001f3f] py-16 px-6 font-roboto">
      <div className="max-w-7xl mx-auto space-y-16">

        {/* Titre principal */}
        <section className="text-center">
          <h1 className="text-4xl font-bold mb-4 text-orange-500">Intelligence Artificielle</h1>
          <p className="text-lg text-[#14376d]">
            Des solutions IA sur mesure pour automatiser, prédire et optimiser vos activités professionnelles.
          </p>
        </section>

        {/* 1. Solutions IA proposées */}
        <section>
          <h2 className="text-2xl font-semibold mb-6 text-orange-500">Nos Solutions IA</h2>
          <div className="grid md:grid-cols-2 gap-10">
            <div className="space-y-2">
              <Image src="/assets/services/ia/chatbot.jpg" alt="Chatbot IA" width={600} height={300} className="rounded-lg w-full object-cover" />
              <h3 className="text-xl font-bold text-[#001f3f]">Chatbots & Service Client IA</h3>
              <p className="text-[#14376d]">Des assistants virtuels intelligents pour répondre à vos clients 24h/24.</p>
            </div>
            <div className="space-y-2">
              <Image src="/assets/services/ia/automatisation.jpg" alt="Automatisation" width={600} height={300} className="rounded-lg w-full object-cover" />
              <h3 className="text-xl font-bold text-[#001f3f]">Automatisation des tâches</h3>
              <p className="text-[#14376d]">Gagnez du temps grâce à des workflows automatisés, alertes, et synchronisation.</p>
            </div>
            <div className="space-y-2">
              <Image src="/assets/services/ia/analyse.jpg" alt="Analyse prédictive" width={600} height={300} className="rounded-lg w-full object-cover" />
              <h3 className="text-xl font-bold text-[#001f3f]">Analyse de données & prédiction</h3>
              <p className="text-[#14376d]">Des tableaux de bord intelligents pour prédire vos ventes et optimiser vos décisions.</p>
            </div>
            <div className="space-y-2">
              <Image src="/assets/services/ia/vision.jpg" alt="Vision par ordinateur" width={600} height={300} className="rounded-lg w-full object-cover" />
              <h3 className="text-xl font-bold text-[#001f3f]">Vision par ordinateur</h3>
              <p className="text-[#14376d]">Reconnaissance d&rsquo;objets, analyse vidéo, contrôle qualité visuel automatisé.</p>
            </div>
          </div>
        </section>

        {/* 2. Témoignages */}
        <section>
          <h2 className="text-2xl font-semibold mb-6 text-orange-500">Témoignages de clients</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {['Claire', 'Jacques', 'Fatou'].map((name, i) => (
              <div key={i} className="bg-[#f5f7fa] p-6 rounded shadow text-sm text-[#14376d]">
                <p className="mb-2">“Grâce à leur assistant IA, notre service client est plus rapide et disponible 24/7.”</p>
                <span className="font-semibold">— {name}</span>
              </div>
            ))}
          </div>
        </section>

        {/* 3. Appel à l'action */}
        <section className="text-center">
          <Link
            href="https://wa.me/237650781725"
            target="_blank"
            className="inline-block bg-orange-500 text-white px-8 py-4 rounded-full hover:bg-orange-600 transition text-lg"
          >
            🤖 Parlons de votre projet IA sur WhatsApp
          </Link>
        </section>

      </div>
    </main>
  );
};

export default IntelligenceArtificiellePage;
