import styled from 'styled-components';

import '../Fonts/fonts.css';

import { colors } from '../themes/colors';

export const ContainerSC = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    margin-top: 10%;
`;

export const TextoPrincipal = styled.h3`
    font-family: 'Poppins';
`;

export const ButtonContainer =  styled.div`
    align-items: center;
    justify-content: center;
    width: 200px;
    height: 50px;
    border-radius: 10px;
    border: none;

    display: flex;

    cursor: pointer;

    background-color: ${colors.primary};

    margin-top: 5%;

    transition: ease all .3s;

    &:hover{
        background-color: ${colors.secondary};
    }
`;

export const TextoButton = styled.span`
    font-size: 16px;
    color: white;
    font-family: 'Poppins';
    font-weight: 600;
`;

export const HeaderColuna = styled.div`
    display: flex;
    flex-direction: row;
`;

export const TituloColuna = styled.h3`
    font-family: 'Roboto';
    color: ${colors.primary};
`;

export const TextoColuna = styled.span`
    padding: 16px;

    color: #808080;
    font-family: 'Poppins';
    
    text-align: center;
`;

export const Coluna = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    padding: 0 250px;

    margin-top: 30%;
`;

export const Row = styled.div`
    display: flex;
    flex-direction: row;
`;

export const NavText = styled.p`
    color: ${colors.primary};

    margin-top: 20px;

    font-family: 'Poppins';
`;