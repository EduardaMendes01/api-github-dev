import React from 'react';

import Profile from './profile';
import Filter from './filter/index';
import Repositories from './repositories';

import {Container, Sidebar, Main} from './styles';

import { getLangsFrom } from '../../../services/api';

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
  };

  // eslint-disable-next-line no-unused-vars
  const repositories = [
    {
      name: 'Repo 1' ,
      description: 'Repo 1' ,
      html_url: 'https://github.com/EduardaMendes01/todo',
      language: 'Javascript'
    },
    {
      name: 'Repo 2' ,
      description: 'Description' ,
      html_url: 'https://github.com/EduardaMendes01/todo-list-typescript',
      language: 'Typescript'
    },
    {
      name: 'Repo 3' ,
      description: 'Description' ,
      html_url: 'https://github.com/EduardaMendes01/website-3d-effect-cats',
      language: 'Ruby'
    },
    {
      name: 'Repo 4' ,
      description: 'Description' ,
      html_url: 'https://github.com/EduardaMendes01/website-3d-effect-cats',
      language: 'Python'
    },
    {
      name: 'Repo 5' ,
      description: 'Description' ,
      html_url: 'https://github.com/EduardaMendes01/website-3d-effect-cats',
      language: 'Javascript'
    },
    {
      name: 'Repo 6' ,
      description: 'Description' ,
      html_url: 'https://github.com/EduardaMendes01/website-3d-effect-cats',
      language: 'Javascript'
    },
  ];

  const languages = getLangsFrom(repositories);

  return (
    <Container>
      <Sidebar>
        <Profile  user={user}/>
        <Filter languages={languages} />
      </Sidebar>
      <Main>
        <Repositories />
      </Main>
    </Container>
  );
};

export default RepositoriesPage;
