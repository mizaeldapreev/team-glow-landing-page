import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-20 pb-16 px-4 min-h-screen flex items-center relative">
      <div className="container mx-auto max-w-5xl">
        <div className="animate-fade-in space-y-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
            Transforme seu time no maior motor de 
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-landing-green to-emerald-500"> crescimento da sua empresa</span>
          </h1>
          
          <div className="space-y-8 text-lg md:text-xl text-white/90 max-w-4xl">
            <p className="leading-relaxed">
              Pessoas são o principal pilar de todo negócio.<br />
              Todo empreendedor sabe disso — ou pelo menos sente isso na pele. Quando o time está alinhado com o propósito, motivado e estruturado numa cultura forte, o crescimento é inevitável.
            </p>
            <p>O problema? A realidade não é essa pra todo mundo.</p>
            
            <div className="py-6">
              <a href="#ebook" className="cta-button inline-flex items-center gap-2">
                Quero transformar meu time
                <ArrowRight size={18} />
              </a>
            </div>
            
            <p className="leading-relaxed">
              A verdade dura é que esse pilar tão essencial virou o maior gargalo.<br />
              Ao invés de impulsionar a empresa, ele trava. Suga energia. Estressa. Desanima.<br />
              Você sente que está andando com uma Ferrari… com o freio de mão puxado.
            </p>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-landing-black to-transparent"></div>
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-landing-green/10 rounded-full blur-3xl animate-glow"></div>
      <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-landing-green/5 rounded-full blur-3xl animate-glow"></div>
    </section>
  );
};

export default Hero;
