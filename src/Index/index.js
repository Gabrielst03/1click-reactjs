import React from "react";

import { ContainerSC, TextoPrincipal, ButtonContainer } from "./style";
import { Navbar, Nav, Container} from "react-bootstrap";

import logo from "./logo1click.png";

import "bootstrap/dist/css/bootstrap.min.css";

function Index() {
  return (
    <>
      <Navbar
        className="mt-3 d-flex align-center justify-content-center"
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
            <Nav.Link className="text-danger" href="#home">
              Início
            </Nav.Link>
            <Nav.Link className="text-danger" href="#company">
              A Empresa
            </Nav.Link>
            <Nav.Link className="text-danger" href="#contact">
              Contato
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <ContainerSC>
        <TextoPrincipal>
          Serviço especializado em TIC - Tecnologia da Informação e Comunicação.
        </TextoPrincipal>

        <ButtonContainer>
            
        </ButtonContainer>

      </ContainerSC>
    </>
  );
}

export default Index;
