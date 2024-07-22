import React from 'react'
import PropTypes from 'prop-types';

import { Container, Name, Description, Footer , Lang , Link } from './styles'

function Repository({ repository }) {
  return (
    <Container color='#E03131'>
      <Name>{repository.name}</Name>
      <Description>{repository.description}</Description>
      <Footer color='#E03131'>
    <Lang>{repository.language}</Lang>
    <Link href={repository.html_url} target='_blank'>SEE</Link>
      </Footer>
    </Container>
  )
}

Repository.propTypes = {
  repository: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    html_url: PropTypes.string.isRequired,
    language: PropTypes.number,
  }).isRequired
}

export default Repository;
