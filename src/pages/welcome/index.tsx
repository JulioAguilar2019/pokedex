import React from 'react'
import { Container, Content, Creator, Footer, SubTitle, Title } from './styles'
import AnimatedLottieView from 'lottie-react-native'
import AnimationPikachu from './pikachu.json'
import { Button } from '../../components/Buttons'
import { useNavigation } from '@react-navigation/native'



export const Welcome = () => {

    const { navigate } = useNavigation()

    function handleNavigation() {

        navigate('PokemonList')
    }


    return (
        <Container>
            <Content>

                <AnimatedLottieView style={{ width: 400 }} autoPlay source={AnimationPikachu} loop />

                <Creator>Pokedex - Julio Aguilar</Creator>
            </Content>
            <Footer>
                <Title>Bienvenidos a la Pokedex</Title>
                <SubTitle>Aquí podrás encontrar todos los Pokemons</SubTitle>
                <Button title={'Ingresar a la Pokedex'} onPress={handleNavigation}> </Button>
            </Footer>
        </Container>
    )
}
