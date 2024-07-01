import React from "react";
import { IoMdSearch } from "react-icons/io";
import { Container, Form, Input, Button } from "./styles";
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
      <Form>
        <Input placeholder="user" />
        <Button>
          <IoMdSearch size={42} />
        </Button>
      </Form>
      <Form/>
    </Container>
  );
}

export default MainPage;
