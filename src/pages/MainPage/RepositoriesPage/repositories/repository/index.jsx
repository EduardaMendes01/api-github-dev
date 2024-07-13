import React from 'react'

import { Container, Name, Description, Footer , Lang , Link } from './styles'

function Repository() {
  return (
    <Container color='#E03131'>
      <Name>Repository name</Name>
      <Description>Repository description</Description>
      <Footer color='#E03131'>
    <Lang>Repository Lang</Lang>
    <Link href='https://github.com/EduardaMendes01' target='_blank'>SEE</Link>
      </Footer>
    </Container>
  )
}

export default Repository;
