import React, { useState, useEffect } from 'react';

import Profile from './profile';
import Filter from './filter/index';
import Repositories from './repositories';

import { Loading, Container, Sidebar, Main} from './styles';

import { getUser, getLangsFrom } from '../../../services/api';

function RepositoriesPage() {

  const [user, setUser] = useState()
  const [currentLanguage, setCurrentlanguage] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      const [userResponse] = await Promise.all([
        getUser('EduardaMendes01'),
      ]);

      setUser(userResponse.date);

      setLoading(false);
    };

    loadData();
  }, []);

//  const user = {
//    login: "EduardaMendes01",
//    "name": "Eduarda Mendes",
//    avatar_url: "https://avatars.githubusercontent.com/u/163479227?v=4",
//    "followers": 96,
//    "following": 96,
//    "company": null,
//    "blog": "https://github.com/EduardaMendes01",
//    "location": "São Paulo, Brazil",
//  };

  // eslint-disable-next-line no-unused-vars
  const repositories = [
    {
      id: '1',
      name: 'Repo 1' ,
      description: 'Repo 1' ,
      html_url: 'https://github.com/EduardaMendes01/todo',
      language: 'Javascript'
    },
    {
      id: '2',
      name: 'Repo 2' ,
      description: 'Description' ,
      html_url: 'https://github.com/EduardaMendes01/todo-list-typescript',
      language: 'Typescript'
    },
    {
      id: '3',
      name: 'Repo 3' ,
      description: 'Description' ,
      html_url: 'https://github.com/EduardaMendes01/website-3d-effect-cats',
      language: 'Ruby'
    },
    {
      id: '4',
      name: 'Repo 4' ,
      description: 'Description' ,
      html_url: 'https://github.com/EduardaMendes01/website-3d-effect-cats',
      language: 'Python'
    },
    {
      id: '5',
      name: 'Repo 5' ,
      description: 'Description' ,
      html_url: 'https://github.com/EduardaMendes01/website-3d-effect-cats',
      language: 'Javascript'
    },
    {
      id: '6',
      name: 'Repo 6' ,
      description: 'Description' ,
      html_url: 'https://github.com/EduardaMendes01/website-3d-effect-cats',
      language: 'Javascript'
    },
  ];

  const languages = getLangsFrom(repositories);

  const onFilterClick = (language) => {
    setCurrentlanguage(language);
  };

  if(loading){
    return <Loading>Loading...</Loading>
  }

  return (
    <Container>
      <Sidebar>
        <Profile  user={user}/>
        <Filter
        languages={languages}
        currentLanguage={currentLanguage}
        onClick={onFilterClick} />
      </Sidebar>
      <Main>
        <Repositories
        repositories={repositories}
        currentLanguage={currentLanguage}/>
      </Main>
    </Container>
  );
};

export default RepositoriesPage;
