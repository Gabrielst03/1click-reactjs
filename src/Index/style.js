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
    width: 150px;
    height: 50px;
    border-radius: 10px;
    border: none;

    cursor: pointer;

    background-color: ${colors.primary};

    margin-top: 5%;
`;