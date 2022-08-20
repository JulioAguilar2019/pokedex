import { View } from "react-native";
import styled, { css } from "styled-components/native";
import { TypeName } from ".";

type TypeProps = {
  type: TypeName;
};

export const Header = styled.View<TypeProps>`
  ${({ theme, type }) => css`
    background-color: ${theme.colors.typesOpacity[type]};
    height: 340px;
    padding: 20px;
    flex-direction: row;
    align-items: center;
    position: relative;
  `}
`;

export const BackButton = styled.TouchableOpacity`
  align-items: flex-start;
  margin-top: -220px;
`;

export const ContentImage = styled.View`
  position: relative;
`;

export const CircleImage = styled.Image`
  width: 125px;
  height: 125px;
  position: absolute;
`;

export const PokemonImage = styled.Image`
  width: 125px;
  height: 125px;
`;

export const Content = styled.View`
  margin-left: 30px;
`;

export const PokemonId = styled.Text`
  ${({ theme }) => css`
    font-size: 20px;
    line-height: 19px;
    font-style: normal;
    font-weight: bold;
    color: ${theme.colors.texts.Number};
  `}
`;

export const PokemonName = styled.Text`
  ${({ theme }) => css`
    text-transform: capitalize;
    font-style: normal;
    font-weight: bold;
    font-size: 32px;
    line-height: 38px;
    color: ${theme.colors.texts.White};
  `}
`;

export const PokemonTypeContainer = styled.View`
  flex-direction: row;
`;

export const PokemonTypes = styled.View<TypeProps>`
  ${({ theme, type }) => css`
    width: 61px;
    height: 25px;
    background: ${theme.colors.types[type]};
    border-radius: 3px;
    justify-content: center;
    align-items: center;
    margin-left: 5px;
    margin-top: 10px;
  `}
`;

export const PokemonTypeText = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.texts.White};
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;
    font-style: normal;
    text-transform: capitalize;
  `}
`;

export const Container = styled.View`
  ${({ theme }) => css`
    flex: 1;
    padding: 20px;
    background-color: ${theme.colors.background};
    border-top-right-radius: 40px;
    border-top-left-radius: 40px;
    margin-top: -40px;
  `}
`;

export const Title = styled.Text<TypeProps>`
  ${({ theme, type }) => css`
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 19px;
    padding: 20px;
    color: ${theme.colors.types[type]};
  `}
`;

export const StatsBar = styled.View`
  width: 100%;
  padding: 10px 20px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Attributes = styled.Text`
  ${({ theme }) => css`
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;

    text-transform: capitalize;
    color: ${theme.colors.texts.Gray};
  `}
`;

export const AttributesValues = styled.Text`
  ${({ theme }) => css`
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
    text-align: right;
    color: ${theme.colors.texts.Gray};
    margin-left: 20px;
  `}
`;

export const Abilities = styled.Text`
  ${({ theme }) => css`
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
    padding: 10px 20px;
    color: ${theme.colors.texts.Gray};
    text-transform: capitalize;
  `}
`;
