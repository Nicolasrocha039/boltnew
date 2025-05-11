import AsyncStorage from 'react-native-async-storage/async-storage';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://jkstevtcmwpehmtgriwl.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imprc3RldnRjbXdwZWhtdGdyaXdsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY4ODkyNjEsImV4cCI6MjA2MjQ2NTI2MX0.PyArAqoEBIKFeKZscOa1ssOGroAeKtv00KxM45cyjow';

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});

// Adiciona um listener para a autenticação
AppState.addEventListener('change', (state) => {
  if (state === 'active') {
    supabase.auth.refreshSession();
  } else {
    supabase.auth.stopAutoRefresh();
  }
});
