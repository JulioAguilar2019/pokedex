import React, { useEffect } from 'react'
import { useRoute, useNavigation } from '@react-navigation/native'
import { Text } from 'react-native'
import api from '../../services/api.service'

type RouteParams = {
    idPokemon: number
}


export const InfoPokemon = () => {

    const route = useRoute();
    const { idPokemon } = route.params as RouteParams;

    useEffect(() => {
        async function getPokemonDetails() {
            try {
                const response = await api.get(`/pokemon/${idPokemon}`)
                const { stats, abilities, id, name, types } = response.data
            } catch (error) {

            }
        }

        getPokemonDetails()

    }, [])


    return (
        <>
            <Text style={{ margin: 100 }}> {idPokemon} </Text>
        </>
    )
}
