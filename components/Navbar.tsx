'use client';

import React, { useState } from 'react';
import Link from 'next/link';

import {  } from '@heroicons/react/outline';

import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen(!open);

  return (
    <nav className="bg-[#001f3f] text-white px-6 py-4 font-roboto sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-white">
          DIGIBIZ AGENCY
        </Link>

        <div className="md:hidden" onClick={toggleMenu}>
          {open ? <XMarkIcon className="w-6 h-6" /> : <Bars3Icon className="w-6 h-6" />}

        </div>

        <ul className="hidden md:flex space-x-6 text-sm uppercase">
          <li><Link href="/">Accueil</Link></li>
          <li><Link href="/services">Services</Link></li>
           <li><Link href="/about">À propos</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
      </div>

      {/* Menu mobile */}
      {open && (
        <ul className="md:hidden mt-4 space-y-4 text-sm bg-[#002c5c] px-4 py-6 rounded">
          <li><Link href="/">Accueil</Link></li>
          <li><Link href="/import-export">Import-Export</Link></li>
          <li><Link href="/marketing">Marketing</Link></li>
          <li><Link href="/graphique-video">Graphisme & Dev</Link></li>
          <li><Link href="/e-commerce">E-Commerce</Link></li>
          <li><Link href="/intelligence-artificielle">IA</Link></li>
          <li><Link href="/formation">Formation</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
