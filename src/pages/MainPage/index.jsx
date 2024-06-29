import React from "react";
import { Container } from "./styles";
import githubLogo from '../../assets/images/github-svgrepo-com (1).svg'; // Caminho correto do SVG

function MainPage() {
  return (
    <Container>
      <img
        src={githubLogo}
        height="256"
        alt="GitHub Logo"
      />
      <h1>API Github</h1>
      <p>Esse é o template typescript básico da Dev Samurai para React.</p>
    </Container>
  );
}

export default MainPage;
