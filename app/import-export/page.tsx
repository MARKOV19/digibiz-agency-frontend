'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const ImportExportPage = () => {
  return (
    <main className="bg-white text-[#001f3f] py-16 px-6 font-roboto">
      <div className="max-w-7xl mx-auto space-y-16">

        {/* Titre principal */}
        <section className="text-center">
          <h1 className="text-4xl font-bold mb-4 text-orange-500">Service Import-Export</h1>
          <p className="text-lg text-[#14376d]">
            Nous vous accompagnons dans toutes les étapes de l'import-export : du sourcing au transport, jusqu’à la livraison finale.
          </p>
        </section>

        {/* 1. Nos Services */}
        <section>
          <h2 className="text-2xl font-semibold mb-6 text-orange-500">Nos Services</h2>
          <div className="grid md:grid-cols-2 gap-10">
            <div className="space-y-2">
              <Image src="/assets/import/sourcing.jpg" alt="Sourcing" width={600} height={300} className="rounded-lg w-full object-cover" />
              <h3 className="text-xl font-bold text-[#001f3f]">Sourcing international</h3>
              <p className="text-[#14376d]">Nous trouvons les meilleurs fournisseurs pour vous en Chine, Turquie, Europe ou Afrique.</p>
            </div>
            <div className="space-y-2">

              <Image src="/assets/import/transport2.jpg" alt="Transport" width={600} height={300} className="rounded-lg w-full object-cover" />
              <h3 className="text-xl font-bold text-[#001f3f]">Transport & Logistique</h3>
              <p className="text-[#14376d]">Transport maritime, aérien, terrestre. Nous suivons vos colis jusqu’à leur livraison.</p>
            </div>
            <div className="space-y-2">
              <Image src="/assets/import/douane.jpg" alt="Douane" width={600} height={300} className="rounded-lg w-full object-cover" />
              <h3 className="text-xl font-bold text-[#001f3f]">Formalités douanières</h3>
              <p className="text-[#14376d]">Déclarations, taxes, documents, nous simplifions la douane pour vous.</p>
            </div>
            <div className="space-y-2">
              <Image src="/assets/import/livraison.jpg" alt="Livraison" width={600} height={300} className="rounded-lg w-full object-cover" />
              <h3 className="text-xl font-bold text-[#001f3f]">Livraison locale</h3>
              <p className="text-[#14376d]">Distribution et transport local jusqu’à vos locaux ou entrepôts.</p>
            </div>
          </div>
        </section>

        {/* 2. Galerie Vidéo / Produits sourcés */}
        <section>
          <h2 className="text-2xl font-semibold mb-6 text-orange-500">Produits Sourcés</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <video controls className="rounded-lg w-full h-64 object-cover">
              <source src="/assets/import/produit.mp4" type="video/mp4" />
              Votre navigateur ne supporte pas la vidéo.
            </video>
            <div className="grid grid-cols-2 gap-4">
              <Image src="/assets/import/produit1.jpg" alt="Produit 1" width={300} height={200} className="rounded object-cover" />
              <Image src="/assets/import/produit2.jpg" alt="Produit 2" width={300} height={200} className="rounded object-cover" />
              <Image src="/assets/import/produit3.jpg" alt="Produit 3" width={300} height={200} className="rounded object-cover" />
              <Image src="/assets/import/produit4.jpg" alt="Produit 4" width={300} height={200} className="rounded object-cover" />
            </div>
          </div>
        </section>

        {/* 3. Témoignages Clients */}
        <section>
          <h2 className="text-2xl font-semibold mb-6 text-orange-500">Témoignages Clients</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {['Ali', 'Vanessa', 'Michel'].map((name, i) => (
              <div key={i} className="bg-[#f5f7fa] p-6 rounded shadow text-sm text-[#14376d]">
                <p className="mb-2">“Service impeccable, colis livré sans souci depuis la Chine jusqu’au Cameroun !”</p>
                <span className="font-semibold">— {name}</span>
              </div>
            ))}
          </div>
        </section>

        {/* 4. Nos Partenaires */}
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-orange-500">Nos Partenaires</h2>
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h3 className="text-xl font-bold mb-2 text-[#001f3f]">Partenaires Sourcing</h3>
              <ul className="list-disc list-inside text-[#14376d]">
                <li>Usines & fournisseurs en Chine</li>
                <li>Fournisseurs électroniques à Dubaï</li>
                <li>Producteurs locaux au Cameroun</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2 text-[#001f3f]">Partenaires Logistique</h3>
              <ul className="list-disc list-inside text-[#14376d]">
                <li>Compagnies maritimes (Maersk, CMA-CGM...,Jfi cargo,cargo Expresse)</li>
                <li>Entreprises de transit douanier (jfi Epresse,bipbip Expresse)</li>
                <li>Transporteurs locaux (Go Livraison, Tika Express,bipbip Expresse ...)</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 5. CTA WhatsApp */}
        <section className="text-center">
          <Link
            href="https://wa.me/237621721682"
            target="_blank"
            className="inline-block bg-orange-500 text-white px-8 py-4 rounded-full hover:bg-orange-600 transition text-lg"
          >
            📞 Discutons de votre projet sur WhatsApp
          </Link>
        </section>

      </div>
    </main>
  );
};

export default ImportExportPage;
