import { useEffect, useState } from 'react';
import { uniqBy } from 'lodash';
import { View, Text, FlatList } from 'react-native';
import PokeApiService from '../services/pokeapi';
import { PokedexPokemon } from './PokedexPokemon';
import { Pokemon } from './pokemon';

export function Pokedex() {
  const [pokemons, setPokemons] = useState([]);
  const [pokemon, setPokemon] = useState(undefined);

  useEffect(() => {
    PokeApiService.getPage(0).then((page) => {
      setPokemons(uniqBy(page.data, 'id'));
    });
  }, []);
  return (
    <View>
      <Text>Pokedex</Text>

      {!!pokemon && (
        <Pokemon pokemon={pokemon} onBack={() => setPokemon(undefined)} />
      )}

      <View className="m-3">
        <FlatList
          data={pokemons}
          renderItem={({ item, index }) => (
            <View
              className={`flex-1 w-[100%] ${
                index % 2 === 0 ? 'mr-[10px]' : ''
              }`}
            >
              <PokedexPokemon pokemon={item} onSelect={setPokemon} />
            </View>
          )}
          keyExtractor={(item) => item.name}
          numColumns={2}
          ItemSeparatorComponent={() => <View className="m-[5px]" />}
          columnWrapperStyle={{
            justifyContent: 'space-between',
            marginLeft: 10,
            marginRight: 10,
          }}
        />
      </View>
    </View>
  );
}
