
import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-landing-black bg-opacity-80 backdrop-blur-md border-b border-white/10 px-6 py-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <span className="text-2xl font-bold text-white">Team<span className="text-landing-green">Glow</span></span>
        </div>
        <div className="hidden md:flex items-center space-x-6">
          <a href="#problema" className="text-white/80 hover:text-landing-green transition-colors duration-300">O Problema</a>
          <a href="#solucao" className="text-white/80 hover:text-landing-green transition-colors duration-300">A Solução</a>
          <a href="#ebook" className="text-white/80 hover:text-landing-green transition-colors duration-300">E-book</a>
          <button className="cta-button text-sm py-2 px-4">Garanta seu acesso</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
