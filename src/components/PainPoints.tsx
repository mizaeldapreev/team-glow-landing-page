import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

const PainPoints = () => {
  return (
    <section id="problema" className="illuminated-section py-20 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            E por trás desse travamento silencioso, existe um inimigo invisível: 
            <span className="text-landing-green ml-2">a cultura solitária.</span>
          </h2>
          
          <p className="text-lg md:text-xl text-white/90">
            A tecnologia aproximou os processos, mas afastou as pessoas. O resultado é um time que trabalha junto, mas não está junto. Ninguém se conecta de verdade. A empresa vira um amontoado de tarefas — sem alma, sem brilho, sem propósito.
          </p>
          
          <div className="mt-8">
            <p className="text-lg md:text-xl text-white/90">
              Esse conteúdo é pra você, empreendedor que já tem funcionários e carrega tudo nas costas.<br />
              Que já entendeu que o problema não é só gente…<br />
              É a estrutura invisível da cultura interna.
            </p>
          </div>
        </div>
        
        {/* Pain points section */}
        <div className="bg-landing-dark rounded-xl p-8 border border-white/10 shadow-xl backdrop-blur-sm">
          <h3 className="text-2xl md:text-3xl font-bold mb-8">Você vive algumas dessas dores?</h3>
          
          <ul className="space-y-4 mb-8">
            {[
              "Seus funcionários fazem o básico, sem vontade.",
              "A rotatividade é alta, todo mês alguém bom vai embora.",
              "Se você delega, tudo volta.",
              "O time parece indiferente ao propósito da empresa.",
              "Falta iniciativa. Ninguém age sem ordem.",
              "E no fundo… parece que só você se importa de verdade."
            ].map((pain, index) => (
              <li key={index} className="flex items-start gap-3">
                <div className="h-6 w-6 rounded-full bg-landing-green/20 flex items-center justify-center mt-1">
                  <div className="h-3 w-3 rounded-full bg-landing-green"></div>
                </div>
                <span className="text-lg">{pain}</span>
              </li>
            ))}
          </ul>
          
          <p className="text-lg mb-8">
            Essas dores drenam sua energia. Desaceleram o crescimento.<br />
            E te fazem perguntar: <span className="italic">"Será que sou eu o problema?"</span>
          </p>
          
          <p className="text-xl font-bold mb-4">
            Não é você.<br />
            É o modelo ultrapassado de cultura que você herdou sem perceber.
          </p>
          
          <div className="mt-8">
            <a href="#ebook" className="cta-button inline-flex items-center gap-2">
              Quero a solução agora
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="section-divider max-w-4xl mx-auto"></div>
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-landing-green/5 rounded-full blur-[120px] animate-glow"></div>
      <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-landing-green/10 rounded-full blur-[100px] animate-glow"></div>
    </section>
  );
};

export default PainPoints;
