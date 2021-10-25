import React, {useState} from 'react'

import styled from 'styled-components'


export const Modal = ({showModal, setShowModal}) => {
    return(
        <>
            {showModal ? <ModalContainer></ModalContainer> : null}
        </>
    );
}


const ModalContainer = styled.div`
    width: 30%;
    height: 500px;

    background-color: white;
`;