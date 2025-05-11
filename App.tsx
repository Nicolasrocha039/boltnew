import React, { useEffect, useState } from 'react';
import { supabase } from './lib/supabase';
import Auth from './components/Auth';
import { View, Text } from 'react-native';

export default function App() {
  const [session, setSession] = useState(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    supabase.auth.onAuthStateChange((_, session) => {
      setSession(session);
    });
  }, []);

  return (
    <View>
      <Auth />
      {session && <Text>{session.user.id}</Text>}
    </View>
  );
}
