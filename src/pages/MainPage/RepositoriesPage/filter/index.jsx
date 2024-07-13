import React from 'react';
import { Container, Selector, Cleaner } from './styled';

function Filter() {
  const langs =[
    {name: 'Javascript', count: 5, color: 'yellow'},
    {name: 'Python', count: 5, color: 'blue'},
    {name: 'Ruby', count: 5, color: 'red'}
  ];

  const selectors = langs.map(({name, count, color}) => (
    <Selector key={name.toLowerCase} color={color}>
      <span>{name}</span>
      <span>{count}</span>
    </Selector>
  ));

  return (
    <Container>
      {selectors}
      <Cleaner>
        Clean
      </Cleaner>
    </Container>
  )
}

export default Filter;
