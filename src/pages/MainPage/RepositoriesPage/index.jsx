import React from 'react';

import Profile from './profile';

import {Container, Sidebar, Main} from './styles';

function RepositoriesPage() {
  return (
    <Container>
      <Sidebar>
        <Profile />
      </Sidebar>
      <Main>
        Main
      </Main>
    </Container>
  );
};

export default RepositoriesPage;
