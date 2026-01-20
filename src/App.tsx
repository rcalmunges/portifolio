import React, { useEffect } from 'react';
import { ShieldCheck, ExternalLink } from 'lucide-react';

/**
 * PUBLIC REPOSITORY PLACEHOLDER
 * 
 * Este arquivo serve como ponto de entrada para a versão pública do repositório.
 * O código real reside em um ambiente privado para proteção de propriedade intelectual.
 */

interface PortfolioProps {
  liveUrl: string;
  developer: string;
}

const PortfolioRedirect: React.FC<PortfolioProps> = ({ liveUrl, developer }) => {
  
  useEffect(() => {
    // Opcional: Redirecionamento automático
    // window.location.href = liveUrl;
    console.log(`Welcome to ${developer}'s public repo structure.`);
  }, [liveUrl, developer]);

  return (
    <div className="min-h-screen bg-slate-900 text-white flex flex-col items-center justify-center p-4">
      <div className="max-w-md w-full bg-slate-800 p-8 rounded-2xl border border-slate-700 shadow-2xl text-center">
        
        <div className="w-20 h-20 bg-indigo-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
          <ShieldCheck className="text-indigo-400 w-10 h-10" />
        </div>

        <h1 className="text-2xl font-bold mb-2">Repositório Público</h1>
        <p className="text-slate-400 mb-6">
          O código-fonte completo deste projeto é privado. Esta estrutura existe para demonstrar a stack tecnológica (React, TS, Tailwind).
        </p>

        <a 
          href={liveUrl} 
          className="inline-flex items-center justify-center gap-2 w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          Acessar Projeto Online <ExternalLink size={18} />
        </a>
        
        <div className="mt-6 pt-6 border-t border-slate-700 text-xs text-slate-500 font-mono">
          Developed by {developer}
        </div>
      </div>
    </div>
  );
};

function App() {
  return (
    <PortfolioRedirect 
      liveUrl="https://www.robsoncalmunges.dreamsdesigner.com.br" 
      developer="Robson Calmunges"
    />
  );
}

export default App;