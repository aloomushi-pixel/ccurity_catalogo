const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);

const categoryMap = {
  'acf3e64b-8ba4-4475-9fb1-69821f0c1881': 'tech_gps_tracking.png',
  '4b10c855-88ef-43cb-9fad-b0149a46cfb3': 'tech_conduit.png',
  '035d5ca2-beee-4a61-81b9-18998eb8f2b8': 'tech_trenching.png',
  'd66509fa-2944-43c7-bffe-2c8e05ba45f7': 'tech_network_nodes.png',
  '37caeefa-4825-4e1c-b0c5-6024a19e3b79': 'tech_cctv.png',
  '0791e8f5-a30b-4fd0-971b-b935e71c4dd8': 'tech_network_nodes.png',
  '3b9456f4-8710-47c1-af34-c42e9e099e90': 'tech_access_control.png',
  '069ae830-2dec-4404-a393-32e977167c66': 'tech_gate_automation.png',
  '33054f05-c99c-4881-8702-0835b14e401a': 'tech_electric_fence.png'
};

async function run() {
  const { data: concepts, error } = await supabase.from('MasterConcept').select('id, title, categoryId').eq('type', 'SERVICE');
  if (error) {
    console.error("Error fetching:", error);
    return;
  }

  console.log(`Found ${concepts.length} services to update.`);
  let updated = 0;

  for (const c of concepts) {
    let imgName = 'tech_infrastructure.png'; // default
    
    if (c.categoryId && categoryMap[c.categoryId]) {
      imgName = categoryMap[c.categoryId];
    } else {
      // Fallback by title keywords
      const t = c.title.toLowerCase();
      if (t.includes('cctv') || t.includes('video')) imgName = 'tech_cctv.png';
      else if (t.includes('acceso')) imgName = 'tech_access_control.png';
      else if (t.includes('red') || t.includes('nodo') || t.includes('vlan')) imgName = 'tech_network_nodes.png';
      else if (t.includes('cerca')) imgName = 'tech_electric_fence.png';
      else if (t.includes('tuberia') || t.includes('canalizacion')) imgName = 'tech_conduit.png';
      else if (t.includes('ranurado') || t.includes('registro')) imgName = 'tech_trenching.png';
      else if (t.includes('porton')) imgName = 'tech_gate_automation.png';
    }

    const fullUrl = `https://catalogo.ccurity.com.mx/images/services/${imgName}`;
    
    const { error: updErr } = await supabase
      .from('MasterConcept')
      .update({ imageUrl: fullUrl })
      .eq('id', c.id);
      
    if (updErr) {
      console.error(`Error updating ${c.id}:`, updErr);
    } else {
      updated++;
    }
  }

  console.log(`Successfully updated ${updated} records!`);
}

run();
