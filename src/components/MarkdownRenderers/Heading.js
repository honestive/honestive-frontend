import React from 'react'
import { Headline } from 'candour'

export default ({ children, ...rest }) => (
  <Headline {...rest}>
    {children}
  </Headline>
)
