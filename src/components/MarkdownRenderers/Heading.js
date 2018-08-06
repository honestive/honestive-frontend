import React from 'react'
import { Heading } from 'candour'

export default ({ children, ...rest }) => (
  <Heading {...rest}>
    {children}
  </Heading>
)
