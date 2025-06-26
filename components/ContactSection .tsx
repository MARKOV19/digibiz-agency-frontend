import React from 'react';

const ContactSection = () => {
  return (
    <section className="py-16 bg-[#001f3f] text-center px-4">
      <h2 className="text-3xl font-bold text-white mb-6">Contactez-nous</h2>
      <p className="text-lg text-gray-200 mb-6">
        Pour plus d’informations ou pour discuter de votre projet, contactez-nous.
      </p>
      <a
        href="/contact"
        className="inline-block bg-orange-500 text-white px-6 py-3 rounded-full hover:bg-orange-600 transition"
      >
        Nous contacter
      </a>
    </section>
  );
};

export default ContactSection;
