import React from 'react';
import { Container, Header, Avatar, Login, Name, Inner, Data } from './styles';

function Profile() {
  return (
    <Container>
      <Header>
        <Avatar src='https://avatars.githubusercontent.com/u/163479227?v=4'/>
        <Login>EduardaMendes01</Login>
        <Name>Eduarda Mendes</Name>
      </Header>
      <Inner>
        <Data>
          30 followers 10 Following
        </Data>
        <Data>
          Company
        </Data>
        <Data>
          São Paulo
        </Data>
        <Data>
          <a href='https://www.linkedin.com/in/eduarda-mendes01/'>Linkedin Profile</a>
        </Data>
      </Inner>
    </Container>
  );
};

export default Profile;


