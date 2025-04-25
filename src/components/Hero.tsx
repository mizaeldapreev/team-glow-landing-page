import React from 'react';
import { ArrowRight } from 'lucide-react';
const Hero = () => {
  return <section className="pt-12 pb-16 px-4 min-h-screen flex items-center relative overflow-hidden">
      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="animate-fade-in">
          <div className="relative mb-12">
            <h1 className="md:text-6xl lg:text-7xl leading-tight text-4xl text-center font-extrabold">
              Transforme seu time no maior motor de 
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-landing-green via-emerald-400 to-emerald-300"> crescimento da sua empresa</span>
            </h1>
            
            {/* New CTA button right after headline */}
            <div className="mt-8">
              <a href="#ebook" className="cta-button group flex items-center gap-2 text-xl w-fit">
                Transformar meu time agora
                <ArrowRight size={20} className="transform transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
          
          <div className="space-y-6 text-lg md:text-xl text-white/90 max-w-4xl backdrop-blur-sm bg-black/10 p-8 rounded-2xl border border-white/5 shadow-[0_8px_32px_rgba(0,0,0,0.37)]">
            <p className="relative z-10">
              Pessoas são o principal pilar de todo negócio.<br />
              Todo empreendedor sabe disso — ou pelo menos sente isso na pele. Quando o time está alinhado com o propósito, motivado e estruturado numa cultura forte, o crescimento é inevitável.<br />
              O problema? A realidade não é essa pra todo mundo.
            </p>
            
            <p className="relative z-10">
              A verdade dura é que esse pilar tão essencial virou o maior gargalo.<br />
              Ao invés de impulsionar a empresa, ele trava. Suga energia. Estressa. Desanima.<br />
              Você sente que está andando com uma Ferrari… com o freio de mão puxado.
            </p>
          </div>
          
          <div className="mt-12 flex flex-col md:flex-row gap-5 items-center">
            <a href="#problema" className="text-white/80 hover:text-landing-green transition-colors duration-300 flex items-center gap-2 relative group">
              Descobrir mais
              <ArrowRight size={18} className="text-landing-green transform transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
      
      {/* Enhanced decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-landing-black via-landing-black/95 to-landing-black pointer-events-none"></div>
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-landing-green/20 rounded-full blur-[100px] animate-pulse"></div>
      <div className="absolute bottom-1/4 left-1/4 w-[30rem] h-[30rem] bg-landing-green/10 rounded-full blur-[120px] animate-pulse delay-1000"></div>
      <div className="absolute top-1/3 left-1/2 w-72 h-72 bg-emerald-500/10 rounded-full blur-[80px] animate-pulse delay-500"></div>
    </section>;
};
export default Hero;