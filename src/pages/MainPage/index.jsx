import React from "react";
import { Container, Form } from "./styles";
import githubLogo from '../../assets/images/github-svgrepo-com (1).svg'; // Caminho correto do SVG

function MainPage() {
  return (
    <Container>
      <img
        src={githubLogo}
        height="150"
        alt="GitHub Logo"
      />
      <h1>API Github</h1>
      <Form    />
    </Container>
  );
}

export default MainPage;
