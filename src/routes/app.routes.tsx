import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { InfoPokemon } from '../pages/InfoPokemon'
import { PokemonList } from '../pages/PokemonList'
import { Welcome } from '../pages/welcome'

const Stack = createNativeStackNavigator()

export const AppRoutes = () => {


    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='Welcome' component={Welcome} />
            <Stack.Screen name='PokemonList' component={PokemonList} />
            <Stack.Screen name='InfoPokemon' component={InfoPokemon} />

        </Stack.Navigator>
    )
}
