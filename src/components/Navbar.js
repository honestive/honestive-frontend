import React from 'react'
import step from '@candour/step'
import {
  Container,
  Text,
} from 'candour'

export default () => (
  <Container padding>
    <Text bold flex alignItemsCenter>
      <Container component='img' src='/logo.svg' paddingRight style={styles.logo} /> Honestive
    </Text>
  </Container>
)

const styles = {
  logo: {
    height: step(2),
    width: step(2),
  },
}
