import React from 'react';

import { MdGroup, MdLocationCity, MdWork, MdLink } from 'react-icons/md';

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
        <Data class='info'>
          <MdGroup size={20} />
          30&nbsp;<i>followers</i>&nbsp;&middot;&nbsp;10&nbsp;<i>Following</i>
        </Data>
        <Data>
          <MdWork size={20} />
          Company
        </Data>
        <Data>
          <MdLocationCity size={20} />
          São Paulo
        </Data>
        <Data>
          <MdLink />
          <a href='https://www.linkedin.com/in/eduarda-mendes01/'>Linkedin Profile</a>
        </Data>
      </Inner>
    </Container>
  );
};

export default Profile;


