'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import Image from 'next/image';
import Link from 'next/link';

const images = Array.from({ length: 1 }, (_, i) => `/carousel/digibiz-${i + 1}.jpg`);

const HeroSection = () => {
  return (
    <section className="relative w-full h-[90vh] overflow-hidden">
      {/* Swiper carousel */}
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        loop={true}
        slidesPerView={1}
        className="w-full h-full"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index} className="relative w-full h-full">
            <Image
              src={src}
              alt={`Image ${index + 1}`}
              fill
              className="object-cover w-full h-full"
              priority={index === 0}
            />

            {/* Texte superposé sur l'image */}
            <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center px-4">
              <h1 className="text-4xl md:text-5xl font-bold text-orange-400 mb-4">
                LE FUTUR DES AFFAIRES COMMENCE ICI
              </h1>
              <p className="text-lg md:text-xl text-white mb-6">
                À l’ère du digital et de l’innovation
              </p>
              <Link
                href="/contact"
                className="bg-orange-500 text-white px-6 py-3 rounded-full hover:bg-orange-600 transition"
              >
                En savoir plus
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HeroSection;
