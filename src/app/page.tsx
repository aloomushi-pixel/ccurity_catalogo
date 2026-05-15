import { supabase } from '@/lib/supabase';
import { Shield, Zap } from 'lucide-react';
import { CatalogGrid } from '@/components/CatalogGrid';

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
    .select('*, ConceptCategory(name)')
    .limit(100);

  let services = MOCK_SERVICES;
  let usingMockData = true;

  if (!error && dbConcepts && dbConcepts.length > 0) {
    // Attempt to map real DB data if available and has price
    const validConcepts = dbConcepts.filter(c => {
      const p = c.basePrice || c.price || c.sale_price;
      return p !== null && p !== undefined && Number(p) > 0 && c.type === 'SERVICE';
    });

    if (validConcepts.length > 0) {
      services = validConcepts.map((c, i) => {
        // Dynamic Category Mapping from the Database
        const dbCategoryName = c.ConceptCategory?.name || 'Mano de Obra General';

        // Fallback Mapping for Images (Until the user updates the DB with the SQL script)
        const t = c.title.toLowerCase();
        let fallbackCat = 'General';
        if (t.includes('cctv') || t.includes('video') || t.includes('camara') || t.includes('cámara')) fallbackCat = 'Videovigilancia';
        else if (t.includes('acceso') || t.includes('porton') || t.includes('portón')) fallbackCat = 'Control de Acceso';
        else if (t.includes('red') || t.includes('nodo') || t.includes('vlan')) fallbackCat = 'Redes y Telecom';
        else if (t.includes('cerca')) fallbackCat = 'Seguridad Perimetral';
        else if (t.includes('tuberia') || t.includes('tubería') || t.includes('canalizacion') || t.includes('charola')) fallbackCat = 'Canalización';
        else if (t.includes('ranurado') || t.includes('registro') || t.includes('cimentación') || t.includes('soporte')) fallbackCat = 'Infraestructura';
        else if (t.includes('rastreo') || t.includes('gps')) fallbackCat = 'Rastreo Vehicular';

        // Dynamic Image Fallback Mapping
        let img = c.imageUrl || c.image_url || null;
        if (!img) {
          if (fallbackCat === 'Videovigilancia') img = '/images/services/tech_cctv.png';
          else if (fallbackCat === 'Control de Acceso') img = '/images/services/tech_access_control.png';
          else if (fallbackCat === 'Redes y Telecom') img = '/images/services/tech_network_nodes.png';
          else if (fallbackCat === 'Seguridad Perimetral') img = '/images/services/tech_electric_fence.png';
          else if (fallbackCat === 'Canalización') img = '/images/services/tech_conduit.png';
          else if (fallbackCat === 'Infraestructura') img = '/images/services/tech_trenching.png';
          else if (fallbackCat === 'Rastreo Vehicular') img = '/images/services/tech_gps_tracking.png';
          else img = '/images/services/tech_infrastructure.png';
        }

        return {
          id: c.id || `s-${i}`,
          name: c.title || c.name || 'Servicio',
          sku: c.satCode || c.sku || 'SRV-ESP',
          category: dbCategoryName,
          price: Number(c.basePrice || c.price || 0),
          image_url: img,
          features: c.description ? [c.description] : []
        };
      });
      usingMockData = false;
    }
  }

  // Extract unique categories from actual data
  const uniqueCats = Array.from(new Set(services.map(s => s.category)));
  const categories = ['Todos', ...uniqueCats.filter(c => c !== 'Todos')];

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
          
          <div className="flex items-center gap-4">
            <button className="px-6 py-2.5 rounded-full bg-neutral-900 text-white text-sm font-medium hover:bg-neutral-800 transition-all hover:shadow-lg hover:shadow-neutral-900/20 active:scale-95">
              Cotizar Proyecto
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative pt-24 pb-16 overflow-hidden bg-white">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-50 via-white to-white opacity-50"></div>
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-50/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-bold tracking-widest uppercase mb-8">
              <Zap className="h-3.5 w-3.5" />
              <span>División de Servicios B2B</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-neutral-900 leading-[1.1] mb-8">
              Mano de Obra<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Especializada.</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-neutral-500 max-w-2xl leading-relaxed mb-10 font-light">
              Catálogo estructurado de servicios para integradores. Encuentra costos exactos de instalación, configuración y mantenimiento para armar tus presupuestos con precisión milimétrica.
            </p>

            {usingMockData && (
              <div className="inline-flex items-center gap-3 px-4 py-3 rounded-xl bg-yellow-50 border border-yellow-200 text-yellow-800 text-sm font-medium mb-8">
                <span className="flex h-2 w-2 rounded-full bg-yellow-500 animate-pulse"></span>
                Visualizando diseño con datos de prueba (Base de Datos protegida por RLS)
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Catálogo Interactivo (Client Component) */}
      <CatalogGrid services={services} categories={categories} />

      {/* Footer Minimalista */}
      <footer className="bg-white border-t border-neutral-200 py-12">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <Shield className="h-6 w-6 text-neutral-300" />
            <span className="text-lg font-bold tracking-tight text-neutral-300">CCURITY</span>
          </div>
          <p className="text-sm text-neutral-400">
            © {new Date().getFullYear()} CCURITY Networks. Catálogo de Servicios B2B.
          </p>
        </div>
      </footer>
    </div>
  );
}
