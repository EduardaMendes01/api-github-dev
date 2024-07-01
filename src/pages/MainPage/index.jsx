import React, {useState} from 'react';
import { IoMdSearch } from "react-icons/io";

import { Container, Form, Input, Button } from "./styles";

import githubLogo from '../../assets/images/github-svgrepo-com (1).svg';

function MainPage() {
  const [login, setLogin] = useState('');

  return (
    <Container>
      <img
        src={githubLogo}
        height="150"
        alt="GitHub Logo"
      />
      <h1>API Github</h1>
      <Form>
        <Input
        placeholder="username"
        value={login}
        onChange={(event) =>
        setLogin(event.target.value)}/>
        <Button>
          <IoMdSearch size={42} to={`/${login}/repositories`} />
        </Button>
      </Form>
      <Form/>
    </Container>
  );
}

export default MainPage;
