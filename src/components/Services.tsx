import React from 'react';
import { Shield, Globe, BookOpen, Users } from 'lucide-react';

const services = [
  {
    title: 'Soluções Fiscais',
    description: 'Implementação e consultoria em sistemas fiscais Thomson Reuters',
    icon: Shield,
  },
  {
    title: 'Comércio Exterior',
    description: 'Otimização de processos de importação e exportação',
    icon: Globe,
  },
  {
    title: 'Treinamento',
    description: 'Capacitação completa para sua equipe',
    icon: BookOpen,
  },
  {
    title: 'Consultoria Especializada',
    description: 'Suporte contínuo e personalizado',
    icon: Users,
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Nossos Serviços</h2>
          <p className="mt-4 text-lg text-gray-600">
            Soluções completas para sua empresa
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="relative group bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="absolute -inset-px bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div className="w-12 h-12 rounded-lg bg-blue-600 flex items-center justify-center">
                  <service.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-gray-900">{service.title}</h3>
                <p className="mt-2 text-gray-600">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;