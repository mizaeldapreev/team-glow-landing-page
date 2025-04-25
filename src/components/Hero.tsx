
import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="bg-glow pt-24 pb-16 px-4 min-h-screen flex items-center relative">
      <div className="container mx-auto max-w-5xl">
        <div className="animate-fade-in">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold mb-8 leading-tight">
            Transforme seu time no maior motor de 
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-landing-green to-emerald-500"> crescimento da sua empresa</span>
          </h1>
          
          <div className="space-y-6 text-lg md:text-xl text-white/90 max-w-4xl">
            <p>
              Pessoas são o principal pilar de todo negócio.<br />
              Todo empreendedor sabe disso — ou pelo menos sente isso na pele. Quando o time está alinhado com o propósito, motivado e estruturado numa cultura forte, o crescimento é inevitável.<br />
              O problema? A realidade não é essa pra todo mundo.
            </p>
            
            <p>
              A verdade dura é que esse pilar tão essencial virou o maior gargalo.<br />
              Ao invés de impulsionar a empresa, ele trava. Suga energia. Estressa. Desanima.<br />
              Você sente que está andando com uma Ferrari… com o freio de mão puxado.
            </p>
          </div>
          
          <div className="mt-12 flex flex-col md:flex-row gap-5 items-center">
            <a href="#ebook" className="cta-button flex items-center gap-2 w-full md:w-auto justify-center">
              Quero transformar meu time
              <ArrowRight size={18} />
            </a>
            <a href="#problema" className="text-white/80 hover:text-landing-green transition-colors duration-300 flex items-center gap-2">
              Descobrir mais
              <ArrowRight size={18} className="text-landing-green" />
            </a>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-landing-black to-transparent"></div>
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-landing-green/10 rounded-full blur-3xl animate-glow"></div>
      <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-landing-green/5 rounded-full blur-3xl animate-glow"></div>
    </section>
  );
};

export default Hero;
