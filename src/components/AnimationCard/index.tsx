import React, { useEffect } from 'react'
import { useWindowDimensions, ViewProps } from 'react-native'
import { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated'
import { AnimationContainer } from './styles'


type AnimationProps = {
    children: React.ReactNode
} & ViewProps

export const AnimationCard = ({ children, ...rest }: AnimationProps) => {

    const { width: DisplayWidth } = useWindowDimensions()
    const cardOpacity = useSharedValue(0)
    const cardOffSet = useSharedValue(0.25 * DisplayWidth)

    const animatedStyle = useAnimatedStyle(() => {
        'worklet'
        return {
            opacity: cardOpacity.value,
            transform: [
                {
                    translateX: cardOffSet.value
                }
            ]

        }
    })

    useEffect(() => {
        cardOpacity.value = withTiming(1, { duration: 1000 })
        cardOffSet.value = withTiming(0, { duration: 1000 })

    }, [])


    return (
        <AnimationContainer  {...rest} style={animatedStyle}>
            {children}
        </AnimationContainer>
    )
}
