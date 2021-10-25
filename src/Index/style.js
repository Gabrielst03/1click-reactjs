import styled from "styled-components";

import "../Fonts/fonts.css";

import "./background.css";

import { colors } from "../themes/colors";

export const App = styled.div`
  max-width: 100%;
  background-image: url('data:image/jpeg;base64,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');
  background-repeat: no-repeat;
  background-size: cover;
  margin: 0;
  padding:0;
`;

export const ContainerSC = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  margin-top: 10%;
  margin-bottom: 30%;
`;

export const TextoPrincipal = styled.h3`
  font-family: "Poppins";
`;

export const ButtonContainer = styled.div`
  align-items: center;
  justify-content: center;
  width: 250px;
  height: 60px;
  border-radius: 40px;
  border: none;

  display: flex;

  cursor: pointer;

  background-color: ${colors.primary};

  margin-top: 5%;

  transition: ease all 0.3s;

  &:hover {
    background-color: ${colors.secondary};
  }
`;

export const TextoButton = styled.span`
  font-size: 16px;
  color: white;
  font-family: "Poppins";
  font-weight: 600;
`;

export const HeaderColuna = styled.div`
  display: flex;
  flex-direction: row;
`;

export const TituloColuna = styled.h3`
  font-family: "Roboto";
  color: ${colors.primary};

  font-size: 30px;
  margin-left: 10px;
`;

export const TextoColuna = styled.span`
  padding: 16px;

  color: #808080;
  font-family: "Poppins";

  text-align: left;
`;

export const Coluna = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  padding: 0 250px;

  margin-top: 10%;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

export const NavText = styled.p`
  color: ${colors.primary};

  font-weight: 600;

  margin-top: 20px;

  font-family: "Poppins";

  transition: ease all .2s;

  &:hover {
    color: ${colors.secondary};

  }
`;

export const Items = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;

  align-items: center;
`;

export const ItemImage = styled.img``;

export const ItemTitle = styled.h3`
  margin-left: 4px;
  font-family: "Poppins";
  font-size: 20px;
`;

export const ItemText = styled.span`
  color: #808080;
  font-size: 12px;
`;

export const ItemsContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const CardItem = styled.div`
  width: 70px;
  height: 70px;
  background-color: #dcdcdc;
  border-radius: 8px;

  display: flex;
  align-items: center;
  justify-content: center;
`;
