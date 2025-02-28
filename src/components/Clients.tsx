import React from 'react';

const clients = [
  { name: 'ADATA', logo: 'https://images.unsplash.com/photo-1516387938699-a93567ec168e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80' },
  { name: 'BRF', logo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80' },
  { name: 'Bridgestone', logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80' },
];

const Clients = () => {
  return (
    <section id="clients" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Nossos Clientes</h2>
          <p className="mt-4 text-lg text-gray-600">
            Empresas que confiam em nossa expertise
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {clients.map((client) => (
              <div
                key={client.name}
                className="col-span-1 flex justify-center bg-white py-8 px-8 rounded-lg shadow-sm"
              >
                <img
                  className="max-h-12"
                  src={client.logo}
                  alt={client.name}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;