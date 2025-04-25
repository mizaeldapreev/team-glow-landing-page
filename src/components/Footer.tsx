
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-landing-dark border-t border-white/10 py-8 px-4">
      <div className="container mx-auto max-w-5xl">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div>
            <span className="text-xl font-bold text-white">Team<span className="text-landing-green">Glow</span></span>
            <p className="text-white/50 text-sm mt-2">© {new Date().getFullYear()} Todos os direitos reservados</p>
          </div>
          
          <div className="mt-4 md:mt-0">
            <ul className="flex gap-6 text-sm">
              <li><a href="#" className="text-white/70 hover:text-landing-green">Política de Privacidade</a></li>
              <li><a href="#" className="text-white/70 hover:text-landing-green">Termos de Uso</a></li>
              <li><a href="#" className="text-white/70 hover:text-landing-green">Contato</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
