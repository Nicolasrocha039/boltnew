import React, { useState } from 'react';
import { Alert, StyleSheet, View } from 'react-native';
import { supabase } from '../lib/supabase';
import { Button, Input } from 'react-native-elements';

export default function Auth() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  async function signInWithEmail() {
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) Alert.alert(error.message);
    setLoading(false);
  }

  async function signUpWithEmail() {
    setLoading(true);
    const { error } = await supabase.auth.signUp({
      email,
      password,
    });
    if (error) Alert.alert(error.message);
    setLoading(false);
  }

  return (
    <View style={styles.container}>
      <Input
        label="Email"
        onChangeText={(text) => setEmail(text)}
        value={email}
        placeholder="email@exemplo.com"
        autoCapitalize="none"
      />
      <Input
        label="Senha"
        onChangeText={(text) => setPassword(text)}
        value={password}
        secureTextEntry
        placeholder="Senha"
        autoCapitalize="none"
      />
      <Button title="Entrar" disabled={loading} onPress={signInWithEmail} />
      <Button title="Cadastrar" disabled={loading} onPress={signUpWithEmail} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 40,
    padding: 12,
  },
});
