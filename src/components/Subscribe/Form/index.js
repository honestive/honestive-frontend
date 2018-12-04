import React from 'react'
import {
  Formik,
  Form,
} from 'formik'
import {
  Container,
  Button,
  Text,
  useBreakpoints,
} from 'candour'
import Content from '../../Content'
import ValidatedInput from '../../ValidatedInput'
import initialValues from './lib/initialValues'
import validationSchema from './lib/validationSchema'

export default (props) => {
  const { small } = useBreakpoints()

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      {...props}
    >
      <Form>
        <Container alignItemsCenter displayFlex={!small} marginTop={2}>
          <ValidatedInput name='name' placeholder='Your Name' width='100%' marginRight={!small} marginBottom />
          <ValidatedInput name='email' placeholder='Email' width='100%' marginRight={!small} marginBottom />
          <Button minWidth={15} width='100%' type='submit' marginBottom>
            <Content id='cjke1juh3ncy10953uwy7h4t0' />
          </Button>
        </Container>
        <Text level={8} colorGrey textAlignCenter={small}>
          <Content id='cjke2476gne9209534gpm5r05' />
        </Text>
      </Form>
    </Formik>
  )
}
