
import React from 'react';

const Solution = () => {
  return (
    <section id="solucao" className="py-20 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            A revolução que estamos propondo é clara:
          </h2>
          <p className="text-2xl md:text-3xl font-bold text-landing-green mb-12">
            Transformar o gargalo das pessoas no motor que vai escalar sua empresa.
          </p>
          
          <div className="space-y-6 text-lg">
            <p>
              Mas aqui vem a grande diferença: <span className="font-bold">não estamos falando de palavras bonitas ou fórmulas prontas.</span><br />
              Estamos falando de <span className="text-landing-green font-bold">ciência aplicada ao coração do seu negócio</span>.
            </p>
            
            <p>
              Antropologia, psicologia e sociologia não são apenas teorias distantes — elas são ferramentas poderosas, que, quando aplicadas corretamente, podem criar uma estrutura interna sólida e transformadora. É ciência que desperta a verdadeira conexão no time. Que cria pertencimento, responsabilidade e iniciativa genuína. Que gera mais produtividade e mais colaboração.
            </p>
          </div>
        </div>
        
        {/* Vision section */}
        <div className="bg-gradient-to-br from-landing-dark to-black/60 rounded-xl p-8 border border-white/10 shadow-xl backdrop-blur-sm">
          <h3 className="text-xl font-bold mb-6">
            Imagine uma cultura onde:
          </h3>
          
          <div className="space-y-4 mb-8">
            <div className="flex gap-4 items-center">
              <div className="h-1 w-10 bg-landing-green"></div>
              <p>As pessoas se engajam não por obrigação, mas por convicção.</p>
            </div>
            <div className="flex gap-4 items-center">
              <div className="h-1 w-10 bg-landing-green"></div>
              <p>As ideias fluem livremente entre a equipe.</p>
            </div>
            <div className="flex gap-4 items-center">
              <div className="h-1 w-10 bg-landing-green"></div>
              <p>A iniciativa é natural e espontânea.</p>
            </div>
            <div className="flex gap-4 items-center">
              <div className="h-1 w-10 bg-landing-green"></div>
              <p>O propósito é mais forte do que qualquer tarefa.</p>
            </div>
          </div>
          
          <p className="text-lg">É esse o futuro que queremos que você crie.</p>
          
          <div className="mt-8 max-w-2xl">
            <p className="mb-6">
              No fim, o que você quer não é só um time que entrega.<br />
              Você quer um time que veste a camisa.<br />
              Que trabalha com brilho no olho.<br />
              Que entende o propósito e constrói junto.<br />
              Um ambiente onde as pessoas querem ficar.<br />
              Onde você pode delegar com tranquilidade.<br />
              E sentir orgulho da equipe que está formando.
            </p>
            
            <p className="font-bold text-xl">
              If esse é o futuro que você quer, o caminho começa agora.
            </p>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="section-divider max-w-4xl mx-auto"></div>
      <div className="absolute top-1/3 right-1/5 w-64 h-64 bg-landing-green/10 rounded-full blur-3xl animate-glow"></div>
    </section>
  );
};

export default Solution;
