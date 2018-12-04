import gql from 'graphql-tag'

export default gql`
  mutation subscribe($name: String!, $email: String!) {
    createSubscriber(data: {
      name: $name,
      email: $email,
    }) {
      email
    }
  }
`
