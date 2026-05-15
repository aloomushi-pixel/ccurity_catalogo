import { supabase } from '@/lib/supabase';
import { Search, PenTool, Wrench, Shield, Activity, Settings, ArrowRight, Zap, CheckCircle2 } from 'lucide-react';

export const dynamic = 'force-dynamic';

// Mock data to demonstrate the UI if the database connection fails or is empty (due to RLS)
const MOCK_SERVICES = [
  {
    id: 's1',
    name: 'Instalación de Rack de Telecomunicaciones',
    sku: 'SRV-RACK-01',
    category: 'Instalación',
    price: 3500.00,
    image_url: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2000',
    features: ['Montaje físico', 'Peinado de cables', 'Etiquetado norma TIA/EIA']
  },
  {
    id: 's2',
    name: 'Mantenimiento Preventivo CCTV',
    sku: 'SRV-CCTV-MNT',
    category: 'Mantenimiento',
    price: 1200.00,
    image_url: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?q=80&w=2000',
    features: ['Limpieza de lentes', 'Revisión de DVR/NVR', 'Alineación de cámaras']
  },
  {
    id: 's3',
    name: 'Fusión de Fibra Óptica (Por hilo)',
    sku: 'SRV-FIBRA-01',
    category: 'Instalación',
    price: 450.00,
    image_url: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=2000',
    features: ['Fusión térmica', 'Medición con OTDR', 'Certificación básica']
  },
  {
    id: 's4',
    name: 'Configuración de Switch Capa 3',
    sku: 'SRV-NET-SW3',
    category: 'Configuración',
    price: 2800.00,
    image_url: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=2000', // Reusing for aesthetic
    features: ['Creación de VLANs', 'Rutas estáticas/Dinámicas', 'Seguridad de puertos']
  },
  {
    id: 's5',
    name: 'Soporte Técnico Especializado (Hora)',
    sku: 'SRV-SOP-HR',
    category: 'Soporte',
    price: 850.00,
    image_url: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=2000',
    features: ['Diagnóstico en sitio', 'Solución de fallas', 'Asesoría técnica']
  },
  {
    id: 's6',
    name: 'Levantamiento Arquitectónico para Seguridad',
    sku: 'SRV-ARQ-01',
    category: 'Soporte',
    price: 5000.00,
    image_url: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2000',
    features: ['Planos en AutoCAD', 'Cálculo de cobertura', 'Ingeniería de detalle']
  }
];

export default async function ServicesCatalogPage() {
  // We fetch concepts, and we will filter in JS to avoid PostgREST column name crashes
  const { data: dbConcepts, error } = await supabase
    .from('MasterConcept')
    .select('*')
    .limit(100);

  let services = MOCK_SERVICES;
  let usingMockData = true;

  if (!error && dbConcepts && dbConcepts.length > 0) {
    // Attempt to map real DB data if available and has price
    const validConcepts = dbConcepts.filter(c => {
      const p = c.price || c.sale_price || c.unit_price;
      return p !== null && p !== undefined && Number(p) > 0;
    });

    if (validConcepts.length > 0) {
      services = validConcepts.map((c, i) => ({
        id: c.id || `s-${i}`,
        name: c.description || c.name || 'Servicio',
        sku: c.sku || c.part_number || c.model || 'N/A',
        category: c.category || c.brand || 'General',
        price: Number(c.price || c.sale_price || c.unit_price),
        image_url: c.image_url || null,
        features: []
      }));
      usingMockData = false;
    }
  }

  const categories = ['Todos', 'Instalación', 'Mantenimiento', 'Configuración', 'Soporte'];

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900 selection:bg-blue-500/30 font-sans">
      
      {/* Navbar Minimalista */}
      <nav className="sticky top-0 z-50 border-b border-black/5 bg-white/80 backdrop-blur-xl">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-gradient-to-tr from-blue-600 to-cyan-500 flex items-center justify-center shadow-lg shadow-blue-500/20">
              <Shield className="h-5 w-5 text-white" />
            </div>
            <span className="text-2xl font-bold tracking-tight text-neutral-900">
              CCURITY <span className="font-light text-neutral-400">SERVICES</span>
            </span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-500">
            <a href="#" className="text-neutral-900">Mano de Obra</a>
            <a href="#" className="hover:text-neutral-900 transition-colors">Pólizas</a>
            <a href="#" className="hover:text-neutral-900 transition-colors">Certificaciones</a>
          </div>

          <div className="flex items-center gap-4">
            <div className="h-9 w-9 rounded-full bg-neutral-100 border border-black/5 flex items-center justify-center hover:bg-neutral-200 transition-colors cursor-pointer text-neutral-500 hover:text-neutral-900">
              <Search className="h-4 w-4" />
            </div>
            <button className="px-5 py-2.5 bg-neutral-900 text-white font-semibold text-sm rounded-full hover:bg-black transition-all shadow-md hover:shadow-lg">
              Cotizar Proyecto
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative py-24 lg:py-32 overflow-hidden border-b border-black/5 bg-white">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-100/50 via-white to-white" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold tracking-widest uppercase mb-8 border border-blue-100 shadow-sm">
              <Zap className="h-3.5 w-3.5" /> División de Servicios
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-8 text-transparent bg-clip-text bg-gradient-to-b from-neutral-900 to-neutral-600 leading-[1.1]">
              Mano de Obra <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Especializada.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-neutral-600 max-w-2xl mb-10 leading-relaxed font-light">
              Catálogo estructurado de servicios para integradores. Encuentra costos exactos de instalación, configuración y mantenimiento para armar tus presupuestos con precisión milimétrica.
            </p>
            
            {usingMockData && (
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-amber-50 border border-amber-200 text-amber-700 shadow-sm text-sm mb-8">
                <Settings className="h-4 w-4 animate-spin-slow" />
                <span className="font-medium">Visualizando diseño con datos de prueba (Modo UI).</span>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Categories & Catalog */}
      <main className="container mx-auto px-6 py-16">
        
        {/* Filtros */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-6">
          <h2 className="text-3xl font-bold tracking-tight text-neutral-900">Catálogo de Servicios</h2>
          
          <div className="flex overflow-x-auto pb-2 md:pb-0 gap-2 hide-scrollbar">
            {categories.map((cat, idx) => (
              <button 
                key={cat}
                className={`whitespace-nowrap px-5 py-2 rounded-full text-sm font-medium transition-all border ${
                  idx === 0 
                  ? 'bg-neutral-900 text-white border-neutral-900 shadow-md' 
                  : 'bg-white text-neutral-600 border-black/10 hover:border-black/30 hover:text-neutral-900 shadow-sm'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Grid de Servicios */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <article 
              key={service.id} 
              className="group relative bg-white border border-black/5 rounded-3xl overflow-hidden hover:border-black/10 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col"
            >
              {/* Imagen Superior */}
              <div className="h-48 relative overflow-hidden bg-neutral-100">
                {/* Subtle dark gradient just behind the badge for legibility */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent z-10 h-24" />
                {service.image_url ? (
                  <img 
                    src={service.image_url} 
                    alt={service.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <Wrench className="h-12 w-12 text-neutral-300" />
                  </div>
                )}
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4 z-20 px-3 py-1 bg-white/90 backdrop-blur-md rounded-full text-[10px] font-bold uppercase tracking-wider text-neutral-700 border border-black/5 shadow-sm">
                  {service.category}
                </div>
              </div>

              {/* Contenido */}
              <div className="p-6 flex flex-col flex-1 relative z-20 bg-white">
                <div className="text-xs text-neutral-400 font-mono mb-3 uppercase tracking-widest">
                  {service.sku}
                </div>
                
                <h3 className="text-xl font-bold text-neutral-900 mb-4 leading-snug group-hover:text-blue-600 transition-colors">
                  {service.name}
                </h3>
                
                {/* Features (if available) */}
                {service.features && service.features.length > 0 && (
                  <ul className="mb-6 space-y-2">
                    {service.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-neutral-600">
                        <CheckCircle2 className="h-4 w-4 text-blue-500 mt-0.5 shrink-0" />
                        <span className="leading-tight">{feat}</span>
                      </li>
                    ))}
                  </ul>
                )}
                
                <div className="mt-auto pt-6 border-t border-black/5 flex items-end justify-between">
                  <div>
                    <div className="text-[10px] text-neutral-400 uppercase tracking-widest mb-1">Costo Base</div>
                    <div className="font-extrabold text-2xl text-neutral-900 tracking-tight flex items-baseline gap-1">
                      {new Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN' }).format(service.price)}
                      <span className="text-sm font-normal text-neutral-500">MXN</span>
                    </div>
                  </div>
                  
                  <button className="h-10 w-10 rounded-full bg-blue-50 hover:bg-blue-600 text-blue-600 hover:text-white flex items-center justify-center transition-all shadow-sm hover:shadow-md group-hover:scale-110 border border-blue-100 hover:border-blue-600">
                    <ArrowRight className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </main>
      
      {/* Footer Minimalista */}
      <footer className="border-t border-black/5 py-12 mt-12 bg-white">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-neutral-500">
          <div className="flex items-center gap-2">
            <Shield className="h-4 w-4 text-neutral-400" /> © 2026 CCURITY B2B. Todos los derechos reservados.
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-neutral-900 transition-colors">Términos de Servicio</a>
            <a href="#" className="hover:text-neutral-900 transition-colors">Privacidad</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
