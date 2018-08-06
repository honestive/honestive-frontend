import React from 'react'
import fluid from '@candour/fluid'
import {
  Container,
  Text,
} from 'candour'

export default () => (
  <Container displayFlex padding={2}>
    <Text component='a' href='/' level={2} fontWeight500 displayFlex alignItemsCenter>
      <Container component='img' src='/logo.svg' paddingRight style={styles.logo} /> Honestive
    </Text>
  </Container>
)

const styles = {
  logo: {
    height: fluid(30, 40),
    width: fluid(30, 40),
  },
}
