import React from "react";

import {
  ContainerSC,
  TextoPrincipal,
  ButtonContainer,
  TextoButton,
  HeaderColuna,
  TituloColuna,
  TextoColuna,
  Coluna,
  Row,
  NavText
} from "./style";

import { Navbar, Nav, Container } from "react-bootstrap";

import logo from "./logo1click.png";

import "bootstrap/dist/css/bootstrap.min.css";

function Index() {
  return (
    <>
      <Navbar
        className="mt-1 d-flex align-center justify-content-center"
        bg=""
        variant="light"
      >
        <Container>
          <Navbar.Brand href="#home">
            <img
              src={logo}
              width="150"
              height="150"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">
              <NavText>Início</NavText>
            </Nav.Link>
            <Nav.Link href="#company">
            <NavText>A Empresa</NavText>
            </Nav.Link>
            <Nav.Link href="#contact">
            <NavText>Contato</NavText>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <ContainerSC>
        <TextoPrincipal>
          Serviço especializado em TIC - Tecnologia da Informação e Comunicação.
        </TextoPrincipal>

        <ButtonContainer>
          <TextoButton href="https://google.com">Solicitar Proposta</TextoButton>
        </ButtonContainer>
      </ContainerSC>

      <Coluna>
        <HeaderColuna>
          <TituloColuna>A Empresa</TituloColuna>
        </HeaderColuna>

        <Row>
            <TextoColuna>
            A 1 Click é uma empresa que atua na area de manutenção de
            micro-computadores e infra-estrutura de redes. Para atender as
            demandas do mercado, a 1 Click vem crescendo e acompanhando os
            processos de expansão da tecnologia em empresas baianas, tendo como
            seu principal diferencial um diálogo aberto e franco com o seu
            cliente. Atualmente atendemos todas as demandas da área de tecnologia,
            de forma a inovar na prestação de suporte com agilidade e garantia da
            qualidade. Empresas de diferenciados ramos são parceiras da 1 Click,
            podendo destacar: Home Revestimentos (Revestimentos Acústicos), UNI
            EXPRESS (Financeira), Word Times (Curso de Inglês Avançado), Trindade
            & Almeida Advogados S/A, Higiclean Bahia (Higiclean Tecnologia em
            Higienização), entre outras. Nosso intuito é a busca constante de
            resolução das necessidades de comunicação e tecnológicas de nossos
            clientes. Trabalhamos com chamados sob demanda ou agendamento. Venha
            conhecer e se surpreender com os excelentes serviços prestados pela
            equipe da 1 Click TI. Sejam bem vindos ao mundo inovador em serviços
            tecnológicos!
            </TextoColuna>
        </Row>
      </Coluna>
    </>
  );
}

export default Index;
