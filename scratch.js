// No dotenv needed since we use --env-file
const { createClient } = require('@supabase/supabase-js');

console.log("Key length:", process.env.SUPABASE_SERVICE_ROLE_KEY?.length);
const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);

async function run() {
  const { data, error } = await supabase.from('MasterConcept').select('*').limit(2);
  if (error) {
    console.error('Error:', error);
  } else {
    console.log(JSON.stringify(data, null, 2));
  }
}

run();
