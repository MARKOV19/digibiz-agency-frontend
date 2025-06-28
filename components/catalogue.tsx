"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";

type Product = {
  id: number;
  name: string;
  category: string;
  image: string;
  features: string;
};

const allProducts: Product[] = [
  {
    id: 1,
    name: 'Smartphone X',
    category: 'Électronique',
    image: '/assets/catalogue/iphone.avif',
    features: '128Go, 6Go RAM, Dual SIM',
  },
  {
    id: 2,
    name: 'Casque Bluetooth',
    category: 'Électronique',
    image: '/assets/catalogue/casque.avif',
    features: 'Sans fil, réduction de bruit',
  },
  {
    id: 3,
    name: 'Crème visage',
    category: 'Cosmétiques',
    image: '/assets/catalogue/creme.avif',
    features: 'Aloe vera, hydratante',
  },
  {
    id: 4,
    name: 'Parfum Luxe',
    category: 'Cosmétiques',
    image: '/assets/catalogue/parfum.avif',
    features: '50ml, senteur florale',
  },
  {
    id: 5,
    name: 'Riz',
    category: 'Agroalimentaire',
    image: '/assets/catalogue/riz.avif',
    features: 'Sac de 25 kg, Vietnam',
  },
  {
    id: 6,
    name: 'Huile végétale',
    category: 'Agroalimentaire',
    image: '/assets/catalogue/huile.avif',
    features: 'Carton de 12 x 1L',
  },
  {
    id: 7,
    name: 'Drone',
    category: 'Électronique',
    image: '/assets/catalogue/drone.avif',
    features: '4k drone Fpv Avion',
  },
  {
    id: 8,
    name: 'Savon',
    category: 'Cosmétiques',
    image: '/assets/catalogue/savon.avif',
    features: 'Savon de bain et de toilette',
  },
  {
    id: 9,
    name: 'Farine',
    category: 'Agroalimentaire',
    image: '/assets/catalogue/farine.avif',
    features: 'Sac de farine de blé 100kg',
  },
  {
    id: 10,
    name: 'Machine de Creme glacée',
    category: 'Machines industrielles et équipements commerciale',
    image: '/assets/catalogue/creme1.avif',
    features: 'Congélateur de creme glacée 50l-1000l',
  },
  {
    id: 11,
    name: 'Machine demballage automatique',
    category: 'Machines industrielles et équipements commerciale',
    image: '/assets/catalogue/creme2.avif',
    features: 'Machine de remplissage et de scellement automatique',
  },
  {
    id: 12,
    name: 'Machine à crème',
    category: 'Machines industrielles et équipements commerciale',
    image: '/assets/catalogue/creme3.avif',
    features: 'Machine à crème glacée 3 saveures',
  },
  {
    id: 13,
    name: 'Machine à briques',
    category: 'contruction et immobilier',
    image: '/assets/catalogue/brique1.avif',
    features: 'Machine de fabrication de briques',
  },
  {
    id: 14,
    name: 'Machine à briques',
    category: 'contruction et immobilier',
    image: '/assets/catalogue/brique2.avif',
    features: 'Machine de fabrication de briques',
  },
  {
    id: 15,
    name: 'Machine à briques',
    category: 'contruction et immobilier',
    image: '/assets/catalogue/brique3.avif',
    features: 'Machine de fabrication de briques',
  },
  {
    id: 16,
    name: 'Machine à peinture',
    category: 'contruction et immobilier',
    image: '/assets/catalogue/brique4.avif',
    features: 'Machine à peinture',
  },
  {
    id: 17,
    name: 'Machine à crépissage',
    category: 'contruction et immobilier',
    image: '/assets/catalogue/brique5.avif',
    features: 'Machine de randu de platrage de mur automatique',
  },
  {
    id: 18,
    name: 'Machine à briques',
    category: 'contruction et immobilier',
    image: '/assets/catalogue/brique6.avif',
    features: 'Machine de fabrication de briques 5briques en 35secondes',
  },
  {
    id: 19,
    name: 'Voiture Toyota',
    category: 'Vehicules et transport',
    image: '/assets/catalogue/voiture1.avif',
    features: '',
  },
  {
    id: 20,
    name: 'Voiture',
    category: 'Vehicules et transport',
    image: '/assets/catalogue/voiture2.avif',
    features: '',
  },
  {
    id: 21,
    name: 'Voiture',
    category: 'Vehicules et transport',
    image: '/assets/catalogue/voiture3.avif',
    features: '',
  },
  {
    id: 22,
    name: 'BUS',
    category: 'Vehicules et transport',
    image: '/assets/catalogue/bus1.avif',
    features: 'Bus de transport urbain - bus scolaire',
  },
  {
    id: 23,
    name: 'BUS',
    category: 'Vehicules et transport',
    image: '/assets/catalogue/bus2.avif',
    features: 'Bus de transport urbain-bus scolaire',
  },
  {
    id: 24,
    name: 'BUS',
    category: 'Vehicules et transport',
    image: '/assets/catalogue/bus3.avif',
    features: 'Busde transport urbain-bus scolaire',
  },
];


const categories = [
  'Tous',
  'Électronique',
  'Cosmétiques',
  'Agroalimentaire',
  'Machines industrielles et équipements commerciale',
  'contruction et immobilier',
  'Vehicules et transport',
];

const CatalogueProduits = () => {
  const [activeCategory, setActiveCategory] = useState('Tous');
  const [selectedProduct, setSelectedProduct] = useState<null | Product>(null);

  const filteredProducts =
    activeCategory === 'Tous'
      ? allProducts
      : allProducts.filter((p) => p.category === activeCategory);

  const scrollRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    isDragging.current = true;
    startX.current = e.pageX - scrollRef.current.offsetLeft;
    scrollLeft.current = scrollRef.current.scrollLeft;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current || !scrollRef.current) return;
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX.current) * 1;
    scrollRef.current.scrollLeft = scrollLeft.current - walk;
  };

  const handleMouseUp = () => (isDragging.current = false);
  const handleMouseLeave = () => (isDragging.current = false);

  return (
    <section className="px-3 sm:px-4 md:px-6 lg:px-12">
      <h2 className="text-2xl font-semibold text-[#001f3f] mb-2">
        Catalogue de Produits Sourcés
      </h2>
      <p className="text-[#14376d] mb-6">
        Nous importons toutes variétés de produits et vous accompagnons de
        l&rsquo;achat à la livraison.
      </p>

      {/* Filtres avec drag-scroll */}
      <div
        ref={scrollRef}
        className="overflow-x-auto no-scrollbar cursor-grab active:cursor-grabbing select-none"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
      >
        <div className="flex space-x-4 mb-8 w-max min-w-full">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`whitespace-nowrap px-4 py-2 rounded-full font-medium border transition ${
                activeCategory === cat
                  ? 'bg-orange-500 text-white border-orange-500'
                  : 'border-[#001f3f] text-[#14376d] hover:bg-[#001f3f] hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grille des produits responsive */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            onClick={() => setSelectedProduct(product)}
            className="bg-white p-2 sm:p-4 rounded shadow text-center cursor-pointer hover:scale-[1.02] transition-all duration-200"
          >
            <div className="relative w-full pb-[100%] mb-2 overflow-hidden rounded">
              <Image
                src={product.image}
                alt={product.name}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover rounded"
              />
            </div>
            <h4 className="font-semibold text-[#001f3f] text-sm sm:text-base">
              {product.name}
            </h4>
            <p className="text-xs sm:text-sm text-[#14376d]">
              {product.features}
            </p>
          </div>
        ))}
      </div>

      {/* Modale produit */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-lg p-6 max-w-md w-full text-center relative">
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-2 right-4 text-[#14376d] hover:text-red-600 text-2xl"
            >
              &times;
            </button>
            <Image
              src={selectedProduct.image}
              alt={selectedProduct.name}
              width={400}
              height={300}
              className="rounded object-cover mx-auto mb-4"
            />
            <h3 className="text-xl font-bold text-[#001f3f] mb-2">
              {selectedProduct.name}
            </h3>
            <p className="text-[#14376d]">{selectedProduct.features}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default CatalogueProduits;
