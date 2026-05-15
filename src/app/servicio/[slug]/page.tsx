import { Metadata } from 'next';
import { supabase } from '@/lib/supabase';
import { extractIdFromSlug } from '@/lib/utils';
import { Shield, ArrowLeft, CheckCircle2, Zap, Clock, ShieldCheck, HardHat } from 'lucide-react';
import Link from 'next/link';

export const dynamic = 'force-dynamic';

type PageProps = {
  params: Promise<{ slug: string }>;
};

// 1. DYNAMIC METADATA PARA SEO Y REDES SOCIALES
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const id = extractIdFromSlug(resolvedParams.slug);

  const { data: service } = await supabase
    .from('MasterConcept')
    .select('*, ConceptCategory(name)')
    .eq('id', id)
    .single();

  if (!service) {
    return { title: 'Servicio no encontrado | CCURITY' };
  }

  const catName = service.ConceptCategory?.name || 'Servicio Especializado';
  const img = service.imageUrl || service.image_url || 'https://catalogo.ccurity.com.mx/images/services/tech_infrastructure.png';

  return {
    title: `${service.title} - ${catName}`,
    description: service.description || `Contrata ${service.title} al mejor costo base de $${service.basePrice || service.price} MXN. Instalación profesional para integradores.`,
    openGraph: {
      title: `${service.title} | CCURITY B2B`,
      description: service.description || `Mano de obra especializada: ${service.title}`,
      images: [img],
      type: 'website',
    },
  };
}

export default async function ServicePage({ params }: PageProps) {
  const resolvedParams = await params;
  const id = extractIdFromSlug(resolvedParams.slug);

  const { data: service, error } = await supabase
    .from('MasterConcept')
    .select('*, ConceptCategory(name)')
    .eq('id', id)
    .single();

  if (error || !service) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-neutral-50">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-neutral-900 mb-4">Servicio no encontrado</h1>
          <Link href="/" className="text-blue-600 hover:underline inline-flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" /> Volver al catálogo
          </Link>
        </div>
      </div>
    );
  }

  const categoryName = service.ConceptCategory?.name || 'Mano de Obra General';
  
  // Dynamic Image Fallback Mapping
  const t = service.title.toLowerCase();
  let fallbackCat = 'General';
  if (t.includes('cctv') || t.includes('video') || t.includes('camara') || t.includes('cámara')) fallbackCat = 'Videovigilancia';
  else if (t.includes('acceso') || t.includes('porton') || t.includes('portón')) fallbackCat = 'Control de Acceso';
  else if (t.includes('red') || t.includes('nodo') || t.includes('vlan')) fallbackCat = 'Redes y Telecom';
  else if (t.includes('cerca')) fallbackCat = 'Seguridad Perimetral';
  else if (t.includes('tuberia') || t.includes('tubería') || t.includes('canalizacion') || t.includes('charola')) fallbackCat = 'Canalización';
  else if (t.includes('ranurado') || t.includes('registro') || t.includes('cimentación') || t.includes('soporte')) fallbackCat = 'Infraestructura';
  else if (t.includes('rastreo') || t.includes('gps')) fallbackCat = 'Rastreo Vehicular';

  let img = service.imageUrl || service.image_url || null;
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

  const price = Number(service.basePrice || service.price || 0);

  // 2. JSON-LD PARA ARTIFICIAL INTELLIGENCE OPTIMIZATION (AIO) Y GOOGLE RICH SNIPPETS
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    description: service.description || `Mano de obra especializada para ${service.title}`,
    provider: {
      '@type': 'Organization',
      name: 'CCURITY Networks',
      url: 'https://catalogo.ccurity.com.mx'
    },
    serviceType: categoryName,
    areaServed: {
      '@type': 'Country',
      name: 'Mexico'
    },
    offers: {
      '@type': 'Offer',
      price: price,
      priceCurrency: 'MXN',
      availability: 'https://schema.org/InStock',
      url: `https://catalogo.ccurity.com.mx/servicio/${resolvedParams.slug}`
    }
  };

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900 font-sans selection:bg-blue-500/30">
      {/* Inyección JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Navbar Minimalista */}
      <nav className="sticky top-0 z-50 border-b border-black/5 bg-white/80 backdrop-blur-xl">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="h-10 w-10 rounded-xl bg-gradient-to-tr from-blue-600 to-cyan-500 flex items-center justify-center shadow-lg shadow-blue-500/20 group-hover:scale-105 transition-transform">
              <Shield className="h-5 w-5 text-white" />
            </div>
            <span className="text-2xl font-bold tracking-tight text-neutral-900">
              CCURITY <span className="font-light text-neutral-400">SERVICES</span>
            </span>
          </Link>
          <div className="flex items-center gap-4">
            <Link href="/" className="hidden md:flex items-center gap-2 text-sm font-medium text-neutral-500 hover:text-neutral-900 transition-colors">
              <ArrowLeft className="h-4 w-4" /> Volver al Catálogo
            </Link>
            <button className="px-6 py-2.5 rounded-full bg-neutral-900 text-white text-sm font-medium hover:bg-neutral-800 transition-all hover:shadow-lg hover:shadow-neutral-900/20 active:scale-95">
              Cotizar Proyecto
            </button>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-6 py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          
          {/* Columna Izquierda: Imagen */}
          <div className="sticky top-32 rounded-3xl overflow-hidden border border-black/5 bg-white shadow-xl shadow-black/5 aspect-[4/3] lg:aspect-square flex flex-col items-center justify-center relative group">
             {img ? (
                <img 
                  src={img} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              ) : (
                <HardHat className="h-24 w-24 text-neutral-200" />
              )}
             <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"/>
          </div>

          {/* Columna Derecha: Detalles del Servicio */}
          <div className="flex flex-col">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-100 text-neutral-600 text-xs font-bold tracking-widest uppercase mb-6 w-fit border border-black/5">
              {categoryName}
            </div>
            
            <h1 className="text-4xl md:text-5xl font-black tracking-tight text-neutral-900 leading-[1.1] mb-6">
              {service.title}
            </h1>
            
            <p className="text-lg text-neutral-500 leading-relaxed font-light mb-8">
              {service.description || "Este servicio de mano de obra especializada está diseñado para integradores B2B, garantizando la correcta implementación tecnológica bajo estándares de industria."}
            </p>

            {/* Pricing Box */}
            <div className="p-8 rounded-3xl bg-white border border-black/5 shadow-sm mb-10 flex flex-col sm:flex-row sm:items-center justify-between gap-6 relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
               <div className="relative z-10">
                 <div className="text-sm font-bold tracking-widest uppercase text-neutral-400 mb-2">Costo Base</div>
                 <div className="text-5xl font-black tracking-tighter text-neutral-900 flex items-baseline gap-2">
                    {new Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN' }).format(price)}
                    <span className="text-lg font-normal text-neutral-500">MXN</span>
                 </div>
                 <div className="text-sm text-neutral-400 mt-2 font-medium">SKU: {service.satCode || service.sku || 'SRV-ESP-01'}</div>
               </div>
               
               <div className="relative z-10">
                 <button className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-blue-600 text-white font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20 active:scale-95 flex items-center justify-center gap-2">
                   <Zap className="h-5 w-5" /> Iniciar Cotización
                 </button>
               </div>
            </div>

            {/* Features List */}
            <div className="mb-10">
              <h3 className="text-lg font-bold text-neutral-900 mb-6">Qué incluye este servicio:</h3>
              <ul className="grid gap-4">
                <li className="flex items-start gap-4">
                  <div className="mt-1 bg-green-100 text-green-600 rounded-full p-1"><CheckCircle2 className="h-4 w-4" /></div>
                  <span className="text-neutral-600 leading-relaxed">Ejecución por personal técnico altamente capacitado y certificado en {categoryName.toLowerCase()}.</span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="mt-1 bg-green-100 text-green-600 rounded-full p-1"><CheckCircle2 className="h-4 w-4" /></div>
                  <span className="text-neutral-600 leading-relaxed">Mapeo y levantamiento de requerimientos iniciales en sitio.</span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="mt-1 bg-green-100 text-green-600 rounded-full p-1"><CheckCircle2 className="h-4 w-4" /></div>
                  <span className="text-neutral-600 leading-relaxed">Herramienta especializada de grado industrial para la ejecución.</span>
                </li>
              </ul>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 gap-4 border-t border-black/5 pt-8">
               <div className="flex items-center gap-3 text-neutral-600">
                 <ShieldCheck className="h-6 w-6 text-blue-500" />
                 <span className="font-medium text-sm">Garantía B2B Total</span>
               </div>
               <div className="flex items-center gap-3 text-neutral-600">
                 <Clock className="h-6 w-6 text-blue-500" />
                 <span className="font-medium text-sm">Ejecución en Tiempo</span>
               </div>
            </div>

          </div>
        </div>
      </main>

      {/* Footer Minimalista */}
      <footer className="border-t border-black/5 py-12 bg-white">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-neutral-500">
          <div className="flex items-center gap-2">
            <Shield className="h-4 w-4 text-neutral-400" /> © 2026 CCURITY B2B. Todos los derechos reservados.
          </div>
          <div className="flex gap-6">
            <Link href="/" className="hover:text-neutral-900 transition-colors">Volver al Catálogo</Link>
            <a href="#" className="hover:text-neutral-900 transition-colors">Privacidad</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
