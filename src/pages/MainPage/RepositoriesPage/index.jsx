import React, { useState, useEffect } from 'react';

import Profile from './profile';
import Filter from './filter/index';
import Repositories from './repositories';

import { Loading, Container, Sidebar, Main} from './styles';

import { getUser, getRepos, getLangsFrom } from '../../../services/api';

function RepositoriesPage() {

  const [user, setUser] = useState();
  const [repositories, setRepositories] = useState();
  const [languages, setLanguages] = useState(true);
  const [currentLanguage, setCurrentlanguage] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      const [userResponse, repositoriesResponse] = await Promise.all([
        getUser('EduardaMendes01'),
        getRepos('EduardaMendes01')
      ]);

      setUser(userResponse.date);
      setRepositories(repositoriesResponse.data);
      setLanguages( getLangsFrom(repositoriesResponse.data));

      setLoading(false);
    };

    loadData();
  }, []);

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
