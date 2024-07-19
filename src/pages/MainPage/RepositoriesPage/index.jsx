import React from 'react';

import Profile from './profile';
import Filter from './filter/index';
import Repositories from './repositories';

import {Container, Sidebar, Main} from './styles';

function RepositoriesPage() {
  const user = {
    login: "EduardaMendes01",
    "name": "Eduarda Mendes",
    avatar_url: "https://avatars.githubusercontent.com/u/163479227?v=4",
    "followers": 96,
    "following": 96,
    "company": null,
    "blog": "https://github.com/EduardaMendes01",
    "location": "São Paulo, Brazil",
  }

  return (
    <Container>
      <Sidebar>
        <Profile  user={user}/>
        <Filter />
      </Sidebar>
      <Main>
        <Repositories />
      </Main>
    </Container>
  );
};

export default RepositoriesPage;
