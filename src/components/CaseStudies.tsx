import React from 'react';
import { ChevronRight } from 'lucide-react';

const cases = [
  {
    title: 'Otimização Fiscal para Empresa de Grande Porte',
    description: 'Implementação bem-sucedida do sistema Thomson Reuters, resultando em 40% de redução em tempo operacional.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
  },
  {
    title: 'Automação de Processos de Comércio Exterior',
    description: 'Redução de 60% no tempo de processamento de documentos de importação.',
    image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
  },
];

const CaseStudies = () => {
  return (
    <section id="cases" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Cases de Sucesso</h2>
          <p className="mt-4 text-lg text-gray-600">
            Conheça algumas das nossas histórias de sucesso
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {cases.map((case_) => (
            <div
              key={case_.title}
              className="flex flex-col overflow-hidden rounded-lg shadow-lg"
            >
              <div className="flex-shrink-0">
                <img className="h-48 w-full object-cover" src={case_.image} alt={case_.title} />
              </div>
              <div className="flex flex-1 flex-col justify-between bg-white p-6">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900">{case_.title}</h3>
                  <p className="mt-3 text-base text-gray-600">{case_.description}</p>
                </div>
                <div className="mt-6">
                  <a
                    href="#"
                    className="flex items-center text-blue-600 hover:text-blue-500"
                  >
                    Saiba mais
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;