import React from 'react'
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { Title, Container } from './styles'

type Props = {
    title: String;
} & TouchableOpacityProps

export const Button = ({ title, ...rest }: Props) => {
    return (
        <Container {...rest}>
            <Title> {title}</Title>

        </Container>
    )
}
