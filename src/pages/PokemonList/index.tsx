import { useNavigation } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import { FlatList } from 'react-native'
import { Card, Pokemon, PokemonType } from '../../components/card'
import api from '../../services/api.service'
import { Container } from './styles'

type Request = {
    id: number,
    types: PokemonType[]
}

export const PokemonList = () => {

    const [pokemons, setPokemons] = useState<Pokemon[]>([])

    const { navigate } = useNavigation()

    function handleNavigation(idPokemon: number) {

        navigate('InfoPokemon', {
            idPokemon,
        })
    }
    async function getData(url: string): Promise<Request> {
        const response = await api.get(url)
        const { id, types } = response.data

        return {
            id,
            types
        }
    }

    async function getAllPokemons() {
        const response = await api.get('/pokemon')
        const { results } = response.data;

        const DataPokemons = await Promise.all(
            results.map(async (pokemon: Pokemon) => {
                const { id, types } = await getData(pokemon.url)

                return {
                    name: pokemon.name,
                    id,
                    types
                }
            })
        )
        setPokemons(DataPokemons)
    }

    useEffect(() => {

        getAllPokemons()
    }, [])



    return (
        <Container>
            <FlatList
                key={Date.now.toString()}
                numColumns={2}
                data={pokemons}
                keyExtractor={pokemon => pokemon.id.toString()}
                renderItem={({ item: pokemon }) => (
                    <Card data={pokemon} onPress={() => {
                        handleNavigation(pokemon.id)
                    }} />

                )}


            ></FlatList>
        </Container>
    )
}
