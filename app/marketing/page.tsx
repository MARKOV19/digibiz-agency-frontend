'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const message = encodeURIComponent("Bonjour, je souhaite discuter d'une stratégie marketing.\n\nEnvoyé depuis le site DIGIBIZ");
const whatsappLink = `https://wa.me/237650781725?text=${message}`;

const MarketingDigitalPage = () => {
  return (
    <main className="bg-[#14376d] -[#001f3f] text-white py-16 px-4 sm:px-6 lg:px-8 font-roboto">
      <div className="max-w-7xl mx-auto space-y-20">
        {/* Hero Section */}
   {/* Hero Section avec texte à gauche */}
<section className="relative w-full h-[300px] sm:h-[400px] lg:h-[500px] rounded-xl overflow-hidden shadow">
  <Image
    src="/assets/marketing/hero-marketing.jpg"
    alt="Marketing Digital Hero"
    fill
    className="object-cover w-full h-full"
    priority
  />

  {/* Overlay sombre (optionnel, pour lisibilité) */}
  <div className="absolute inset-0 bg-black/30" />

  {/* Texte à gauche */}
  <div className="absolute inset-0 flex items-center px-6 sm:px-12 lg:px-20">
    <div className="text-left text-white max-w-xl space-y-4">
      <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold">
        Le Marketing Digital qui transforme votre business
      </h1>
      <p className="text-sm sm:text-base lg:text-lg">
        Publicité ciblée, automatisation, contenu viral : une stratégie complète pour faire décoller votre activité.
      </p>
    </div>
  </div>

  {/* Appel à l’action en bas à droite */}
  <div className="absolute bottom-35 right-4 space-y-2">
    <Link
      href={whatsappLink}
      target="_blank"
      className="inline-block bg-orange-500 text-white px-8 py-4 rounded-full hover:bg-orange-600 transition text-lg"
    >
      📞 Discutons de votre stratégie sur WhatsApp 
    </Link>
  </div>
</section>



     {/* Nos Solutions */}
<section>
  <h2 className="text-2xl sm:text-3xl font-semibold mb-10 text-white text-center">Nos Solutions Digitales</h2>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
    {[
      {
        title: "Publicité ciblée",
        image: "/assets/marketing/pub.jpg",
        desc: "Campagnes Facebook, Instagram, TikTok avec ciblage avancé.",
      },
      {
        title: "Pages de vente",
        image: "/assets/marketing/page.jpg",
        desc: "Pages optimisées pour la conversion avec design professionnel.",
      },
      {
        title: "Email & SMS automation",
        image: "/assets/marketing/emial.jpg",
        desc: "Relances automatisées, newsletters, séquences intelligentes.",
      },
      {
        title: "Community management",
        image: "/assets/marketing/cm.jpg",
        desc: "Gestion de vos réseaux avec contenu régulier et modération.",
      },
    ].map((item, index) => (
      <div key={index} className="space-y-4">
        <Image
          src={item.image}
          alt={item.title}
          width={600}
          height={300}
          className="rounded-lg w-full object-cover shadow"
        />
        <h3 className="text-xl font-bold text-[white]">{item.title}</h3>
        <p className="text-[white]">{item.desc}</p>
      </div>
    ))}
  </div>
</section>


        {/* Pourquoi choisir Digibiz */}
        <section>
          <h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-white text-center">Pourquoi choisir Digibiz Agency ?</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 text-[white] list-disc pl-6">
            <li>Stratégies sur-mesure selon votre audience</li>
            <li>Automatisations puissantes pour gagner du temps</li>
            <li>Résultats mesurables et optimisation continue</li>
            <li>Support WhatsApp réactif & humain</li>
          </ul>
        </section>

        {/* Statistiques clés */}
        <section className="grid grid-cols-1 sm:grid-cols-3 text-center gap-10">
          <div>
            <p className="text-4xl font-bold text-orange-500">+300%</p>
            <p className="text-[white]">Taux de conversion moyen</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-orange-500">+1M</p>
            <p className="text-[white]">Utilisateurs atteints</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-orange-500">98%</p>
            <p className="text-[white]">Clients satisfaits</p>
          </div>
        </section>

        {/* Témoignages */}
        <section>
          <h2 className="text-2xl sm:text-3xl font-semibold mb-10 text-orange-500 text-center">Ils nous ont fait confiance</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: "Sarah", photo: "/avatars/sarah.jpg", text: "Grâce à leur stratégie, mes ventes ont doublé en un mois." },
              { name: "Kevin", photo: "/avatars/kevin.jpg", text: "J’ai eu 4x plus de clients en 2 semaines." },
              { name: "Amina", photo: "/avatars/amina.jpg", text: "Super équipe, professionnelle et efficace." },
            ].map((client, index) => (
              <div key={index} className="bg-[#f5f7fa] p-6 rounded shadow text-sm text-[#14376d] flex gap-4">
                <Image src={client.photo} alt={client.name} width={48} height={48} className="rounded-full object-cover" />
                <div>
                  <p className="mb-2">“{client.text}”</p>
                  <span className="font-semibold">— {client.name}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Vidéo explicative */}
        <section className="text-center space-y-4">
          <h2 className="text-2xl sm:text-3xl font-semibold text-orange-500">Découvrez notre méthode en vidéo</h2>
          <div className="aspect-video max-w-4xl mx-auto rounded-xl overflow-hidden shadow">
            <video controls className="w-full h-full object-cover">
              <source src="/assets/marketing/demo.mp4" type="video/mp4" />
              Votre navigateur ne supporte pas la vidéo.
            </video>
          </div>
        </section>

        {/* F.A.Q. */}
        <section>
          <h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-orange-500 text-center">Foire aux questions</h2>
          <div className="space-y-4 max-w-3xl mx-auto">
            {[
              {
                q: "Combien de temps pour voir les résultats ?",
                a: "En général 2 à 4 semaines selon votre niche et votre budget pub.",
              },
              {
                q: "Est-ce que je dois avoir un site web ?",
                a: "Non, nous pouvons vous créer une landing page optimisée si besoin.",
              },
              {
                q: "Quels types de business pouvez-vous aider ?",
                a: "E-commerce, services locaux, freelances, coachs, etc.",
              },
            ].map((faq, i) => (
              <details key={i} className="border rounded rounded-2xl px-4 py-3">
                <summary className="cursor-pointer font-semibold text-[white]">{faq.q}</summary>
                <p className="mt-2 text-[white]">{faq.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* Appel à l’action */}
        <section className="text-center space-y-4">
          <Link
            href={whatsappLink}
            target="_blank"
            className="inline-block bg-orange-500 text-white px-8 py-4 rounded-full hover:bg-orange-600 transition text-lg"
          >
            📞 Discutons de votre stratégie sur WhatsApp
          </Link>
          <br />
          <Link href="/contact" className="text-[white] underline hover:text-orange-500">
            📅 Ou prenez rendez-vous ici
          </Link>
        </section>
      </div>
    </main>
  );
};

export default MarketingDigitalPage;
