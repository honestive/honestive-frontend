import React from 'react'
import {
  Container,
} from 'candour'
import Head from './Head'
import Navbar from './Navbar'
import Splash from './Splash'

export default () => (
  <Container
    background='url(splash-illustration.svg)'
    backgroundRepeat='no-repeat'
    backgroundPosition='top right'
    backgroundSize='50% 100%'
    minHeight='100vh'
  >
    <Head />
    <Navbar />
    <Splash />
  </Container>
)
