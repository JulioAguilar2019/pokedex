import React from 'react';
import {
  View,
  Text,
  Image,
  ActivityIndicator,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import PokeApiService from '../services/pokeapi';
import { getColor, getImageUrl } from '../utils/colors';
import { Pokemon } from './pokemon';
import { Type } from './type';

interface PokedexPokemonProps {
  pokemon: {
    name: string;
    url: string;
  };
  onSelect: (pokemon: any) => void;
}

export function PokedexPokemon(props: PokedexPokemonProps) {
  const { pokemon } = props;

  // const [pokemon, setpokemon] = React.useState(undefined);

  // React.useEffect(() => {
  //   PokeApiService.getPokemonByUrl(pokemon.url).then((pokemon) => {
  //     setpokemon(pokemon);
  //   });
  // }, []);

  // if (!pokemon) return <ActivityIndicator />;

  const pokemonColor = getColor(pokemon.type);

  return (
    <TouchableOpacity
      className={`rounded-lg flex-row p-4 h-32`}
      style={{ backgroundColor: pokemonColor }}
      onPress={() => props.onSelect(pokemon)}
    >
      <View>
        <Text className="text-white text-xl capitalize font-semibold">
          {pokemon.name}
        </Text>
        {pokemon?.type?.map((type) => (
          <Type key={type.slot} type={type} />
        ))}
      </View>
      <View className="absolute -right-2 -bottom-2 w-24 h-24">
        <View
          style={{
            ...StyleSheet.absoluteFillObject,
            backgroundColor: '#fff',
            opacity: 0.1,
          }}
          className="rounded-full"
        />
        <Image
          source={{
            uri: pokemon.ThumbnailImage,
          }}
          style={{ resizeMode: 'contain' }}
          className="w-full h-full"
        />
      </View>
    </TouchableOpacity>
  );
}
