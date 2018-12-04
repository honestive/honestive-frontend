import React from 'react'
import {
  Container,
  Heading,
  Text,
  useBreakpoints,
} from 'candour'

import Subscribe from './Subscribe'
import Content from './Content'

export default () => {
  const { small } = useBreakpoints()

  return (
    <Container
      padding={2}
      paddingBottom={5}
      paddingTop={3}
      limited
    >
      <Content component={Heading} level={small ? 2 : 1} id='cjke0ion4nad809531yp0xg56' />
      <Content component={Text} level={4} paddingTop id='cjke12hndnbq90953kjtgk603' />

      <Subscribe />
    </Container>
  )
}
