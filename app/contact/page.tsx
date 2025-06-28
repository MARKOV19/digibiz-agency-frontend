'use client';

import React from 'react';
import Link from 'next/link';

const message = encodeURIComponent("Bonjour,\n\nEnvoyé depuis le site DIGIBIZ");
const ContactPage = () => {
  return (
    <main className="bg-white text-[#001f3f] py-16 px-6 font-roboto">
      <div className="max-w-5xl mx-auto">
        <section className="text-center">
          <h1 className="text-4xl font-bold text-[#001f3f] mb-6">Contactez-nous</h1>
          <p className="text-lg text-[#14376d] mb-12 max-w-2xl mx-auto">
            Une question ? Un projet ? Discutons ensemble pour faire avancer vos idées grâce à nos solutions digitales et IA.
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            <form className="space-y-6 bg-[#f5f7fa] p-6 rounded-lg shadow-md text-left">
              <div>
                <label className="block mb-1 font-semibold">Nom</label>
                <input type="text" className="w-full border border-gray-300 rounded px-4 py-2" placeholder="Votre nom" />
              </div>
              <div>
                <label className="block mb-1 font-semibold">Email</label>
                <input type="email" className="w-full border border-gray-300 rounded px-4 py-2" placeholder="Votre adresse email" />
              </div>
              <div>
                <label className="block mb-1 font-semibold">Message</label>
                <textarea className="w-full border border-gray-300 rounded px-4 py-2" rows={4} placeholder="Écrivez votre message..."></textarea>
              </div>
              <button type="submit" className="bg-[#14376d] text-white px-6 py-2 rounded-full hover:bg-[#14376d] transition">
                Envoyer
              </button>
            </form>

            <div className="space-y-4 text-left text-[#14376d] text-lg">
              <p>📍 Siège : Yaoundé, Cameroun</p>
              <p>📞 Téléphone : +237 650 781 725</p>
              <p>📞 Téléphone : +237 690 963 570</p>
              <p>📞 Téléphone : +237 674 114 499</p>
              <p>📧 Email : contact@digibizagency.com</p>

              {/* Lien WhatsApp avec message signé */}
              <Link
                 href={`https://wa.me/237650781725?text=${message}`}
                target="_blank"
                className="inline-block mt-4 bg-[#14376d] text-white px-6 py-2 rounded-full hover:bg-[#003366] transition"
              >
                📱 Contacter sur WhatsApp
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default ContactPage;
