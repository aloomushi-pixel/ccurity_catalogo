import { supabase } from '@/lib/supabase';
import { Search, ShoppingCart, ChevronRight, Package, ShieldCheck, Zap, Filter } from 'lucide-react';

export const dynamic = 'force-dynamic';

export default async function CatalogPage() {
  const { data: concepts, error } = await supabase
    .from('MasterConcept')
    .select('*')
    .limit(48);

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 selection:bg-blue-500/30">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 border-b border-white/10 bg-neutral-950/80 backdrop-blur-md">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-8 w-8 text-blue-500" />
            <span className="text-xl font-bold tracking-tight text-white">CCURITY <span className="text-blue-500">B2B</span></span>
          </div>
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-400" />
              <input 
                type="text" 
                placeholder="Buscar equipos, modelos, marcas..." 
                className="w-full bg-neutral-900 border border-white/10 rounded-full py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all placeholder:text-neutral-500"
              />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-white/5 rounded-full transition-colors relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute top-0 right-0 h-4 w-4 bg-blue-500 rounded-full text-[10px] flex items-center justify-center font-bold">0</span>
            </button>
            <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-blue-500 to-indigo-600 flex items-center justify-center font-semibold shadow-lg shadow-blue-500/20">
              AD
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070')] bg-cover bg-center opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/80 to-transparent" />
        
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-6 border border-blue-500/20">
              <Zap className="h-3 w-3" /> Catálogo en Tiempo Real
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-neutral-200 to-neutral-500">
              Inventario y <br/>Equipamiento Maestro.
            </h1>
            <p className="text-lg md:text-xl text-neutral-400 max-w-2xl mb-8 leading-relaxed">
              Plataforma exclusiva B2B para integradores y distribuidores. Accede al inventario completo de CCurity con sincronización directa a nuestra base de datos central (Zero-API Pattern).
            </p>
            <div className="flex gap-4">
              <button className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-medium transition-colors shadow-lg shadow-blue-600/20 flex items-center gap-2">
                Explorar Equipos <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold">Conceptos Disponibles</h2>
          <button className="flex items-center gap-2 text-sm text-neutral-400 hover:text-white transition-colors border border-white/10 px-4 py-2 rounded-lg bg-white/5">
            <Filter className="h-4 w-4" /> Filtros
          </button>
        </div>

        {error ? (
          <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-6 text-red-400 text-center flex flex-col items-center gap-3">
            <Zap className="h-8 w-8 text-red-500" />
            <h3 className="font-semibold text-lg text-red-300">Error de Conexión</h3>
            <p className="text-sm opacity-80">{error.message}</p>
            <p className="text-xs opacity-60">Revisa las políticas RLS o las credenciales de Supabase.</p>
          </div>
        ) : !concepts || concepts.length === 0 ? (
          <div className="bg-neutral-900/50 border border-white/5 rounded-xl p-12 text-center flex flex-col items-center gap-4">
            <Package className="h-12 w-12 text-neutral-600" />
            <h3 className="font-semibold text-xl text-neutral-300">No se encontraron conceptos</h3>
            <p className="text-neutral-500 max-w-md">La tabla MasterConcept está vacía o las políticas de seguridad (RLS) no permiten la lectura pública.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {concepts.map((concept: any, index: number) => (
              <div 
                key={concept.id || index} 
                className="group bg-neutral-900/40 border border-white/5 rounded-2xl overflow-hidden hover:bg-neutral-800/60 hover:border-white/10 transition-all duration-300 flex flex-col"
              >
                {/* Image Placeholder */}
                <div className="aspect-[4/3] bg-neutral-950 relative overflow-hidden flex items-center justify-center p-6">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-neutral-900/90 z-10" />
                  {concept.image_url ? (
                    <img 
                      src={concept.image_url} 
                      alt={concept.description || concept.name || 'Concepto'} 
                      className="object-contain w-full h-full group-hover:scale-105 transition-transform duration-500 relative z-0"
                    />
                  ) : (
                    <Package className="h-16 w-16 text-neutral-800 group-hover:scale-110 transition-transform duration-500 relative z-0" />
                  )}
                  {/* Badge */}
                  {concept.brand && (
                    <span className="absolute top-3 left-3 z-20 px-2 py-1 bg-white/10 backdrop-blur-md rounded text-[10px] font-bold uppercase tracking-wider text-neutral-300 border border-white/10">
                      {concept.brand}
                    </span>
                  )}
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col flex-1 relative z-20">
                  <div className="mb-1 text-xs text-blue-400 font-mono">
                    {concept.sku || concept.part_number || concept.model || `SKU-${index.toString().padStart(4, '0')}`}
                  </div>
                  <h3 className="font-medium text-neutral-200 line-clamp-2 text-sm mb-3">
                    {concept.description || concept.name || 'Concepto sin descripción'}
                  </h3>
                  
                  <div className="mt-auto pt-4 border-t border-white/5 flex items-center justify-between">
                    <div>
                      <div className="text-[10px] text-neutral-500 uppercase tracking-wide">Precio Distribuidor</div>
                      <div className="font-bold text-lg text-white">
                        {concept.price || concept.sale_price ? (
                          new Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN' }).format(concept.price || concept.sale_price)
                        ) : (
                          <span className="text-neutral-500 text-sm font-normal">Consultar</span>
                        )}
                      </div>
                    </div>
                    <button className="h-8 w-8 rounded-full bg-blue-500/10 hover:bg-blue-500 text-blue-400 hover:text-white flex items-center justify-center transition-all">
                      <ShoppingCart className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
