import styled, { css } from "styled-components/native";

type TypePokemon = {
  type: string;
};

export const PokemonCard = styled.TouchableOpacity<TypePokemon>`
  ${({ theme, type }) => css`
    background: ${theme.colors.typesOpacity[type]};
    border-radius: 10px;
    margin: 20px 5px 0px 5px;
    flex-direction: row;
    padding: 10px;
    width: 48%;
  `}
`;

export const LeftSide = styled.View`
  width: 70%;
  position: relative;
`;

export const PokemonId = styled.Text`
  ${({ theme }) => css`
    font-weight: bold;
    font-size: 14px;
    line-height: 14px;
    color: ${theme.colors.texts.Number};
    margin-top: 2px;
  `}
`;

export const PokemonName = styled.Text`
  ${({ theme }) => css`
    font-weight: bold;
    font-size: 18px;
    line-height: 30px;
    margin-top: 5px;
    text-transform: capitalize;
    color: ${theme.colors.texts.White};
  `}
`;

export const PokemonContentTypes = styled.View`
  flex-direction: column;
  width: 60%;
`;

export const PokemonType = styled.View<TypePokemon>`
  ${({ theme, type }) => css`
  background: ${theme.colors.types[type]};
 padding: 5px;
 width 65px;
 height: 25px;
 border-radius: 3px;
 margin-left: 5px;
 margin-top: 5px;
 justify-content: center;
 align-items: center;

    `}
`;

export const PokemonTextType = styled.Text`
  ${({ theme }) => css`
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;
    color: ${theme.colors.texts.White};
    text-transform: capitalize;
  `}
`;

export const RightSide = styled.View`
  ${({ theme }) => css`
    justify-content: center;
    align-items: center;
    width: 50%;
    position: relative;
  `}
`;

export const ImagePokemon = styled.Image`
  /* margin-top: -50px; */
  margin-left: -50px;
  margin-bottom: -30px;
  width: 85px;
  height: 85px;
`;

export const ImagePokeBall = styled.Image`
  position: absolute;
  left: -25px;
  width: 80px;
  height: 80px;
`;
