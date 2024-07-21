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

  const repositories = [
    { name: 'Repo 1' ,
      description: 'Repo 1' ,
      html_url: 'https://github.com/EduardaMendes01/todo',
      language: 'Javacsript'
    },
    { name: 'Repo 2' ,
      description: 'Description' ,
      html_url: 'https://github.com/EduardaMendes01/todo-list-typescript',
      language: 'Typescript'
    },
    { name: 'Repo 3' ,
      description: 'Description' ,
      html_url: 'https://github.com/EduardaMendes01/website-3d-effect-cats',
      language: 'Javacsript'
    },
    { name: 'Repo 4' ,
      description: 'Description' ,
      html_url: 'https://github.com/EduardaMendes01/website-3d-effect-cats',
      language: 'Python'
    },
    { name: 'Repo 5' ,
      description: 'Description' ,
      html_url: 'https://github.com/EduardaMendes01/website-3d-effect-cats',
      language: 'Javacsript'
    },
    { name: 'Repo 6' ,
      description: 'Description' ,
      html_url: 'https://github.com/EduardaMendes01/website-3d-effect-cats',
      language: 'Javacsript'
    },
  ];

  // Calculo de filters

  const languages =[
    {name: 'Javascript', count: 5, color: 'yellow'},
    {name: 'Python', count: 5, color: 'blue'},
    {name: 'Ruby', count: 5, color: 'red'}
  ];

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
