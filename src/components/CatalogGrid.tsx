'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Shield, ArrowRight, Activity, Wrench, Settings, CheckCircle2 } from 'lucide-react';
import { generateServiceSlug } from '@/lib/utils';

export type ServiceItem = {
  id: string;
  name: string;
  sku: string;
  category: string;
  price: number;
  image_url: string | null;
  features: string[];
};

interface CatalogGridProps {
  services: ServiceItem[];
  categories: string[];
}

export function CatalogGrid({ services, categories }: CatalogGridProps) {
  const [selectedCategory, setSelectedCategory] = useState('Todos');

  const filteredServices = selectedCategory === 'Todos'
    ? services
    : services.filter(s => s.category === selectedCategory);

  return (
    <div className="bg-neutral-100 py-16">
      <div className="container mx-auto px-6">
        
        {/* Header del Catálogo */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-bold tracking-tight text-neutral-900 mb-4">
              Catálogo de <br/><span className="text-blue-600">Servicios</span>
            </h2>
            <p className="text-neutral-500 text-lg">
              Selecciona una categoría para filtrar los resultados o navega por el inventario completo.
            </p>
          </div>
          
          {/* Pills de Categorías (Interactivas) */}
          <div className="flex overflow-x-auto pb-4 md:pb-0 gap-2 snap-x hide-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`snap-start whitespace-nowrap px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300
                  ${selectedCategory === cat 
                    ? 'bg-neutral-900 text-white shadow-md shadow-neutral-900/20' 
                    : 'bg-white text-neutral-600 border border-neutral-200 hover:border-neutral-300 hover:bg-neutral-50 hover:text-neutral-900'
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Grid de Servicios */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredServices.length > 0 ? (
            filteredServices.map((service) => {
              const slug = generateServiceSlug(service.id, service.name);
              return (
                <Link href={`/servicio/${slug}`} key={service.id} className="group flex flex-col bg-white rounded-2xl border border-neutral-200/60 overflow-hidden hover:shadow-2xl hover:shadow-blue-900/5 hover:-translate-y-1 transition-all duration-300">
                  {/* Card Image */}
                  <div className="aspect-[4/3] w-full bg-neutral-100 relative overflow-hidden">
                    {service.image_url ? (
                      <img 
                        src={service.image_url} 
                        alt={service.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      />
                    ) : (
                      <div className="w-full h-full flex flex-col items-center justify-center text-neutral-400 gap-3">
                        <Wrench className="h-8 w-8 opacity-50" />
                        <span className="text-xs uppercase tracking-widest font-semibold">Sin Imagen</span>
                      </div>
                    )}
                    {/* Overlay Gradient for readability if we put text over image later */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"/>
                  </div>
                  
                  {/* Card Content */}
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex justify-between items-start mb-3">
                      <span className="text-[10px] uppercase tracking-widest font-bold text-neutral-400">
                        {service.sku}
                      </span>
                      <span className="inline-flex items-center rounded-full bg-neutral-100 px-2.5 py-0.5 text-xs font-medium text-neutral-600">
                        {service.category}
                      </span>
                    </div>
                    
                    <h3 className="text-lg font-bold text-neutral-900 mb-2 leading-snug group-hover:text-blue-600 transition-colors">
                      {service.name}
                    </h3>
                    
                    <ul className="mt-4 mb-6 space-y-2 flex-grow">
                      {service.features.slice(0, 2).map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-neutral-500">
                          <CheckCircle2 className="h-4 w-4 text-blue-500 mt-0.5 shrink-0" />
                          <span className="line-clamp-2">{feat}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="pt-4 border-t border-neutral-100 flex items-center justify-between mt-auto">
                      <div className="flex flex-col">
                        <span className="text-xs text-neutral-400 uppercase tracking-wider font-semibold mb-1">Costo Base</span>
                        <span className="text-xl font-black text-neutral-900">
                          ${service.price.toLocaleString('es-MX', { minimumFractionDigits: 2 })} <span className="text-sm font-medium text-neutral-400">MXN</span>
                        </span>
                      </div>
                      
                      <div className="h-10 w-10 rounded-full bg-neutral-50 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                        <ArrowRight className="h-5 w-5" />
                      </div>
                    </div>
                  </div>
                </Link>
              )
            })
          ) : (
            <div className="col-span-full py-20 flex flex-col items-center justify-center text-center bg-white rounded-3xl border border-neutral-200 border-dashed">
              <Activity className="h-12 w-12 text-neutral-300 mb-4" />
              <h3 className="text-xl font-bold text-neutral-900 mb-2">No hay servicios en esta categoría</h3>
              <p className="text-neutral-500 max-w-sm">Intenta seleccionando otra categoría o limpiando los filtros para ver nuestro inventario completo.</p>
              <button 
                onClick={() => setSelectedCategory('Todos')}
                className="mt-6 px-6 py-2.5 bg-neutral-900 text-white rounded-full text-sm font-medium hover:bg-neutral-800 transition-colors"
              >
                Ver todos los servicios
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
