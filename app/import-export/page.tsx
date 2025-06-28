'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import CatalogueProduits from '@/components/catalogue';

const message = encodeURIComponent("Bonjour, je souhaite ensavoir plus sur les importations.\n\nEnvoyé depuis le site DIGIBIZ");
const link = `https://wa.me/237650781725?text=${message}`;

const ImportExportPage = () => {
  return (
    <main className="bg-white text-[#001f3f] py-16 px-6 font-roboto">
      <div className="max-w-7xl mx-auto space-y-16">

        {/* Titre principal */}
        <section className="text-center">
          <h1 className="text-4xl font-bold mb-4 text-orange-500">Service Import-Export</h1>
          <p className="text-lg text-[#14376d]">
            Nous vous accompagnons dans toutes les étapes de l&rsquo;import-export : du sourcing au transport, jusqu’à la livraison finale.
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

        {/* 2. Gal */}
        <section>
     <CatalogueProduits />
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
     {/* Logos circulaires */}
     <div className="flex flex-wrap justify-between gap-6 mb-10">
      <Image src="/assets/partners/yy-cargo.png" alt="yy-cargo" width={80} height={80} className="rounded-full object-cover border-2 border-[#001f3f] p-1" />
      <Image src="/assets/partners/wanslu-shop.png" alt="wanslu-shop" width={80} height={80} className="rounded-full object-cover border-2 border-[#001f3f] p-1" />
      <Image src="/assets/partners/ged.png" alt="ged-services" width={80} height={80} className="rounded-full object-cover border-2 border-[#001f3f] p-1" />
       <Image src="/assets/partners/sap-sap.png" alt="sap-sap" width={80} height={80} className="rounded-full object-cover border-2 border-[#001f3f] p-1" />
       <Image src="/assets/partners/benazo.png" alt="benazo" width={80} height={80} className="rounded-full object-cover border-2 border-[#001f3f] p-1" />
        </div>
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
                <li>Compagnies maritimes (yy-cargo...)</li>
                <li>Entreprises de transit douanier (...)</li>
                <li>Transporteurs locaux  :</li>
                  <ul className="list-inside list-disc ml-6 mt-1 text-sm text-[#14376d]"  >
                    <li>Benazo-sarl congo</li>
                    <li>Ged services benin</li>
                    <li>sap-sap livration cote d&rsquo;ivoire...</li>
                    </ul>  
              </ul>
            </div>
          </div>
        </section>

        {/* 5. CTA WhatsApp */}
        <section className="text-center">
          <Link
           href={link} 
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
