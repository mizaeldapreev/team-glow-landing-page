import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import CountdownTimer from './CountdownTimer';

const Offer = () => {
  return (
    <section id="ebook" className="illuminated-section py-20 px-4 relative overflow-hidden">
      <div className="container mx-auto max-w-5xl">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          {/* E-Book mockup */}
          <div className="w-full md:w-2/5 lg:w-1/3 relative">
            <div className="aspect-w-3 aspect-h-4 relative">
              {/* E-book cover with glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-landing-green/30 to-landing-green/5 rounded-lg blur-xl animate-pulse"></div>
              <div className="relative bg-gradient-to-br from-landing-dark to-black/90 border border-white/20 rounded-lg shadow-2xl overflow-hidden transform rotate-2">
                <div className="p-6 h-full flex flex-col">
                  <div className="mb-4 bg-landing-green/20 w-16 h-1"></div>
                  <h3 className="text-xl font-bold mb-2">Os 7 Pilares</h3>
                  <h2 className="text-3xl font-extrabold text-landing-green mb-6">DO TIME ENGAJADO</h2>
                  <div className="flex-1 flex items-end">
                    <p className="text-sm text-white/70">Uma abordagem científica e prática para transformar seu time no motor da empresa</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Offer details */}
          <div className="w-full md:w-3/5 lg:w-2/3">
            <div className="mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="text-landing-green">O veículo é simples:</span>
              </h2>
              
              <p className="text-xl mb-4">
                Um e-book direto, estratégico, com os <span className="font-bold text-landing-green">7 Pilares do Time Engajado.</span>
              </p>
              
              <div className="flex items-center gap-3 mb-8">
                <span className="text-xl line-through text-white/50">De R$1900</span>
                <span className="text-3xl font-bold">por R$27,90</span>
                <span className="bg-landing-green/20 text-landing-green px-3 py-1 rounded-full text-sm font-bold">
                  só por mais 2 dias
                </span>
              </div>
              
              {/* Countdown timer */}
              <div className="mb-8">
                <CountdownTimer className="bg-landing-dark p-4 rounded-lg border border-landing-green/30" />
              </div>
              
              <div className="mb-8 space-y-4 text-lg">
                <p>
                  Essa não é uma abordagem genérica. É uma estratégia baseada na ciência, pensada para aplicar diretamente ao seu time, ao coração da sua empresa.
                </p>
                <p>
                  É pra quem entendeu que cultura não é "mimimi" — é estratégia.<br />
                  É pra crentes. Pros espertos. Pros que olham além do operacional.
                </p>
                <p>
                  Os descrentes vão continuar apagando incêndio, trocando equipe, e reclamando que "ninguém presta".
                </p>
                <p className="font-bold text-xl">
                  Você escolhe de que lado quer estar.
                </p>
              </div>
              
              {/* Final CTA */}
              <div className="mt-10">
                <a href="#" className="cta-button inline-flex items-center gap-2 text-xl">
                  Garanta seu acesso agora ao e-book
                  <ArrowRight size={20} />
                </a>
                <p className="mt-4 text-white/70">
                  E comece a mudar o rumo da sua empresa, de dentro pra fora.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-landing-green/5 rounded-full blur-[150px] animate-glow"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-radial from-landing-green/5 to-transparent opacity-20"></div>
    </section>
  );
};

export default Offer;
