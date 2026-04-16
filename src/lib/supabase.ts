import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn('Supabase credentials missing. Database features will be disabled.');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Helper function to fetch products
export async function getProducts() {
  const { data, error } = await supabase
    .from('products')
    .select('*')
    .order('id', { ascending: true });
  
  if (error) {
    console.error('Error fetching products:', error);
    return [];
  }
  return data;
}
