import React from 'react'
import { TouchableOpacity, TouchableOpacityProps } from 'react-native'
import { ImagePokeBall, ImagePokemon, LeftSide, PokemonCard, PokemonContentTypes, PokemonId, PokemonName, PokemonTextType, PokemonType, RightSide } from './styles'
import PokeBall from '../../assets/img/PokeBall.png'
import { AnimationCard } from '../../components/AnimationCard'


export type PokemonType = {
    type: {
        name: string
    }
}

export type Pokemon = {
    name: string;
    url: string;
    id: number;
    types: PokemonType[]
}

type Props = {
    data: Pokemon
} & TouchableOpacityProps



export const Card = ({ data, ...rest }: Props) => {

    return (
        <PokemonCard type={data.types[0].type.name} {...rest}>
            <LeftSide>
                <PokemonId>#{data.id}</PokemonId>
                <PokemonName>{data.name}</PokemonName>
                <PokemonContentTypes>
                    {data.types.map(pokemonType =>
                        <PokemonType type={pokemonType.type.name}>
                            <PokemonTextType key={Date.now.toString()} >
                                {pokemonType.type.name}
                            </PokemonTextType>
                        </PokemonType>
                    )}

                </PokemonContentTypes>
            </LeftSide>

            <RightSide>
                <ImagePokeBall source={PokeBall}></ImagePokeBall>
                <AnimationCard>
                    <ImagePokemon source={{
                        uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`,
                    }}></ImagePokemon>
                </AnimationCard>
            </RightSide>
        </PokemonCard>
    )
}
