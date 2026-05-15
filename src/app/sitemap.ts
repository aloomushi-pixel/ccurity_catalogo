import { MetadataRoute } from 'next';
import { supabase } from '@/lib/supabase';
import { generateServicePath } from '@/lib/utils';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://catalogo.ccurity.com.mx';

  // Obtener todos los servicios activos
  const { data: services } = await supabase
    .from('MasterConcept')
    .select('id, title, updatedAt, ConceptCategory(name)')
    .eq('type', 'SERVICE')
    .order('updatedAt', { ascending: false });

  // Rutas dinámicas
  const serviceUrls = (services || []).map((service) => {
    const categoryName = service.ConceptCategory?.name || 'Mano de Obra General';
    return {
      url: `${baseUrl}${generateServicePath(categoryName, service.title)}`,
      lastModified: new Date(service.updatedAt || new Date()),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    };
  });

  // Ruta principal
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    ...serviceUrls,
  ];
}
