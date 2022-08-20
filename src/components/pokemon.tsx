import { Text, View, Image, TouchableOpacity, Alert } from 'react-native';
export interface PokemonData {
    id: string;
    abilities: string[];
    detailPageURL: string;
    weight: number;
    height: number;
    weakness: string[];
    collectibles_slug: string;
    featured: string;
    slug: string;
    ThumbnailAltText: string;
    number: string;
    name: string;
    type: string[];
    ThumbnailImage: string;
  }
  
  export interface PokemonProps {
    pokemon: PokemonData;
  }

  export const colors = {
    fire: '#ff7979',
    grass: '#1dd1a1',
    water: '#60a3bc',
    normal: '#3c6382',
    bug: '#7d5fff',
    ice: '#9ed7ff',
    fairy: '#ffd7d7',
    rock: '#4b4b4b',
    electric: '#f6b93b',
    flying: '#A7D9FF',
    fighting: '#D9A7FF',
    poison: '#D9A7FF',
    ground: '#FFA7B8',
    ghost: '#7C7C7C',
    psychic: '#FFA7FF',
    steel: '#A7A7D9',
    dragon: '#A7D9FF',
    dark: '#7C7C7C',
    };

    function pokemonDatos(){
        alert("Funciona")
    }
  
  export const Pokemon = (props: PokemonProps) => {
    const { pokemon } = props;

    let result = '';
    Object.entries(colors).find(([key, value]) => {
        if (key == pokemon.type[0]) {
          result = value;
          return true;
        }
        return false;
      });

    return(
        // Por alguna razón el color no se aplica aunque esta bien escrito
        //<View className={`rounded-lg w-1/2 m-2 bg-[${result}]`}>
        <View className={`rounded-lg w-1/2 m-2 bg-[#4b4b4b]`}>
            <View className='p-3'>
                <Text className='text-black/20 text-right font-bold'>#{pokemon.number}</Text>
                <Text className='text-white text-base font-bold'>{pokemon.name}</Text>
                <View className='flex-1 items-start flex-row'>
                    <View className='gap-2 pt-2'>
                        <Text className='rounded-full bg-white/30 text-white text-center text-sm py-1 px-3'>{pokemon.type[0]}</Text>
                        <Text className='rounded-full bg-white/30 text-white text-center text-sm py-1 px-3'>
                            {pokemon.type[1]}
                        </Text>
                    </View>
                    <Image
                        className='aspect-square w-1/2'
                        source={{
                            uri: pokemon.ThumbnailImage,
                        }}
                    />
                </View>
                
            </View>
        </View>
    );
  }