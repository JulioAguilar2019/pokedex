import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { Text, View, ScrollView, TouchableOpacity, Modal, StyleSheet, Pressable } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { TailwindProvider } from 'tailwindcss-react-native';
import { Pokemon, PokemonData } from './src/components/pokemon'
import { Datos } from './src/components';
import PokemonService from './src/services/pokemon.service'



function App() {
  const [pokemon, setPokemon] = useState<Array<PokemonData>>([]);
  const [modalVisible, setModalVisible] = useState(false);
  let indice = 1;

  useEffect(() => {
    PokemonService.get().then((pokemon) => {
      setPokemon(pokemon);
    });
  }, []);

  
  return (
    <TailwindProvider>
      <SafeAreaProvider>
        <SafeAreaView className="flex-1 bg-white p-5">
          <ScrollView className="flex-1">
            <Text className='font-bold text-slate-800 text-3xl'>Pokedex</Text>
            <StatusBar style="auto" />
            <View className='flex-1 justify-start pt-10'>
              {pokemon.map((pokemon, index) => (
                <TouchableOpacity onPress={() => {
                  setModalVisible(true);
                  indice = index;
                }}>
                  <Pokemon 
                  key={`pokemon-${index}`}
                  pokemon={pokemon} />
                </TouchableOpacity>
              ))}
            </View>
            <Modal
              animationType="slide"
              transparent={true}
              visible={modalVisible}
              onRequestClose={() => {
                alert("Modal has been closed.");
                setModalVisible(!modalVisible);
              }}
            >
              <View style={styles.centeredView}>
                <View className='w-full h-full' style={styles.modalView}>
                  <Text style={styles.modalText}>Nombre Pokemon</Text>
                  <Pressable
                    style={[styles.button, styles.buttonClose]}
                    onPress={() => setModalVisible(!modalVisible)}
                  >
                    <Text style={styles.textStyle}>Hide Modal</Text>
                  </Pressable>
                </View>
              </View>
            </Modal>
          </ScrollView>
        </SafeAreaView>
      </SafeAreaProvider>
    </TailwindProvider>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});

export default App;
