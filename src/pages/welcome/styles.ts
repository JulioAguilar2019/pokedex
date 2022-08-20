import styled, { css } from "styled-components/native";

export const Container = styled.View`
  ${({ theme }) => css`
    flex: 1;
    background-color: ${theme.colors.types.electric};
  `}
`;

export const Content = styled.View`
  height: 70%;
  justify-content: center;
  align-items: center;
`;

export const Footer = styled.View`
  ${({ theme }) => css`
    justify-content: center;
    align-items: center;
    border-top-right-radius: 20px;
    border-top-left-radius: 20px;
    height: 30%;
    background: ${theme.colors.background};
    padding: 30px;
  `}
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: 25px;
    color: ${theme.colors.texts.Black};
  `}
`;

export const Creator = styled.Text`
  ${({ theme }) => css`
    font-size: 25px;
    color: ${theme.colors.texts.White};
  `}
`;

export const SubTitle = styled.Text`
  ${({ theme }) => css`
    font-size: 15px;
    margin-top: 20px;
    color: ${theme.colors.texts.Black};
  `}
`;
