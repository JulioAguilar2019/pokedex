import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import { getColor, getIdWithThreeNumbers, getImageUrl } from '../utils/colors';
import { Type } from './type';

const { height } = Dimensions.get('window');

export function Pokemon(props) {
  const { pokemon, onBack } = props;

  if (!pokemon) return null;

  const pokemonColor = getColor(pokemon.type);

  return (
    <View
      style={{
        ...StyleSheet.absoluteFillObject,
        backgroundColor: pokemonColor,
        zIndex: 1,
      }}
    >
      <TouchableOpacity onPress={onBack}>
        <MaterialCommunityIcons name="chevron-left" color="#ffffff" size={35} />
      </TouchableOpacity>
      <View
        style={{
          height: height * 0.35,
          zIndex: 2,
        }}
        className="p-4"
      >
        <View className="flex-row items-center justify-between">
          <View>
            <Text className="text-white capitalize text-2xl font-extrabold">
              {pokemon.name}
            </Text>
            <View className="flex-row">
              {pokemon.type.map((type) => (
                <Type type={type} key={type} />
              ))}
            </View>
          </View>

          <Text className="text-lg text-white font-extrabold">
            #{pokemon.number}
          </Text>
        </View>

        <Image
          source={{ uri: pokemon.ThumbnailImage }}
          className={`bottom-0 w-10/12b rounded-full`}
          style={{
            resizeMode: 'contain',
            height: height * 0.35,
            zIndex: 2,
            backgroundColor: 'rgba(255,255,255,0.2)',
          }}
        />
      </View>

      <View className="bg-white flex-1 rounded-t-[40px] p-5 pt-10">
        <View className="flex-row justify-between mb-5">
          <Text className="text-gray-800 text-lg font-semibold">About</Text>
          <Text className="text-gray-300 text-lg font-semibold">
            Base Stats
          </Text>
          <Text className="text-gray-300 text-lg font-semibold">Evolution</Text>
          <Text className="text-gray-300 text-lg font-semibold">Moves</Text>
        </View>

        <View className="flex-row">
          <Text className="text-gray-500 text-md font-semibold">Height</Text>
          <Text className="text-gray-700 text-md font-bold ml-10">
            {pokemon.height} cm
          </Text>
        </View>

        <View className="flex-row mt-4">
          <Text className="text-gray-500 text-md font-semibold">Weight</Text>
          <Text className="text-gray-700 text-md font-bold ml-10">
            {pokemon.weight} lbs
          </Text>
        </View>

        <View className="flex-row mt-4">
          <Text className="text-gray-500 text-md font-semibold">Abilities</Text>
          <Text className="text-gray-700 text-md font-bold ml-10">
            {pokemon.abilities.join(', ')}
          </Text>
        </View>
      </View>
    </View>
  );
}
