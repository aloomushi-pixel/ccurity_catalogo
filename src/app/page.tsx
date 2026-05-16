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

const MOCK_PRODUCTS = [
  {
    id: 'p1',
    name: 'Cámara IP Domo 4MP',
    sku: 'PROD-CCTV-01',
    category: 'Equipos',
    price: 1850.00,
    image_url: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?q=80&w=2000',
    features: ['Visión nocturna', 'Resistencia IP67', 'PoE']
  },
  {
    id: 'p2',
    name: 'Cable UTP Cat 6 (Bobina 305m)',
    sku: 'PROD-CBL-02',
    category: 'Materiales',
    price: 2100.00,
    image_url: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=2000',
    features: ['100% Cobre', 'Uso interior', 'Color Azul']
  }
];

export default async function ServicesCatalogPage() {
  // We fetch concepts, and we will filter in JS to avoid PostgREST column name crashes
  const { data: dbConcepts, error } = await supabase
    .from('MasterConcept')
    .select('*, ConceptCategory(name)')
    .limit(300);

  let services = MOCK_SERVICES;
  let products = MOCK_PRODUCTS;
  let usingMockData = true;

  if (!error && dbConcepts && dbConcepts.length > 0) {
    const validConcepts = dbConcepts.filter(c => {
      const p = c.basePrice || c.price || c.sale_price;
      return p !== null && p !== undefined && Number(p) > 0;
    });

    if (validConcepts.length > 0) {
      const mappedConcepts = validConcepts.map((c, i) => {
        const dbCategoryName = c.ConceptCategory?.name || 'General';
        const t = c.title.toLowerCase();
        let fallbackCat = 'General';
        if (t.includes('cctv') || t.includes('video') || t.includes('camara') || t.includes('cámara')) fallbackCat = 'Videovigilancia';
        else if (t.includes('acceso') || t.includes('porton') || t.includes('portón')) fallbackCat = 'Control de Acceso';
        else if (t.includes('red') || t.includes('nodo') || t.includes('vlan')) fallbackCat = 'Redes y Telecom';
        else if (t.includes('cerca')) fallbackCat = 'Seguridad Perimetral';
        else if (t.includes('tuberia') || t.includes('tubería') || t.includes('canalizacion') || t.includes('charola')) fallbackCat = 'Canalización';
        else if (t.includes('ranurado') || t.includes('registro') || t.includes('cimentación') || t.includes('soporte')) fallbackCat = 'Infraestructura';
        else if (t.includes('rastreo') || t.includes('gps')) fallbackCat = 'Rastreo Vehicular';

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
          id: c.id || `i-${i}`,
          name: c.title || c.name || 'Item',
          sku: c.satCode || c.sku || 'N/A',
          category: dbCategoryName,
          price: Number(c.basePrice || c.price || 0),
          image_url: img,
          features: c.description ? [c.description] : [],
          type: c.type || 'SERVICE'
        };
      });

      services = mappedConcepts.filter(c => c.type === 'SERVICE' || c.type === 'MAINTENANCE');
      products = mappedConcepts.filter(c => c.type === 'EQUIPMENT' || c.type === 'MATERIAL');
      
      // If db has no products but has services, still show mock products so we can see the layout
      if (products.length === 0) {
        products = MOCK_PRODUCTS;
      }

      usingMockData = false;
    }
  }

  // Extract unique categories
  const uniqueServiceCats = Array.from(new Set(services.map(s => s.category)));
  const serviceCategories = ['Todos', ...uniqueServiceCats.filter(c => c !== 'Todos')];

  const uniqueProductCats = Array.from(new Set(products.map(s => s.category)));
  const productCategories = ['Todos', ...uniqueProductCats.filter(c => c !== 'Todos')];

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900 selection:bg-blue-500/30 font-sans">
      
      {usingMockData && (
        <div className="container mx-auto px-6 mt-8">
          <div className="inline-flex items-center gap-3 px-4 py-3 rounded-xl bg-yellow-50 border border-yellow-200 text-yellow-800 text-sm font-medium mb-2">
            <span className="flex h-2 w-2 rounded-full bg-yellow-500 animate-pulse"></span>
            Visualizando diseño con algunos datos de prueba (Base de Datos protegida)
          </div>
        </div>
      )}

      {/* Catálogo Interactivo (Client Component) - Servicios */}
      <CatalogGrid 
        items={services} 
        categories={serviceCategories}
        title={<>Catálogo<br/>de</>}
        highlightText="Servicios"
        subtitle="Selecciona una categoría para filtrar los resultados o navega por el inventario completo."
        buttonText="Cotizar"
      />

      {/* Catálogo Interactivo (Client Component) - Productos */}
      <div className="border-t border-neutral-200">
        <CatalogGrid 
          items={products} 
          categories={productCategories}
          title="Catálogo de"
          highlightText="Productos"
          subtitle="Equipos y materiales de grado industrial para tus implementaciones."
          buttonText="Ver Producto"
        />
      </div>
    </div>
  );
}
