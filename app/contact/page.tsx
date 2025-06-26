'use client';

import React from 'react';
import Link from 'next/link';

const ContactPage = () => {
  return (
    <main className="bg-white text-[#001f3f] py-16 px-6 font-roboto">
      <div className="max-w-5xl mx-auto">
        <section className="text-center">
          <h1 className="text-4xl font-bold text-orange-500 mb-6">Contactez-nous</h1>
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
              <button type="submit" className="bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition">
                Envoyer
              </button>
            </form>

            <div className="space-y-4 text-left text-[#14376d] text-lg">
              <p>📍 Siège : Yaoundé, Cameroun</p>
              <p>📞 Téléphone : +237 621 721 682</p>
              <p>📧 Email : contact@digibizagency.com</p>
              <Link
                href="https://wa.me/237621721682"
                target="_blank"
                className="inline-block mt-4 bg-[#001f3f] text-white px-6 py-2 rounded-full hover:bg-[#003366]"
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
