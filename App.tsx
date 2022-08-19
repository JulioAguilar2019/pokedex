import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { TailwindProvider } from 'tailwindcss-react-native';
import { Pokedex } from './src/components/pokedex';

export default function App() {
  return (
    <TailwindProvider>
      <SafeAreaView className="flex-1">

        <StatusBar style="auto" />
      </SafeAreaView>
    </TailwindProvider>
  );
}
