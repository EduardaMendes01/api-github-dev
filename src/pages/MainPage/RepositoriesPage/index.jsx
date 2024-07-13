import React from 'react';

import Profile from './profile';
import Filter from './filter/index';

import {Container, Sidebar, Main} from './styles';

function RepositoriesPage() {
  return (
    <Container>
      <Sidebar>
        <Profile />
        <Filter />
      </Sidebar>
      <Main>
        Main
      </Main>
    </Container>
  );
};

export default RepositoriesPage;
