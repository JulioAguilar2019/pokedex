import React, { useEffect, useState } from 'react'
import { useRoute, useNavigation } from '@react-navigation/native'
import { Alert, ScrollView, Text } from 'react-native'
import api from '../../services/api.service'
import colors from '../../styles/theme'
import { useTheme } from 'styled-components/native'
import { Feather } from '@expo/vector-icons'
import circle from '../../assets/img/circle.png'
import { Abilities, Attributes, AttributesValues, BackButton, CircleImage, Container, Content, ContentImage, Header, PokemonId, PokemonImage, PokemonName, PokemonTypeContainer, PokemonTypes, PokemonTypeText, StatsBar, Title } from './styles'
import { AnimationCard } from '../../components/AnimationCard'

type RouteParams = {
    idPokemon: number
}

type Stats = {
    base_stat: 62,
    stat: {
        name: string
    }
}

type Ability = {
    ability: {
        name: string
    }
}

export type TypeName =
    | 'bug'
    | 'dark'
    | 'dragon'
    | 'electric'
    | 'fairy'
    | 'fighting'
    | 'fire'
    | 'flying'
    | 'ghost'
    | 'grass'
    | 'ground'
    | 'ice'
    | 'normal'
    | 'poison'
    | 'psychic'
    | 'rock'
    | 'steel'
    | 'water'


type PokemonTypes = {
    type: {
        name: TypeName

    }
}

type PokemonProps = {
    id: number,
    name: string,
    stats: Stats[],
    abilities: Ability[],
    color: string,
    types: PokemonTypes[]
}
export const InfoPokemon = () => {
    const { goBack } = useNavigation()
    const route = useRoute();
    const { idPokemon } = route.params as RouteParams;
    const { colors } = useTheme()

    const [pokemon, setPokemon] = useState({} as PokemonProps)
    const [load, setLoad] = useState(true);

    useEffect(() => {
        async function getPokemonDetails(): Promise<void> {
            try {
                const response = await api.get(`/pokemon/${idPokemon}`)
                const { stats, abilities, id, name, types } = response.data

                const currentType = types[0].type.name as TypeName;
                const color = colors.types[currentType];

                setPokemon({
                    stats, abilities, id, name, types, color
                })
                setLoad(false)
            } catch (error) {
                Alert.alert('Algo inesperado ha sucedido')

            } finally {
                setLoad(false)
            }
        }

        getPokemonDetails()

    }, [])




    function handleBack() {
        goBack();
    }

    return (
        <>
            {load ?
                <>
                    <Text> Cargando...</Text>
                </> :
                <ScrollView style={{ backgroundColor: "#fff" }}>
                    <Header type={pokemon.types[0].type.name}>
                        <BackButton onPress={handleBack}>
                            <Feather name="chevron-left" size={24} color="#fff" />
                        </BackButton>

                        <ContentImage>
                            <CircleImage source={circle} />
                            <AnimationCard>
                                <PokemonImage source={{
                                    uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`,
                                }} />
                            </AnimationCard>
                        </ContentImage>

                        <Content>
                            <PokemonId>#{pokemon.id}</PokemonId>
                            <PokemonName>{pokemon.name}</PokemonName>
                            <PokemonTypeContainer>
                                {
                                    pokemon.types.map(({ type }) =>
                                        <PokemonTypes type={type.name} key={type.name}>
                                            <PokemonTypeText>{type.name} </PokemonTypeText>
                                        </PokemonTypes>)
                                }
                            </PokemonTypeContainer>
                        </Content>
                    </Header>
                    <Container>
                        <Title type={pokemon.types[0].type.name}>Base Stats</Title>
                        {
                            pokemon.stats.map(attri =>
                                <>
                                    <StatsBar key={attri.stat.name}>
                                        <Attributes> {attri.stat.name}</Attributes>
                                        <AttributesValues> {attri.base_stat}</AttributesValues>
                                    </StatsBar>
                                </>
                            )
                        }
                        <Title type={pokemon.types[0].type.name}>Abilities</Title>
                        {
                            pokemon.abilities.map(abilities =>
                                <Abilities>
                                    {abilities.ability.name}
                                </Abilities>
                            )
                        }
                    </Container>
                </ScrollView>
            }
        </>
    )
}
